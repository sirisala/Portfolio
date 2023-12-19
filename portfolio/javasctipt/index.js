$(document).ready(function() {

    $('.flipper').on('click', function () {
      $(this).find('.flipper-card').toggleClass('flipper-is-flipped');
    });
  
  });

  const glitchyText = document.querySelector(".glitchy-text");
  const glitchImage = document.querySelector(".glitchy-text img");
  
  const colors = ["#FF4655", // Coral
  "#A300D9", // Purple
  "#00FF9F"];
  let currentColor = 0;
  
  setInterval(() => {
    glitchyText.style.color = colors[currentColor];
    glitchImage.style.filter = `hue-rotate(${currentColor * 30}deg)`;
    currentColor = (currentColor + 1) % colors.length;
  }, 1000);
  
  setInterval(() => {
    glitchyText.style.animationDuration = `${Math.random() * 2 + 0.5}s`;
    glitchImage.style.animationDuration = `${Math.random() * 2 + 0.5}s`;
  }, 3000);
  




