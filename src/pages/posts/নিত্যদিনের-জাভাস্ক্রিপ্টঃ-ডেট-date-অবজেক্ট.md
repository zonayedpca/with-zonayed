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
date: 2018-08-28T16:38:09Z
series: ব্লগ
template: post
title: নিত্যদিনের জাভাস্ক্রিপ্টঃ ডেট (Date) অবজেক্ট
thumb_img_path: "/images/dailyjs.gif"

---
আমাদের ওয়েব অ্যাপ্লিকেশনে, ওয়েবসাইটে বা ওয়েব সার্ভারে সময় নিয়ে অনেক কাজ করতে হতে পারে। আর তাই জাভাস্ক্রিপ্ট এ বিল্ট-ইনভাবেই এর জন্যে একটা অবজেক্ট আছে। সেটা হচ্ছে `Date` অবজেক্ট। সময় নিয়ে বিভিন্নভাবে কাজ করার জন্যে এই অবজেক্ট এর বেশকিছু মেথডও আছে। আর এগুলো খুবই কাজের, কারণ আমাদের আলাদা করে সময় নিয়ে খুব বেশী ভাবতে হয় না যেহেতু জাভাস্ক্রিপ্ট এ বিল্ট-ইনভাবেই এরা আছে।

বাই ডিফল্ট এই `Date` অবজেক্ট আপনি আপনার যে ইনভারোমেন্টে অ্যাপ্লিকেশন চালাচ্ছেন সেটা অনুযায়ীই সময়ের হিসাব করবে। এখন এই `Date` অবজেক্ট একটু অন্যরকমভাবে কাজ করে অন্যান্য গ্লোবাল অবজেক্ট এর সাথে তুলনা করলে। `Date` অবজেক্ট একমাত্র ইউজ করা যায় `Date` নামে একটা কন্সট্রাকটর ফাংশনকে কল করার মাধ্যমে।

এখন এই ডেট কন্সট্রাকটর ফাংশনের নিজস্ব কিছু মেথড আছেঃ

    console.dir(Date);

![](https://cdn-images-1.medium.com/max/1000/1*kr-BYd-yg0TIuWYLvXtdTA.png)

এটা একটা কন্সট্রাকটর ফাংশন, বাম পাশে ত্রিভুজাকৃতির বাটনটায় ক্লিক করলে এটা খুলে যাবেঃ

![](https://cdn-images-1.medium.com/max/1000/1*rl5xwu7HQPNj59ydp23y6A.png)

এখানে কিছু মেথড দেখতে পাবেন যেগুলো এই `Date` দিয়ে সরাসরি অ্যাক্সেস করতে পারবেন।

* `Date.now()`: বর্তমান সময় মিলিসেকেন্ডে রিটার্ণ করবেঃ

  console.log(Date.now());

![](https://cdn-images-1.medium.com/max/1000/1*G01QDKtZ8mnTz0OIrjMWww.png)

এই মিলিসেকেন্ড হিসেব করা হয় ১৯৭০ সালের পহেলা জানুয়ারী থেকে আজকে আপনার এই কোড রান করার সময় পর্যন্ত কতো মিলিসেকেন্ড হয়েছে সেটার উপর ভিত্তি করে। পরে আরো মেথড ইউজ করে এই মিলিসেকেন্ড থেকেও ইউজফুল কাজে লাগানোর মতো সময় বের করতে পারবেন যেগুলো নিয়ে পরে বিস্তারিত লেখা হয়েছে।

* `Date.parse()`: এটার সাহায্যে একটা ডেটের স্ট্রিং কে নরমাল ডেট অবজেক্ট এ নিয়ে যেতে পারবেন। এটাও মিলিসেকেন্ড আকারেই দেখাবে। আগের মতোই ১৯৭০ সালের পহেলা জানুয়ারী থেকে আপনার দেওয়া ডেট পর্যন্ত কত মিলিসেকেন্ড হয়েছে সেটাই রিটার্ণ করবে। এখন এই ডেটের স্ট্রিং এরও ফরম্যাট আছে। ফরম্যাট ঠিক না হলে `NaN`(**N**ot **a** **N**umber) রিটার্ণ পাবেন। তবে আপনাকে এটা লিখতে হবে না, আপনি এই স্ট্রিংও বের করতে পারবেন। এটা নিয়ে পরে বিস্তারিত লেখা হয়েছে। যেমন আমরা যদি ১৯৭০ সালের পহেলা জানুয়ারীর ডেট স্ট্রিং টাই পাস করি এই মেথডেঃ

  console.log(Date.parse('01 Jan 1970 00:00:00 GMT'));

![](https://cdn-images-1.medium.com/max/1000/1*eIjPQCqtq2RElUaFU2LUiQ.png)

`0` দেখাচ্ছে, কারণ এটা গণনা শুরুই করে এই সময় থেকে। এখন ডেট চেঞ্জ করে দিলেঃ

    console.log(Date.parse('10 Oct 1996 21:29:00 GMT'));

![](https://cdn-images-1.medium.com/max/1000/1*h8wZeLsiUsg2YcpSBlKO_w.png)

* `Date.UTC()`: এটাও মিলিসেকেন্ড রিটার্ণ করে। সেক্ষেত্রে এটা বছর, মাস, দিন, ঘন্টা, মিনিট, সেকেন্ড পৃথক পৃথক আর্গুমেন্ট হিসেবে নেয় আর সেটার উপর ভিত্তি করে ১৯৭০ সাল থেকে উক্ত সময় পর্যন্ত মিলিসেকেন্ড রিটার্ণ করে।

আর যে প্রোটোটাইপ মেথড দেখবেন সেগুলো এই ফাংশন কন্সট্রাকটর দিয়ে কোনো অবজেক্ট তৈরী করলে সেই অবজেক্ট দিয়ে অ্যাক্সেস করতে পারবেন।

এখন এই `Date()` কন্সট্রাকটর ফাংশনটা থেকেও সরাসরি আউটপুট পাওয়া যায়ঃ

    const date = Date();

এভাবে `Date()` কন্সট্রাকটর ফাংশনকে কল করলে এটা বর্তমান সময়টাকে একটা স্ট্রিং আকারে রিটার্ণ করেঃ

    console.log(date);

![](https://cdn-images-1.medium.com/max/1000/1*wTVRbXOvrNLgLXcDRDxexQ.png)

এখন এটার টাইপ দেখলে দেখবেন এটা নিতান্তই একটা স্ট্রিংঃ

    typeof date

![](https://cdn-images-1.medium.com/max/1000/1*tZLr1xEK9U3t3eyoY98M1Q.png)

এখন স্ট্রিং হলে স্ট্রিং এর মেথডগুলোর অ্যাক্সেসই পাবেন, ডেট অবজেক্ট এর যে বিল্ট-ইন মেথডগুলো আছে সেগুলোর অ্যাক্সেস পাবেন না। তাছাড়া আমরা জানি কোনো কন্সট্রাকটর থেকে অবজেক্ট বানাতে হলে `new` কীওয়ার্ড লাগবে। আর তাই `Date()` কন্সট্রাকটর ফাংশনটাকে `new` কীওয়ার্ড দিয়ে কল করতে হয়। তাহলে আমরা আসলে ডেট অবজেক্ট পাবো এবং একই সাথে সেই কন্সট্রাকটরের প্রোটোটাইপের মেথডগুলো অ্যাক্সেস করতে পারবো।

এখন এখানেও এই কন্সট্রাকটর ফাংশনকে কয়েকভাবে কল করা যায়ঃ

* কোনো আর্গুমেন্ট ছাড়া, যেমনঃ`new Date()` । এটা ঠিক বর্তমান সময়টাই দেখাবেঃ

  console.log(new Date());

![](https://cdn-images-1.medium.com/max/1000/1*hWuEh-6gZNQmd1qs6WYnGA.png)

* অন্য কোনো সময়ের বছর, মাস, দিন, ঘন্টা, মিনিট, সেকেন্ড, মিলিসেকেন্ড আর্গুমেন্ট হিসেবে দিয়ে, যেমনঃ `new Date(year, month, day, hours, minutes, seconds, milliseconds)` । তবে এখানে `year` আর `month` ছাড়া বাকী সবগুলো অপশনাল। `year` সরাসরি বসরের নাম্বারটা নিবে, যেমন `2018` । মাস ইন্ডেক্স নাম্বার নিবে `0` থেকে `11` এর মধ্যে, এখানে (`0`-জানুয়ারী থেকে শুরু করে `11`-ডিসেম্বর পর্যন্ত)। এটা যদি আগের বা ভবিষ্যৎ এর কোনো সময়ের ডেট অবজেক্ট তৈরী করতে চান তাহলে এভাবে সবকিছু বলে দিতে হবে। যেমন ধরেন আমরা `1996` সালের অক্টোবর(ইন্ডেক্স নাম্বার`9`) মাসের `19` তারিখ দিয়ে একটা ডেট অবজেক্ট বানাতে চাচ্ছিঃ

  console.log(new Date(1996, 9, 19));

![](https://cdn-images-1.medium.com/max/1000/1*GoNiQZiCCXVbskAqGPtHBg.png)

মনে রাখবেন এখানে শুধুমাত্র বসর আর মাসের ইন্ডেক্স নাম্বারটাই প্রয়োজনীয়, বাকী আর্গুমেন্টগুলো অপশনাল। আপনি যেরকমভাবে ডেট অবজেক্টটা চাইবেন ঐ পরিমাণ তথ্য আর্গুমেন্ট হিসেবে পাস করবেন। এখানে আমি শুধুমাত্র দিন, মাস আর বসর দেওয়ায় সেটা ঠিক সেই দিনের, সেই মাসের এবং সেই তারিখের সময়টাই রিটার্ণ করেছে। আর বাকীগুলো বাই ডিফল্ট ভ্যালু, যেমন এখানে সময় হচ্ছে `00:00:00` , মানে দিনের একদম দিনের শুরুতে যেহেতু আমি ঘন্টা, মিনিট, সেকেন্ড বলে দেইনি। তাই এটা একদম শুরু থেকে বাই ডিফল্টভাবে ধরে নেয়। আবার আপনি যদি মাসের ইন্ডেক্স নাম্বার বেশী দেন, মানে ১১ এরও বেশী। বা আপনি যদি দিনের নাম্বারটাও বেশী দেন, তাহলে জাভাস্ক্রিপ্ট ঠিকঠাক ক্যালকুলেট করে তারিখটা বের করে দেখাবে। যেমন মাস `12` দিলে সেটা পরের বছরের জানুয়ারী হয়ে যাবে। বা তারিখ `32` দিলে সেটা পরের মাসে চলে যাবেঃ

    console.log(new Date(1996, 12, 32));

![](https://cdn-images-1.medium.com/max/1000/1*mv6kxQnrCuEeonxHtf-Pbg.png)**জাভাস্ক্রিপ্ট ক্যালকুলেট করে কাঙ্খিত সময়টাই দেখাবে**

* শুধুমাত্র মিলিসেকেন্ড আর্গুমেন্ট হিসেবে পাস করে। এই ব্যাপারটা একটু অন্যরকম। এটার সিস্টেম হচ্ছে আপনি মিলিসেকেন্ড দিবেন, জাভাস্ক্রিপ্ট একটা নির্দিষ্ট সময় এর সাথে সেই মিলিসেকেন্ড যোগ করে যে সময় হবে সেটার অবজেক্ট তৈরী করবে। তবে কোন সময়ের সাথে যোগ করে জাভাস্ক্রিপ্ট এই হিসাব করবে সেটাও আগে থেকেই ডিফাইন করা জাভাস্ক্রিপ্ট এর ভিতরে। জাভাস্ক্রিপ্ট ১৯৭০ সালের পহেলা জানুয়ারী থেকে সময় গণনা শুরু করবে। তার মানে আপনি `o` মিলিসেকেন্ড দিলে ঠিক ঐদিনটাই রিটার্ণ করবেঃ

  console.log(new Date(0));

![](https://cdn-images-1.medium.com/max/1000/1*ePGrphDj55PoF-nc3g79-A.png)**এটা আসলে GMT টাইম ধরে হিসাব করে, আর আমি ইন্ডিয়াতে থাকার কারণে +05ঃ30 যোগ হয়েছে।**

এখন যদি `100000000000` মিলিসেকেন্ড দেই তাহলে এটা ১৯৭০ সালের জানুয়ারীর ১ তারিখের সাথে এই মিলিসেকেন্ড অ্যাড করে যে তারিখে যেয়ে পড়বে সে তারিখটাই রিটার্ণ করবেঃ

    console.log(new Date(100000000000));

![](https://cdn-images-1.medium.com/max/1000/1*Zad4oxBlBiuVlLZJjBlfrw.png)**হিসেব করে ঠিক এই দিন, ঘন্টা, সেকেন্ড, মিলিসেকেন্ডটাই পাবেন**

* ডেট স্ট্রিং আর্গুমেন্ট হিসেবে পাস করে, যেমন `new Date(‘Tue Aug 28 2018 13:13:20 GMT+0530 (India Standard Time)')`। আপনি একটা ডেট স্ট্রিং থেকেও ডেট অবজেক্ট তৈরী করতে পারবেন। যেমন আমরা শুরুর দিকেই একটা ডেট স্ট্রিং তৈরী করেছিলাম। সেটাকে ডেট অবজেক্ট এ নিতে চাইলে জাস্ট এভাবে পাস করে দিলেই হবেঃ

  new Date(date)

এখন এটার টাইপ দেখলে দেখবেন এটাও এখন ডেট অবজেক্ট হয়ে গেছেঃ

    console.log(typeof new Date(date));

![](https://cdn-images-1.medium.com/max/1000/1*IAKwZG7tco82lBdbGQUr2A.png)

এখন এই লেখায় আমরা বর্তমান সময় নিয়েই মানে `new Date()` নিয়েই কাজ করবো, যেহেতু মেথডগুলোর আসল কাজটা বুঝে আসলে পরে বর্তমান, অতীত বা ভবিষ্যৎ এর ডেট নিয়ে কাজ করতে আর কোনো অসুবিধা হবে না।

এখন আমরা একটা বর্তমান সময় নিয়ে একটা ডেট অবজেক্ট তৈরী করিঃ

    const dateObj = new Date();

এখন এখানে `dateObj` হচ্ছে একটা ডেট অবজেক্টঃ

    typeof dateObj

![](https://cdn-images-1.medium.com/max/1000/1*4v6qI7ZynWkLyf76JXFaXA.png)

এখন আমরা এটার ভিতর থেকে ডেট এর সব মেথডগুলো দেখতে পারি ক্রোমের কন্সোলের সাহায্যেঃ

    console.dir(dateObj);

![](https://cdn-images-1.medium.com/max/1000/1*GZq7S35Kjbx8Z2RhA1tEBw.png)

এখন এখানে বাম পাশের ত্রিভুজাকৃতির বাটনে ক্লিক করলে এই অবজেক্ট টা খুলে যাবে। এখন এখানে `__proto__` এর ভিতরে সবগুলো মেথড পাবেনঃ

![](https://cdn-images-1.medium.com/max/1000/1*4wnZCVFBjOprFfKTklSoFQ.png)

এখন এই মেথডগুলো আপনি যেই ডেট অবজেক্টটা তৈরী করলেন সেটার উপর অ্যাপ্লাই হবে এবং আপনাকে সে ডেট থেকে মিনিট, ঘণ্টা, সেকেন্ড বা বিভিন্ন ফরম্যাটে সময় দেখাবে। মেথডগুলোর উদ্দেশ্য ঠিক তাই। আমি নিচে কমন কিছু মেথডের ইউসেজ দেখাবো আমাদের তৈরী করা `dateObj` এর উপর অ্যাপ্লাই করে। আপনি চাইলে যেকোনো ডেট অবজেক্ট এর উপরেই একইভাবে এই মেথডগুলো অ্যাপ্লাই করতে পারবেন।

আমরা যে সময়ের উপর অবজেক্ট তৈরী করেছি সেটা থেকে প্রয়োজনীয় তারিখ, দিন, মাস, বছর, সেকেন্ড, মিলিসেকেন্ড, মিনিট, ঘন্টা বের করতে চাইলে কিছু হ্যান্ডি মেথড আছেঃ

* `getDate()`: উক্ত সময় থেকে তারিখটা বের করতে চাইলে। তারিখ মানে আজকে কত তারিখ সেটা
* `getDay()`: দিন বের করতে, রবিবার মানে `0`, এবং এভাবে শুরু করে সাপ্তাহের শেষ দিন শনিবার হলে রিটার্ণ পাবেন `6`
* `getFullYear()`: কোন বছর সেটা জানতে চাইলে এই মেথড ইউজ করতে পারবেন। এটা আপনাকে উক্ত সময়ের বছরটা নাম্বারে রিটার্ণ করবে।
* `getHours()`: ঘন্টা রিটার্ণ করবে, উক্ত দিনের কোন ঘণ্টায় আপনার অবজেক্টটি রয়েছে সেই ঘন্টা
* `getMilliseconds()`: মিলিসেকেন্ড রিটার্ণ করবে, কত ঘন্টা, মিনিট, সেকেন্ড হওয়ার পর কতো মিলিসেকেন্ড হয়েছে সেটা
* `getMinutes()`: কত মিনিটে আছে আপনার উক্ত অবজেক্ট
* `getMonth()`: কোন মাসে আছে আপনার অবজেক্ট
* `getSeconds()`: সেকেন্ডটা রিটার্ণ করবে

  console.log(`getDate: ${dateObj.getDate()}`);
  console.log(`getDay: ${dateObj.getDay()}`);
  console.log(`getFullYear: ${dateObj.getFullYear()}`);
  console.log(`getHours: ${dateObj.getHours()}`);
  console.log(`getMilliseconds: ${dateObj.getMilliseconds()}`);
  console.log(`getMinutes: ${dateObj.getMinutes()}`);
  console.log(`getMonth: ${dateObj.getMonth()}`);
  console.log(`getSeconds: ${dateObj.getSeconds()}`);

![](https://cdn-images-1.medium.com/max/1000/1*EQ6vyQFyfiI1TVeF2Iqs-A.png)

আরো কিছু মেথড আছে যেগুলো আপনার ১৯৭০ সাল থেকে আপনার অবজেক্ট এর সময় পর্যন্ত কিছু ভ্যালু রিটার্ণ করবেঃ

* `getTime()`: পুরোটা সময় ১৯৭০ সাল থেকে আপনার ডেট অবজেক্ট পর্যন্ত কতো মিলিসেকেন্ড হয়েছে সেটা রিটার্ণ করবে।
* `getYear()`: কোনো কারণে এটা ১৯০০ সাল(**১৯০০সাল থেকে কিন্তু**) থেকে এখন পর্যন কয় বছর হয়েছে সেটা রিটার্ণ করবে।

  console.log(`getTime: ${dateObj.getTime()}`);
  console.log(`getYear: ${dateObj.getYear()}`);

![](https://cdn-images-1.medium.com/max/1000/1*QrvcRZ1v3aMwHHtaCR0YUw.png)

আরো কিছু মেথড আছে যেগুলো UTC এর সাথে তুলনা করার জন্যে বা UTC টাইমের সাথে কিছু কাজ করার জন্যে ব্যবহৃত হয়। এখন UTC মানে হচ্ছে **Universal Time Coordinated.** এটা মূলত **GMT**(Greenwich Mean Time) বলে পূর্বে পরিচিত ছিলো। এটা হচ্ছে আন্তর্জাতিক সময়। আন্তর্জাতিক সময়ের সাথে আপনার সময়ের বিভিন্ন অপারেশন চালানোর জন্যেই এই মেথডগুলো ইউজ করা হয়।

* getTimezoneOffset(): আপনার ডেট অবজেক্ট এর সাথে UTC টাইম ডিফারেন্স দেখাবে(মিনিটে)। আপনি UTC টাইম থেকে এগিয়ে থাকলে সেটা নেগেটিভ ভ্যালু হিসেবে আসবে। আর UTC টাইম থেকে পিছিয়ে থাকলে পজিটিভ ভ্যালু আসবে। যেমন বাংলাদেশ UTC টাইম থেকে ৬ ঘন্টা এগিয়ে, আর ইন্ডিয়া সাড়ে ৫ ঘন্টা। তাই বাংলাদেশের ক্ষেত্রে `-360` দেখাবে, আর ইন্ডিয়ার ক্ষেত্রে `-330` দেখাবে।
* `getUTCDate()`: UTC টাইম অনুযায়ী শুধুমাত্র আপনার ডেট অবজেক্ট এর তারিখটা দেখাবে।
* `getUTCDay()`: একইরকমভাবে UTC টাইম অনুযায়ী আপনার ডেট অবজেক্ট এর কি বার সেটা `0` থেকে `6` পর্যন্ত ইন্ডেক্স আকারে দেখাবে। রবিবারের জন্যে `0` আর এভাবে সাপ্তাহের শেষদিন শনিবারের জন্যে `6` দেখাবে।
* `getUTCFullYear()`: আপনার ডেট অবজেক্ট UTC টাইম অনুযায়ী কোন বছরে আছে সেই বছর দেখাবে।
* `getUTCHours()`: আপনার ডেট অবজেক্ট UTC টাইম অনুযায়ী কোন ঘন্টায় আছে সেটা দেখাবে।
* `getUTCMilliseconds()`: আপনার ডেট অবজেক্ট UTC টাইম অনুযায়ী কোন মিলিসেকেন্ডে আছে সেটা দেখাবে।
* `getUTCMinutes()`: আপনার ডেট অবজেক্ট UTC টাইম অনুযায়ী কোন মিনিটে আছে সেটা দেখাবে।
* `getUTCMonth()`: আপনার ডেট অবজেক্ট UTC টাইম অনুযায়ী কোন মাসে আছে সেই মাসটা `0` থেকে `11` নাম্বারে ইন্ডেক্স আকারে দেখাবে। এখানে `0` মানে জানুয়ারী আর `11` মানে ডিসেম্বর।
* `getUTCSeconds()`: আপনার ডেট অবজেক্ট UTC টাইম অনুযায়ী কোত সেকেন্ডে আছে সেটা দেখাবে।

  console.log(`getUTCDate: ${dateObj.getUTCDate()}`);
  console.log(`getUTCDay: ${dateObj.getUTCDay()}`);
  console.log(`getUTCFullYear: ${dateObj.getUTCFullYear()}`);
  console.log(`getUTCHours: ${dateObj.getUTCHours()}`);
  console.log(`getUTCMilliseconds: ${dateObj.getUTCMilliseconds()}`);
  console.log(`getUTCMinutes: ${dateObj.getUTCMinutes()}`);
  console.log(`getUTCMonth: ${dateObj.getUTCMonth()}`);
  console.log(`getUTCSeconds: ${dateObj.getUTCSeconds()}`);

![](https://cdn-images-1.medium.com/max/1000/1*BF36Jr3XjqcL_BAmmF6hMQ.png)

এতক্ষন আমরা কিভাবে বিভিন্নরকমভাবে আমরা আমাদের ডেট অবজেক্ট থেকে ডেট বের করে আনতে পারি সেগুলো দেখলাম। ঠিক এগুলোর মতোই এখন ডেট সেট করার মেথডও আছে। আপনি এই মেথডগুলো ডেকে ডেকে আপনার ডেট অবজেক্ট এর কাঙ্খিত সময় নতুন করে সেট করতে পারবেন। এই মেথডগুলোও নরমাল আর UTC টাইমের জন্যে আলাদা আলাদা করে আছে।

* `setDate()`: আপনার ডেট অবজেক্ট এর তারিখ সেট করার জন্যে
* `setFullYear()`: আপনার ডেট অবজেক্ট এর বছর সেট করার জন্যে
* `setHours()`: আপনার ডেট অবজেক্ট এর ঘণ্টা সেট করার জন্যে
* `setMilliseconds()`: আপনার ডেট অবজেক্ট এর মিলিসেকেন্ড সেট করার জন্যে
* `setMinutes()`: আপনার ডেট অবজেক্ট এর মিনিট সেট করার জন্যে
* `setMonth()`: আপনার ডেট অবজেক্ট এর মাস সেট করার জন্যে
* `setSeconds()`: আপনার ডেট অবজেক্ট এর সেকেন্ড সেট করার জন্যে
* `setTime()`: আপনার ডেট অবজেক্ট এর টাইম সেট করার জন্যে

আমি এখানে দুইটা উদাহরণ দেখাবো। যেমন আমাদের `dateObj` টা এখন এই অবস্থায় আছেঃ

    console.log(dateObj);

![](https://cdn-images-1.medium.com/max/1000/1*3qvAf9yYKknHKxvlt8i4KA.png)

আমি এখন উপরের একটা মেথড দিয়ে আমার মাসটা আগস্ট থেকে অক্টোবর করতে চাচ্ছি। আগস্টের ইন্ডেক্স নাম্বার `7` যেহেতু জিরো থেকে গণনা শুরু হয়। আর অক্টোবরের ইন্ডেক্স নাম্বার `9` তার মানে আমরা `setMonth()` ইউজ করে আর আর্গুমেন্ট হিসেবে `9` দিলেই মাস আগস্ট থেকে অক্টোবর হয়ে যাবেঃ

    dateObj.setMonth(9);

এবার আমাদের ডেট অবজেক্ট টা আবার প্রিন্ট করে দেখি চেঞ্জ হয়েছে কিনাঃ

    console.log(dateObj);

![](https://cdn-images-1.medium.com/max/1000/1*AQy5ATg6gckaVI41PoJcZA.png)

হ্যাঁ, চেঞ্জ হয়ে গেছে যেভাবে চাচ্ছিলাম সেভাবেই। কিন্ত এখন আমরা জানি আমাদের মোট ১২ টা মাস আছে। ইন্ডেক্স হিসেবে `0` থেকে `11` পর্যন্ত। এখন যদি আমরা এখানে `15` দেই তাহলে কি হবে? জাভাস্ক্রিপ্ট এখানে অনেক স্মার্ট, ১৫ দিলে জাভাস্ক্রিপ্ট ১১ এর পরে ১২ তে পরের বছরের জানুয়ারীতে চলে যাবে। তার মানে ১৫ মানে এখানে পরের বছরের এপ্রিল মাস। দেখি তাহলে ঠিক তাই কিনাঃ

    dateObj.setMonth(15);

এখন `dateObj` দেখলেঃ

    console.log(dateObj);

![](https://cdn-images-1.medium.com/max/1000/1*ivUbQaxxSk7wuSlqsmi0pg.png)

এটা একটু বেশীই স্মার্ট! এভাবে ঘণ্টা, মিনিট, সেকেন্ড সবার ক্ষেত্রেই প্রযোজ্য হবে এই অটোম্যাটিক টাইম ক্যালকুলেট করার ব্যাপারটা।

সেইমভাবে UTC টাইম সেট করার জন্যেও আলাদা আলাদা মেথড আছে। মেথডগুলো সেইম আগেরগুলোর মতোই কাজ করে। এগুলো হচ্ছেঃ `setUTCDate()`, `setUTCFullYear()`, `setUTCHours()`, `setUTCMilliseconds()`, `setUTCMinutes()`, `setUTCMonth()`, `setUTCSeconds()`

এগুলো ছাড়াও আরো বেশ কিছু কাজের মেথড আছেঃ

* `toDateString()`: সুন্দর করে আপনার ডেট অবজেক্ট টাকে স্ট্রিং এ নিয়ে যাবে। এটা আসলে অনেক কাজের। যেমন আমরা আমাদের ডেট অবজেক্ট এ এটা অ্যাপ্লাই করলেঃ

  console.log(dateObj.toDateString());

এরকম সুন্দর ফরম্যাট এ ডেট দেখাবেঃ

![](https://cdn-images-1.medium.com/max/1000/1*FnKqiP_t6DXURIlw_LnnYA.png)

* `toUTCString()`: সেইমভাবে আপনার ডেট অবজেক্ট টাকে UTC টাইমে দেখাবে
* `toISOString()`: আপনার ডেট অবজেক্ট টাকে ISO ফরম্যাটে দেখাবে
* `toJSON()`: স্ট্রিং আকারে দেখাবে আগের মতোই, তবে যাতে জেসন এর সাথে ইউজ করা যায় ঐরকম ফরম্যাটে দেখাবে। জেসন কি যদি জানা না থাকে তাহলে আপাতত এটুকু মনে রাখুন এটা জেসন ফরম্যাটে সময়টা দেখাবে।
* `toLocaleDateString()`: এই মেথডটা বেশ কাজের। এবং কাজের মানে এটা বেশ কিছু আর্গুমেন্টও নেয়। এটা আপনার ডেট অবজেক্টটাকে বিভিন্ন ভাষায় ফরম্যাট করে ডেট রিটার্ণ করবে। এই মেথড প্রথম আর্গুমেন্ট হিসেবে কোন ভাষায় চান, আর দ্বিতীয় আর্গুমেন্ট এ কিছু অপশন নেয়। অপশন মানে হচ্ছে ঠিক কিভাবে আপনি আপনার ডেটটাকে ফরম্যাট করতে চাচ্ছেন। এখন এই দুইটা আর্গুমেন্টই অপশনাল। আপনি যদি খালি রাখেন তাইলে বাই ডিফল্ট ইংলিশে একটা ফরম্যাট এ আপনার ডেট রিটার্ণ করবেঃ

  console.log(dateObj.toLocaleDateString());

![](https://cdn-images-1.medium.com/max/1000/1*4A_oGlJ0KGOpSWvJfVtGNw.png)

এখন যদি প্রথম আর্গুমেন্ট ইউজ করি, আমরা ল্যাঙ্গুয়েজ সেট করবো। তো অবশ্যই বাংলায় ডেট চাচ্ছি এখনঃ

    console.log(dateObj.toLocaleDateString('bn-BD'));

দেখুন কি রিটার্ণ করছেঃ

![](https://cdn-images-1.medium.com/max/1000/1*iMaLPwHAiZGqIzx164zavA.png)

এখন এখানে যে ফরম্যাটে ডেট আসছে, আমরা সেটা চেঞ্জ করতে চাচ্ছি। সেটাই করা হয় দ্বিতীয় আর্গুমেন্ট দিয়ে। এখন এই আর্গুমেন্ট টা মূলত একটা অবজেক্ট হবে, আর সেই অবজেক্ট এর ভিতরে অনেক অপশন পাস করা যাবে। ধরি আমরা ডেট চাই এরকমঃ _২৮ এপ্রিল, ২০১৯_। আর তাই আমাদের এভাবে অপশন পাস করতে হবেঃ

    console.log(dateObj.toLocaleDateString('bn-BD', {day: 'numeric', month: 'long', year: 'numeric'}));

এটা আমাদের কাঙ্খিত ফরম্যাটে ডেট দেখাবেঃ

![](https://cdn-images-1.medium.com/max/1000/1*5Vf8Q_LYvkE57KQydARMOg.png)

আমরা যদি ঘন্টা মিনিটও দেখাতে চাই তাহলে অপশন এ সেগুলোও বলে দিতে হবেঃ

    console.log(dateObj.toLocaleDateString('bn-BD', {day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric'}));

![](https://cdn-images-1.medium.com/max/1000/1*01yjvXk1tmmb_Z4Plpf7PQ.png)

এরকম আরো অনেক অপশন সাপোর্ট করে এখানে। তবে ব্যাপারগুলো ঠিক এরকমি। আশা করি এটা নিয়ে যেভাবে ইচ্ছা ফরম্যাট করে কাজ করতে পারবেন।

* `toLocaleString()`: এটাও অনেকটা আগের মেথডের মতোই। একই রকমভাবে আর্গুমেন্ট নেয় এবং ডেট ফরম্যাট করে দেয়।
* `toLocaleTimeString()`: এটাও আগের দুইটার মতোই সেইম অনেকটাই… এগুলো নিয়ে বিস্তারিত লিখলে আরেকটা পোস্ট হয়ে যাবে। তাছাড়া ইউসেজ সেইমই। জাস্ট গুগুল করে অপশনগুলো দেখে নিলেই কাজ করতে পারবেন।
* `toString()`: ডেট অবজেক্ট টাকে স্ট্রিং আকারে রিটার্ণ করবে
* `toTimeString()`: হিউম্যান রিডেবল ফরম্যাট এ ডেট অবজেক্ট টা স্ট্রিং আকারে রিটার্ণ করবে।
* `toUTCString()`: UTC টাইমে ডেট অবজেক্ট টাকে স্ট্রিং আকারে রিটার্ণ করবে।
* `valueOf()`: আপনার ডেট অবজেক্টটা প্রিমিটিভ আকারে রিটার্ণ করবে। প্রিমিটিভ মানে মিলিসেকেন্ড আকারে রিটার্ণ করবে।

এখানে কিছু কিছু মেথড একইরকম জিনিস রিটার্ণ করে বলে মনে হলেও কিছু কিছু তফাৎ আছে যেটা আপনি আপনার কাজের সুবিধা হয় এমন দেখে মেথড ইউজ করবেন।