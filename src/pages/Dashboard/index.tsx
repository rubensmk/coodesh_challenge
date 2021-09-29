import { useContext, useEffect, useState } from 'react';
import Header from '../../components/Header';
import { RiUserSearchFill } from 'react-icons/ri';
import Table from '../../components/Table';
import TableRow from '../../components/TableRow';
import { UsersContext } from '../../context/UsersContext';
import UserInfoModal from '../../components/UserInfoModal';
import { UsersResultsData } from '../../context/types';

const Dashboard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalUser, setModalUser] = useState<UsersResultsData>({} as UsersResultsData);
    const { results, fetchData, info } = useContext(UsersContext);


    const handleOpenModal = (user: UsersResultsData) => {
        setModalUser(user);
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <Header />
            <main className="flex justify-center items-center w-full">
                <section className="flex-column mt-20 w-9/12 mb-12">
                    <p className=" flex justify-center  text-lg font-medium text-left">
                        Opus igitur est dicere possit dura omni specie, "Tu  autem in specie, non videntur, nec<br />omnino res est." Et examine ab eis praecepta eius quae habes, et primo et principaliter."
                    </p>
                    <div className="flex justify-center items-center mt-6">
                        <input type="text" className="border-2 border-gray-300 w-3/6 h-10 p-4" placeholder="Searching" />
                        <RiUserSearchFill size={30} />
                    </div>
                    <Table totalResults={info.results}>
                        {results.map(user => (
                            <TableRow name={`${user.name.first} ${user.name.last}`} gender={user.gender} birthday={user.birthday} handleOpenModal={() => handleOpenModal(user)} />
                        ))}
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