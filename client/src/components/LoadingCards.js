import Card from "./card/Card";

const LoadingCards = () => {
    return(
       <>
            <div className="hidden sm:block">
                <Card 
                    price={null}
                    id={null}
                    image_url={null}
                    asset_name={null}
                    collection_name={null}
                    created_date={null}
                />
            </div>
            <div className="hidden md:block">
                <Card 
                    price={null}
                    id={null}
                    image_url={null}
                    asset_name={null}
                    collection_name={null}
                    created_date={null}
                />
            </div>
            <div className="hidden lg:block">
                <Card 
                    price={null}
                    id={null}
                    image_url={null}
                    asset_name={null}
                    collection_name={null}
                    created_date={null}
                />
            </div>
            <div className="hidden xl:block">
                <Card 
                    price={null}
                    id={null}
                    image_url={null}
                    asset_name={null}
                    collection_name={null}
                    created_date={null}
                />
            </div>
        </>
    )
}

export default LoadingCards;