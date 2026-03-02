export function evenOrOdd(n: number): string {
    return n % 2  == 0 ? 'even' : 'odd'
}

console.log(evenOrOdd(10))

export function repeatStr(n: number, s: string): string {
let res: string = ''
    for (let i = 0; i < n; i++) {
        res += s
    }
    return res
}
console.log(repeatStr(3, 'sss '))

export function removeChar(str: string): any {
    let subStr = str.slice(1, str.length - 1)
    return subStr;
}
console.log(removeChar('avfrvl'))