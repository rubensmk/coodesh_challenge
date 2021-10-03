import { ReactNode } from "react";

export interface UsersResultsData {
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    },
    fullname: string;
    name: {
        title: string;
        first: string;
        last: string;
    },
    email: string;
    gender: string;
    birthday: string;
    dob: {
        age: number;
        date: string;
    },
    cell: string;
    phone: string;
    nat: string;
    location: {
        city: string;
        country: string;
        state: string;
        postcode: number;
        street: {
            name: string;
            number: number;
        }
    },
    login: {
        uuid: string;
    },
    fromPage: number;
}

export interface UsersInfoData {
    page: number;
    results: number;
}

export interface UsersContextData {
    results: UsersResultsData[];
    singleUserInfo: UsersResultsData[];
    info: UsersInfoData;
    loading: boolean;
    gender: string;
    searchBy: string;
    setGender: (gender: string) => void;
    setResults: ([]) => void;
    setSearchBy: (type: string) => void;
    fetchData: (page: number) => void;
    fetchUser: (page: number, id: string) => void;
}

export interface UsersProviderProps {
    children: ReactNode;
}