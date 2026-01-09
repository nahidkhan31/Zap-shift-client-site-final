import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import {  useNavigate, useParams } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Loading/Loading';
import useAuth from '../../../hooks/useAuth';
import { set } from 'react-hook-form';
import Swal from 'sweetalert2';


const PaymentForm = () => {
    const {parcelId}= useParams();
    const stripe=useStripe();
    const elements= useElements();
    const axiosSecure = useAxiosSecure();
    const {user}= useAuth();
    const navigate = useNavigate();
    const [error, setError]= useState('');
    console.log(user.email)

    const{ isPending, isError, data: parcelInfo={},} = useQuery ({
        queryKey: ['parcels', parcelId],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/parcels/${parcelId}`)
            return res.data;
        }
        
    })
    if (isPending){
            return <Loading/>
        }
        if (isError){
            return <span>Error: {error.message}</span>
        }

        // console.log(parcelInfo)
        const amount = parcelInfo.cost
        const amountInCents = amount*100

    const handleSubmit = async (e)=>{
        e.preventDefault();
        // step:01 card information newa....
        if(!stripe || !elements){
            return;
        }
        const card = elements.getElement(CardElement)
        if(!card){
            return;
        }
        const {error, paymentMethod}= await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if(error){
            setError(error.message)
            // console.log('error', error)
        }
        else{
            console.log('payment method', paymentMethod)
            // step:02 create payment...
        const res = await axiosSecure.post('/create-payment-intent', {
            amountInCents,
            parcelId
        })

        const clientSecret = res.data.clientSecret;
        //  step:03 confirm payment...
            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                    billing_details: {
                        name: user.displayName,
                        email: user.email
                    }
                }
            })
            
            if(result.error){
                setError(result.error.message)
            }
            else{
                setError('');
                if(result.paymentIntent.status === 'succeeded'){
                    console.log('payment succeeded!')
                    const transactionId = result.paymentIntent.id
                    // step-4 mark parcel paid also create payment history
                    const paymentData = {
                        parcelId,
                        email: user.email,
                        name: user.displayName,
                        amount,
                        transactionId: transactionId,
                        paymentMethod: result.paymentIntent.payment_method_types

                    }
                    const paymentRes = await axiosSecure.post('/payments', paymentData);
                    if(paymentRes.data.insertedId){
                        await Swal.fire({
                            icon: 'success',
                            title: "Payment Successful!",
                            html: `<strong> Transaction ID:</strong> <code>${transactionId}</code>`,
                            confirmButtonText: 'Go to My Parcels'
                        });
                        navigate('/dashboard/my-parcels')
                    }
                }
            }
        }

    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit} className='space-y-4 bg-white p-6 rounded-xl shadow-md w-full max-w-md mx-auto'>
                <CardElement className='p-2 border rounded'>
                   
                </CardElement>
                 <button 
                    className='btn btn-primary w-full text-green-600'
                    type='submit'
                     disabled={!stripe}>
                      Pay ${amount}
                    </button>
                    {
                       error && <p className='text-red-500'>{error}</p> 
                    }
            </form>
        </div>
    );
};

export default PaymentForm;