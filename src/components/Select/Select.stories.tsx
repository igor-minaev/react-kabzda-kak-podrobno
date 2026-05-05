import type {Meta, StoryObj} from '@storybook/react-vite';

import {fn} from 'storybook/test';

import {Select} from './Select.tsx';
import {useState} from "react";


export const ActionsData = {
    onChange: fn()
};


const meta = {
    component: Select,
    title: 'Select',
    tags: ['autodocs'],
    //👇 Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
    args: {
        ...ActionsData,
    },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;


export const WithValue = () => {
    const [value,setValue]=useState<string | null>('2')
    return <Select onChange={setValue} value = {value} items={[
        {value: '1', title: 'Minsk'},
        {value: '2', title: 'Moscow'},
        {value: '3', title: 'Kiev'}
    ]}/>
}

export const WithoutValue = () => {
    const [value,setValue]=useState<string | null>(null)
    return <Select onChange={setValue} value={value} items={[
        {value: '1', title: 'Minsk'},
        {value: '2', title: 'Moscow'},
        {value: '3', title: 'Kiev'}
    ]}/>
}

