var the_game = {
    num_guesses: 0, 
    word_dictionary: ["Aladdin", "Mufasa", "Cars", "Jasmin"],
    current_word: "",
    display_word: "",
    all_guesses: [],
    hangman_status: 0,
    num_wins : 0,
    num_losses: 0, 
    game_state: "new_game",
    init_game: function () {
        num_guesses = 0;
        word_dictionary = ["Aladdin", "Mufasa", "Cars", "Jasmin"];
        random_pick = Math.floor((Math.random() * (the_game.word_dictionary.length)));
        this.current_word = this.word_dictionary[random_pick];
        this.display_word ="";
        for (x = 0; x < this.current_word.length; x++) {
            this.display_word += "_"; //for each letter in display word, set to underscore
        }
        document.getElementById("current_word").innerHTML = this.display_word;
        this.all_guesses = [];
        this.hangman_status = 0;
        /*
            hangman_status_0.jpg = no hangman, just gallows
            hangman_status_1.jpg = hangman head
            hangman_status_2.jpg = hangman head, body
            hangman_status_3.jpg = hangman head, body, r_arm
            hangman_status_4.jpg = hangman head, body, r_arm, l_arm
            hangman_status_5.jpg = hangman head, body, r_arm, l_arm, r_leg
            hangman_status_6.jpg = hangman head, body, r_arm, l_arm, r-leg, l_leg (game over)
        */
        hangman_img_prefix = "assets/images/hangman_status_";
        document.getElementById("game_state_img").src = hangman_img_prefix + this.hangman_status + ".jpg";

        this.game_state = "new_game"

       /*possible states:
            new_game
            playing
            game_over_win = 0;
            game_over_losses = 0;*/
    },
    handle_keypress: function(key) {
        var keypressed = key.toLowerCase();
        var temp_current_word = this.current_word.toLowerCase();
        var guessed_correctly = false;
        for (x = 0; x < this.current_word.length -1; x++) {
            if (temp_current_word.charAt(x) === keypressed) {
                console.log("checking if " + temp_current_word.charAt(x) + " = " + keypressed)
                guessed_correctly = true;
                
            }    
        }
    }

}


the_game.init_game();
document.addEventListener("keypress", function onPress(event) {
    //if (event.key === "z" && event.ctrlKey) {
        // // DO something awesome        
    //}
    //check if letter is in the game.current_word
    console.log("keypressed: " + event.key);
    the_game.handle_keypress(event.key);
    
});