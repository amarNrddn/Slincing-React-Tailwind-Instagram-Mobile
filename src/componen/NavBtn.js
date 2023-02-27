import { GrHomeRounded } from 'react-icons/gr'
import { FiSearch } from 'react-icons/fi'
import { BiMoviePlay } from 'react-icons/bi'
import { MdOutlineShoppingBag } from 'react-icons/md'
import Profile from '../assets/profil.jpg'
import { Routes, Route, Link, } from 'react-router-dom'
import Insta from './Insta'
import Test from './DetailProfile'


const NavBtn = () => {
    return (
        <div className='h-screen'>
            <div className='fixed  bottom-0 z-999'>
                <div className="flex items-center justify-between border-t-2  border-[#DADADA] w-screen pt-[10px] px-[31px] text-[25px] font-bold pb-7 bg-[#fff] ">
                    <Link to='/'>
                        <GrHomeRounded className=' w-[1.5rem] h-[1.5rem] text-bold' />
                    </Link>

                    <Link>
                        <FiSearch className=' w-[1.5rem] h-[1.5rem] text-bold' />
                    </Link>

                    <Link >
                        <BiMoviePlay className=' w-[1.5rem] h-[1.5rem] text-bold' />
                    </Link>

                    <Link >
                        <MdOutlineShoppingBag className=' w-[1.5rem] h-[1.5rem] text-bold' />
                    </Link>

                    <Link to='/detailprofile'>
                        <div className="w-8 h-8 flex bg-[#ec4899] rounded-full ">
                            <img src={Profile} alt="" className='object-cover rounded-full p-1' />
                        </div>
                    </Link>
                </div>
            </div>

            <Routes>
                <Route path='/' element={<Insta />} />
                <Route path='/detailprofile' element={<Test />} />
            </Routes>
        </div>
    )
}

export default NavBtn