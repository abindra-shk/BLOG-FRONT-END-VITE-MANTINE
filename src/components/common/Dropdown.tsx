export const Dropdown = () => {
  return (
    <>
      <div className="absolute top-14 right-5 bg-white h-5/6 w-48 shadow-lg border rounded-lg p-6 text-gray-500 ">
        <div className="mb-4 flex items-center hover:text-black cursor-pointer">
          <span className="material-icons mr-4">person</span>Profile
        </div>
        <div className="mb-4 flex items-center hover:text-black cursor-pointer">
          <span className="material-icons mr-4">bookmark</span>Library
        </div>
        <div className="mb-4 flex items-center hover:text-black cursor-pointer">
          <span className="material-icons mr-4">description</span>Stories
        </div>
        <div className="mb-4 flex items-center hover:text-black cursor-pointer">
          <span className="material-icons mr-4">signal_cellular_alt</span>
          Stats
        </div>
      </div>
    </>
  );
};
