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
date: 2018-08-18T16:38:48Z
series: ব্লগ
template: post
title: 'জাভাস্ক্রিপ্ট ইএস ৬(ES6): ক্লাস ও ইনহেরিট্যান্স (Inheritance)'
thumb_img_path: "/images/es6.jpeg"

---
গত পর্বে আমরা জাভাস্ক্রিপ্ট এ নতুন সিন্ট্যাক্টিক শ্যুগার ক্লাস (Class) সম্পর্কে জেনেছি। এটা যেহেতু আসলে নতুন সিনট্যাক্স ছাড়া কিছুই না, তাই ফাংশন কন্সট্রাকটরের মতো করেও অনেক কিছু করা যাবে এটাতে। এগুলো সম্পর্কে আমরা অলরেডি জেনেছি। কিন্তু আজকের এই পর্বে ক্লাস দিয়ে আরো কি কি করা যায় সেগুলো দেখবো।

কিন্তু এখন আমাদের যদি এরকম সিচুয়েশান আসে যেখানে আমাদের দুইটা অনেকটা একইরকম ক্লাস থাকতে পারে। যেটা আমি ইএস৫ এ [উদাহরণ](https://js.zonayed.me/#/js-advance/458) দিয়েছিলাম কন্সট্রাকটর ফাংশনের ক্ষেত্রে। ধরি আমাদের একটা ক্লাস আছে `PersonClassDemo` নামেঃ

    class PersonClassDemo {
       constructor(name, age, job) {
          this.name = name;
          this.age = age;
          this.job = job;
          this.dateOfBirth = () => {
             console.log(`${this.name} is born in ${2018 - this.age}`);
          }
       }
    }

আরেকটা আছে `TeacherClassDemo` নামে, যেখানে টিচারের পার্সনের মতোই সব বৈশিষ্ট্য আছে, কিন্তু একটা বেশী আছেঃ

    class TeacherClassDemo {
       constructor(name, age, job, dateOfBirth, subject) {
          this.name = name;
          this.age = age;
          this.job = job;
          this.subject = subject;  
          this.dateOfBirth = dateOfBirth;
       }
    }

তো এক্ষেত্রে আমাদের দুইটা আলাদা আলাদা ক্লাস বানানোর কোনো দরকার নাই। আমরা প্রথমটা থেকে প্রথমটার বৈশিষ্ট্যগুলো ইনহেরিট করতে পারবো। ধরি আমাদের প্রথম ক্লাস এটা আছেঃ

    class PersonClass {
       constructor(name, age, job) {
          this.name = name;
          this.age = age;
          this.job = job;
       }
    }

এখন আমরা টিচারের জন্যে আরেকটা বানাবো যেটাতে পার্সনের সব বৈশিষ্ট্য তো আছেই, সাথে অতিরিক্ত একটা আছে। আমরা ইনহেরিট করবো সবগুলো, আর অতিরিক্ত টা ডিফাইন করে দিবো এভাবেঃ

    class TeacherClass extends PersonClass {
       constructor(name, age, job, subject) {
          super(name, age, job);
          this.subject = subject;
       }
    }

ব্যাস হয়ে গেলো আমাদের ইনহেরিট্যান্স। আমরা এখানে একটা স্পেশাল কীওয়ার্ড ইউজ করেছি `super` নামে। বাকি সব সেইম। `constructor` মেথডে ঠিক কি কি থাকবে সবগুলোই ডিফাইন করেছি, তারপর `super` কীওয়ার্ড দিয়ে আমরা এর মধ্যে যেগুলো `PersonClass` থেকে ( এখানে `name`, `age`, `job`) ইনহেরিট হবে সেগুলো বলে দিয়েছি। ব্যাস এভাবেই ইনহেরিট হয়ে গেলো। এখন এখানে আমরা নতুন অবজেক্ট তৈরী করে সেটা ইউজ করতে পারবোঃ

    const ourSir = new TeacherClass('Shafiq Sir', 46, 'Assistant Teacher', 'Physics');

এখন এই নতুন অবজেক্ট তৈরী হয়ে গেলো। পরীক্ষা করে দেখি সব ঠিক আছে কিনাঃ

    console.log(ourSir.name);
    console.log(ourSir.age);
    console.log(ourSir.job);
    console.log(ourSir.subject);

![](https://cdn-images-1.medium.com/max/1000/1*7uYNu5Xu54wi2aHhIO5P8A.png)

এখন সেইমভাবে আমাদের ক্লাসে যদি কোনো মেথডও থাকে তাহলে সেটাও ইনহেরিট করা যাবে সহজেই। ধরি আমাদের একটা ক্লাস আছে মেথডসহঃ

    class PersonClassMeth {
       constructor(name, age, job) {
          this.name = name;
          this.age = age;
          this.job = job;
       }
       dateOfBirth() {
          console.log(`${this.name} born in ${2018 - this.age}`);
       }
    }

এখন আরেকটা ক্লাস তৈরী করি যেটাতে আমরা উপরের সবকিছু ইনহেরিট করবোঃ

    class TeacherClassMeth extends PersonClassMeth {
       constructor(name, age, job, subject) {
          super(name, age, job);
          this.subject = subject;
       }
    }

আসলে প্যারেন্ট ক্লাস থেকে মেথড আনতে অতিরিক্ত কিছু করা লাগবে না, `super` কীওয়ার্ডটাই সব করে দিবে আমাদের হয়ে। এখন এই ক্লাস থেকে নতুন অবজেক্ট তৈরী করিঃ

    const ourSirMeth = new TeacherClassMeth('Shafiq Sir', 46, 'Assistant Teacher', 'Physics');

এখন আমরা বাকি সবগুলো প্রপার্টির অ্যাক্সেস তো পাবোই, সে সাথে আমাদের সেই মেথডটাও অ্যাক্সেস করতে পারবোঃ

    console.log(ourSirMeth.dateOfBirth());

![](https://cdn-images-1.medium.com/max/1000/1*AlxcPRfcu_5LUK292fTARQ.png)

এখন আমরা এরকম কিছু মেথডও চাইতে পারি যেগুলো শুধুমাত্র আমাদের ক্লাসে থাকবে। কিন্তু ক্লাস থেকে যে অবজেক্ট তৈরী করবো, সেগুলো সেই মেথডের অ্যাক্সেস পাবে না। হ্যাঁ একটা স্পেশাল কীওয়ার্ড `static` দিয়ে আমরা এই ধরনের মেথড নিতে পারিঃ

    class StaticMethod {
       constructor(name) {
          this.name = name;
       }
       static aSpecMeth() {
          console.log('I am A Special Method!');
       }
    }

এখন এইখানে এই মেথডটাকে আমরা ক্লাস দিয়ে সরাসরি অ্যাক্সেস করতে পারবোঃ

    console.log(StaticMethod.aSpecMeth());

![](https://cdn-images-1.medium.com/max/1000/1*HSFvHIJJoI1sW2YU281Qxg.png)

কিন্তু, এখন যদি আমরা একটা অবজেক্ট তৈরী করি এই ক্লাস থেকেঃ

    const aMeth = new StaticMethod('Zonayed Ahmed');

এবার অন্যান্য সবগুলোর মতো যদি আমরা এই `static` মেথডটাকে অ্যাক্সেস করতে চাইঃ

    console.log(aMeth.aSpecMeth());

এরর আসবেঃ

![](https://cdn-images-1.medium.com/max/1000/1*ieDYX5ybptYKrQoCoDlDJw.png)

কারণ এটা `static` মেথড। এটা শুধুমাত্র উক্ত ক্লাস দিয়েই অ্যাক্সেস করা যাবে, কিন্তু সেই ক্লাস দিয়ে তৈরী কোনো অবজেক্ট দিয়ে অ্যাক্সেস করা যাবে না।

তবে ডেভেলপার হিসেবে আমরা হয়তো `private` মেথডও চাইতে পারি(যদি আপনি অন্য কোনো ল্যাঙ্গুয়েজে অভ্যস্ত হয়ে থাকেন, এই পর্যায়ে এসে এই কীওয়ার্ডটা মিস করতেও পারেন)। চিন্তা কারণ নাই সামনে এটাও পাবেন হয়তো। আপাতত [প্রপোজালে](https://github.com/tc39/proposal-class-fields) আছে, আমিও চাই এটা অ্যাড হউক।

আরেকটা জিনিস মনে রাখবেন, ক্লাসের ভিতরে সব কোড কিন্তু স্ট্রিক্ট মোডে চলবে। আর ক্লাস নিয়ে যথেষ্ট প্র্যাক্টিস করতে হবে কিভাবে কাজ করে সেটা বুঝতে চাইলে। সব কিছুই প্র্যাক্টিস করতে হবে, তবে এই একটা জিনিস আমারও বুঝতে একটু প্রব্লেম হইছিলো প্রথম দিকে।