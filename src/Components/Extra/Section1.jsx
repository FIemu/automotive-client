import DrivenResult from '/chart-column-solid.svg'
import Technology from '/microchip-solid.svg'
import Culture from '/flag-solid.svg'
import Performance from '/chart-simple-solid.svg'

const Section1 = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-center items-center gap-16 p-4 border-b'>
            <div className='flex flex-col p-6 text-center border-r'>
                <img
                className='w-32 mx-auto'
                src={DrivenResult} alt="" />
                <h1 className='text-xl font-bold my-2'>Results Driven</h1>
                <p>Sed ut perspiciatis unde om nis natus error sit volup atem accusant dolorem que laudantium. Totam aperiam, eaque ipsa quae ai.</p>
            </div>
            <div className='flex flex-col p-6 text-center border-l border-r'>
                <img  className='w-32 mx-auto' src={Technology} alt="" />
                <h1 className='text-xl font-bold my-2'>Proven Technology</h1>
                <p>Sed ut perspiciatis unde om nis natus error sit volup atem accusant dolorem que laudantium. Totam aperiam, eaque ipsa quae ai.</p>
            </div>
            <div className='flex flex-col p-6 text-center border-l border-r'>
                <img className='w-32 mx-auto' src={Culture} alt="" />
                <h1 className='text-xl font-bold my-2'>Winning Culture</h1>
                <p>Sed ut perspiciatis unde om nis natus error sit volup atem accusant dolorem que laudantium. Totam aperiam, eaque ipsa quae ai.</p>
            </div>
            <div className='flex flex-col p-6 text-center border-l '>
                <img className='w-32 mx-auto' src={Performance} alt="" />
                <h1 className='text-xl font-bold my-2'>Top Performance</h1>
                <p>Sed ut perspiciatis unde om nis natus error sit volup atem accusant dolorem que laudantium. Totam aperiam, eaque ipsa quae ai.</p>
            </div>
        </div>
    );
};

export default Section1;