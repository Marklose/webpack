import { marquee } from './marquee.js'
import { tab } from './tab.js'
marquee()
tab()
import './styles/index.css'
import './styles/index.less'

import gifSrc from './assets/1.gif'
import pngSrc from './assets/logo_small.png'
const gif = document.createElement('img')
const png = document.createElement('img')
gif.src = gifSrc
png.src = pngSrc
document.body.appendChild(gif)
document.body.appendChild(png)

import './assets/fonts/iconfont.css'

const add=()=>{
    console.log('333');
}
add()

import app from './app.vue'
app