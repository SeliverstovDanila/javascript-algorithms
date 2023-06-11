/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    let array = str.split(" ");
    let result = [];
    array.forEach(function(text) {
       let firstSign = text.slice(0,1);
       result.push(firstSign.toUpperCase() + text.slice(1));
    });
    return result.join(" ");
}

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"