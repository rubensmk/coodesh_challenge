import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import Header from '../../components/Header';
import { RiUserSearchFill } from 'react-icons/ri';

import Table from '../../components/Table';
import TableRow from '../../components/TableRow';
import { UsersContext } from '../../context/UsersContext';
import UserInfoModal from '../../components/UserInfoModal';
import { UsersResultsData } from '../../context/types';
import LastTableRow from '../../components/LastTableRow';

const Dashboard = () => {
    const observer = useRef<any>();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [filteredList, setFilteredList] = useState<UsersResultsData[]>([]);
    const [page, setPage] = useState(1);
    const [modalUser, setModalUser] = useState<UsersResultsData>({} as UsersResultsData);
    const { results, fetchData, info, loading } = useContext(UsersContext);



    const lastItemRef = useCallback((node) => {
        if (loading) return;
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setPage(prevPageNumber => prevPageNumber + 1)
            }
        })
        if (node) observer.current.observe(node)
    }, [loading]);

    const handleOpenModal = (user: UsersResultsData) => {
        setModalUser(user);
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    const handleSearch = () => {
        const filtered = results.filter(name => name.name.first === search);
        setFilteredList(filtered);
    }
    useEffect(() => {
        fetchData(page);
    }, [page]);

    return (
        <div>
            <Header />
            <main className="flex justify-center items-center w-full">
                <section className="flex-column mt-20 w-9/12 mb-12">
                    <p className=" flex justify-center  text-lg font-medium text-left">
                        Opus igitur est dicere possit dura omni specie, "Tu  autem in specie, non videntur, nec<br />omnino res est." Et examine ab eis praecepta eius quae habes, et primo et principaliter."
                    </p>
                    <div className="flex justify-center items-center mt-6">
                        <input type="text" className="border-2 border-gray-300 w-3/6 h-10 p-4" placeholder="Searching" onChange={handleInput} value={search} />
                        <button onClick={() => setSearch('')}>Apagar filtro</button>
                        <RiUserSearchFill size={30} onClick={handleSearch} />
                    </div>
                    <Table totalResults={info.results}>
                        {search !== '' ? filteredList.map(user => (
                            <TableRow key={user.login.uuid} name={`${user.name.first} ${user.name.last}`} gender={user.gender} birthday={user.birthday} handleOpenModal={() => handleOpenModal(user)} />
                        )) :

                            results.map((user, index) => {
                                if (results.length === index + 1) {
                                    return <LastTableRow lastItemRef={lastItemRef} key={user.login.uuid} name={`${user.name.first} ${user.name.last}`} gender={user.gender} birthday={user.birthday} handleOpenModal={() => handleOpenModal(user)} />
                                } else {
                                    return <TableRow key={user.login.uuid} name={`${user.name.first} ${user.name.last}`} gender={user.gender} birthday={user.birthday} handleOpenModal={() => handleOpenModal(user)} />
                                }
                            })

                        }
                    </Table>
                </section>

                {isModalOpen ? (
                    <UserInfoModal handleCloseModal={handleCloseModal} data={modalUser} />
                ) : null}
            </main>
        </div>

    )
}

export default Dashboard;