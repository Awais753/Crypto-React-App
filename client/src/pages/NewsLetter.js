import { Link } from 'react-router-dom';
import pixelArrow from '../images/Pixel-Arrow.png';
import '../styles/newsletter.css'
import logoName from '../images/color variants.png';
import logoShoe from '../images/logo shoe.gif';
import bgShoe from '../images/newsletter-bg.png';
import { useContext } from 'react';
import AssetContext from '../context/AssetContext';

const NewsLetter = () => {
    const {owner} = useContext(AssetContext);
    
    return(
        <>
        <div className="flex flex-row w-full h-screen">
            <div className="flex flex-col w-full h-full lg:w-1/2">
               <div className="w-9/12 mx-auto h-1/4 sm:h-1/3" >
                   <Link className="flex flex-row justify-start items-center h-40 mx-auto space-x-5" to="/"> 
                       <div className="arrow-move">
                           <img src={pixelArrow} alt={"back icon"}/>
                       </div>
                       <div>
                           <div className={`flex h-5 w-20 sm:h-7 sm:w-56 `}>
                               <img src={logoName} alt="logo" />
                               <img src={logoShoe} alt="logo" />
                           </div>
                       </div>
                   </Link>
               </div>
               <div className="w-9/12 mx-auto h-2/3">
                   <div className="flex flex-row">
                       <div className="flex flex-col justify-center space-y-10">
                           <div>
                               <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl xl:text-5xl dark:text-white">They're gonna look good on you.</h1>
                           </div>
                           <div className="text-xs sm:text-base dark:text-white">
                               ...and you are oficially our favourite ❤️. We can't wait to show you what what we've been working on. Stay tuned.
                           </div>
                           <div className="flex flex-row space-x-4 items-center text-xs sm:text-sm sm:space-x-7" >
                               <Link to="/" className="bg-black border-none text-white px-4 py-2">Back Home</Link>
                               <a  href={(owner) ? "https://opensea.io/accounts/"+owner : "#"}  className="underline dark:text-white" rel="noreferrer" target={"_blank"}>
                                   Visit us at OpenSea.io 
                               </a>
                           </div>
                       </div>
                   </div>
               </div> 
               <div className="flex flex-row justify-end md:hidden h-1/3 w-full">
                    <img src={bgShoe}  className="bounce-in-top" alt="bg shoe" />
               </div>
           </div>
           <div className="hidden md:flex md:flex-col justify-end w-1/2">
                <img src={bgShoe} className="bounce-in-top self-end " alt="bg shoe" />
           </div>
        </div>
        <div className="hidden md:flex md:flex-row w-full h-24">
            <div className="flex flex-col w-full justify-end" >
                <div className="h-full" style={{backgroundColor:"#F0F0EE"}}></div>
            </div>
        </div>
            
        </>
    );
}

export default NewsLetter;