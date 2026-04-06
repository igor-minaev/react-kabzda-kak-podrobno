import type {Meta, StoryObj} from '@storybook/react-vite';

import {fn} from 'storybook/test';

import {UncontrolledOnOff} from './UncontrolledOnOff.tsx';

export const ActionsData = {
    onChange: fn(),
};


const meta = {
    component: UncontrolledOnOff,
    title: 'UncontrolledOnOff',
    tags: ['autodocs'],
    //👇 Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
    args: {
        ...ActionsData,
    },
} satisfies Meta<typeof UncontrolledOnOff>;

export default meta;
type Story = StoryObj<typeof meta>;

export const On: Story = {
    args: {
        defaultOn: true,
    },
};

export const Off: Story = {
    args: {
        defaultOn: false,
    },
};


