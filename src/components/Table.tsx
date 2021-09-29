import { ReactNode } from "react";

interface TableProps {
    children: ReactNode;
}

const Table = ({ children }: TableProps) => {
    return (
        <table className="table-fixed mt-8 border-2 border-gray-400 w-3/4 mx-auto">
            <thead className="border-2 border-gray-400 bg-tableBackgroundColor">
                <tr >
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Birth</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody className="border-2 border-gray-400">
                {children}
            </tbody>
        </table>
    );
}

export default Table;