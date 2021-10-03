import { createContext, useState } from 'react'
import api from '../services/api';
import { UsersContextData, UsersInfoData, UsersProviderProps, UsersResultsData } from './types';


export const UsersContext = createContext({} as UsersContextData);

export function UsersProvider({ children }: UsersProviderProps) {

    const [results, setResults] = useState<UsersResultsData[]>([]);
    const [singleUserInfo, setSingleUserInfo] = useState<UsersResultsData[]>([]);
    const [info, setInfo] = useState<UsersInfoData>({} as UsersInfoData);
    const [loading, setLoading] = useState(false);
    const [gender, setGender] = useState<string>('all');
    const [searchBy, setSearchBy] = useState<string>('');


    async function fetchData(pageNum: number) {
        setLoading(true);
        setSearchBy('by Name');
        const response = await api.get(`?seed=default&results=50&page=${pageNum}`);

        setResults([]);

        const formmatedResults = response.data.results.map((result: UsersResultsData) => {
            return {
                ...result,
                fullname: `${result.name.title} ${result.name.first} ${result.name.last}`,
                birthday: result.dob.date.split('T', 1)[0],
                fromPage: response.data.info.page
            }
        })
        setResults(formmatedResults);
        setInfo(response.data.info);
        setLoading(false);
    }

    async function fetchUser(pageNum: number, id: string) {
        const response = await api.get(`?seed=default&results=50&page=${pageNum}`);
        setSingleUserInfo([]);

        const formmatedResults: UsersResultsData[] = response.data.results.map((result: UsersResultsData) => {
            return {
                ...result,
                fullname: `${result.name.title} ${result.name.first} ${result.name.last}`,
                birthday: result.dob.date.split('T', 1)[0],
                fromPage: response.data.info.page
            }
        });

        const foundUser = formmatedResults.filter(user => user.login.uuid === id);
        setSingleUserInfo(foundUser);
    }

    return (
        <UsersContext.Provider value={{ results, info, fetchData, loading, fetchUser, singleUserInfo, setGender, gender, setResults, setSearchBy, searchBy }}>
            {children}
        </UsersContext.Provider>
    )
}