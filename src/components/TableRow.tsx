interface TableRowProps {
    name: string;
    gender: string;
    birthday: string;
    handleOpenModal: () => void;
}

const TableRow = ({ name, gender, birthday, handleOpenModal }: TableRowProps) => {
    return (
        <tr >
            <td className="border-t border-r border-gray-400 text-center">{name}</td>
            <td className="border-t border-r border-gray-400 text-center capitalize">{gender}</td>
            <td className="border-t border-r border-gray-400 text-center p-2">{birthday}</td>
            <td className="border-t border-gray-400 text-center">
                <button
                    onClick={handleOpenModal}
                    className="bg-gray-200 px-2 border border-solid border-gray-400 rounded-sm 
                    hover:bg-textColor hover:text-gray-50 
                    transition duration-300 ease-in">
                    <span className="text-sm">
                        Visualizar
                    </span>
                </button>
            </td>
        </tr>
    );
}

export default TableRow;