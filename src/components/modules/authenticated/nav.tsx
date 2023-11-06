import { useNavigate } from "react-router";
import logo from "../../../assets/bloglogo.png";
import { Dp } from "../../common/dp";
export const Nav = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex w-full h-16 items-center justify-between border-b border-gray-200 px-8">
        <div className="flex h-full items-center">
          <div className="pr-4 h-3/5 items-center">
            <img src={logo} className="h-full" />
          </div>
          <div className="flex h-full items-center relative">
            <span className="material-icons absolute left-2">search</span>
            <input
              className="rounded-full bg-gray-50 h-4/5 w-60 pl-10 placeholder-gray-800"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex items-center text-gray-600">
          <div
            className="pr-8 flex items-center cursor-pointer hover:text-black"
            onClick={() => navigate("/write")}
          >
            <span className="material-icons">edit_square</span>Write
          </div>
          <div className="pr-8 material-icons">notifications</div>
          <Dp />
        </div>
      </div>
    </>
  );
};
