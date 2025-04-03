import { search, download } from 'aptoide-scraper'

var handler = async (m, {conn, usedPrefix, command, text}) => {
if (!text) return conn.reply(m.chat, `${emojis} *Ingrese el nombre de la apk para descargarlo.*`, m, rcanal)
try {
await m.react(rwait)
conn.reply(m.chat, `「↓↑」 *Descargando su aplicación...*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: packname,
body: dev,
previewType: 0, thumbnail: icons,
sourceUrl: channel }}})
let searchA = await search(text)
let data5 = await download(searchA[0].id)
let txt = `*乂 𝐀𝐃𝐓𝐎𝐈𝐃𝐄 - 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒* 乂\n\n`
txt += `☕⃟҈❖ 𝐍𝐨𝐦𝐛𝐫𝐞:⇢ ${data5.name}\n`
txt += `🌹⃟҈☫ 𝐏𝐚𝐜𝐤𝐚𝐠𝐞:⇢ ${data5.package}\n`
txt += `🌨️⃟҈♟ 𝐀𝐜𝐭𝐮𝐚𝐥𝐢𝐳𝐚𝐝𝐨:⇢ ${data5.lastup}\n`
txt += `🌷⃟҈⧱ 𝐓𝐚𝐦𝐚𝐧̃𝐨:⇢  ${data5.size}`
await conn.sendFile(m.chat, data5.icon, 'thumbnail.jpg', txt, m, null, rcanal) 
await m.react(done)  
if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) {
return await conn.reply(m.chat, '🛑 *El archivo es demaciado pesado*', m, rcanal )}
await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: fkontak})
} catch {
return conn.reply(m.chat, '✖️ *Ocurrió un fallo*', m, rcanal )}}

handler.tags = ['descargas']
handler.help = ['apkmod']
handler.command = ['apk', 'modapk', 'aptoide']
handler.register = true
handler.estrellas = 2

export default handler
