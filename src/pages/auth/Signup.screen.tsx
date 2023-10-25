import { useNavigate } from "react-router";
import { useState } from "react";
import { LeftScreen } from "../../components/modules/auth/Left.screen";
import { IRegisterUser } from "../../utils/interfaces/LoginUser.interface";
import { createUser } from "../../store/modules/auth/actions";
import { useDispatch } from "react-redux";

export const SignupScreen = () => {
  const dispatch: any = useDispatch();
  const [user, setUser] = useState<IRegisterUser>({
    firstname: "",
    lastname: "",
    gender: "",
    dob: "",
    email: "",
    username: "",
    password: "",
    role: "",
  });

  const navigate = useNavigate();
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const PasswordVisibilityHandler = () => {
    setPasswordVisibility(!passwordVisibility);
  };
  const [rePasswordVisibility, setRePasswordVisibility] = useState(false);
  const RePasswordVisibilityHandler = () => {
    setRePasswordVisibility(!rePasswordVisibility);
  };
  const formHandler = (e: any) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const submitForm = async (e: any) => {
    e.preventDefault();
    if (user.password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }
    try {
      console.log("hello");
      await dispatch(createUser(user));
    } catch (e) {
      console.log(e);
    }
  };
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="w-screen h-screen font-sans flex items-center justify-center relative bg-gradient-to-b from-yellow-800 via-yellow-400 to-yellow-800">
      <LeftScreen />
      <div className="w-3/5 absolute right-0 h-full rounded-l-2xl bg-white px-24 py-10">
        <div className="text-3xl font-bold">Sign Up</div>
        <div className="mt-3 mb-6">Create an account.</div>
        <form onSubmit={submitForm}>
          <div className="container mb-4">
            <input
              type="text"
              name="firstname"
              value={user.firstname}
              placeholder="First Name"
              className="border rounded p-2 mr-4 input-width"
              onChange={formHandler}
            />
            <input
              type="text"
              name="lastname"
              value={user.lastname}
              placeholder="Last Name"
              className="border rounded p-2 input-width"
              onChange={formHandler}
            />
          </div>
          <div className="container mb-4">
            <input
              type="text"
              name="username"
              value={user.username}
              placeholder="Username"
              className="border rounded p-2 mr-4 input-width"
              onChange={formHandler}
            />
            <select
              className="border rounded p-2 input-width"
              name="gender"
              onChange={formHandler}
            >
              <option disabled selected>
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="container mb-4">
            <input
              type="text"
              name="email"
              value={user.email}
              placeholder="Email Address"
              className="border rounded p-2 mr-4 input-width"
              onChange={formHandler}
            />
            <input
              type="text"
              name="dob"
              value={user.dob}
              placeholder="DOB"
              className="border rounded p-2 input-width"
              onChange={formHandler}
            />
          </div>
          <div className="container mb-4">
            <span className="relative input-width mr-4">
              <input
                type={passwordVisibility ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="border rounded p-2  input-width"
                onChange={formHandler}
              />
              <span
                className="absolute right-2 material-icons pt-2 cursor-pointer"
                onClick={PasswordVisibilityHandler}
              >
                {passwordVisibility ? "visibility_off" : "visibility"}
              </span>
            </span>
            <span className="relative input-width">
              <input
                type={rePasswordVisibility ? "text" : "password"}
                name="repassword"
                placeholder="Confirm Password"
                className="border rounded p-2 input-width"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <span
                className="absolute right-2 material-icons pt-2 cursor-pointer"
                onClick={RePasswordVisibilityHandler}
              >
                {rePasswordVisibility ? "visibility_off" : "visibility"}
              </span>
            </span>
          </div>
          <input
            type="submit"
            value="SIGN UP"
            className="w-full bg-yellow-300 rounded py-2 cursor-pointer duration-100 hover:-translate-y-0.5 my-4"
          />
        </form>
        <div className="container text-center">
          Already have an account?{" "}
          <span
            className="font-bold cursor-pointer duration-200 hover:text-yellow-300"
            onClick={() => navigate("/signin")}
          >
            Sign In
          </span>
        </div>
      </div>
    </div>
  );
};
