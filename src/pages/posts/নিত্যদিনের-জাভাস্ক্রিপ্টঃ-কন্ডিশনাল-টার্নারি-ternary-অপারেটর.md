---
language: বাংলা
tags: []
date: 2020-03-10T16:37:49Z
series: ব্লগ
template: post
title: নিত্যদিনের জাভাস্ক্রিপ্টঃ কন্ডিশনাল/টার্নারি (Ternary) অপারেটর
thumb_img_path: ''

---
কন্ডিশনাল বা টার্নারি অপারেটর প্রায় ক্ষেত্রে `if` `else` স্টেটমেন্ট এর পরবর্তিতে শর্টকাট হিসেবে ব্যবহার করা হয়। শর্টকাটে একলাইনে একটা সিদ্ধান্তের উপর ডিশিসন নিয়ে ফেলা যায়। এই অপারেটর অনেকটা এভাবে কাজ করেঃ

    কন্ডিশন ? কন্ডিশন যদি সত্য হয় তাহলে এটা : কন্ডিশন যদি মিথ্যা হয় তাহলে এটা

এখানে এই যে স্পেশাল দুইটা জিনিস `?` এবং `:` দেখতেছেন, এগুলোই মূলত এখানে ব্যবহার হয়।

ধরি নিচে একটা ভ্যারিয়েবল আছেঃ

    const age = 21;

এখন এই `age` এর উপর ডিপেন্ড করে আমরা একটা লেখা প্রিন্ট করতে চাই। যদি `age` ১৮ এর নিচে হয় তাহলে একটা লেখা, আর যদি ১৮ বা ১৮ এর উপর হয় তাহলে আরেকটা লেখা প্রিন্ট করবো। এটা আমরা `if` `else` ব্যবহার করে এভাবে করতে পারিঃ

    if(age < 18) {
       console.log('You are not Adult!');
    } else {
       console.log('You are Adult');
    }

![](https://cdn-images-1.medium.com/max/1000/1*GApq2nMnxQLdzakKxYMMSw.png)

কিন্তু সেইম কাজটাই আমরা টার্নারি অপারেটর ব্যবহার করে মাত্র একলাইনেই করতে পারিঃ

    console.log(age < 18 ? 'You are not Adult!' : 'You are Adult');

এবার এটা রান করলে দেখবেন সেইম আউটপুটইঃ

![](https://cdn-images-1.medium.com/max/1000/1*HjYhSdMOMdVxY3CLWU2g1w.png)

এটা যেকোনো জায়গায় যেকোনোভাবে ব্যবহার করতে পারবেনঃ

    function findAuthor(name) {
       return(name === 'Zonayed Ahmed' ? 'This is the author' : 'Some other person');
    }

এখন এই ফাংশন টাকে আর্গুমেন্ট দিয়ে কল করলে এটা আর্গুমেন্ট অনুযায়ী ফলাফল দেখাবেঃ

    console.log(findAuthor('Zonayed Ahmed'));

![](https://cdn-images-1.medium.com/max/1000/1*NT3uyf3z2esj1TEASAVkYg.png)

অন্যকিছু দিলেঃ

    console.log(findAuthor('John Doe'));

![](https://cdn-images-1.medium.com/max/1000/1*JFWqxP7bGhIZl6MiaI_rHg.png)

রিয়েল লাইফে এটা কিভাবে কাজে লাগতে পারে? হ্যাঁ ধরুন আপনি আপনার ইউজারকে ইমেইল দিতে বলছেন। ইমেইল দিয়ে সাবমিট করলে আপনি এই ফাংশনটা রান করবেনঃ

    function successFunc() {
       console.log('Got your email');
    }

ইমেইলটা আপনি এরকম একটা ভ্যারিয়েবল স্টোর করবেনঃ

    let email;

এখন ইউজার ইমেইল না দিলেই সাবমিট ক্লিক করে দিলে আপনি টার্নারি অপারেটর ইউজ করে খুব সহজেই ধরে ফেলতে পারবেন, আর অন্যকিছু দেখাতে পারবেন। ধরি এখানে আমরা জাস্ট একটা কন্সোল লগই দেখালামঃ

    email ? successFunc() : console.log('Please provide your email!');

![](https://cdn-images-1.medium.com/max/1000/1*_GtdLd2SFJolrPoZz4beKA.png)

এটা কিভাবে হলো? হ্যাঁ এটা হয়েছে কারণ এখানে `email` মিথ্যা `false` তাই। তাহলে দেখি এখানে `email` টা কি কারণে মিথ্যা `false` ভ্যালু দিলোঃ

    console.log(email);

![](https://cdn-images-1.medium.com/max/1000/1*NVWMUBmJ7F075PSj7YDyAg.png)

আচ্ছা ইমেইল তাহলে এখানে `undefined` হ্যাঁ, ঠিক তাই। কারণ আমাদের ইউজার ইমেইল দেয় নাই। আর আমরা জানি `undefined` মিথ্যা `false` । গত পর্বে আমরা দেখেছিলাম জাভাস্ক্রিপ্ট এ কিছু থাকলেই সেটা সত্য, শুধুমাত্র নিচের এগুলো ছাড়াঃ

* `false` (বুলিয়ান `false`, নিজেই মিথ্যা)
* `null`
* `NaN`
* `0`
* খালি (`""` , `''`অথবা ````);
* `undefined`
* `!anythingTrue` (সত্য কোনো এক্সপ্রেশনের পূর্বে `!` দিয়েও সেটাকে মিথ্যা করা যায়)

আর তাই এখানে `email` মিথ্যা।

এবার যদি ইউজার ইমেইল দেয়ঃ

    email = 'zonayedpca@yahoo.com';

দেওয়ায়র পর সাবমিট করলো, এবার আমরা আবার আবার দেখিঃ

    email ? successFunc() : console.log('Please provide your email!');

ব্যাস, এবার দেখবেন আপনার ফাংশনটা রান করবেঃ

![](https://cdn-images-1.medium.com/max/1000/1*TsjDJ3cBf4YYPYM4X7PyIw.png)

এখন ভাইয়া এখানে ইমেইল, ইমেইল সাবমিট-টাবমিট আসলো কোথা থেকে… হ্যাঁ এখানে এগুলো সব কাল্পনিক হলেও রিয়েল লাইফ প্রোজেক্ট করতে গেলে এরকম সিচুয়েশনেই পড়বেন আর ঠিক এভাবেই টার্নারি অপারেটর ব্যবহার করে সহজেই একলাইনেই কাজ সেরে ফেলতে পারবেন।

এখন টার্নারি অপারেটর কিন্তু একটা ভিতরেও আরেকটা দিতে পারবেন, যতক্ষন ইচ্ছা দিতে পারবেন রুলস মেইন্টেইন করে। ধরি আমাদের নিচে এরকম একটা অবজেক্ট আছেঃ

    const objTer = {
       name: 'Zonayed Ahmed',
       age: 21,
       job: 'Student'
    }

এখন ধরি আমরা এখানে যদি `objTer` এর `name` এবং `age`

    objTer.name ? objTer.age ? console.log('It has name and age') : objTer.job ? console.log('yes it has a job') : console.log('no it does not have any job') : console.log('I does not have any name');

এটা রান করালেঃ

![](https://cdn-images-1.medium.com/max/1000/1*7hcawxom7w_iyEbs9ybKdQ.png)

অনেক বড় লাইন ঠিক না? এটাকে একটু ভেঙ্গে ভেঙ্গে দেখলেই ধারণা পাবেন। আসলে এভাবেও চাইলে আপনি অনেকগুলো টার্নারি অপারেটর একসাথে নিয়ে একটা ভিতরে আরেকটা দিয়ে কাজ করতে পারবেন। প্রয়োজনে ব্র্যাকেটসও ব্যবহার করতে পারবেন। এটাও আরেকটা পাওয়ারফুল টেকনিক।

***

\[wysija_form id=”6″\]