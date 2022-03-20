import React, { useState } from 'react';
import {T} from './styled';

type SortingOrder = 'asc' | 'desc' | undefined;

const getNextSortingOrder = (order: SortingOrder) => {
    if (order === 'desc') return 'asc';
    if (order === 'asc') return undefined;
    return 'desc';
}


export function Table({data}) {

    const [sortingState, setSortingState] = useState<{key: string | undefined, order: SortingOrder}>({key: undefined, order: undefined});
    const [filterState, setFilterState] = useState<{[key: string]: string} | {}>({});
    
    const sort = data => {
        const {key, order} = sortingState;
        if(key === 'amount') {
            if (order === 'desc') return [...data].sort((a, b) => b[key] - a[key]);
            if (order === 'asc') return [...data].sort((a, b) => a[key] - b[key]);
        }
        if(key === 'createdAt') {
            if (order === 'desc') return [...data].sort((a, b) => Date.parse(b[key]) - Date.parse(a[key]));
            if (order === 'asc') return [...data].sort((a, b) => Date.parse(a[key]) - Date.parse(b[key]));
        }
        return data;
    };

    const filter = data => {
        const filterKeys = Object.keys(filterState);
        return data.filter((item) => {
            return filterKeys.every(key => {return item[key]?.toLowerCase().includes(filterState[key].toLowerCase())});
        });
    };

    const keys = Object.keys(data[0]);
  return (
            <T>
                <thead>
                    <tr>
                        {
                            keys.map((key) => <th key={key} onClick={
                                () => {
                                    if(sortingState.order === undefined) {

                                    }
                                    if(key === 'amount' || key === 'createdAt') {
                                        
                                        if (sortingState.key === key) {
                                            setSortingState({key, order: getNextSortingOrder(sortingState.order)});
                                        } else {
                                            setSortingState({key, order: 'desc'});
                                        }
                                        
                                    }
                                }
                            }>{key}{(key === 'firstName' || key === 'lastName' || key === 'country' || key === 'mfa') 
                                && (
                                    <input 
                                        type="text" 
                                        id="filter" 
                                        placeholder={key}
                                        onChange={event => {setFilterState({...filterState, [key]: event.target.value});}}
                                    />
                                    
                                )}
                            </th>)
                        }
                    </tr>
                </thead>
                <tbody>
                {filter(sort(data)).map((item, index) => (<tr key={index}>
                    {keys.map((key, i) =>  <td key={i}>{item[key]}</td>)}
                </tr>)) }
                </tbody>
            </T>
        
    );
}
