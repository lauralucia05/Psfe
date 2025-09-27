import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
    return (
        <div id='speciality' className='flex flex-col items-center gap-4 py-16 text-[#262626]'>
            <h1 className='text-4xl md:text-5xl font-medium'>Find by Condition</h1>
            <p className='sm:w-1/3 text-center text-base md:text-lg'>Explore our expertise in treating a range of mental health conditions. Schedule your appointment hassle-free.</p>
            <p className='sm:w-1/2 text-center text-sm md:text-base text-blue-700 font-medium mt-2'>Leading the charge against depression, anxiety, PTSD, OCD, ADHD, chronic pain & tinnitus.</p>
            <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll '>
                {specialityData.map((item, index) => (
                    <Link
                        to={'/doctors'}
                        onClick={() => window.scrollTo(0, 0)}
                        className='flex flex-col items-center text-sm md:text-base cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'
                        key={index}
                    >
                        <img className='w-20 h-20 object-cover rounded-full mb-2' style={{width: '80px', height: '80px'}} src={item.image} alt={item.speciality} />
                        <p className='font-medium'>{item.speciality}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SpecialityMenu