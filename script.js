console.log("aajao yrr swaagat hai");
let audio = new Audio("Satranga1.mp3");
// Audi.play();
let index = 1;
let playbutton = document.getElementById("playbutton");
let pbar = document.getElementById("pBar");
let songaNameHigh=document.getElementById('SName');
let pikachu = document.getElementById("pikachu");
let openingnumb=1;
let songl = [
  { songName: "Satranga", filePath: "Satranga.mp3", coverPath: "sensei.jpg" },
  {
    songName: "Tu-Hai-Kahan",
    filePath: "Satranga-2.mp3",
    coverPath: "sensei2.jpg",
  },
  {
    songName: 'Pehle-Bhi-Main',
    filePath: "Satranga3.mp3",
    coverPath: "sensei3.jpeg",
  },
  { songName: "Kashmir", filePath: "Satranga4.mp3", coverPath: "sensei4.jpg" },
  {
    songName: "Saari-Duniya..",
    filePath: "Satranga5.mp3",
    coverPath: "sensei5.jpg",
  },
  {
    songName: "Pehle-Bhi-Mai..",
    filePath: "Satranga6.mp3",
    coverPath: "sensei6.jpg",
  },
];
endProtect=()=>{
    if(audio.currentTime===audio.duration){
        if(index === 5){
            index=1;
        }
        else{
            index=index+1;
        }
        audio.src=`Satranga${index}`;
        audio.play();
    }
}


//play handle
playbutton.addEventListener("click", () => {
    let song1=document.getElementById("1");
  if (audio.paused || audio.currentTime <= 0) {
    audio.play();
    playbutton.classList.remove("fa-play");
    playbutton.classList.add("fa-pause");
    pikachu.style.opacity = 1;
    if(openingnumb===1){
    song1.classList.remove("fa-play");
    song1.classList.add("fa-pause");
    openingnumb++;
    }
  } else {
    audio.pause();
    playbutton.classList.add("fa-play");
    playbutton.classList.remove("fa-pause");
    pikachu.style.opacity = 0;
    if(openingnumb===1){
    song1.classList.remove("fa-pause");
    song1.classList.add("fa-play");
    openingnumb++;   
}
  }
//   endProtect();
});

//listening

audio.addEventListener("timeupdate", () => {
  console.log("time update kiya hai");

  progress = parseInt((audio.currentTime / audio.duration) * 100);
  console.log(progress);

  pbar.value = progress;
});

pbar.addEventListener("change", () => {
  audio.currentTime = (pbar.value * audio.duration) / 100;
});
makeAllP = () => {
  Array.from(document.getElementsByClassName("songplay")).forEach((element) => {
    element.classList.remove("fa-pause");
    element.classList.add("fa-play");
  });
};

Array.from(document.getElementsByClassName("songplay")).forEach((elements) => {
  elements.addEventListener("click", (ele) => {
    makeAllP();
    index = parseInt(ele.target.id);
    ele.target.classList.remove("fa-play");
    ele.target.classList.add("fa-pause");
    audio.src = `Satranga${index}.mp3`;
    audio.currentTime = 0;
    audio.play();
    playbutton.classList.remove("fa-play");
    pikachu.style.opacity=1;
    playbutton.classList.add("fa-pause");
    songaNameHigh.innerText=songl[index-1].songName;
    // endProtect();
  });
});

document.getElementById("previous").addEventListener("click", () => {
 
  if (index === 1) {
    index = 5;
  } else {
    index = index -1 ;
  }
  songaNameHigh.innerText=songl[index-1].songName;
  audio.src = `Satranga${index}.mp3`;
  audio.currentTime = 0;
  audio.play();
  playbutton.classList.remove("fa-play");
  playbutton.classList.add("fa-pause");
  pikachu.style.opacity=1;
 
 
  makeAllP();
  let plpa=document.getElementById(`${index}`);
  plpa.classList.add('fa-pause');
  plpa.classList.remove('fa-play');
//   endProtect();
});
document.getElementById("succed").addEventListener("click", () => {

    if (index === 5) {
      index = 1;
    } else {
      index +=1 ;
    }
    songaNameHigh.innerText=songl[index-1].songName;
    audio.src = `Satranga${index}.mp3`;
    audio.currentTime = 0;
    audio.play();
    playbutton.classList.remove("fa-play");
    playbutton.classList.add("fa-pause");
    makeAllP();
    let plpa=document.getElementById(`${index}`);
  plpa.classList.add('fa-pause');
  pikachu.style.opacity=1;
    plpa.classList.remove('fa-play');
    // endProtect();
  });
  