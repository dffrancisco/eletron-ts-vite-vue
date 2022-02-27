const { contextBridge } = require('electron')


// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = text
    }

    for (const dependency of ['chrome', 'node', 'electron']) {
        replaceText(`${dependency}-version`, process.versions[dependency])
    }
})

const API = {

}

contextBridge.exposeInMainWorld('api', API);


// VEJA ESTE CANAL
// https://www.youtube.com/watch?v=RuNnmDwgXCQ&list=PL_2VhOvlMk4XWvfNRz0oS0dbbTewX6iYG&index=2&ab_channel=JSimplified