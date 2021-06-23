import { useEffect, useState } from "react";

const Filter = ({filterState,getEventType}) => {
    
    const {filters,setFilters} = filterState;
    const {isFilterActive,setIsFilterActive} = filterState;
    const toggleCheck = (e) =>{
        const {name,checked} = e.target;
        
        let values =  Object.values(filters);
        let isActive = false;
        for (const val of values) {
            if(val)
                isActive = val;
        }
        setIsFilterActive(isActive);
        setFilters({...filters,[name]:checked});
    }
    useEffect(()=>{
        document.getElementById('filter').addEventListener('click',function(){
            document.getElementById('filter_menu').classList.toggle('hidden');
            this.classList.toggle('shadow-xl');
            document.getElementById('arrow_down').classList.toggle('hidden');
            document.getElementById('arrow_up').classList.toggle('hidden');
        })
    },[])
    const clearFilters = () => {
        setFilters({
            transfer:false,
            bid_withdrawn:false,
            bid_entered:false,
            successful:false,
            cancelled:false,
            created:false
        });
        setIsFilterActive(false);
    }

    return(
        <div id="filter" className="border border-pink-300 rounded-xl text-base flex flex-col dark:bg-truegray-100 dark:text-black">
            <div className="cursor-pointer flex border border-t-0 font-semibold text-xl border-gray-300 rounded-t-lg justify-between py-3 px-5">
                <div className="justify-start">Filter</div>
                <div className="justify-end">
                    <div id="arrow_up" className="hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11l5-5m0 0l5 5m-5-5v12" />
                        </svg>
                    </div>
                    <div id="arrow_down">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    </div>
                </div>
            </div>
            
            
                <div id="filter_menu" className="hidden">
                {    
                    Object.keys(filters).map(function(keyName, keyIndex) {
                    // use keyName to get current key's name
        
                        return(
                        <div className="hover:bg-gray-200 border border-t-0 border-gray-300 py-3 px-5">
                            <label className="container-check" > {getEventType(keyName)}
                                <input checked={filters[keyName]} name={keyName} onChange={toggleCheck} type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        )
                    })
                }
                </div>
                
            
                                
                            
            
            {
                isFilterActive && 
                <div className="flex px-4 py-7 space-x-4 items-center">
                { 
                        Object.keys(filters).map(function(keyName, keyIndex) {
                            // use keyName to get current key's name
                            // console.log("filetr",filters[keyName]);
                            if(filters[keyName]){
                                
                                return(
                                    <div id={keyName}  className="relative border rounded-xl px-3 py-2 bg-pink-100 border-pink-300">
                                        {/* {console.log(filter)} */}
                                        <span>{getEventType(keyName)}</span>    
                                    </div>
                                    
                                )
                            }
                            return " ";
                        })
                    }
                      {
                          isFilterActive &&
                        <div className="text-pink-400 cursor-pointer " onClick={clearFilters}>
                            Clear All
                        </div>
                      }
                 </div>
            }
                
            
            
        </div>
    )
}

export default Filter;