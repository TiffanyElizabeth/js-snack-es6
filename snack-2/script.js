/* Snack2
Creare un array di oggetti di squadre di calcio.
 Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */

// crea un array di oggetti di squadre di calcio [nome, punti fatti (== 0), falli subiti (== 0)]
const soccerTeams = [
    {
        team: "team 1",
        goals: 0,
        fouls: 0,
    },
    {
        team: "team 2",
        goals: 0,
        fouls: 0,
    },
    {
        team: "team 3",
        goals: 0,
        fouls: 0,
    },
    {
        team: "team 4",
        goals: 0,
        fouls: 0,
    },
    {
        team: "team 5",
        goals: 0,
        fouls: 0,
    }
]

// Genera numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

for(let i = 0; i < soccerTeams.length; i++) {
    const soccerTeams2 = soccerTeams[i];
    soccerTeams2.goals = getRndInteger(0, 25);
    soccerTeams2.fouls = getRndInteger(0, 25);
}

console.log(soccerTeams);

// crea un nuovo array i cui elementi contengono solo nomi e falli subiti
const teamFoulCount = [];

for(let i = 0; i < soccerTeams.length; i++) {
    const soccerTeams2 = soccerTeams[i];
    teamFoulCount.push({
        team: soccerTeams2.team,
        fouls: soccerTeams2.fouls
    })
}

// stampa tutto in console
console.log(teamFoulCount);