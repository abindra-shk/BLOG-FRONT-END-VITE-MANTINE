import { useEffect, useState } from "react";
import { BlogInterface } from "../../../utils/interfaces/blog.interface";
import axios from "axios";
import { Tabs } from "./tabs";
export const BlogArea = () => {
  const [blogs, setBlogs] = useState<BlogInterface[]>([]);

  const loadBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:8001/blog");
      setBlogs(res.data.data);
      console.log(blogs);
    } catch (error) {
      console.error("Error loading blogs:", error);
    }
  };
  useEffect(() => {
    loadBlogs();
  }, []);

  return (
    <>
      <div className="border-r border-gray-200 w-8/12 pr-20">
        <Tabs />

        {blogs.map((blog: BlogInterface) => (
          <div
            key={blog._id}
            className="mb-8 border-b border-color-gray-200 pb-10"
          >
            <div className="flex">
              <div className="mr-2">{blog.user.username}</div>
              <span className="text-gray-500">
                {blog.updatedAt.toLocaleString()}
              </span>
            </div>

            <div className="font-bold text-lg">{blog.title}</div>
            <div className="font-serif">{blog.content}</div>
          </div>
        ))}
      </div>
    </>
  );
};
