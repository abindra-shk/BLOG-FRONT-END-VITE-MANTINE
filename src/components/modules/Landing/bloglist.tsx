import {BlogInterface} from "../../../utils/interfaces/blog.interface.tsx";
import React from "react";

interface BloglistProps{
    blogs: BlogInterface[];
}

export const Bloglist: React.FC<BloglistProps> = ({ blogs }) => {
  return (
    <div className="col-span-7 py-3">
        {blogs.map((blog, index) => (
            <div key={index} className="flex w-full mb-12">
                <div className={"w-9/12 mr-5"}>
                    <h2 className="text-xl font-bold">{blog.title}</h2>
                    <p>{blog.content}</p>
                </div>
                <div className={"w-3/12"}>
                    hello
                </div>
            </div>
        ))}
        {blogs.length}
    </div>
  );
};


