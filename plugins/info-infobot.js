import { generateWAMessageFromContent } from "@whiskeysockets/baileys";
import os from "os";
import util from "util";
import sizeFormatter from "human-readable";
import MessageType from "@whiskeysockets/baileys";
import fs from "fs";
import { performance } from "perf_hooks";
const handler = async (m, { conn, usedPrefix }) => {
  const _uptime = process.uptime() * 1000;
  const uptime = clockString(_uptime);
  const totalreg = Object.keys(global.db.data.users).length;
  const chats = Object.entries(conn.chats).filter(
    ([id, data]) => id && data.isChats,
  );
  const groupsIn = chats.filter(([id]) => id.endsWith("@g.us"));
  const groups = chats.filter(([id]) => id.endsWith("@g.us"));
  const used = process.memoryUsage();
  const { restrict, antiCall, antiprivado, modejadibot } =
    global.db.data.settings[conn.user.jid] || {};
  const { autoread, gconly, pconly, self } = global.opts || {};
  const old = performance.now();
  const neww = performance.now();
  const speed = neww - old;
    await conn.sendMessage(m.chat, { react: { text: '🥀', key: m.key } })
  const info = `

╭━━━━━━･❪ ❁ ❫ ･━━━━━━❖
│➸ *⏰️ \`𝐀𝐂𝐓𝐈𝐕𝐈𝐃𝐀𝐃\`*
│➸ *${uptime}*
│
│•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•
│╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╮
│┆    *🌨️ \`𝐶𝐻𝐴𝑇𝑆\`*
│┆✎˚₊· ͟͟͞͞❥ 𝑪𝒉𝒂𝒕𝒔 𝑷𝒓𝒊𝒗𝒂𝒅𝒐𝒔: *${chats.length - groups.length}*
│┆✰˚₊· ͟͟͞͞❥ 𝘊𝘩𝘢𝘵𝘴 𝘋𝘦 𝘎𝘳𝘶𝘱𝘰𝘴: *${groups.length}* 
│┆✦˚₊· ͟͟͞͞❥ 𝘊𝘩𝘢𝘵𝘴 𝘛𝘰𝘵𝘢𝘭𝘦𝘴: *${chats.length}* 
│┆✧˚₊· ͟͟͞͞❥ 𝑹𝒆𝒈𝒊𝒔𝒕𝒓𝒂𝒅𝒐𝒔 » *${totalreg}*
│┆⚘˚₊· ͟͟͞͞❥ 𝑇𝑖𝑒𝑚𝑝𝑜 𝐴𝑐𝑡𝑖𝑣𝑜 » *${uptime}*
│╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╯
│•°•°•°•°•°•°•°•°•°•°•°•°•°•°•°•
│
│➸ ✦֟፝ᬊׅ ✯ sһᥲძ᥆ᥕ ᬊ᭄
╰━━━━━━･❪ ❁ ❫ ･━━━━━━❖`.trim();
  const doc = [
    "pdf",
    "zip",
    "vnd.openxmlformats-officedocument.presentationml.presentation",
    "vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const Message = {
    document: { url: `https://chat.whatsapp.com/H5bw4MJucS1BBHnZ9wv3vI` },
    mimetype: `application/${document}`,
    fileName: `「 ✦ sһᥲძ᥆ᥕ ✰ 」`,
    fileLength: 99999999999999,
    pageCount: 200,
    contextInfo: {
      forwardingScore: 200,
      isForwarded: true,
      externalAdReply: {
showAdAttribution: !![],
            mediaType: 0x1,
            previewType: "PHOTO",
        title: "Eʟ Bᴏᴛ Mᴀs Exᴘʟᴏsɪᴠᴏ!",
        thumbnail: imagen10,
        renderLargerThumbnail: !![],
        sourceUrl: "https://chat.whatsapp.com/H5bw4MJucS1BBHnZ9wv3vI",
      },
    },
    caption: info,
    footer: wm,
    headerType: 6,
  };
  conn.sendMessage(m.chat, Message, { quoted: fakegif2 });
};
handler.help = ["infobot", "speed"];
handler.tags = ["info", "tools"];
handler.command = ['infobot'];
handler.register = true
export default handler;

function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  console.log({ ms, h, m, s });
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}
