---
language: বাংলা
tags: []
date: 2020-03-10T16:39:55Z
series: ব্লগ
template: post
title: 'জাভাস্ক্রিপ্ট ইএস ৬(ES6): রেস্ট(Rest) প্যারামিটার'
thumb_img_path: ''

---
জাভাস্ক্রিপ্ট এর ইএস৬ এ রেস্ট প্যারামিটার আরেকটা ইউজফুল অ্যাডিশন। এর সাহায্যে আন্ডিফাইন্ড অ্যামাউন্ট প্যারামিটার পাস করা যায় একটা ফাংশনের ভিতর দিয়ে। আমরা যখন একটা ফাংশন প্যারামিটারসহ ডিফাইন করি তখন যদি সেখানে কয়টা আর্গুমেন্ট পাস করা হতে পারে সেটা অজানা থাকে, সে সিচুয়েশনে আমরা এই রেস্ট প্যারামিটার ইউজ করি বা ইএস৫ এর `arguments` অবজেক্ট ইউজ করি। জাভাস্ক্রিপ্ট ইএস৫ এর এই `arguments` অবজেক্ট মূলত সেইম কাজই করতো, কিন্তু ইএস৬ এর এই রেস্ট প্যারামিটার একটু বেশীই স্মার্ট। রেস্ট প্যারামিটারে সেইম স্প্রেড অপারেটরের মতোই `…` এই তিনটা ডট ইউজ করা হয়। আর তাই এই তিনটা ডটের প্লেস দেখে আপনাকে বুঝতে হবে কখন এগুলো রেস্ট প্যারামিটারের জন্যে ইউজ করা হচ্ছে আর কখন স্প্রেড অপারেটর হিসাবে ইউজ করা হচ্ছে।

আগের `arguments` অবজেক্ট এর মতো হলেও রেস্ট প্যারামিটার একটু অন্যরকম। জাভাস্ক্রিপ্ট এর ইএস৬ এ নতুন অ্যারো ফাংশন এসেছে, অ্যারো ফাংশনে এই `argument` অবজেক্ট কাজ করবে না। আর তাই আপনি যখন অ্যারো ফাংশন ইউজ করতে যাবেন তখন আপনাকে এই ক্ষেত্রে রেস্ট প্যারামিটার ইউজ করতে হবে। আর তাছাড়া রেস্ট প্যারামিটার `arguments` অবজেক্ট থেকে অনেকটাই ফ্লেস্কিবল। নিচে উদাহরণ দিলেই বুঝতে পারবেন।

ইএস৫ এ `arguments` অবজেক্ট ইউজ করলে আমাদের পাস করা আর্গুমেন্টগুলো একটা অ্যারের মতো অবজেক্ট এ স্টোর হয়ে থাকে। আমাদের তখন সেই অবজেক্ট থেকে আর্গুমেন্টগুলো এক এক করে বের করে আনতে হয়ঃ

    function arguments5() {
       for(var i = 0; i < arguments.length; i++) {
          console.log('Argument passed: ' + arguments[i]);
       }
    }

এখন যতটাই আর্গুমেন্ট পাস করবেন এগুলো লুপ করে প্রিন্ট করবেঃ

    arguments5('Bangladesh', 'India', 'Sri Lanka');

![](https://cdn-images-1.medium.com/max/800/1*4o1Lo2GngwmppxtK5iFlqQ.png)

    arguments5('Cricket', 'Football', 'Volleyball', 'Kabadi', 'Kutkut');

![](https://cdn-images-1.medium.com/max/800/1*Q9tAm1Xb259AD187ckK0pA.png)

কিন্তু সেইম জিনিস অ্যারো ফাংশনের ক্ষেত্রে কাজ করবে নাঃ

    const argumentsArr = () => {
       for(var i = 0; i < arguments.length; i++) {
          console.log('Argument passed: ' + arguments[i]);
       }
    }

এখন কল করলে এই অ্যারো ফাংশনটাকেঃ

    argumentsArr('Bangladesh', 'India', 'Sri Lanka')

এরর আসবেঃ

![](https://cdn-images-1.medium.com/max/800/1*JYV6SXHm0pQH3eRl13ew8Q.png)

সেইমভাবে এই `arguments` অবজেক্ট ঠিক অ্যারে না হওয়ায় এখানে আপনি চাইলে `forEach` , `map` , `filter` , `reduce` বা এরকম বাকী যত মেথড আছে সেগুলো কাজ করাতে পারবেন নাঃ

    function argumentsMeth() {
       arguments.map(function(oneArgs) {
          console.log('Argument Passed: ' + oneArgs);
       })
    }

এখন এই ফাংশনকে কল করলে এরর আসবেঃ

    argumentsMeth('Bangladesh', 'India', 'Sri Lanka')

![](https://cdn-images-1.medium.com/max/800/1*8_oheIJHOU4L5X4tpTDF3w.png)

কারণ এই `arguments` অবজেক্ট এর এই ধরনের কোনো মেথড নেই। তাই কাজ করছে না। এখন আমরা চাইলে একটু ট্রিক্স করে এই মেথডগুলো `Array` থেকে ইনহেরিট করে এনে কাজে লাগাতে পারিঃ

    function argumentsMethWork() {
       var argsArr = Array.prototype.slice.call(arguments);

       argsArr.map(function(oneArgs) {
          console.log('Argument Passed: ' + oneArgs);
       })
    }

এখন এই ফাংশনটাকে কল করলে ঠিকঠাক কাজ করবেঃ

    argumentsMethWork('Bangladesh', 'India', 'Sri Lanka')

![](https://cdn-images-1.medium.com/max/800/1*2z2v-tybvmcdVXoOJPp50A.png)

এখন এখানে দেখলাম `arguments` অবজেক্ট এর সুবিধা-অসুবিধা। এবার আসুন দেখি রেস্ট প্যারামিটার কিভাবে কাজ করে। আগের সেইম একটা প্রোগ্রামই রেস্ট প্যারামিটার দিয়ে করিঃ

    function arguments6(...anyName) {
       for(var i = 0; i < anyName.length; i++) {
          console.log('Argument passed: ' + anyName[i]);
       }
    }

এখন কল করলেঃ

    arguments6('Bangladesh', 'India', 'Sri Lanka')

![](https://cdn-images-1.medium.com/max/800/1*rgZk4yeQlJ0M5z_wllBq4g.png)

    arguments6('Cricket', 'Football', 'Volleyball', 'Kabadi', 'Kutkut');

![](https://cdn-images-1.medium.com/max/800/1*qJv7PG_YbF3GGYNfSdtOqA.png)

প্রথমেই চোখে যেটা পড়ার কথা, সেই তিনটা ডট। এগুলোই রেস্ট প্যারামিটারে ইউজ করা হয়। আর দ্বিতীয় যে জিনিসটা চোখে পড়বে সেটা হচ্ছে আমরা যেকোনো নাম দিয়ে আমাদের মনমতো আর্গুমেন্ট এর নাম দিতে পারবো। এবং সেই সাথে এটা অ্যারো ফাংশনের সাথেও একদম পার্ফেক্টলি কাজ করবেঃ

    const argumentsArr6 = (...anyName) => {
       for(var i = 0; i < anyName.length; i++) {
          console.log('Argument passed: ' + anyName[i]);
       }
    }

এখন এটা কল করলেঃ

    argumentsArr6('Bangladesh', 'India', 'Sri Lanka')

![](https://cdn-images-1.medium.com/max/800/1*L3dF-9OEaB3BOENg5YP52A.png)

    argumentsArr6('Cricket', 'Football', 'Volleyball', 'Kabadi', 'Kutkut');

![](https://cdn-images-1.medium.com/max/800/1*-5WZm7xxPerfS7GaG6YH6A.png)

সেইমভাবে আপনি চাইলে `forEach` , `map` , `filter` , `reduce` বা এরকম বাকী যত মেথড আছে সেগুলো কাজ করাতে পারবেনঃ

    const argumentsMeth6 = (...anyName) => {
       anyName.map(oneArgs => console.log('Argument Passed: ' + oneArgs))
    }

এখন এই ফাংশনটাকে কল করলেঃ

    argumentsMeth6('Bangladesh', 'India', 'Sri Lanka')

![](https://cdn-images-1.medium.com/max/800/1*SLvCr2AfjyDp9v1oXZIi8g.png)

কোনো ধরনের মডিফিকেশন ছাড়াই এটা কাজ করতেছে!

তাছাড়া এই রেস্ট প্যারামিটারের আরো একটা বড় সুবিধা আছে। সেটা হচ্ছে আপনার যদি কয়েকটা প্যারামিটার আগে থেকেই জানা থাকে তাহলে সেগুলো ডিফাইন করে দিতে পারবেন, তারপর বাকিগুলো না জানা থাকলে বা আন্ডিফাইন্ড অ্যামাউন্টের প্যারামিটার হলে তখন সে জায়গায় রেস্ট প্যারামিটার ইউজ করতে পারবেন। নিচের উদাহরণ দেখলে বুঝতে পারবেনঃ

    const restExtra = (name, age, ...others) => {
       console.log(`My name is ${name} and I am ${age} years old!`);
       others.map(other => console.log(`Argument Passed: ${other}`));
    }

এবার এটা কল করলেঃ

    restExtra('Zonayed Ahmed', 21, 'JavaScript', 'Chrome', 'Web Developer', 'Front End Engineer')

![](https://cdn-images-1.medium.com/max/800/1*gD1TMmoyPPqVmg-Cs4JHLw.png)

কতোটা ফ্লেক্সিবল এবার বুঝতে পেরেছেন! এটাই হচ্ছে ইএস৬ এর রেস্ট প্যারামিটারের মজা…! আশা করি রেস্ট প্যারামিটার এখন থেকে আপনার মনমতো যেখানে ইচ্ছা সেখানেই ইউজ করতে পারবেন।

***

\[wysija_form id=”6″\]