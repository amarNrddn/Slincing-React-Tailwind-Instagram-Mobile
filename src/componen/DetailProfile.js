import { IoIosArrowBack } from 'react-icons/io'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import profile from '../assets/profile2.jpg'
import Sorotan from './Sorotan'
import { BsColumnsGap } from 'react-icons/bs'
import { RiMapPinUserLine } from 'react-icons/ri'
import GaleriMaping from './GaleriMaping'

const DetailProfile = () => {

    return (
        <div className=''>
            {/* section navbar */}
            <div className="flex justify-between py-[11px] px-[15px]">
                <IoIosArrowBack className='w-[1.5rem] h-[1.5rem] font-bold' />
                <p className='font-bold'>Wiwit Hesty</p>
                <div className="flex gap-[17px]">
                    <IoMdNotificationsOutline className='w-[1.5rem] h-[1.5rem] font-bold' />
                    <BiDotsHorizontalRounded className='w-[1.5rem] h-[1.5rem] font-bold' />
                </div>
            </div>
            
            {/*section image */}
            <div className="flex items-center px-[16px] gap-[31px] ">
                <div className="w-[5.5rem] h-[5.5rem] flex bg-[hsla(9,76%,53%,1)] rounded-full">
                    <img src={profile} alt="" className='object-cover rounded-full p-1' />
                </div>
                <div className="flex gap-[22px]">
                    <div className="text-center">
                        <p className='text-[17px] font-bold'>0.000</p>
                        <p className='text-[13px]'>Post</p>
                    </div>
                    <div className="text-center">
                        <p className='text-[17px] font-bold'>0.000</p>
                        <p className='text-[13px]'>Post</p>
                    </div>
                    <div className="text-center">
                        <p className='text-[17px] font-bold'>0.000</p>
                        <p className='text-[13px]'>Post</p>
                    </div>
                </div>
            </div>
            {/* bio */}
            <div className="px-[15px] py-[7px] ">
                <p className='font-bold'>Wiwit Hesti</p>
                <div className="mt-[3px]">
                    <p className='text-[13px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor vitae nisi velit fuga, omnis placeat doloremque laudantium .</p>
                    <a href="https://openai.com/blog/chatgpt/" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">NGelink</a>
                </div>
                {/* edit profile */}
                <div className="border-2 border-[#DADADA] rounded-2 mt-[12px]">
                    <p className='text-center py-[7px] font-bold '>Edit Profile</p>
                </div>
            </div>

            {/* sorotan */}
            <div className="flex overflow-x-hidden">
                <Sorotan />
            </div>

            {/* postingan */}
            <div className="pt-[13px]">
                <div className="flex px-[85px] justify-between p-[13px]">
                    <BsColumnsGap className=' w-[1.2rem] h-[1.2rem] text-gray-800' />
                    <RiMapPinUserLine className='w-[1.6rem] h-[1.6rem] text-gray-500' />
                </div>
                <div className="">
                    <GaleriMaping />
                </div>
                <div className="pt-[5rem]"></div>
            </div>
        </div>
    )
}

export default DetailProfile