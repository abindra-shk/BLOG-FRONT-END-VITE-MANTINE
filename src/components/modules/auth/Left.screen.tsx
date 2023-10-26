import { useNavigate } from "react-router";

export const LeftScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="w-2/5 absolute left-0 h-full flex flex-col items-center justify-center text-3xl">
      <div>Welcome to</div>{" "}
      <div
        className="font-bold cursor-pointer duration-200 hover:text-white"
        onClick={() => navigate("/")}
      >
        Medium
      </div>
    </div>
  );
};
