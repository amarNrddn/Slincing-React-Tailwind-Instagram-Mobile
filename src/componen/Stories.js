
const Stories = ({ img, sorotan, new1, style, border,newSorotan, }) => {
    return (
        <div className="">
            <div className="w-[4rem] h-[4rem] flex rounded-full bg-gray-400">
                <img src={img} alt="" className="obejct-cover rounded-full p-1 " />
            </div>
            <p>{sorotan}</p>
            <p>{new1}</p>
        </div>
    )
}

export default Stories