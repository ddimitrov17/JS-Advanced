function townPopulation(input) {
    let result={};
    for (let currentEntry of input) {
        let [town,population]=currentEntry.split(` <-> `)
        if (result.hasOwnProperty(town)) {
            result[town]+=Number(population);
        } else {
            result[town]=Number(population);
        }
    }
    for (let currentTown in result) {
        console.log(`${currentTown} : ${result[currentTown]}`)
    }
}

townPopulation([`Istanbul <-> 100000`,
`Honk Kong <-> 2100004`,
`Jerusalem <-> 2352344`,
`Mexico City <-> 23401925`,
`Istanbul <-> 1000`])