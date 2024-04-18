export function randomNumber(n: number) {
    const randomDecimal = Math.random();
    const randomNumber = Math.floor(randomDecimal * n) + 1;
    return randomNumber;
}

export function arrayShuffle(array: string[]) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while(currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}