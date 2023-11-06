import logo from "../../../assets/bloglogo.png";
import { useNavigate } from "react-router";
import { Dp } from "../../common/dp";
export const WriteNav = (props: any) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex w-full h-16 items-center justify-between px-60 fixed bg-white top-0">
        <div className="flex h-full items-center">
          <div
            className="h-full flex items-center mr-2 cursor-pointer"
            onClick={() => navigate("/fyp")}
          >
            <img src={logo} className="h-3/5" />
          </div>
          <div className="text-sm">
            Draft in {props.user.userDetails.firstname}{" "}
            {props.user.userDetails.lastname}
          </div>
        </div>
        <div className="flex items-center text-gray-500">
          <button
            className="flex items-center py-1 mr-6 duration-200 rounded-full bg-green-700 cursor-pointer text-white px-2 text-sm hover:bg-green-800"
            onClick={props.submit}
          >
            Publish
          </button>
          <div className="material-icons cursor-pointer duration-200 mr-4 hover:text-black">
            more_horiz
          </div>
          <div className="material-icons cursor-pointer duration-200 mr-4 hover:text-black">
            notifications
          </div>
          <Dp />
        </div>
      </div>
    </>
  );
};
