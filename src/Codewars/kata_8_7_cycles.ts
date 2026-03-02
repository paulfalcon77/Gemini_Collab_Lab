//Task1
export function positiveSum(arr: number[]): number {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i]
        }
    } return sum
}console.log(positiveSum([2, 3, 4, 5]))

//Task2
export function findSmallestInt(args: number[]): number {
    let res = args[0]
    for (let i = 0; i < args.length; i++) {
        if (args[i] < res) {
            res = args[i]
        }
    }
    return res
} console.log(findSmallestInt([12, 3, 14, 5]))

//Task3
export function squareSum(numbers: number[]): number {
    let sum = 0
    let res:number[] = numbers.map(n => n * n)
    for (let i = 0; i < res.length; i++) {
        sum += res[i]
    }
    return sum
}console.log(squareSum([2, 3, 4, 5]))

//Task3.1
export function squareSum1(numbers: number[]): number {
    let sum = 0

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i] * numbers[i]
    }
    return sum
}console.log(squareSum([2, 3, 4, 5]))

//Task 4
export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]): number {
    let res: number = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] === true) {
            res += 1
        }
    }return res

} console.log(countSheeps([true, true, false, true]))

//Task 5
export function findAverage(array: number[]): number {
   if (array.length == 0) {
   return 0;
}
   let sum = 0
   for (let i = 0; i < array.length; i++) {
       sum += array[i]
    }
    return sum/array.length
}console.log(findAverage([2, 2, 2]))

//Task 6
export function findNeedle(haystack: any[]): string {
    const index = haystack.indexOf("needle")
    return `found the needle at position ${index}`;
} console.log(findNeedle(["hay", "junk", "needle"]))

//Task 7
export function getCount(str: string): number {
    const vowels = "aeiou"
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if(vowels.includes(str[i]))
        {
            count ++
        }
    } return count
}console.log(getCount("dfdgghhjjeed"))