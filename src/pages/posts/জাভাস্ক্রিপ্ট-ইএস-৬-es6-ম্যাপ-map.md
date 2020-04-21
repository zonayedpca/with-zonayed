---
language: বাংলা
tags:
- coding
- ECMAScript6
- ES6
- JavaScript
- JavaScript-Bangla
- programming
- ইএস৬
- ইকমাস্ক্রিপ্ট৬
- জাভাস্ক্রিপ্ট
- জাভাস্ক্রিপ্ট-বাংলা
date: 2018-07-30T16:39:45Z
series: ব্লগ
template: post
title: 'জাভাস্ক্রিপ্ট ইএস ৬(ES6): ম্যাপ (Map)'
thumb_img_path: "/images/es6.jpeg"

---
জাভাস্ক্রিপ্ট এর ইএস৬ এ মূলত সিনট্যাক্স ডিফারেন্স ছাড়া, বা সিন্ট্যাক্টিক শুগ্যার ছাড়া তেমন নতুন কিছু আমাদের চোখে এখনো পড়ে নি। কিন্তু এবার আমরা সম্পূর্ণ নতুন একটা জিনিস নিয়ে আলোচনা করবো। হ্যাঁ এই জিনিসটা ইএস৬ একদম সম্পূর্ণ নতুন অ্যাড করা হয়েছে। জাভাস্ক্রিপ্ট এর আগের কোন ভার্শনে এটার কোনো অস্তিত্বই ছিলো না। সেটা হচ্ছে ম্যাপ `Map` ।

এই ম্যাপ `Map` [সেই ম্যাপ](https://with.zonayed.me/bn/%E0%A6%AC%E0%A7%8D%E0%A6%B2%E0%A6%97/%E0%A6%A8%E0%A6%BF%E0%A6%A4%E0%A7%8D%E0%A6%AF%E0%A6%A6%E0%A6%BF%E0%A6%A8%E0%A7%87%E0%A6%B0-%E0%A6%9C%E0%A6%BE%E0%A6%AD%E0%A6%BE%E0%A6%B8%E0%A7%8D%E0%A6%95%E0%A7%8D%E0%A6%B0%E0%A6%BF%E0%A6%AA%E0%A7%8D/) `map` ভেবে ভুল করবেন না। কারণ `map` হচ্ছে একটা মেথড। কিন্তু এখানে আজকে আমরা যে ম্যাপ `Map` নিয়ে কথা বলবো সেটা একটা ডাটা স্ট্রাকচার। নতুন পরিচয় করিয়ে দেওয়া হয়েছে ডেভেলপারদের সাথে জাভাস্ক্রিপ্ট এর ইএস৬ ভার্শনে। কিন্তু এটা অবজেক্ট টাইপ ডাটা স্ট্রাকচার থেকে একটু অন্যরকম। এটারো নিজস্ব মেথড আছে, নিজস্ব কিছু বৈশিষ্ট্য আছে। ম্যাপ একই সাথে ফাংশন, বুলিয়ান, ইন্টিজার, ক্যারেক্টার, স্ট্রিং সবরকমের ডাটাই অ্যাক্সেপ্ট করতে পারে। তাই আমরা আজকে এটা নিয়েই বিস্তারিত আলোচনা করবো।

#### ম্যাপ (`Map)` তৈরী করাঃ

**নতুন ম্যাপ নেওয়াঃ** আমরা নতুন কোনো ম্যাপ ডাটা স্ট্রাকচার নিতে চাইলে এভাবে নিতে পারবোঃ

    const zawad = new Map();

ব্যাস! হয়ে গেলো `zawad` নামে একটা ম্যাপ। এখন ম্যাপের ভিতরেও কী এবং ভ্যালু থাকে। আমরা যদি এরকম নতুন কোনো ভ্যালু এই ম্যাপের ভিতরে রাখতে চাইঃ

    zawad.set('fullName', 'Zawad Ahmed');

এখন ম্যাপ এ থাকা ডাটা থেকে কোনো ডাটা অ্যাক্সেস করতে চাইলেও আরেকটা মেথড আছে। যেমন আমার উপরে নেওয়া `zawad` এর `fullName` জানতে চাচ্ছিঃ

    zawad.get('fullName');

![](https://cdn-images-1.medium.com/max/800/1*nC-ZbcmLgBYk0E3ODHWADg.png)

আবার আমরা চাইলে আমাদের ম্যাপ এ কোনো স্পেসেফিক ভ্যালু আছে কিনা সেটাও চেক করতে পারিঃ

    zawad.has('fullName');

যেহেতু আমাদের ম্যাপ এ `fullName` নামে কী আছে তাই এটা সত্য হবেঃ

![](https://cdn-images-1.medium.com/max/800/1*d0bkyHmZUSuaOKBAPWLvzQ.png)

এখন যদি এরকম কী না থাকে তাহলে সেটা মিথ্যা হবেঃ

    zawad.has('something');

![](https://cdn-images-1.medium.com/max/800/1*Dl6gpKl5kAntt0j3rxss_w.png)

এখন আমরা চাইলে ম্যাপ থেকে এরকম কোন জোড়া ডিলেটও করে ফেলতে পারি। প্রথমে আমরা নতুন আরেকটা জোড়া অ্যাড করে নেইঃ

    zawad.set('toberemoved', 'willberemoved');

এখন আবার চেক করতে চাইলে নতুন জোড়াটা ম্যাপ এ অ্যাড হয়েছে কিনাঃ

    zawad.has('toberemoved');

![](https://cdn-images-1.medium.com/max/800/1*zj_zlBuaFiMcl-FX_NpgRg.png)

এখন আমরা এই `toberemoved` রিমুভ ডিলেট করতে চাইঃ

    zawad.delete('toberemoved');

ব্যাস! ডিলেট হয়ে গেলো। এখন যদি চেক করি এই `toberemoved` আছে কিনাঃ

    zawad.has('toberemoved');

এটা মিথ্যা হবে, কারণ আমরা একটু আগেই এটা ডিলেট করে ফেলেছি আমাদের ম্যাপ থেকেঃ

![](https://cdn-images-1.medium.com/max/800/1*PW904gobrc4WTv8nsvJPew.png)

এখন আমরা চাইলে পুরো `zawad` ম্যাপটাকেই ক্লিয়ার করে ফেলতে পারিঃ

    zawad.clear();

এখন যদি চেক করই `zawad` এর ভিতর কোনোকিছু পাওয়া যাবে নাঃ

    console.log(zawad);

![](https://cdn-images-1.medium.com/max/800/1*p0K34aIHcLitgQo2si-nQw.png)

ধরি আমাদের নিচের মতো একটা ম্যাপ আছে কয়েকটা ইলিমেন্টসহঃ

    const favorite = new Map();

এখন এটার ভিতরে কিছু ইলিমেন্ট রাখবোঃ

    favorite.set('name', 'Zonayed Ahmed');
    favorite.set('job', 'student');
    favorite.set('color', 'blue');
    favorite.set('os', 'ubuntu');
    favorite.set('mobileos', 'android');

এবার এই `favorite` ম্যাপ এর ভিতর সব ডাটা পাবেনঃ

    console.log(favorite);

![](https://cdn-images-1.medium.com/max/800/1*h7foNjF9wklLaKXxbkVv5A.png)

আমরা চাইলে ম্যাপের ভিতরে কয়টা ইলিমেন্ট আছে সেটাও জানতে পারবো ম্যাপ এর `size` প্রপ্রার্টি দিয়েঃ

    console.log(favorite.size);

![](https://cdn-images-1.medium.com/max/800/1*9-Mc5HE4rtaZSc-x0yGK1Q.png)

এখন আমরা চাইলে ম্যাপ এর মধ্যে লুপও চালাতে পারিঃ

    favorite.forEach((value, key) => console.log(`Key is: ${key} and the value is: ${value}`));

`forEach` মেথড এ দ্বিতীয় আর্গুমেন্ট এ আমরা সাধারণত ইনডেক্স পাইলেও এখানে ম্যাপ এর ক্ষেত্রে ম্যাপ এর কী টা পাবোঃ

![](https://cdn-images-1.medium.com/max/800/1*feoGldo2_Tr8P7BirEReFg.png)

সেইমভাবে আমরা `for…of` দিয়েও লুপ চালাতে পারবোঃ

    for(let [key, value] of favorite.entries()) {
       console.log(`Key is: ${key} and the value is: ${value}`);
    }

![](https://cdn-images-1.medium.com/max/800/1*u8V9OSjHFIj2e5MOGnvq3A.png)

এভাবেই আমরা জাভাস্ক্রিপ্ট এর ইএস৬ এ নতুন পরিচয় করিয়ে দেওয়া ম্যাপকে ইউজ করতে পারি। এখন এটাতে অন্যান্য ডাটা স্ট্রাকচার থেকে বেশী কি আছে? হ্যাঁ এই

ম্যাপ ডাটা স্ট্রাকচারেঃ

১। আমরা সহজেই লুপ চালাতে পারি।

২। আমরা ম্যাপ এর সাইজ জানতে পারি

৩। আর সবশেষে ম্যাপ থেকে ডাটা ঢুকানো বা ডিলেট করাও অনেক সহজ।

> তবে মনে রাখবেন একদম নতুন কিছু হওয়ায় এই ডাটা স্ট্রাকচারের সাপোর্ট খুব কম। তাই কোথাও ইউজ করা আগে শিউর হয়ে নিবেন এটা সাপোর্টেড কিনা…