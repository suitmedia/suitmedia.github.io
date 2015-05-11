---
layout:   post
title:    "Introduction to Canvas and Pixi.js"
date:     2015-05-11 12:35:00
author:   Jessica
author_t: setiawanjess
excerpt:  Pengenalan Canvas dan Library Canvas yaitu Pixi.js
---
Pada kali ini, saya mau sedikit sharing tentang tag `<canvas>`.

**Apasih `<canvas>` itu ?**

Jadi `<canvas>` adalah salah satu tag yang disediakan oleh HTML5 yang dapat kita gunakan untuk menggambar pada page HTML lewat Javascript.

Contoh sederhana:

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Contoh Canvas</title>
    </head>
    <body>
        <canvas id='canvasId' width='500' height='500'></canvas>
    </body>
    <script>
        var canvas = document.getElementById('canvasId');
        var context = canvas.getContext("2d");
        
        context.beginPath();
        context.moveTo(100, 150);
        context.lineTo(450, 50);
        context.lineWidth = 15;
        context.stroke();
    </script>
    });


Nah, itu tadi contoh *simple* kalau kita mau gambar sesuatu pada tag `canvas`.
Banyak *tutorial* yang bisa kita temuin kalau kamu mau memperdalam lagi tentang `canvas` ini.

Tapi, sekarang saya mau jelasin tentang suatu *canvas library* yang bisa kita pakai untuk menggambar juga pada *file html*. Namanya ...... **pixi.js**

[Pixi.js](www.pixijs.com) adalah suatu *2D WebGL Renderer* dengan *canvas* sebagai *fallback*nya. Langsung aja yuk kita lihat cara pakainya gimana!

* Pertama, kita harus import file javascript kedalam HTML kita. 
File javascript pixi.js dapat kita ambil dari <a href="https://github.com/GoodBoyDigital/pixi.js">sini</a>

        <script src="pixi.js"></script>

* Kedua, kita buat renderernya :)

        <script>
            var renderer = new PIXI.autoDetectRenderer(400,300);
            document.body.appendChild(renderer.view);
        </script>

* Terus, kita buat stage dan tampilin deh !

        <script>
            var renderer = new PIXI.autoDetectRenderer(400,300);
            document.body.appendChild(renderer.view);

            var stage = new PIXI.Stage(0xFFD800);
            
            renderer.render(stage);
        </script>

* Lalu, kita bikin fungsi untuk buat animasinya

        <script>
            var renderer = new PIXI.autoDetectRenderer(400,300);
            document.body.appendChild(renderer.view);

            var stage = new PIXI.Stage(0xFFD800);

            requestAnimFrame(animation);

            function animation () {

                renderer.render(stage);
                requestAnimFrame(animation);
            }
        </script>

* Terakhir, kita bisa buat apa aja deh yang kita mau :).
Disini saya coba buat animasi gambar kelinci yang ada animasi *rotate*nya

        <script>
            var renderer = new PIXI.autoDetectRenderer(400,300);
            document.body.appendChild(renderer.view);

            var stage = new PIXI.Stage(0xFFD800);

            var texture = new PIXI.Texture.fromImage('bunny.png');
            var bunny = new PIXI.Sprite(texture);

            bunny.position.x = 200;
            bunny.position.y = 150;
            bunny.anchor.x = 0.5;
            bunny.anchor.y = 0.5;

            stage.addChild(bunny);

            requestAnimFrame(animation);

            function animation () {

                bunny.rotation += 1;

                renderer.render(stage);
                requestAnimFrame(animation);
            }
        </script>

Nah simple kan? :)

Itu tadi cara buat animasi sederhana dengan menggunakan *pixi.js*. Masih banyak yang pixi.js bisa lakukan. Kamu bisa liat contoh-contohnya di [Website Pixi.js](www.pixijs.com).

Sekian dari saya. Semoga post ini bisa membantu kalian yang ingin belajar tentang canvas dan pixi.js.

Kamu juga bisa lihat dari [Slide](https://speakerdeck.com/setiawanjeje/sharing-knowledge-pixi-dot-js) yang sudah saya buat sebelumnya.

Terima kasih.