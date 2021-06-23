const fetch = require("node-fetch");

let retrieveAssetsRequest = async (page) => {

  let owner = process.env.OWNER;
  let apiKey = process.env.API_KEY;
  let limit = process.env.LIMIT;

  let offset = limit * (page - 1);

  let options = {
    method: 'GET',
    headers: {'X-API-KEY': apiKey}
  };

  let url = "https://api.opensea.io/api/v1/assets?owner="+owner+"&offset="+offset+"&limit="+limit;
  console.log(url);

  return await fetch(url, options)
    .then((res) => res.json())
    .catch(err => console.error('error:' + err));
};

/**
 * Save stripe user id in database
 * @public
 */
exports.assets = async (req, res, next) => {
  console.log("assets called!");
  try {
    let page = req.query.page;
    let assets = await retrieveAssetsRequest(page);

    return res.json(assets);
  } catch (error) {
    return res.send({ error });
  }
};
