import React from "react";
import { useForm, useWatch } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    control,
  } = useForm();

  const { user } = useAuth();
  const axiosSecure = useAxiosSecure()
  const navigate = useNavigate();


  const serviceCenters = useLoaderData();


  // regions
  const regions = [...new Set(serviceCenters.map(c => c.region))];

  // watch values
  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });
  const senderDistrict = useWatch({ control, name: "senderDistrict" });
  const receiverDistrict = useWatch({ control, name: "receiverDistrict" });

  // districts by region
  const districtsByRegion = (region) => {
    if (!region) return [];
    return serviceCenters
      .filter(c => c.region === region)
      .map(c => c.district);
  };

  // covered area by district
  const coveredAreasByDistrict = (district) => {
    if (!district) return [];
    const center = serviceCenters.find(c => c.district === district);
    return center?.covered_area || [];
  };

  const handleSendParcel = (data) => {
    console.log(data);

        //   hisabpati......
    const isDocument = data.parcelType === 'document';
        const isSameDistrict = data.senderDistrict === data.receiverDistrict;
        const parcelWeight = parseFloat(data.parcelWeight);

        let cost = 0;
        if (isDocument) {
            cost = isSameDistrict ? 60 : 80;
        }
        else {
            if (parcelWeight < 3) {
                cost = isSameDistrict ? 110 : 150;
            }
            else {
                const minCharge = isSameDistrict ? 110 : 150;
                const extraWeight = parcelWeight - 3;
                const extraCharge = isSameDistrict ? extraWeight * 40 : extraWeight * 40 + 40;

                cost = minCharge + extraCharge;
            }
        }
        data.cost = cost;

         Swal.fire({
            title: "Agree with the Cost?",
            text: `You will be charged ${cost} taka!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm and Continue Payment!"
        }).then((result) => {
            if (result.isConfirmed) {

                // save the parcel info to the database
                axiosSecure.post('/parcels', data)
                    .then(res => {
                        console.log('after saving parcel', res.data);
                        if (res.data.insertedId) {
                            // navigate('/dashboard/my-parcels')
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Parcel has created. Please Pay",
                                showConfirmButton: false,
                                timer: 2500
                            });
                        }
                    })


            }
        });
  };

  return (
    <div className="mt-5 mb-5">
      <h2 className="text-5xl font-bold text-center">Send A Parcel</h2>

      <form
        onSubmit={handleSubmit(handleSendParcel)}
        className="mt-12 p-6 bg-base-100 rounded-xl shadow-md text-black"
      >
        {/* Parcel Type */}
        <div className="flex gap-6">
          <label className="label cursor-pointer">
            <input
              type="radio"
              {...register("parcelType")}
              value="document"
              className="radio"
              defaultChecked
            />
            <span className="ml-2">Document</span>
          </label>

          <label className="label cursor-pointer">
            <input
              type="radio"
              {...register("parcelType")}
              value="non-document"
              className="radio"
            />
            <span className="ml-2">Non-Document</span>
          </label>
        </div>

        {/* Parcel Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          <div>
            <label className="label">Parcel Name</label>
            <input {...register("parcelName")} className="input w-full" />
          </div>

          <div>
            <label className="label">Parcel Weight (kg)</label>
            <input
              type="number"
              {...register("parcelWeight")}
              className="input w-full"
            />
          </div>
        </div>

        {/* Sender & Receiver */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Sender */}
          <fieldset className="fieldset">
            <h4 className="text-2xl font-semibold mb-4">Sender Details</h4>

            <input
              {...register("senderName")}
              defaultValue={user?.displayName}
              className="input w-full mb-3"
              placeholder="Sender Name"
            />

            <input
              {...register("senderEmail")}
              defaultValue={user?.email}
              className="input w-full mb-3"
              placeholder="Sender Email"
            />

            {/* Region */}
            <select {...register("senderRegion")} className="select w-full mb-3">
              <option disabled selected>
                Pick a region
              </option>
              {regions.map((r, i) => (
                <option key={i}>{r}</option>
              ))}
            </select>

            {/* District */}
            <select
              {...register("senderDistrict")}
              className="select w-full mb-3"
            >
              <option disabled selected>
                Pick a district
              </option>
              {districtsByRegion(senderRegion).map((d, i) => (
                <option key={i}>{d}</option>
              ))}
            </select>

            {/* Covered Area */}
            <select
              {...register("senderCoveredArea")}
              className="select w-full mb-3"
            >
              <option disabled selected>
                Pick covered area
              </option>
              {coveredAreasByDistrict(senderDistrict).map((a, i) => (
                <option key={i}>{a}</option>
              ))}
            </select>

            <input
              {...register("senderAddress")}
              className="input w-full"
              placeholder="Sender Address"
            />
          </fieldset>

          {/* Receiver */}
          <fieldset className="fieldset">
            <h4 className="text-2xl font-semibold mb-4">Receiver Details</h4>

            <input
              {...register("receiverName")}
              className="input w-full mb-3"
              placeholder="Receiver Name"
            />

            <input
              {...register("receiverEmail")}
              className="input w-full mb-3"
              placeholder="Receiver Email"
            />

            <select
              {...register("receiverRegion")}
              className="select w-full mb-3"
            >
              <option disabled selected>
                Pick a region
              </option>
              {regions.map((r, i) => (
                <option key={i}>{r}</option>
              ))}
            </select>

            <select
              {...register("receiverDistrict")}
              className="select w-full mb-3"
            >
              <option disabled selected>
                Pick a district
              </option>
              {districtsByRegion(receiverRegion).map((d, i) => (
                <option key={i}>{d}</option>
              ))}
            </select>

            {/* Covered Area */}
            <select
              {...register("receiverCoveredArea")}
              className="select w-full mb-3"
            >
              <option disabled selected>
                Pick covered area
              </option>
              {coveredAreasByDistrict(receiverDistrict).map((a, i) => (
                <option key={i}>{a}</option>
              ))}
            </select>

            <input
              {...register("receiverAddress")}
              className="input w-full"
              placeholder="Receiver Address"
            />
          </fieldset>
        </div>

        <button className="btn btn-primary mt-8 text-black">
          Send Parcel
        </button>
      </form>
    </div>
  );
};

export default SendParcel;
