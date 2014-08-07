---
layout:   post
title:    "Install Android Studio di Linux Mint"
date:     2014-08-07 00:00:00
author:   Viki Andrianto 
author_t: vikikagaku
excerpt:  Tutorial instalasi Android Studio pada Linux Mint (Linux Mint 17 Qiana)
---

Kali ini saya akan sedikit memberikan tutorial untuk menginstall IDE atau editor Android yaitu Android studio di Sistem Operasi Linux Mint.

Sebelumnya saya akan menjelaskan sedikit apa itu Android Studio. Android Studio adalah salah satu IDE ( Integrated Development Environment ) ato bahasa umumnya editor pemrograman dimana didalamnya sudah satu paket tools untuk pemrograman dan compiler untuk menjalankan source code kita.

Android studio adalah IDE yang dikembangakan dari Intellij IDE, jadi bagi temen2 yang sudah pernah menggunakan IDE ini tidak akan terlalu bingung untuk menggunakannya. selain itu sudah support Gradle sehingga kita dengan mudah menggunakan depencencies tanpa harus banyak konfigurasi.

Langsung saja mari kita mulai,

1. yang pertama untuk menginstall Android Studio siapkan terlebih dahulu file masternya, bisa di dowload di situs developer android [disini][as]  
2. setelah selesai download mari kita extract file tersebut menggunakan Archive Manager yang biasanya sudah terinstal di Linux Mint anda ato dengan cara ekstrasi manual menggunakan sintax dibawah pada *terminal* 
{% highlight ruby %}tar zxvf{% endhighlight %}  
, kemudian masuk ke folder hasil extraksi dan masuk lagi ke folder *bin*, setelah itu jalankan perintah 
{% highlight ruby %}./studio.sh{% endhighlight %} 
tunggu sampai selesai membuka Android Studio, dan tadaaa anda berhasil menjalankan aplikasi Android Studio di Sistem Operasi Linux. :)

Tapi proses instalasi belum selesai, karena ketika anda akan menjalankan kembali Android Studio maka anda harus mengulangi dari point 3 diatas, dan tentunya itu tidak cukup praktis. :)

Untuk mengistal launcher pada sistem menu Linux Mint maka ikuti langkah berikut :

1. buka Android Studio
2. masuk ke tab menu *Tools > Create Dekstop Entry...*
3. tunggu hingga proses instalasi selesai.
4. setelah selesai silahkan cek pada sistem menu, kemudian ketikkan android studio maka akan muncul icon launcher Android Studio. dan Happy Coding.. :)  

Berikut tutorial cara mengistall Android Studio pada Sistem Operasi Linux Mint, saya menyadari masih banyak sekali kekurangan, tapi saya sangat berterima kasih apabila anda bisa memberikan masukan untuk menyempurnakan tulisan saya.

Demikian tulisan ini saya sampaikan, terima kasih. :)   

sumber : [blog][source]

[as]: https://developer.android.com/sdk/installing/studio.html
[source]:http://vikination.blogspot.com/2014/08/install-android-studio-pada-linux-mint.html