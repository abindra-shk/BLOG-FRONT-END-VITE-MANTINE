import { AppShell, Group} from '@mantine/core';
import { LandingNav} from "../components/partials/LandingNav.tsx";

export function LandingLayout() {

    return (
        <AppShell
            header={{ height: { base: 80, md: 80, lg: 80 } }}
            navbar={{
                width: { base: 200, md: 300, lg: 400 },
                breakpoint: 'sm',

            }}
            padding="md"
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
                <div className="border-b-2 border-b-black">
                    main
                </div>
            </AppShell.Main>
        </AppShell>
    );
}