const {db, Emoji} = require('.')
// const fs = require('fs')
const Q = require('Q')
const path = require('path');
const Promise = require("bluebird");

//const emojiData = require('gemoji')

// const values = Object.keys(emojiData).map(function(key) {
//     return emojiData[key]
// });
// //console.log("-------------------->", values)

// const one = values[0] ;
// console.log("--------one------------>", one)




// var fs_readFile = Q.denodeify(fs.readFile)
// var promise = fs_readFile('emojis.txt')
// promise.then(console.log, console.error)




/*
category: 'nature',
  description: 'dog face',
  names: [ 'dog' ],
  tags: [ 'pet' ],
  name: 'dog',
  emoji: '🐶' }
  */

const readFile = Promise.promisify(require("fs").readFile);



const seedData = (emojies) => {
    db.sync({ force: true })
        .then((emojies) => {
            console.log('))))--- emojies', emojies)
            Promise.all(
                emojies.map(data => Emoji.create(data))
                //Emoji.create(one)
            )
        })
        .then(emoji => console.log(`seeded ${emoji.length} emojis ok.`))
        .catch(console.error)
}



readFile(path.join(__dirname, '/emojis.txt'))
    .then(function(contents) {
    return eval(contents);
}).then(function(data) {
    let emojies = JSON.parse(data.toString())
    return Object.keys(emojies).map(function(key) {
        emojies[key]['emoji'] = key;
        return emojies[key]
    })
    //console.log(')0------- values', values)    
}).then( stuff => {
    console.log("stuff-<", stuff)

    return db.sync({ force: true })
    .then(() => {
        console.log('))))--- emojies', stuff)
        Promise.all(
            stuff.map(data => Emoji.create(data))
            //Emoji.create(one)
        )
    })
    .then(stuff => console.log(`seeded ${stuff} emojis ok.`))
    .catch(console.error)

})
.catch(SyntaxError, function(e) {
    console.log("File had syntax error", e);
//Catch any other error
}).catch(function(e) {
    console.log("Error reading file", e);
})
  

// fs.readFile(path.join(__dirname, '/emojis.txt'), (err, data) => {
//     if (err) return console.log(err)
//     const emojies = JSON.parse(data.toString())
//     // console.log(emojies)

//     const values = Object.keys(emojies).map(function(key) {
//         emojies[key]['emoji'] = key;
//         return emojies[key]
//     })
//     console.log(')0------- values', values)    
//     return values
// })

/* values[0]
 { '😀': 
   { category: 'people',
     description: 'grinning face',
     names: [ 'grinning' ],
     tags: [ 'smile', 'happy' ],
     name: 'grinning',
     emoji: '😀' },
*/