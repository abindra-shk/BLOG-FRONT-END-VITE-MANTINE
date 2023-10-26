import {BlogInterface} from "../../../utils/interfaces/blog.interface.tsx";
import React from "react";
import user from "../../../assets/user.png";
import gojo from "../../../assets/gojo.jpg";
import { format } from 'date-fns'
import {BlogType} from "../../../utils/interfaces/blogtype.interface.tsx";
import { NavLink } from 'react-router-dom';

interface BloglistProps{
    blogs: BlogInterface[];
}

export const Bloglist: React.FC<BloglistProps> = ({ blogs }) => {
  return (
    <div className="col-span-7 py-3">
        {blogs.map((blog, index) => (
            <div key={index} className="grid grid-cols-7 mb-12">
                <div className={"col-span-5 mr-5 "}>
                    <div className={"flex-row pb-2"}>
                        <div>
                            <img className="w-5 h-5 inline mr-2 align-middle rounded-full cursor-pointer" src={user}/>
                            <span className="flex-1 text-center text-sm font-medium align-middle leading-4 cursor-pointer" style={{color:"#242424"}}>{blog.user.username}</span>
                        </div>
                    </div>
                    <div className={""}>
                        <h2 className="text-xl font-bold leading-6 cursor-pointer">
                            <NavLink to={`/blog-page/${blog._id}`}>{blog.title}</NavLink>
                        </h2>
                    </div>
                    <div className={"pt-1 "} style={{color:"#6B6B6B"}}>
                        <h3 className={"text-base leading-5 overflow-hidden cursor-pointer max-h-10 line-clamp-2"}>{blog.content}</h3>
                    </div>
                    <div className={"flex text-sm items-center pt-2"} style={{color:"#6B6B6B"}}>
                        <div className={"flex align-middle"}>{format(new Date(blog.createdAt), 'MMMM d')}</div>
                        <div style={{position:"relative", top:"-3px"}} className={"px-1.5 font-bold"}>.</div>
                        {blog.blogtypes.map((blogType: BlogType) => (
                            <div
                                key={blogType._id}
                                className={"cursor-pointer border border-gray-100 rounded-full mr-2 bg-gray-100 py-0.5 px-2"}
                            >
                                {blogType.name}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={"col-span-2 flex items-center justify-center"}>
                    <img
                        className="w-full h-32 cursor-pointer aspect-auto"
                        src={gojo}
                        alt="Blog Image"
                    />
                </div>
            </div>
        ))}
        {blogs.length}
    </div>
  );
};


