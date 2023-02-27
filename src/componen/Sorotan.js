import setories1 from '../assets/setories1.jpg'
import setories2 from '../assets/setories2.jpg'
import setories3 from '../assets/setories3.jpg'
import setories4 from '../assets/setories4.jpg'
import Stories from './Stories'

const Sorotan = () => {
    const stories = [
        {
            img: setories1,
            sorotan: 'setories1',
        },
        {
            img: setories2,
            sorotan: 'setories2' 
        },
        {
            img: setories3,
            sorotan: 'setories3' 
        },
        {
            img: setories4,
            sorotan: 'setories4' 
        },
        {
            img: setories3,
            sorotan: 'setories3' 
        },
    ]


    return(
        <div className='flex px-[17px] gap-3 mt-[7px]'>
            {stories.map((stori) => (
                <Stories img={stori.img} sorotan={stori.sorotan} new1={stori.new1} style={stori.style} border={stori.border} />
            ))}
        </div>
    )
}

export default Sorotan