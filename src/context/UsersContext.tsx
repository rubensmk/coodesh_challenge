import { createContext, useState } from 'react'
import api from '../services/api';
import { UsersContextData, UsersInfoData, UsersProviderProps, UsersResultsData } from './types';


export const UsersContext = createContext({} as UsersContextData);

export function UsersProvider({ children }: UsersProviderProps) {

    const [results, setResults] = useState<UsersResultsData[]>([]);
    const [info, setInfo] = useState<UsersInfoData>({} as UsersInfoData);
    const [loading, setLoading] = useState(false);



    async function fetchData(pageNum: number) {
        setLoading(true);
        const response = await api.get(`?seed=default&results=50&page=${pageNum}`);
        let allResults = [...results];

        const formmatedResults = response.data.results.map((result: UsersResultsData) => {
            return {
                ...result,
                fullname: `${result.name.title} ${result.name.first} ${result.name.last}`,
                birthday: result.dob.date.split('T', 1)[0]
            }
        })
        allResults.push(...formmatedResults);
        setResults(allResults);
        setInfo(info);
        setLoading(false);
    }

    return (
        <UsersContext.Provider value={{ results, info, fetchData, loading }}>
            {children}
        </UsersContext.Provider>
    )
}