var wins = 0;
var losses = 0;
var score = 0;
var randomNumber = Math.floor(Math.random() * 109) + 12;
var rose = Math.floor(Math.random() * 12) + 1;
var amethyst = Math.floor(Math.random() * 12) + 1;
var ruby = Math.floor(Math.random() * 12) + 1;
var sapphire = Math.floor(Math.random() * 12) + 1;

function game () {
    $("#number").html("<p id='number-text'>Random Number:<br/>" + randomNumber + "</p>");
    $("#wins-losses").html("<p id='wins-losses-text'>Wins:  " + wins + "<br/>Losses: " + losses + "</p>");
    $("#total-score").html("<p id='score-text'>Your total score is:  <br/>" + score + "</p>");
    
    $("button").on("click", function(){
        switch(this.id)
        {
            case "rose-gem":
                score+=rose;
                break;
            case "amethyst-gem":
                score+=amethyst;
                break;
            case "ruby-gem":
                score+=ruby;
                break;
            case "sapphire-gem":
                score+=sapphire;
                break;
        }
        $("#total-score").html("<p id='score-text'>Your total score is:  <br/>" + score + "</p>");
        calculateScore();
    })

};

function calculateScore(){
    if (score === randomNumber){
        wins++;
        $("#wins-losses").html("<p id='wins-losses-text'>You win! (^0^)<br/>Wins:  " + wins + "<br/>Losses: " + losses + "</p>");
        reset();
    }
    if (score > randomNumber){
        losses++;
        $("#wins-losses").html("<p id='wins-losses-text'>You lose! (T^T)<br/>Wins:  " + wins + "<br/>Losses: " + losses + "</p>");
        reset();
    }
};

function reset(){
    rose = Math.floor(Math.random() * 12) + 1;
    amethyst = Math.floor(Math.random() * 12) + 1;
    ruby = Math.floor(Math.random() * 12) + 1;
    sapphire = Math.floor(Math.random() * 12) + 1;
    randomNumber = Math.floor(Math.random() * 109) + 12;
    score = 0;
    $("#number").html("<p id='number-text'>Random Number:<br/>" + randomNumber + "</p>");
    $("#total-score").html("<p id='score-text'>Your total score is:  <br/>" + score + "</p>");
};