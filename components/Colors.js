import Image from 'next/image'
import pimo1 from '../public/pimo1.jpg'

const Colors = () => {
    return (
        <div>
            <Image src={pimo1} alt="pimo" height={30} width={30} />
        </div>
    )
}

export default Colors
