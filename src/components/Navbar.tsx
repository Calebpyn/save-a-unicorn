import { useEffect, useState } from 'react';
import { GiUnicorn } from "react-icons/gi";
import { RiMenu5Fill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';



const Navbar = () => {

    const [movil, setMovil] = useState(false);

    const [sideBar, setSideBar] = useState(false);

    const [navBarBg, setNavBarBg] = useState(false);

    const [aboutUs, setAboutUs] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 768) {
            setMovil(true);
        } else {
            setMovil(false);
        }
    }, [])

    const handleSideBar = () => {
        setSideBar(!sideBar)
    }


    const scrollAction = () => {
        if (window.scrollY > 400) {
            setNavBarBg(true)
        } else {
            setNavBarBg(false)
        }
    }

    window.addEventListener('scroll', scrollAction)


    return (
        <div className={navBarBg ? 'fixed top-0 w-full h-[5rem] text-white flex-col flex items-center z-[900] bg-[#22116c] transitions' : 'fixed top-0 w-full h-[5rem] text-white flex-col flex items-center z-[900] bg-transparent transitions'}>
            <div className='max-w-7xl flex justify-between w-full h-full items-center px-5'>
                <span className='text-4xl lg:text-5xl'><GiUnicorn /></span>
                {movil ? <button className='text-3xl' onClick={() => handleSideBar()}><RiMenu5Fill /></button> : <div className='flex gap-5 font-thin'>
                    <button onClick={() => setAboutUs(!aboutUs)}>About</button>
                    <button onClick={() => window.location.href = 'https://portfolio-caleb.vercel.app/'}>Contact</button>
                </div>}
            </div>

{
    movil ?
        <div className={sideBar ? 'fixed top-0 right-0 w-1/2 h-screen backdrop-blur-xl bg-black/[.5] flex flex-col justify-start transitions' : 'fixed top-0 right-0 w-1/2 h-screen backdrop-blur-xl bg-black/[.5] flex flex-col justify-start translate-x-[100%] transitions'}>
            <div className='h-auto w-full flex justify-end items-end px-5 py-5'>
                <button onClick={() => handleSideBar()}>
                    <IoCloseOutline className='text-3xl' />
                </button>
            </div>
            <div className='flex flex-col justify-around items-start px-5 text-xl h-[25%] font-thin'>
                <button onClick={() => setAboutUs(!aboutUs)}>About</button>
                <button onClick={() => window.location.href = 'https://portfolio-caleb.vercel.app/'}>Contact</button>
            </div>
        </div>
        : null
}


{
    movil ?
        <div className={aboutUs ? 'fixed top-0 left-0 w-1/2 h-screen backdrop-blur-xl bg-black/[.5] flex flex-col justify-between transitions' : 'fixed top-0 left-0 w-1/2 h-screen backdrop-blur-xl bg-black/[.5] flex flex-col justify-between -translate-x-[100%] transitions'}>
            <div className='flex flex-col justify-around items-start px-5 text-xl font-thin mt-10'>
                <p>Welcome to "Save the Unicorns", a passionate initiative dedicated to preserving the existence of these magnificent creatures that grace our world. At "Save the Unicorns", we believe in the power of collective action to make a difference in the lives of these endangered beings.</p>
            </div>
            <div className="flex justify-center items-center w-full py-5 mb-10">
                <button className='border-white text-1xl border-2 rounded-full py-2 md:py-3 px-5 md:px-14 text-white font-light hover:bg-white hover:text-[#22116C] transitions' onClick={() => {
                    setAboutUs(!aboutUs)
                    setSideBar(!sideBar)
                }}>Close</button>
            </div>
        </div> : <div className={aboutUs ? 'fixed top-0 left-0 w-1/4 h-screen backdrop-blur-xl bg-black/[.5] flex flex-col justify-between transitions' : 'fixed top-0 left-0 w-1/4 h-screen backdrop-blur-xl bg-black/[.5] flex flex-col justify-between -translate-x-[100%] transitions'}>
            <div className='flex flex-col justify-around items-start px-5 text-xl font-thin mt-10'>
                <p>Welcome to "Save the Unicorns", a passionate initiative dedicated to preserving the existence of these magnificent creatures that grace our world. At "Save the Unicorns", we believe in the power of collective action to make a difference in the lives of these endangered beings.</p>
            </div>
            <div className='h-[10%] flex justify-center items-center mb-5'>
                <button onClick={() => setAboutUs(!aboutUs)} className='border-white text-1xl border-2 rounded-full py-2 md:py-3 px-5 md:px-14 text-white font-light hover:bg-white hover:text-[#22116C] transitions'>Close</button>
            </div>
        </div>
}
        </div >
    );
};

export default Navbar;

