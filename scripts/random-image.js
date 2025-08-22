const images = [
  "barney.jpg",
  "blast-pit.webp",
  "bootcamp.jpg",
  "canal-lift.jpg",
  "crate-parkour.jpg",
  "hazardous-waste.jpg",
  "hazmat-tanks.webp",
  "intro-leak.jpg",
  "intro-train.jpg",
  "ionisation-chamber.jpg",
  "lambda-teleport.webp",
  "office-lounge.jpg",
  "office-soda.jpg",
  "residue-processing.jpg",
  "rocket-and-gus.jpg",
  "sector-c-corridor-2.jpg",
  "sector-c-corridor.jpg",
  "sector-d-freezer.jpg",
  "sector-d-generator.webp",
  "storage-area-2.jpg",
  "uplink.jpg",
  "waste.jpg",
];

window.onload = function () {
  const randomImage = images[Math.floor(Math.random() * images.length)];
  const img = document.querySelector("img");
  img.src = `../images/${randomImage}`;
  img.alt = randomImage.replace(/\.[^/.]+$/, "").replace(/-/g, " ");
};
