window.addEventListener('load', () => {
   const sounds = document.querySelectorAll(".sound");
   const pads = document.querySelectorAll(".pads div");
   const visual = document.querySelector(".visual");
   const colors = [
    "#3498db",
    "#2ecc71",
    "#e74c3c",
    "#f1c40f",
    "#9b59b6",
    "#1abc9c"
   ];


   //Lets make sounds
   pads.forEach((pad, index) => {
      pad.addEventListener("click",function(){
          sounds[index].currentTime = 0;
          sounds[index].play();
          createBubbles(index);
      });
   });

   //create a function to make bubbles
   const createBubbles = (index) => {
       const bubble = document.createElement("div");
       visual.appendChild(bubble);
       bubble.style.background = colors[index];
       bubble.style.animation ='jump 1s ease';
       bubble.addEventListener('animationend',function(){
           visual.removeChild(this);
       })
   }
});