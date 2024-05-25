const staticFile = require("../public/appModules/http-utils/static-file");
const { getData, endpoints } = require("../public/appModules/api");
const { config, makeRatingFile } = require("../public/appModules/rating");

async function mainRouteController(res, publicUrl, extname) {
  const data = await getData(endpoints.games);
  await makeRatingFile(config.PATH_TO_RATING_FILE, data);
  res.statusCode = 200;
  staticFile(res, publicUrl, extname);
}

module.exports = mainRouteController;
