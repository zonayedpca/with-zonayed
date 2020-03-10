---
language: বাংলা
tags: []
date: 2020-03-10T16:39:50Z
series: ব্লগ
template: post
title: 'জাভাস্ক্রিপ্ট ইএস ৬(ES6): ডিফল্ট(Default) প্যারামিটার'
thumb_img_path: ''

---
জাভাস্ক্রিপ্ট এ ইএস৬ এর পরিচয় করানো হয়েছে মূলত ডেভেলপারদের লাইফ ইজি করার জন্যে। আর সেজন্যেই মূলত এই ডিফল্ট প্যারামিটার অ্যাড করা হয়। আমিও আগে এরকম বিহেভিয়ার আশা করতাম জাভাস্ক্রিপ্ট থেকে বা অনেক ডেভেলপাররাই আশা করতো। আর তাই এই ডিফল্ট প্যারামিটারকে অ্যাড করা হয়েছে।

আমরা যদি কোনো ফাংশন ডিফাইন করার সময় এর সাথে দেওয়া প্যারামিটারের একটা ডিফল্ট ভ্যালু সেট করে দিতে চাই তাহলে আমরা খুব সহজেই ইএস৬ এর এই ডিফল্ট প্যারামিটার ইউজ করতে পারি। তবে ইএস৫ এ ব্যাপারটা এতো সহজ ছিলো না। নিচের উদাহরণ দুইটা দেখলেই ধরতে পারবেন।

প্রথমে আমরা একটা প্যারামিটারসহ ফাংশন নিলাম, এখন সেই প্যারামিটারগুলোর ডিফল্ট ভ্যালু সেট করে দিবো। এই ফাংশন কল করার সময় যদি কোনো আর্গুমেন্ট দেওয়া হয় তাহলে সেই আর্গুমেন্ট থেকে ভ্যালুগুলো নিয়ে এই ফাংশন কাজ করবে, আর যদি কোনো আর্গুমেন্ট না দেওয়া হয় তাহলে ডিফল্ট প্যারামিটারের ভ্যালুগুলো ইউজ হবে। তো ইএস৫ এ কোড এরকম হবেঃ

    function defaultParams(name, age) {
       name ? name = name : name = 'Zonayed Ahmed'
       age ? age = age : age = 21
       console.log('My name is ' + name + ' and I am ' + age + ' years old!');
    }

এখন এই ফাংশনটাকে কোনোরকম আর্গুমেন্ট ছাড়া কল করলেঃ

    defaultParams();

ডিফল্ট প্যারামিটারের ভ্যালুগুলো প্রিন্ট হবেঃ

![](https://cdn-images-1.medium.com/max/800/1*ULhj3PPQDtuha8EYrW4rrg.png)

আর আর্গুমেন্ট দিলে আর্গুমেন্ট এর ভ্যালুগুলো প্রিন্ট হবেঃ

    defaultParams('Zawad Ahmed', 1);

এখন আর্গুমেন্টস এর ভ্যালুগুলোই প্রিন্ট হবেঃ

![](https://cdn-images-1.medium.com/max/800/1*slr8HKJTxogNe7L5VdzLnA.png)

বেশ ভালোই কাজ করতেছে। আমরা ঠিক যেমটা আশা করেছিলাম তাই হচ্ছে। কিন্তু তারপরেও অনেক ঝামেলার মনে হচ্ছে তাই না? হ্যাঁ সেজন্যেই ইএস৬ এ ডিফল্ট প্যারামিটারের পরিচয় করানো হয়েছে। সেইম কোড ইএস৬ এ লিখলেঃ

    function defaultParams6(name = 'Zonayed Ahmed', age = 21) {
       console.log('My name is ' + name + ' and I am ' + age + ' years old!');
    }

এখন আর্গুমেন্ট ছাড়া এই ফাংশনটাকে কল করলেঃ

    defaultParams6();

![](https://cdn-images-1.medium.com/max/800/1*p4btqTIdknoihDUKSede4g.png)

আর আর্গুমেন্ট দিলেঃ

    defaultParams6('Zawad Ahmed', 1);

আমাদের আর্গুমেন্টসগুলোই প্রিন্ট হবেঃ

![](https://cdn-images-1.medium.com/max/800/1*LmnqEqwmHEDseAWD3prAaw.png)

ব্যাস! এতোইটাই সহজ করে দিলো আমাদের লাইফ এই ডিফল্ট প্যারামিটার। মজার না অনেক? হ্যাঁ সেজন্যেই ইএস৬ শিখার দরকার আছে ![😉](https://s.w.org/images/core/emoji/12.0.0-1/svg/1f609.svg)

#### ফাংশন কন্সট্রাকটরের সাথে ডিফল্ট প্যারামিটারঃ

সেইমভাবে আমরা ফাংশন কন্সট্রাকটরের সাথেও ডিফল্ট প্যারামিটার ইউজ করতে পারবো। তবে আগে ইএস৫ এর কোডের ভার্শন দেখে নিই। ইএস৫ এ আমাদের যা করতে হতোঃ

    function FunctionConst(name, age) {
       name ? name = name : name = 'Zonayed Ahmed';
       age ? age = age : age = 21;
       this.name = name;
       this.age = age;
    }

এখন এই ফাংশন কন্সট্রাক্টর থেকে নতুন অবজেক্ট তৈরী করবোঃ

    var zonayed = new FunctionConst();

এখন এই `zonayed` এর `name` আর `age` দেখলেঃ

    console.log(zonayed.name);
    console.log(zonayed.age);

ডিফল্ট প্যারামিটারগুলো শো করবেঃ

![](https://cdn-images-1.medium.com/max/800/1*1jmen_l76FpM9dj0qfdSpA.png)

কিন্তু আমরা যদি নতুন অবজেক্ট আর্গুমেন্টসহ ডিফাইন করিঃ

    var zawad = new FunctionConst('Zawad Ahmed', 1);

এখন এই `zawad` এর `name` আর `age` দেখলেঃ

    console.log(zawad.name);
    console.log(zawad.age);

আমাদের পাসকৃত আর্গুমেন্টসগুলোর ভ্যালুই দেখাবেঃ

![](https://cdn-images-1.medium.com/max/800/1*iddNdMsH-UDkhI59i7vqtQ.png)

সেইমভাবে এখন এই ফাংশন কন্সট্রাকটরটাকে ইএস৬ এ লিখলেঃ

    function FunctionConst6(name = 'Zonayed Ahmed', age = 21) {
       this.name = name;
       this.age = age;
    }

এখন এটা থেকে দুইটা অবজেক্ট তৈরী করবোঃ

    var zonayed6 = new FunctionConst6();

এখন এই `zonayed6` এর `name` আর `age` দেখলেঃ

    console.log(zonayed6.name);
    console.log(zonayed6.age);

ডিফল্ট প্যারামিটারগুলো শো করবেঃ

![](https://cdn-images-1.medium.com/max/800/1*t6o9j7dBcGmzhjrk_SodCg.png)

কিন্তু আমরা যদি নতুন অবজেক্ট আর্গুমেন্টসহ ডিফাইন করিঃ

    var zawad6 = new FunctionConst6('Zawad Ahmed', 1);

এখন এই `zawad6` এর `name` আর `age` দেখলেঃ

    console.log(zawad6.name);
    console.log(zawad6.age);

আমাদের পাসকৃত আর্গুমেন্টসগুলোর ভ্যালুই দেখাবেঃ

![](https://cdn-images-1.medium.com/max/800/1*YIEfTgp83_vhhmByHRsiBA.png)

ব্যাস! এভাবেই ডিফল্ট প্যারামিটার আমাদের লাইফ সহজ করে দিবে। আশা করি এখন থেকে ডিফল্ট প্যারামিটার নিশ্চিন্তে ব্যবহার করতে পারবেন।

> এখানে আমি `var` দিয়ে ভ্যারিয়েবল নিলেও আপনি চাইলে `let` বা `const` যেকোনো কিছু ইউজ করতে পারবেন। এতে রেসাল্টের কোনো পরিবর্তন হবে না। সেই সাথে আমি এখানে টেমপ্লেট লিটারেল ইউজ না করলেও আপনি চাইল সেটাও ইউজ করতে পারবেন নিশ্চিন্তে। এতে ফলাফল একই আসবে।

***

\[wysija_form id=”6″\]