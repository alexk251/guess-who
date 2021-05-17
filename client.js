console.log('Here are all the available people:', people);

$(document).ready(readyNow);

function readyNow() {
    console.log('jquery ready');

    displayImages();
    randomPerson();
    

    $('#imagesBody').on('click', '.image' ,gameLogic );
    
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

    function randomNumber(min, max){
        return Math.floor(Math.random() * (1 + max - min) + min);
    }

    $('#prompt').text('');

    let justAPerson =  people[randomNumber(0,people.length-1)].name;
    

    let currentRandomPerson = $(`<p>Click On: ${justAPerson}</p>`);

    currentRandomPerson.data('rando',justAPerson);

    $('#prompt').append(currentRandomPerson);
    
    

}

function gameLogic() {
    let selectedImage = $(this).data('portraitName');
    let findThisPerson = $('p').data('rando');
    console.log(findThisPerson)
    console.log(selectedImage);

    if (selectedImage === findThisPerson) {
        alert('we have a winner')
        randomPerson();
    } else {
        alert('try again');
    }



}