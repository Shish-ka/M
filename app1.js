console.log ('Задание 1')
let mounth = 5 //prompt ('Введите число от 1 до 12')
let mounths = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']
console.log (mounths[mounth-1])


console.log ('Задание 2')
let dostavka = 300
let tovar1 = [15000, 'процессор', dostavka]
let tovar2 = [25000, 'холодильник', dostavka]
let tovar3 = [1, 'мышь из холодильника', dostavka]
let sum = tovar1[2]+tovar2[2]+tovar3[2]+tovar1[0]+tovar2[0]+tovar3[0]
console.log (`Общая сумма товаров равна ${sum}`)


console.log ('Задание 3')
let arr = [1, 2, 3, 4, 5]
console.log (`Максимальное число из ${arr} равно ${Math.max(...arr)}`)
console.log (`Минимальное число из ${arr} равно ${Math.min(...arr)}`)


console.log ('Задание 4')

arr = [
    Math.floor(Math.random()*10+1),
    Math.floor(Math.random()*10+1),
    Math.floor(Math.random()*10+1),
    Math.floor(Math.random()*10+1),
    Math.floor(Math.random()*10+1) 
]

console.log (arr)
console.log (arr.sort())
console.log (arr.sort().reverse())

//arr.sort(function(a,b) {return (a-b)})
//console.log (arr)
//arr.sort(function(a,b) {return (b-a)})
//console.log (arr)


console.log ('Задание 5')
let arr1 = [ "Hi", "Hello", "Bonjour"]
console.log (arr1)
arr1.push ("Hola")
console.log (arr1)


console.log ('Задание 6')
let a = ['a', 'b', 'c']
let b = [1, 2, 3]
console.log (a.concat(b))

console.log ('Задание 7')
arr2 = [1, 2, 3]
console.log (arr2)
console.log (arr2.reverse())


console.log ('Задание 8')
const fruits = ["Banana", "Orange", "Apple", "Mango"]
console.log (fruits)
console.log (fruits.includes("Banana"))


console.log ('Задание 9')
const array = [2, 5, 9]
console.log (array)
let array2 = array.indexOf(5)
delete array [array2]
console.log (array)

 



