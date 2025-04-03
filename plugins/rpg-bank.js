// Bank Editado Por Cuervo
//★彡[ᴄʀᴇᴀᴛᴇ ʙʏ ᴄᴜᴇʀᴠᴏ-ᴛᴇᴀᴍ-ꜱᴜᴘʀᴇᴍᴇ]彡★
// Respeten credito xddddd (ratas inmundas)
import fetch from 'node-fetch'
import db from '../lib/database.js'
let img = 'https://qu.ax/yGzaV.jpg'
let handler = async (m, {conn, usedPrefix}) => {
   let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender
   if (who == conn.user.jid) return m.react('✖️')
   if (!(who in global.db.data.users)) return m.reply(`*El usuario no se encuentra en mi base de datos*`)
   let user = global.db.data.users[who]
   let name = conn.getName(who);
   let txt = (`${who == m.sender ? `╭━〔  ⪛✰ ʙᴀɴᴄᴏ ᴄᴇɴᴛʀᴀʟ ✰⪜  〕⬣\n┋ *Usuario:* ${name}\n┋⛃ *Coins En Cartera*: ${user.estrellas}\n┋⛀ *Coins En Banco*: ${user.bank}\n┋✨ *Experiencia:* ${user.exp}\n┋⚔️ *Nivel:* ${user.level}\n┋⚜️ *Rol:* ${user.role}\n┋📅 *Fecha:* ${new Date().toLocaleString('id-ID')}\n╰━━━━━━━━━━━━⬣` : `╭━〔  ⪛✰ ʙᴀɴᴄᴏ ᴄᴇɴᴛʀᴀʟ ✰⪜  〕⬣\n┋ *Usuario:* @${who.split('@')[0]}\n┋⛃ *Coins En Cartera*: ${user.estrellas}\n┋⛀ *Coins En Banco*: ${user.bank}\n┋✨ *Experiencia:* ${user.exp}\n┋⚔️ *Nivel:* ${user.level}\n┋⚜️ *Rol:* ${user.role}\n┋📅 *Fecha:* ${new Date().toLocaleString('id-ID')}\n╰━━━━━━━━━━━━⬣`}`)
await conn.sendFile(m.chat, img, 'thumbnail.jpg', txt, m, null, {mentions: [who] }, rcanal)
}

handler.help = ['bank']
handler.tags = ['rpg']
handler.command = ['bank', 'banco'] 
handler.register = true 
export default handler 
