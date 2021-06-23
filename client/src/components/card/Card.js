
import { Link } from 'react-router-dom';
import default_image from '../../images/defaultCardImage.jpeg'
import './card.css'
const Card = ({
    price,
    id,
    image_url,
    asset_name,
    collection_name,
    created_date
}) => {
    return(
        <div key={id} className="card mx-auto relative border-2 z-0"  style={{height:380,width:280,backgroundColor:(image_url) ? "#638596" :"white"}}>
            <div className="card_overlay absolute w-full h-full top-0 z-20"></div>
                <div className=" h-full w-full flex flex-col justify-center items-center ">
                    <Link className="card_overlay_btn cursor-pointer bg-white w-8/12 text-center font-semibold py-2 px-2 z-50" to={"/product/"+id}>
                        VIEW ON DETAILS
                    </Link>
                </div>
            <div className="absolute flex flex-col items-stretch top-0 w-full h-full text-xs z-10">
                <div className="flex justify-between mx-4 mt-3" style={{height:5+"%"}}>
                    <div>
                        {(id)? "#"+id:null}
                    </div>
                    <div>
                        {created_date}
                    </div>
                </div>
                <div className="w-full flex justify-center z-30" style={{height:70+"%"}}>
                    {
                        
                        <img src={(image_url) ? image_url : default_image}  alt="card img" /> 
                    } 
                </div>
                <div className="flex flex-col mx-4">
                    <div>
                        {collection_name}
                        
                    </div>
                    <div className="text-ellipsis  whitespace-nowrap overflow-ellipsis overflow-hidden text-lg font-semibold">
                        {asset_name}
                    </div>
                    <div className="font-semibold">
                        {(price)?price+"ETH":" "}
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Card;