import profile1 from '../assets/profile1.jpg'
import profile2 from '../assets/profile2.jpg'
import posting1 from '../assets/posting1.jpg'
import posting2 from '../assets/posting2.jpg'
import Posting from './Posting'

const Conten = () => {
    const contens =[
        {
            profile: profile1,
            name: 'Wiwit hesti',
            posting: posting1,
            suka: '100',
            like: 'Like',
            setatus: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et error optio rerum totam nihil possimus dolore dignissimos natus ratione reprehenderit?'
        },
        {
            profile: profile2,
            name: 'Wiwit',
            posting: posting2,
            suka: '100',
            like: 'Like',
            setatus: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et error optio rerum totam nihil possimus dolore dignissimos natus ratione reprehenderit?'
        },
    ]

    return(
        <div className="">
            {contens.map((conten) => (
                <Posting profile={conten.profile} name={conten.name} posting={conten.posting} suka={conten.suka} like={conten.like} status={conten.setatus}/>
            ))}
        </div>
    )
}

export default Conten