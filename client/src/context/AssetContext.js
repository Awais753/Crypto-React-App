import { createContext, useEffect, useState } from "react";

const AssetContext = createContext();

const AssetContextProvider = ({children}) => {
    const [assets,setAssets] = useState([]);
    const [owner,setOwner] = useState("");
    const [pageCount,setPageCount] = useState(1);
    const [hasMore,setHasMore] = useState(true);
    const [isLoading,setIsLoading] = useState(true);

    useEffect(()=>{
        if(!owner){
            console.log("getting owner")
            fetch("http://localhost:5002/v1/assets/owner-address")
            .then((res)=>{
                return res.json();
            })
            .then((res)=>{
                console.log("OWNER",res);
                setOwner(res.owner)
            });
        }
    },[])
    return(
        <AssetContext.Provider value={{assets,setAssets,owner,setOwner,pageCount,setPageCount,hasMore,setHasMore,isLoading,setIsLoading}}>
            {children}
        </AssetContext.Provider>
    );
}

export default AssetContext;
export {AssetContextProvider}