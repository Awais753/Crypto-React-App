import { useContext, useEffect, useRef, useState } from "react";
import AssetContext from "../context/AssetContext";
import Card from "./card/Card";
import LoadingCards from "./LoadingCards";
function getScrollPercent() {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
}
async function LoadAssets(pageCount,hasMore) {
    let loaded_assets = [];
    if(hasMore){
        let res = await fetch('http://localhost:5002/v1/assets?page='+pageCount);
        res = await res.json();

        loaded_assets = [...loaded_assets,...res.assets ];
        
        return (loaded_assets.length>0)?loaded_assets:null;
    }
    
    return null;
   
  }
const CardList = () => {

    const {assets,setAssets} = useContext(AssetContext);
    const {pageCount,setPageCount} = useContext(AssetContext);
    const {hasMore,setHasMore} = useContext(AssetContext);
    const {isLoading,setIsLoading} = useContext(AssetContext);
    
    let refLoading = useRef()
    refLoading.current = isLoading;
    let refHasMore = useRef();
    refHasMore.current = hasMore;
    let refCount = useRef();
    refCount.current = pageCount; 

    
    useEffect(()=>{
       
        LoadAssets(pageCount,hasMore)
        .then((result) => {
            setIsLoading(false);
            if(result){
                setAssets([...assets,...result]);
            }else{  
                setHasMore(false);
            }
            
            }).catch((err) => {
            console.log(err);
        })

       
    
    },[pageCount]);
    
   useEffect(()=>{
       function increasePagination(){
            
          if(getScrollPercent() >= 80 && !refLoading.current && refHasMore.current)
            {
                console.log(refCount.current);
                setIsLoading(!refLoading.current);
                setPageCount(refCount.current+1);
            }
        }

        window.addEventListener('scroll',increasePagination)

        return ()=>{
            window.removeEventListener('scroll',increasePagination);
        }

   },[])
    if(assets){
      
        return(
            <>

                {
                    assets.map(asset => {
                        
                        let price = (asset.sell_orders && asset.sell_orders.length > 0) ? (parseInt(asset.sell_orders[0].current_price)/1000000000000000000)*parseFloat(asset.sell_orders[0].payment_token_contract.eth_price) : null;
                        price = (price) ? price.toFixed(3) :null;
                        let id = asset.id;
                        let image_url = asset.image_thumbnail_url;
                        let asset_name = asset.name;
                        let collection_name = asset.collection.name;
                        let created_date = asset.asset_contract.created_date.split('T')[0];
                        created_date = created_date.split('-');
                        created_date = created_date[1]+"."+created_date[2]+"."+created_date[0].substr(2,3);
                        
                        return(
                            <Card 
                                price={price}
                                id={id}
                                image_url={image_url}
                                asset_name={asset_name}
                                collection_name={collection_name}
                                created_date={created_date}
                            />
                        )
                    })
                }
               { isLoading && <LoadingCards/>}
            </>
        )
    }else{
        return " "
    }

}

export default CardList;