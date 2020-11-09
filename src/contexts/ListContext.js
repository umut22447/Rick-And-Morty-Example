import React, {
    createContext, useState, useContext, useEffect
} from 'react';
import { getCharacters } from '../api'

const ListContext = createContext({});

export const ListProvider = ({ children }) => {

    const [characterList, setCharacterList] = useState([]);

    const deleteListItem = (index) => {
        if (index > -1) {
            var tempCharacterList = [...characterList];
            tempCharacterList.splice(index, 1);
            setCharacterList(tempCharacterList);
        }
    }

    useEffect(() => {
        getCharacters().then(setCharacterList);
    }, [])

    return (
        <ListContext.Provider value={{ characterList, deleteListItem }}>
            {children}
        </ListContext.Provider>
    );
};

export const useList = () => useContext(ListContext);

export default ListContext;