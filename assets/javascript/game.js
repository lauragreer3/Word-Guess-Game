var the_game = {
    num_guesses: 0, 
    word_dictionary: ["Aladdin", "Mufasa", "Cars", "Jasmin"],
    current_word: "",
    display_word: "",
    wrong_guesses: [],
    correct_guesses: [],
    hangman_status: 0,
    game_state: "new_game",
    num_wins : 0,
    num_losses: 0, 
    hangman_img_prefix : "assets/images/hangman_status_",
    game_image: document.getElementById("game_state_img"),    
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
      
        document.getElementById("game_state_img").src = this.hangman_img_prefix + this.hangman_status + ".jpg";

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
        var already_guessed = false;
        for (x = 0; x < this.current_word.length; x++) {
            if (temp_current_word.charAt(x) === keypressed) 
            {
                console.log("checking if " + temp_current_word.charAt(x) + " = " + keypressed)
                guessed_correctly = true;
                this.correct_guesses.push(x);

            }    
        }
        if (guessed_correctly == false) {
            for (x = 0; x < this.wrong_guesses.length; x++) {
                if(this.wrong_guesses[x] == keypressed) {
                    already_guessed = true;
                }
            }
            if(already_guessed == false) {
                this.wrong_guesses.push(keypressed);
            }
        }
        console.log("right guesses:" + this.correct_guesses);
        console.log("wrong guesses:" + this.wrong_guesses);
        document.getElementById("current_word").innerHTML = this.display_word;
        this.update_ui();
    },
    update_ui: function() {
        this.display_word = "";
        for (x = 0; x < this.current_word.length; x++) {
            if (this.correct_guesses.includes(x)) {
                this.display_word += this.current_word.charAt(x);
            }
            else this.display_word += "_";
        }
        document.getElementById("current_word").innerHTML = this.display_word;
        document.getElementById("num_wrong_guesses").innerHTML = this.wrong_guesses.length;
        var temp_wrong_string = "";
        for (x = 0; x < this.wrong_guesses.length; x++) {
            temp_wrong_string += this.wrong_guesses[x];
            if ((x != this.wrong_guesses.length -1) && (this.wrong_guesses.length > 1))
            {
                temp_wrong_string += ", ";
            }
        }
        document.getElementById("wrong_guesses").innerHTML = temp_wrong_string;
        this.hangman_status = this.wrong_guesses.length;
        document.getElementById("game_state_img").src = this.hangman_img_prefix + this.hangman_status + ".jpg";
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