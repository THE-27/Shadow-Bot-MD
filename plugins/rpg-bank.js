import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix }) => {
    let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender
    if (who == conn.user.jid) return m.react('✖️')
    if (!(who in global.db.data.users)) return m.reply(`${emoji} El usuario no se encuentra en mi base de datos*`)
  
    let user = global.db.data.users[who]
    let total = (user.coin || 0) + (user.bank || 0);

    const texto = `𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐜𝐢𝐨𝐧 -  𝐄𝐜𝐨𝐧𝐨𝐦𝐢𝐚 ❀
 
╭ - ̗̀↳🍨ꕤ——— ◌ ——— ꕤ╮
┊ᰔᩚ ᥙsᥙᥲrі᥆ » *${conn.getName(who)}*   
┊⛀ ძіᥒᥱr᥆ » *${user.coin} ${moneda}*
┊⚿ ᑲᥲᥒᥴ᥆ » *${user.bank} ${moneda}*
┊⛁ 𝗍᥆𝗍ᥲᥣ » *${total} ${moneda}*
╰ - ̗̀↳⚔️ꕤ——— ◌ ——— ꕤ╯

> *⍴ᥲrᥲ ⍴r᥆𝗍ᥱgᥱr 𝗍ᥙ ძіᥒᥱr᥆, ¡ძᥱ⍴ósі𝗍ᥲᥣ᥆ ᥱᥒ ᥱᥣ ᑲᥲᥒᥴ᥆ ᥙsᥲᥒძ᥆ #deposit*`;

    await conn.reply(m.chat, texto, m, rcanal)
}

handler.help = ['bal']
handler.tags = ['rpg']
handler.command = ['bal', 'balance', 'bank'] 
handler.register = true 
handler.group = true 

export default handler
