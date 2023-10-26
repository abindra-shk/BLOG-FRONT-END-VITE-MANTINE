// BlogDetails.js
import React from 'react';
import { BlogInterface } from '../../../utils/interfaces/blog.interface.tsx';


interface BlogDetailsProps {
    blog: BlogInterface;
}

export const BlogDetails: React.FC<BlogDetailsProps> = ({ blog }) => {
    return (
        <div>
            {blog ? (
                <div>
                    <h1>{blog.title}</h1>
                    <p>{blog.content}</p>
                    {/* You can add more details here as needed */}
                </div>
            ) : (
                <p>Loading blog details...</p>
            )}
        </div>
    );
};


