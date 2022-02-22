function mountainsOfHoiyama(width) {

    let startingNumber = 0;
    let actualWidth = width;
    let array = [];
    
    while (actualWidth > 0) {
        let actualNumber = startingNumber;
        for (let i = 0; i < actualWidth; i++) {
            
            if (i <= actualWidth / 2) {
                actualNumber++;
            } else{
                actualNumber--;
            }
            array.push(actualNumber);
        }
        actualWidth = actualWidth - 2;
        startingNumber = startingNumber + 2;
    }
    return array.reduce((p,c) => p+c);
}

console.log(mountainsOfHoiyama(7));