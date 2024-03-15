function timeToWalk(numberOfSteps,footprintInMeters,speed) {
    let speedInMeteresPerSeconds=speed/3.6;
    let distanceInMeters=numberOfSteps*footprintInMeters;
    let timeToRest=Math.floor(distanceInMeters/500)*60; // in seconds
    let time=timeToRest+(distanceInMeters/speedInMeteresPerSeconds);
    let minutes=Math.floor(time/60);
    let seconds=Math.ceil(time%60);
    let hours=Math.floor(minutes/60);
    hours<10 ? hours=`0${hours}` : hours=`${hours}`
    minutes<10 ? minutes=`0${minutes}` : minutes=`${minutes}`
    seconds<10 ? seconds=`0${seconds}` : seconds=`${seconds}`
    console.log(`${hours}:${minutes}:${seconds}`);
}

timeToWalk(4000, 0.60, 5)