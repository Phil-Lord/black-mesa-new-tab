// Configuration
const config = {
  imagesPath: "../images",
  imagesList: [
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
  ],
};

// Helper functions
const getRandomImage = () => {
  const index = Math.floor(Math.random() * config.imagesList.length);
  return config.imagesList[index];
};

const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = resolve;
    img.onerror = reject;
    img.src = src;
  });
};

const setupRandomImage = async () => {
  try {
    const img = document.querySelector("img");
    const randomImage = getRandomImage();
    const imagePath = `${config.imagesPath}/${randomImage}`;

    // Preload the image before setting it
    await preloadImage(imagePath);

    // Set the image only after it's loaded
    img.src = imagePath;
  } catch (error) {
    console.error("Failed to load image:", error);
    // Optionally set a fallback image here
  }
};

// Initialise when the DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupRandomImage);
} else {
  setupRandomImage();
}
