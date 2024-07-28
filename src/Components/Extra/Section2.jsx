import car from '/car-solid.svg'
import dolar from '/hand-holding-dollar-solid.svg'
import people from '/people-group-solid.svg'
import oil from '/oil-can-solid.svg'

const Section2 = () => {
    return (
        <div className=' w-full flex flex-col lg:flex-row justify-center  items-center gap-16 p-4 bg-gray-100'>
            <div className='flex flex-col p-6 text-center space-y-1'>
                <img className='w-20 mx-auto' src={car} alt="" />
                <h1 className='text-xl font-bold'>260</h1>
                <p className='font font-semibold'>Cars sold</p>
            </div>
            <div className='flex flex-col p-6 text-center space-y-1'>
                <img className='w-20 mx-auto' src={dolar} alt="" />
                <h1 className='text-xl font-bold'>$8000</h1>
                <p className='font font-semibold'>Amount Sold</p>
            </div>
            <div className='flex flex-col p-6 text-center space-y-1'>
                <img className='w-20 mx-auto' src={people} alt="" />
                <h1 className='text-xl font-bold'>99.99%</h1>
                <p className='font font-semibold'>Customer Satisfaction</p>
            </div>
            <div className='flex flex-col p-6 text-center space-y-1'>
                <img className='w-20 mx-auto' src={oil} alt="" />
                <h1 className='text-xl font-bold'>1,600</h1>
                <p className='font font-semibold'>Oil Changes</p>
            </div>
        </div>
    );
};

export default Section2;