function currencyConvert(){
    const currency1 = parseFloat(document.getElementById('kwacha').value);
    
     const  result = currency1 / 1734;
    document.getElementById('resultDisplay').value = "$ " + result.toFixed(2);
}

function currencyConvert2(){
    const currency1 = parseFloat(document.getElementById('dollar').value);
    const result = currency1 * 1734;
    document.getElementById('resultDisplay').value = "MWK " + result.toFixed(2);
}
function clear1(){
    const result = 0;
    document.getElementById('kwacha').value = result;
    document.getElementById('dollar').value = result;
    document.getElementById('resultDisplay').value = result;

}