const jokeButton = document.querySelector('#get-joke');
const reveal = document.querySelector('#reveal')
const jokeSetup = document.querySelector('#joke-setup');
const jokePunchline = document.querySelector('#joke-punchline');

fetch('https://official-joke-api.appspot.com/jokes/random')
    .then(res => res.json())
    .then(joke => {
        jokeSetup.textContent = joke.setup
        jokePunchline.textContent = joke.punchline
        reveal.classList.remove('hidden')
    })

jokeButton.addEventListener('click', newJoke)

function newJoke() {
    if(!jokeSetup.textContent == '') {
        jokeSetup.textContent = '';
        jokePunchline.textContent = '';
        jokePunchline.classList.add('hidden');
    }

    fetch('https://official-joke-api.appspot.com/jokes/random')
        .then(res => res.json())
        .then(joke => {
            jokeSetup.textContent = joke.setup
            jokePunchline.textContent = joke.punchline
            reveal.classList.remove('hidden')
        })
    

}

reveal.addEventListener('click', function() {
    jokePunchline.classList.remove('hidden');
})


