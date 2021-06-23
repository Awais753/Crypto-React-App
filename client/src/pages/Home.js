import React, { useEffect, useState } from 'react';
import CardList from '../components/CardList';
import "../styles/home.css"
import ColorButton from '../components/ColoredButton';

import logoName from '../images/color variants.png';
import logoShoe from '../images/logo shoe.gif';
import { Link } from 'react-router-dom';




const Home = () => {
    
    return(
        
        <>
            <div className="text-center my-8">
                <div className="w-1/2  sm:w-1/3 md:w-1/4 mx-auto py-4">
                    {/* <h3 className="font-semibold text-xl md:text-2xl mb-3">Crypto</h3> */}
                    <Link to="/">
                        <div className={`flex h-7 justify-center`}>
                            <img src={logoName} alt="logo" />
                            <img src={logoShoe} alt="logo" />
                        </div>
                    </Link>
                </div>
                <div className="sm:w-1/2 px-7 mx-auto py-4  dark:text-white">
                    <h1 className="font-bold text-2xl sm:text-3xl md:text-3xl lg:text-5xl ">Collectible Kicks for the digital age.</h1>
                </div>
                <div className="sm:w-1/2 text-xs sm:text-sm md:text-base mx-auto py-4 dark:text-white">
                    <p> <span className="font-extrabold">CryptoSneaks&trade;</span> are maticulously handmade, shoes.</p>
                    <p>Random shoe drops weekly. Don't miss'em.</p>
                </div>

                <div className="sm:w-1/2 lg:w-1/3 mx-auto py-4 ">
                    <div className="float-effect my-4 xl:mx-16"> 
                        <div className="message w-8/12 relative mx-auto text-sm lg:w-8/12">
                            <div className="text-xs py-2 top-0  mx-auto">
                                GET NOTIFIED OF SHOE DROPS
                            </div>
                        </div>
                        <div className="message_bottom">
                            <div className="message-bottom-1">
                                <div className="message-bottom-2">
                                    <div className="message-bottom-3"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mx-5 sm:mx-0 text-xs sm:text-base border-4 rounded border-black relative my-4">
                        <input placeholder={"you@youremail.com"} className="w-full p-1 px-2 focus:border-current focus-within:border-transparent" type="text" />
                        <ColorButton/>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-white">Email address used soley for shoe drop notifications. Scout's honor.</p>
                </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
            </div>
            
            <div className="w-10/12  grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10">
                <CardList/>
            </div>

        </>
    );
}

export default Home;