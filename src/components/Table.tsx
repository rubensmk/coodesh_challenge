import { ReactNode } from "react";

interface TableProps {
    children: ReactNode;
    totalResults: number;
}

const Table = ({ children, totalResults }: TableProps) => {
    return (
        <div className="flex-column justify-center items-center">
            <p className="text-lg ml-44 mt-6">Busca: {totalResults} resultados </p>
            <table className="table-fixed mt-2 border-2 border-gray-400 w-3/4 mx-auto">
                <thead className="border-2 border-gray-400 bg-tableBackgroundColor p-2">
                    <tr>
                        <th className="border-r border-gray-500 w-60 py-2">Name</th>
                        <th className="border-r border-gray-500 w-44 py-2">Gender</th>
                        <th className="border-r border-gray-500 w-44 py-2">Birth</th>
                        <th className="border-gray-500 w-44 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody className="border-2 border-gray-400">
                    {children}
                </tbody>
            </table>
        </div>
    );
}

export default Table;