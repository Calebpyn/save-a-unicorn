import { useEffect, useState } from 'react';
import imgAsset from '../imgs/asset1.jpeg';
import Navbar from './Navbar';
import { BackgroundGradientAnimation } from './ui/background-gradient-animation';



const Unicorns = () => {
    const randomNum = Math.floor(Math.random() * 3000001);

    const [randomNumber, setRandomNumber] = useState(randomNum);


    useEffect(() => {
        const interval = setInterval(() => {
            setRandomNumber(randomNumber + 1);
        }, Math.floor(Math.random() * (20000 - 1000 + 1) + 1000));

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='w-full flex flex-col items-center'>

            <BackgroundGradientAnimation className='h-screen flex-col flex justify-between items-center'>
                <Navbar />
                <div className='h-[90%] w-full flex justify-center items-center flex-col'>
                    <div className='flex-col flex items-center'>
                        <span className='text-white md:text-5xl text-xl font-bold'>Unicorns rescued so far.</span>
                        <span className='text-white md:text-[10rem] text-6xl font-bold transitions'>{randomNumber.toLocaleString('en-US')}</span>
                    </div>
                </div>
                <div className='h-[10%] z-[800] flex justify-center items-center mb-5'>
                    <button className='border-white text-1xl border-2 rounded-full py-2 md:py-3 px-5 md:px-14 text-white font-light hover:bg-white hover:text-[#22116C] transitions' onClick={() => alert("Thanks!")}>Donate</button>
                </div>
            </BackgroundGradientAnimation>

            <div className='max-w-7xl'>
                <div className='w-full h-auto py-10 flex justify-center items-center px-5'>
                    <span className='text-7xl font-thin'>Make the <span className='font-semibold text-[#22116c]'>difference.</span> Help a <span className='font-semibold text-[#722BBF]'>Unicorn.</span></span>
                </div>

                <div className='w-full h-auto lg:h-[30rem] flex justify-between items-center px-10 lg:flex-row flex-col'>
                    <div className='bg-white w-full lg:w-[40%] h-auto rounded-3xl shadow-2xl p-5'>
                        <img src={imgAsset} className='rounded-xl mb-3' />
                        <span className='text-sm font-thin'>Unicorn rescued in <span className='font-semibold'>Mexico, </span>2018.</span>
                    </div>
                    <div className='w-full lg:w-[60%] h-[15rem] lg:ml-10 p-5 flex justify-start overflow-auto lg:overflow-visible items-center'>
                        <p className="font-bold text-2xl">
                            Unicorns, despite their magical reputation, are real creatures facing real dangers. Encroachment on their habitats, poaching, and environmental degradation are just a few of the threats they face. According to recent studies, the unicorn population has declined by alarming rates in recent years. Data collected from unicorn conservation efforts indicate that thousands of unicorns are lost annually due to various human-induced factors.
                        </p>
                    </div>
                </div>
            </div>

            <div className='bg-[#6323AD] w-full h-[5rem] md:mt-20 mt-10 flex justify-center px-5 items-center text-white font-thin'>
                <div className='max-w-7xl flex justify-end items-center w-full'>
                    <span>SAVE A UNICORN. 2024 ©</span>
                </div>
            </div>
        </div>
    );
};

export default Unicorns;

