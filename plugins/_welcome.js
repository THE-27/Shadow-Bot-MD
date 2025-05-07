import { WAMessageStubType } from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return !0;
  let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'https://files.catbox.moe/xr2m6u.jpg')
  let img = await (await fetch(`${pp}`)).buffer()
  let chat = global.db.data.chats[m.chat]
  let txt = 'ゲ◜៹ 𝐍𝐞𝐰 𝐌𝐞𝐦𝐛𝐞𝐫 ៹◞ゲ'
  let txt1 = 'ゲ◜៹ 𝐁𝐲𝐞 𝐌𝐞𝐦𝐛𝐞𝐫 ៹◞ゲ'
  let groupSize = participants.length
  if (m.messageStubType == 27) {
    groupSize++;
  } else if (m.messageStubType == 28 || m.messageStubType == 32) {
    groupSize--;
  }

  if (chat.welcome && m.messageStubType == 27) {
    let bienvenida = `*╭ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─┈*
*┆ 〘 🄱🅸🄴🅝🅅🅔🄽🅘🄳🅞 〙*
*├┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┈*
*┆➤ _\`Usuario\`_ » @${m.messageStubParameters[0].split`@`[0]}*
*┆✰ _\`Grupo\`_ » ${groupMetadata.subject}*
*┆✦ _\`Miembros\`_ » ${groupSize}*
*├┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┈*
*┆•(=^●ω●^=)• Disfruta tu estadía en el grupo!*
*┆✐ Puedes usar _/menu_ para ver la*
*┆lista de comandos.*
*╰┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─┈*\n> ${global.welcom1}`    
    await conn.sendMini(m.chat, txt, dev, bienvenida, img, img, redes, fkontak)
  }
  
  if (chat.welcome && (m.messageStubType == 28 || m.messageStubType == 32)) {
    let bye = `*╭ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─┈*
*┆〘 .🄱 .🅐 .🅈. ^^  〙*
*├┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┈*
*┆➤ _\`Usuario\`_ » @${m.messageStubParameters[0].split`@`[0]}*
*┆✰ _\`Grupo\`_ » ${groupMetadata.subject}*
*┆✦ _\`Miembros\`_ » ${groupSize}*
*├┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┈*
*┆•(=^●ω●^=)• Te esperamos pronto!*
*┆✐ Puedes usar _/menu_ para ver la*
*┆lista de comandos.*
*╰┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─┈*\n> ${global.welcom2}`
    await conn.sendMini(m.chat, txt1, dev, bye, img, img, redes, fkontak)
  }}
