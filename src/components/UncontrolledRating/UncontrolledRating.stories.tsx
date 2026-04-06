import type {Meta, StoryObj} from '@storybook/react-vite';
import {action} from 'storybook/actions';

import {fn} from 'storybook/test';

import {UncontrolledRating} from './UncontrolledRating.tsx';


export const ActionsData = {
    onChange: fn()
};


const meta = {
    component: UncontrolledRating,
    title: 'UncontrolledRating',
    tags: ['autodocs'],
    //👇 Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
    args: {
        ...ActionsData,
    },
} satisfies Meta<typeof UncontrolledRating>;

export default meta;
type Story = StoryObj<typeof meta>;

const callback = action('rating changed')

export const EmptyRating: Story = {
    args: {
        defaultValue: 0,
    },
};

export const Rating1: Story = {
    args: {
        defaultValue: 1,
    },
};

export const Rating2: Story = {
    args: {
        defaultValue: 2,
    },
};

export const Rating3: Story = {
    args: {
        defaultValue: 3,
    },
};

export const Rating4: Story = {
    args: {
        defaultValue: 4,
    },
};

export const Rating5: Story = {
    args: {
        defaultValue: 5,
    },
};

export const Empty = () => <UncontrolledRating defaultValue={0} onChange={callback}/>
export const R1 = () => <UncontrolledRating defaultValue={0} onChange={callback}/>
export const R2 = () => <UncontrolledRating defaultValue={0} onChange={callback}/>
export const R3 = () => <UncontrolledRating defaultValue={0} onChange={callback}/>
export const R4 = () => <UncontrolledRating defaultValue={0} onChange={callback}/>
export const R5 = () => <UncontrolledRating defaultValue={0} onChange={callback}/>



