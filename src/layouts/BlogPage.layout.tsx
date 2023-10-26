import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { BlogInterface } from "../utils/interfaces/blog.interface.tsx";
import axios from "axios";
import {AppShell, Group} from "@mantine/core";
import {LandingNav} from "../components/partials/LandingNav.tsx";
import {BlogDetails} from "../components/modules/Blogpage/blogdetails.tsx";

export function BlogPage() {
    const { blogId } = useParams();
    const [blog, setBlog] = useState<BlogInterface | null>(null);

    useEffect(() => {
        async function loadBlogDetails() {
            try {
                const res = await axios.get(`http://localhost:8001/blog/${blogId}`);
                setBlog(res.data.data);
            } catch (error) {
                console.error('Error loading blogs:', error);
            }
        }

        loadBlogDetails();

    }, [blogId]);

    console.log(blog);
    // Use a conditional rendering approach
    return (
        <AppShell
            header={{ height: { base: 80, md: 80, lg: 80 } }}
            withBorder={false}
        >
            <AppShell.Header>
                <Group h="100%" >
                    <LandingNav/>
                </Group>
            </AppShell.Header>
            {/*<AppShell.Navbar p="md">*/}
            {/*    Navbar*/}

            {/*</AppShell.Navbar>*/}
            <AppShell.Main>
                <BlogDetails blog={blog} />
            </AppShell.Main>
        </AppShell>
    );
}
