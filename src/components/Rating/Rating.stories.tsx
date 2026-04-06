import type {Meta, StoryObj} from '@storybook/react-vite';

import {fn} from 'storybook/test';

import {Rating, type RatingValueType} from './Rating.tsx';
import {useState} from "react";

export const ActionsData = {
    onClick: fn(),
};


const meta = {
    component: Rating,
    title: 'Rating',
    tags: ['autodocs'],
    //👇 Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
    args: {
        ...ActionsData,
    },
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EmptyRating: Story = {
    args: {
        value: 0,
    },
};

export const Rating1: Story = {
    args: {
        value: 1,
    },
};

export const Rating2: Story = {
    args: {
        value: 2,
    },
};

export const Rating3: Story = {
    args: {
        value: 3,
    },
};

export const Rating4: Story = {
    args: {
        value: 4,
    },
};

export const Rating5: Story = {
    args: {
        value: 5,
    },
};

export const RatingChanging: Story = {
    args: {
        value: 5,
    },
    render: (args) => {
        const [value, setValue] = useState<RatingValueType>(args.value)
        return (
            <Rating
                {...args}
                value={value}
                onClick={setValue}
            />
        );
    }
};


