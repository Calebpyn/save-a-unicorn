import {useNavigate} from 'react-router-dom';
import { BackgroundGradientAnimation } from './ui/background-gradient-animation';

const LandingPage = () => {

    const navigate = useNavigate();

    return (
        <div className='h-screen w-full'>
            <BackgroundGradientAnimation>
                <div className='absolute w-full h-screen flex justify-center items-center z-[9999] flex-col px-5 md:px-5'>
                    <div className='w-auto h-auto flex flex-col justify-between items-center'>
                        <div className='flex flex-col justify-between text-left text-white font-black md:text-6xl text-4xl'>
                            <span className=''>Hey,</span>
                            <span className=''>Adopt a Unicorn.</span>
                        </div>

                        <div>
                        </div>

                        <div className='mt-10'>
                            <button onClick={() => navigate("/unicorns")} className='border-white text-1xl border-2 rounded-full py-2 md:py-3 px-5 md:px-14 text-white font-light hover:bg-white hover:text-[#22116C] transitions'>Help the cause</button>
                        </div>

                    </div>
                </div>
            </BackgroundGradientAnimation>
        </div>
    );
};

export default LandingPage