function carFactory(carInfo) {
    let myCar={
        model: carInfo.model
    }
    let engines = {
        SmallEngine: { power: 90, volume: 1800 },
        NormalEngine: { power: 120, volume: 2400 },
        MonsterEngine: { power: 200, volume: 3500 }
        // Hatchback: { type: 'hatchback', color: <as required> },
        // Coupe: { type: 'coupe', color: <as required> }
    }
    if (carInfo.power <= 90) {
        myCar.engine = engines.SmallEngine;
    } else if (carInfo.power>90&&carInfo.power<=120) {
        myCar.engine = engines.NormalEngine;
    } else {
        myCar.engine = engines.MonsterEngine;
    }
    
    myCar.carriage={
        type:`${carInfo.carriage}`,
        color: `${carInfo.color}`
    }
    if (carInfo.wheelsize%2==0) {
        carInfo.wheelsize--;
    }
    myCar.wheels=new Array(4).fill(carInfo.wheelsize);
    return myCar;
}

console.log(carFactory({
    model: 'VW Golf II',

    power: 90,

    color: 'blue',

    carriage: 'hatchback',

    wheelsize: 14
}));