import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { FaRegHeart } from 'react-icons/fa'
import { FaRegComment } from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'
import { FaRegBookmark } from 'react-icons/fa'

const Posting = ({ name, profile, posting, suka, like, status }) => {
    return (
        <div> 
            <div className="justify-between flex pt-2">
                <div className="flex w-full items-center p-2 pl-2 border-t-2  border-[#DADADA] " >
                    <div className="w-10 h-10 flex">
                        <img src={profile} alt="" className="object-cover rounded-full" />
                    </div>
                    <p className="ml-2">{name}</p>
                </div>
                <div className="flex items-center border-t-2  border-t[#DADADA]- pr-2">
                    <BiDotsHorizontalRounded className="flex-end text-[20px] font-bold" />
                </div>
            </div>
            <div className="w-full h-[375px]">
                <img src={posting} alt="" className='object-cover  h-full' />
            </div>

            <div className="flex justify-between p-3 ">
                <div className="flex gap-3">
                    <FaRegHeart className='w-[24px] h-[24px]' />
                    <FaRegComment className='w-[24px] h-[24px]' />
                    <FiSend className='w-[24px] h-[24px]' />
                </div>
                <div className="">
                    <FaRegBookmark className='w-[24px] h-[24px]' />
                </div>
            </div>

            <div className="pl-3 ">
                <p className='font-bold'>{suka} {like}</p>
                <p className=' h-12  w-full pr-4 truncate  '>
                    <span className='font-bold'>{name}</span>
                    {status}
                </p>
            </div>
        </div>
    )
}

export default Posting