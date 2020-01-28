const fs = require('fs')

const book = {
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    year: '2011'
}

const bookJSON = JSON.stringify(book)

// The opposite of the JSON.stringify
// const parsedInfo = JSON.parse(bookJSON)
// console.log(parsedInfo.title)
// console.log(parsedInfo.author)     takes each Data
// console.log(parsedInfo.year)

// fs.writeFileSync('Intro.json.json', bookJSON)

// Data given in binary
const dataBuffer = fs.readFileSync('Intro.json.json')
// To stringify it
const dataJSON = dataBuffer.toString()
// Parse it into object
const info = JSON.parse(dataJSON)
// e.g parse for year
console.log(info.year)

// How to overwrite/change data for each differnt case
// data.title = 'New Name' ; data.author = 'New Name' ; data.year = 'New Year'
// const infoJSON = JSON.stringify(info)
// Overwrite it with the new values given
// fs.writeFileSync('Intro.json.json', infoJSON)