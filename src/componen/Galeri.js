
const Galeri = ({ img }) => {
    return (
        <div className="w-full" >
            <div className=" h-[7.3rem] flex">
                <img src={img} alt="" className="object-cover w-full" />
            </div>
        </div>
    )
}

export default Galeri