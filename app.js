const path = require('path');
const fs = require('fs');
const dirName = __dirname;

const userMass = [
    {name: "Oleg", gender: "male", age: 17},
    {name: "Petro", gender: "male", age: 18},
    {name: "Andriy", gender: "male", age: 19},
    {name: "Ostap", gender: "male", age: 21},
    {name: "Egor", gender: "male", age: 22},
    {name: "Alina", gender: "female", age: 18},
    {name: "Marina", gender: "female", age: 18},
    {name: "Anastasia", gender: "female", age: 23},
    {name: "Milena", gender: "female", age: 24},
    {name: "Princes", gender: "female", age: 25},
]


function createFiles(userMass1) {
    for (const users of userMass1) {
        console.log(users)
        if (users.gender === 'male' && users.age < 20) {
            fs.writeFile(`${dirName}/manYounger20/${users.name}.txt`, `${users.name},${users.age}`, err => {
                if (err) {
                    console.log(err)
                }
            })
        }
        if (users.gender === 'male' && users.age > 20) {
            fs.writeFile(`${dirName}/manOlder20/${users.name}.txt`, `${users.name},${users.age}`, err => {
                if (err) {
                    console.log(err)
                }
            })
        }
        if (users.gender === 'female' && users.age > 20) {
            fs.writeFile(`${dirName}/womanOlder20/${users.name}.txt`, `${users.name},${users.age}`, err => {
                if (err) {
                    console.log(err)
                }
            })
        }
        if (users.gender === 'female' && users.age < 20) {
            fs.writeFile(`${dirName}/womanYounger20/${users.name}.txt`, `${users.name},${users.age}`, err => {
                if (err) {
                    console.log(err)
                }
            })
        }
    }
}

createFiles(userMass)


