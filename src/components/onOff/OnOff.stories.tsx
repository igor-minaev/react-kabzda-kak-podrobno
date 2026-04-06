import type {Meta, StoryObj} from '@storybook/react-vite';

import {fn} from 'storybook/test';

import {OnOff} from './OnOff.tsx';
import {useState} from "react";

export const ActionsData = {
    onChange: fn(),
};


const meta = {
    component: OnOff,
    title: 'OnOff',
    tags: ['autodocs'],
    //👇 Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
    args: {
        ...ActionsData,
    },
} satisfies Meta<typeof OnOff>;

export default meta;
type Story = StoryObj<typeof meta>;

export const On: Story = {
    args: {
        on: true,
    },
};

export const Off: Story = {
    args: {
        on: false,
    },
};


export const ONOffChanging: Story = {
    args: {
        on: true,
    },
    render: (args) => {
        const [on, setOn] = useState(args.on)
        return (
            <OnOff
                {...args}
                on={on}
                onChange={setOn}
            />
        );
    }
};