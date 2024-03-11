
import axios from 'axios';
import './firstSection.sass'
// import Logo from "../../../assets/img/8c4534da-2b6a-4436-a679-ba4039c9d244.png"
import { useState } from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
import photo from '../../../assets/img/photo proche.jpeg'


export const FirstSection = () => {
    const navigate = useNavigate()





    return (
        <>

  

            <div className='bg-[#fae0df] flex flex-col lg:flex-row h-screen w-screen'>
    <div className='flex flex-col items-center justify-center w-full lg:w-1/2 gap-4'>
        <h1 className='text-5xl lg:text-7xl font-serif font-bold'>Kawtar Adlany</h1>
        <p className='text-lg lg:text-xl font-serif'>Web Developer / Copywriter SEO</p>
    </div>
    <div className='w-full lg:w-1/2 flex flex-col justify-center items-center'>
        <div className='grid grid-rows-3 gap-8'>
            <h1 className='text-7xl lg:text-9xl font-serif hover:translate-x-4 cursor-pointer' onClick={(e) => { navigate(`/about`) }}>ABOUT ME</h1>
            <h1 className='text-7xl lg:text-9xl font-serif hover:translate-x-4 cursor-pointer' onClick={(e) => { navigate(`/test`) }}>WORK</h1>
            <h1 className='text-7xl lg:text-9xl font-serif hover:translate-x-4 cursor-pointer' onClick={(e) => { navigate(`/contact`) }}>CONTACT</h1>
        </div>
    </div>
</div>





        </>
    );
}
