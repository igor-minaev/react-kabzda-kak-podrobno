import {useEffect, useState, KeyboardEvent} from "react";
import styles from './Select.module.css'

type ItemType = {
    title: string
    value: string
}

type SelectPropsType = {
    value: string | null
    onChange: (value: string | null) => void
    items: ItemType[]
}
export const Select = (props: SelectPropsType) => {
    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)
    const chosenElement = props.items.find(i => i.value === props.value)
    const hoveredElement = props.items.find(i => i.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value]);

    const toggleItems = () => setActive(!active)
    const onItemClick = (value: string) => {
        props.onChange(value)
        toggleItems()
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElememnt = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1]
                    if (pretendentElememnt) {
                        props.onChange(pretendentElememnt.value)
                        return
                    }
                }
            }
            if (!chosenElement) {
                props.onChange(props.items[0].value)
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }

    return (
        <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0}>
            <span className={styles.main} onClick={toggleItems}>{chosenElement && chosenElement.title}</span>
            {
                active && <div className={styles.items}>
                    {props.items.map(i =>
                        <div className={styles.item + ' ' + (hoveredElement === i ? styles.selected : '')} key={i.value} onMouseEnter={() => setHoveredElementValue(i.value)} onClick={() => onItemClick(i.value)}
                        >{i.title}</div>)}
                </div>
            }

        </div>
    );
};

