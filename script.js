var lines;
var randomNumber;
var lastRandomNumber;

$(document.body).ready(function () {

    $.ajax({
        url: 'sauce.txt'
    }).done(function (content) {

        lines = content.replace(/\r\n|\r/g, '\n').trim().split('\n');


        if (lines && lines.length) {
            $('#showImg').on('click', function () {

                while (randomNumber === lastRandomNumber) {
                    randomNumber = parseInt(Math.random() * lines.length);
                    if (lines.length === 1) { break; }
                }
                lastRandomNumber = randomNumber;

                var img = document.createElement("img");
                img.src = lines[randomNumber];
                var src = document.getElementById("header");
                src.appendChild(img);

                setTimeout(function () {

                    src.removeChild(img);
                }, 2000);

            });
        }
    });
});