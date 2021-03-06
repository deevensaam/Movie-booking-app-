//this code is used to add assign id values to the json data which initially the doesnt doesnt have

const movies = [
    {
        "Title":"Crazy, Stupid, Love.",
        "Year":"2011",
        "imdbID":"tt1570728",
        "Type":"movie",
        "Language":"English",
        "Genre":"Romance, Comedy, Drama ",
        "Trailer":"https://youtu.be/8iCwtxJejik",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMTg2MjkwMTM0NF5BMl5BanBnXkFtZTcwMzc4NDg2NQ@@._V1_SX300.jpg"
    },
    {
        "Title":"Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
        "Year":"1964",
        "imdbID":"tt0057012",
        "Type":"movie",
        "Language":"English",
        "Genre":"Comedy, War, Science Fiction",
        "Trailer":"https://youtu.be/jPU1AYTxwg4",
        "Poster":"https://m.media-amazon.com/images/M/MV5BZWI3ZTMxNjctMjdlNS00NmUwLWFiM2YtZDUyY2I3N2MxYTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
        "Title":"Love Actually",
        "Year":"2003",
        "imdbID":"tt0314331",
        "Type":"movie",
        "Language":"English",
        "Genre":"Romance, Comedy, Drama",
        "Trailer":"https://www.youtube.com/watch?v=Wj4dHXsza0g",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_SX300.jpg"
    },
    {
        "Title":"Shakespeare in Love",
        "Year":"1998",
        "imdbID":"tt0138097",
        "Type":"movie",
        "Language":"English",
        "Genre":"Romance, Comedy, History,Drama,Indie film",
        "Trailer":"https://www.youtube.com/watch?v=gk1rTKB6ZF8",
        "Poster":"https://m.media-amazon.com/images/M/MV5BM2ZkNjM5MjEtNTBlMC00OTI5LTgyYmEtZDljMzNmNzhiNzY0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg"
    },
    {
        "Title":"P.S. I Love You",
        "Year":"2007",
        "imdbID":"tt0431308",
        "Type":"movie",
        "Language":"English",
        "Genre":"Romance, Drama",
        "Trailer":"https://youtu.be/CZzW6_hR068",
        "Poster":"https://m.media-amazon.com/images/M/MV5BNTg2MDg4MjI5NV5BMl5BanBnXkFtZTcwMzQ0MDczMw@@._V1_SX300.jpg"
    },
    {
        "Title":"I Love You, Man",
        "Year":"2009",
        "imdbID":"tt1155056",
        "Type":"movie",
        "Language":"English",
        "Genre":"Romance, Comedy, Buddy",
        "Trailer":"https://youtu.be/TJU061IOMMU",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMTU4MjI5NTEyNV5BMl5BanBnXkFtZTcwNjQ1NTMzMg@@._V1_SX300.jpg"
    },
    {
        "Title":"Love & Other Drugs",
        "Year":"2010",
        "imdbID":"tt0758752",
        "Type":"movie",
        "Language":"English",
        "Genre":"Romance, Comedy, Erotic, Adaptation",
        "Trailer":"https://youtu.be/h6w7Dh-QxzY",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMTgxOTczODEyMF5BMl5BanBnXkFtZTcwMDc0NDY4Mw@@._V1_SX300.jpg"
    },
    {
        "Title":"Punch-Drunk Love",
        "Year":"2002",
        "imdbID":"tt0272338",
        "Type":"movie",
        "Language":"English",
        "Genre":"Romance, Comedy, Thriller, Drama",
        "Trailer":"https://www.youtube.com/watch?v=VNeZi1y_v88",
        "Poster":"https://m.media-amazon.com/images/M/MV5BYmE1OTY4NjgtYjcwNC00NWE4LWJiNGMtZmVhYTdlMWE1YzIxXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
    },
    {
        "Title":"In the Mood for Love",
        "Year":"2000",
        "imdbID":"tt0118694",
        "Type":"movie",
        "Language":"English",
        "Genre":"Romance, Melodrama, Drama",
        "Trailer":"https://youtu.be/dWVDZ98AFhI",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMDJkYjRiMTgtYjBhNi00ZjQwLWI3MWItNTZkY2MzNjcxNzM5XkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_SX300.jpg"
    },
    {
        "Title":"Love, Rosie",
        "Year":"2014",
        "imdbID":"tt1638002",
        "Type":"movie",
        "Language":"English",
        "Genre":"Romance, Comedy",
        "Trailer":"https://youtu.be/5zL3YJKygd4",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMTk0Mzg1MTU1MF5BMl5BanBnXkFtZTgwMjU3ODI2MzE@._V1_SX300.jpg"
    },
    {
        "Title":"Star Wars: Episode IV - A New Hope",
        "Year":"1977",
        "imdbID":"tt0076759",
        "Type":"movie",
        "Language":"English",
        "Genre":"Fantasy, Mystery, Space Opera, Action, Adventure, Science Fiction",
        "Trailer":"https://youtu.be/vZ734NWnAHA",
        "Poster":"https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
        "Title":"Star Wars: Episode V - The Empire Strikes Back",
        "Year":"1980",
        "imdbID":"tt0080684",
        "Type":"movie",
        "Language":"English",
        "Genre":"Fantasy, Children???s film, Space Opera, Action, Adventure, Science Fiction",
        "Trailer":"https://youtu.be/JNwNXF9Y6kY",
        "Poster":"https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
        "Title":"Star Wars: Episode VI - Return of the Jedi",
        "Year":"1983",
        "imdbID":"tt0086190",
        "Type":"movie",
        "Language":"English",
        "Genre":"Fantasy, Space Opera, Action, Adventure, Science Fiction",
        "Trailer":"https://youtu.be/7L8p7_SLzvU",
        "Poster":"https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    },
    {
        "Title":"Star Wars: Episode VII - The Force Awakens",
        "Year":"2015",
        "imdbID":"tt2488496",
        "Type":"movie",
        "Language":"English",
        "Genre":"Fantasy, Space Opera, Action, Adventure, Science Fiction",
        "Trailer":"https://youtu.be/sGbxmsDFVnE",
        "Poster":"https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"
    },
    {
        "Title":"Star Wars: Episode I - The Phantom Menace",
        "Year":"1999",
        "imdbID":"tt0120915",
        "Type":"movie",
        "Language":"English",
        "Genre":"Fantasy, Children???s film, Space Opera, Action, Adventure, Science Fiction",
        "Trailer":"https://youtu.be/bD7bpG-zDJQ",
        "Poster":"https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    },
    {
        "Title":"Star Wars: Episode III - Revenge of the Sith",
        "Year":"2005",
        "imdbID":"tt0121766",
        "Type":"movie",
        "Language":"English",
        "Genre":"Fantasy, Space Opera, Action, Adventure, Science Fiction",
        "Trailer":"https://youtu.be/5UnjrG_N8hU",
        "Poster":"https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg"
    },
    {
        "Title":"Star Wars: Episode II - Attack of the Clones",
        "Year":"2002",
        "imdbID":"tt0121765",
        "Type":"movie",
        "Language":"English",
        "Genre":"Romance, Fantasy, Children???s film, Space Opera, Action, Adventure, Science Fiction",
        "Trailer":"https://youtu.be/gYbW1F_c9eM",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"
    },
    {
        "Title":"Star Wars: Episode VIII - The Last Jedi",
        "Year":"2017",
        "imdbID":"tt2527336",
        "Type":"movie",
        "Language":"English",
        "Genre":"Fantasy, Space Opera, Action, Science Fiction",
        "Trailer":"https://youtu.be/Q0CbN8sfihY",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg"
    },
    {
        "Title":"Star Trek",
        "Year":"2009",
        "imdbID":"tt0796366",
        "Type":"movie",
        "Language":"English",
        "Genre":"Science Fiction, Action, Adventure, Action Fiction, Adventure Fiction, Drama, Space Western",
        "Trailer":"https://youtu.be/iGAHnZ555nI",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMjE5NDQ5OTE4Ml5BMl5BanBnXkFtZTcwOTE3NDIzMw@@._V1_SX300.jpg"
    },
    {
        "Title":"Rogue One: A Star Wars Story",
        "Year":"2016",
        "imdbID":"tt3748528",
        "Type":"movie",
        "Language":"English",
        "Genre":"Adventure, Space Opera, Action, Science Fiction",
        "Trailer":"https://youtu.be/frdj1zb9sMY",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg"
    },
    {
        "Title":"Avengers: Infinity War",
        "Year":"2018",
        "imdbID":"tt4154756",
        "Type":"movie",
        "Language":"English",
        "Genre":"Fantasy, Adventure, Superhero, Action, Science Fiction",
        "Trailer":"https://youtu.be/6ZfuNTqbHE8",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    },
    {
        "Title":"Captain America: Civil War",
        "Year":"2016",
        "imdbID":"tt3498820",
        "Type":"movie",
        "Language":"English",
        "Genre":"Adventure, Superhero, Action, Science Fiction, Thriller",
        "Trailer":"https://youtu.be/dKrVegVI0Us",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    },
    {
        "Title":"World War Z",
        "Year":"2013",
        "imdbID":"tt0816711",
        "Type":"movie",
        "Language":"English",
        "Genre":"Adventure, Superhero, Action, Science Fiction, Thriller, Horror, Zombie, Drama, Apocalyptic and post-apocalyptic fiction",
        "Trailer":"https://youtu.be/Md6Dvxdr0AQ",
        "Poster":"https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
    },
    {
        "Title":"War of the Worlds",
        "Year":"2005",
        "imdbID":"tt0407304",
        "Type":"movie",
        "Language":"English",
        "Genre":"Science Fiction, Novel, Scientific Romance",
        "Trailer":"https://youtu.be/TLnQXsKn5-E",
        "Poster":"https://m.media-amazon.com/images/M/MV5BNDUyODAzNDI1Nl5BMl5BanBnXkFtZTcwMDA2NDAzMw@@._V1_SX300.jpg"
    },
    {
        "Title":"Lord of War",
        "Year":"2005",
        "imdbID":"tt0399295",
        "Type":"movie",
        "Language":"English",
        "Genre":"War, Drama, Thriller, Crime film",
        "Trailer":"https://youtu.be/AXgyoER0aRc",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
    },
    {
        "Title":"War for the Planet of the Apes",
        "Year":"2017",
        "imdbID":"tt3450958",
        "Type":"movie",
        "Language":"English",
        "Genre":"War, Action, Science Fiction, Thriller",
        "Trailer":"https://youtu.be/qxjPjPzQ1iU",
        "Poster":"https://m.media-amazon.com/images/M/MV5BNDNmYTQzMDEtMmY0MS00OTNjLTk4MjItMDZhMzkzOGI3MzA0XkEyXkFqcGdeQXVyNjk5NDA3OTk@._V1_SX300.jpg"
    },
    {
        "Title":"War Dogs",
        "Year":"2016",
        "imdbID":"tt2005151",
        "Type":"movie",
        "Language":"English",
        "Genre":"War, Comedy, Drama, Thriller, Crime Film",
        "Trailer":"https://youtu.be/Rwh9c_E3dJk",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMjEyNzQ0NzM4MV5BMl5BanBnXkFtZTgwMDI0ODM2OTE@._V1_SX300.jpg"
    },
    {
        "Title":"This Means War",
        "Year":"2012",
        "imdbID":"tt1596350",
        "Type":"movie",
        "Language":"English",
        "Genre":"Comedy, Action, Spy, Romance",
        "Trailer":"https://youtu.be/oleuD8479uM",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMTYyOTQ4MDE2MV5BMl5BanBnXkFtZTcwOTE0MTgwNw@@._V1_SX300.jpg"
    },
    {
        "Title":"The Tomorrow War",
        "Year":"2021",
        "imdbID":"tt9777666",
        "Type":"movie",
        "Language":"English",
        "Genre":"War, Action, Drama, Adventure, Science Fiction",
        "Trailer":"https://youtu.be/QPistcpGB8o",
        "Poster":"https://m.media-amazon.com/images/M/MV5BNTI2YTI0MWEtNGQ4OS00ODIzLWE1MWEtZGJiN2E3ZmM1OWI1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg"
    },
    {
        "Title":"War Horse",
        "Year":"2011",
        "imdbID":"tt1568911",
        "Type":"movie",
        "Language":"English",
        "Genre":"Children???s Literature, Novel, Fiction, War",
        "Trailer":"https://youtu.be/JPNyNr2Kp4w",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMjExNzkxOTYyNl5BMl5BanBnXkFtZTcwODA0MjU4Ng@@._V1_SX300.jpg"
    },
    {
        "Title":"Happy Gilmore",
        "Year":"1996",
        "imdbID":"tt0116483",
        "Type":"movie",
        "Language":"English",
        "Genre":"Comedy, Romance, Sports",
        "Trailer":"https://youtu.be/y1emDAYCfVQ",
        "Poster":"https://m.media-amazon.com/images/M/MV5BZWI2NjliOTYtZjE1OS00YzAyLWJjYTQtYWNmZTQzMTQzNzVjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
        "Title":"Happy Feet",
        "Year":"2006",
        "imdbID":"tt0366548",
        "Type":"movie",
        "Language":"English",
        "Genre":"Children???s film, Music, Musical, Animation, Romance, Comedy, Adventure",
        "Trailer":"https://youtu.be/ZjJnKjkwEKw",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMTQyNTkxMjUwMV5BMl5BanBnXkFtZTcwMDQ2NTU0MQ@@._V1_SX300.jpg"
    },
    {
        "Title":"Happy Death Day",
        "Year":"2017",
        "imdbID":"tt5308322",
        "Type":"movie",
        "Language":"English",
        "Genre":"Horror, Slasher, Dark Comedy, Thriller, Mystery",
        "Trailer":"https://youtu.be/1NTaDm3atkc",
        "Poster":"https://m.media-amazon.com/images/M/MV5BYzZhY2E5NzQtMWVmNC00YmEzLTgxZDMtNjE2YmQ4ZTZiZGZjXkEyXkFqcGdeQXVyODQxMTI4MjM@._V1_SX300.jpg"
    },
    {
        "Title":"Happy Death Day 2U",
        "Year":"2019",
        "imdbID":"tt8155288",
        "Type":"movie",
        "Language":"English",
        "Genre":"Slasher, Thriller, Comedy",
        "Trailer":"https://youtu.be/THq6KlWgiqw",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMTg0NzkwMzQyMV5BMl5BanBnXkFtZTgwNDcxMTMyNzM@._V1_SX300.jpg"
    },
    {
        "Title":"Happy Feet Two",
        "Year":"2011",
        "imdbID":"tt1402488",
        "Type":"movie",
        "Language":"English",
        "Genre":"Comedy, Children???s film, Animation, Musical",
        "Trailer":"https://youtu.be/cQhTl5_LzCk",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMTg1MzU2Nzg2OV5BMl5BanBnXkFtZTcwNzE3MzAxNg@@._V1_SX300.jpg"
    },
    {
        "Title":"Happy-Go-Lucky",
        "Year":"2008",
        "imdbID":"tt1045670",
        "Type":"movie",
        "Language":"English",
        "Genre":"Comedy, Drama",
        "Trailer":"https://youtu.be/y230r-imiHM",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMTI4ODY1MjIyNV5BMl5BanBnXkFtZTcwMTExMTM5MQ@@._V1_SX300.jpg"
    },
    {
        "Title":"Happy Endings",
        "Year":"2011???2020",
        "imdbID":"tt1587678",
        "Type":"series",
        "Language":"English",
        "Genre":"Sitcom, Comedy",
        "Trailer":"https://youtu.be/jvZ8BcgWnUo",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMjE0NTQyOTM5OF5BMl5BanBnXkFtZTcwOTYyMTU2OA@@._V1_SX300.jpg"
    },
    {
        "Title":"Happy Valley",
        "Year":"2014???2022",
        "imdbID":"tt3428912",
        "Type":"series",
        "Language":"English",
        "Genre":"Drama, Crime film, Crime TV genre, Crime",
        "Trailer":"https://youtu.be/TXdBMaocR_E",
        "Poster":"https://m.media-amazon.com/images/M/MV5BNTBmYTQ5ZDYtM2NjMC00M2Q2LTg4NDAtODUxZTk0ZmFjMGVjXkEyXkFqcGdeQXVyNzQ5MzY0NjM@._V1_SX300.jpg"
    },
    {
        "Title":"Happy!",
        "Year":"2017???2019",
        "imdbID":"tt2452242",
        "Type":"series",
        "Language":"English",
        "Genre":"Soul Music, Pop",
        "Trailer":"https://youtu.be/K60kfc-k-8g",
        "Poster":"https://m.media-amazon.com/images/M/MV5BNzk2NjYxMDMxMV5BMl5BanBnXkFtZTgwMzQxODcwNDI@._V1_SX300.jpg"
    },
    {
        "Title":"Happy New Year",
        "Year":"2014",
        "imdbID":"tt2461132",
        "Type":"movie",
        "Language":"Hindi",
        "Genre":"Bollywood, Drama, Action, Musical, Romance, Heist, Comedy, Crime film, Crime",
        "Trailer":"https://youtu.be/SrJhqxYRJBU",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMjEwZGQwZWMtNTU4Zi00YWVlLTlhZTYtZjc2MzJmMGVmMDQwXkEyXkFqcGdeQXVyNjQ3ODkxMjE@._V1_SX300.jpg"
    },
    {
        "Title":"Sad Movie",
        "Year":"2005",
        "imdbID":"tt0475711",
        "Type":"movie",
        "Language":"Korean",
        "Genre":"Romance, Comedy, Drama, Melodrama",
        "Trailer":"https://youtu.be/FuB8YjJq5vw",
        "Poster":"https://m.media-amazon.com/images/M/MV5BN2ZmZGM3YTktOTk0Ni00Mjc4LThjYzEtYmExZGJiZjBlOTg3XkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_SX300.jpg"
    },
    {
        "Title":"Sad Hill Unearthed",
        "Year":"2017",
        "imdbID":"tt6997426",
        "Type":"movie",
        "Language":"English",
        "Genre":"Documentary",
        "Trailer":"https://youtu.be/BrEQPe7l6zU",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMTc2MTE0NjctM2U4Yi00MWMzLTlhZjMtNGIxNGVhNTkyZDRjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
    },
    {
        "Title":"The Ballad of the Sad Cafe",
        "Year":"1991",
        "imdbID":"tt0101404",
        "Type":"movie",
        "Language":"English",
        "Genre":"Fiction, Southern Gothic",
        "Trailer":"https://youtu.be/oX7NNT3asUI",
        "Poster":"https://m.media-amazon.com/images/M/MV5BYTliMTA1NmMtYmZhYy00YTlkLTg1ZmMtZTUyMjNlOTE4MGMwXkEyXkFqcGdeQXVyMjAxMjEzNzU@._V1_SX300.jpg"
    },
    {
        "Title":"The Sad Sack",
        "Year":"1957",
        "imdbID":"tt0050922",
        "Type":"movie",
        "Language":"English",
        "Genre":"Comedy, Slapstick",
        "Trailer":"https://prod-www.tcm.com/video/422335/sad-sack-the-original-trailer",
        "Poster":"https://m.media-amazon.com/images/M/MV5BNTBjMDI2YjMtMTIyMS00OTIwLTk2OTUtZTkwMjNjYzM1ODk4XkEyXkFqcGdeQXVyNzQzNDEyOQ@@._V1_SX300.jpg"
    },
    {
        "Title":"Dr. Bird's Advice for Sad Poets",
        "Year":"2021",
        "imdbID":"tt3301314",
        "Type":"movie",
        "Language":"English",
        "Genre":"Comedy, Drama",
        "Trailer":"https://youtu.be/S9bVZxNAZzo",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMGVjZmU2ZTQtNTFhYi00ZjFlLThlYzMtZTA3OTM5Y2UzODBjXkEyXkFqcGdeQXVyMTIzNzM0OTU@._V1_SX300.jpg"
    },
    {
        "Title":"No Sad Songs for Me",
        "Year":"1950",
        "imdbID":"tt0042790",
        "Type":"movie",
        "Language":"English",
        "Genre":"Drama",
        "Trailer":"https://youtu.be/eYPPKpuePIs",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMGM3YjY0MGYtODBiYi00M2VhLTg0YTAtYWEwMDI0MjdlZmU5XkEyXkFqcGdeQXVyNjc0MzMzNjA@._V1_SX300.jpg"
    },
    {
        "Title":"The Happy Sad",
        "Year":"2013",
        "imdbID":"tt2049559",
        "Type":"movie",
        "Language":"English",
        "Genre":"Drama",
        "Trailer":"https://youtu.be/pKEHT8nwUJA",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMTk1Nzg0Nzg0MV5BMl5BanBnXkFtZTcwNjY2NTU3OQ@@._V1_SX300.jpg"
    },
    {
        "Title":"Sad Vacation",
        "Year":"2007",
        "imdbID":"tt0915749",
        "Type":"movie",
        "Language":"English",
        "Genre":"Drama",
        "Trailer":"https://youtu.be/0IZUfBXM3xI",
        "Poster":"https://m.media-amazon.com/images/M/MV5BZjAwNGY1ZjMtY2YwMi00MDk5LWFhMWEtZTJjZjk5MTNlOWIwXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_SX300.jpg"
    },
    {
        "Title":"The Smiles of Sad Men",
        "Year":"2018",
        "imdbID":"tt8526824",
        "Type":"movie",
        "Language":"English",
        "Genre":"Comedy, Drama ",
        "Trailer":"https://youtu.be/DJsrZ-PEgQo",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMDFmYWE4Y2YtNDRmYS00ZjZiLTgyMWQtZjQyNTkxYjQ2YTcxXkEyXkFqcGdeQXVyODU2Mzg4NTg@._V1_SX300.jpg"
    },
    {
        "Title":"Fight Club",
        "Year":"1999",
        "imdbID":"tt0137523",
        "Type":"movie",
        "Language":"English",
        "Genre":" Action, Thriller, Comedy ",
        "Trailer":"https://www.youtube.com/watch?v=qtRKdVHc-cE ",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
        "Title":"Bahubali: The Beginning",
        "Year":"2015",
        "imdbID":"tt1570001",
        "Type":"movie",
        "Language":"Telugu",
        "Genre":"Action, Drama ",
        "Trailer":"https://www.youtube.com/watch?v=sOEg_YZQsTI",
        "Poster":"https://c8.alamy.com/comp/K0WTPP/prabhas-poster-baahubali-the-beginning-2015-K0WTPP.jpg"
    },
    {
        "Title":"Baahubali 2: The Conclusion",
        "Year":"2017",
        "imdbID":"tt1570002",
        "Type":"movie",
        "Language":"Telugu",
        "Genre":"Action, Drama ",
        "Trailer":"https://www.youtube.com/watch?v=qD-6d8Wo3do",
        "Poster":"https://rukminim1.flixcart.com/image/416/416/j95y4cw0/poster/r/s/h/large-movie-bahubali-2-posters-on-large-print-36x24-inches-original-imaew4jdf6rs9hdk.jpeg?q=70"
    },
    {
        "Title":"1 - Nenokkadine",
        "Year":"2017",
        "imdbID":"tt1570003",
        "Type":"movie",
        "Language":"Telugu",
        "Genre":"Action,Thriller",
        "Trailer":"https://www.youtube.com/watch?v=Gi2ukWXMMAA",
        "Poster":"https://pbs.twimg.com/media/BdMUKIsCUAAdKqP.jpg"
    },
    {
        "Title":"Ala VaikuntaPuramlo",
        "Year":"2020",
        "imdbID":"tt1570004",
        "Type":"movie",
        "Language":"Telugu",
        "Genre":"Action, Drama",
        "Trailer":"https://www.youtube.com/watch?v=SkENAjfVoNI",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMmRkMGMzYTUtM2E2My00YjZlLWFmZjItMDA5M2EwNjNiZTNjXkEyXkFqcGdeQXVyNDY5MTUyNjU@._V1_.jpg"
    },
    {
        "Title":"HIT",
        "Year":"2020",
        "imdbID":"tt1570005",
        "Type":"movie",
        "Language":"Telugu",
        "Genre":"Crime, Drama, Mystery",
        "Trailer":"https://www.youtube.com/watch?v=uYdsWe9iBAA",
        "Poster":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ-T28ymygzL08cMN4_MTDcq7GvdFb62YGp_aQneWZ-l4wGXoW8Uw9Z2b_ZTTTuTGfumQ&usqp=CAU"
    },
    {
        "Title":"Penguin",
        "Year":"2020",
        "imdbID":"tt1570006",
        "Type":"movie",
        "Language":"Telugu",
        "Genre":"Drama, Mystery, Thriller",
        "Trailer":"https://www.youtube.com/watch?v=hpD3gIlzpMM",
        "Poster":"https://static.toiimg.com/thumb/msid-76241911,width-1200,height-900,resizemode-4/.jpg"
    },
    {
        "Title":"Bheeshma",
        "Year":"2020",
        "imdbID":"tt1570007",
        "Type":"movie",
        "Language":"Telugu",
        "Genre":"Action, Comedy, Romance",
        "Trailer":"https://www.youtube.com/watch?v=8A9mJYprMl4",
        "Poster":"https://upload.wikimedia.org/wikipedia/en/f/f5/Bheeshma_poster.jpg"
    },
    {
        "Title":"World Famous Lover",
        "Year":"2020",
        "imdbID":"tt1570008",
        "Type":"movie",
        "Language":"Telugu",
        "Genre":"Romance",
        "Trailer":"https://youtu.be/g8DNVJvE-rE",
        "Poster":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS07krAk4gs10EEkbCtlw8NyCLPC7pm64EBokXpkazvqf9VJOOa90hhF2dNxNpkLjKTTbw&usqp=CAU"
    },
    {
        "Title":"Disco Raja",
        "Year":"2020",
        "imdbID":"tt1570009",
        "Type":"movie",
        "Language":"Telugu",
        "Genre":"Action, Sci-Fi",
        "Trailer":"https://www.youtube.com/watch?v=90OUq_i7JJY",
        "Poster":"https://thenewscrunch.com/wp-content/uploads/2020/01/Disco-Raja-Telugu-Movie-Cast-Teaser-Trailer-Hero-Heroine-Release-Date-Running-Time.jpg"
    },
    {
        "Title":"Jaanu",
        "Year":"2020",
        "imdbID":"tt1570010",
        "Type":"movie",
        "Language":"Telugu",
        "Genre":"Drama, Romance",
        "Trailer":"https://www.youtube.com/watch?v=8sWRT2hGPcQ",
        "Poster":"https://i.pinimg.com/originals/7a/d8/29/7ad82913980506fcd5966bee0043def3.png"
    },
    {
        "Title":"Pressure Cooker",
        "Year":"2020",
        "imdbID":"tt1570011",
        "Type":"movie",
        "Language":"Telugu",
        "Genre":"Comedy, Drama, Family",
        "Trailer":"https://www.youtube.com/watch?v=04vOO36kq1c",
        "Poster":"https://m.media-amazon.com/images/M/MV5BOTBkMWM5NzYtYjJkZC00NDRiLWE2MjctOTI5NzUxOGJjNTBjXkEyXkFqcGdeQXVyMTEyOTYzNjY1._V1_.jpg"
    },
    {
        "Title":"Jersey",
        "Year":"2019",
        "imdbID":"tt1570012",
        "Type":"movie",
        "Language":"Telugu",
        "Genre":"Drama, Sport",
        "Trailer":"https://www.youtube.com/watch?v=AjAe_Q1WZ_8",
        "Poster":"https://moviegalleri.net/wp-content/gallery/jersey-movie-posters-hd/jersey-movie-posters-hd-nani-shraddha-srinath-1195ba9.jpg"
    },
    {
        "Title":"Saaho",
        "Year":"2019",
        "imdbID":"tt1570013",
        "Type":"movie",
        "Language":"Telugu",
        "Genre":"Action, Thriller",
        "Trailer":"https://www.youtube.com/watch?v=HNnt00swZ5Q",
        "Poster":"https://static.toiimg.com/photo/61180502.cms"
    },
    {
        "Title":"Syeraa Narasimha Reddy",
        "Year":"2019",
        "imdbID":"tt1570014",
        "Type":"movie",
        "Language":"Telugu",
        "Genre":"Action, Adventure, Drama",
        "Trailer":"https://www.youtube.com/watch?v=KyhrrdpA2YA",
        "Poster":"https://images.news18.com/ibnlive/uploads/2019/08/Chiranjeevi-as-Uyyalawada-Narasimha-Reddy.jpg?impolicy=website&width=0&height=0"
    },
    {
        "Title":"Maharshi",
        "Year":"2019",
        "imdbID":"tt1570015",
        "Type":"movie",
        "Language":"Telugu",
        "Genre":"Action, Drama",
        "Trailer":"https://www.youtube.com/watch?v=ByjXIbg4hjw",
        "Poster":"https://moviegalleri.net/wp-content/uploads/2018/08/Mahesh-Babu-Maharshi-Movie-First-Look-Poster-HD-Wallpaper.jpg"
    },
    {
        "Title":"Agent Sai Sreenivasa Athreya",
        "Year":"2019",
        "imdbID":"tt1570016",
        "Type":"movie",
        "Language":"Telugu",
        "Genre":"Action, Comedy, Crime",
        "Trailer":"https://www.youtube.com/watch?v=l8xyhmSDnGU",
        "Poster":"https://www.teluguwishesh.com/images/phocagallery/wallpapers/Movies/AgentSaiSrinivasaAthreyaMovieWallpapers/Agent-Sai-Srinivasa-Athreya-Wallpapers-01.jpg"
    },
    {
        "Title":"Dear Comrade",
        "Year":"2019",
        "imdbID":"tt1570017",
        "Type":"movie",
        "Language":"Telugu",
        "Genre":"Action, Drama, Romance",
        "Trailer":"https://www.youtube.com/watch?v=x_NEfuXTR1c",
        "Poster":"https://data1.ibtimes.co.in/photo/en/full/109303/vijay-devarakonda-rashmika-mandannas-first-look-poster-dear-comrade.jpg?w=900"
    },
    {
        "Title":"F2: Fun and Frustration",
        "Year":"2019",
        "imdbID":"tt1570018",
        "Type":"movie",
        "Language":"Telugu",
        "Genre":"Comedy",
        "Trailer":"https://www.youtube.com/watch?v=x_NEfuXTR1c",
        "Poster":"https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/216374/F2Ticketing.jpg"
    },
    {
        "Title":"iSmart Shankar",
        "Year":"2019",
        "imdbID":"tt1570019",
        "Type":"movie",
        "Language":"Telugu",
        "Genre":"Action, Sci-Fi",
        "Trailer":"https://www.youtube.com/watch?v=v8yoBVK2NVg",
        "Poster":"https://static.toiimg.com/photo/84444224.cms"
    },
    {
        "Title":"Raju Gari Gadhi 3",
        "Year":"2019",
        "imdbID":"tt1570020",
        "Type":"movie",
        "Language":"Telugu",
        "Genre":"Comedy, Horror, Thriller",
        "Trailer":"https://www.youtube.com/watch?v=boJtBqIJ6Ls",
        "Poster":"https://www.tollywood.net/wp-content/uploads/2019/10/Raju-Gari-Gadhi-3-Movie-Review.jpg"
    },
    {
        "Title":"Mahanati",
        "Year":"2018",
        "imdbID":"tt1570021",
        "Type":"movie",
        "Language":"Telugu",
        "Genre":"Biography, Drama",
        "Trailer":"https://www.youtube.com/watch?v=PLmBpf7UHJs",
        "Poster":"https://www.newssting.in/uploads/file_1575718678825_Mahanatimoviejpg.jpg"
    },
    {
        "Title":"Goodachari",
        "Year":"2018",
        "imdbID":"tt1570022",
        "Type":"movie",
        "Language":"Telugu",
        "Genre":"Action, Thriller",
        "Trailer":"https://www.youtube.com/watch?v=lysoF97MOMk",
        "Poster":"https://www.filmibeat.com/ph-big/2018/08/goodachari_153362539040.jpg"
    },
    {
        "Title":"U Turn",
        "Year":"2018",
        "imdbID":"tt1570023",
        "Type":"movie",
        "Language":"Telugu",
        "Genre":"Mystery, Thriller",
        "Trailer":"https://www.youtube.com/watch?v=HG7Lv384yTU",
        "Poster":"https://i2.wp.com/www.socialnews.xyz/wp-content/uploads/2018/07/22/Samantha-U-turn-Movie-first-look-HD-Poster-and-still-.jpg?quality=80&zoom=1&ssl=1"
    },
    {
        "Title":"Devadas",
        "Year":"2018",
        "imdbID":"tt1570024",
        "Type":"movie",
        "Language":"Telugu",
        "Genre":"Action, Comedy, Drama",
        "Trailer":"https://www.youtube.com/watch?v=CK_xo3UQIvU",
        "Poster":"https://i.pinimg.com/736x/9e/1f/dc/9e1fdc48daf3153438ad8f0c81c8d66b.jpg"
    },
    {
        "Title":"Ammammagarillu",
        "Year":"2018",
        "imdbID":"tt1570025",
        "Type":"movie",
        "Language":"Telugu",
        "Genre":"Romance",
        "Trailer":"https://www.youtube.com/watch?v=knjAvn-yQiY",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMDNkZjM1NGQtNTNiMy00YTNjLWI4MTctY2M4OWZkMjFmYzJhXkEyXkFqcGdeQXVyMzYxOTQ3MDg@._V1_.jpg"
    },
    {
        "Title":"Next Enti ?",
        "Year":"2018",
        "imdbID":"tt1570026",
        "Type":"movie",
        "Language":"Telugu",
        "Genre":"Comedy, Drama, Romance",
        "Trailer":"https://www.youtube.com/watch?v=knjAvn-yQiY",
        "Poster":"https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/enti-tammannah.jpg?itok=p0YkIH9N"
    },
    {
        "Title":"Spyder",
        "Year":"2017",
        "imdbID":"tt1570027",
        "Type":"movie",
        "Language":"Telugu",
        "Genre":"Action, Thriller",
        "Trailer":"https://www.youtube.com/watch?v=og1zP3u0b4k",
        "Poster":"https://m.media-amazon.com/images/M/MV5BYTA0M2JkZDMtZTVmMS00ZTMzLTk5MjktMDcxMTc1ODU1Mjg3XkEyXkFqcGdeQXVyNjQ1MDcxNzM@._V1_.jpg"
    },
    {
        "Title":"Arjun Reddy",
        "Year":"2017",
        "imdbID":"tt1570028",
        "Type":"movie",
        "Language":"Telugu",
        "Genre":"Action, Drama, Romance",
        "Trailer":"https://www.youtube.com/watch?v=aozErj9NqeE",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMTEyMGZmYzMtOTgwZC00ZmM3LWJkNDktOWUxYzNmODdmZDM3XkEyXkFqcGdeQXVyNjE1NjA1ODc@._V1_.jpg"
    },
    {
        "Title":"Singam 3",
        "Year":"2017",
        "imdbID":"tt1570029",
        "Type":"movie",
        "Language":"Telugu",
        "Genre":"Action, Thriller",
        "Trailer":"https://www.youtube.com/watch?v=MWXffGOWyjE",
        "Poster":"https://i2.wp.com/www.socialnews.xyz/wp-content/uploads/2016/12/04/Singam-3-Posters-4.jpg?quality=80&zoom=1&ssl=1"
    },
    {
        "Title":"Fidaa",
        "Year":"2017",
        "imdbID":"tt1570030",
        "Type":"movie",
        "Language":"Telugu",
        "Genre":"Drama, Romance",
        "Trailer":"https://www.youtube.com/watch?v=AVtvjfoXNXc",
        "Poster":"https://i.pinimg.com/originals/5a/bd/43/5abd43be748c4a7e59bec6898a13d448.jpg"
    },
    {
        "Title":"Ninnu Kori",
        "Year":"2017",
        "imdbID":"tt1570031",
        "Type":"movie",
        "Language":"Telugu",
        "Genre":"Drama, Romance",
        "Trailer":"https://www.youtube.com/watch?v=Ia6EXfqKiV4",
        "Poster":"https://moviegalleri.net/wp-content/gallery/ninnu-kori-movie-release-posters/ninnu-kori-movie-release-posters-nani-nivetha-thomas-aadhi-pinisetty-16deb7d.jpg"
    },
    {
        "Title":"Nenu Local",
        "Year":"2017",
        "imdbID":"tt1570032",
        "Type":"movie",
        "Language":"Telugu",
        "Genre":"Action, Comedy, Romance",
        "Trailer":"https://www.youtube.com/watch?v=lylc7eY6yRU",
        "Poster":"https://www.filmibeat.com/ph-big/2016/11/nenu-local-movie-poster_147806211010.jpg"
    },
    {
        "Title":"Raju Gari Gadhi 2",
        "Year":"2017",
        "imdbID":"tt1570033",
        "Type":"movie",
        "Language":"Telugu",
        "Genre":"Comedy, Horror, Thriller",
        "Trailer":"https://www.youtube.com/watch?v=ZkogUD3CtNw",
        "Poster":"https://upload.wikimedia.org/wikipedia/en/thumb/d/d9/Raju_Gari_Gadhi_2.jpg/220px-Raju_Gari_Gadhi_2.jpg"
    },
    {
        "Title":"Guru",
        "Year":"2017",
        "imdbID":"tt1570034",
        "Type":"movie",
        "Language":"Telugu",
        "Genre":"Action, Drama, Sport",
        "Trailer":"https://www.youtube.com/watch?v=23UiMaJmW5c",
        "Poster":"https://m.media-amazon.com/images/M/MV5BNGVlY2Q5NzItMzA0YS00ZTBiLTgyZjktMzIzMWU5MzVjZWZjXkEyXkFqcGdeQXVyODAzNzAwOTU@._V1_.jpg"
    },
    {
        "Title":"Om Namo Venkatesaya",
        "Year":"2017",
        "imdbID":"tt1570035",
        "Type":"movie",
        "Language":"Telugu",
        "Genre":"Biography, Fantasy",
        "Trailer":"https://www.youtube.com/watch?v=Tcy4M7P2CRI",
        "Poster":"https://m.media-amazon.com/images/M/MV5BZmFiM2QwNTMtOTZiMC00MzIwLThhM2ItZDIxYWI3ZTIzYjQ2XkEyXkFqcGdeQXVyODAzNzAwOTU@._V1_.jpg"
    },
    {
        "Title":"Team 5",
        "Year":"2017",
        "imdbID":"tt1570037",
        "Type":"movie",
        "Language":"Telugu",
        "Genre":"Biography, Fantasy",
        "Trailer":"https://www.youtube.com/watch?v=h3GcNcYvL_U",
        "Poster":"https://sensongsmp3.tv/wp-content/uploads/2017/08/team-5-telugu-movie.jpg"
    },
    {
        "Title":"Kaashmora",
        "Year":"2016",
        "imdbID":"tt1570038",
        "Type":"movie",
        "Language":"Telugu",
        "Genre":"Action, Comedy, Fantasy",
        "Trailer":"https://www.youtube.com/watch?v=rQUj5Mf6iiA",
        "Poster":"https://static.moviecrow.com/marquee/kaashmora-telugu-first-look-poster/97285_thumb_665.jpg"
    },
    {
        "Title":"Express Raja",
        "Year":"2016",
        "imdbID":"tt1570039",
        "Type":"movie",
        "Language":"Telugu",
        "Genre":"Action, Comedy, Fantasy",
        "Trailer":"https://www.youtube.com/watch?v=92GLQIgwf74",
        "Poster":"https://upload.wikimedia.org/wikipedia/en/5/53/Express_Raja_Telugu_film_Poster.jpg"
    },
    {
        "Title":"Shourya",
        "Year":"2016",
        "imdbID":"tt1570040",
        "Type":"movie",
        "Language":"Telugu",
        "Genre":"Romance, Thriller",
        "Trailer":"https://www.youtube.com/watch?v=RKUctxeSdMA",
        "Poster":"https://m.media-amazon.com/images/M/MV5BZTRkN2YzNWYtYTJlOS00NjczLWEyMGMtZDhlNWVhZmM2MmRhXkEyXkFqcGdeQXVyNTE0NDY5Njc@._V1_.jpg"
    },
    {
        "Title":"Majnu",
        "Year":"2016",
        "imdbID":"tt1570041",
        "Type":"movie",
        "Language":"Telugu",
        "Genre":"Comedy, Drama, Romance",
        "Trailer":"https://www.youtube.com/watch?v=gnk48qgeZ6c",
        "Poster":"https://www.filmibeat.com/ph-big/2016/08/majnu-movie-poster_147210244310.jpg"
    },
    {
        "Title":"Vangaveeti",
        "Year":"2016",
        "imdbID":"tt1570042",
        "Type":"movie",
        "Language":"Telugu",
        "Genre":"Action, Biography, Crime",
        "Trailer":"https://www.youtube.com/watch?v=sFhvWKWC8S4",
        "Poster":"https://m.media-amazon.com/images/M/MV5BOTQ5MzY1MzgtZjU1NS00MGQ1LWJiZTctNGJhOGRkNWQwMWRhXkEyXkFqcGdeQXVyNjg2NDM4Mzc@._V1_.jpg"
    },
    {
        "Title":"Oka Manasu",
        "Year":"2016",
        "imdbID":"tt1570043",
        "Type":"movie",
        "Language":"Telugu",
        "Genre":"Drama, Musical, Romance",
        "Trailer":"https://www.youtube.com/watch?v=fPxO57_2VaQ",
        "Poster":"https://m.media-amazon.com/images/M/MV5BYjFkMDBmZmItY2RhYi00MjkwLThmYjItZmY2Zjc5YmE5ODliXkEyXkFqcGdeQXVyNjY5MjgxNDk@._V1_.jpg"
    },
    {
        "Title":"Savitri",
        "Year":"2016",
        "imdbID":"tt1570044",
        "Type":"movie",
        "Language":"Telugu",
        "Genre":"Comedy, Drama, Family",
        "Trailer":"https://www.youtube.com/watch?v=720DD8wcXRs",
        "Poster":"https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/et00039100.jpg"
    },
    {
        "Title":"Naanna Nenu Naa Boyfriends",
        "Year":"2016",
        "imdbID":"tt1570045",
        "Type":"movie",
        "Language":"Telugu",
        "Genre":"Comedy,Family",
        "Trailer":"https://www.youtube.com/watch?v=AtnjiPKNTkA",
        "Poster":"https://imageory.clapnumber.com/albums/large/1590851757.n.jpg"
    },
    {
        "Title":"Puli",
        "Year":"2015",
        "imdbID":"tt1570046",
        "Type":"movie",
        "Language":"Telugu",
        "Genre":"Action, Adventure, Fantasy",
        "Trailer":"https://www.youtube.com/watch?v=IWqViY1WXgA",
        "Poster":"https://st1.bollywoodlife.com/wp-content/uploads/2015/09/603491.jpg"
    },
    {
        "Title":"Temper",
        "Year":"2015",
        "imdbID":"tt1570047",
        "Type":"movie",
        "Language":"Telugu",
        "Genre":"Action, Drama",
        "Trailer":"https://www.youtube.com/watch?v=SQgRN5tu1f4",
        "Poster":"https://www.filmibeat.com/ph-big/2014/11/jr-ntr-temper-first-look_141708494200.jpg"
    },
    {
        "Title":"Bale Bale Magadivoy",
        "Year":"2015",
        "imdbID":"tt1570048",
        "Type":"movie",
        "Language":"Telugu",
        "Genre":"Comedy, Romance",
        "Trailer":"https://www.youtube.com/watch?v=x3b3vvI6G18",
        "Poster":"https://www.25cineframes.com/images/uploads/2015/08/Bhale-Bhale-Magadivoy-Movie-HD-Wallpapers-Posters.jpg"
    },
    {
        "Title":"Kanche",
        "Year":"2015",
        "imdbID":"tt1570049",
        "Type":"movie",
        "Language":"Telugu",
        "Genre":"Action, Drama, History",
        "Trailer":"https://www.youtube.com/watch?v=UqhrfKnAfnQ",
        "Poster":"https://m.media-amazon.com/images/M/MV5BNDA3ZWNlNmMtNjNhMC00ZjlhLTg5MTUtNGQyYWRlMWEzNDhmXkEyXkFqcGdeQXVyODA2ODM3NDQ@._V1_.jpg"
    },
    {
        "Title":"Kanchana 2",
        "Year":"2015",
        "imdbID":"tt1570050",
        "Type":"movie",
        "Language":"Telugu",
        "Genre":"Comedy, Horror",
        "Trailer":"https://www.youtube.com/watch?v=r1y4L_ogNHU",
        "Poster":"https://i.pinimg.com/originals/3a/24/91/3a2491d1484af8083a57576d68819ce0.jpg"
    },
    {
        "Title":"Kick 2",
        "Year":"2015",
        "imdbID":"tt1570051",
        "Type":"movie",
        "Language":"Telugu",
        "Genre":"Action, Comedy, Romance",
        "Trailer":"https://www.youtube.com/watch?v=VLktIc7QX-8",
        "Poster":"https://m.media-amazon.com/images/M/MV5BYWIzZDc4NWUtMWUwMy00YzdiLWIxNmMtMmRiYzYyZmJjZDc1XkEyXkFqcGdeQXVyNjUyODE2MDY@._V1_.jpg"
    },
    {
        "Title":"Mosagallaku Mosagadu",
        "Year":"2015",
        "imdbID":"tt1570052",
        "Type":"movie",
        "Language":"Telugu",
        "Genre":"Action, Comedy, Crime",
        "Trailer":"https://www.youtube.com/watch?v=4EhSJJn6v7A",
        "Poster":"https://www.filmibeat.com/ph-big/2015/05/mosagallaku-mosagadu-movie-poster_143219482420.jpg"
    },
    {
        "Title":"Akhil",
        "Year":"2015",
        "imdbID":"tt1570053",
        "Type":"movie",
        "Language":"Telugu",
        "Genre":"Action, Fantasy",
        "Trailer":"https://www.youtube.com/watch?v=jXXz-Jo9cu8",
        "Poster":"https://m.media-amazon.com/images/M/MV5BM2NhNTRmY2MtYzg3NC00ZTQ1LWIyZjYtODQ5NzZjNDMwNGFkXkEyXkFqcGdeQXVyODA2ODM3NDQ@._V1_.jpg"
    },
    {
        "Title":"Raju Gari Gadhi",
        "Year":"2015",
        "imdbID":"tt1570053",
        "Type":"movie",
        "Language":"Telugu",
        "Genre":"Horror, Thriller",
        "Trailer":"https://www.youtube.com/watch?v=wWLZmrUZMkI",
        "Poster":"https://www.filmibeat.com/ph-big/2015/11/raju-gari-gadhi-movie-poster_144723444500.jpg"
    },
    {
        "Title":"Mission Mangal",
        "Year":"2013",
        "imdbID":"tt1570054",
        "Type":"movie",
        "Language":"Hindi",
        "Genre":"Action, Drama, Historical Drama",
        "Trailer":"https://youtu.be/q10nfS9V090",
        "Poster":"https://m.media-amazon.com/images/M/MV5BZThmMWFlOWYtY2M0YS00OWIxLWI4MzgtYTJhMDNkZDY4ZjhjXkEyXkFqcGdeQXVyNzc4NzEzNjY@._V1_.jpg"
    },
    {
        "Title":"Yeh Jawaani hai deewani",
        "Year":"2013",
        "imdbID":"tt1570055",
        "Type":"movie",
        "Language":"Hindi",
        "Genre":"Romance, Drama, Comedy, Musical, Musical Drama",
        "Trailer":"https://youtu.be/Rbp2XUSeUNE",
        "Poster":"https://cdna.artstation.com/p/assets/images/images/030/084/918/large/raviteja-g-yeh-jawaani-hai-deewani-albumart.jpg?1599567880"
    },
    {
        "Title":"Tubelight",
        "Year":"2017",
        "imdbID":"tt1570056",
        "Type":"movie",
        "Language":"Hindi",
        "Genre":"War, Drama, Adventure, Historical Picture",
        "Trailer":"https://youtu.be/PGQRNKHJwH4",
        "Poster":"https://i.ytimg.com/vi/pB9NmKtnZPY/maxresdefault.jpg"
    },
    {
        "Title":"Dangal",
        "Year":"2016",
        "imdbID":"tt1570057",
        "Type":"movie",
        "Language":"Hindi",
        "Genre":"Action, Sports, Drama",
        "Trailer":"https://youtu.be/x_7YlGv9u1g",
        "Poster":"https://bollywoodmovieposters.com/wp-content/uploads/2021/02/dangal-movie-aamir-khan-film-poster.jpg"
    },
    {
        "Title":"Kabhi Khushi Kabhi Gham",
        "Year":"2011",
        "imdbID":"tt1570058",
        "Type":"movie",
        "Language":"Hindi",
        "Genre":"Romance, Melodrama,Drama, Musical, Family Drama",
        "Trailer":"https://youtu.be/7uY1JbWZKPA",
        "Poster":"https://upload.wikimedia.org/wikipedia/en/4/4d/Kabhi_Khushi_Kabhie_Gham..._poster.jpg"
    },
    {
        "Title":"Satyameva Jayate",
        "Year":"2018",
        "imdbID":"tt1570059",
        "Type":"movie",
        "Language":"Hindi",
        "Genre":"Action, Vigilante, Thriller",
        "Trailer":"https://youtu.be/odXKXLG43co",
        "Poster":"https://m.media-amazon.com/images/M/MV5BYzk2N2U5MjQtMjBmYy00OTA4LWJkNDEtYjNhMWJlMjNmNWQxXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg"
    },
    {
        "Title":"Satyameva Jayate 2",
        "Year":"2021",
        "imdbID":"tt1570060",
        "Type":"movie",
        "Language":"Hindi",
        "Genre":"Action, Drama, Political, Vigilante, Thriller",
        "Trailer":"https://youtu.be/e6VZiwlzhSw",
        "Poster":"https://static.toiimg.com/thumb/msid-81543415,width-800,height-600,resizemode-75,imgsize-703862,pt-32,y_pad-40/81543415.jpg"
    },
    {
        "Title":"Bell Bottom",
        "Year":"2021",
        "imdbID":"tt1570061",
        "Type":"movie",
        "Language":"Hindi",
        "Genre":"Action, Thriller, Spy",
        "Trailer":"https://youtu.be/A6eZ49O67YQ",
        "Poster":"https://m.media-amazon.com/images/M/MV5BNjZjNTU2MTQtNGQ5YS00YjQ1LTgwZTctYWNjMGRjMzhkMmVhXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg"
    },
    {
        "Title":"Sardar Udham",
        "Year":"2021",
        "imdbID":"tt1570062",
        "Type":"movie",
        "Language":"Hindi",
        "Genre":"Crime",
        "Trailer":"https://youtu.be/bLWgKt1-SYo",
        "Poster":"https://www.pinkvilla.com/imageresize/sardar_udham_twitter_review_heres_what_the_audience_has_to_say_about_vicky_kaushal_starrer_0.jpg?width=752&format=webp&t=pvorg"
    },
    {
        "Title":"Singham",
        "Year":"2011",
        "imdbID":"tt1570063",
        "Type":"movie",
        "Language":"Hindi",
        "Genre":"Crime, Action, Comedy, Drama, Adventure, Musical",
        "Trailer":"https://youtu.be/mp-XqCrCi6I",
        "Poster":"https://upload.wikimedia.org/wikipedia/en/thumb/a/ac/Singham_%282011_Hindi_film%29_Theatrical_poster.jpg/220px-Singham_%282011_Hindi_film%29_Theatrical_poster.jpg"
    },
    {
        "Title":"Singham returns",
        "Year":"2014",
        "imdbID":"tt1570064",
        "Type":"movie",
        "Language":"Hindi",
        "Genre":"Action, Romance, Drama",
        "Trailer":"https://youtu.be/3CwQjsdE-1Q",
        "Poster":"https://m.media-amazon.com/images/M/MV5BOGQyZjhlZDYtY2E0Mi00ZDAyLWExNzctYWZkNDlkZmI3MWFlXkEyXkFqcGdeQXVyNjc5Mjg4Nzc@._V1_.jpg"
    },
    {
        "Title":"Secret Superstar",
        "Year":"2017",
        "imdbID":"tt1570065",
        "Type":"movie",
        "Language":"Hindi",
        "Genre":"Comedy, Drama, Adventure, Musical Drama, Music, Children???s film",
        "Trailer":"https://youtu.be/J_yb8HORges",
        "Poster":"https://i.pinimg.com/736x/63/3c/d3/633cd3366470c6ba3f323bf0b329874d.jpg"
    },
    {
        "Title":"Dishoom",
        "Year":"2015",
        "imdbID":"tt1570066",
        "Type":"movie",
        "Language":"Hindi",
        "Genre":"Adventure, Action, Comedy, Buddy cop, Crime film ",
        "Trailer":"https://youtu.be/DU6IdS2gVog",
        "Poster":"https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2016/06/01/494512-dishoom.jpg"
    },
    {
        "Title":"Mumbai Saga",
        "Year":"2021",
        "imdbID":"tt1570067",
        "Type":"movie",
        "Language":"Hindi",
        "Genre":"Action, Drama,Crime film, World Cinema ",
        "Trailer":"https://youtu.be/YTGO38DSIsc",
        "Poster":"https://stat2.bollywoodhungama.in/wp-content/uploads/2021/03/Mumbai-Saga-9.jpg"
    },
    {
        "Title":"Roohi",
        "Year":"2021",
        "imdbID":"tt1570068",
        "Type":"movie",
        "Language":"Hindi",
        "Genre":"Horror, Comedy-Drama",
        "Trailer":"https://youtu.be/mTT_V0t89MI",
        "Poster":"https://bollyspice.com/wp-content/uploads/2021/02/EuUjfozUcAInuPK-612x612.jpeg"
    },
    {
        "Title":"Zero",
        "Year":"2018",
        "imdbID":"tt1570069",
        "Type":"movie",
        "Language":"Hindi",
        "Genre":"Science fiction, Romance, Romantic Comedy, Comedy, Drama",
        "Trailer":"https://youtu.be/Ru4lEmhHTF4",
        "Poster":"https://image.songsuno.com/movie-images/original/movie/zero/zero-poster-anushka-sharma-shah-rukh-khan-hd.jpg"
    },
    {
        "Title":"Kabir Singh",
        "Year":"2019",
        "imdbID":"tt1570070",
        "Type":"movie",
        "Language":"Hindi",
        "Genre":"Romance, Action, Comedy",
        "Trailer":"https://www.youtube.com/watch?v=RiANSSgCuJk",
        "Poster":"https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/Kabir_Singh.jpg/220px-Kabir_Singh.jpg"
    },
    {
        "Title":"Raazi",
        "Year":"2018",
        "imdbID":"tt1570071",
        "Type":"movie",
        "Language":"Hindi",
        "Genre":"Action, Spy, Drama, Thriller, Crime film",
        "Trailer":"https://www.youtube.com/watch?v=YjMSttRJrhA",
        "Poster":"https://static.toiimg.com/photo/63784610.cms"
    },
    {
        "Title":"PK",
        "Year":"2014",
        "imdbID":"tt1570072",
        "Type":"movie",
        "Language":"Hindi",
        "Genre":"Comedy, Romance, satire, Drama, Science fiction, fantasy",
        "Trailer":"https://youtu.be/SOXWc32k4zA",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMTYzOTE2NjkxN15BMl5BanBnXkFtZTgwMDgzMTg0MzE@._V1_.jpg"
    },
    {
        "Title":"Malang",
        "Year":"2020",
        "imdbID":"tt1570073",
        "Type":"movie",
        "Language":"Hindi",
        "Genre":"Action, Drama, Thriller, Crime film, Action Thriller",
        "Trailer":"https://youtu.be/sft5baUuzQs",
        "Poster":"https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/malang_new_poster_aditya_roy_kapur_disha_patani_anil_kapoor_kunal_kemmu_starrers_trailer_to_be_out_today.jpg"
    },
    {
        "Title":"Chhichhore",
        "Year":"2019",
        "imdbID":"tt1570074",
        "Type":"movie",
        "Language":"Hindi",
        "Genre":"Comedy, Drama, Romance",
        "Trailer":"https://youtu.be/tsxemFX0a7k",
        "Poster":"https://static.toiimg.com/thumb/msid-66129590,width-800,height-600,resizemode-75,imgsize-116696,pt-32,y_pad-40/66129590.jpg"
    },
    {
        "Title":"Badla",
        "Year":"2019",
        "imdbID":"tt1570075",
        "Type":"movie",
        "Language":"Hindi",
        "Genre":"Crime film, Thriller, Drama, Crime Thriller",
        "Trailer":"https://www.youtube.com/watch?v=mSlgu8AQAd4",
        "Poster":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz4KJlTrr9dEY3RvOoAMuJVYo2qLDSj8hCocOoAa93neYOssPGsMRS0ii64hHyNdhFEGo&usqp=CAU"
    },
    {
        "Title":"Kal Ho Naa Ho",
        "Year":"2003",
        "imdbID":"tt1570076",
        "Type":"movie",
        "Language":"Hindi",
        "Genre":"Romance, Drama, Musical, Melodrama, Comedy",
        "Trailer":"https://www.youtube.com/watch?v=tVMAQAsjsOU",
        "Poster":"https://static.toiimg.com/thumb/msid-79461688,width-1200,height-900,resizemode-4/.jpg"
    },
    {
        "Title":"Dilwale Dulhania Le Jayenge",
        "Year":"1995",
        "imdbID":"tt1570077",
        "Type":"movie",
        "Language":"Hindi",
        "Genre":"Romance, Drama, Musical, Comedy",
        "Trailer":"https://www.youtube.com/watch?v=cmax1C1p660",
        "Poster":"https://m.media-amazon.com/images/M/MV5BZTA3YzRiZGMtYWEzZS00NzY5LThhMWMtY2I1YTJhYjhmNGE4XkEyXkFqcGdeQXVyNTkzNDQ4ODc@._V1_.jpg"
    },
    {
        "Title":"Dil Chahta Hai",
        "Year":"2001",
        "imdbID":"tt1570078",
        "Type":"movie",
        "Language":"Hindi",
        "Genre":"Romance, Drama, Musical, Comedy, World Cinema",
        "Trailer":"https://www.youtube.com/watch?v=m13b25V0B10",
        "Poster":"https://image.songsuno.com/movie-images/original/movie/dil-chahta-hai/dil-chahta-hai-poster-preity-zinta-aamir-khan-saif-ali-khan-akshaye-khanna-sonali-kulkarni.jpg"
    },
    {
        "Title":"Sholay",
        "Year":"1975",
        "imdbID":"tt1570079",
        "Type":"movie",
        "Language":"Hindi",
        "Genre":"Adventure, Musical, Thriller, Drama, Action, Comedy",
        "Trailer":"https://www.youtube.com/watch?v=XjiluhItzIA",
        "Poster":"https://m.media-amazon.com/images/I/91n7ptbZBfL._AC_SL1500_.jpg"
    },
    {
        "Title":"Om Shanti Om",
        "Year":"2007",
        "imdbID":"tt1570080",
        "Type":"movie",
        "Language":"Hindi",
        "Genre":"Romance, Drama, Musical, Comedy, Action, Thriller, Melodrama",
        "Trailer":"https://www.youtube.com/watch?v=9oeGoQGt7Ao",
        "Poster":"https://m.media-amazon.com/images/I/51DJQCOYjAL._AC_.jpg"
    },
    {
        "Title":"Hum Aapke Hain Kaun",
        "Year":"1994",
        "imdbID":"tt1570081",
        "Type":"movie",
        "Language":"Hindi",
        "Genre":"Romance, Drama, Musical, Comedy",
        "Trailer":"https://www.youtube.com/watch?v=45JY12a6zJA",
        "Poster":"https://m.media-amazon.com/images/M/MV5BZjc0ODAwMmItMmQwMy00MmRmLThjOGYtZGEwYjQ2ZjcyYzA3XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg"
    },
    {
        "Title":"Dil Bechara",
        "Year":"2020",
        "imdbID":"tt1570082",
        "Type":"movie",
        "Language":"Hindi",
        "Genre":"Romance, Drama, Comedy",
        "Trailer":"https://www.youtube.com/watch?v=GODAlxW5Pes",
        "Poster":"https://i.ytimg.com/vi/cW0NG_ng6QM/hqdefault.jpg"
    },
    {
        "Title":"Annaatthe",
        "Year":"2021",
        "imdbID":"tt1570083",
        "Type":"movie",
        "Language":"Tamil",
        "Genre":"Action, Drama, Adventure, Emotional, Rousing",
        "Trailer":"https://www.youtube.com/watch?v=zyVX8g71TGo",
        "Poster":"https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2021/11/06/annaattheboxoffice-1047769-1636190493.png?itok=5QIIRJf2"
    },
    {
        "Title":"Jai Bhim",
        "Year":"2021",
        "imdbID":"tt1570084",
        "Type":"movie",
        "Language":"Tamil",
        "Genre":"Drama",
        "Trailer":"https://youtu.be/ElXnVVDl8cA",
        "Poster":"https://media.news9live.com/h-upload/2021/10/01/30927-the-poster-for-jai-bhim-image-via-twittersuriyaoffl.jpg"
    },
    {
        "Title":"Laabam",
        "Year":"2021",
        "imdbID":"tt1570085",
        "Type":"movie",
        "Language":"Tamil",
        "Genre":"Drama, Emotional",
        "Trailer":"https://youtu.be/e0gX_cFKEng",
        "Poster":"https://m.media-amazon.com/images/M/MV5BYjA2NzQ3YmUtNjU5Zi00MWNhLWI4NjItODA3MzkyOGNlNGZhXkEyXkFqcGdeQXVyODEyNjEwMDk@._V1_.jpg"
    },
    {
        "Title":"Soorarai Pottur",
        "Year":"2020",
        "imdbID":"tt1570086",
        "Type":"movie",
        "Language":"Tamil",
        "Genre":"Drama,Action",
        "Trailer":"https://www.youtube.com/watch?v=fa_DIwRsa9o",
        "Poster":"https://i.pinimg.com/originals/41/99/00/4199001a1cced80374c89ccf1078d345.jpg"
    },
    {
        "Title":"Nenjam Marappathillai",
        "Year":"2021",
        "imdbID":"tt1570087",
        "Type":"movie",
        "Language":"Tamil",
        "Genre":"Drama,Horror, Romance",
        "Trailer":"https://www.youtube.com/watch?v=mK3pv46s4v4",
        "Poster":"https://assets.voxcinemas.com/posters/P_HO00008316.jpg"
    },
    {
        "Title":"Bigil",
        "Year":"2019",
        "imdbID":"tt1570088",
        "Type":"movie",
        "Language":"Tamil",
        "Genre":"Drama,Action, Sports",
        "Trailer":"https://www.youtube.com/watch?v=GR-Ui8-V2M0",
        "Poster":"https://talenthouse-res.cloudinary.com/image/upload/c_limit,f_auto,fl_progressive,h_1280,w_1280/v1572426427/user-959433/profile/ruamtvr74qqzjl8obrl9.jpg"
    },
    {
        "Title":"sarpatta parambarai",
        "Year":"2021",
        "imdbID":"tt1570089",
        "Type":"movie",
        "Language":"Tamil",
        "Genre":"Fight,Action, ",
        "Trailer":"https://www.youtube.com/watch?v=XTTAHt4VlUA",
        "Poster":"https://www.plumeriamovies.com/wp-content/uploads/2021/07/Sarpatta-Parambarai-Tamil-Movie-Poster-HD-840x473.jpeg"
    },
    {
        "Title":"Ratsasan",
        "Year":"2020",
        "imdbID":"tt1570090",
        "Type":"movie",
        "Language":"Tamil",
        "Genre":"Fight,Action, Romance, Drama, Crime, Thriller ",
        "Trailer":"https://www.youtube.com/watch?v=GsrN7rNch9Y",
        "Poster":"https://i.pinimg.com/736x/ec/54/88/ec5488d54bbe54fc90363acf8012fcca.jpg"
    },
    {
        "Title":"Oh My Kadavule",
        "Year":"2021",
        "imdbID":"tt1570091",
        "Type":"movie",
        "Language":"Tamil",
        "Genre":"Romance, Drama, Comedy, Fantasy",
        "Trailer":"https://youtu.be/5lUWBM2uYaQ",
        "Poster":"https://m.media-amazon.com/images/M/MV5BNTJlYTcxZWUtYjQzNS00ZGQ1LWE2NWItZDYxZTdmZjE0ODI5XkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_.jpg"
    },
    {
        "Title":"Jigarthanda",
        "Year":"2014",
        "imdbID":"tt1570092",
        "Type":"movie",
        "Language":"Tamil",
        "Genre":"Musical, Drama, Thriller",
        "Trailer":"https://www.youtube.com/watch?v=_T8n-EHr4ZE",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMDU5YThlNzUtNjcyNC00ZmE3LTkxZDEtNThmZTMyZDlmZGE1XkEyXkFqcGdeQXVyODk1MzE5NDA@._V1_.jpg"
    },
    {
        "Title":"Velai Illa Pattathari",
        "Year":"2014",
        "imdbID":"tt1570093",
        "Type":"movie",
        "Language":"Tamil",
        "Genre":"Romance, Drama,Action",
        "Trailer":"https://www.youtube.com/watch?v=fZOwwAzI9jM",
        "Poster":"https://images.moviebuff.com/f76ef9b2-91a0-44be-a629-0579a9a186b9?w=500"
    },
    {
        "Title":"Theri",
        "Year":"2016",
        "imdbID":"tt1570094",
        "Type":"movie",
        "Language":"Tamil",
        "Genre":"Romance, Drama,Action, Thriller, Crime",
        "Trailer":"https://www.youtube.com/watch?v=ZK4uGLpkAKk",
        "Poster":"https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Theri_poster.jpg/220px-Theri_poster.jpg"
    },
    {
        "Title":"Vikram Vedha",
        "Year":"2017",
        "imdbID":"tt1570095",
        "Type":"movie",
        "Language":"Tamil",
        "Genre":"Drama,Action, Thriller,Mystery",
        "Trailer":"https://www.youtube.com/watch?v=1sVr-uWZPjE",
        "Poster":"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201707/647_072117044609_0.jpg"
    },
    {
        "Title":"Visaranai",
        "Year":"2015",
        "imdbID":"tt1570096",
        "Type":"movie",
        "Language":"Tamil",
        "Genre":"Drama,Crime, Thriller",
        "Trailer":"https://www.youtube.com/watch?v=4mnzK2KIz9U",
        "Poster":"https://cinemachaat.files.wordpress.com/2017/05/visaranai-poster.jpg?w=426"
    },
    {
        "Title":"Imaikkaa Nodigal",
        "Year":"2018",
        "imdbID":"tt1570097",
        "Type":"movie",
        "Language":"Tamil",
        "Genre":"Action,Crime,Thriller",
        "Trailer":"https://www.youtube.com/watch?v=Q0QoCgbwPjs",
        "Poster":"https://m.media-amazon.com/images/M/MV5BZjk1MzM2NjUtNjQ1Yi00YTdjLWExYWYtZjg5MTAxNmZhMmQ1XkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_FMjpg_UX1000_.jpg"
    },
    {
        "Title":"Enthiran",
        "Year":"2010",
        "imdbID":"tt1570098",
        "Type":"movie",
        "Language":"Tamil",
        "Genre":"Action,Adventure,Thriller, Drama",
        "Trailer":"https://www.youtube.com/watch?v=sGdoQEeIkxI",
        "Poster":"http://2.bp.blogspot.com/_kLvzpyZm7zM/TFI2c4I-wBI/AAAAAAAATxc/9PGvL8HYycA/s1600/endhiran_audio_launch_stills_photos_02.jpg"
    },
    {
        "Title":"Vettaiyaadu Vilaiyaadu",
        "Year":"2006",
        "imdbID":"tt1570099",
        "Type":"movie",
        "Language":"Tamil",
        "Genre":"Action,Romance,Thriller, Fiction",
        "Trailer":"https://www.youtube.com/watch?v=KSDAAqf6Img",
        "Poster":"https://wallpapercave.com/wp/wp7501527.jpg"
    },
    {
        "Title":"Asuran",
        "Year":"2019",
        "imdbID":"tt1570100",
        "Type":"movie",
        "Language":"Tamil",
        "Genre":"Action,Drama",
        "Trailer":"https://www.youtube.com/watch?v=vOCM9wztBYQ",
        "Poster":"https://www.filmibeat.com/ph-big/2019/09/asuran_156801306540.jpg"
    },
    {
        "Title":"Nerkonda Paarvai",
        "Year":"2019",
        "imdbID":"tt1570102",
        "Type":"movie",
        "Language":"Tamil",
        "Genre":"Thriller, Drama",
        "Trailer":"https://www.youtube.com/watch?v=WX9TDlEoQFo",
        "Poster":"https://www.sify.com/uploads/nerkonda-paarvai-tijjTzfaddagh.jpg"
    },
    {
        "Title":"Ispade Rajavum Idhaya Raniyum",
        "Year":"2019",
        "imdbID":"tt1570103",
        "Type":"movie",
        "Language":"Tamil",
        "Genre":"Thriller, Drama, Romance, Comedy",
        "Trailer":"https://www.youtube.com/watch?v=VXc6gvL1OUg",
        "Poster":"https://www.gethucinema.com/wp-content/uploads/2018/10/Ispade-Rajavum-Idhaya-Raniyum-posters-2.jpg"
    },
    {
        "Title":"Chennai Central",
        "Year":"2018",
        "imdbID":"tt1570104",
        "Type":"movie",
        "Language":"Tamil",
        "Genre":"Action, Drama, Crime",
        "Trailer":"https://www.youtube.com/watch?v=xEIh1awGwNs",
        "Poster":"https://www.filmibeat.com/ph-big/2018/10/vada-chennai_153924189170.jpg"
    },
    {
        "Title":"Peranbu",
        "Year":"2018",
        "imdbID":"tt1570105",
        "Type":"movie",
        "Language":"Tamil",
        "Genre":"Drama",
        "Trailer":"https://www.youtube.com/watch?v=1Nk7bEYIA7c",
        "Poster":"https://www.kollywoodzone.com/data/media/8574/peranbu_movie_poster.jpg"
    },
    {
        "Title":"Imaikkaa Nodigal",
        "Year":"2018",
        "imdbID":"tt1570106",
        "Type":"movie",
        "Language":"Tamil",
        "Genre":"Action, Romance, Crime, Thriller",
        "Trailer":"https://www.youtube.com/watch?v=Q0QoCgbwPjs",
        "Poster":"https://upload.wikimedia.org/wikipedia/en/thumb/f/fa/Imaikkaa_Nodigal_poster.jpg/220px-Imaikkaa_Nodigal_poster.jpg"
    },
    {
        "Title":"Karuppan",
        "Year":"2017",
        "imdbID":"tt1570107",
        "Type":"movie",
        "Language":"Tamil",
        "Genre":"Action, Romance, Drama, Thriller",
        "Trailer":"https://www.youtube.com/watch?v=F2G8Bm1fxjE",
        "Poster":"https://moviegalleri.net/wp-content/uploads/2017/08/Tanya-Vijay-Sethupathi-Karuppan-Audio-Release-Tomorrow-Posters.jpg"
    },
    {
        "Title":"Aramm",
        "Year":"2017",
        "imdbID":"tt1570108",
        "Type":"movie",
        "Language":"Tamil",
        "Genre":"Political, Drama, Thriller",
        "Trailer":"https://www.youtube.com/watch?v=hWsn_1cs6Dc",
        "Poster":"https://www.filmibeat.com/ph-big/2016/11/aramm_147944735900.jpg"
    },
    {
        "Title":"Minnal Murali",
        "Year":"2021",
        "imdbID":"tt1570109",
        "Type":"movie",
        "Language":"Malayalam",
        "Genre":"Action, Adventure",
        "Trailer":"https://www.youtube.com/watch?v=OJHlagfrL0c",
        "Poster":"https://m.media-amazon.com/images/M/MV5BNzllYTM0ZDgtZTk4NS00YjYzLTliNjktMjZmNTZmNGZlNzI4XkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_.jpg"
    },
    {
        "Title":" Kumbalangi Nights",
        "Year":"2019",
        "imdbID":"tt1570110",
        "Type":"movie",
        "Language":"Malayalam",
        "Genre":"Romance",
        "Trailer":"https://www.youtube.com/watch?v=3P4BFBSafF0",
        "Poster":"https://m.media-amazon.com/images/M/MV5BNjU5MmQwMWYtMGFiMS00NTRiLThiODAtMzNkNzU1MWNjYTllXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_.jpg"
    },
    {
        "Title":" Drishyam",
        "Year":"2013",
        "imdbID":"tt1570111",
        "Type":"movie",
        "Language":"Malayalam",
        "Genre":"Thriller, Drama, Mystery",
        "Trailer":"https://www.youtube.com/watch?v=eMASubc1y_k",
        "Poster":"https://upload.wikimedia.org/wikipedia/en/9/9e/DrishyamMovie.jpg"
    },
    {
        "Title":" Charlie",
        "Year":"2015",
        "imdbID":"tt1570112",
        "Type":"movie",
        "Language":"Malayalam",
        "Genre":"Thriller, Comedy, Romance, Thriller, Musical",
        "Trailer":"https://www.youtube.com/watch?v=oYxtLNJJ54Y",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMmZhMzVlNzEtMjQ3ZS00ZGJlLTk4N2YtMDIyNDNmZThhMGVmXkEyXkFqcGdeQXVyMzIyNDI4NjU@._V1_.jpg"
    },
    {
        "Title":" Banglore Days",
        "Year":"2014",
        "imdbID":"tt1570113",
        "Type":"movie",
        "Language":"Malayalam",
        "Genre":"Comedy, Romance, Drama",
        "Trailer":"https://www.youtube.com/watch?v=uVpHL5g4buY",
        "Poster":"https://i.pinimg.com/736x/fd/fe/1c/fdfe1c2591251464c013a478143f7bac.jpg"
    },
    {
        "Title":"Trance",
        "Year":"2020",
        "imdbID":"tt1570114",
        "Type":"movie",
        "Language":"Malayalam",
        "Genre":"Comedy, Action, Drama",
        "Trailer":"https://www.youtube.com/watch?v=uSudz8zb2I8",
        "Poster":"https://m.media-amazon.com/images/M/MV5BYjJhYmM3MWQtMWM3NC00MWQyLTliZWItNDI3NGYwZTU0MDAyXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_.jpg"
    },
    {
        "Title":"Home",
        "Year":"2021",
        "imdbID":"tt1570115",
        "Type":"movie",
        "Language":"Malayalam",
        "Genre":"Comedy, Drama",
        "Trailer":"https://www.youtube.com/watch?v=0xrCuNa_zZU",
        "Poster":"https://www.newsbricks.com/root_upld/general-news/2021/08/40210/org_90152202108231812.jpg"
    },
    {
        "Title":"Godha",
        "Year":"2017",
        "imdbID":"tt1570115",
        "Type":"movie",
        "Language":"Malayalam",
        "Genre":"Comedy, Drama, Sports",
        "Trailer":"https://www.youtube.com/watch?v=hnICGugY6fI",
        "Poster":"https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Godha_2017_poster.jpg/220px-Godha_2017_poster.jpg"
    }
]
let i = 0;
const newMovies = movies.map(v => {
    i++;
    return {...v, id: i}
})
var fs = require('fs');

fs.writeFile("table.txt", JSON.stringify(newMovies), function (err){
    if (err) {
        console.log(err);
    } else {
        console.log("File saved");
    }
});