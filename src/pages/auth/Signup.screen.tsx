import { useNavigate } from "react-router";

export const SignupScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen font-sans flex items-center justify-center relative bg-gradient-to-b from-yellow-800 via-yellow-400 to-yellow-800">
      <div className="w-2/5 absolute left-0 h-full flex flex-col items-center justify-center text-3xl">
        <div>Welcome to</div> <div className="font-bold">Medium</div>
      </div>
      <div className="w-3/5 absolute right-0 h-full rounded-l-2xl bg-white px-24 py-10">
        <div className="text-3xl font-bold">Sign Up</div>
        <div className="mt-3 mb-6">Create an account.</div>
        <form>
          <div className="container">
            <input
              type="text"
              name="fname"
              placeholder="First Name"
              className="border rounded p-2 mr-4 mb-4 input-width"
            />
            <input
              type="text"
              name="lname"
              placeholder="Last Name"
              className="border rounded p-2 input-width"
            />
          </div>
          <div className="container">
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="border rounded p-2 mr-4 mb-4 input-width"
            />
            <select className="border rounded p-2 input-width" name="gender">
              <option disabled selected>
                Gender
              </option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="container">
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              className="border rounded p-2 mr-4 mb-4 input-width"
            />
            <input
              type="text"
              name="dob"
              placeholder="DOB"
              className="border rounded p-2 input-width"
            />
          </div>
          <div className="container">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="border rounded p-2 mr-4 mb-4 input-width"
            />
            <input
              type="password"
              name="repassword"
              placeholder="Confirm Password"
              className="border rounded p-2 input-width"
            />
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
