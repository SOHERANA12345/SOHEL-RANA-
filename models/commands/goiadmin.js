module.exports.config = {
  name: "goiadmin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "JOY",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "61553594630592") {
    var aid = ["61553594630592"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["আমার বস সোহেল আর একবার মেনশন দিলে তোমার নাকের মধ্যে ঘুষি মারমু😡", "বস সোহেল আর একবার মেনশন দিলে খবর আছে তোমার, তোমাকে কিন্তু ঘুষি মারমু জয়কে মেনশন দিবা না😠","বস সোহেল এখন অনেক বিজি তাকে মেনশন দিয়ে ডিস্টার্ব কইরো না 🥰😍😏"," বস, সোহেল এখন অনেক বিজি তাকে মেনশন দিবা না😡😡😡","Mantion_দিস না _সোহেল বস এর মন মন ভালো নেই আস্কে-!💔🥀", "- আমার সাথে কেউ সে** করে না থুক্কু টেক্স করে নাহ🫂💔","এত মেনশন না দিয়ে বক্স আসো হট করে দিবো🤷‍ঝাং 😘😐"," Mantion_দিলে চুম্মাইয়া ঠুটের কালার change কইরা,লামু 💋😾😾🔨",,"সোহেল বস এখন  বিজি জা বলার আমাকে বলতে পারেন_!!😼🥰","Mantion_না দিয়ে সিরিয়াস প্রেম করতে চাইলে ইনবক্স","Mantion_দিস না বাঁলপাঁক্না সোহেল প্রচুর বিজি 🥵🥀🤐","চুমু খাওয়ার বয়স টা  চকলেট🍫খেয়ে উড়িয়ে দিলাম🤗"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
        }
