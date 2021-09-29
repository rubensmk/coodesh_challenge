import { createContext, useState } from 'react'
import api from '../services/api';
import { UsersContextData, UsersInfoData, UsersProviderProps, UsersResultsData } from './types';



export const UsersContext = createContext({} as UsersContextData);

export function UsersProvider({ children }: UsersProviderProps) {

    const [results, setResults] = useState<UsersResultsData[]>([]);
    const [info, setInfo] = useState<UsersInfoData>({} as UsersInfoData);



    async function fetchData() {
        const response = await api.get('?results=50');
        const { results, info } = await response.data;

        const formmatedResults = results.map((result: UsersResultsData) => {
            return {
                ...result,
                fullname: `${result.name.title} ${result.name.first} ${result.name.last}`,
                birthday: result.dob.date.split('T', 1)[0]
            }
        })
        setResults(formmatedResults);
        setInfo(info);
    }


    return (
        <UsersContext.Provider value={{ results, info, fetchData }}>
            {children}
        </UsersContext.Provider>
    )
}