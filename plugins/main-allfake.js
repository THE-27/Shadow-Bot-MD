import pkg from '@whiskeysockets/baileys'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'
import PhoneNumber from 'awesome-phonenumber'
import moment from 'moment-timezone'
const { generateWAMessageFromContent, prepareWAMessageMedia, proto } = pkg

var handler = m => m
handler.all = async function (m) {

global.getBuffer = async function getBuffer(url, options) {
try {
options ? options : {}
var res = await axios({
method: "get",
url,
headers: {
'DNT': 1,
'User-Agent': 'GoogleBot',
'Upgrade-Insecure-Request': 1
},
...options,
responseType: 'arraybuffer'
})
return res.data
} catch (e) {
console.log(`Error : ${e}`)
}}

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
global.fotoperfil = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://files.catbox.moe/6ditf1.jpg')
let api = await axios.get(`https://delirius-apiofc.vercel.app/tools/country?text=${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}`)
let userNationalityData = api.data.result
global.userNationality = userNationalityData ? `${userNationalityData.name} ${userNationalityData.emoji}` : 'Desconocido'
let user = global.db.data.users[who]
let bot = global.db.data.settings[this.user.jid]
let pushname = m.pushName || 'Sin nombre'
global.opts['gconly'] = true

//creador y otros
global.botcommandcount = bot.botcommandCount
global.creador = 'Wa.me/51919199620'
global.ofcbot = `${conn.user.jid.split('@')[0]}`
global.asistencia = 'Wa.me/51919199620'
global.namechannel = '✦֟፝ᬊׅ ✯ sһᥲძ᥆ᥕ ᬊ᭄'
global.namegrupo = '✧ sһᥲძ᥆ᥕᑲ᥆𝗍-mძ • ᥆𝖿іᥴіᥲᥣ ✦'
global.namecomu = 'ᰔᩚ sһᥲძ᥆ᥕᑲ᥆𝗍-mძ • ᥴ᥆mᥙᥒі𝗍ᥡ ❀'
global.colab1 = 'Miguelon'
global.colab2 = 'Steven'
global.colab3 = 'Dino'

//Ids channel
global.idchannel = '120363417186717632@newsletter'
global.canalIdM = ["120363417186717632@newsletter", "120363417186717632@newsletter"]
global.canalNombreM = ["✦֟፝ᬊׅ ✯ sһᥲძ᥆ᥕ ᬊ᭄", "✧ sһᥲძ᥆ᥕᑲ᥆𝗍-mძ • ᥆𝖿іᥴіᥲᥣ ✦"]
global.channelRD = await getRandomChannel()

//Reacciones De Comandos.!
global.rwait = '🕒'
global.done = '✅'
global.error = '✖️'

//Emojis determinado de shadow
global.emoji = '⚡'
global.emoji2 = '⚔️'
global.emoji3 = '🍬'
global.emoji4 = '🍭'
global.emoji5 = '🔱'
global.emojis = [emoji, emoji2, emoji3, emoji4, emoji5].getRandom()

//mensaje en espera
global.wait = '❍ 𝐄𝐬𝐩𝐞𝐫𝐞 𝐔𝐧 𝐌𝐨𝐦𝐞𝐧𝐭𝐨, 𝐒𝐨𝐲 𝐋𝐞𝐧𝐭𝐨...✦';
global.waitt = '❍ 𝐄𝐬𝐩𝐞𝐫𝐞 𝐔𝐧 𝐌𝐨𝐦𝐞𝐧𝐭𝐨, 𝐒𝐨𝐲 𝐋𝐞𝐧𝐭𝐨...✦';
global.waittt = '❍ 𝐄𝐬𝐩𝐞𝐫𝐞 𝐔𝐧 𝐌𝐨𝐦𝐞𝐧𝐭𝐨, 𝐒𝐨𝐲 𝐋𝐞𝐧𝐭𝐨...✦';
global.waitttt = '❍ 𝐄𝐬𝐩𝐞𝐫𝐞 𝐔𝐧 𝐌𝐨𝐦𝐞𝐧𝐭𝐨, 𝐒𝐨𝐲 𝐋𝐞𝐧𝐭𝐨...✦';

//Enlaces
var canal = 'https://whatsapp.com/channel/0029Vb6BDQc0lwgsDN1GJ31i'  
let canal2 = 'https://whatsapp.com/channel/0029Vb6BDQc0lwgsDN1GJ31i'
var git = 'https://github.com/THE-27' 
var youtube = 'https://youtube.com/@davidchian4957' 
var github = '' 
let correo = 'blackoficial2025@gmail.com'

global.redes = [canal, canal2, git, youtube, github, correo].getRandom()

//Imagen
let category = "imagen"
const db = './src/database/db.json'
const db_ = JSON.parse(fs.readFileSync(db))
const random = Math.floor(Math.random() * db_.links[category].length)
const randomlink = db_.links[category][random]
const response = await fetch(randomlink)
const rimg = await response.buffer()
global.icons = rimg

//• ↳ ◜𝑻𝑰𝑬𝑴𝑷𝑶 𝑹𝑷𝑮◞ • ⚔
var ase = new Date(); var hour = ase.getHours(); switch(hour){ case 0: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 1: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 2: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 3: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 4: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 5: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 6: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 7: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌅'; break; case 8: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 9: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 10: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 11: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 12: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 13: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 14: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 15: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 16: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 17: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 18: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 19: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 20: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 21: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 22: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 23: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break;}
global.saludo = hour;

//tags
global.nombre = conn.getName(m.sender)
global.taguser = '@' + m.sender.split("@s.whatsapp.net")
var more = String.fromCharCode(8206)
global.readMore = more.repeat(850)

global.packsticker = `°.⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸.°\n\n✦ Usuario: ${nombre}\n✦ Bot: ${botname}\n✦ Fecha: ${fecha}\n✦ Hora: ${tiempo}\n`
global.author = `\n°.⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸.°\n\n${dev}`;

//Fakes
global.fkontak = { key: { participants:"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

// global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: `${packname}`, orderTitle: 'Bang', thumbnail: icons, sellerJid: '0@s.whatsapp.net'}}}

global.fake = { contextInfo: { isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: channelRD.id, newsletterName: channelRD.name, serverMessageId: -1 }
}}, { quoted: m }

global.icono = [ 
'https://qu.ax/mPDnG.jpg',
'https://qu.ax/wVHFu.jpg',
'https://qu.ax/VKfyy.jpg',
'https://qu.ax/paVUB.jpg',
'https://qu.ax/fQlRl.jpg',
'https://qu.ax/JtXxC.jpg',
'https://qu.ax/VDtoR.jpg',
'https://qu.ax/mOkEh.jpg'
].getRandom()

global.rcanal = { contextInfo: { isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: channelRD.id, serverMessageId: 100, newsletterName: channelRD.name, }, externalAdReply: { showAdAttribution: true, title: textbot, body: '⚔️✦ sһᥲძ᥆ᥕ Ultra 🍧', mediaUrl: null, description: null, previewType: "PHOTO", thumbnailUrl: icono, sourceUrl: redes, mediaType: 1, renderLargerThumbnail: false }, }, }}

export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
  }

async function getRandomChannel() {
let randomIndex = Math.floor(Math.random() * canalIdM.length)
let id = canalIdM[randomIndex]
let name = canalNombreM[randomIndex]
return { id, name }
}         