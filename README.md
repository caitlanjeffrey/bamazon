# BAMAZON-MySQL-App:
Geoffry Aezos's Bamazon Welcomes You!

LIRI is like SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

# LIRI uses the following commands:
    * Concerts/Bands:
        'concert-this'
    * Songs:
        'spotify-this-song'
    * Movies:
        'movie-this'
    * Command:
        'do-what-it-says'

# Technologies used:
    * Node.js
    * Javascript

# npm packages:
spotify - A simple API library for the Spotify REST API.
axios - Axiox is designed to be the simplest way possible to make http calls.
dotenv - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.
fs - File read package
colors - adding a bit of flare when separating the commands above.

# How to Run LIRI-Bot:
Step One: node liri concert-this <artist name here> will show the artist that you searched.

    This will show the following information about the artist in your terminal/bash window:

    Artist name
    Venue name
    City, State, Country where concert is held
    Time of concert
    Example: (./images/concert-this-artistSelected.png)

    If no concert is provided then the program will default to "Taylor Swift" (./images/concert-this-noArtist.png).

Step Two: node liri spotify-this-song <song name here> will show the song that you searched.

    This will show the following information about the song in your terminal/bash window:

    Artist(s)
    The song's name
    A preview link of the song from Spotify
    The album that the song is from
    Example: (./images/songs-songSelected.png)

    If no song is provided then the program will default to "Barbie Tingz" by Nicki Minaj (./images/songs-noSongSelected.png).

Step Three: node liri.js movie-this <movie name here>.

    This will output the following information to your terminal/bash window:

    Title of the movie.
    Plot of the movie.
    Actors in the movie.
    Year the movie came out.
    Country where the movie was produced.
    Language of the movie.
    IMDB Rating of the movie.
    Rotten Tomatoes Rating.
    Example: (./images/movies-movieSelected.png)

    If the user doesn't type a movie in, the program will output data for the movie 'Monty Python and the Holy Grail' (./images/movies-noMovieSelected.png).

Step Four: node liri.js do-what-it-says

    This will output the command placed in random.txt file: (./images/do-what-it-says.png)

# Author
Caitlan Jeffrey

# Special Thanks
Thanks to my TA's for helping me through my project!