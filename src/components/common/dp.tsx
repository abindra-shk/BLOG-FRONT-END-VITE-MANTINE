import { useState } from "react";
import user from "../../assets/user.png";
import { Dropdown } from "./Dropdown";
export const Dp = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <>
      <div
        className="w-8 h-8 rounded-full overflow-hidden cursor-pointer hover:brightness-50"
        onClick={() => setDropdownVisible(true)}
      >
        <img className="h-full w-full" src={user} />
      </div>
      {dropdownVisible && <Dropdown />}
    </>
  );
};
