//! andle menuButton to go back to previous menu(musicMenu/gameMenu/settingMenu)
import song1 from "../Audio/Mi.mp3"
import song2 from "../Audio/Hills.mp3"
import song3 from "../Audio/Ride.mp3"
import song4 from "../Audio/Cheques.mp3"

export const ArrayList = {
    Menu: [
        {
            parentIndex: 0,
            name: "Cover Flow",
            icon: "https://cdn-icons-png.flaticon.com/128/7378/7378221.png"
        },
        {
            parentIndex: 1,
            name: "Music",
            icon: "https://cdn-icons-png.flaticon.com/128/174/174872.png"
        },
        {
            parentIndex: 2,
            name: "Games",
            icon: "https://cdn-icons-png.flaticon.com/128/720/720284.png"
        },
        {
            parentIndex: 3,
            name: "Setting",
            icon: "https://cdn-icons-png.flaticon.com/128/945/945104.png"
        },
    ],
    Music: [
        {
            parentIndex: 4,
            name: "Songs",
            icon: "https://cdn-icons-png.flaticon.com/128/7831/7831996.png"
        },
        {
            parentIndex: 5,
            name: "Albums",
            icon: "https://cdn-icons-png.flaticon.com/128/9449/9449693.png"
        },
        {
            parentIndex: 6,
            name: "Artists",
            icon: "https://cdn-icons-png.flaticon.com/128/13591/13591336.png"
        },
        {
            parentIndex: 7,
            name: "Playlists",
            icon: "https://cdn-icons-png.flaticon.com/128/11134/11134457.png"
        }
    ],
    Games: [
        {
            parentIndex: 2,
            name: "SnakeGame",
            icon: "https://cdn-icons-png.flaticon.com/128/3292/3292221.png",
        },
        {
            parentIndex: 2,
            name: "Ping Pong",
            icon: "https://cdn-icons-png.flaticon.com/128/3401/3401273.png"
        },
        {
            parentIndex: 2,
            name: "Car Racing",
            icon: "https://cdn-icons-png.flaticon.com/128/7677/7677453.png"
        },
        {
            parentIndex: 2,
            name: "SkyCombat",
            icon: "https://cdn-icons-png.flaticon.com/128/6981/6981688.png"
        }
    ],
    Setting: [
        {
            parentIndex: 3,
            name: "Wallpaper",
            icon: "https://cdn-icons-png.flaticon.com/128/9513/9513905.png"
        },
        {
            parentIndex: 3,
            name: "Theme",
            icon: "https://cdn-icons-png.flaticon.com/128/2355/2355048.png"
        },
        {
            parentIndex: 3,
            name: "Date Time",
            icon: "https://cdn-icons-png.flaticon.com/128/9485/9485913.png"
        },
        {
            parentIndex: 3,
            name: "Language",
            icon: "https://cdn-icons-png.flaticon.com/128/3223/3223278.png"
        }
    ],
    Songs: [
        {
            parentIndex: 4,
            name: "Mi Amor",
            source: song1,
            duration: 23,
            icon: "https://i.ytimg.com/vi/HYb4FGDTBmw/mqdefault.jpg",
        },
        {
            parentIndex: 4,
            name: "Hill",
            source: song2,
            duration: 25,
            icon: "https://i.ytimg.com/vi/p2EdDiiVHh4/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGH8gEygfMA8=&rs=AOn4CLAHvyoDBPfZB4YL2xYdkkBXsktDjg"
        },
        {
            parentIndex: 4,
            name: "The Last Ride",
            source: song3,
            duration: 30,
            icon: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/The_Last_Ride_2022_song.jpg/220px-The_Last_Ride_2022_song.jpg"
        },
        {
            parentIndex: 4,
            name: "Cheques",
            source: song4,
            duration: 25,
            icon: "https://i1.sndcdn.com/artworks-fgQCI3pFN0to-0-t500x500.jpg"
        },
    ],
    Album: [
        {
            parentIndex: 5,
            name: "Mi Amour",
            icon: "https://i.ytimg.com/vi/HYb4FGDTBmw/mqdefault.jpg"
        },
        {
            parentIndex: 5,
            name: "One of its Kind",
            icon: "https://i.ytimg.com/vi/p2EdDiiVHh4/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGH8gEygfMA8=&rs=AOn4CLAHvyoDBPfZB4YL2xYdkkBXsktDj"
        },
        {
            parentIndex: 5,
            name: "The Last Ride",
            icon:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/05/30/2042459-sidhu-moosewala.jpg?im=Resize=(640,360)"
        },
        {
            parentIndex: 5,
            name: "Still Rolling",
            icon: "https://i.ytimg.com/vi/DAqxAqq_jhg/maxresdefault.jpg"
        }
    ],
    Artists: [
        {
            parentIndex: 6,
            name: "Bohemia",
            icon: "https://drytickets.com.au/assets/upload/celebrities/20-bohemia.jpg"
        },
        {
            parentIndex: 6,
            name: "AP Dhillon",
            icon: "https://static.mirchi.in/thumb/imgsize-19346,msid-102947392,width-800,height-450,resizemode-1/102947392.jpg"
        },
        {
            parentIndex: 6,
            name: "Sidhu Moose Wala",
            icon: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sidhu_Moose_Wala_at_Moosa_01.jpg"
        },
        {
            parentIndex: 6,
            name: "Shubh",
            icon: "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2023/09/20182150/Shubh.jpg"
        }
    ],
    Playlists: [
        {
            parentIndex: 7,
            name: "Mi Amour",
            icon: "https://i.ytimg.com/vi/HYb4FGDTBmw/mqdefault.jpg"
        },
        {
            parentIndex: 7,
            name: "One of its Kind",
            icon: "https://i.ytimg.com/vi/p2EdDiiVHh4/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGH8gEygfMA8=&rs=AOn4CLAHvyoDBPfZB4YL2xYdkkBXsktDj"
        },
        {
            parentIndex: 7,
            name: "The Last Ride",
            icon:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/05/30/2042459-sidhu-moosewala.jpg?im=Resize=(640,360)"
        },
        {
            parentIndex: 7,
            name: "Still Rolling",
            icon: "https://i.ytimg.com/vi/DAqxAqq_jhg/maxresdefault.jpg"
        }
    ],
}
