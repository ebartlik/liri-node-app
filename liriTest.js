var env = require('dotenv').config();
var keys = require('./keys.js');
var request = require('request');
var fs = require('fs');
var commandOne = process.argv[2];
var commandTwo = process.argv[3];
var commandThree = process.argv[4];
var commandFour = process.argv[5];
// require("keys").config();
// var keys = require("keys");
var twitter = require('twitter');
var spotify = require('node-spotify-api');
var spotify = new spotify(keys.spotify);
// // var client = new Twitter(keys.twitter);
var twitterClient = new twitter(keys.twitter);
var randomFile = ('./random.txt');

// console.log(process.env);



  //  id: keys.spotify.id,
  //  secret: keys.spotify.secret,
 if(commandOne === 'spotify-this-song'){

function spotifyFunc(){
  spotify.search({ type: 'track', query: commandTwo, limit:1}, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    // var data = data;
    
       for(i=0;i<data.tracks.items.length;i++){
   
  //  console.log(JSON.stringify(data.tracks.items[i],null, 2)); 
   console.log("Song: " + data.tracks.items[i].name);
  //  console.log(data.tracks.items[i]);
  console.log("Album: " + data.tracks.items[i].album.name);
  //  console.log("Preview URL: " + data.tracks.items[i].preview_url);
  for(x=0;x<data.tracks.items[i].artists.length;x++){
    console.log("Artist" + data.tracks.items[i].artists[x].name);

  }
    console.log("Preview URL: " + data.tracks.items[i].preview_url);
    
       }
  });

};
 
spotifyFunc();
  

 




if(commandOne === 'my-tweets'){
 
var params = {screen_name:'@codingcorner_'};
 twitterClient.get('statuses/user_timeline', params, function(error, tweets, response) {
   if (!error) {
     var tweet = tweets;
     for(i=0;i<tweet.length;i++){
      console.log("Date: " + tweet[i].created_at +" Tweet: " + tweet[i].text);
    
     }
 
    }
  
  
  });



if(commandOne === 'movie-this'){

request("http://www.omdbapi.com/?t=" + commandTwo + "%20" + commandThree + "&y=&plot=short&apikey=trilogy", function(error, response, body) {

  // If there were no errors and the response code was 200 (i.e. the request was successful)...
  if (!error && response.statusCode === 200) {

    
    // Then we print out the imdbRating
    
    console.log("Title: " + JSON.parse(body).Title);
    console.log("Released: " + JSON.parse(body).Released);
    console.log("IMBD Rating: " + JSON.parse(body).imdbRating);
    console.log("Rotton Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
    console.log("Country: " + JSON.parse(body).Country);
    console.log("Language: " + JSON.parse(body).Language);
    console.log("Plot: " + JSON.parse(body).Plot);
    console.log("Actors: " + JSON.parse(body).Actors);
    
  }
});

}

}

 }

 
  


// if(commandOne === 'do-what-it-says'){
//   function spotifyFuncTwo(){
//     fs.readFile(randomFile, "utf8", function(err, data){
//         if(err){
//             return console.log("Error");
//         }  

//         var content = data;
        
//         console.log(content);
//       });

     
//         spotify.search({ type: 'track', query: content, limit:1}, function(err, data) {
//           if (err) {
//             return console.log('Error occurred: ' + err);
//           }
//           // var data = data;
          
//              for(i=0;i<data.tracks.items.length;i++){
         
//         //  console.log(JSON.stringify(data.tracks.items[i],null, 2)); 
//          console.log("Song: " + data.tracks.items[i].name);
//         //  console.log(data.tracks.items[i]);
//         console.log("Album: " + data.tracks.items[i].album.name);
//         //  console.log("Preview URL: " + data.tracks.items[i].preview_url);
//         for(x=0;x<data.tracks.items[i].artists.length;x++){
//           console.log("Artist" + data.tracks.items[i].artists[x].name);
      
//         }
//           console.log("Preview URL: " + data.tracks.items[i].preview_url);
          
//              }
//         });
      
      
       
//       spotifyFuncTwo();
       
//       };
      
    
    
    
//   }
  
 

 
 
//  }
//   }


