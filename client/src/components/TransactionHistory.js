import { useEffect, useState } from "react";
import Filter from "./Filter";

function getEventType(val){
    return   (val === "transfer") ? "Transfer" :
    (val === "bid_withdrawn") ? "Bid Cancel" :
    (val === "bid_entered") ? "Bid" :
    (val === "successful") ? "Sale" :
    (val === "cancelled") ? "Cancel" :
    (val === "created") ? "List" : " ";
}
const TransactionHostory = ({eventData}) => {
    const {token_id,asset_contract_address} = eventData
    const [events,setEvents] = useState("");
    const [filters,setFilters] = useState({
        transfer:false,
        bid_withdrawn:false,
        bid_entered:false,
        successful:false,
        cancelled:false,
        created:false
    });
    const [isFilterActive,setIsFilterActive] = useState(false);
    useEffect(()=>{
        let keys;
        let vals;
        let filterStr="";
        if(isFilterActive)
        {
            keys =  Object.keys(filters);
            vals =  Object.values(filters);
            for (let index = 1; index < keys.length; index++) {
                if(!filterStr )
                    filterStr = keys[index];
                if(vals[index])
                    filterStr = filterStr + "&"+keys[index];
            }
        }
            
        async function getAssetEvents(token_id,asset_contract_address){
            let url ="";
            if(isFilterActive)
                url = "http://localhost:5002/v1/events?tokenID="+token_id+"&asset_contract_address="+asset_contract_address+"&event_type="+filterStr;
            else
                url = "http://localhost:5002/v1/events?tokenID="+token_id+"&asset_contract_address="+asset_contract_address;
            console.log(url);
            let res = await fetch(url);
            let eve = await res.json();
            console.log(eve.asset_events);
            setEvents(eve.asset_events);
        }
        getAssetEvents(token_id,asset_contract_address);
    },[filters])
    return(
        <div className="relative text-xs sm:text-base mb-24">
            <Filter filterState={{filters,setFilters,isFilterActive,setIsFilterActive}} getEventType={getEventType} />
            <table className="w-full mt-10">
                <tbody>
                    <tr className="my-1 border-b-2 text-left h-11">
                        <th>Type</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Amount</th>
                        <th>Txn</th>
                    </tr>
                    { (events) &&
                        events.map((event)=>{
                           let type = getEventType(event.event_type);
                            let from_account =  (type === "Sale") ? event.transaction.from_account.address.substring(2,8).toUpperCase() : (event.from_account) ? event.from_account.address.substring(2,8).toUpperCase(): "";
                            let to_account = (event.to_account) ? event.to_account.address.substring(2,8).toUpperCase() : "";
                            let amount = (type === "Sale") ? event.total_price : (event.bid_amount) ? event.bid_amount : "";
                            amount = (amount!=="") ? parseInt(amount)/1000000000000000000 + " ETH" : "";
                            let date = event.created_date.split('T')[0];
                            
                            return(
                                <tr className="border-b-2 h-11" key={event.id} >
                                    <td>{type}</td>
                                    <td className="font-bold text-pink-500">{from_account}</td>
                                    <td className="font-bold text-pink-500">{to_account}</td>
                                    <td>{amount}</td>
                                    <td className="font-bold text-pink-500">{date}</td>
                                </tr>
                            );
                        })
                    }
                        
                </tbody>
            </table>
        </div>
    )
}
export default TransactionHostory;