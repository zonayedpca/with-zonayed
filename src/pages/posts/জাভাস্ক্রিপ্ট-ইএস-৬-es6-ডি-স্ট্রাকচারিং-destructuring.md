---
language: বাংলা
tags: []
date: 2020-03-10T16:40:11Z
series: ব্লগ
template: post
title: 'জাভাস্ক্রিপ্ট ইএস ৬(ES6): ডি-স্ট্রাকচারিং (Destructuring)'
thumb_img_path: ''

---
জাভাস্ক্রিপ্ট এর ইএস৬ বা পরের ভার্শনগুলো মূলত স্মার্ট প্রোগ্রামিং এর জন্যেই আসছে। এখানে আপনি ইএস৬ ইউজ করে আরো স্মার্ট হয়ে উঠবেন, সেই সাথে কম কোড, কম লেখায় বেশী কাজ করতে পারবেন। ডি-স্ট্রাকচারিং এর কাজটাও মূলত তাই। এটা নতুন কোনো ব্যাপার বা ফিচার না। বরং এটা একটা টেকনিক, স্মার্ট প্রোগ্রামিং, সিন্ট্যাক্টিক শ্যুগার।

এখন এই ডি-স্ট্রাকচারিং এর মূল কাজ হচ্ছে একটা ডাটা স্ট্রাকচার যেমন অ্যারে বা অবজেক্ট এর মতো ডাটা স্ট্রাকচার থেকে ডাটা আলাদা আলাদা করে বের করে আনা। এখন এটা কিভাবে স্মার্ট হলো? হ্যাঁ সেটাই আমরা দেখবো আলাদা আলাদা করে ইএস৫ ও ইএস৬ এর উদাহরণ দিয়ে।

ধরি আমাদের নিচে এই অ্যারেটা আছেঃ

    const zonayed = ['Zonayed Ahmed', 21, 'Student'];

এখন এই অ্যারে থেকে ডাটাগুলো বের করে পৃথক পৃথক একটা একটা করে ভ্যারিয়েবলে রাখতে চাচ্ছিঃ

    var name = zonayed[0];
    var age = zonayed[1];
    var profession = zonayed[2];

ব্যাস এভাবেই আমরা ডাটাগুলো পৃথক পৃথক ভাবে অ্যারে থেকে বের করে আনতে পারি ইএস৫ এ। এখানে `name` ,`age` এবং `profession` পৃথক পৃথক তিনটা ভ্যারিয়েবল যেখানে আমাদের কাঙ্ক্ষিত ডাটাগুলো রয়েছে।

    console.log(name);
    console.log(age);
    console.log(profession);

![](https://cdn-images-1.medium.com/max/800/1*QZ0csWtNwK4nneEHiE0saQ.png)

খারাপ না যদিও, কিন্তু অনেকগুলো ডাটা হলে বা বারবার একাজ বিরক্তিকর। এখানেই আসে ইএস৬ এর ডি-স্ট্রাকচারিং। ইএস৬ এ সেইম কাজটাই করতে চাইলেঃ

    const [name6, age6, profession6] = zonayed;

ব্যাস! হয়ে গেলো আপনার সব কাজ একলাইনে। এখানেও `name6` , `age6` এবং `profession6` পৃথক পৃথক তিনটা ভ্যারিয়েবল। এবং এরা ঠিক অ্যারেতে থাকা ডাটাগুলোর পজিশন মতো যার যার ভ্যালু নিয়ে নিয়েছে। ইন্ডেক্স জিরো পজিশনে থাকা ভ্যারিয়েবল নেইম অ্যারেতে ইন্ডেক্স জিরো পজিশনে থাকা ভ্যালুটাই নিবে। এখানে সে হিসাবে `name6 = ‘Zonayed Ahmed’` , `age6 = 21` এবং `profession6 = ‘Student’` হবেঃ

    console.log(name6);
    console.log(age6);
    console.log(profession6);

![](https://cdn-images-1.medium.com/max/800/1*42K9yQLevUQ50S7hb_izvQ.png)

এখানে আমি `var` বা `const` ইউজ করলেও আপনি চাইলে যেকোনো একটা ইউজ করতে পারবেন। এজন্যে ফাংশানালিটিতে কোনো পরিবর্তন আসবে না। আমি জাস্ট ইএস৫ এর কোডের বেলায় ইএস৫ এর `var` আর ইএস৬ এর কোডের বেলায় ইএস৬ এর `let` বা `const` লিখতে পছন্দ করি।

সেইম কাজ আমরা অবজেক্ট এর ক্ষেত্রেও করতে পারি। তবে এখানে আমাদের আরো অনেক ফ্লেক্সিবিলিটি আছে। ধরি নিচে এই একটা অবজেক্ট আছেঃ

    const zonayedObj = {
       nameObj: 'Zonayed Ahmed',
       ageObj: 21,
       professionObj: 'Student'
    };

এখন অবজেক্ট এর যেহেতু ভ্যালুর পাশাপাশি তাদের কী(Key)ও থাকে। তাই এখানে ডিস্ট্রাকচারিং অনেকটাই ফ্লেক্সিবল।

তবে এখন প্রথমে ইএস৫ এ দেখাই যদি আমরা এখানকার ভ্যালুগুলো পৃথক পৃথকভাবে বের করে আনতে চাইঃ

    var nameObj5 = zonayedObj.nameObj;
    var ageObj5 = zonayedObj.ageObj;
    var professionObj5 = zonayedObj.professionObj;

এখন এখানে এগুলো আপনার ভ্যালুগুলো পৃথক পৃথকভাবে `nameObj` ,`ageObj` ও `professionObj` তে স্টোর হবেঃ

    console.log(nameObj5);
    console.log(ageObj5);
    console.log(professionObj5);

![](https://cdn-images-1.medium.com/max/800/1*DcUFxWSwkJ-r8D3cICz43g.png)

এখন সেইম কাজটাই ইএস৬ এ অনেকরকমভাবে করা যায়। এখানে অবজেক্ট টাইপ ডাটা স্ট্রাকচারের যেহেতু কী থাকে, আমরা বাই ডিফল্ট সেই কী এর নামটাই ইউজ করতে পারি ইজিলিঃ

    const { nameObj, ageObj, professionObj } = zonayedObj;

তাইলে এখন `nameObj` , `ageObj` ও `professionObj` কী থেকে সেইম নামেই তিনটা স্বাধীন পৃথক পৃথক ভ্যারিয়েবল হয়ে গেলো। যেগুলো তাদের ভ্যালুগুলোই হোল্ড করবেঃ

    console.log(nameObj);
    console.log(ageObj);
    console.log(professionObj);

![](https://cdn-images-1.medium.com/max/800/1*EOHOaxhvgNOkO3V3WuG0SQ.png)

এখন এখানে যেহেতু অবজেক্ট এর ভিতরের এই নামেই কীগুলো ছিলো তাই এই নামেই আমরা ডি-স্ট্রাকচারিং টা করতে পারবো। কিন্তু আমরা যদি ভিন্ন নামে ডি-স্ট্রাকচারিং করতে চাই তাহলে এভাবে করা যাবেঃ

    const { nameObj:nameObj6, ageObj:ageObj6, professionObj:professionObj6 } = zonayedObj;

তাহলে এখন আমাদের `nameObj6` , `ageObj6` ও `professionObj6` নামে তিনটা ভ্যারিয়েবল হয়ে গেলো, সাথে তাদের ভ্যালুগুলোই তারা হোল্ড করবেঃ

    console.log(nameObj6);
    console.log(ageObj6);
    console.log(professionObj6);

![](https://cdn-images-1.medium.com/max/800/1*ckQeG5RyG5qfmK7HRdoO7A.png)

এখন এই অবজেক্ট এর ডি-স্ট্রাকচারিং আরো অনেক গভীরে যেতে পারে। ধরি নিচে এরকম অবজেক্ট এর ভিতরে অবজেক্ট রয়েছেঃ

    var comObj = {
       anotherObj: {
          anotherNewObj: {
             title: 'JavaScript ES6'
          }
       }
    };

এখন এখান থেকে `title` টাকে ডি-স্ট্রাকচার করে `title` নামে কোনো ভ্যারিয়েবলে রাখতে চাইলেঃ

    const { anotherObj: { anotherNewObj: { title } } } = comObj;

ব্যাস এবার `title` নামে আরেকটা ভ্যারিয়েবল হয়ে গেলোঃ

    console.log(title);

![](https://cdn-images-1.medium.com/max/800/1*0Y-yaimiJH1Y9Widzr_46g.png)

এখন `title` তাই অন্যনামে চাইলে আগের টেকনিকগুলো একসাথে মিক্স করলেই হবেঃ

    const { anotherObj: { anotherNewObj: { title: newTitle } } } = comObj;

এখন এই অবজেক্টগুলোর ভিতরের `title` `newTitle` ভ্যারিয়েবলে স্টোর হবে, এবং এটা দিয়েই আপনি অ্যাক্সেস করতে পারবেনঃ

    console.log(newTitle);

![](https://cdn-images-1.medium.com/max/800/1*0PI9mhkFhn-9zBc8jTAmbQ.png)

আজ এই পর্যন্তই, আশা করি সবটুকু লেখা বুঝতে পেরেছেন। কোনো সমস্যা হলে অবশ্যই আমাকে যেকোনো জায়গায় (ভার্চুয়াললি)টোকা দিতে ভুলবেন না… ![🙂](https://s.w.org/images/core/emoji/12.0.0-1/svg/1f642.svg)

***

\[wysija_form id=”6″\]