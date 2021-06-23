const fetch = require("node-fetch");

let retrieveEventsRequest = async (token_id,asset_contract_address,event_type) => {

  let owner = process.env.OWNER;
  let apiKey = process.env.API_KEY;
  let limit = process.env.LIMIT;

  // let offset = limit * (page - 1);

  let options = {
    method: 'GET',
    headers: {'X-API-KEY': apiKey}
  };
  let url;
  if(event_type){
    url="https://api.opensea.io/api/v1/events?asset_contract_address="+asset_contract_address+"&token_id="+token_id+"&only_opensea=false&event_type="+event_type;
  }else{
    url = "https://api.opensea.io/api/v1/events?asset_contract_address="+asset_contract_address+"&token_id="+token_id+"&only_opensea=false";
  }
  

  console.log("URL",  url);

  

  return await fetch(url, options)
    .then((res) => res.json())
    .catch(err => console.error('error:' + err));
};

/**
 * Save stripe user id in database
 * @public
 */
exports.events = async (req, res, next) => {
  console.log("events called!");
  try {
    // let page = req.query.page;
    let tokenID = req.query.tokenID;
    let asset_contract_address = req.query.asset_contract_address;
    let event_type = req.url.split('event_type=')[1];

    let events = await retrieveEventsRequest(tokenID,asset_contract_address,event_type);
    
    return res.json(events);
  } catch (error) {
    return res.send({ error });
  }
};
