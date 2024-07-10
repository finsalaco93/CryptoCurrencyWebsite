
var btc = document.getElementById("bitcoin");
var doge = document.getElementById("dogecoin");
var eth = document.getElementById("ethereum");

var settings = {
  "async": true,
  "scrollDomain": true,
  "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cdogecoin%2Cethereum&vs_currencies=usd",
  "method": "GET",
  "headers": {}
}
$.ajax(settings).done(function (response) {
  btc.innerHTML = response.bitcoin.usd;
  doge.innerHTML = response.dogecoin.usd;
  eth.innerHTML = response.ethereum.usd;
});