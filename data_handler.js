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
    var updateStamp = date.getTime();
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
    var displayTweets = function(){
    };
    var generateTweet = function(chirp){
        var $tweet = $('<div></div>');
        $tweet.text('@' + chirp.user + ': ' + chirp.message + " created at: " + chirp.timeStamp);
        return $tweet;
    };
    var updateStream = function(){
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
