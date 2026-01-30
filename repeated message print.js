const commits = new Array(60);
const message =
  "I will invest at least 6 hrs every single day for next 60 days!";

for (const _ of commits) {
  console.log(message);
}

// for…of loop হলো iterable জিনিসের উপর কাজ করার জন্য। যেহেতু কোনো number দিয়ে সরাসরি loop চালানো যায় না, তাই ৬০ বার message print করতে আমরা new Array(60) ব্যবহার করেছি। এটি একটি array তৈরি করে যার length 60 কিন্তু element খালি। প্রতিটি slot loop-এ iterate হয়। আমরা element-এর value ব্যবহার না করার জন্য _ দিয়ে temporary variable ধরে রেখেছি। for…of loop প্রতিটি element-এর জন্য loop body execute করে, আর body-তে console.log(message) রাখার ফলে message ৬০ বার console-এ print হয়। মূল array কোনো পরিবর্তন হয় না, শুধু loop counter হিসেবে কাজ করছে। এই পদ্ধতি simple, clean এবং beginner-friendly। পরবর্তীতে চাইলে .fill() ব্যবহার করে array-এ value assign করা যায়, কিন্তু এখানে দরকার হয়নি। এমনভাবে আমরা for…of দিয়ে নির্দিষ্ট বার loop করতে পারি।
