

export const musicList = [
    {id: 1, title: "The Batman", artist: "Michael Giacchino", album: "TheBatman", duration: "2:40", img: "/img/batman.jpg", song_path:"/songs/the_batman.mp3"},
    {id: 2, title: "Born for this", artist: "The Score", album: "score", duration: "2:40", img: "/img/born_for_this.jpg", song_path:"/songs/born_for_this.flac"},
    {id: 3, title: "Can You Hear The Music", artist: "Ludwig Göransson", album: "Oppenheimer", duration: "2:40", img: "/img/can_you_hear_the_music.jpg", song_path:"/songs/can_you_hear_the_music.mp3"},
    {id: 4, title: "Dyanasties and Dystopia", artist: "Bren Joy and Denzel Curry ", album: "Arcane", duration: "2:40", img: "/img/dynasties_and_dystopia.jpg", song_path:"/songs/dynasties_and_dystopia.mp3"},
    {id: 5, title: "Everything is Romantic", artist: "Charli XCX", album: "Fall in Love again", duration: "2:40", img: "/img/every_thing_romantic.jpg", song_path:"/songs/everything_is_romantic.m4a"},
    {id: 6, title: "Flight", artist: "Hans Zimmer", album: "Man of Steel", duration: "2:40", img: "/img/flight.jpg", song_path:"/songs/flight.flac"},
    {id: 7, title: "In The Sea", artist: "Kensuke Ushio", album:"ChainSaw MAn: REZE" , duration:"2.40" , img:"/img/in_the_sea.jpg", song_path:"/songs/in_the_sea.flac"},
    {id: 8, title: "My Way of Life", artist: "Frank Sinatra", album: "Moon Knight", duration: "2:40", img: "/img/my_way_of_life.jpg", song_path:"/songs/my_way_of_life.mp3"},
    {id: 9, title: "Self Love", artist: "Metro Boomin & Coi Leray", album: "Spider-man into the SpiderVerse", duration: "2:40", img: "/img/self_love.jpg", song_path:"/songs/self_love.flac"},
    {id: 10, title: "Sunflower", artist: "Post Malone and Swae Lee", album: "Spider-man into the SpiderVerse", duration: "2:40", img: "/img/sunflower.jpg", song_path:"/songs/sunflower.mp3"},
]; 


export const artistList = [
    {id:1, artistName: "Hans Zimmer", artistImage: "/artists/Hans_Zimmer.webp"},
    {id:2, artistName: "Ludwig Göransson", artistImage: "/artists/Ludwig_Goransson.jpg"},
    {id:3, artistName: "Metro Boomin", artistImage: "/artists/Metro_Boomin.jpeg"},
    {id:4, artistName: "Nujabes", artistImage: "/artists/Nujabes.webp"},
    {id:5, artistName: "Skillet", artistImage: "/artists/Skillet.jpg"},
    {id:6, artistName: "The Score", artistImage: "/artists/The_Score.jpg"},
];


export const nameShortner = (name, limit=10) => {
    if (name.length > limit) {
        return name.substring(0, limit) + "...";
    }
    return name;
}