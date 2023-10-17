
import { useDisclosure } from '@mantine/hooks';
import { AppShell, Burger, Group, Skeleton } from '@mantine/core';

// import { DashboardRoutes } from '../components/modules/dashboard/Dashboard.routes'
// import {DashboardSidebar} from "../components/modules/dashboard/Dashboard.sidebar";
import {DashboardHeader} from "../components/modules/dashboard/Dashboard.header";

export const DashboardLayout = () => {
    const [opened, { toggle }] = useDisclosure();
    
    // useEffect(()=>{
    //     if(!user?.patientId){
    //         navigate('/onboarding');
    //     }
    // },[user]);
    
    return (

        <AppShell
            header={{ height: 60 }}
            footer={{ height: 60 }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
            aside={{ width: 300, breakpoint: 'md', collapsed: { desktop: false, mobile: true } }}
            padding="md"
        >
            <AppShell.Header>
                <Group h="100%" px="md">
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                </Group>
                <DashboardHeader/>
            </AppShell.Header>
            <AppShell.Navbar p="md">
                {/*<DashboardSidebar/>*/}
                {Array(15)
                    .fill(0)
                    .map((_, index) => (
                        <Skeleton key={index} h={28} mt="sm" animate={false} />
                    ))}
            </AppShell.Navbar>
            <AppShell.Main>
                Aside is hidden on on md breakpointasdasdasd and cannot be opened when it is collapsed
            </AppShell.Main>
            <AppShell.Aside p="md">Asideasdasd</AppShell.Aside>
            <AppShell.Footer p="md">Footer</AppShell.Footer>
            {/*<DashboardRoutes />*/}
        </AppShell>
    )
}
