import { useNavigate } from "react-router";
import { useState } from "react";
import { LeftScreen } from "../../components/modules/auth/Left.screen";

export const SignInScreen = () => {
  const navigate = useNavigate();
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const PasswordVisibilityHandler = () => {
    setPasswordVisibility(!passwordVisibility);
  };
  return (
    <div className="w-screen h-screen font-sans flex items-center justify-center relative bg-gradient-to-b from-yellow-800 via-yellow-400 to-yellow-800">
      <LeftScreen />
      <div className="w-3/5 absolute right-0 h-full rounded-l-2xl bg-white px-24 py-10">
        <div className="text-3xl font-bold">Sign In</div>
        <div className="mt-3 mb-6">Sign in to your account.</div>
        <form>
          <div className="container">
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="border rounded p-2 mr-4 mb-4 w-full"
            />
          </div>
          <div className="container">
            <span className="relative w-full">
              <input
                type={passwordVisibility ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="border rounded p-2 w-full"
              />
              <span
                className="absolute right-2 material-icons pt-2 cursor-pointer"
                onClick={PasswordVisibilityHandler}
              >
                {passwordVisibility ? "visibility_off" : "visibility"}
              </span>
            </span>
          </div>
          <input
            type="submit"
            value="SIGN IN"
            className="w-full bg-yellow-300 rounded py-2 cursor-pointer duration-100 hover:-translate-y-0.5 my-4"
          />
        </form>
        <div className="container text-center">
          Don't have an account?{" "}
          <span
            className="font-bold cursor-pointer duration-200 hover:text-yellow-300"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </span>
        </div>
      </div>
    </div>
  );
};
