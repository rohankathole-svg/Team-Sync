import React from "react";
import { useAuth } from "../../hooks/useAuth";
import {
  Cloud,
  Network,
  LogIn,
} from "lucide-react";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    errors,
    onLoginSubmit,
    navigate,
  } = useAuth();

  const submitHandler = (data) => {
    console.log("✅ LOGIN FORM SUBMITTED");
    console.log("Login Data:", data);

    onLoginSubmit(data);
  };

  const validationError = (errors) => {
    console.log("❌ VALIDATION ERRORS:", errors);
  };

  return (
    <div className="min-h-screen bg-[#0d0b10] text-white relative overflow-hidden">

      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute top-0 left-0 right-0 h-[3px] bg-[#7553bd]" />

      <div className="pointer-events-none absolute -left-40 top-40 w-[500px] h-[500px] rounded-full bg-purple-900/5 blur-[120px]" />

      <div className="pointer-events-none absolute right-[-100px] bottom-[-150px] w-[500px] h-[500px] rounded-full bg-purple-900/5 blur-[120px]" />

      {/* Decorative graphic */}
      <div className="pointer-events-none absolute right-8 bottom-8 w-[145px] h-[145px] opacity-[0.13] hidden md:block">
        <div className="absolute inset-0 rounded-full border border-purple-400/30 rotate-45" />
        <div className="absolute inset-[15px] rounded-full border border-purple-400/20 -rotate-45" />
        <div className="absolute inset-[30px] rounded-full border border-purple-400/20 rotate-12" />
        <div className="absolute inset-[45px] rounded-full border border-purple-400/20 -rotate-12" />
      </div>

      {/* ================= PAGE ================= */}

      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">

        {/* ================= LOGIN CARD ================= */}

        <div
          className="
            w-full
            max-w-[300px]
            bg-[#1b191e]
            border
            border-[#29272e]
            rounded-[6px]
            px-5
            pt-5
            pb-5
            shadow-[0_20px_60px_rgba(0,0,0,0.35)]
          "
        >

          {/* ================= LOGO ================= */}

          <div className="flex justify-center">

            <div
              className="
                w-[34px]
                h-[34px]
                rounded-[6px]
                bg-gradient-to-br
                from-[#7954c5]
                to-[#6745a8]
                flex
                items-center
                justify-center
              "
            >
              <Network
                size={19}
                strokeWidth={2}
                className="text-white"
              />
            </div>

          </div>

          {/* ================= HEADING ================= */}

          <div className="text-center mt-2">

            <h1 className="text-[16px] font-bold">
              Team-Sync
            </h1>

            <p className="text-[9px] text-gray-400 mt-1">
              Sign in to your workspace
            </p>

          </div>

          {/* ================= SOCIAL LOGIN ================= */}

          <div className="grid grid-cols-2 gap-2 mt-5">

            <button
              type="button"
              onClick={() => console.log("Google login clicked")}
              className="
                h-[30px]
                rounded-[4px]
                border
                border-[#302e35]
                bg-[#26242a]
                hover:bg-[#302e36]
                transition
                flex
                items-center
                justify-center
                gap-1.5
                text-[8px]
                font-semibold
                text-gray-300
                cursor-pointer
              "
            >
              <Cloud size={12} />
              GOOGLE
            </button>

            <button
              type="button"
              onClick={() => console.log("GitHub login clicked")}
              className="
                h-[30px]
                rounded-[4px]
                border
                border-[#302e35]
                bg-[#26242a]
                hover:bg-[#302e36]
                transition
                flex
                items-center
                justify-center
                gap-1.5
                text-[8px]
                font-semibold
                text-gray-300
                cursor-pointer
              "
            >
              {/* <Github size={12} /> */}
              GITHUB
            </button>

          </div>

          {/* ================= DIVIDER ================= */}

          <div className="flex items-center gap-2 my-5">

            <div className="flex-1 h-px bg-[#28262b]" />

            <span className="text-[7px] text-gray-400 whitespace-nowrap">
              or continue with email
            </span>

            <div className="flex-1 h-px bg-[#28262b]" />

          </div>

          {/* ================= FORM ================= */}

          <form
            onSubmit={handleSubmit(
              submitHandler,
              validationError
            )}
          >

            {/* ================= EMAIL ================= */}

            <div>

              <label className="block text-[8px] font-bold text-gray-300 uppercase mb-1.5">
                Email Address
              </label>

              <input
                type="email"
                placeholder="name@company.com"
                className={`
                  w-full
                  h-[32px]
                  rounded-[4px]
                  bg-[#0e0c11]
                  border
                  px-2
                  text-[9px]
                  text-white
                  placeholder:text-[#49454e]
                  outline-none
                  transition
                  ${
                    errors?.email
                      ? "border-red-500"
                      : "border-[#29262d] focus:border-[#7553bd]"
                  }
                `}
                {...register("email", {
                  required: "Email address is required",
                  pattern: {
                    value:
                      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Enter a valid email address",
                  },
                })}
              />

              {errors?.email && (
                <p className="text-[8px] text-red-400 mt-1">
                  {errors.email.message}
                </p>
              )}

            </div>

            {/* ================= PASSWORD ================= */}

            <div className="mt-4">

              <div className="flex justify-between items-center mb-1.5">

                <label className="text-[8px] font-bold text-gray-300 uppercase">
                  Password
                </label>

                <button
                  type="button"
                  onClick={() => navigate("/forgot-password")}
                  className="
                    text-[8px]
                    text-purple-300
                    hover:text-purple-200
                    cursor-pointer
                  "
                >
                  Forgot password?
                </button>

              </div>

              <input
                type="password"
                placeholder="••••••••"
                className={`
                  w-full
                  h-[32px]
                  rounded-[4px]
                  bg-[#0e0c11]
                  border
                  px-2
                  text-[9px]
                  text-white
                  placeholder:text-[#49454e]
                  outline-none
                  transition
                  ${
                    errors?.password
                      ? "border-red-500"
                      : "border-[#29262d] focus:border-[#7553bd]"
                  }
                `}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message:
                      "Password must be at least 6 characters",
                  },
                })}
              />

              {errors?.password && (
                <p className="text-[8px] text-red-400 mt-1">
                  {errors.password.message}
                </p>
              )}

            </div>

            {/* ================= REMEMBER ME ================= */}

            <div className="flex items-center gap-1.5 mt-4">

              <input
                id="rememberMe"
                type="checkbox"
                className="
                  w-[10px]
                  h-[10px]
                  accent-purple-500
                  cursor-pointer
                "
                {...register("rememberMe")}
              />

              <label
                htmlFor="rememberMe"
                className="text-[8px] text-gray-400 cursor-pointer"
              >
                Stay signed in
              </label>

            </div>

            {/* ================= SIGN IN ================= */}

            <button
              type="submit"
              className="
                w-full
                h-[38px]
                mt-4
                rounded-[5px]
                bg-[#6d4db2]
                hover:bg-[#7958c2]
                active:scale-[0.98]
                transition-all
                text-[9px]
                font-semibold
                text-white
                flex
                items-center
                justify-center
                gap-1.5
                cursor-pointer
              "
            >
              Sign In
              <LogIn size={12} />
            </button>

          </form>

          {/* ================= DIVIDER ================= */}

          <div className="h-px bg-[#29272d] mt-5" />

          {/* ================= SIGN UP ================= */}

          <p className="text-center text-[8px] text-gray-400 mt-4">

            Don't have an account?{" "}

            <button
              type="button"
              onClick={() => navigate("/register")}
              className="
                text-purple-300
                font-semibold
                hover:text-purple-200
                cursor-pointer
              "
            >
              Sign Up
            </button>

          </p>

        </div>

        {/* ================= FOOTER ================= */}

        <div className="text-center mt-3">

          <p className="text-[7px] text-gray-500">
            © 2026 Team-Sync. Enterprise Intelligence Platform.
          </p>

          <div className="flex justify-center gap-2 mt-1">

            <button
              type="button"
              className="text-[7px] text-gray-600 hover:text-gray-400 cursor-pointer"
            >
              Privacy Policy
            </button>

            <span className="text-[7px] text-gray-700">
              /
            </span>

            <button
              type="button"
              className="text-[7px] text-gray-600 hover:text-gray-400 cursor-pointer"
            >
              Terms of Service
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default LoginPage;