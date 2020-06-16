const mainElement = document.querySelector('body')

const remove = document.createElement('button')
let button = document.createTextNode('Do NOT click!!!')
remove.append(button)
mainElement.append(remove)

const cuteKitten = document.createElement('img')
cuteKitten.src = "https://thecatsite.com/attachments/scottish-fold-kitten-jpg.261816/"
mainElement.append(cuteKitten)
cuteKitten.style.height = 300 + 'px'
cuteKitten.style.width = 500 + 'px'

const crazyCats = document.createElement('a')
crazyCats.href = 'https://www.youtube.com/watch?v=7aNgiSExiYI'
let videoText = document.createTextNode('Click here for More Kitties!')
crazyCats.append(videoText)
mainElement.append(crazyCats)

remove.addEventListener("click", function() {
    alert ('Bye-Bye! Toodles! Farewell! You clicked the Button, you lose the cuteness!!!!')
    mainElement.remove()
})