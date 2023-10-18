import {Bloglist} from "./bloglist.tsx";
import {Blogtypelist} from "./blogtypelist.tsx";
import {BlogInterface} from "../../../utils/interfaces/blog.interface.tsx";
import React from "react";

interface HomesecondsectionProps {
    blogs: BlogInterface[];
}
export const Homesecondsection: React.FC<HomesecondsectionProps> = ({blogs}) => {
  return (
    <div className="grid pt-14 px-28 ">
        <Bloglist blogs={blogs}/>
        <Blogtypelist/>
    </div>
  );
};


