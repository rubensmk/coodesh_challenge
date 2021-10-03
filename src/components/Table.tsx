import { ReactNode, useContext } from "react";
import { UsersContext } from "../context/UsersContext";
import ReactLoading from 'react-loading';
import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr'
import { CgArrowsExchangeAltV } from 'react-icons/cg'
import { useParams } from "react-router";
interface TableProps {
    children: ReactNode;
    totalResults: number;
    currentPage: number;
    handleNextPage: () => void;
    handlePrevPage: () => void;
}

interface Params {
    id: string;
    page: string;
}

const Table = ({ children, totalResults, currentPage, handleNextPage, handlePrevPage }: TableProps) => {
    const { loading, setGender, gender } = useContext(UsersContext);
    const params = useParams<Params>();
    function handleSubmitFilter() {
        if (gender === 'all') {
            setGender('male');
        } else if (gender === 'male') {
            setGender('female');
        } else if (gender === 'female') {
            setGender('all');
        }
    }

    if (loading) {
        return (
            <div className="flex justify-center items-center mt-28">
                <ReactLoading type="spinningBubbles" color="#293845" width="42px" height="42px" />
                <h2 className="text-xl ml-4">Loading...</h2>
            </div>
        )
    }
    return (
        <div className="flex-column justify-center items-center w-auto">
            <div className="flex justify-between items-center">
                <p className="text-lg mt-6">Busca: {totalResults} resultados </p>
                <p className="text-lg mt-6">Página: {currentPage}</p>
            </div>

            <table className="table-fixed mt-2 border-2 border-gray-400 w-full mx-auto">
                <thead className="border-2 border-gray-400 bg-tableBackgroundColor p-2">
                    <tr>
                        <th className="border-r border-gray-500 w-60 py-2">Name</th>
                        <th className="border-r border-gray-500 w-44 py-2">
                            <div className="flex justify-between items-center mr-2">
                                <div />
                                <p className="ml-6">Gender</p>
                                <CgArrowsExchangeAltV size={26} color="#293845" onClick={handleSubmitFilter} />
                            </div>
                        </th>
                        <th className="border-r border-gray-500 w-44 py-2">Birth</th>
                        <th className="border-gray-500 w-44 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody className="border-2 border-gray-400">
                    {children}
                </tbody>
            </table>
            <div className="flex justify-between items-center mt-6">
                {params.page === '1' ? null : (
                    <button className=" flex flex-row-reverse justify-center items-center" onClick={handlePrevPage}>
                        <p>Página Anterior</p>
                        <GrFormPreviousLink size={22} color="#293845" />
                    </button>
                )}
                <p className="text-lg">Página: {currentPage}</p>
                <button className=" flex flex-row justify-center items-center" onClick={handleNextPage}>
                    <p>Próxima Página</p>
                    <GrFormNextLink size={22} color="#293845" />
                </button>
            </div>
        </div >
    );
}

export default Table;