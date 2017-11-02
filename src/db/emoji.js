const {STRING} = require('sequelize')
const db = require('./connection')

module.exports = db.define('emojis', {
  description: STRING,
  name: STRING,
  emoji: STRING,
  category: STRING, 
})

/*
category: 'nature',
  description: 'dog face',
  names: [ 'dog' ],
  tags: [ 'pet' ],
  name: 'dog',
  emoji: '🐶' }
  */


