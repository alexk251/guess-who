console.log('Here are all the available people:', people);

$(document).ready(readyNow);

let currentRandomPerson = ( people[randomNumber(0,people.length-1)].name );

function readyNow() {
    console.log('jquery ready');

    displayImages();
    randomPerson();

    $('#imagesBody').on('click', '.image' ,gameLogic );
    
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function displayImages() {
    for (let i = 0; i < people.length; i++) {
        let portrait = $(`<img class="image" src="https://github.com/${people[i].githubUsername}.png?size=250" alt="Profile image of ${people[i].name}"></img>`)
        portrait.data('portraitName',people[i].name)
        console.log($(portrait).data());
        $('#imagesBody').append(portrait);
    }
}

    

function randomPerson() {

    $('#prompt').addClass('rando').append(currentRandomPerson);
    

}

function gameLogic() {
    let selectedImage = $(this).data('portraitName');
    console.log('click');

    console.log(selectedImage);

    if (selectedImage == currentRandomPerson) {
        alert('we have a winner')
    } else {
        alert('try again');
    }



}