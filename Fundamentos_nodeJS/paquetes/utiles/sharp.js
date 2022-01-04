const sharp = require('sharp')


sharp('JS.png')
    .resize(80)
    .grayscale()
    .toFile('resize.png')
