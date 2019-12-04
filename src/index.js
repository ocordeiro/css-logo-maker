import { images, path } from './gaming.json'


let buildInput = (image, type, value) => {
    let input = document.createElement('input')
    input.setAttribute('id', `${type}-${name}`)
    input.value = value
    return input
}


for (name in images) {

    let image = images[name]

    let img = document.createElement('img')
    img.src = `images/${path}/${name}`
    img.setAttribute('data-path', name)

    let image_width = buildInput(name, 'width', image.image_width)

    img.onclick = (event) => {
        let img_id = event.target.getAttribute('data-path')
        let img_input = document.getElementById(img_id)
        img_input.value = event.offsetX + ',' + event.offsetY
    }
    document.getElementById('images').append(img)
    document.getElementById('images').append(image_width)
}


