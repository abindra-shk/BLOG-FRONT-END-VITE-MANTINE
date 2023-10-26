import {BlogType} from "../../../utils/interfaces/blogtype.interface.tsx";
import React, {useState} from "react";

interface BlogtypelistProps{
    blogtypes: BlogType[];
}

export const Blogtypelist: React.FC<BlogtypelistProps>  = ({blogtypes}) => {
    const [moreblogtypes, setMoreblogtypes] =useState<boolean>(false)
    const limitedBlogTypes = moreblogtypes ? blogtypes: blogtypes.slice(0, 9);

  return (
    <div className="col-span-4 col-start-9">
        <div className={"sticky top-28"}>
            <div className={"pb-8 border-b border-gray-100"}>
                <div className={"pb-4"}>
                    <h2 className={"text-base font-medium leading-5 text-gray-900"}>Discover more of what matters to you</h2>
                </div>
                <div className={"blog-type-grid "}>
                    {limitedBlogTypes.map((blogType: BlogType) => (
                        <a href={""}>
                            <div
                                key={blogType._id}
                                className={"flex justify-center text-sm cursor-pointer border border-gray-100 rounded-full mb-2.5 mr-2 bg-gray-100 py-2 px-4" }

                            >
                                {blogType.name}
                            </div>
                        </a>
                    ))}
                </div>
                <div className={"mt-3.5"}>
                    <div className={"m-0 p-0 text-sm font-medium hover:text-black text-green-600"}>
                        <span style={{ cursor: "pointer" }} onClick={()=>setMoreblogtypes(!moreblogtypes)}>
                            {moreblogtypes ? 'Show less topics' : 'See more topics'}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};


