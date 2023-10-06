import { useState, useEffect } from "react";
import { loadCupons } from '../services/loadData';

export default function useCupons(topCount) {
    const [list, setList] = useState([]);

    useEffect(() => {
        const infoReturn = loadCupons();
        infoReturn.list.sort((cupom1, cupom2) => cupom1.distance - cupom2.distance);

        let newList = infoReturn.list; 

        if (topCount) {
            newList = newList.filter((cupom) => cupom.rating > 3);
            newList = newList.slice(0, topCount);
        }
        
        setList(newList);
    }, []);

    return list;
}