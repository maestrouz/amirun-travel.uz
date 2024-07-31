// document.addEventListener("DOMContentLoaded", function () {
//   const NUMBER_OF_SNOWFLAKES = 100;
//   const MAX_SNOWFLAKE_SIZE = 3;
//   const MAX_SNOWFLAKE_SPEED = 1;
//   const SNOWFLAKE_COLOUR = "#ddd";
//   const snowflakes = [];

//   const canvas = document.createElement("canvas");
//   canvas.style.position = "fixed";
//   canvas.style.pointerEvents = "none";
//   canvas.style.top = "0px";
//   canvas.style.left = "0px"; // or adjust as needed
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
//   document.body.appendChild(canvas);

//   const ctx = canvas.getContext("2d");

//   const createSnowflake = () => ({
//     x: Math.random() * canvas.width,
//     y: Math.random() * canvas.height,
//     radius: Math.floor(Math.random() * MAX_SNOWFLAKE_SIZE) + 0.2,
//     color: SNOWFLAKE_COLOUR,
//     speed: Math.random() * MAX_SNOWFLAKE_SPEED + 1,
//     sway: Math.random() - 0, // next
//   });

//   const drawSnowflake = (snowflake) => {
//     ctx.beginPath();
//     ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
//     ctx.fillStyle = snowflake.color;
//     ctx.fill();
//     ctx.closePath();
//   };

//   const updateSnowflake = (snowflake) => {
//     snowflake.y += snowflake.speed;
//     snowflake.x += snowflake.sway; // next
//     if (snowflake.y > canvas.height) {
//       Object.assign(snowflake, createSnowflake());
//     }
//   };

//   const animate = () => {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     snowflakes.forEach((snowflake) => {
//       updateSnowflake(snowflake);
//       drawSnowflake(snowflake);
//     });

//     requestAnimationFrame(animate);
//   };

//   for (let i = 0; i < NUMBER_OF_SNOWFLAKES; i++) {
//     snowflakes.push(createSnowflake());
//   }

//   window.addEventListener("resize", () => {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//   });

//   animate();
// });

function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: "en" },
    "google_translate_element"
  );
}
