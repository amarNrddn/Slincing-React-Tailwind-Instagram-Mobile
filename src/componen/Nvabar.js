import Logo from '../assets/logo.png'
import { FaRegHeart } from 'react-icons/fa'
import { RiMessengerLine } from 'react-icons/ri'
import { FiPlusSquare } from 'react-icons/fi'
// import NavBtn from './NavBtn'
const Navbar = () => {
    return (
        <div className='w-full sticky top-0 shrink'>
            <div className='w-full flex items-center justify-between pt-3  bg-[#fff]'>
                <img src={Logo} alt="" className='p-2' />
                <div className="flex items-center pr-2 gap-5 text-[24px] font-bold">
                    <FiPlusSquare className='font-bold' />
                    <FaRegHeart className='font-bold text-[21px]' />
                    <RiMessengerLine />
                </div>
{/* 
                <div className="fixed bottom-0 z-60 ">
                    <NavBtn />
                </div> */}
            </div>
        </div>
    )
}

export default Navbar