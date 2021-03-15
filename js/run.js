const quoteBox = document.getElementById('quote-box');
let quoteN = 1;
let quoteT = "All";
let quoteTI;

const getRandI = (m, n) => {
        return Math.floor(Math.random() * (m - n + 1)) + m;
}

const randomQ = (selectQt) => {
    let rand = getRandI(0, selectQt.length - 1);
    let frag1 = selectQt[rand].begin;
    rand = getRandI(0, selectQt.length - 1);
    let frag2 = selectQt[rand].middle;
    rand = getRandI(0, selectQt.length - 1);
    let frag3 = selectQt[rand].end;
    return frag1 + ' ' + frag2 + ' ' + frag3;
}

const updateN = () => {
    quoteN = document.getElementById('quote-n').value;
}
const updateT = () => {
    quoteTI = document.getElementById('quote-t');
    quoteT = quoteTI.options[quoteTI.selectedIndex].textContent;
    quoteBox.innerHTML = "";
}
const generateQ = () => {
    quoteBox.innerHTML = "";
    let selectQt = quotes.filter(quote => quote.category === quoteT);
    if (quoteT === 'All'){
        selectQt = quotes;
    }
    for (let i=0; i < quoteN; i++) {
      let quote = randomQ(selectQt);
      let para = document.createElement('p');
      para.innerHTML = quote;
      quoteBox.append(para);
    }
}
