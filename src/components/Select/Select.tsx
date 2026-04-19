type ItemType = {
    title: string
    value: any
}

type SelecyPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}
export const Select = (props: SelecyPropsType) => {
    return (
        <div>
            <div>{}</div>
            {props.items.map(i => <div>{i.title}</div>)}
        </div>
    );
};

