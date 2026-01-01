import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";


const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-cyan-50 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl rounded-3xl">
        <div className="card-body p-8">

          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold text-[#03373D]">
              Create Account
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              Join us and start your journey today
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            {/* Name */}
            <div>
              <label className="label text-sm font-medium">Your Name</label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="John Doe"
                className="input input-bordered w-full rounded-xl focus:border-primary"
              />
              {errors.name && (
                <p className="text-xs text-red-500 mt-1">
                  Name is required
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="label text-sm font-medium">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="you@example.com"
                className="input input-bordered w-full rounded-xl focus:border-primary"
              />
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">
                  Email is required
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="label text-sm font-medium">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                })}
                placeholder="••••••••"
                className="input input-bordered w-full rounded-xl focus:border-primary"
              />
              {errors.password?.type === "required" && (
                <p className="text-xs text-red-500 mt-1">
                  Password is required
                </p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-xs text-red-500 mt-1">
                  Password must be at least 6 characters
                </p>
              )}
            </div>

            <button className="btn btn-primary text-black w-full rounded-full mt-4 hover:scale-[1.02] transition">
              Create Account
            </button>
          </form>

          <div className="divider text-xs text-gray-400 my-6">
            OR SIGN UP WITH
          </div>

          {/* Social Login */}
          <SocialLogin />

          {/* Login Redirect */}
          <p className="text-center text-sm mt-6 text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-primary font-semibold hover:underline"
            >
              Login here
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Register;
