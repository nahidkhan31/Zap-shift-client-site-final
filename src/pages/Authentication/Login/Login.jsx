import React from "react";
import { useForm } from "react-hook-form";
import SocialLogin from "../SocialLogin/SocialLogin";
import { Link } from "react-router";

const Login = () => {
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
            <h1 className="text-4xl font-bold text-[#03373D]">Welcome Back</h1>
            <p className="text-sm text-gray-500 mt-2">
              Please login to your account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                <p className="text-xs text-red-500 mt-1">Email is required</p>
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

            {/* Forgot */}
            <div className="flex justify-end">
              <Link className="text-xs text-primary hover:underline">
                Forgot password?
              </Link>
            </div>

            {/* Button */}
            <button className="btn btn-primary text-black w-full rounded-full mt-4 hover:scale-[1.02] transition">
              Login
            </button>
          </form>

          <div className="divider text-xs text-gray-400 my-6">
            OR CONTINUE WITH
          </div>

          {/* Social Login */}
          <SocialLogin />

          {/* Register */}
          <p className="text-center text-sm mt-6 text-gray-600">
            New here?{" "}
            <Link
              to="/register"
              className="text-primary font-semibold hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
