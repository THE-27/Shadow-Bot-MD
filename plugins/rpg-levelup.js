import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
let img = await (await fetch(`https://qu.ax/yjWPA.jpg`)).buffer()
let name = conn.getName(m.sender)
let user = global.db.data.users[m.sender]
if (!canLevelUp(user.level, user.exp, global.multiplier)) {
let { min, xp, max } = xpRange(user.level, global.multiplier)
let txt = `*「✿」Usuario* ◢ ${name} ◤\n\n`
txt += `✦ Nivel » ${user.level}\n`
txt += `✰ Experiencia » ${user.exp - min} / ${xp}\n\n`
txt += `❖ Rango » ${user.role}\n`
txt += `❒ No es suficiente XP *${max - user.exp}* ¡De nuevo! ✨`
await conn.sendFile(m.chat, img, 'thumbnail.jpg', txt, m, null, rcanal)}
let before = user.level * 1
while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
if (before !== user.level) {
let txt = `ᥫ᭡ Felicidades Has subido de nivel ❀\n\n` 
txt += `*${before}* ➔ *${user.level}* [ ${user.role} ]\n\n`
txt += `• ✰ *Nivel anterior* : ${before}\n`
txt += `• ✦ *Nuevos niveles* ${user.level}\n`
txt += `• ❖ *Fecha* : ${new Date().toLocaleString('id-ID')}\n\n`
txt += `> ➨ Nota: *Cuanto más interactúes con el Bot, mayor será tu nivel.*`
await conn.sendFile(m.chat, img, 'thumbnail.jpg', txt, m, null, rcanal)}}

handler.help = ['levelup']
handler.tags = ['rpg']
handler.command = ['nivel', 'lvl', 'levelup', 'level'] 
handler.register = true
export default handler