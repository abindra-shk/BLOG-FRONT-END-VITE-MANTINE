import { Nav } from "../../components/modules/authenticated/nav";
import { BlogArea } from "../../components/modules/authenticated/blogarea";
import { SuggestionsArea } from "../../components/modules/authenticated/suggestionsarea";
import { useSelector } from "react-redux";
export const Fyp = () => {
  const user = useSelector((state: any) => state.authReducer.user);

  return (
    <>
      <Nav />
      <div className="w-full flex px-48">
        <BlogArea />
        <SuggestionsArea />
      </div>
    </>
  );
};
