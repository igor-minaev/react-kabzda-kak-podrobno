import type {Meta, StoryObj} from '@storybook/react-vite';
import {action} from 'storybook/actions';

import {fn} from 'storybook/test';

import {Select} from './Select.tsx';


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


export const Empty = () => <Select onChange={action('value changed')} value = {'1'} items={[
    {value: '1', title: 'Minsk'},
    {value: '2', title: 'Moscow'},
    {value: '3', title: 'Kiev'}
]}/>

