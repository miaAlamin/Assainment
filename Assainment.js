// ১. Variable কি ?
Ans সাধারণ ভাবে যার মধ্যে মান রাখা হয় তাকে ভেরিয়াবল বলে।
// ২. Variable কিভাবে লিখতে হয় ?

Ans প্রথম ভেরিয়বল লিখতে হবে তারপরে নাম তারপর সমান তারপর মান বা ভ্যালে ।
Exp: var name = Alamin;

// ৩. string type variable কি ও কি ভাবে লিখতে হয় ?
Ans যে ভেরিয়াবল এর মান ডাবল কোটেশনের ভিতর লেখা হয় তাকে স্টিন টাইপ ভেরিয়াবল বলে ।

Exp: var MyName = "Alamin";
     console.log(typeof MyName);
// ৪. number type variable কি ও কি ভাবে লিখতে হয় ?
Ans যে ভরিয়াবল এর মান ডবল কোটেশন ব্যাতিত লেখা হয় তাকে নাম্বর টাইপ ভেরিয়াবল বলে।

Exp: var MyName = 10;
    console.log(typeof MyName);
// ৫. Boolan type variable  কি ও কি ভাবে লিখতে হয় ?
Ans বোলিয়ান টাইপ ভেরিয়াবল এমন একটি ফাংশন যা শত্য ্ও মিথ্যা যাচাই করে।

Exp: var BoolType = true;
    console.log(BoolType);

// ৬. toUpperCase() & toLowerCase() এর ব্যাবহার কি ভাবে করতে হয় ? র্
Exp: var LoveLatter ="Amar sonar bangla ammi tumai valo bashi sonar bangla chrodin tumar Akash tumar batash"
    console.log(LoveLatter.toUpperCase())
    console.log(LoveLatter.toLowerCase()) 


// ৭. JavaScript এর মোট কয়টি অপারেটর আছে ও কি কি ?র্
JavaScript এ Operator মূলত ১১ ধরণের, নিচে Operator গুলোর লিস্ট দেয়া হলো :

Arithmetic Operators বা গাণিতিক কাজের Operator: (+,-,*,/,%,**)
Assignment Operators বা JavaScript Variable এ যেকোনো মান (Value) সংরক্ষণের Operator : (=)
Bitwise Operators বা JavaScript এ Binary কাজের Operator :-(&,|,^,~,<<,>>,<<=,>>=,>>>=,&=, ^=,|=)
Comparison Operators বা দুই বা ততোধিক Value এর মধ্যে তুলনা করার Operator :-(==,!=,===,!==,<,>,<=,>=)
Incrementing/Decrementing Operators বা 1 করে বৃদ্ধি বা কমানোর Operator:-(++,- -)
Logical Operators বা একাধিক অবস্থার বা condition এর উপর ভিত্তি করে সিদ্ধান্ত নেওয়ার Operator:-(&&,||,!)
String Operators বা এক বা একাধিক string এর সাথে জোড়া লাগানোর Operator:-(+)
Type Operators বা কোনো একটা JavaScript Variable কোনো class এর Instance কিনা তা চেক করার operator:-(instanceof) বা কোনো একটা variable বা value এর type কি তা চেক করার জন্য typeof Operator
Ternery Operator বা if..else কার্য সম্পাদন করার অপারেটর।
delete Operator: বা কোনো একটা Object এর নির্দিষ্ট property delete করার জন্য delete operator ব্যবহৃত হয়।
in Operator: Object এর নির্দিষ্ট property খুঁজে বের করার জন্য ব্যবহৃত হয়।

// ৮. Math.abs() এর ব্যাবহার লিখুন । 
Exp: var num1 = -5;
    var sum = Math.abs(num1)
    console.log(sum)
// ৯. Math.celi()  এর ব্যাবহার লিখুন ।
Exp: var total = 5.4;
    var sum = Math.ceil(total)
    console.log(sum)

// ১০. Math.Floor() এর ব্যাবহার লিখুন । 
Exp:var total = 5.4;
    var sum = Math.floor(total)
    console.log(sum)

// ১১. Math.round() এর ব্যাবহার লিখুন ।
Exp:var total = 5.4;
    var sum = Math.round(total)
    console.log(sum)

// ১২. Math.random() এর ব্যাবহার লিখুন ।
Exp:
    var lotarey = Math.random();
    console.log(lotarey)
 
// asignment.js - GitHub Link 