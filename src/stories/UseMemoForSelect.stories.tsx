import {ItemType, Select} from "../components/Select/Select";
import React, {useMemo, useState} from "react";

export default {
    title: 'useMemoForSelect'
}


const initialCities: ItemType[] = [
    {id: crypto.randomUUID(), countryId: "Belarus", title: 'Minsk', value: 'Minsk'},
    {id: crypto.randomUUID(), countryId: "Belarus", title: 'Brest', value: 'Brest'},
    {id: crypto.randomUUID(), countryId: "Belarus", title: 'Vitebsk', value: 'Vitebsk'},
    {id: crypto.randomUUID(), countryId: "Russia", title: 'Moscow', value: 'Moscow'},
    {id: crypto.randomUUID(), countryId: "Russia", title: 'Pskov', value: 'Pskov'},
    {id: crypto.randomUUID(), countryId: "Belarus", title: 'Vladivostok', value: 'Vladivostok'}
]

const SelectMemo = React.memo(Select)


export const SelectWithBelarusCities = () => {
    const [cities, setCities] = useState<ItemType[]>(initialCities)
    const [value, setValue] = useState<string | null>('Minsk')
    const filteredCities = useMemo(() => cities.filter(c => c.countryId === 'Belarus'), [cities])
    return <SelectMemo value={value} onChange={setValue} items={filteredCities}/>

}

