import type {Meta, StoryObj} from '@storybook/react-vite';
import {action} from 'storybook/actions';

import {fn} from 'storybook/test';

import Accordion from './Accordion.tsx';
import {useState} from "react";

export const ActionsData = {
    onChange: fn(),
    onClick: fn()
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
        items: []
    },
};

export const Uncollapsed: Story = {
    args: {
        titleValue: 'Menu',
        collapsed: false,
        items: [{title: 'Dimych', value: 1}, {title: 'Valera', value: 2}, {title: 'Artem', value: 3}, {
            title: 'Viktor',
            value: 4
        }]
    },
};

export const Default: Story = {
    args: {
        titleValue: 'Menu',
        collapsed: true,
        items: [{title: 'Dimych', value: 1}, {title: 'Valera', value: 2}, {title: 'Artem', value: 3}, {
            title: 'Viktor',
            value: 4
        }]
    },
    render: (args) => {
        const [collapsed, setCollapsed] = useState(args.collapsed ?? true)
        return (
            <Accordion
                {...args}
                collapsed={collapsed}
                onChange={() => {
                    setCollapsed(!collapsed);
                    args.onChange?.();
                }}
            />
        );
    }
};

const onChangeCallback = action('onChange')

export const CollapsedAccordion = () => {
    return <Accordion collapsed={true} titleValue="Users" onChange={onChangeCallback} items={[]} onClick={onClickCallBack}/>
}

const callBack = action('accordion want to change')
const onClickCallBack = action('some item was clicked')

export const MenuCollapsedMode = () =>
    <Accordion titleValue="Menu" collapsed={true} onChange={callBack} items={[]} onClick={onClickCallBack}/>

export const UsersUncollapsedMode = () =>
    <Accordion titleValue="Users" collapsed={false} onChange={callBack} items={[{
        title: 'Dimych',
        value: 1
    }, {title: 'Valera', value: 2}, {title: 'Artem', value: 3}, {
        title: 'Viktor',
        value: 4
    }]} onClick={onClickCallBack}/>


export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue="Users" collapsed={value} onChange={() => setValue(!value)} items={[{
        title: 'Dimych',
        value: 1
    }, {title: 'Valera', value: 2}, {title: 'Artem', value: 3}, {title: 'Viktor', value: 4}]} onClick={(id) => {
        alert(`user with id ${id} should be happy`)
    }}/>
}