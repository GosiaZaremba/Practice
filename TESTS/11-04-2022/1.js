const data = [
    {
        name: "Dominik",
        score: 0,
        team: "A",
    },
    {
        name: "Krzysztof",
        score: 10,
        team: "B",
    },
    {
        name: "Genowefa",
        score: 5,
        team: "A",
    },
    {
        name: "Jacek",
        score: -6,
        team: "B",
    },
];

const teamName = (data) => {
    data.map(({ team }))
    return console.log(team)
}
const getNamesForTeam = (teamName, data) => {
    let names = data.map({ name })
    console.log(names)
    return console.log(names)
};

// const getTeamScore = (teamName, data) => {
//     return 0;