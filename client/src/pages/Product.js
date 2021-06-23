import { useParams } from 'react-router';
import '../styles/product.css';

import TransactionHostory from '../components/TransactionHistory';

import defaultImage from '../images/defaultCardImage.jpeg'
import logoName from '../images/color variants.png';
import logoShoe from '../images/logo shoe.gif';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AssetContext from '../context/AssetContext';

const Product = () => {
    const {assets} = useContext(AssetContext);
    const {id} = useParams();
    const asset = assets.find(x => x.id === parseInt(id));
    const token_id = asset.token_id;
    const asset_contract_address = asset.asset_contract.address;
    console.log(token_id,asset_contract_address);
    let owner = asset.owner.address.slice(0,8);
    owner = (owner === "0x000000") ? asset.creator.address.slice(0,8): asset.owner.address.slice(2,8);
    return(
        <>
       
        <div className="flex flex-col w-full" style={{
            backgroundColor: asset.backgroundColor || "#ff1971"
        }}>
            <div className="self-start my-10 mx-10">
                <Link to="/">
                    <div className={`flex h-7`}>
                        <img src={logoName} alt="logo" />
                        <img src={logoShoe} alt="logo" />
                    </div>
                </Link>
            </div>
            <div className="self-center my-7 sm:hidden">
                <a href={asset.permalink} rel="noreferrer" target={"_blank"}>
                    <div className="game-border px-2 py-1 relative text-lg m-auto font-extrabold ">
                        VIEW ON OPENSEA
                    </div>
                </a>
            </div>
            
            <div className="hidden sm:block self-center md:block">
                <a href={asset.permalink} rel="noreferrer" target={"_blank"}>
                    <div className="game-border w-3/5 text-center my px-2 py-1 relative text-lg mx-auto font-extrabold sm:text-3xl sm:relative sm:top-16 lg:absolute md:w-60 lg:right-0 md:text-2xl md:py-3 lg:top-64 xl:right-52">
                        VIEW ON OPENSEA
                    </div>
                </a>
                <img src={asset.image_url || defaultImage} className="mx-auto sm:relative sm:top-28" alt="product"/>
            </div>

            
        </div>
        <div className="flex sm:hidden justify-center  my-10">
                <img src={asset.image_url || defaultImage} className="" alt="product"/>
        </div>
        <div className="max-w-6xl mx-auto dark:text-white sm:mt-44">
            <div className="mb-3 pt-6">
                <h1 className="font-bold text-2xl sm:text-4xl md:text-5xl">{asset.name}</h1>
                <p className="text-xl py-7 md:text-2xl">{(asset.collection) ? asset.collection.name : ""}</p>
            </div>
            {
                 (asset.traits.length !== 0 ) && (
                    <div className="mb-3 pt-6 dark:text-white">
                        <h1 className="font-bold text-center sm:text-left text-2xl sm:text-3xl md:text-4xl my-5">Accessories</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-between">
                        {
                              asset.traits.map((trait) => {
                                 
                                     return( 
                                        <div>
                                            <p className="font-bold text-pink-500 my-4 text-lg sm:text-xl md:text-2xl">{trait.value}</p>
                                            <p className="text-lg sm:text-xl">This attribute is owned by <span className="font-semibold text-pink-500">{trait.trait_count}</span> people</p>
                                        </div>
                                     ) 
                                    
                                    
                                })
                        } 
                        </div>
                                
                    </div>
                 )
            }
            <div className="mb-3 pt-6">
                <div className="my-11">
                    <h1 className="font-bold text-center sm:text-left text-2xl sm:text-3xl md:text-4xl my-5">Current Market Status</h1>
                </div>
                <div className="text-lg sm:text-xl leading-10" >
                    <p>This punk is currently owned by <span className="font-bold text-pink-500">{owner}</span></p>
                    {(asset.sell_orders !== null) && <p>This Punk has not been listed to sale by its owner</p>}
                    {(!asset.top_bid) && <p>There are currently no bids on this punk</p>}
                </div>
            </div>
            <div className="my-3 mt-16">
                <h1 className="font-bold text-center sm:text-left text-2xl sm:text-3xl md:text-4xl my-5">Transaction History</h1>
            </div>
            <div className="mb-7">
                <TransactionHostory eventData={{token_id,asset_contract_address}} />
            </div>
            
        </div>
    </>
  
    );
}

export default Product;