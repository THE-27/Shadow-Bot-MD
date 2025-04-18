import { WAMessageStubType } from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return !0;
  let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'https://files.catbox.moe/xr2m6u.jpg')
  let img = await (await fetch(`${pp}`)).buffer()
  let chat = global.db.data.chats[m.chat]
  let txt = 'ゲ◜៹ New Member ៹◞ゲ'
  let txt1 = 'ゲ◜៹ Bye Member ៹◞ゲ'
  let groupSize = participants.length
  if (m.messageStubType == 27) {
    groupSize++;
  } else if (m.messageStubType == 28 || m.messageStubType == 32) {
    groupSize--;
  }

  if (chat.welcome && m.messageStubType == 27) {
    let bienvenida = `۬︵࣪᷼⏜݊᷼⏜࣪᷼✿⃘𐇽۫ꥈ࣪࣪࣪࣪࣪࣪࣪𝇈⃘۫ꥈ࣪࣪࣪࣪࣪𑁍ٜ𐇽࣪࣪࣪࣪࣪𝇈⃘۫ꥈ࣪࣪࣪࣪࣪✿݊᷼⏜࣪᷼⏜࣪᷼︵۬ ͜\n
*╭ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─*
*┆──〘 BIENVENIDO/A ^^  〙───*
*├┅┅┅┅┈┈┈┈┈┈┈┈┈┅┅┅◆*
*│❀ _Usuario_ » @${m.messageStubParameters[0].split`@`[0]}*
*│✰ _Grupo_ » ${groupMetadata.subject}*
*├┅┅┅┅┈┈┈┈┈┈┈┈┈┅┅┅◆*
*│${global.welcom1}*
*│✦ Ahora somos ${groupSize} Miembros.*
*│•(=^●ω●^=)• Disfruta tu estadía en el grupo!*
*│✐ Puedes usar _/menu_ para ver la*
*│lista de comandos.*
*╰┉┉┉┉┈┈┈┈┈┈┈┈┈┉┉┉᛫᛭*\n${dev}`    
    await conn.sendMini(m.chat, txt, dev, bienvenida, img, img, redes, fkontak)
  }
  
  if (chat.welcome && (m.messageStubType == 28 || m.messageStubType == 32)) {
    let bye = `︵࣪᷼⏜݊᷼⏜࣪᷼✿⃘𐇽۫ꥈ࣪࣪࣪࣪࣪࣪࣪𝇈⃘۫ꥈ࣪࣪࣪࣪࣪𑁍ٜ𐇽࣪࣪࣪࣪࣪𝇈⃘۫ꥈ࣪࣪࣪࣪࣪✿݊᷼⏜࣪᷼⏜࣪᷼︵۬ ͜\n
*╭ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─*
*┆──〘 ADIOS 😒 ^^  〙───*
*├┅┅┅┅┈┈┈┈┈┈┈┈┈┅┅┅◆*
*│❀ _Usuario_ » @${m.messageStubParameters[0].split`@`[0]}*
*│✰ _Grupo_ » ${groupMetadata.subject}*
*├┅┅┅┅┈┈┈┈┈┈┈┈┈┅┅┅◆*
*│${global.welcom2}*
*│✦ Ahora somos ${groupSize} Miembros.*
*│•(=^●ω●^=)• Te esperamos pronto!*
*│✐ Puedes usar _/menu_ para ver la*
*│lista de comandos.*
*╰┉┉┉┉┈┈┈┈┈┈┈┈┈┉┉┉᛫᛭*\n${dev}`
    await conn.sendMini(m.chat, txt1, dev, bye, img, img, redes, fkontak)
  }}
