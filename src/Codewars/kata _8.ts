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

export function solution(str: string): string {
    return str.split('').reverse().join('')
}
console.log(solution('Pael'))

export function abbrevName(name: string): string {
    let res: string[] = name.split(' ');
    let result: string = res[0][0].toUpperCase() + '.' + res[1][0].toUpperCase()

    return result
}console.log(abbrevName('pavel sokolov'))

export function isPalindrome(x: string): boolean{
    let res: string = x.toLowerCase();
    let result: string = res.split('').reverse().join('');
    return result === res ? true : false;
}console.log(isPalindrome("Abba"))

export function noSpace(x: string): string {
    let res: string = x.split(' ').join('');
    return res
}console.log(noSpace("KAb b  a"))

export function fakeBin(x: string): string {
    let result3: string = ''
    for (let i = 0; i < x.length; i++) {
        if(x[i] < "5") {
            result3 += "0"
        } else {
            result3 += "1"
        }

    }return result3
}console.log(fakeBin("158962"))

export function fakeBinNew(x: string): string {
    let digit: string[] = x.split('');
    let result: string[] = digit.map(d => Number(d) < 5 ? "0" : "1");

    return result.join('')
} console.log(fakeBinNew("158962"))

export function hoopCount(n: number): string {
    if (n > 10) {
        return `Great, now move on to tricks`
    } else {
        return `Keep at it until you get it`
    }
} console.log(hoopCount(15))

export function trenMap(arr: number[]): number[] {
    return arr.map(n => n * 2)
}
   console.log(trenMap([1,2,3,4]))

export function doubleChar(str: string): string {
    return str.split('').map(n => n + n).join('')
}console.log(doubleChar("Pavel"))