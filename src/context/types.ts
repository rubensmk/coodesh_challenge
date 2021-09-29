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
    }
}

export interface UsersInfoData {
    page: number;
    results: number;
}

export interface UsersContextData {
    results: UsersResultsData[];
    info: UsersInfoData;
    fetchData: () => void;
}

export interface UsersProviderProps {
    children: ReactNode;
}