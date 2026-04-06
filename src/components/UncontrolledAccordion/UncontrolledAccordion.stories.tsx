import type {Meta, StoryObj} from '@storybook/react-vite';

import UncontrolledAccordion from './UncontrolledAccordion.tsx';

export const ActionsData = {};


const meta = {
    component: UncontrolledAccordion,
    title: 'UncontrolledAccordion',
    tags: ['autodocs'],
    //👇 Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
    args: {
        ...ActionsData,
    },
} satisfies Meta<typeof UncontrolledAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
    args: {
        titleValue: 'Menu',
    }
};
