function har() {
    document.getElementById('haha').innerHTML = 'My particular phone size';
}
har();

var rndColor1;
var rndColor2;

function getRandomNum() {
    let num = 0;
    num = Math.floor(Math.random() * 256);
    if (num == 256) {
        num = 255;
    }
    //console.log(num);
    return num;
}

var places = ["bod", "phone-size"];

function colors() {
    rnd1R = getRandomNum();
    rnd1G = getRandomNum();
    rnd1B = getRandomNum();
    rnd2R = getRandomNum();
    rnd2G = getRandomNum();
    rnd2B = getRandomNum();

    for (var i = 0; i < places.length; i++) {
        document.getElementById(places[i]).style.backgroundImage =
            'linear-gradient(30deg, rgb(' +
            rnd1R + ', ' +
            rnd1G + ', ' +
            rnd1B + '), ' +
            'rgb(' +
            rnd2R + ', ' +
            rnd2G + ', ' +
            rnd2B + '))';
    }


    document.getElementById('color1').innerHTML
        = 'rgb( ' +
        rnd1R + ', ' +
        rnd1G + ', ' +
        rnd1B + ' ) ';



    document.getElementById('color2').innerHTML
        = 'rgb( ' +
        rnd2R + ', ' +
        rnd2G + ', ' +
        rnd2B + ' )';
}