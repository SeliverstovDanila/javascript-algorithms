/*
 * Задача 8: «Фибоначчи»
 *
 * Последовательность Фибоначчи — это порядок чисел, где каждое последующее
 * число является суммой двух предыдущих: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
 * 
 * Напишите функцию, которая принимает на вход число n и возвращает n-й элемент
 * последовательности Фибоначчи.
*/

function fibonacci(n) {
    if (n === 0) return 0;
    const fibonacciArray = [0,1];
    for (let i = 2; i <= n; i++) {
        const result = fibonacciArray[i - 2] + fibonacciArray[i - 1];
        fibonacciArray.push(result);
    }
    return fibonacciArray[n - 1];
}

console.log(fibonacci(4)); // 2. Четвёртое число последовательности — двойка (0, 1, 1, 2)