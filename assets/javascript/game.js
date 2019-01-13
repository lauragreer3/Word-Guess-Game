the_game = {
    num_guesses: 0, 
    word_dictionary: ["Aladdin", "Mufasa", "Cars", "Jasmin"],
    current_word: "",
    display_word: "",
    all_guesses: [],
    hangman_status: 0, 
    game_state: "new_game"
}

function init_game(game) {
    num_guesses = 0;
    word_dictionary = ["Aladdin", "Mufasa", "Cars", "Jasmin"];
    random_pick = Math.floor((Math.random() * (game.word_dictionary.length -1)))
    game.current_word = game.word_dictionary[random_pick];
    game.display_word ="";
    for (x = 0; x < current_word.length -1; x++) {
        game.display_word += "_"; //for each letter in display word, set to underscore
}
   
    document.getElementById("current_word").innerHTML = display_word;
    game.all_guesses = [];
    game.hangman_status = 0;
    /*
        hangman_status_0.jpg = no hangman, just gallows
        hangman_status_1.jpg = hangman head
        hangman_status_2.jpg = hangman head, body
        hangman_status_3.jpg = hangman head, body, r_arm
        hangman_status_4.jpg = hangman head, body, r_arm, l_arm
        hangman_status_5.jpg = hangman head, body, r_arm, l_arm, r_leg
        hangman_status_6.jpg = hangman head, body, r_arm, l_arm, r-leg, l_leg (game over)
    */
    hangman_status_prefix = "assets/images/hangman_status_";
    document.getElementById("game_state_img").src = hangman_img_prefix
    game.game_state = "new game"

    possible states:
        new_game
        playing
        game_over_win = 0;
        game_over_losses = 0;
}

num_wins = 0;
num_losses = 0;
init_game(the_game);
document.addEventListener("keypress", function onPress(event) {
    //if (event.key === "z" && event.ctrlKey) {
        // // DO something awesome        
    //}
    //check if letter is in the game.current_word
    for (x = 0; x < current_word.length -1; x++) {
        game.display_word.charAt(x).toLower()
    
    
})