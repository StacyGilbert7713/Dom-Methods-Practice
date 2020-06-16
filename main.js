  
const mainElement = document.querySelector('body')

const removeButton = document.createElement('button')
let buttonText = document.createTextNode('Do NOT click!!!')
removeButton.append(buttonText)
mainElement.append(removeButton)

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

removeButton.addEventListener("click", function() {
    alert ('Bye-Bye! Toodles! Farewell! You clicked the Button, you lose the cuteness!!!!')
    mainElement.remove()
})