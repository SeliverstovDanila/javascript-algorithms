/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/

  function anagram(str1, str2) {
      return str2.toLowerCase().split('').sort().join() === str1.toLowerCase().split('').sort().join();
      //Решение сломанное для значения "up", "UP":c
      
      // При добавление .toString после join ломает решение, выдает верное значение для "finder", "Friend"
      // А для остальных - неверное
  }

//  const anagram = (str1,str2) => [...str1.toLowerCase().split(' ')].sort().toString() === [...str2.toLowerCase().split(' ')].sort().toString();
// Решение сломанное для значения "finder", "Friend" :C

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false