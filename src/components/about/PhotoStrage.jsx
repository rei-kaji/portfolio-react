import React from "react";

const travelImages = [];

for (let i = 1; i <= 37; i++) {
  travelImages.push(require(`../../assets/favorites/travel/travel${i}.jpg`));
}

const fishingImages = [];

for (let i = 1; i <= 17; i++) {
  fishingImages.push(require(`../../assets/favorites/fishing/fishing${i}.jpg`));
}

export { travelImages, fishingImages };
