let objectArray = [
    {
        name: 'Asia',
        age: 18
    },
    {
        name: 'Kasia',
        age: 19
    },
    {
        name: 'Zosia',
        age: 18
    },
    {
        name: 'Jasia',
        age: 20
    },
];

const extractName = (objectArray) => {
    let namesArray = [];

    objectArray.forEach(function (item, index) {
        // console.log(item);
        // console.log(objectArray[index]);
        namesArray.push(item.name);
        // namesArray.push(objectArray[index].name);
    });

    //for (var i = 0; i < objectArray.length; i++) {
    //    namesArray.push(objectArray[i].name);
    //}
    return namesArray;
}

console.log(extractName(objectArray));
