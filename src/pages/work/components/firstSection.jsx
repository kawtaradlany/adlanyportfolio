
import axios from 'axios';
import './firstSection.sass'
// import Logo from "../../../assets/img/8c4534da-2b6a-4436-a679-ba4039c9d244.png"
import photocv from "../../../assets/img/photo avec smile (1).jpeg"
import todolist from "../../../assets/img/todoliste7.jpg"
import crypto from "../../../assets/img/crypto.jpg"
import ecom from "../../../assets/img/ecom.jpg"


import { useNavigate } from 'react-router-dom';


export const FirstSection = () => {





    return (
        <>


            <div className='bg-[#fae0df] p-5 h-screen'>
                <div className='mb-10'>
                    <h1 className='text-5xl lg:text-7xl text-center font-serif'>Experiences</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <div className='bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
                        <a href="#" className='flex flex-col items-center'>
                            <img className='object-cover w-full rounded-t-lg h-48 md:h-96' src={todolist} alt="" />
                            <div className='flex flex-col justify-between p-4 leading-normal'>
                                <h5 className='text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>TO DO LISTE</h5>
                                <p className='text-base md:text-lg font-normal text-gray-700 dark:text-gray-400'>I had the pleasure of creating a 'To Do List' application that simplifies the organization of your daily life, with a user-friendly interface and priority tracking functionality.</p>
                            </div>
                        </a>
                    </div>
                    <div className='bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
                        <a href="#" className='flex flex-col items-center'>
                            <img className='object-cover w-full rounded-t-lg h-48 md:h-96' src={crypto} alt="" />
                            <div className='flex flex-col justify-between p-4 leading-normal'>
                                <h5 className='text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>CRYPTO DASHBORD</h5>
                                <p className='text-base md:text-lg font-normal text-gray-700 dark:text-gray-400'>I had the pleasure of creating a cryptocurrency dashboard that provides a comprehensive overview of crypto, with real-time data and intuitive visualization.</p>
                            </div>
                        </a>
                    </div>
                    <div className='bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
                        <a href="#" className='flex flex-col items-center'>
                            <img className='object-cover w-full rounded-t-lg h-48 md:h-96' src={ecom} alt="" />
                            <div className='flex flex-col justify-between p-4 leading-normal'>
                                <h5 className='text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>E-COMMERCE STORE</h5>
                                <p className='text-base md:text-lg font-normal text-gray-700 dark:text-gray-400'>I had the pleasure of creating an e-commerce store that offers a seamless shopping experience, with user-friendly navigation and secure payment options.</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>



        </>
    );
}
