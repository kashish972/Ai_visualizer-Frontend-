import { proxy } from 'valtio'

const state = proxy({
    current: 'home',
    model: null,
    color: '#EFBD48',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png',
    generatedImageUrl: null
})

export default state;