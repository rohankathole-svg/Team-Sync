import React from "react";
import { useAuth } from "../../hooks/useAuth";
import {
  User,
  Mail,
  Lock,
  Sparkles,
  CircleCheck,
  Grid3X3,
} from "lucide-react";


const RegisterPage = () => {
  let { register, handleSubmit, errors, onRegisterSubmit,navigate } = useAuth();

  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white flex items-center justify-center px-4 py-8">

      {/* Main Container */}
      <div className="w-full max-w-[970px] min-h-[650px] border border-[#34343c] rounded-lg overflow-hidden bg-[#111116] shadow-2xl flex flex-col">

        {/* Main Content */}
        <div className="flex flex-1">

          {/* ================= LEFT PANEL ================= */}
          <div className="hidden md:flex md:w-[41%] bg-gradient-to-b from-[#111632] via-[#111632] to-[#0f101d] border-r border-[#252638] flex-col justify-between p-7">

            {/* Logo */}
            <div>
              <h2 className="text-[14px] font-bold text-white">
                Team-Sync
              </h2>
            </div>

            {/* Marketing Content */}
            <div className="max-w-[310px]">

              <div className="flex items-center gap-2 mb-4">
                <Sparkles
                  size={15}
                  className="text-purple-400 fill-purple-400"
                />

                <span className="text-[9px] font-bold tracking-[2px] text-purple-300 uppercase">
                  Next-gen Intelligence
                </span>
              </div>

              <h1 className="text-[28px] leading-[1.05] font-bold mb-4">
                Accelerate your team's
                <br />
                intelligence.
              </h1>

              <p className="text-[12px] leading-5 text-gray-400">
                Connect your enterprise data to our specialized AI
                models and unlock unparalleled strategic insights
                in seconds.
              </p>

              {/* Stats */}
              <div className="flex gap-8 mt-8">

                <div>
                  <p className="text-[16px] font-bold">99.9%</p>
                  <p className="text-[8px] text-gray-500">
                    Uptime SLA
                  </p>
                </div>

                <div>
                  <p className="text-[16px] font-bold">ISO</p>
                  <p className="text-[8px] text-gray-500">
                    27001 Certified
                  </p>
                </div>

              </div>
            </div>

            {/* Empty bottom area creates screenshot spacing */}
            <div />
          </div>

          {/* ================= RIGHT PANEL ================= */}
          <div className="w-full md:w-[59%] bg-[#111116] flex justify-center px-6 md:px-12 py-12">

            <div className="w-full max-w-[380px]">

              {/* Heading */}
              <div className="mb-7">

                <h1 className="text-[24px] md:text-[26px] font-bold tracking-tight">
                  Create your account
                </h1>

                <p className="text-[10px] text-gray-500 mt-1">
                  Experience the future of collaborative data intelligence.
                </p>

              </div>

              {/* Form */}
              <form
                onSubmit={handleSubmit(onRegisterSubmit)}
                className="space-y-4"
              >

                {/* Full Name */}
                <div>
                  <label className="block text-[9px] font-semibold text-gray-300 mb-2">
                    Full Name
                  </label>

                  <div className="relative">

                    <User
                      size={14}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"
                    />

                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className={`w-full h-[38px] bg-[#1a191e] border rounded-md pl-9 pr-3 text-[11px] text-white outline-none placeholder:text-gray-600 transition
                      ${
                        errors.fullName
                          ? "border-red-500"
                          : "border-[#33323a] focus:border-purple-500"
                      }`}
                      {...register("fullName", {
                        required: "Full name is required",
                        minLength: {
                          value: 3,
                          message: "Name must be at least 3 characters",
                        },
                      })}
                    />

                  </div>

                  {errors.fullName && (
                    <p className="text-[9px] text-red-400 mt-1">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[9px] font-semibold text-gray-300 mb-2">
                    Email Address
                  </label>

                  <div className="relative">

                    <Mail
                      size={14}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"
                    />

                    <input
                      type="email"
                      placeholder="name@company.com"
                      className={`w-full h-[38px] bg-[#1a191e] border rounded-md pl-9 pr-3 text-[11px] text-white outline-none placeholder:text-gray-600 transition
                      ${
                        errors.email
                          ? "border-red-500"
                          : "border-[#33323a] focus:border-purple-500"
                      }`}
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Enter a valid email address",
                        },
                      })}
                    />

                  </div>

                  {errors.email && (
                    <p className="text-[9px] text-red-400 mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <label className="block text-[9px] font-semibold text-gray-300 mb-2">
                    Password
                  </label>

                  <div className="relative">

                    <Lock
                      size={14}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"
                    />

                    <input
                      type="password"
                      placeholder="••••••••"
                      className={`w-full h-[38px] bg-[#1a191e] border rounded-md pl-9 pr-3 text-[11px] text-white outline-none placeholder:text-gray-600 transition
                      ${
                        errors.password
                          ? "border-red-500"
                          : "border-[#33323a] focus:border-purple-500"
                      }`}
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 8,
                          message:
                            "Password must contain at least 8 characters",
                        },
                      })}
                    />

                  </div>

                  {/* Password Strength */}
                  <div className="mt-1">

                    {/* <div className="flex gap-[2px] h-[3px]">

                      {[1, 2, 3, 4, 5].map((item) => (
                        <div
                          key={item}
                          className={`flex-1 rounded-full transition ${
                            item <= strength
                              ? "bg-purple-400"
                              : "bg-[#29272d]"
                          }`}
                        />
                      ))}

                    </div> */}

                    <p className="text-[8px] text-gray-500 mt-1">
                    
                    </p>

                  </div>

                  {errors.password && (
                    <p className="text-[9px] text-red-400 mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Terms */}
                <div className="flex items-start gap-2 pt-1">

                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-[1px] accent-purple-500"
                    {...register("terms", {
                      required:
                        "You must accept the Terms of Service and Privacy Policy",
                    })}
                  />

                  <label
                    htmlFor="terms"
                    className="text-[9px] leading-4 text-gray-400 cursor-pointer"
                  >
                    I agree to the{" "}
                    <span className="text-purple-300">
                      Terms of Service
                    </span>{" "}
                    and{" "}
                    <span className="text-purple-300">
                      Privacy Policy
                    </span>
                  </label>

                </div>

                {errors.terms && (
                  <p className="text-[9px] text-red-400">
                    {errors.terms.message}
                  </p>
                )}

                {/* Create Account */}
                <button
                  type="submit"
                  className="w-full h-[39px] rounded-md bg-gradient-to-r from-[#7553bd] to-[#b9a0ef] text-[#17101f] text-[11px] font-bold hover:opacity-90 transition active:scale-[0.99]"
                >
                  Create Account
                </button>

              </form>

              {/* Divider */}
              <div className="flex items-center gap-3 my-6">

                <div className="h-px flex-1 bg-[#29282e]" />

                <span className="text-[8px] text-gray-600">
                  OR CONTINUE WITH
                </span>

                <div className="h-px flex-1 bg-[#29282e]" />

              </div>

              {/* Social Login */}
              <div className="grid grid-cols-2 gap-3">

                <button
                  type="button"
                  className="h-[38px] border border-[#33323a] rounded-md text-[10px] font-medium hover:bg-[#1a191e] transition"
                >
                  Google
                </button>

                <button
                  type="button"
                  className="h-[38px] border border-[#33323a] rounded-md text-[10px] font-medium flex items-center justify-center gap-2 hover:bg-[#1a191e] transition"
                >
                  <Grid3X3 size={12} />
                  SSO
                </button>

              </div>

              {/* Login */}
              <p className="text-center text-[9px] text-gray-500 mt-7">

                Already have an account?{" "}

                <button
                onClick={()=> navigate("/")}
                  type="button"
                  className="text-purple-300 font-semibold hover:text-purple-200"
                >
                  Log In
                </button>

              </p>

            </div>
          </div>
        </div>

        {/* ================= FOOTER ================= */}
        <div className="h-[47px] border-t border-[#24242b] px-7 flex items-center justify-between">

          <span className="text-[11px] font-bold">
            Team-Sync
          </span>

          <div className="hidden md:flex items-center gap-6 text-[8px] text-gray-500">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Security</span>
            <span>System Status</span>
          </div>

          <span className="hidden sm:block text-[8px] text-gray-500">
            © 2026 Team-Sync. Enterprise Intelligence Platform.
          </span>

        </div>

      </div>
    </div>
  );
};

export default RegisterPage;