// function har() {
//     document.getElementById('haha').textContent = 'My particular phone size';
// }
// har();

// var rndColor1;
// var rndColor2;

function getRandomNum() {
  let num = 0;
  num = Math.floor(Math.random() * 256);
  if (num == 256) {
    num = 255;
  }
  //console.log(num);
  return num;
}

// let places = ["bod", "color-bar"];
let places = ["color-bar", "full-screen-color"];
// let places = ["bod"];

// VARIABLES TO HELP WITH DECIMAL NUMBERS IN RGB
let rnd1R, rnd1G, rnd1B;
let rnd2R, rnd2G, rnd2B;

// VARIABLES TO HELP WITH HEX NUMBERS
let hex1R, hex1G, hex1B;
let hex2R, hex2G, hex2B;
let firstDecDigit, secondDecDigit;
let firstHexDigit, secondHexDigit;

let deciToHex = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  10: "A",
  11: "B",
  12: "C",
  13: "D",
  14: "E",
  15: "F",
};
function drawBackgrounds() {
  for (var i = 0; i < places.length; i++) {
    document.getElementById(places[i]).style.backgroundImage =
      "linear-gradient(" +
      gradientDeg +
      "deg, rgb(" +
      rnd1R +
      ", " +
      rnd1G +
      ", " +
      rnd1B +
      "), " +
      "rgb(" +
      rnd2R +
      ", " +
      rnd2G +
      ", " +
      rnd2B +
      "))";
  }
}

function colors() {
  rnd1R = getRandomNum();
  rnd1G = getRandomNum();
  rnd1B = getRandomNum();
  rnd2R = getRandomNum();
  rnd2G = getRandomNum();
  rnd2B = getRandomNum();

  drawBackgrounds();

  document.getElementById("color1").textContent =
    "rgb( " + rnd1R + ", " + rnd1G + ", " + rnd1B + " ) ";

  document.getElementById("color2").textContent =
    "rgb( " + rnd2R + ", " + rnd2G + ", " + rnd2B + " )";

  // TRANSLATE COLORS FROM DECIMAL TO HEX
  hex1R = translateRGBtoHEX(rnd1R); //THIS IS A TWO CHAR STRING
  hex1G = translateRGBtoHEX(rnd1G);
  hex1B = translateRGBtoHEX(rnd1B);
  hex2R = translateRGBtoHEX(rnd2R);
  hex2G = translateRGBtoHEX(rnd2G);
  hex2B = translateRGBtoHEX(rnd2B);

  //WRITE HEX NUMBERS TO HTML
  document.getElementById("hex-color1").textContent =
    "#" + hex1R + hex1G + hex1B;

  document.getElementById("hex-color2").textContent =
    "#" + hex2R + hex2G + hex2B;

  // // TRANSLATE COLORS FROM RGB TO HSL

  hsl1H = translateRGBtoHSL(rnd1R, rnd1G, rnd1B, "H");
  hsl1S = translateRGBtoHSL(rnd1R, rnd1G, rnd1B, "S");
  hsl1L = translateRGBtoHSL(rnd1R, rnd1G, rnd1B, "L");

  hsl2H = translateRGBtoHSL(rnd2R, rnd2G, rnd2B, "H");
  hsl2S = translateRGBtoHSL(rnd2R, rnd2G, rnd2B, "S");
  hsl2L = translateRGBtoHSL(rnd2R, rnd2G, rnd2B, "L");

  document.getElementById(
    "hsl-color1"
  ).textContent = `${hsl1H}, ${hsl1S}%, ${hsl1L}%`;
  document.getElementById(
    "hsl-color2"
  ).textContent = `${hsl2H}, ${hsl2S}%, ${hsl2L}%`;
}

function translateRGBtoHEX(rgbNumber) {
  secondDecDigit = rgbNumber % 16; //255%16=15 ...
  firstDecDigit = Math.floor(rgbNumber / 16); // forget the decimals... how?

  firstHexDigit = deciToHex[firstDecDigit]; //should be a string after this
  secondHexDigit = deciToHex[secondDecDigit]; //should be a string after this

  // NOW SET THE HEX NUMBERS
  return firstHexDigit + secondHexDigit; //THIS IS A STRING
}

function translateRGBtoHSL(rndR, rndG, rndB, letter) {
  let rPercent = rndR / 255;
  let gPercent = rndG / 255;
  let bPercent = rndB / 255;

  let Cmax = Math.max(rPercent, gPercent, bPercent);
  let Cmin = Math.min(rPercent, gPercent, bPercent);
  let change = Cmax - Cmin;
  // let lightness = change / 2;
  let luminance = (Cmax * 100 + Cmin * 100) / 2 / 100; //L

  let saturation = 0; // a number between 0 and 1
  let hueInDeg = 0;
  let hue = 0;

  if (change == 0) {
    saturation = 0; // if all RGB values are the same, it's a shade of grey
    hue = 0; // this is a grey, so there's no color, no saturation
  } else {
    //check luminance and set saturation
    if (luminance <= 0.5) {
      saturation = (Cmax - Cmin) / (Cmax + Cmin);
    } else {
      //luminance > 0.5
      saturation = (Cmax - Cmin) / (2 - Cmax - Cmin);
    }
    //set hue
    if (rPercent == Cmax) {
      //red is the highest color
      hue = (gPercent - bPercent) / (Cmax - Cmin);
    } else if (gPercent == Cmax) {
      hue = 2.0 + (bPercent - rPercent) / (Cmax - Cmin);
    } else {
      // blue is the highest color
      hue = 4.0 + (rPercent - gPercent) / (Cmax - Cmin);
    }
    hueInDeg = hue * 60;
    //If hue becomes negative - you need to add 360 to it because a circle has 360deg
    console.log(`H=${hueInDeg}`);
    if (hueInDeg < 0) {
      hueInDeg += 360;
    }
    // console.log(hueInDeg);

    //round to an integer number
    hueInDeg = hueInDeg.toFixed(0); //looks like this does round. good.
    // console.log(hueInDeg);

    console.log(`S=${saturation}`);
    saturation = (100 * saturation).toFixed(0);
    // console.log(saturation);
  }

  // format luminance
  console.log(`L=${luminance}`);
  luminance = (luminance * 100).toFixed(0);
  // console.log(luminance);

  switch (letter) {
    case "H":
      // if (rndR == 255)
      return hueInDeg;
      break;
    //             if (change == 0) {
    //                 return 0;
    //             } elseif(Cmax == rPercent) {
    //                 return 60 * (((gPercent - bPercent) / change) % 6);
    //             } elseif(Cmax == gPercent) {
    //                 return 60 * (((bPercent - rPercent) / change) + 2);
    //             } elseif(Cmax == bPercent) {
    //                 return 60 * (((rPercent - gPercent) / change) + 4);
    //             }
    //             break;
    case "S":
      return saturation;
    //     if (change == 0) {
    //         return 0;
    //     } else {
    //         let test = change / (1 - Math.abs(change - 1));
    //         return change / (1 - Math.abs(change - 1));
    //     }
    //     break;
    case "L":
      // return Math.floor(lightness * 100);
      return luminance;
      break;
  }
}

var slider = document.querySelector(".slider");
var output = document.getElementById("range-num");
output.textContent = slider.value; // Display the default slider value
let gradientDeg = slider.value;

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  output.textContent = this.value;
  gradientDeg = this.value;
  drawBackgrounds();
};
