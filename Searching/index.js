// bisa ditulis manual pakai looping
// for (kondition) {
//     logic loopingnya disini
// }


const animal = ['kucing', 'zebra', 'ayam', 'burung', 'tikus'] // the data

// contoh indexOf
const searchResultIndex = animal.indexOf('zebra') // contoh data yang ada
const searchResultString = animal[searchResultIndex] 
const searchResultIndexDataNotAvail = animal.indexOf('orang utan') // contoh data yang gak ada

// contoh includes
const searchResultBoolean = animal.includes('zebra') // contoh yang ada data
const searchResultBooleanDataNotAavil = animal.includes('orang utan') // contoh data yang gak ada

