const solution = (n) => {
    return String(n).split('').map(Number).reduce((acc, cur) => acc + cur)
}