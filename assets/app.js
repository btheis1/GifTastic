//DEFINE global variables
    //CREATE ARRAY of strings
var topics = ["cat","dog","hamster","fish","bird","sheep","monkey"]
    //for loop-- take string name, make into button, give it a data value
for (i = 0; i < topics.length; i++) {
    //CREATE new button
    var button = $("<button>");
    //SET text equal to string in array
    button.text(topics[i]);
    //APPEND buttons to animals div
    $("#animals").append(button);
}

//ON CLICK
 //ajax call
 //edit ajax url to call gif related to string
 //limit 10 gifs
 //gifs paused by default, animate on click
 //display rating above

//FORM
    //when user clicks submit, save string to the array
    