import profile1 from '../assets/profile1.jpg'
import profile2 from '../assets/profile2.jpg'
import profile3 from '../assets/profile3.jpg'
import profile4 from '../assets/profile4.jpg'
import setories1 from '../assets/setories1.jpg'
import setories2 from '../assets/setories2.jpg'
import setories3 from '../assets/setories3.jpg'
import setories4 from '../assets/setories4.jpg'
import Galeri from './Galeri'

const GaleriMaping = () => {
    const galeriAset = [
        {
            img: profile1,
        },
        {
            img: profile2,
        },
        {
            img: profile3,
        },
        {
            img: profile4,
        },

        {
            img: setories1,
        },
        {
            img: setories2,
        },
        {
            img: setories3,
        },
        {
            img: setories4,
        },
    ]
    return (
        <div className='grid grid-cols-3 gap-1 gap-r-1'>
            {galeriAset.map((galeriAset) => (
                    <Galeri img={galeriAset.img} />
            ))}
        </div>
    )
}

export default GaleriMaping