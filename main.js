let mainElement = document.createElement('main')
let bodyElement = document.querySelector('body')
bodyElement.append(mainElement)

let remove = document.createElement('button')
let button = document.createTextNode('Do NOT click!!!')
remove.append(button)
bodyElement.append(remove)

const cuteKitten = document.createElement('img')
cuteKitten.src = "https://thecatsite.com/attachments/scottish-fold-kitten-jpg.261816/"
cuteKitten.className = 'image'
mainElement.append(cuteKitten)
cuteKitten.style.height = 300 + 'px'
cuteKitten.style.width = 500 + 'px'

let crazyCats = document.createElement('a')
crazyCats.href = 'https://www.youtube.com/watch?v=7aNgiSExiYI'
crazyCats.classList = 'link'
let videoText = document.createTextNode('Click here for More Kitties!')
crazyCats.append(videoText)
mainElement.append(crazyCats)

remove.addEventListener("click", function() {
    alert ('Bye-Bye! Toodles! Farewell! You clicked the Button, you lose the cuteness!!!!')
    mainElement.remove()
})
