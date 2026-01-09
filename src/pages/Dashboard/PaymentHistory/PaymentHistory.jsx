import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import {
  FaCreditCard,
  FaDollarSign,
  FaCheckCircle,
} from "react-icons/fa";
import {
  MdAccessTime,
  MdOutlineReceiptLong,
  MdPayment,
} from "react-icons/md";
import Loading from '../../Loading/Loading';

const PaymentHistory = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [], isLoading }=useQuery({
        queryKey: ['payments', user.email],
         queryFn: async () => {
            const res = await axiosSecure.get(`/payments?email=${user.email}`)
            return res.data;
        }
    })

     const formatDate = (iso) =>
    new Date(iso).toLocaleString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

  if (isLoading) {
    return <Loading/>;
  }
    return (
       <div className="p-4 md:p-6 bg-base-100 rounded-2xl shadow">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <FaCreditCard className="text-3xl text-primary" />
        <h2 className="text-3xl font-bold">
          Payment History ({payments.length})
        </h2>
      </div>

      {/* Empty state */}
      {payments.length === 0 && (
        <div className="flex flex-col items-center py-14 text-gray-500">
          <MdPayment className="text-6xl mb-4" />
          <p>No payment records found</p>
        </div>
      )}

      {/* ===================== Desktop Table ===================== */}
      {payments.length > 0 && (
        <div className="hidden md:block overflow-x-auto">
          <table className="table w-full border border-base-200 rounded-lg">
            <thead className="bg-base-200 text-base">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Paid Time</th>
                <th>Transaction</th>
              </tr>
            </thead>

            <tbody>
              {payments.map((p, i) => (
                <tr key={p._id} className="hover">
                  <td>{i + 1}</td>

                  <td className="font-medium">
                    {p.name || user?.displayName || "N/A"}
                  </td>

                  <td className="font-semibold text-green-600">
                    <div className="flex items-center gap-1">
                      <FaDollarSign /> {p.amount.toFixed(2)}
                    </div>
                  </td>

                  <td>
                    <span className="inline-flex items-center gap-1 text-green-600 font-medium">
                      <FaCheckCircle /> Paid
                    </span>
                  </td>

                  <td className="text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <MdAccessTime />
                      {formatDate(p.paid_at)}
                    </div>
                  </td>

                  <td>
                    <div className="max-w-[220px] overflow-x-auto">
                      <span className="font-mono text-xs bg-base-200 px-2 py-1 rounded whitespace-nowrap">
                        {p.transactionId}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* ===================== Mobile Card View ===================== */}
      <div className="md:hidden space-y-4">
        {payments.map((p) => (
          <div
            key={p._id}
            className="border border-base-200 rounded-xl p-4 shadow-sm"
          >
            <div className="flex justify-between items-center mb-2">
              <p className="font-semibold">
                {p.name || user?.displayName || "N/A"}
              </p>
              <span className="text-green-600 font-semibold flex items-center gap-1">
                <FaDollarSign /> {p.amount}
              </span>
            </div>

            <div className="text-sm text-gray-500 space-y-1">
              <p className="flex items-center gap-1">
                <FaCheckCircle className="text-green-600" /> Paid
              </p>

              <p className="flex items-center gap-1">
                <MdAccessTime /> {formatDate(p.paid_at)}
              </p>

              <div className="flex items-center gap-1">
                <MdOutlineReceiptLong />
                <span className="font-mono text-xs break-all">
                  {p.transactionId}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default PaymentHistory;