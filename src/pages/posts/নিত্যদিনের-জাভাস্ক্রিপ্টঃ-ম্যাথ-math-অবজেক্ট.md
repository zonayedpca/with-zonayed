---
language: বাংলা
tags: []
date: 2020-03-10T16:38:16Z
series: ব্লগ
template: post
title: নিত্যদিনের জাভাস্ক্রিপ্টঃ ম্যাথ (Math) অবজেক্ট
thumb_img_path: ''

---
জাভাস্ক্রিপ্ট এ সম্পূর্ণ বিল্ট-ইন একটা অবজেক্ট আছে ম্যাথমেটিকস এর নিত্যদিনের যাবতীয় সমস্যাগুলো হ্যান্ডল করার জন্যে। সে অবজেক্টটি হচ্ছে `Math` অবজেক্ট। এই অবজেক্ট এর ভিতরে আমাদের নিত্যদিনের অনেক ম্যাথম্যাটিকস প্রব্লেম সল্ভ করার মতো প্রয়োজনীয় ফাংশন বা অন্য কথায় মেথড রয়েছে। এখন ম্যাথ এর কথা শুনে ভয় পাওয়ার কিছু নাই, এই মেথডগুলো খুবই কাজের এবং আমাদের নিত্যই কাজে লাগে।

প্রথমে আমরা আমাদের ক্রোমের কন্সোলের মাধ্যমে দেখে নেই কি কি মেথড আছে এই `Math` অবজেক্ট এরঃ

    console.dir(Math);

![](https://cdn-images-1.medium.com/max/1000/1*I69rn2BPnzSRqJo45zoqvQ.png)

এখন `Math` এর বাম পাশের ত্রিভূজাকৃতির বাটনে ক্লিক করলে পুরো ম্যাথ অবজেক্টটা খুলে যাবে। এবার দেখুন এটার ভিতরে কিছু ব্যাসিক কন্সট্যান্ট আছেঃ

![](https://cdn-images-1.medium.com/max/1000/1*s_fmuiWMLuL0jKZPcykOoA.png)

এখানকার ভ্যালুগুলো একদম কন্সট্যান্ট, এগুলো তাই জাভাস্ক্রিপ্ট এর এই অবজেক্ট এ বিল্ট-ইন ভাবেই সেট করা। যেমন পাই `π` এর কথা আমরা সবাই কমবেশি জানি। এটার ভ্যালুও দেখেন এখানে আছে এবং আপনি অ্যাক্সেস করতে পারবেনঃ

    console.log(Math.PI);

![](https://cdn-images-1.medium.com/max/1000/1*3hjY0VEwTTpMXUZnpbBpeg.png)

বেশীরভাগ ক্ষেত্রেই এগুলো এতো কাজে লাগবে না যদিও, কিন্তু জেনে রাখা ভালো। হয়তো এমন কাজও করতে হতে পারে যেখানে এগুলো লাগতে পারে। আরো যে যে কন্সট্যান্টগুলো আছেঃ

    +--------------+---------------------------------------+
    | প্রপার্টি        | কাজ                                  |
    +--------------+---------------------------------------+
    | Math.E       | Euler কন্সট্যান্ট এর জন্যে, ভ্যালু ২.৭১৮(প্রায়) ।
    | Math.LN2     | ২ এর ন্যাচারাল লগারিদম, ভ্যালু ০.৬৯৩(প্রায়)  |
    | Math.LN10    | ১০ এর ন্যাচারাল লগারিদম, ভ্যালু ২.৩০৩(প্রায়) |
    | Math.LOG2E   | E বেস ২ এর লগারিদম, ভ্যালু ১.৪৪৩(প্রায়)    |
    | Math.LOG10E  | E বেস ১০ এর লগারিদম, ভ্যালু ০.৪৩৪(প্রায়)   |
    | Math.PI      | পাই, ভ্যালু ৩.১৪১৫৯(প্রায়)                 |
    | Math.SQRT1_2 | ১/২ এর স্কয়ার রুট, ভ্যালু ০.৭০৭(প্রায়) |
    | Math.SQRT2   | ২ এর স্কয়ার রুট, ভ্যালু ১.৪১৪(প্রায়) | 
    +-----------+------------------------------------------+

তারপর আরেকটু নিচে দেখবেন অনেকগুলো মেথডও আছে। এখানেই আসল খেলা। এই মেথডগুলো দিয়ে আপনি অনেক কাজ করতে পারবেন।

![](https://cdn-images-1.medium.com/max/1000/1*p8EZHDw8J1RZmFAqr01LNg.png)

মেথডগুলোর ক্ষেত্রেও সেইম কথা, সবগুলোই ঠিক প্রতিদিন কাজে লাগবে এমন না। তবে কিছু আছে যেগুলো খুব বেশীই কাজে লাগে। আমি সেগুলো নিয়েই লিখবো আর বাকীগুলো কোনটা কি করে সেটা বলে দিবো।

যেমন এখানে একটা মেথড আছে `pow()` নামে। এটার কাজ হচ্ছে কোনো সংখ্যার পাওয়ার বের করা। এখন এই মেথডটা দুইটা আর্গুমেন্ট নেয়। প্রথমটা হচ্ছে কোন সংখ্যাটার পাওয়ার বের করতে চাচ্ছেন সেটা, আর দ্বিতীয়টায় কত পাওয়ার দিতে চাচ্ছেন সেটা। যেমন আমি ১০ স্কয়ার বের করতে চাইঃ

    Math.pow(10, 2);

এখানে ১০ হচ্ছে সংখ্যাটা আর ২ হচ্ছে আমরা ১০ এর স্কয়ার চাচ্ছি তাই। এখন এটা প্রিন্ট করলে পাবেনঃ

    console.log(Math.pow(10, 2));

![](https://cdn-images-1.medium.com/max/1000/1*nARuH2pDekFAhmPRBF3Flw.png)

এরকমভাবে বাকী সবগুলো মেথডই কাজ করে। তবে কিছু মেথড আছে যেগুলো অনেক বেশী কাজে লাগে। আমি নিচে সেগুলো নিয়ে লিখবো।

**`Math.floor()`:** এই মেথডের কাজ হচ্ছে দশমিক সংখ্যাকে ইন্টিজার সংখ্যায় নিয়ে যাওয়া। যেমন ধরি আমাদের একটা সংখ্যা আছে `১০.১০` এরকম। এখন এই মেথড সেই সংখ্যাকে দশমিক বাদ দিয়ে ইন্টিজার নাম্বারে নিয়ে যাবে। এক্ষেত্রে `১০.১০` হবে `১০`

    console.log(Math.floor(10.10));

![](https://cdn-images-1.medium.com/max/1000/1*6TqREzHOh0vJgMB7RNnacw.png)

যদি এই সংখ্যাটা `১০.১০` না হয়ে `১০.৯৯`হতো তাহলে `Math.floor()` ইউজ করলে সেটার রেজাল্ট কি হতো? হ্যাঁ এটা পুরো `.৯৯` ই বাদ দিয়ে দিবে। আর ফলাফল হবে শুধুমাত্র `১০`

    console.log(Math.floor(10.99));

![](https://cdn-images-1.medium.com/max/1000/1*q5IM3XFaRuJPJP-PqXENeg.png)

**`Math.max()` এবং `Math.min()`:** নামটা দেখেই হয়তো ভেবে ফেলেছেন এগুলোর কাজ কি হতে পারে। কিন্তু তাও আমি দেখাবো, কারণ এরা আসলে একটু অন্যরকমভাবেই কাজ করে। দুইটা মেথডই আর্গুমেন্ট হিসেবে নাম্বার নেয়, যতগুলো ইচ্ছা ততগুলো নাম্বারই দিতে পারবেন। এরা সবগুলোর মধ্যে ম্যাক্সিমাম `Math.max()` বা মিনিমাম `Math.min()` বের করে দিবে।

    console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 0));

![](https://cdn-images-1.medium.com/max/1000/1*QHALLbID9_vLEUMOw8RGcA.png)

    console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, 0));

![](https://cdn-images-1.medium.com/max/1000/1*Lveta_Dj-SUxR4kkYOuN3A.png)

এখন হয়তো ভাবছেন একটা অ্যারে পাস করে দিলেই মনে হয় এগুলো মিনিমান আর ম্যাস্কিমাম বের করে দিবে। ধরি আমাদের একটা অ্যারে আছেঃ

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

এখন এই অ্যারেটা দুইটাতেই পাস করে দেখবো আর্গুমেন্ট হিসেবেঃ

    console.log(Math.max(numbers));

![](https://cdn-images-1.medium.com/max/1000/1*RTv1iaTQccfJ_i-VbJIdgQ.png)

    console.log(Math.min(numbers));

![](https://cdn-images-1.medium.com/max/1000/1*U6zWvLbcbQ7416XdbcgEJw.png)

কিন্তু দেখুন এখানে `NaN` আসতেছে। এর মানে হচ্ছে **N**ot **a** **N**umber. কিন্তু কেনো? হ্যাঁ, ভালো করে খেয়াল করুন এই দুইটা মেথড কিন্তু নাম্বারগুলো একটার পর আরেকটা আর্গুমেন্ট হিসেবে নেয়, আমরা দিয়েছি অ্যারে। আর তাই এটা বলছে নাম্বার না। এখন এটা খুব সহজেই ফিক্স করা যায় ইএস৬ এর স্প্রেড অপারেটর ইউজ করেঃ

    console.log(Math.max(...numbers));

![](https://cdn-images-1.medium.com/max/1000/1*lBHpWvaz1HgxFpKI2Ryixg.png)

    console.log(Math.min(...numbers));

![](https://cdn-images-1.medium.com/max/1000/1*CIT7Z0_CPJ2zLWhMe4X-Qw.png)

এবার একদম যেভাবে চাচ্ছেন সেভাবেই কাজ করতেছে।

**`Math.random()`:** রেন্ডম নাম্বার জেনারেট করার জন্যে। এই মেথড মূলত কোনো আর্গুমেন্ট নেয় না। তবে এটা শুধুমাত্র `০` থেকে `১` এর ভিতরে যেকোনো নাম্বার আউটপুট দেয়। মানে জাস্ট রেন্ডম নাম্বার জেনারেট করে। কিন্তু সেই নাম্বার হবে `০` থেকে শুরু করে `১` এর ভিতরেঃ

    console.log(Math.random());

একবার রান করলেঃ

![](https://cdn-images-1.medium.com/max/1000/1*hxl_Cz8sOmDtiSxNlqQgmg.png)

আবার রান করালে আরেকটা পাবেনঃ

![](https://cdn-images-1.medium.com/max/1000/1*bYptHfVR6Bi1TQpaDyV91g.png)

এভাবেই এটা আপনাকে একেকসময় একেকটা নাম্বার দিবে `০` থেকে শুরু করে `১` ভিতরে। কিন্তু এখন যদি আমরা আরো বড় নাম্বার চাই, তাহলে একটু ট্রিক্স খাঁটাতে হবে। আপনি যত নাম্বার পর্যন্ত চাচ্ছেন তত দিয়ে পুরোটাকে গুণ করে দিলেই হবে। ধরি আমরা ১০০ এর ভিতরে রেন্ডম নাম্বার চাচ্ছিঃ

    console.log(Math.random() * 100);

এখন ০ থেকে ১০০ এর ভিতরে রেন্ডম নাম্বার পাবেনঃ

![](https://cdn-images-1.medium.com/max/1000/1*r__DRlSmCGM8jQN4AGmnWQ.png)

এখন এই মেথডটা খেলার জন্যে মনে হলেও এটা ঠিক যেমন গেইমস বানাতে কাজে লাগে, তেমনি আপনার অ্যাপ্লিকেশনে এমন কোনো ফিচার থাকলে যেটা আপনার ইউজারের জন্যে অটোমেটিক কিছু একটা সাজেস্ট করে দিবে কোনো তথ্য ছাড়াই, তাহলে এই মেথডটা অনেক কাজে লাগে। এটার সাথে আরো কিছু মেথড ইউজ করে ইন্টিজার নাম্বারও আউপুট পেতে পারেন। যেমন আমরা একটু আগে `Math.floor()` এর কথা বলেছিলাম। এটা এই রেন্ডমের মেথডের সাথে ইউজ করে আমরা রেন্ডম ইন্টিজার নাম্বার পেতে পারিঃ

    console.log(Math.floor(Math.random() * 100));

![](https://cdn-images-1.medium.com/max/1000/1*XzkfShEI7iPtJ3SE2gld_A.png)

**`Math.round()`:** এটার কাজও অনেকটা `Math.floor()` এর মতোই। তবে এটা একটু অন্যরকমভাবে কাজ করে। এটা যদিও ইন্টিজার নাম্বারেই নিয়ে যায়। কিন্তু এটা দশমিক নাম্বারটাকে ফেলে দেয় না, বরং কাছের ইন্টিজার নাম্বারে নিয়ে যায়। ম্যাথের মতোই যদি দশমিকের ভ্যালু ৫ এর কম হয় তাহলে আগের ইন্টিজার নাম্বারে নিয়ে যায়, আর যদি দশমিকের নাম্বার ৫ বা ৫ এর বেশি হয় তাহলে সেটা পরের ইন্টিজার নাম্বারে নিয়ে যায়। যেমন আমরা ঠিক আগেরটার মতোই ১০.১০ কে ইন্টিজার নাম্বারে যদি নিয়ে যেতে চাই এই মেথড ইউজ করেঃ

    console.log(Math.round(10.10));

![](https://cdn-images-1.medium.com/max/1000/1*HsqZBJ8DzqUXpmoc6YQhEw.png)

১০.৪৯ হলেঃ

    console.log(Math.round(10.49));

![](https://cdn-images-1.medium.com/max/1000/1*8Iu6jAri_1HiZsVm6XiMQQ.png)

কিন্তু ১০.৫০ হলেঃ

    console.log(Math.round(10.50));

![](https://cdn-images-1.medium.com/max/1000/1*K6pwgWwCYP-GFiaG1MgTnQ.png)

৫ বা এর বেশি হলেই পরের নাম্বারেঃ

    console.log(Math.round(10.99));

![](https://cdn-images-1.medium.com/max/1000/1*Dcm_i_wVhPcseBb-czDsaQ.png)

এখন এই মেথড নাকি ঐটা ব্যবহার করবেন সেটা আপনি যে সমস্যা সমাধান করবেন সেটার উপর ডিপেন্ড করবে। আপনার যেটায় কাজ হবে সেটাই ইউজ করবেন। এই মেথডটাও সেইমভাবে রেন্ডম মেথডের সাথে ইউজ করা যাবেঃ

    console.log(Math.round(Math.random() * 100));

![](https://cdn-images-1.medium.com/max/1000/1*t939qKzuTIyaGFS_mFurdw.png)

এভাবেই একটা মেথডের ভিতরে আরেকটা ঢুকিয়ে অনেক মজার মজার কাজ করা যায় যেগুলো সত্যি বললে আমার লেখাত খেলার মতো মনে হলেও বাস্তবে অনেক কাজে লাগে।

আর বাকী যে মেথডগুলো আছে সেগুলোও আপনার কাজে আসতে পারে।

    +----------------+-------------------------------------------------+
    | মেথড          | কাজ                                            |
    +----------------+-------------------------------------------------+
    | Math.abs(x)    | একটা সংখ্যার absolute ভ্যালু রিটার্ণ করে               ।
    | Math.acos(x)   | একটা সংখ্যার arccosine ভ্যালু রিটার্ণ করে              |
    | Math.acosh(x)  | একটা সংখ্যার hyperbolic arccosine ভ্যালু রিটার্ণ করে   |
    | Math.asin(x)   | একটা সংখ্যার arcsine ভ্যালু রিটার্ণ করে                |
    | Math.asinh(x)  | একটা সংখ্যার hyperbolic arcsine ভ্যালু রিটার্ণ করে     |
    | Math.atan(x)   | একটা সংখ্যার arctangent ভ্যালু রিটার্ণ করে             |
    | Math.atan2(y,x)| ... |
    | Math.atanh(x)  | একটা সংখ্যার hyperbolic arctangent রিটার্ণ করে | 
    | Math.cbrt(x) | একটা সংখ্যার কিউব রুট রিটার্ণ করে | | Math.ceil(x) | ইন্টিজার নাম্বার রিটার্ন করে(আর্গুমেন্ট এর সমান বা বড় সংখ্যা)। | Math.clz32(x) | ৩২-বিট বাইনারী সংখ্যা রিটার্ণ করে | | Math.cos(x) | একটা সংখ্যার cosine রিটার্ণ করে | | Math.cosh(x) | একটা সংখ্যার hyperbolic cosine রিটার্ণ করে | | Math.exp(x) | Euler's E^x রিটার্ণ করে, যেখানে x হচ্ছে আর্গুমেন্ট | | Math.expm1(x) | exp(x) থেকে ১ বাদ দিয়ে রিটার্ণ করে | | Math.floor(x) | দশমিক বাদ দিয়ে ইন্টিজার নাম্বার রিটার্ণ করে | | Math.fround(x) | ফ্লোটিং সংখ্যা রিটার্ণ করে | | Math.hypot(...)| ... | | Math.imul(x,y) | দুই আর্গুমেন্ট গুণ করে সেটা রিটার্ণ করে | | Math.log(x) | একটা সংখ্যার ন্যাচারাল লগারিদম রিটার্ণ করে | | Math.log1p(x) | একটা সংখ্যার 1 + x(ln) ন্যাচারাল লগারিদম রিটার্ণ করে | | Math.log2(x) | একটা সংখ্যার বেস ২ এর লগারিদম রিটার্ণ করে | | Math.log10(x) | একটা সংখ্যার বেস ১০ এর লগারিদম রিটার্ণ করে | | Math.max(...) | সবগুলো আর্গুমেন্ট থেকে বড় সংখ্যাটা রিটার্ণ করে | | Math.min(...) | সবগুলো আর্গুমেন্ট থেকে ছোটো সংখ্যাটা রিটার্ণ করে | | Math.pow(x,y) | x টু দি পাওয়ার y এর ভ্যালু রিটার্ণ করে | | Math.random() | ০ থেকে ১ এর ভিতরে রেন্ডম নাম্বার রিটার্ণ করে | | Math.round(x) | একটা দশমিক নাম্বারের কাছের ভ্যালু রিটার্ণ করে | | Math.sign(x) | একটা সংখ্যার sign রিটার্ণ করে | | Math.sin(x) | একটা সংখ্যার sine ভ্যালু রিটার্ণ করে | | Math.sinh(x) | একটা সংখ্যার hyperbolic sine ভ্যালু রিটার্ণ করে | | Math.sqrt(x) | একটা সংখ্যার (পজিটিভ) স্কয়ার রুট রিটার্ণ করে | | Math.tan(x) | একটা সংখ্যার tangent ভ্যালু রিটার্ণ করে | | Math.tanh(x) | একটা সংখ্যার hyperbolic tangent ভ্যালু রিটার্ণ করে | | Math.trunc(x) | দশমিক অংশ বাদ দিয়ে ইন্টিজার সংখ্যা রিটার্ণ করে | +----------------+-------------------------------------------------+

এই মেথডগুলো নিয়ে নিজে প্র্যাক্টিস করলে এদের সম্পর্কে আরো জানতে পারবেন।

তবে আমি শেষ করার আগে মজার একটা জিনিস দেখাই, আপনি চাইলে জাভাস্ক্রিপ্ট এ সিম্পল এক লাইনের কোডের মিডিয়ামের মতো একটা লেখা পড়তে কতো মিনিট লাগতে পারে সেটা ক্যালকুলেট করতে পারবেন। ধরি আমাদের এরকম একটা লেখা আছেঃ

    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet comes from a line in section 1.10.32Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet comes from a line in section 1.10.32Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet comes from a line in section 1.10.32Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.

এখন এই লেখার উপর কাজ করতে হলে এটাকে আগে একটা ভ্যারিয়েবলে নিয়ে যেতে হবেঃ

    const text = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet comes from a line in section 1.10.32Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet comes from a line in section 1.10.32Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet comes from a line in section 1.10.32Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.'

এখন আমরা আমাদের সেই কোড লিখবো যেটা একলাইনেই ম্যাজিক্যালি এই লেখা পড়তে কতক্ষন লাগতে পারে সেটা বলে দিতে পারেঃ

    const readingTime = Math.ceil(text.split(/\s/g).length / 200);

ব্যাস এইটুকুই কোড রিডিং টাইম বের করার জন্যে। এখন আরেকটু সাজিয়ে লিখিঃ

    console.log(`${readingTime} Min Read`);

![](https://cdn-images-1.medium.com/max/1000/1*W2QzkfBkFm1061GAxLkHFg.png)

ব্যাস হয়ে গেলো… এখানে `Math` এর একটা মেথড ইউজ করা হলেও আরো অনেককিছু আছে যেগুলো হয়তো বুঝতে পারবেন না। তবে জাস্ট দেখানোর জন্যে এরকম এই মেথডগুলো কতটুকু পাওয়ারফুল হতে পারে। আজকে এই পর্যন্তই।

***

\[wysija_form id=”6″\]