const GetPocket = require('node-getpocket');
const opn = require('opn');

const config = {
  consumer_key: process.env.CONSUMER_TKN,
  redirect_uri: 'none',
};

const params = {
  redirect_uri: 'none',
};

params.redirect_uri

const pocket = new GetPocket(config);

pocket.getRequestToken(params, function(err, resp, body) {
  if (err) {
    console.log('Oops; getTokenRequest failed: ' + err);
  }
  else {
    // your request token is in body.code
    var json = JSON.parse(body);
    config.request_token = json.code;
    pocket.refreshConfig(config);
    // TODO: fix me!
    // opn(pocket.getAuthorizeURL(config)).then(()=> {
    //   pocket.getAccessToken(params, function(err, resp, body) {
    //     var json = JSON.parse(body);
    //     console.log('access token');
    //     console.log(json.access_token);
    //   });
    // });
  }
});
