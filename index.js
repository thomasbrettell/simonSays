var sequence = [];

$(".start-btn").click(function() {
    generateSequence();
});

$(".btn").click(function(event){
    $(event.currentTarget).toggleClass("pressed");
    setTimeout(function() {
        $(event.currentTarget).toggleClass("pressed");
    }, 100);
    playSound(event.target.id);
});

function playSound(clickedButton) {
    switch(clickedButton) {
        case "red":
            new Audio("sounds/red.mp3").play();
            break;
            
        case "blue":
            new Audio("sounds/blue.mp3").play();
            break;

        case "green":
            new Audio("sounds/green.mp3").play();
            break;

        case "yellow":
            new Audio("sounds/yellow.mp3").play();
            break;

        default:
    }
}

function generateSequence() {
    var nextSequence = Math.floor(Math.random() * 4) + 1;
    sequence.push(nextSequence);
    console.log(sequence)
}