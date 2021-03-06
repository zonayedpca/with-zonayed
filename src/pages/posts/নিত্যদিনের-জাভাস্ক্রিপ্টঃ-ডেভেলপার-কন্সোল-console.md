---
language: বাংলা
tags:
- coding
- JavaScript
- JavaScript-Bangla
- JavaScript-Daily
- programming
- জাভাস্ক্রিপ্ট
- জাভাস্ক্রিপ্ট-বাংলা
date: 2018-09-11T16:37:28Z
series: ব্লগ
template: post
title: নিত্যদিনের জাভাস্ক্রিপ্টঃ ডেভেলপার কন্সোল (Console)
thumb_img_path: "/images/dailyjs.gif"

---
ডেভেলপার কন্সোল! এগুলো আমাদের জাভাস্ক্রিপ্ট ডেভেলপমেন্ট এর লাইফে সবচেয়ে বেশী কাজে লাগে। বিশেষ করে ব্রাউজারের কন্সোলগুলো। কারণ ব্যবহার করা সহজ আর যেকোনো জায়গা থেকেই অ্যাক্সেস করা যায়। এতোদিন আমরা দেখেছিও কিভাবে আমাদের এই কন্সোল আমাদের সাহায্য করতে পারে। আর ক্রোমের ডেভেলপার কন্সোল বেশ পাওয়ারফুল হওয়ার কারণে আমি আমার সব লেখায় এটাই ব্যবহার করেছি। আপনি ফলো করে থাকলে হয়তো দেখবেন এই ক্রোমের ডেভেলপার কন্সোল কতটা কাজে লাগে ডেভেলপমেন্ট এর সময়। কিন্তু এর বাইরেও ক্রোমের(সাথে অন্যান্য ব্রাউজেরেরও) এই কন্সোলে আরো অনেক কাজ করা যায়। আজকে এই পর্বে আমরা সেগুলোই দেখবো একটা একটা করে।

এই লেখায় যে ব্যাপারগুলো নিয়ে আলোচনা করা হবে এগুলো একই সাথে ফায়ারফক্স বা অন্যান্য ডেভেলপার কন্সোলেও চলবে। সেই সাথে নোড জেএস এও দুই একটা ছাড়া বাকী সবগুলো টেকনিকই অ্যাপ্লাই করতে পারবেন।

`console.log` এটা আমাদের নিত্যদিনের সঙ্গী। কিন্তু এখানে একটা জিনিস খেয়াল করলে দেখবেন `console` এখানে একটা অবজেক্ট আর `log` এই অবজেক্ট এর একটা মেথড। এখন `console` অবজেক্ট এর কি আর কোনো মেথড আছে? হ্যা তাহলে এই `console` টাকেই ইন্সপেক্ট করে দেখিঃ

    console.dir(console);

এখানে দেখবেন `log()` মেথডটা ছাড়াও আরো অনেক মেথড আছেঃ

![](https://cdn-images-1.medium.com/max/1000/1*E3mGVPALQgurhxw-jq25Bg.png)

এখন এই মেথড একেকটার কাজ একেকরকম। আমরা এখানে আজকে সবগুলো দেখবো না। বরং যেগুলো কাজে লাগতে পারে শুধুমাত্র সেগুলোই দেখবো।

* **`console.assert():`** যারা টেস্টিং এর সাথে পরিচিত আছেন, তাদের এই `assert()` মেথড বেশ কাজে লাগতে পারে। এটা দুইটা আর্গুমেন্ট নিবে। প্রথমটায় একটা এক্সপ্রেশন নিবে। আর দ্বিতীয়টায় একটা ম্যাসেজ। এই ম্যাসেজ ওয়ার্নিং আকারে দেখাবে যদি আপনার দেওয়া এক্সপ্রেশনটা মিথ্যা `false` রিটার্ণ করেঃ

  console.assert(1==1, 'Error');

এখানে কিছুই পাবেন না কারণ `1==1` সত্য `true` রিটার্ণ করছেঃ

![](https://cdn-images-1.medium.com/max/1000/1*mx6yBWD9DdBohDwDrO9rnA.png)

কিন্তু যদি এই এক্সপ্রেশন মিথ্যা `false` রিটার্ণ করবে তাহলেই একমাত্র এখানকার ম্যাসেজটা দেখাবেঃ

    console.assert(1==2, 'Error');

![](https://cdn-images-1.medium.com/max/1000/1*EXpS-9KbT7s29D4SDxocpA.png)

* **`console.clear():`** মেথডের নাম যেরকম, কাজও সেরকমই। এটা দিয়ে কন্সোলে থাকা সব ধরনের লেখা মুছে ফেলতে পারবেন। মানে এক কথায় কন্সোল ক্লিয়ার করে ফেলতে পারবেন। একটু আগের আউটপুটগুলো যদি আপনার কন্সোলে থাকে, আপনি উপরে **Clear console** এ ক্লিক করে কন্সোল ক্লিয়ার করতে পারবেন। কিন্তু আপনি চাইলে এই `clear()` মেথড ব্যবহার করেও কন্সোল ক্লিয়ার করতে পারবেন। আপনি কোডের ভিতর থেকে চাইলে এই মেথড ব্যবহার করে কন্সোল ক্লিয়ার রাখতে পারবেনঃ

  console.clear();

এটা রান করার পর কন্সোল ক্লিয়ার হয়ে যাবেঃ

![](https://cdn-images-1.medium.com/max/1000/1*2LqJ4yogmvs2pbjDl3WA2g.png)

* **`console.count()`:** এটা খুব মজার একটা মেথড। আপনি এই কাউন্ট মেথড টা কতবার কল করেছেন সেটা এই কাউন্ট মেথডই রিটার্ণ করবেঃ

  console.count();
  console.count();
  console.count();
  console.count();
  console.count();

এইগুলো একটা একটা করে রান করলে দেখবেন কতবার কাউন্ট কল করা হচ্ছে সেটা রিটার্ণ করছেঃ

![](https://cdn-images-1.medium.com/max/1000/1*jA8kKzDW76KCpHNikQAlFA.png)

এখন নিজেই নিজেকে গণনা করাটা খুব কাজের না, তবে এখানে আপনি একটা আর্গুমেন্টও দিতে পারবেন। সেই আর্গুমেন্ট কোনো নির্দিষ্ট ভ্যারিয়েবলও হতে পারে, আবার যেকোনো লেভেলও হতে পারে। তখন আপনার ঐ ভ্যারিয়েবলকে কতবার কল করেছেন সেটা কাউন্ট রিটার্ণ করবেঃ

    const countVar = 'Hello';
    console.count(countVar);
    console.count(countVar);
    console.count(countVar);

তিনবার কল করেছি, আর প্রত্যেকবার কতবার কল করা হয়েছে সেটাই রিটার্ণ করছেঃ

![](https://cdn-images-1.medium.com/max/1000/1*kZDp-BA-ISKL1boMg5SOGA.png)

ভ্যারিয়েবল ছাড়া যেকোনোকিছুও হতে পারেঃ

    console.count('Anything');
    console.count('Anything');
    console.count('Anything');

![](https://cdn-images-1.medium.com/max/1000/1*iW3mvQQXjPunCRQei8YJ8A.png)

* **`console.dir()`:** এই মেথডটাও আমরা কোথাও কোথাও ব্যবহার করেছি, আর ডেভেলপমেন্ট এর সময় অনেক উপকারী একটা মেথড। এটার কাজ হচ্ছে জাভাস্ক্রিপ্ট এর কোনো অবজেক্টকে সুন্দর করে খুলে উপস্থাপন করা। অবজেক্ট এ কি কি প্রপার্টি আছে, মেথড আছে এসব কিছু সুন্দর করে লিস্ট আকারে দেখাবে আপনার কন্সোলে। যেমন আমরা যদি উপরে `console` অবজেক্ট খুলে দেখেছিলামঃ

  console.dir(console);

![](https://cdn-images-1.medium.com/max/1000/1*kdUZe6-DQmN1YP5qcalbqw.png)

এখন এখানে ত্রিভাজাকৃতির বাটনে ক্লিক করলেই সুন্দর করে লিস্ট আকারে এই `console` অবজেক্ট এর ভিতরের প্রপার্টি, মেথড সব দেখতে পারবেন। খুব কাজের!

* **`console.error()`:** এটার কাজ হচ্ছে এরর দেখানো। আমাদের কোডে কোনো এরর থাকলে সাধারণত কন্সোলে লাল এরর টাইপের লেখা দেখতে পাই। সেইম জিনিসটাই আমরা এই মেথড দিয়েও তৈরী করতে পারিঃ

  console.error('This is a error log');

![](https://cdn-images-1.medium.com/max/1000/1*eXObp-X7uv_ltCEhL2aNkw.png)

* **`console group()`,`console.groupEnd()`:** এই দুই মেথডটা আসলে একসাথেই কাজ করে। আমাদের সব কন্সোল লগ বা এরর, ওয়ার্নিং সহ আরো বাকি সবকিছু গ্রুপ করার জন্যে এই দুইটা মেথড ব্যবহার করা হয়ঃ

  console.group('A Grouped Console');
  console.log('Normal Console Log');
  console.error('Error Console Log');
  console.dir(console);
  console.groupEnd();

এখানে গ্রুপ `group()` দিয়ে শুরু হয়েছে, আর `group()` এর ভিতরে আমরা গ্রুপের নাম দিয়েছি, না দিলেও চলে। তারপর মাঝখানে কতগুলো কন্সোলের অপারেশন করা হয়েছে। এবং সবশেষে `groupEnd()` দিয়ে গ্রুপিং শেষ করা হয়েছেঃ

![](https://cdn-images-1.medium.com/max/1000/1*wcJuU0m9CQgBfuF6fMv0vw.png)

নেস্টেড গ্রুপিং বা একটা ভিতরে আরেকটা গ্রুপ করাও সম্ভবঃ

    console.group('A Grouped Console');
    console.log('Normal Console Log');
    console.error('Error Console Log');
    console.dir(console);
    
    console.group('Another Grouped Console');
    console.log('Normal Console Log');
    console.error('Error Console Log');
    console.dir(console);
    console.groupEnd();
    
    console.groupEnd();

এখানে দেখবেন দুইটা গ্রুপ তৈরী হয়েছেঃ

![](https://cdn-images-1.medium.com/max/1000/1*maprR_VBhPs3hz6dvsnm8Q.png)

* **`console.info()`:** সিম্পল ইনফো টাইপের ম্যাসেজ দেখানোর জন্যেঃ

  console.info('Just a info message');

![](https://cdn-images-1.medium.com/max/1000/1*UBKVffMtExYesVP7n9lsCw.png)

* **`console.log()`:** এটা আমাদের বহুল ব্যবহৃত log() মেথড। এটা কেনো ব্যবহার করা হয় সেটা হয়তো আর বলা লাগবে নাঃ

  console.log('A Simple Console Log');

![](https://cdn-images-1.medium.com/max/1000/1*iNF8HAdxExG0Sx0lEMBGkQ.png)

কিন্তু এখানেই এটার কাজ শেষ না, আমরা চাইলে এটা দিয়ে আরো কিছু কাজ করতে পারি। যেমন আমরা প্লেসহোল্ডার বসিয়ে কোনোকিছু প্রিন্ট করতে পারিঃ

    console.log('Hello I am %s!', 'Zonayed Ahmed')

এখানে `%s` এর জায়গায় আমাদের পরে দেওয়া আর্গুমেন্টটা বসবেঃ

![](https://cdn-images-1.medium.com/max/1000/1*VbNAsPLeJhJsg_gVNsv46Q.png)

যত ইচ্ছা পারবেনঃ

    console.log('My name is %s And I am %s years old!', 'Zonayed', 21)

যতটা এরকম প্লেসহোল্ডার দিবেন, পরে ঠিক সিরিয়ালি আর্গুমেন্টগুলো দিতে হবেঃ

![](https://cdn-images-1.medium.com/max/1000/1*S1TUr3e5zxpTbkEJggORXw.png)

এক্সপ্রেশনও এখানে ভ্যালিডঃ

    console.log('Addition of 2 + 2 is: %s', (2 + 2));

![](https://cdn-images-1.medium.com/max/1000/1*Y_PJc1ticfwJU1dWRL1mFw.png)

ইএস৬ এর টেমপ্লেট লিটারেল আরো বেশ ভালো কাজ করে এখানেঃ

    const myName = 'Zawad Ahmed';
    console.log(`My name is ${myName}`);

![](https://cdn-images-1.medium.com/max/1000/1*W9bHSMXW9bnZ8ZK4F5A8mg.png)

তারপর সবচেয়ে মজার যে জিনিসটা এখন দেখাবো সেটা হচ্ছে কন্সোলের লেখাগুলোতেও চাইলে আমরা CSS দিয়ে স্টাইলিং করতে পারবো। অনায়ন্য সবগুলো টেকনিক সাপোর্ট করলেও এটা নোড জেএস এ সাপোর্ট করবে না। তাই নোড জেএস এ ব্যবহার করতে পারবেন না। কিন্তু সব ব্রাউজারেই সাপোর্ট করেঃ

    console.log('%cZonayed Ahmed', 'font-size: 50px; background-color: red')

আমরা এখানে `%c` দিয়ে বুঝাতে চাচ্ছি আমরা এখান থেকে পরের আর্গুমেন্ট এ লেখা সিএসএসটা অ্যাপ্লাই করতে চাচ্ছিঃ

![](https://cdn-images-1.medium.com/max/1000/1*obqZq32mMBm5PKhwkbGtug.png)

এখন এই স্টাইল পুরো কন্টেন্ট এ অ্যাপ্লাই হবে এমন না, যেখানে আপনি `%c` দিবেন সেখান থেকেই অ্যাপ্লাই হবেঃ

    console.log('My name is %cZonayed Ahmed', 'color: #fff; background-color: red; border-radius: 4px')

যেখানে দিবেন সেখান থেকেই স্টাইলিং টা হবেঃ

![](https://cdn-images-1.medium.com/max/1000/1*HEJppNH2TbPfgmiR4sI7sQ.png)

এখন আপনি চাইলে যতগুলো ইচ্ছা এই `%c` ব্যবহার করতে পারবেন একটা লগেই, আর নিজের ইচ্ছামতো স্টাইলও দিতে পারবেন। শুধুমাত্র `%c` যতটা হবে, সিএসএসওগুলোও ততটা আর্গুমেন্ট এবং পজিশন ক্রমানুসারে ঠিক করে দিতে হবেঃ

    console.log('My name is %cZonayed Ahmed and I am %c21', 'color: #fff; background-color: red; border-radius: 4px', 'color: #fff; background-color: #333; border-radius: 4px')

![](https://cdn-images-1.medium.com/max/1000/1*H3SvpKvRQfETwwMONVfwqw.png)

ফেসবুকে কখনো ডেভেলপার কন্সোল ওপেন করে থাকলে হয়তো এরকম কিছুই দেখবেনঃ

![](https://cdn-images-1.medium.com/max/1000/1*SMX1IZtEpiPsnsqWXA00jQ.png)

এবার আপনিও জানেন এটা কিভাবে করতে হয়।

* **`console.table()`:** এটা আরেকটা মজার মেথড। আপনি চাইলে আপনার ডাটা স্ট্রাকচারের ডাটাগুলো আরো সুন্দর করে, টেবিল আকারে দেখাতে পারবেন। ধরি আমাদের এমন একটা অ্যারে আছেঃ

  const anArr = \['Salam', 'Barkat', 'Rafiq', 'Jabbar'\];

এখন এটা যদি এই টেবিল মেথড দিয়ে দেখিঃ

    console.table(anArr);

![](https://cdn-images-1.medium.com/max/1000/1*wGyygzDOmUQ9hF68O7FCuw.png)

সেইম যদি অবজেক্ট থাকে তাহলে সেটাও এরকম টেবিল আকারে দেখাবে। অ্যারের টেবিলে দেখবেন ইন্ডেক্স ব্যবহার করা হয়েছে। অবজেক্ট এর ক্ষেত্রে আমরা সেখানে কী দেখতে পাবোঃ

    const anObj = {
       name: 'Zawad Ahmed',
       age: 1,
       canWalk: true,
       canTalk: false,
       nationality: 'Bangladeshi',
       gender: 'Male'
    }

এখন এই অবজেক্ট যদি দেখি এই টেবিল মেথড দিয়েঃ

    console.table(anObj);

![](https://cdn-images-1.medium.com/max/1000/1*FH_KCg0u31tPjSz2We2w9w.png)

এই মেথডটা নোড জেএস এ কাজ করবে না।

* **`console.time()`, `console.timeEnd()`:** এই দুইটা মেথড এর মধ্যে আপনি আপনার জাভাস্ক্রিপ্ট কোড দিবেন, তারপর রান করানোর পর এটা আপনাকে বলে দিবে আপনার কোডের অপারেশন শেষ করতে কত সময় লেগেছেঃ

  console.time();
  for(var i = 0; i < 10000; i++) {
  console.log('Fake Time');
  }
  console.timeEnd();

এখানে একটু সতর্ক হয়ে নিবেন যেহেতু আমি ফেইক অপারেশন তৈরী করার জন্যে ১০ হাজার লুপ তৈরী করেছি। ম্যাশিন স্লো হলে ট্রাই করার দরকার নাই। এবার দেখবেন এটা রিটার্ণ করবে এই অপারেশনটা শেষ করতে কতসময় লেগেছেঃ

![](https://cdn-images-1.medium.com/max/1000/1*9X_WV-LnIxX4I0iI51Zq9w.png)

* **`console.warn()`:** কন্সোলে ওয়ার্নিং আকারে ম্যাসেজ দেখানোর জন্যেঃ

  console.warn('A Simple Warning');

![](https://cdn-images-1.medium.com/max/1000/1*_vlOB7qK_cVyy_s_nZrPLg.png)

***

এই অংশে যেগুলো নিয়ে আলোচনা করবো এগুলো সব ডম স্পেসিফিক। এগুলো আপনি নোড জেএস এ ব্যবহার করতে পারবেন না। শুধুমাত্র আপনার ব্রাউজারে কাজ করবে। ব্রাউজারে কন্সোলে কিভাবে আপনি আপনার ডমের সাথে কাজ করবেন ঐরকম কিছু টেকনিক নিয়েই এই অংশে আলোচনা করা হয়েছে। এখানকার বেশীরভাগ টেকনিকই গুগুল ক্রোম স্পেসেফিক। তাই অন্যান্য ব্রাউজারে নাও চলতে পারে।

**DOM ইলিমেন্ট সিলেক্ট করাঃ**

* **কারেন্ট ডম ইলিমেন্ট সিলেক্ট করাঃ** আপনি যদি [কোনো](https://js.zonayed.me/) ডম ইলিমেন্ট ইন্সপেক্ট করে সিলেক্ট করেন তাহলে ঐটার ডান পাশে এরকম একটা `$0` সাইন দেখতে পাবেনঃ

![](https://cdn-images-1.medium.com/max/1000/1*uY6l9qH7CEdRF3ifQgQmIw.png)

এখন কন্সোল থেকে আপনি $0 লিখে এই সিলেক্ট করা ডম ইলিমেন্ট টা কন্সোলে সিলেক্ট করতে পারবেনঃ

![](https://cdn-images-1.medium.com/max/1000/1*4ueo8-bUF7dkbuMcGTE6gQ.png)

* **আগের ডম সিলেকশন হিস্টোরী সিলেক্ট করাঃ** একইভাবে চাইলে আপনি আগের সিলেক্ট করা চারটা ডম ইলিমেন্ট এভাবে যথাক্রমে `$1`, `$2`, `$3` ও `$4` দিয়ে কন্সোলে সিলেক্ট করতে পারবেন। এখানে `$1` হচ্ছ বর্তমানে ইন্সপেক্ট এ সিলেক্ট করা ডম ইলিমেন্ট এর ঠিক আগেরটা, $2 এরও আগেরটা আর এভাবে বাকি দুইটা। এভাবে `$_` দিয়েও আগের সিলেক্ট করা ইলিমেন্টটা কন্সোলে সিলেক্ট করতে পারবেন। এখানে ডিমো দেখানো টাফ তাই নিজে প্র্যাক্টিস করে দেখে নিবেন।
* আগের রান করা এক্সপ্রেশন দেখতেঃ আমরা `$_` এর কথা একটু আগে বললেও এটা দিয়ে আরেকটা কাজ করা যায়। সেটা হচ্ছে আপনি সর্বশেষ যে এক্সপ্রেশনটা রান করেছেন সেটা যদি দেখতে চান তাহলে এই `$_` ব্যবহার করতে পারবেন। ধরি আমরা একটা সিম্পল এক্সপ্রেশন রান করিয়েছি কন্সোলেঃ

  10 + 20

![](https://cdn-images-1.medium.com/max/1000/1*qZWFNp8Q1G3qKx2cwowhuA.png)

এখন এটা রিটার্ণ করে ফেলছে, মানে শেষ। কিন্তু যদি আমরা আবার দেখতে চাই কি রিটার্ণ করেছে এটা তাহলে সহজেই করে ফেলতে পারবোঃ

    $_

![](https://cdn-images-1.medium.com/max/1000/1*PqscuhNmI-ENZwQ7mxsR1w.png)