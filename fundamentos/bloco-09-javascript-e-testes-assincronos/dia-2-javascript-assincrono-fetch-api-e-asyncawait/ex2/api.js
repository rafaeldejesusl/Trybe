const API_URL = 'https://api.coincap.io/v2/assets';
const cryptoList = document.querySelector('#cryptoList');

function createItem (object) {
  if (object.rank <= 10) {
    const listItem = document.createElement('li');
    listItem.innerText = `${object.name} (${object.symbol}): ${parseFloat(object.priceUsd).toFixed(2)}`;
    document.querySelector('#cryptoList').appendChild(listItem);
  }
} 

const fetchCrypto = () => {
  fetch(API_URL)
  .then((response) => response.json())
  .then((data) => data.data.forEach(element => {
    createItem(element);
  }))
}

window.onload = () => fetchCrypto();