import { useSelector } from "react-redux";
import { WriteNav } from "../../components/modules/authenticated/writenav";
import { useState } from "react";
import { IBlog } from "../../utils/interfaces/blog.interface";
import { PostRequest } from "../../plugins/https";
import { APICreateBlog } from "../../api/blog";
import { getUser } from "../../utils/helpers/tokenStorage.helper";

export const Write = () => {
  const user = getUser();
  console.log(user);
  // const [userDetails, setUserDetails] = useState<IUserDetails>({
  //   firstname: "",
  //   lastname: "",
  //   gender: "",
  //   dob: "",
  //   email: "",
  //   username: "",
  //   password: "",
  //   role: "",
  // });

  // const loadUserDetails = async () => {
  //   try {
  //     const res = await axios.get(`http://localhost:8001/user/${user._id}`);
  //     setUserDetails(res.data.data);
  //     console.log(userDetails);
  //   } catch (error) {
  //     console.error("Error loading user details:", error);
  //   }
  // };

  // useEffect(() => {
  //   loadUserDetails();
  // }, []);

  const [blog, setBlog] = useState<IBlog>({
    title: "",
    content: "",
    user: {
      _id: `${user._id}`,
      username: `${user.username}`,
    },
    status: 1,
    blogtypes: [],
  });

  const submitForm = async (e: any) => {
    e.preventDefault();
    console.log(blog);
    try {
      const res = await APICreateBlog(blog);
    } catch (e) {
      console.log(e);
    }
  };

  const formHandler = (e: any) => {
    setBlog({
      ...blog,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <WriteNav user={user} submit={submitForm} />
      <div className="w-full flex flex-col px-96 mt-24 font-serif ">
        <input
          placeholder="Title"
          className="w-full outline-none text-4xl mb-5"
          name="title"
          onChange={formHandler}
          required
        />
        <input
          placeholder="Tell your story..."
          className="w-full outline-none text-lg"
          name="content"
          onChange={formHandler}
          required
        />
      </div>
    </>
  );
};
