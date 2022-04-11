let quote = document.getElementById('quote');

document.body.addEventListener('click', getQuotes);

async function getQuotes(e){
    let httpReq = await fetch('https://goquotes-api.herokuapp.com/api/v1/random?count=1');
    let httpReqData = await httpReq.json();
    let quotes = httpReqData.quotes;
    console.log(quotes[0].text);
    let currentQuote = quotes[0].text;
    quote.innerHTML = currentQuote;
    quote.style.left = e.clientX;
    quote.style.top = e.clientY;
};