---
language: বাংলা
tags: []
date: 2020-03-10T16:37:05Z
series: ব্লগ
template: post
title: নিত্যদিনের জাভাস্ক্রিপ্টঃ async এবং await
thumb_img_path: ''

---
  
আমরা জাভাস্ক্রিপ্ট এ প্রমিসের কথা জানি, প্রমিস হ্যান্ডেল করতে এবং প্রমিস থেকে ডাটা উদ্ধার করতে কলব্যাক কিভাবে ব্যবহার করতে হয় সেটা নিয়েও আমরা জানি। আমরা দেখেছি কিভাবে একটা প্রমিস হ্যান্ডেল করার পর এটার ভিতরে কলব্যাক ফাংশন কল করতে হয়। আবার সেই কলব্যাক ফাংশনের ভিতরে প্রমিস থেকে আসা ডাটাগুলো অ্যাক্সেস করতে হয়। এভাবে একটার পর একটার ভিতরে গিয়ে গিয়ে এভাবে আমাদের অপারেশনগুলো চালাতে হয় শুধুমাত্র জাভাস্ক্রিপ্ট এর অ্যাসিনক্রোনাস আচরণের কারণে। অ্যাসিনক্রোনাস যদি না হতো তাহলে আমরা লাইন বাই লাইন কোড লিখে সুন্দর করে কাজ করতে পারতাম।

যেমন ধরি আমাদের একটা প্রমিস আছেঃ

    const aDemoPromise = new Promise((resolve, reject) => {
       setTimeout(() => {
          if(true) {
             resolve('Print Me');
          } else {
             reject('Error');
          }
       }, 5000)
    })

এখন আমরা জাভাস্ক্রিপ্ট এক্ষেত্রে অ্যাসিনক্রোনাস না হলে হয়তো এভাবেও ডাটা উদ্ধার করতে পারতাম এই প্রমিস থেকেঃ

    const data = aDemoPromise;
    console.log(data);

বা এখানে প্রমিস রিজেক্ট হলে সেটা `try…catch` দিয়ে হ্যান্ডল করতে পারতামঃ

    try {
       const data = aDemoPromise;
       console.log(data);
    } catch(err) {
       console.log(err);
    }

কিন্তু জাভাস্ক্রিপ্ট এখানে অ্যাসিনক্রোনাস আচরণ করাতে এটা সম্ভব না। আমাদের চেইন করে কলব্যাক ফাংশনের ভিতর থেকেই এরকমভাবে ডাটা উদ্ধার করতে হবেঃ

    aDemoPromise.then((data) => {
       console.log(data);
    })

কিন্তু যাই হউক, এভাবে চেইন করে কলব্যাক ফাংশন দিয়েও প্রমসিএ হ্যান্ডল করা কোনো সমস্যা ছিলো না, সমস্যা হচ্ছে এরকম একটা কলব্যাক এর ভিতরে আরেকটা কলব্যাক, ভিতরে আবার কলব্যাক কল করতে থাকলে কোডের স্ট্রাকচারের অনেকটা এরকম দেখা যাবে। এই কোডটা [এখান থেকে](http://callbackhell.com/) আনা হয়েছেঃ

    fs.readdir(source, function (err, files) {
      if (err) {
        console.log('Error finding files: ' + err)
      } else {
        files.forEach(function (filename, fileIndex) {
          console.log(filename)
          gm(source + filename).size(function (err, values) {
            if (err) {
              console.log('Error identifying file size: ' + err)
            } else {
              console.log(filename + ' : ' + values)
              aspect = (values.width / values.height)
              widths.forEach(function (width, widthIndex) {
                height = Math.round(width / aspect)
                console.log('resizing ' + filename + 'to ' + height + 'x' + height)
                this.resize(width, height).write(dest + 'w' + width + '_' + filename, function(err) {
                  if (err) console.log('Error writing file: ' + err)
                })
              }.bind(this))
            }
          })
        })
      }
    })

এই কোড আপাতত আমাদের কাজে লাগবে না, তাই রান করানোর দরকার নাই। শুধুমাত্র এটুকু দেখুন এখানে একটার ভিতর আরেকটা কলব্যাক দিতে দিতে কোডের স্ট্রাকচার কেমন এলোমেলো হয়ে গেছে। এখানে খুব সহজেই হারিয়ে যাবেন কোন লাইন কি করছে, বা কোনটার এরর কোনটা। এরকম আরো অনেক সমস্যা এখানে পাবেন। হয়তো শুনে থাকবেন, এধরনের সমস্যাকেই কলব্যাক হেল (Callback Hell) বলা হয়। কিন্তু সেইম কোডগুলোই যদি লাইন বাই লাইন থাকতো তাহলে কত সুন্দর দেখা যেতো, আর বুঝতেও সুবিধা হতো।

আর সেজন্যেই জাভস্ক্রিপ্ট এ এই নতুন `async` আর `await` এর পরিচয় করিয়ে দেওয়া হয়েছে। যেখানেই আপনি এরকম অ্যাসিনক্রোনাস কোডকে সিনক্রোনাস আচরণ করাতে চান সেখানেই এগুলো ব্যবহার করতে পারবেন। তবে এখানে কিছু নিয়ম কানুন আছে। আপনাকে `async` এই কীওয়ার্ডটা ব্যবহার করতে হবে ফাংশনের সাথে। আপনি যে কোডগুলোকে সিনক্রোনাস আচরণ করাতে চাচ্ছেন সেগুলো সবগুলো একটা ফাংশনের ভিতরে ঢুকিয়ে সেই ফাংশনের নামের আগে জাস্ট এভাবে `async` কীওয়ার্ডটা লাগিয়ে দিবেনঃ

    async function asyncCode() {
       // Asynchronous Codes
    }

অ্যারো ফাংশন হলেঃ

    const asyncCode6 = async() => {
       // Asynchronous Codes
    }

ব্যাস এভাবেই আপনি আপনার ফাংশন টাকে অ্যাসিনক্রোনাস কোড থাকতে পারে বলে চিহ্নিত করে ফেলতে পারবেন। এবার আপনাকে আসল অ্যাসিনক্রোনাস কোডগুলোকে একটা একটা করে চিহ্নিত করে জাভাস্ক্রিপ্টকে বলে দিতে হবে যে এই হচ্ছে আমার প্রমিস যেটা সল্ভ না হওয়া পর্যন পরের ইন্সট্রাকশনে যাওয়া যাবে না। তার আগে আমাদের প্রমিস তো লাগবে, ঠিক না? হ্যা তাহলে একটা প্রমিস দিয়েই শুরু করিঃ

    const aPromise = new Promise((resolve, reject) => {
       setTimeout(() => {
          if(true) {
             resolve('I am here!');
          } else {
             reject('No! It is an error!');
          }
       }, 5000)
    })

এখন আমরা এই প্রমিসটাকে একটা অ্যাসিনক্রোনাস ফাংশনের ভিতরে নিয়ে হ্যান্ডেল করবো। সেজন্যে একটা অ্যাসিনক্রোনাস চিহ্নিত করে ফাংশন নিয়ে ভিতরে আমাদের প্রমিস টাকে কল করবো। এখন এখানেই আমাদের `await` কীওয়ার্ডটা লাগবে। এটা দিয়ে আমরা আমাদের প্রমিসটাকে চিহ্নিত করে দিবো যাতে এই প্রমিস কমপ্লিট না হওয়ার আগ পর্যন্ত পরের ইন্সট্রাকশনে না যায়ঃ

    const promiseHandle = async() => {
       const data = await aPromise;
       console.log(data);
    }

এখানে দেখুন লক্ষ্য করে আমি ঠিক এর পরের লাইনেই আমাদের প্রমিস থেকে আসা ডাটা প্রিন্ট করে দিয়েছি। হ্যা এখানেই `async` আর `await` এর ম্যাজিক। এটা আমাদের অ্যাসিনক্রোনাস কোডকে সিনক্রোনাস আচরণ করতে সাহায্য করে যাতে আমাদের আর কলব্যাকে হেলে পড়তে না হয়। আমরা একদম লাইন বাই লাইন ইন্সট্রাকশন দিয়েই ডাটা উদ্ধার করতে পারবো। এখন আমাদের এই ফাংশনটাকে কল করলেই দেখবেন আমাদের কাঙ্খিত ডাটাঃ

    promiseHandle()

এখন দেখবেন আপনার প্রমিস কপ্লিট হয়েই তারপরের লাইনের কন্সোল লগ প্রিন্ট হয়েছে। যদি বুঝতে সমস্যা হয় তাহলে `setTimeout()` এর সময় বাড়িয়ে দিয়েও নিজে টেস্ট করতে পারেন কোড সিনক্রোনাসলি কাজ করছে কি করছে নাঃ

![](https://cdn-images-1.medium.com/max/880/1*XacdXVoqVRhvK46M-li-kg.png)

এখন যদি প্রমিস রিজেক্টেড হয় তাহলে? হ্যা তাহলে আমাদের সেই আগের `try…catch` ব্লক দিয়েই আমরা আমাদের এই রিজেকশন বা এরর হ্যান্ডল করতে পারবো। তার আগে আমাদের প্রমিস যাতে রিজেক্ট হয় ঐরকম আরেকটা তৈরী করে নিইঃ

    const aPromiseRejection = new Promise((resolve, reject) => {
       setTimeout(() => {
          if(true) {
             reject('No! It is an error!');
          } else {
             resolve('I am here!');
          }
       }, 5000)
    })

এখন আমরা `async` `await` আমাদের ফাংশন তৈরী করবো। কিন্তু আমাদের এই প্রমিস থেকে ডাটা নেওয়ার আগে পুরোটাকে `try…catch` ব্লকের ভিতরে ঢুকিয়ে নিতে হবে। আর সেই সাথে `catch` ব্লকে আমরা আমাদের এরর ম্যাসেজ অ্যাক্সেস করতে পারবোঃ

    const promiseWithErrorHandle = async() => {
       try {
          const data = await aPromiseRejection;
          console.log(data);
       } catch(err) {
          console.log(err);
       }
    }

ব্যাস এবার ফাংশনটাকে কল করলেঃ

    promiseWithErrorHandle()

![](https://cdn-images-1.medium.com/max/880/1*VB7TC2xMxjdLLo0X7jj6rQ.png)

**একাধিক প্রমিস হ্যান্ডেল করাঃ** এখন আমরা চাইলে এভাবে একাধিক প্রমিসও সিনক্রোনাসলি হ্যান্ডেল করতে পারি। ধরি আমাদের দুইটা প্রমিস আছেঃ

    const promise1 = new Promise((resolve, reject) => {
       setTimeout(() => {
          if(true) {
             resolve('Promise 1 Resolved');
          } else {
             reject('Promise 1 Error');
          }
       }, 5000)
     })

আরেকটাঃ

    const promise2 = new Promise((resolve, reject) => {
       setTimeout(() => {
          if(true) {
             resolve('Promise 2 Resolved');
          } else {
             reject('Promise 2 Error');
          }
       }, 5000)
    })

এখন এখানে একটু বুঝার বিষয়। আমরা যদি `Promise.all` ব্যবহার করি তাহলে এটা কি রিটার্ন করে দেখিঃ

    console.log('Promise All Returns:', Promise.all([promise1, promise2]));

মানে এটাও প্রমিস রিটার্ণ করেঃ

![](https://cdn-images-1.medium.com/max/880/1*YV-GJZEXy-t4IVbd2L5PdA.png)

তাইলে এটা দিয়েই আমরা সহজে এরকম একাধিক প্রমিস হ্যান্ডেল করতে পারবোঃ

    const handleMultiplePromise = async() => {
       const data = await Promise.all([promise1, promise2]);
    console.log(data);
    }

আচ্ছা তাহলে এদের ডাটা কিভাবে আসবে? হ্যা ডাটা ঠিক অ্যারে আকারেই আসবে যেটা আমরা আগেও দেখেছি। এখন ফাংশনটাকে কল করলেঃ

    handleMultiplePromise();

![](https://cdn-images-1.medium.com/max/880/1*YJiIU5eBiNmde6UaHSARww.png)

#### বাস্তব উদাহরণঃ

ধরি আমাদের একটা প্রমিস আছে যেটা থেকে আমরা একজনের নাম পাবো, এখন এই নাম দিয়ে আবার আরেকটা প্রমিস তৈরী করে সেটা থেকে তার বয়স জেনে নাম আর বয়স প্রিন্ট করবো। এখন এখানে মাত্র দুইটা ডাটা থাকলেও রিয়েল লাইফের প্রোজেক্টে এরকম একাধিক ডাটা, একটা উপর আরেকটা নির্ভরশীল থাকতে পারে। এধরনের সিচুয়েশনে কলব্যাক জরুরী। ধরি আমাদের নাম জানার প্রমিসটাঃ

    const getMyName = new Promise((resolve) => {
       return resolve('Zonayed');
    })

একদম সাধারণভাবে লিখলাম এটা ধরে যে এখানে কোনো এরর হবে না। বেশীরভাগ ক্ষেত্রেও আমাদের প্রমিস লিখতে হয় না, তাই এটা ব্যাপার না এখন আরেকটা প্রমিস লিখবো যেটা এই প্রমিস থেকে নাম নিয়ে সেটার উপর ভিত্তি করে বয়স রিটার্ণ করবে। এখন যে জন্যে আমাদের একটা ফাংশনও লাগবেঃ

    const getAge = (name) => {
       return new Promise((resolve, reject) => {
          if(name === 'Zonayed') {
             resolve(21);
          } else {  
             reject('Not Found!');
          }
       }
    )}

এখন প্রথম প্রমিস থেকে আমরা নামটা নিবো, তারপর সেই নামটা পাস করে দ্বিতীয় প্রমিস থেকে বয়স নিবোঃ

    getMyName.then((name) => {
       getAge(name).then((age) => {
          console.log('My name is ' + name + ' and I am ' + age + ' years old!');
       })
    })

![](https://cdn-images-1.medium.com/max/880/1*WW0pMwqs02iAyCy3DTCvww.png)

ব্যাস এভাবে আমাদের একটা কলব্যাকের ভিতরে আরেকটা কলব্যাক দিয়ে ডাড়া উদ্ধার করতে হলো। কিন্তু নতুন `async` আর `await` হলে একই কাজটা আরো ক্লিন লাইন বাই লাইন ইন্সট্রাকশনে করা যাবেঃ

    const getMyDetails = async() => {
       const name = await getMyName;
       const age = await getAge(name);
       console.log('My name is ' + name + ' and I am ' + age + ' years old!');
    }

কত ক্লিন কোড হয়ে গেলো দেখুন। এটাই `async` `await` এর আসল কাজ। এখন আমরা সিম্পলি ফাংশনটাকে কল করলেই ব্যাস ফলাফল সামনেঃ

    getMyDetails();

![](https://cdn-images-1.medium.com/max/880/1*9lMp3IK3llISdDGE4lkC9g.png)

বাস্তবে কলব্যাক হেলের সমস্যা খুব প্রখর। তাছাড়া আমরা কলব্যাকে একটা আর্গুমেন্ট নিয়ে কাজ করলেও বাস্তবে সেখানে আরো অনেক আর্গুমেন্ট পাবেন। এভাবে কলব্যাক দিয়ে কাজ করতে গেলে সহজেই খেই হারিয়ে ফেলবেন। তাই নতুন টেকনিক ব্যবহার করাই ভালো।

\[wysija_form id=”6″\]