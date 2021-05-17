console.log('Here are all the available people:', people);

$(document).ready(readyNow);

function readyNow() {
    console.log('jquery ready');

    displayImages();
    randomPerson();
}

function displayImages() {
    for (let i = 0; i < people.length; i++) {
        let portrait = $(`<img src="https://github.com/${people[i].githubUsername}.png?size=250" alt="Profile image of ${people[i].name}"></img>`)
        portrait.data('portraitName',people[i].name)
        console.log($(portrait).data());
        $('#imagesBody').append(portrait);
    }
    }

    function randomNumber(min, max){
        return Math.floor(Math.random() * (1 + max - min) + min);
    }
    

function randomPerson() {

    $('#prompt').append(people[randomNumber(0,people.length-1)].name);

}