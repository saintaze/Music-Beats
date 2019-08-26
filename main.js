window.addEventListener('load', ()=>{

  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");

  const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#606bd3",
    "#60c2d3"
  ];

  pads.forEach((pad, i) => {
    pad.addEventListener('click', e => {
      sounds[i].currentTime = 0;
      sounds[i].play();
      createBall(i) 
    });
  });

  const createBall = (index) => {
    const ball = document.createElement('div');
    ball.style.backgroundColor = colors[index];
    ball.classList.add('ball');
    visual.appendChild(ball);
    ball.addEventListener('animationend', ()=>{
      visual.removeChild(ball);
    })
  }

});

