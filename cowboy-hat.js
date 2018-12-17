const cowboyHat = require('cowboy-hat')
const config = require('./cowboy-hat.config.js')

cowboyHat(config).then(() => {
    console.log('DONE')
})
