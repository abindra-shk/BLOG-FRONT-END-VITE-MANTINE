import { AppShell, Group} from '@mantine/core';
import { LandingNav} from "../components/partials/LandingNav.tsx";
import {Homefirstsection} from "../components/modules/Landing/homefirstsection.tsx";
import {Homesecondsection} from "../components/modules/Landing/homesecondsection.tsx";
import axios from "axios"
import {useEffect, useState} from "react";
import {BlogInterface} from "../utils/interfaces/blog.interface.tsx";

export function LandingLayout() {
    const [blogs,setBlogs] = useState<BlogInterface[]>([]);

    useEffect(()=>{
        (async ()=>{
            await loadBlogs();

        })();
    },[])

    const loadBlogs = async () => {
        try {
            const res = await axios.get('http://localhost:8001/blog');
            setBlogs(res.data.data);
            console.log(blogs);
        } catch (error) {
            console.error('Error loading blogs:', error);
        }
    }

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
                <Homefirstsection/>


                <Homesecondsection blogs={blogs}/>
                <Homefirstsection/>
                <Homefirstsection/>
            </AppShell.Main>
        </AppShell>
    );
}