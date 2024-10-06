let songs =[
    {songname:"Tere Naal",filePath:"./songs/1.mp3"},
    {songname:"Soulmate",filePath:"2.mp3"},
    {songname:"Dekha Tanu Pehli Baar ve",filePath:"3.mp3"},
    {songname:"Tu Haai Kaha",filePath:"4.mp3"},
    {songname:"O Sajni",filePath:"5.mp3"}
]

let songindex=0;
let audioelement=new Audio("./songs/1.mp3");
let masterplay=document.getElementById("masterplay");
let progressbar=document.getElementById('progressbar');
let gif=document.getElementById('gif');
let songItems= Array.from(document.getElementsByClassName('songItem'));

songItems.forEach((element,i) => {
    element.getElementsByClassName('songName')[0].innerText=songs[i].songname;
});

masterplay.addEventListener('click',()=>{
    if(audioelement.paused||audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove("fa-circle-play");
        masterplay.classList.add("fa-circle-pause");
        gif.style.opacity=1;
    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }

} )


audioelement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    progressbar.value=progress;
}) 

progressbar.addEventListener('change',()=>{
    audioelement.currentTime=progressbar.value*audioelement.duration/100;
})

const makeAllPlays= ()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle')
        })
    
}


Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songindex=parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle')
        audioelement.src=`./songs/${songindex+1}.mp3`;
        audioelement.currentTime=0;
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause')
    })
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=0;
    }
    else{
        songindex-=1;
    }
    audioelement.src=`./songs/${songindex+1}.mp3`;
    audioelement.currentTime=0;
    audioelement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause')
})

document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=5){
        songindex=0;
    }
    else{
        songindex+=1;
    }
    audioelement.src=`./songs/${songindex+1}.mp3`;
    audioelement.currentTime=0;
    audioelement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause')
})