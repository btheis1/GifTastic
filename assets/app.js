//DEFINE global variables
    //CREATE ARRAY of strings
var topics = ["cat","dog","hamster","fish","bird","sheep","monkey"]

for (i = 0; i < topics.length; i++) {
    //CREATE new button
    var button = $("<button>");
    //STORE string in new variable
    var animalName = topics[i];
    //SET text equal to string in array
    button.text(animalName);
    //GIVE each button data attribute equal to string
    button.attr("data-animal", animalName);
    //APPEND buttons to animals div
    $("#animals").append(button);
}

//Event listener for click on submit button
$("#submitBtn").on("click", function(event) {
    event.preventDefault();
    //store user input in variable called string
    var string = $("input").val().trim();
    //create new button
    var newBtn = $("<button>");   
    //set text = string
    newBtn.text(string);
    //give button attribute = string
    newBtn.attr("data-animal", string);
    //append to animals div
    $("#animals").append(newBtn);
})

//ON CLICK
$(document).on("click", "button", function() {
 // GET data attribute from click
 var animal = $(this).attr("data-animal");
 //API url, store as variable
 //edit query url to call gif related to string, limit 10 gifs
 var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal +
 "&api_key=MUZEBvJnYr2rv9aIpEMkS5AMc9UYchXq&limit=10" ;

 //ajax call
 $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
        console.log(response);

        var results = response.data;

       //for loop to display gifs
       for (var i = 0; i < results.length; i ++) {
         //create new div to hold each gif
            var gifDiv = $("<div>");
         //save rating in variable
            var rating = results[i].rating;
         //create paragraph
            var p = $("<p>");
         //Display rating in the p tag
            p.text(rating);
         //create new image
            var animalImage = $("<img>");
         //Give new image src from the results
            animalImage.attr("src", results[i].images.fixed_height_still.url);
         //give a data-still attr
            animalImage.attr("data-still", results[i].images.fixed_height_still.url);
         //give a data-animate attr
            animalImage.attr("data-animate", results[i].images.fixed_height.url);
         //Set data-state to still
            animalImage.attr("data-state", "still");
         //Append rating to gifDiv
            gifDiv.append(p);
         //Append gif image to gifDiv
            gifDiv.append(animalImage);
         //display gifs on page
            $("#gifs").prepend(gifDiv);
        }

        
        //On click, animate gifs
        $("img").on("click", function() {

            //create variable referring to the state of image clicked
            var state = $(this).attr("data-state");
            //if image is still, change img src to animated
            if (state === "still"){
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state","animate");
            //if image is animated, change img src to still
            } else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
            }
        })
    })
})



