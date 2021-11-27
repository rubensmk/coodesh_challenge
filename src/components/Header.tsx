import { GiHamburgerMenu } from 'react-icons/gi'
import { GoSignOut } from 'react-icons/go'
import { ImProfile } from 'react-icons/im'

const Header = () => {
    return (
        <header className="bg-transparent h-14 flex justify-between items-center p-6" >
            <GiHamburgerMenu size={26} color="#FFFF"/>
            <div className=" flex flex-row gap-4">
                <ImProfile size={26} color="#FFFF"/>
                <GoSignOut size={26} color="#FFFF"/>
            </div>
        </header>
        
    );
}

export default Header;