/* ౨ৎ ˖ ࣪⊹ 𝐁𝐲 𝐉𝐭𝐱𝐬 𐙚˚.ᡣ𐭩

❀ Canal Principal ≽^•˕• ྀི≼
https://whatsapp.com/channel/0029VaeQcFXEFeXtNMHk0D0n

❀ Canal Rikka Takanashi Bot
https://whatsapp.com/channel/0029VaksDf4I1rcsIO6Rip2X

❀ Canal StarlightsTeam
https://whatsapp.com/channel/0029VaBfsIwGk1FyaqFcK91S

❀ HasumiBot FreeCodes 
https://whatsapp.com/channel/0029Vanjyqb2f3ERifCpGT0W
*/

// *𓍯𓂃𓏧♡  PINTEREST DL* (IMAGEN/VIDEO)

import axios from 'axios'
import cheerio from 'cheerio'

let HS = async (m, { conn, text }) => {
if (!text) return conn.reply(m.chat, `❀ Ingresa un enlace de *Pinterest*`, m)

try {
let { tipo, titulo, imagen, author, dl_url } = await Pinterest.download(text)
if (tipo === "imagen") {
await conn.sendMessage(m.chat, { image: { url: dl_url } }, { quoted: m })
} else if (tipo === "video") {
await conn.sendMessage(m.chat, { video: { url: dl_url } }, { quoted: m })
}} catch (error) {
console.error(error)    
}}

HS.command = ['pinterestdl', 'pindl']

export default HS

const Pinterest = {
download: async function(url) {
try {
let response = await axios.get(url, {headers: {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36" }, }).catch((e) => e.response)
let $ = cheerio.load(response.data)
let tag = $('script[data-test-id="video-snippet"]')
if (tag.length > 0) {
let result = JSON.parse(tag.text())
if (
!result ||
!result.name ||
!result.thumbnailUrl ||
!result.uploadDate ||
!result.creator
) { return { msg: "Error :(" } }
return {
tipo: 'video',
titulo: result.name || '-',
imagen: result.thumbnailUrl,
author: { name: result.creator.alternateName, username: "@" + result.creator.name, url: result.creator.url },
dl_url: result.contentUrl,
}
} else {
let json = JSON.parse($("script[data-relay-response='true']").eq(0).text());
let result = json.response.data["v3GetPinQuery"].data;
return {
tipo: 'imagen',
titulo: result.title,
author: { name: result.pinner.username, username: "@" + result.pinner.username },
dl_url: result.imageLargeUrl,
}}
} catch (e) {
console.error(e)
return { msg: "error :(" }
}}}