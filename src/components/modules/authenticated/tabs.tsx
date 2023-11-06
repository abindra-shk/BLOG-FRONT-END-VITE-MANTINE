export const Tabs = () => {
  return (
    <div className="flex border-b border-gray-200 h-16 mt-8 items-center text-gray-500 sticky top-0 bg-white mb-10">
      <div className="material-icons mr-6 cursor-pointer hover:rounded-full hover:bg-gray-100 hover:text-black flex items-center">
        add
      </div>
      <div className="mr-6 cursor-pointer h-full flex items-center hover:text-black">
        For you
      </div>
      <div className="cursor-pointer h-full flex items-center hover:text-black">
        Following
      </div>
    </div>
  );
};
