
function wylosujLiczbe() {
    // copy/paste from: https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    let min = Math.ceil(1);
    let max = Math.floor(100);
    return Math.floor(Math.random() * (max - min)) + min;
}

function sprawdzCzyWygralas(liczba, funkcjaPoWygraniu) {

    console.log("Wylosowałaś liczbę: " + liczba);

    if ((liczba % 3) === 0) {
        funkcjaPoWygraniu();
    } else {
        console.log("Przykro mi. Próbuj dalej :-)");
    }

}

var pokazBaner = function () {
    console.log("=================");
    console.log("* YOU WON BABY! *");
    console.log("=================");
}

var wylosowanaLiczba = wylosujLiczbe();

sprawdzCzyWygralas(wylosowanaLiczba, pokazBaner);
