/**
 * Created by beelarr on 7/21/17.
 */
let integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
let solution = integers.sort((first, second)=>{return first - second}).splice(0, 10).map((a)=>{return ((a * 1.5) - 1)});
console.log(solution)




