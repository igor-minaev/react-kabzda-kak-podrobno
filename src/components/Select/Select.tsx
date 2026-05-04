import {useState} from "react";

type ItemType = {
    title: string
    value: string
}

type SelectPropsType = {
    value: string
    onChange: (value: string) => void
    items: ItemType[]
}
export const Select = (props: SelectPropsType) => {
    const [uncollapsed, setUncollapsed] = useState(false)
    const chosenElement = props.items.find(i => i.value === props.value)

    return (
        <div>
            <div onClick={() => setUncollapsed(true)} onBlur={() => setUncollapsed(false)}>{chosenElement && chosenElement.title}</div>

            {uncollapsed && props.items.map(i => <div key={i.value} onClick={() => {
                props.onChange(i.value)
                setUncollapsed(false)
            }
            }>{i.title}</div>)}
        </div>
    );
};

