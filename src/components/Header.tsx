import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { MdLocalHospital } from 'react-icons/md';

const Header = () => {
    return (
        <header className="bg-white h-14 flex justify-between items-center p-6" >
            <div className="flex items-center">
                <MdLocalHospital size={34} color="#293845" />
                <h1 className="text-xl font-semibold ml-1">Lista de Pacientes</h1>
            </div>
            <div>
                <CgProfile size={34} color="#293845" />
            </div>
        </header>
    );
}

export default Header;