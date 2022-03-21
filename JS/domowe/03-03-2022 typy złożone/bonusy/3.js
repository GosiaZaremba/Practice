var tab = [1, 2, 3, 4, 5];
var tab1 = [1, -2, 3, 4, 5];
var tab2 = [];
var tab3 = [-1, -2, -3, -4, -5];
var tab4 = [-1, 2, 3, 4, -5];
var allTabs = [tab, tab1, tab2, tab3, tab4];

function calculateSumPositive(tab) {
    let sumOfPositives = 0;
    for (var i = 0; i < tab.length; i++) {
        if (tab[i] > 0) {
            sumOfPositives = sumOfPositives + tab[i];
        }
    } return sumOfPositives;
}

for (var i = 0; i < allTabs.length; i++) {
    console.log(
        calculateSumPositive(allTabs[i])
    );
}
