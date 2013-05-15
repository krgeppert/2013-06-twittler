/**
 * Created with JetBrains WebStorm.
 * User: kyle
 * Date: 5/15/13
 * Time: 8:13 AM
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function(){
    // Set up Data.
    var streamType = "home";
    var date = new Date();
    var currentTweetIndex = 0;
    var $body = $('body');
    var $listOfTweets = $('<ul></ul>');
    var $updateButton = $('<button id="update" type="button" onclick="updateStream()" >Update</button>');
    var $homeButton = $('<button id="toHome" type="button" onclick="goHome()" >Home</button>');
    // Set up Functions.
    var goHome = function(){
    };
    var organizePage = function(){
        $listOfTweets.appendTo($body);
        $updateButton.appendTo($body);
        $homeButton.appendTo($body);
    };
    var updateStream = function(){
        for (var i = currentTweetIndex; i < streams.home.length; i++){
            $listOfTweets.prepend(generateTweet(streams.home[i]));
        }
        currentTweetIndex = i + 1;
    };
    var generateTweet = function(chirp){
        var $tweet = $('<div></div>');
        $tweet.text('@' + chirp.user + ': ' + chirp.message + " created at: " + chirp.created_at);
        return $tweet;
    };
    var displayTweets = function(){
        updateStream();
    };
    // Implement page.

    $body.html('');  // What does this do?
    organizePage();
    displayTweets();

//    var index = streams.home.length - 1;
//    while(index >= 0){
//        var tweet = streams.home[index];
//        var $tweet = $('<div></div>');
//        $tweet.text('@' + tweet.user + ': ' + tweet.message + " created at: " + tweet.timeStamp);
//        $tweet.appendTo($body);
//        index -= 1;
//    }
















});
