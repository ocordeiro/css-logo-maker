import { images, path } from './gaming.json'

for (name in images) {
    console.log(name)
    let img = document.createElement('img')
    img.src = `images/${path}/${name}`
    img.onclick = (event) => {
        alert(event.offsetX +','+ event.offsetY)
    }
    document.getElementById('images').append(img)
}