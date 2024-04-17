export function randomNumber(n: number) {
    const randomDecimal = Math.random();
    const randomNumber = Math.floor(randomDecimal * n) + 1;
    return randomNumber;
}