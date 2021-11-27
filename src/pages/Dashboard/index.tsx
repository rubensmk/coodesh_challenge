/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import Header from '../../components/Header';
import { RiUserSearchFill } from 'react-icons/ri';

import Table from '../../components/Table';
import TableRow from '../../components/TableRow';
import { UsersContext } from '../../context/user/UsersContext';
import UserInfoModal from '../../components/UserInfoModal';
import { UsersResultsData } from '../../context/user/types';
import SearchByFilter from '../../components/SearchByFilter';
import { useParams, useHistory } from 'react-router';

interface Params {
    id: string;
    page: string;
}
const Dashboard = () => {
    const params = useParams<Params>();
    const history = useHistory();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState(search);
    const [filteredList, setFilteredList] = useState<UsersResultsData[]>([]);
    const { results, fetchData, info, loading, gender, searchBy, fetchUser, singleUserInfo, setSearchBy } = useContext(UsersContext);

    const handleOpenModal = (userID: string) => {
        fetchUser(+params.page, userID);
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {

        setIsModalOpen(false);
    }

    const handleNextPage = () => {
        history.push(`/page=${+params.page + 1}`)
    }

    const handlePrevPage = () => {
        history.push(`/page=${+params.page - 1}`)
    }
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    const handleSearch = (term: string) => {
        if (searchBy === 'by Name') {
            let filtered = results.filter(result => {
                const arr = term.split(' ');
                return arr.some(el => result.name.first.toLowerCase().includes(el) || result.name.last.toLowerCase().includes(el));
            })
            setFilteredList(filtered);
        }

        if (searchBy === 'by Nationality (Ex:BR,FR,US)') {
            let filtered = results.filter(result => {
                const arr = term.split(' ');
                return arr.some(el => result.nat.toLowerCase().includes(el));
            })
            setFilteredList(filtered);
        }
    }

    const handleSideBar = (isOpen: boolean) => {

    }

    useEffect(() => {
        async function orderByGender() {
            if (gender === 'all') {
                fetchData(+params.page);
            }
            if (gender === 'female') {
                const filteredData = results.sort((a, b) => {
                    if (a.gender < b.gender) {
                        return -1;
                    }
                    if (a.gender > b.gender) {
                        return 1;
                    }
                    return 0;
                });
                setFilteredList(filteredData);
            }
            if (gender === 'male') {
                const filteredData = results.sort((a, b) => {
                    if (a.gender < b.gender) {
                        return 1;
                    }
                    if (a.gender > b.gender) {
                        return -1;
                    }
                    return 0;
                });
                setFilteredList(filteredData);
            }
        }
        orderByGender();
        setFilteredList([]);
    }, [gender]);

    useEffect(() => {
        setSearch('');
        if (params.id !== undefined) {
            fetchUser(Number(params.page), params.id);
            setIsModalOpen(true);
        }
        fetchData(+params.page);
    }, [params.page]);

    useEffect(() => {
        const timer = setTimeout(() => setSearch(debouncedSearch), 1000);
        return () => clearTimeout(timer);
    }, [debouncedSearch]);

    useEffect(() => {
        if (search !== '') {
            handleSearch(search);
        }
        else {
            setSearch('');
        }
    }, [search]);

    return (
        <div>
            <Header/>
            <main className="flex justify-center items-center">
                <section className="flex-column w-auto">
                    <div className="bg-tableBackgroundColor p-20 m-5 rounded-2xl shadow-inner">
                        <div className="flex-column justify-center items-center">
                            <section className="flex justify-center items-center">
                                <input type="text" className="border-2 border-gray-300 w-3/6 h-10 p-4" placeholder={`Searching ${searchBy ? searchBy : 'by Name'}`} onChange={handleInput} value={search} />
                                <RiUserSearchFill size={30} />
                                <SearchByFilter />
                            </section>
                        </div>
                        <Table totalResults={info.results} currentPage={info.page} handleNextPage={handleNextPage} handlePrevPage={handlePrevPage}>
                            {search !== '' ? filteredList.map(user => (
                                <TableRow key={user.login.uuid} name={`${user.name.first} ${user.name.last}`} gender={user.gender} birthday={user.birthday} handleOpenModal={() => handleOpenModal(user.login.uuid)} />
                            )) :
                                results.map(user => (
                                    <TableRow key={user.login.uuid} name={`${user.name.first} ${user.name.last}`} gender={user.gender} birthday={user.birthday} handleOpenModal={() => handleOpenModal(user.login.uuid)} />
                                ))
                            }
                        </Table>
                    </div>
                </section>

                {isModalOpen ? (
                    <UserInfoModal handleCloseModal={handleCloseModal} data={singleUserInfo[0]} />
                ) : null}
            </main>
        </div>

    )
}

export default Dashboard;