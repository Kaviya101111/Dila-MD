const {cmd, sendImage, sendVideo} = require('../lib/');
const Config = require('../config');

cmd({
    pattern: "status",
    react: "💬",
    desc: "Get Bot Owner Status with Image & Video",
    category: "info",
    use: ".status",
},
async (message, match) => {
    let Status = "🛑 Owner Status : 🌐 I'm Currently Online!\n\n📌 Bot Service Available ✅";
    let imageURL = "https://telegra.ph/file/7d3b5a2d10ef33bb1eaa7.jpg"; // ඔබේ Image ලින්ක් එක මෙතැනට දාන්න
    let videoURL = "https://telegra.ph/file/61d5f3e5c1ef7305e3fdf.mp4"; // ඔබේ Video ලින්ක් එක මෙතැනට දාන්න

    await message.reply(Status);
    await sendImage(message.jid, imageURL, "🔥 My Status Image!");
    await sendVideo(message.jid, videoURL, "🎥 My Status Video!");
});
