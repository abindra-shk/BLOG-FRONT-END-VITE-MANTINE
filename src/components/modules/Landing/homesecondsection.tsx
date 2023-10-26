import {Bloglist} from "./bloglist.tsx";
import {Blogtypelist} from "./blogtypelist.tsx";
import {BlogInterface} from "../../../utils/interfaces/blog.interface.tsx";
import React from "react";
import {BlogType} from "../../../utils/interfaces/blogtype.interface.tsx";

interface HomesecondsectionProps {
    blogs: BlogInterface[];
    blogtypes: BlogType[];
}
export const Homesecondsection: React.FC<HomesecondsectionProps> = ({blogs,blogtypes}) => {
  return (
    <div className="grid pt-14 px-28 grid-cols-8 auto-cols-fr md:grid-cols-12 auto-cols-minmax-48 ">
        <Bloglist blogs={blogs}/>
        <Blogtypelist blogtypes={blogtypes}/>
    </div>
  );
};


