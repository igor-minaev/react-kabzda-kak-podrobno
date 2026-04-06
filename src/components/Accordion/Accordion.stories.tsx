import type {Meta, StoryObj} from '@storybook/react-vite';

import {fn} from 'storybook/test';

import Accordion from './Accordion.tsx';

export const ActionsData = {
    onChange: fn(),
};


const meta = {
    component: Accordion,
    title: 'Accordion',
    tags: ['autodocs'],
    //👇 Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
    args: {
        ...ActionsData,
    },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Collapsed: Story = {
    args: {
        titleValue: 'Menu',
        collapsed: true,
    },
};

export const Uncollapsed: Story = {
    args: {
        titleValue: 'Menu',
        collapsed: false,
    },
};
