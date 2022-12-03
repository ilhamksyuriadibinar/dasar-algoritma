// string manipulation
// case misal data dari backend tidak sesua dengan figna
const nomerHp = '123 456 789'
const formattedNomerHp = nomerHp.replaceAll(' ', '-')

const someSentences = 'this is test senctence'
const cuttedSomeSenctences = someSentences.substring(0, 4)

// for exercise try this:
// toLowerCase()/toUpperCase()
// trim()

// sorting: cth: angka, huruf, date
// ascending urutan dari kecil ke besar
// 2 3 4 1 5 ---> 1 2 3 4 5
// b c a d e ---> a b c d e

// desscending urutan dari besar ke kecil
// 2 3 4 1 5 ---> 5 4 3 2 1
// b c a d e ---> e d c b a

// bisa ditulis manual pakai looping
// for (kondition) {
//     logic loopingnya disini
// }

const setOfNumber = [2, 3, 4, 1, 5]
const sortedSetOfNumber = setOfNumber.sort()

// example sorting in array of object

const employees = [
    {
        id: 1,
        name: 'Sabrina',
        age: 36,
        start_date: '02-28-2019'
    },
    {
        id: 2,
        name: 'Gun',
        age: 40,
        start_date: '03-25-2017'
    },
    {
        id: 3,
        name: 'Jimi',
        age: 39,
        start_date: '07-12-2021'
    }
]
console.log('employees', employees)

// ascending
const sortedByNameEmployees = employees.sort((a, b) => a.name > b.name)
console.log('sortedByNameEmployees', sortedByNameEmployees)