---
language: বাংলা
tags:
- coding
- ECMAScript6
- ES6
- JavaScript
- JavaScript-Bangla
- programming
- জাভাস্ক্রিপ্ট
- জাভাস্ক্রিপ্ট-বাংলা
date: 2018-06-28T16:40:48Z
series: ব্লগ
template: post
title: জাভাস্ক্রিপ্ট ইএস ৬(ES6):ইফি (Immediately Invoked Function Expressions)
thumb_img_path: "/images/es6.jpeg"

---
আমরা ইএস ৫ এ জেনেছি ইফির কথা, ইফি কিভাবে এবং কেনো ইউজ করা হয় সেটা নিয়েও [সেখানে](https://with.zonayed.me/bn/%e0%a6%95%e0%a6%ae%e0%a7%8d%e0%a6%aa%e0%a6%bf%e0%a6%89%e0%a6%9f%e0%a6%be%e0%a6%b0-%e0%a6%b8%e0%a6%be%e0%a6%87%e0%a6%a8%e0%a7%8d%e0%a6%b8/%e0%a6%9c%e0%a6%be%e0%a6%ad%e0%a6%be%e0%a6%b8%e0%a7%8d%e0%a6%95%e0%a7%8d%e0%a6%b0%e0%a6%bf%e0%a6%aa%e0%a7%8d%e0%a6%9f%e0%a6%83-%e0%a6%87%e0%a6%ab%e0%a6%bf-immediately-invoked-function-expressions-ii/) বিস্তারিত আলোচনা করা হয়েছে। চাইলে আগের [আর্টিকেলটা](https://with.zonayed.me/bn/%e0%a6%95%e0%a6%ae%e0%a7%8d%e0%a6%aa%e0%a6%bf%e0%a6%89%e0%a6%9f%e0%a6%be%e0%a6%b0-%e0%a6%b8%e0%a6%be%e0%a6%87%e0%a6%a8%e0%a7%8d%e0%a6%b8/%e0%a6%9c%e0%a6%be%e0%a6%ad%e0%a6%be%e0%a6%b8%e0%a7%8d%e0%a6%95%e0%a7%8d%e0%a6%b0%e0%a6%bf%e0%a6%aa%e0%a7%8d%e0%a6%9f%e0%a6%83-%e0%a6%87%e0%a6%ab%e0%a6%bf-immediately-invoked-function-expressions-ii/) পড়ে আসতে পারবেন।

প্রাইভেসি মেইন্টেইন করতে চাইলে বা আপনি যদি চান কোনো ফাংশনের ভিতরের ডাটা বাইরে এক্সপোজ করতে না চান তাইলে ইফি খুব ভালোভাবে কাজে লাগতে পারে। যেমনঃ

    (function aDemoFunc() {
       var msg = 'Hello World';  
       console.log(msg);
    })();

এটা সরাসরিই আউটপুট দিবেঃ

![](https://cdn-images-1.medium.com/max/800/1*kgogo9YVWw1JKlRkCjunQQ.png)

এখন এর বাইরে যদি এই ফাংশনটাকে আবার কল করতে চাই তাহলে এটা এরর দেখাবেঃ

    aDemoFunc();

![](https://cdn-images-1.medium.com/max/800/1*4qrsHBEt3ivC1Pr1upIOsg.png)

সেইমভাবে যদি আমরা ভ্যারিয়েবল `msg` টাকেও অ্যাক্সেস করতে চাই, সেটাও অসম্ভবঃ

    console.log(msg);

![](https://cdn-images-1.medium.com/max/800/1*opAP3n44LKifzdovuZOxXw.png)

ইফি ইউজ করে এরকমভাবেই প্রাইভেট ফাংশন এবং সেই সাথে প্রাইভেট ভ্যারিয়েবল ক্রিয়েট করা যায়।

কিন্তু ইএস ৬ এ `let` বা `const` ব্লক লেভেলের স্কোপিং হওয়াতে ব্যাপারটা আরো অনেক সোজা হয়ে গিয়েছে। আমরা কোনো প্রাইভেট ফাংশন বা ভ্যারিয়েবল ক্রিয়েট করতে চাইলে জাস্ট সেটাকে `let` বা `const` দিয়ে ডিক্লেয়ার করে সেটাকে এই ব্র্যাকেটস`{}` এর ভিতরে রেখে দিলেই এরা প্রাইভেট হয়ে যাবে। এদেরকে বাইরে থেকে অ্যাক্সেস করা যাবে নাঃ

    {
       let a = 5;
       let b = 10;
       const pi = 3.1416;
       console.log(a + b + pi);
    }

এরা ঠিকঠাক মতো আউটপুট দেখাবেঃ

![](https://cdn-images-1.medium.com/max/800/1*aPgHNPsNShuKGuN6asVXEA.png)

কিন্তু এখন যদি আমরা এই ভ্যারিয়েবলগুলোকে এই `{}` ব্র্যাকেটসগুলোর বাইরে থেকে অ্যাক্সেস করতে চাই তাহলে এরর আসবেঃ

    {
       let a = 5;
       let b = 10;
       const pi = 3.1416;
    }
    console.log(a + b + pi);

![](https://cdn-images-1.medium.com/max/800/1*Tft4IiDAJVCghgegpyNk-w.png)

সেইমভাবে ফাংশনের ক্ষেত্রেও। আমরা যদি `var` দিয়ে ডিক্লেয়ার করে ফাংশন এক্সপ্রেশন নেই তাহলে সেটার স্কোপ `var` এর স্কোপ মতেই হবে। এই ফাংশনকে এই`{}` ব্র্যাকেটস এর ভিতরে রাখার পরও দেখবেন বাইরে থেকে অ্যাক্সেস করা যাচ্ছেঃ

    {var myName = function() {
     var a = 'Zonayed Ahmed';
     console.log(a);
    }}
    
    myName();

এটা ঠিকঠাক আউটপুট দেখাবেঃ

![](https://cdn-images-1.medium.com/max/800/1*DdOqDp48eVYs0w3cIKdboA.png)

কিন্তু সেইম ফাংশনটাকেই যদি আমরা `let` বা `const` দিয়ে ডিক্ল্যেয়ার করে নেই, তাহলে সেটা প্রাইভেট ফাংশন হয়ে যাবে ব্লক স্কোপিং এর কারনেঃ

    {const myName6 = function() {
     const a = 'Zonayed Ahmed';
     console.log(a);
    }}
    
    myName6();

এটা এরর আসবেঃ

![](https://cdn-images-1.medium.com/max/800/1*Lngw-gCuuL1j4gstNzXWxQ.png)

এভাবেই আপনি ইএস ৬ এ খুব সহজেই ইফির ফাংশানালিটি পেয়ে যাবেন।