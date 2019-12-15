# BAMAZON-MySQL-App:
Geoffry Aezos's Bamazon Welcomes You!

BAMAZON is like AMAZON. However, while AMAZON is owned by Jeff Bezos,BAMAZON is owned by his lesser know twin brother Geoff Aezos. BAMAZON is a command line node and mysql app that takes in parameters and gives you back data. The app has three views: Customer, Store Manager and District Supervior!

# BAMAZON uses the following list of example commands:
    * Customer:
        The customer view is all about adding items to a shopping cart and receiving an order total.
    * Store Manager:
        This view helps the store manager assess low inventory, available products, adding new products to the store and reordering products.
    * District Supervisor:
        This view is all about meeting sales goals. The district supervisor has to know if products are selling and if the store is profitable!

# Technologies used:
    * Node.js
    * Javascript
    * MySQL

# NPM Packages:
    * mysql - A package that connects to MySQL databases and tables.
    * console.table - A package that improves table views.
    * inquirer - A simple NPM package that allows questions to be asked through the command line.
    * colors - adding a bit of flare when separating the commands above.

# How to Run BAMAZON:
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
Thanks to my Tutor (Isabel) and TA's (Austin and Leah) for helping me through my project!