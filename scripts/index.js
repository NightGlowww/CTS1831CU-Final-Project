$(document).ready(function () {
    var a_index = 0;
    var a = new Array("Hello", "Peace", "Love");

    // 创建一个函数来随机生成颜色
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    $("body").click(function (e) {
        var $i = $("<span/>").text(a[a_index]);
        a_index = (a_index + 1) % a.length;
        var x = e.pageX, y = e.pageY;

        // 将生成的颜色应用到文字上
        $i.css({
            "z-index": 99999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": getRandomColor()
        });
        $("body").append($i);
        $i.animate({"top": y - 180, "opacity": 0}, 1500, function () {
            $i.remove();
        });
    });

    function fadeInAndType() {
        document.body.classList.add('loaded');
        setTimeout(subtitleType, 2000);
    }

    function setCarouselInterval() {
        // 找到所有的轮播项
        var items = document.querySelectorAll('.carousel .carousel-item');

        // 遍历所有的轮播项
        for (var i = 0; i < items.length; i++) {
            // 设置 data-bs-interval 为3000
            items[i].setAttribute('data-bs-interval', '5000');
        }
    }

    function subtitleType() {
        var typed = new Typed("#subtitle", {
            strings: "Stay hungry. Stay foolish,Study and make progress every day,Mike's Website".split(","),
            startDelay: 300,
            typeSpeed: 150,
            loop: true,
            backSpeed: 50
        });
    }

    fadeInAndType();
    setCarouselInterval();
});

function subtitleType() {
    var typed = new Typed("#subtitle", {
        strings: "Stay hungry. Stay foolish,Study and make progress every day,Mike's Website".split(","),
        startDelay: 300,
        typeSpeed: 150,
        loop: true,
        backSpeed: 50
    });
}