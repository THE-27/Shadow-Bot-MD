import fetch from 'node-fetch';
import axios from 'axios';

let handler = async (m, { conn, command, args, text, usedPrefix }) => {
if (!text) return conn.reply(m.chat, `🌷 𝒊𝒏𝒈𝒓𝒆𝒔𝒂 𝒆𝒍 𝒏𝒐𝒎𝒃𝒓𝒆 𝒅𝒆 𝒍𝒂 𝒄𝒂𝒏𝒄𝒊𝒐𝒏 𝒅𝒆 *Soundcloud.*`, m, rcanal)

await m.react('🕒');
try {
let api = await fetch(`https://apis-starlights-team.koyeb.app/starlight/soundcloud-search?text=${encodeURIComponent(text)}`);
let json = await api.json();
let { url } = json[0];

let api2 = await fetch(`https://apis-starlights-team.koyeb.app/starlight/soundcloud?url=${url}`);
let json2 = await api2.json();

let { link: dl_url, quality, image } = json2;

let audio = await getBuffer(dl_url);

let txt = `*\`- s ᴏ ᴜ ɴ ᴄ ʟ ᴏ ᴜ ᴅ - ᴍ ᴜ s ɪ ᴄ -\`*\n●▬▬▬▬๑۩۩๑▬▬▬▬▬●\n`;
    txt += `╭═══════════════════ ⪩\n`
    txt += `╰╮き⃟✰𝖘𝖔𝖚𝖓𝖈𝖑𝖔𝖚𝖉❈⃟き\n`
    txt += `╭┤⋟⌬🥀 *𝐓ⅈ𝘵𝗎𝘭օ* : ${json[0].title}\n`;
    txt += `┃│⋟⌬🌫️ *𝐂ɑ𝘭ⅈ𝒹ɑ𝒹* : ${quality}\n`;
    txt += `┃│⋟⌬⚔️ *𝐔𝔯𝘭* : ${url}\n`;
    txt += `┃│*⇄  1:04 ━━━━───── 3:10  ↻*\n`;
    txt += `┃╰══ ⪨\n`
    txt += `╰═══════════════════ ⪩\n`
    txt += `> 🍭 *${textbot}*`

await conn.sendFile(m.chat, image, 'thumbnail.jpg', txt, m, null, rcanal);
await conn.sendMessage(m.chat, { audio: audio, fileName: `${json[0].title}.mp3`, mimetype: 'audio/mpeg' }, { quoted: m })

await m.react('✅');
} catch {
await m.react('✖️');
}}

handler.help = ['musica *<búsqueda>*']
handler.tags = ['downloader']
handler.command = ['soundcloud', 'sound']
handler.limit = 5
handler.register = true
handler.coin = 6

export default handler

const getBuffer = async (url, options) => {
try {
const res = await axios({
method: 'get',
url,
headers: {
'DNT': 1,
'Upgrade-Insecure-Request': 1,
},
...options,
responseType: 'arraybuffer',
});
return res.data;
} catch (e) {
console.log(`Error : ${e}`);
}
};
