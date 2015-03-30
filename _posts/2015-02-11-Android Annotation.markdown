---
layout:   post
title:    "Android Annotations"
date:     2015-02-11 15:35:00
author:   Aldi
author_t: AldioFirando
excerpt:  Pengenalan "Android Annotations" yang dapat membuat kode kita lebih mudah dipahami.
---
Kali ini saya akan mengenalkan sebuah Open Source framework yang dapat mempercepat proses pengembangan aplikasi Android. Framework ini adalah Android Annotations, Android Annotations dapat dengan mudah menyederhanakan koding kita yaitu menyatukan cara mengakses View dari layout dan mendeklarasikannya dalam satu langkah.

Android Annotation dapat membuat kode kita lebih mudah dipahami. Untuk lebih jelasnya dapat dilihat pada kode di bawah ini yang menjelaskan bagaimana sebuah button di deklarasikan sekaligus membuat sebuah aksi klik:

Sebelum:
{% highlight java %}
View submitBtn = findViewById(R.id.submitButton);
submitBtn.setOnClickListener(new OnClickListener() {
     
    @Override
    public void onClick(View v) {
	//Something do here
    }
});
{% endhighlight %}

Sesudah:
{% highlight java %}
@Click(R.id.submitButton)
void onButtonClick() {
    //Something do here
}
{% endhighlight %}

Sangat simple kan? :)

Tapi sebelum itu, untuk menggunakan Android Annotation kita perlu menambahkan "_" (underscore) pada setiap akhir dari nama activity yang di daftarkan pada manifest 

contoh: dari `.MainActivity` menjadi `.MainActivity_`

dan juga konfigurasi gradle dengan menambahan beberapa baris kode seperti di bawah ini :

{% highlight java %}
def version = 'XXX'

buildscript {
    repositories {
      mavenCentral()
    }
    dependencies {
        classpath 'com.android.tools.build:gradle:1.0.0'
        classpath 'com.neenbedankt.gradle.plugins:android-apt:1.4'
    }
}

repositories {
    mavenCentral()
    mavenLocal()
}

dependencies {
    apt "org.androidannotations:androidannotations:$version"
    compile "org.androidannotations:androidannotations-api:$version"
}

apt {
    arguments {
        androidManifestFile variant.outputs[0].processResources.manifestFile
        resourcePackageName 'com.myproject.package'
    }
}
{% endhighlight %}

Berikut pengenalan Android Annotations yang bisa saya sampaikan dan semoga bisa berguna bagi kita semua.
Untuk mempelajari lebih detail tentang android annotations bisa dilihat pada sumber yang tertera pada tulisan ini :)

Terima kasih

Sumber :  <a href="http://androidannotations.org/" title="Android Annotations">Android Annotations</a>

