const jsonfile = require('jsonfile')
const GetPocket = require('node-getpocket');

const config = {
    consumer_key: process.env.CONSUMER_TKN,
    access_token: process.env.ACCESS_TKN,
};

const pocket = new GetPocket(config);

const queryParams = {
  sort: 'newest',
  contentType: 'article',
  detailType: 'complete',
};


pocket.get(queryParams, function(err, resp) {
  if (err) {
    console.log('Oops; retrieve data failed: ' + err);
  } else {
    const file = './public/items.json'
    const data = Object.keys(resp.list).map(key => (resp.list[key]));
    jsonfile.writeFile(file, data, { spaces: 2 }, function (err) {
      if (err) {
        console.log(err);
      }
    });
  }
});
