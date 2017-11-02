const {db, Emoji} = require('.')
const emojiData = require('gemoji')

const values = Object.keys(emojiData.name).map(function(key) {
    return emojiData[key]
});
console.log("-------------------->", values.length)



/*
category: 'nature',
  description: 'dog face',
  names: [ 'dog' ],
  tags: [ 'pet' ],
  name: 'dog',
  emoji: '🐶' }
  */

db.sync({force: true})
    .then(() =>
        Promise.all(
            
            values.map(data => Emoji.create(data))
        ) )
        .then(emoji => console.log(`seeded ${emoji.length} emojis ok.`))
        .catch(console.error)