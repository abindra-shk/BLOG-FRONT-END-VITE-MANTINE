import {Grid, TextInput, Select, ActionIcon} from "@mantine/core";
import {Search} from "tabler-icons-react";

export const HeroSection = () => {
    return <section className={'px-wrapper py-md'}>
        <Grid className={'h-full'}>
            <Grid.Col md={6} sm={12} xs={12} className={'h-full flex flex-col justify-center'}>
                <h1 className={'m-none text-3xl '}>Find and Choose where you live</h1>
                <p className={'text-sm'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dignissimos et nihil optio quo!
                    Ab dolores fugit lao?</p>
                <div className={'flex items-center mt-md'}>
                    <TextInput placeholder="Input label"/>
                    <Select
                        placeholder={'Select Location'}
                        data={[
                            {value: 'react', label: 'React'},
                            {value: 'ng', label: 'Angular'},
                            {value: 'svelte', label: 'Svelte'},
                            {value: 'vue', label: 'Vue'},
                        ]}
                    />
                    <ActionIcon color="dark" variant="filled" size={'32px'}>
                        <Search/>
                    </ActionIcon>
                </div>
            </Grid.Col>
            <Grid.Col md={6} sm={12} xs={12}>
                <img
                    src="https://images.pexels.com/photos/5524167/pexels-photo-5524167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    style={{aspectRatio: "4 / 3"}}
                    className={'w-full rounded-md'}
                />
            </Grid.Col>
        </Grid>
    </section>
}