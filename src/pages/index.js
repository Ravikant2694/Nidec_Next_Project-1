import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  // State to store input values and errors
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [rememberMe, setRememberMe] = useState(false); // State for the "Remember Me" checkbox

  // Load saved credentials if "Remember Me" was checked
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user-info"));
    if (userInfo?.email && userInfo?.password) {
      setEmail(userInfo.email);
      setPassword(userInfo.password);
      setRememberMe(true);
    } else {
      setRememberMe(false);
      setEmail("");
      setPassword("");
    }
  }, []);

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  // Handle form submission
  const handleSignIn = (event) => {
    event.preventDefault(); // Prevent form submission
    if (rememberMe) {
      const remObj = { email, password };
      localStorage.setItem("user-info", JSON.stringify(remObj));
    } else {
      localStorage.setItem("user-info", JSON.stringify({}));
    }
    if (validateForm()) {
      if (rememberMe) {
        // Save email and password to localStorage
        localStorage.setItem("rememberedEmail", email);
        localStorage.setItem("rememberedPassword", password); // Use with caution!
      } else {
        // Clear saved credentials if "Remember Me" is unchecked
        localStorage.removeItem("rememberedEmail");
        localStorage.removeItem("rememberedPassword");
      }
      // If validation passes, navigate to the dashboard
      router.push("/dashboard-1");
    }
  };

  const RememberMe = (e) => {
    setRememberMe(e.target.checked);
  };

  return (
    <div className="container-fluid flex h-screen w-full">
      {/* Left Portion */}
      <div className="left_portion w-1/2"></div>

      {/* Right Portion */}
      <div className="flex justify-center items-center w-1/2">
        <div className=" w-full flex flex-col justify-center items-center ml-[96px] mr-[117px]">
          {/* Heading Image */}
          <div className="h-[70px] w-full">
            <img
              className="w-full"
              src="/images/nidec_heading.png"
              alt="Nidec Heading"
            />
          </div>

          {/* Description Text */}
          <div className=" flex w-full items-center h-[89px] mr-[7px] mt-[40px]">
            <p className=" text-[22px] poppins-regular">
              Please fill in your details to access your account.
            </p>
          </div>

          {/* Form Section */}
          <form className="w-full" onSubmit={handleSignIn}>
            {/* Email Input */}
            <div className="relative h-[95px] mb-[28px]">
              <label
                className="text-[19px] poppins-medium mb-[5px]"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full h-[61px] pt-[13px] pr-[19px] pb-[13px] pl-[19px] border-2 rounded-[11px]"
                type="email"
                id="email"
                placeholder="Nidec.Hello@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <p className="text-red-500 mt-[5px] text-sm absolute">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password Input */}
            <div
              className="relative  h-[95px] mb-[28px]"
              style={{ border: "1x solid red" }}
            >
              <label
                className="text-[19px] poppins-medium mb-[5px]"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full h-[61px] pt-[13px] pr-[19px] pb-[13px] pl-[19px] border-2 rounded-[11px]"
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <p className="text-red-500 mt-[5px] text-sm absolute">
                  {errors.password}
                </p>
              )}
            </div>

            {/* Remember Me Checkbox */}
            <div className=" h-[23px] mb-[44px] flex items-center">
              <input
                type="checkbox"
                id="remember-me"
                className="mr-2"
                checked={rememberMe}
                onChange={RememberMe}
              />
              <label
                className="poppins-medium text-[19px]"
                htmlFor="remember-me"
              >
                Remember me
              </label>
            </div>

            {/* Submit Button */}
            <div className=" flex justify-center w-full h-[61px] poppins-medium text-[22px]  bg-green-600 text-white rounded-[11px] hover:bg-green-700 transition">
              <button type="submit" className="w-full">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
