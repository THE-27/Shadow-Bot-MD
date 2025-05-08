import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'

let handler = async (m, { conn, usedPrefix, __dirname }) => {
  try {
    let userId = m.sender
    let { exp, dragones, level, role } = global.db.data.users[userId] || { exp: 0, dragones: 0, level: 0, role: 'Sin rango' }
    let { min, xp, max } = xpRange(level, global.multiplier || 1)
    let name = await conn.getName(userId)
    
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let perfil = await conn.profilePictureUrl(userId, 'image').catch(_ => 'https://files.catbox.moe/g6u1f5.jpg')
    let taguser = '@' + userId.split("@s.whatsapp.net")[0]

    let images = [
      'https://files.catbox.moe/mfcqs7.jpg',
      'https://files.catbox.moe/v6ksr6.jpg',
      'https://files.catbox.moe/ljmjmj.jpg',
      'https://files.catbox.moe/dzo7sc.jpg',
      'https://files.catbox.moe/u65da1.jpg',
      'https://files.catbox.moe/t7bwy4.jpg'
    ]
    let randomImage = images[Math.floor(Math.random() * images.length)]  

    let botname = '⏤͟͟͞͞⋆⬪࣪ꥈ⚔️★ ׄ ꒱ 𝑺𝒉𝒂𝒅𝒐𝒘 - 𝑴𝑫୭'
    let dev = 'Powered •By ꧁⟣٭𝙽𝙻𝙰٭⟢꧂'
    let redes = 'https://whatsapp.com/channel/0029VawF8fBBvvsktcInIz3m'
        let totalCommands = Object.values(global.plugins).filter((v) => v.help && v.tags).length;
    let emojis = '🚀'
    let error = '❌'

    let menu = `⬫   ‌ ۬︵࣪᷼⏜݊᷼✿⃘𐇽۫ꥈ࣪࣪࣪࣪࣪࣪࣪࣪࣪۬۬۬𖣘࣪ꥈ࣪ꥈ࣪ꥈ࣪࣪࣪࣪࣪࣪࣪࣪࣪🫐𐇽ٜ࣪࣪࣪࣪࣪࣪࣪࣪۬۬𖣘𝇈⃘۫ꥈ࣪࣪࣪࣪࣪࣪࣪࣪࣪۬۬۬࣪࣪࣪۬۬۬✿݊᷼⏜᷼
            ⏜፝֟꯬𝆂𝆂݊݊︵᮫ׄᜓ𝆂߭⏜᮫֟፝߭ᜓꥇ︵ᜓ᮫𝆂߭݊꯬ꥇ⏜֟፝ᜓ᮫߭︵ꥇ𝆂݊
            𓆩⿻⃟🍒 ꙲𝑺꯭ℋ꯭𝗔꯭𝗗꯭𝗢꯭𝗪𓆪          
      ⏝፝֟꯬ꥇ᮫𝆂݊ᜓ߭ׄ︶᮫߭⏝֟፝ᜓ᮫𝆂߭ׄ݊ꥇᜓ᮫߭︶ᜓ᮫߭⏝֟፝ᜓ᮫𝆂߭݊ꥇ︶ᜓ᮫߭ꥇ⏝᮫𝆂֟፝߭݊ꥇ︶⏝ᜓ᮫߭.

*「🍬」 Hola @${userId.split('@')[0]} Soy ${botname}*

   ╭ׅ━⃛━꯭͡─͡┅⃨─۫  ּ ᰵᰨ۪🫧ּᰴ ּ  ۫┅─꯭ׄ━͡━ׅ͡─⃛╮
╭╼  ⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ \`𝑰𝑵𝑭𝑶\` ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪
┋֪࣪ ╰━⃛━꯭͡─͡┅⃨─۫  ּ ᰵᰨ۪🫧ּᰴ ּ  ۫┅─꯭ׄ━͡━ׅ͡─⃛╯۪
┋ ̸꯭֘ꯨ🔥⬪࣪⚘۪۬ 𝑶𝒘𝒏𝒆𝒓: ${etiqueta}
┋ ̸꯭֘ꯨ👤⬪࣪⚘۪۬ 𝑪𝒍𝒊𝒆𝒏𝒕𝒆: ${name}
┋ ̸꯭֘ꯨ🌵⬪࣪⚘۪۬ 𝑩𝒐𝒕: ${(conn.user.jid == global.conn.user.jid ? 'Principal 🅥' : 'Prem Bot 🅑')}
┋ ̸꯭֘ꯨ🍜⬪࣪⚘۪۬ 𝑴𝒐𝒅𝒐: Privado vip
┋ ̸꯭֘ꯨ🍩⬪࣪⚘۪۬ 𝑼𝒔𝒖𝒂𝒓𝒊𝒐𝒔 » ${totalreg}
┋ ̸꯭֘ꯨ⚔️⬪࣪⚘۪۬ 𝑻𝒊𝒆𝒎𝒑𝒐 » ${uptime}
┋ ̸꯭֘ꯨ⚡⬪࣪⚘۪۬ 𝑪𝒐𝒎𝒂𝒏𝒅𝒐𝒔 » ${totalCommands}
╰‿︵‿︵୨˚̣̣̣͙୧ - - 📖 - - ୨˚̣̣̣͙୧‿︵‿︵



✧╾ׂ╌ׅ𑜞ׂ𝆬╼ׂ╴⵿֟֟፝╌ׅ⊹╶ ׂ 🔥 ׂ ╴⊹ׅ╌⵿፝֟╶ׂ╾ׅ𑜞ׂ𝆬╌ׂ╼✧
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
*─ׄ─ׄ─⭒─ׄ─ׅ─ׄ⭒─ׄ─ׄ─⭒─ׄ─ׄ─⭒─ׄ─ׅ─*
*ꪶ፝֟͢͢꙰꙰ꫂ🍧̵̄͟͞𝒍𝒊𝒔𝒕 𝒅𝒆 𝒄𝒐𝒎𝒂𝒏𝒅𝒐𝒔̲̅🔥̵̄͟*
𓏲🌹⏜۪۪۪࣪࣪࣪۬ ⌒۪۪۪۪࣪࣪۬︵۪۪‿⃝𝆬✿⃮⃝𝆬‿۪۪︵۪۪۪۪࣪࣪࣪۬܂⌒۪۪۪࣪࣪۬ ⏜੭
  *⋅⋅⋅⭑★                        ★⭑⋅⋅⋅*

*✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧*
> ᥴrᥱᥲ ᥙᥒ *sᥙᑲ-ᑲ᥆𝗍* ᥴ᥆ᥒ 𝗍ᥙ ᥒúmᥱr᥆ ᥙ𝗍іᥣіzᥲᥒძ᥆ *#qr* o *#code*
ׅׄ︶ٜٜٜٜׄ߭ׄ߭ׄ߭ׄ߭⏝ׅׄ︶ٜٜׄ߭ׄ߭⏝ׄ.ׅ︶ٜٜׄ߭ׄ߭⏝ׅׄ︶ٜٜׄ߭ׄ߭⏝ٜׄׄ߭⏝ׅׄ.︶ٜٜٜٜׄ߭ׄ߭ׄ߭ׄ߭

𓆩ֶ፝֟𓆪𓏳̸̷▱፝֟࣪࣪࣪۬▰𓏳̸̷▱֟֟፝࣪࣪࣪۬▰𓏳̸̷▱፝֟࣪࣪࣪۬▰𓏳̸̷▱፝֟࣪࣪࣪۬▰𓏳̸̷▱፝֟࣪࣪࣪۬▰𓆩ֶ፝֟𓆪
   *ꪶ͢🥮፝֟͢꙰꙰ꫂ \`🅘꯭⸾🄽̷̸꯭⸾🅕⸾꯭🄾̸̷⸾꯭-⸾꯭🅑̸̷⸾꯭🄾⸾꯭🅣̸̷\`꯭ꪶ፝֟͢꙰꙰🌈͢ꫂ*
    ꒷꒦⏝꒷꒦⏝꒷꒦⏝꒷꒦⏝꒷꒦⏝꒷꒦
∫🥥✎ .menu
∫🥥✎ .uptime
∫🥥✎ .script
∫🥥✎ .staff
∫🥥✎ .creador
∫🥥✎ .grupos
∫🥥✎ .estado
∫🥥✎ .infobot
∫🥥✎ .sug
∫🥥✎ .ping
∫🥥✎ .reportar *<text>*
∫🥥✎ .reglas
∫🥥✎ .speed
∫🥥✎ .sistema
∫🥥✎ .usuarios
∫🥥✎ .ds
∫🥥✎ .funciones
∫🥥✎ .editautoresponder
꒷꒦ ⛈️︶︶︶︶︶︶︶︶︶︶ 🚀꒦꒷

*╭ׅׄ̇─ׅ̻ׄ╮۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹*
 *۬ׄ߭├ׁ̟̇❍✎│𖥻𓏲⊹ިٜ𝆭߭ \`𝕊𝔼𝔸ℝℂℍ\` ⌑𓍯*
 *໋̇ꥇ╰ׁ̻─ׅׄ ⊹ٜ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜׄ߭꒦*
∫⚔️✎ .animeinfo
∫⚔️✎ .animesearch
∫⚔️✎ .cuevana
∫⚔️✎ .githubsearch
∫⚔️✎ .searchhentai
∫⚔️✎ .google <búsqueda>
∫⚔️✎ .imagen <query>
∫⚔️✎ .infoanime
∫⚔️✎ .githubstalk <query>
∫⚔️✎ .soundcloudsearch <txt>
∫⚔️✎ .pinterest
∫⚔️✎ .pornhubsearch
∫⚔️✎ .npmjs
∫⚔️✎ .tiktoksearch <txt>
∫⚔️✎ .tweetposts
∫⚔️✎ .xnxxs
∫⚔️✎ .xvsearch
∫⚔️✎ .yts
꒷꒦ 👑︶︶︶︶︶︶︶︶︶︶ 🔥꒦꒷

*╭ׅׄ̇─ׅ̻ׄ╮۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹*
 *۬ׄ߭├ׁ̟̇❍✎│𖥻𓏲⊹ިٜ𝆭߭ \`𝕊𝕌𝔹 𝔹𝕆𝕋𝕊\` ⌑𓍯*
 *໋̇ꥇ╰ׁ̻─ׅׄ ⊹ٜ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜׄ߭꒦*
∫🍦✎ .qr
∫🍦✎ .code
∫🍦✎ .token
∫🍦✎ .sockets
∫🍦✎ .deletesesion
∫🍦✎ .pausarai
꒷꒦ 🔥︶︶︶︶︶︶︶︶︶︶ ⚡꒦꒷

*╭ׅׄ̇─ׅ̻ׄ╮۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹*
 *۬ׄ߭├ׁ̟̇❍✎│𖥻𓏲⊹ިٜ𝆭߭ \`𝔽𝕌ℕ\` ⌑𓍯*
 *໋̇ꥇ╰ׁ̻─ׅׄ ⊹ٜ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜׄ߭꒦*
∫🔥✎ .gay <@tag> | <nombre> 
∫🔥✎ .lesbiana <@tag> | <nombre> 
∫🔥✎ .pajero <@tag> | <nombre> 
∫🔥✎ .pajera <@tag> | <nombre> 
∫🔥✎ .puto <@tag> | <nombre> 
∫🔥✎ .puta <@tag> | <nombre> 
∫🔥✎ .manco <@tag> | <nombre> 
∫🔥✎ .manca <@tag> | <nombre> 
∫🔥✎ .rata <@tag> | <nombre>
∫🔥✎ .prostituta <@tag> | <nombre> 
∫🔥✎ .amigorandom
∫🔥✎ .jalamela
∫🔥✎ .chiste
∫🔥✎ .consejo
∫🔥✎ .doxear <mension>
∫🔥✎ .facto
∫🔥✎ .prostituto <@tag> | <nombre>
∫🔥✎ .formarpareja
∫🔥✎ .formarpareja5
∫🔥✎ .frase
∫🔥✎ .huevo @user
∫🔥✎ .chupalo <mencion>
∫🔥✎ .aplauso <mencion>
∫🔥✎ .marron <mencion>
∫🔥✎ .suicidar
∫🔥✎ .iqtest <mencion>
∫🔥✎ .meme
∫🔥✎ .morse
∫🔥✎ .nombreninja *<texto>*
∫🔥✎ .paja
∫🔥✎ .personalidad <mencion>
∫🔥✎ .pregunta 
∫🔥✎ .piropo 
∫🔥✎ .zodiac *2002 02 25*
∫🔥✎ .ship 
∫🔥✎ .sorte 
∫🔥✎ .top [texto]
∫🔥✎ .formartrio <mencion>
∫🔥✎ .tt 
*꒷꒦ ⚡︶︶︶︶︶︶︶︶︶︶ 👑꒦꒷*

*╭ׅׄ̇─ׅ̻ׄ╮۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹*
 *۬ׄ߭├ׁ̟̇❍✎│𖥻𓏲⊹ިٜ𝆭߭ \`𝔾𝔸𝕄𝔼\` ⌑𓍯*
 *໋̇ꥇ╰ׁ̻─ׅׄ ⊹ٜ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜׄ߭꒦*
∫🍂✎ .ahorcado
∫🍂✎ .delxo
∫🍂✎ .genio *<pregunta>*
∫🍂✎ .math <mode>
∫🍂✎ .ppt 
∫🍂✎ .pvp
∫🍂✎ .sopa
∫🍂✎ .ttt
꒷꒦ 👑︶︶︶︶︶︶︶︶︶︶ 👻꒦꒷

*╭ׅׄ̇─ׅ̻ׄ╮۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹*
 *۬ׄ߭├ׁ̟̇❍✎│𖥻𓏲⊹ިٜ𝆭߭ \`ℙ𝔼ℝ𝔽𝕀𝕃\` ⌑𓍯*
 *໋̇ꥇ╰ׁ̻─ׅׄ ⊹ٜ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜׄ߭꒦*
∫🎣✎ .reg
∫🎣✎ .unreg
∫🎣✎ .profile
∫🎣✎ .marry [mension / etiquetar]
∫🎣✎ .divorce
∫🎣✎ .setgenre <text>
∫🎣✎ .delgenre
∫🎣✎ .setbirth <text>
∫🎣✎ .delbirth
∫🎣✎ .setdesc <text>
∫🎣✎ .deldesc
∫🎣✎ .lb <pagina>
∫🎣✎ .lvl <@Mencion>
∫🎣✎ .premium
∫🎣✎ .confesar <Nro/txt>
꒷꒦ 👑︶︶︶︶︶︶︶︶︶︶ 🔥꒦꒷

*╭ׅׄ̇─ׅ̻ׄ╮۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹*
 *۬ׄ߭├ׁ̟̇❍✎│𖥻𓏲⊹ިٜ𝆭߭ \`𝔻𝔼𝕊ℂ𝔸ℝ𝔾𝔸𝕊\` ⌑𓍯*
 *໋̇ꥇ╰ׁ̻─ׅׄ ⊹ٜ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜׄ߭꒦*
∫🍂✎ .animedl
∫🍂✎ .fb
∫🍂✎ .sound
∫🍂✎ .gitclone *<url git>*
∫🍂✎ .gdrive
∫🍂✎ .ig
∫🍂✎ .mediafire <url>
∫🍂✎ .mega
∫🍂✎ .apk <nombre>
∫🍂✎ .pinvid *<link>*
∫🍂✎ .apk2 <busqueda>
∫🍂✎ .npmdl
∫🍂✎ .tt2
∫🍂✎ .play
∫🍂✎ .play2
∫🍂✎ .tiktokrandom
∫🍂✎ .spotify
∫🍂✎ .tiktokhd
∫🍂✎ .terabox
∫🍂✎ .tiktok *<url>*
∫🍂✎ .tiktokmp3 *<url>*
∫🍂✎ .tiktokimg <url>
∫🍂✎ .twitter <url>
∫🍂✎ .xvideosdl
∫🍂✎ .xnxxdl
∫🍂✎ ..pindl
꒷꒦ 🍃︶︶︶︶︶︶︶︶︶︶ ⚡꒦꒷

*╭ׅׄ̇─ׅ̻ׄ╮۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹*
 *۬ׄ߭├ׁ̟̇❍✎│𖥻𓏲⊹ިٜ𝆭߭ \`ℝℙ𝔾\` ⌑𓍯*
 *໋̇ꥇ╰ׁ̻─ׅׄ ⊹ٜ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜׄ߭꒦*
∫🍊✎ .work
∫🍊✎ .slut 
∫🍊✎ .cf 
∫🍊✎ .crimen
∫🍊✎ .ruleta
∫🍊✎ .apostar <cantidad>
∫🍊✎ .slot
∫🍊✎ .cartera
∫🍊✎ .bank
∫🍊✎ .codigo <cantidad>
∫🍊✎ .canjear [codigo]
∫🍊✎ .depositar <cantidad> 
∫🍊✎ .retirar <cantidad>
∫🍊✎ .pay <xp>
∫🍊✎ .minar
∫🍊✎ .buyall / buy
∫🍊✎ .daily
∫🍊✎ .semanal
∫🍊✎ .cofre
∫🍊✎ .mensual
∫🍊✎ .robar
∫🍊✎ .robarxp
∫🍊✎ .aventura
∫🍊✎ .baltop
∫🍊✎ .curar / heal
∫🍊✎ .inventario 
∫🍊✎ .cazar
∫🍊✎ .mazmorra
∫🍊✎ .navidad
∫🍊✎ .halloween
꒷꒦ ☁️︶︶︶︶︶︶︶︶︶︶ 🌟꒦꒷

*╭ׅׄ̇─ׅ̻ׄ╮۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹*
 *۬ׄ߭├ׁ̟̇❍✎│𖥻𓏲⊹ިٜ𝆭߭ \`𝔾𝔸ℂℍ𝔸\` ⌑𓍯*
 *໋̇ꥇ╰ׁ̻─ׅׄ ⊹ٜ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜׄ߭꒦*
∫💥✎ .rw
∫💥✎ .reclamar 
∫💥✎ .harem
∫💥✎ .waifuimage
∫💥✎ .charinfo
∫💥✎ .topwaifus [pagina]
∫💥✎ .regalar <nombre del personaje> @usuario
∫💥✎ .vote <personaje>
꒷꒦ 🍂︶︶︶︶︶︶︶︶︶︶ 🌲꒦꒷

*╭ׅׄ̇─ׅ̻ׄ╮۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹*
 *۬ׄ߭├ׁ̟̇❍✎│𖥻𓏲⊹ިٜ𝆭߭ \`𝕊𝕋𝕀𝕂𝔼ℝ𝕊\` ⌑𓍯*
 *໋̇ꥇ╰ׁ̻─ׅׄ ⊹ٜ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜׄ߭꒦*
∫🏜️✎ .sticker <img>
∫🏜️✎ .sticker <url>
∫🏜️✎ .setmeta
∫🏜️✎ .delmeta
∫🏜️✎ .pfp @user
∫🏜️✎ .qc
∫🏜️✎ .toimg (reply)
∫🏜️✎ .brat
∫🏜️✎ .emojimix  *<emoji+emoji>*
∫🏜️✎ .wm <packname>|<author>
꒷꒦ 🌸︶︶︶︶︶︶︶︶︶︶ 💥꒦꒷

*╭ׅׄ̇─ׅ̻ׄ╮۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹*
 *۬ׄ߭├ׁ̟̇❍✎│𖥻𓏲⊹ިٜ𝆭߭ \`𝕋𝕆𝕆𝕃𝕊\` ⌑𓍯*
 *໋̇ꥇ╰ׁ̻─ׅׄ ⊹ٜ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜׄ߭꒦*
∫🪻✎ .clima *<ciudad/país>*
∫🪻✎ .cal *<ecuacion>*
∫🪻✎ .horario
∫🪻✎ .fake
∫🪻✎ .hd
∫🪻✎ .letra <text>
∫🪻✎ .read / ver
∫🪻✎ .whatmusic <audio/video>
∫🪻✎ .ssweb
∫🪻✎ .spam <number>|<mesage>|<no of messages>
∫🪻✎ .tamaño *<cantidad>*
∫🪻✎ .say [texto]
∫🪻✎ .todoc *<audio/video>*
∫🪻✎ .traducir <idoma>
∫🪻✎ .nuevafotochannel
∫🪻✎ .nosilenciarcanal
∫🪻✎ .silenciarcanal
∫🪻✎ .noseguircanal
∫🪻✎ .seguircanal
∫🪻✎ .avisoschannel
∫🪻✎ .resiviravisos
∫🪻✎ .inspect
∫🪻✎ .inspeccionar
∫🪻✎ .eliminarfotochannel
∫🪻✎ .reactioneschannel
∫🪻✎ .reaccioneschannel
∫🪻✎ .nuevonombrecanal
∫🪻✎ .nuevadescchannel
∫🪻✎ .setcatalogo
∫🪻✎ .setbanner
∫🪻✎ .setmoneda
∫🪻✎ .setname
∫🪻✎ .seticono
∫🪻✎ .wm
∫🪻✎ .enhance
∫🪻✎ .spamwa <number>|<mesage>|<noofmessages>
∫🪻✎ .wikipedia
꒷꒦ 🍂︶︶︶︶︶︶︶︶︶︶ 🍧꒦꒷

*╭ׅׄ̇─ׅ̻ׄ╮۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹*
 *۬ׄ߭├ׁ̟̇❍✎│𖥻𓏲⊹ިٜ𝆭߭ \`𝔾ℝ𝕌ℙ𝕆𝕊\` ⌑𓍯*
 *໋̇ꥇ╰ׁ̻─ׅׄ ⊹ٜ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜׄ߭꒦*
∫☕✎ .admins
∫☕✎ .agregar
∫☕✎ .advertencia <@user>
∫☕✎ .delwarn
∫☕✎ .grupo abrir / cerrar
∫☕✎ .group open / close
∫☕✎ .delete
∫☕✎ .demote <@user>
∫☕✎ .promote <@user>
∫☕✎ .encuesta <text|text2>
∫☕✎ .kickfantasmas
∫☕✎ .gpbanner
∫☕✎ .gpdesc
∫☕✎ .gpname
∫☕✎ .hidetag
∫☕✎ .infogrupo
∫☕✎ .kick <@user>
∫☕✎ .kicknum
∫☕✎ .listonline
∫☕✎ .link
∫☕✎ .listadv
∫☕✎ .mute
∫☕✎ .unmute
∫☕✎ .config
∫☕✎ .restablecer
∫☕✎ .setbye
∫☕✎ .setwelcome
∫☕✎ .testwelcome
∫☕✎ .setemoji <emoji>
∫☕✎ .invocar *<mensaje opcional>*
꒷꒦ 👑︶︶︶︶︶︶︶︶︶︶ ⚡꒦꒷

*╭ׅׄ̇─ׅ̻ׄ╮۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹*
 *۬ׄ߭├ׁ̟̇❍✎│𖥻𓏲⊹ިٜ𝆭߭ \`𝔸ℕ𝕀𝕄𝔼\` ⌑𓍯*
 *໋̇ꥇ╰ׁ̻─ׅׄ ⊹ٜ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜׄ߭꒦*
∫🌹✎ .angry/enojado @tag
∫🌹✎ .bath/bañarse @tag
∫🌹✎ .bite/morder @tag
∫🌹✎ .bleh/lengua @tag
∫🌹✎ .blush/sonrojarse @tag
∫🌹✎ .bored/aburrido @tag
∫🌹✎ .nights/noches
∫🌹✎ .dias/days
∫🌹✎ .coffe/cafe @tag
∫🌹✎ .cry/llorar @tag
∫🌹✎ .cuddle/acurrucarse @tag
∫🌹✎ .dance/bailar @tag
∫🌹✎ .drunk/borracho @tag
∫🌹✎ .eat/comer @tag
∫🌹✎ .facepalm/palmada @tag
∫🌹✎ .happy/feliz @tag
∫🌹✎ .hello/hola @tag
∫🌹✎ .hug/abrazar @tag
∫🌹✎ .kill/matar @tag
∫🌹✎ .kiss2/besar2 @tag
∫🌹✎ .kiss/besar @tag
∫🌹✎ .laugh/reirse @tag
∫🌹✎ .lick/lamer @tag
∫🌹✎ .love2/enamorada @tag
∫🌹✎ .patt/acariciar @tag
∫🌹✎ .poke/picar @tag
∫🌹✎ .pout/pucheros @tag
∫🌹✎ .ppcouple
∫🌹✎ .preg/embarazar @tag
∫🌹✎ .punch/golpear @tag
∫🌹✎ .run/correr @tag
∫🌹✎ .sad/triste @tag
∫🌹✎ .scared/asustada @tag
∫🌹✎ .seduce/seducir @tag
∫🌹✎ .shy/timida @tag
∫🌹✎ .slap/bofetada @tag
∫🌹✎ .sleep/dormir @tag
∫🌹✎ .smoke/fumar @tag
∫🌹✎ .think/pensando @tag
∫🌹✎ .undress/encuerar @tag
∫🌹✎ .waifu
꒷꒦ 🍃︶︶︶︶︶︶︶︶︶︶ 😻꒦꒷

*╭ׅׄ̇─ׅ̻ׄ╮۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹*
 *۬ׄ߭├ׁ̟̇❍✎│𖥻𓏲⊹ިٜ𝆭߭ \`ℕ𝕊𝔽𝕎\` ⌑𓍯*
 *໋̇ꥇ╰ׁ̻─ׅׄ ⊹ٜ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜׄ߭꒦*
nsfw
∫🔞✎ .sixnine/69 @tag
∫🔞✎ .anal/culiar @tag
∫🔞✎ .blowjob/mamada @tag
∫🔞✎ .boobjob/rusa @tag
∫🔞✎ .cum/leche @tag
∫🔞✎ .fap/paja @tag
∫🔞✎ .follar @tag
∫🔞✎ .fuck/coger @tag
∫🔞✎ .footjob/pies @tag
∫🔞✎ .fuck2/coger2 @tag
∫🔞✎ .grabboobs/agarrartetas @tag
∫🔞✎ .grop/manosear @tag
∫🔞✎ .penetrar @user
∫🔞✎ .lickpussy/coño @tag
∫🔞✎ .r34 <tag>
∫🔞✎ .sexo/sex @tag
∫🔞✎ .spank/nalgada @tag
∫🔞✎ .suckboobs/chupartetas @tag
∫🔞✎ .violar/perra @tag
∫🔞✎ .lesbianas/tijeras @tag
∫🔞✎ .pack
∫🔞✎ .tetas
∫🔞✎ .undress/encuerar
꒷꒦ ☁️︶︶︶︶︶︶︶︶︶︶ 🌟꒦꒷

*╭ׅׄ̇─ׅ̻ׄ╮۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹*
 *۬ׄ߭├ׁ̟̇❍✎│𖥻𓏲⊹ިٜ𝆭߭ \`𝕆𝕎ℕ𝔼ℝ\` ⌑𓍯*
 *໋̇ꥇ╰ׁ̻─ׅׄ ⊹ٜ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜׄ߭꒦*
∫⚡✎ .addcoins *<@user>*
∫⚡✎ .addowner/delowner
∫⚡✎ .addprem [@user] <days>
∫⚡✎ .añadirxp
∫⚡✎ .autoadmin
∫⚡✎ .banlist
∫⚡✎ .backup
∫⚡✎ .banuser <@tag> <razón>
∫⚡✎ .bcgc
∫⚡✎ .block
∫⚡✎ .cleanfiles
∫⚡✎ .cleartmp
∫⚡✎ .chetar *@user*
∫⚡✎ .delprem <@user>
∫⚡✎ .blocklist
∫⚡✎ .deletefile
∫⚡✎ .grupocrear <nombre>
∫⚡✎ .deschetar *@user*
∫⚡✎ .dsowner
∫⚡✎ >
∫⚡✎ =>
∫⚡✎ .plugin
∫⚡✎ .get
∫⚡✎ .join
∫⚡✎ .listagrupos
∫⚡✎ .salir
∫⚡✎ .quitarcoin *<@user>*
∫⚡✎ .prefix
∫⚡✎ .resetprefix
∫⚡✎ .quitarxp *<@user>*
∫⚡✎ .restart
∫⚡✎ .reunion
∫⚡✎ .savefile <ruta/nombre>
∫⚡✎ .saveplugin
∫⚡✎ .setavatar
∫⚡✎ .setcmd  *<texto>*
∫⚡✎ .listcmd
∫⚡✎ .setpfp
∫⚡✎ .spam2
∫⚡✎ .unbanuser <@tag>
∫⚡✎ .setstatus <teks>
∫⚡✎ .update 
꒷꒦ 👑︶︶︶︶︶︶︶︶︶︶ 🍭꒦꒷

*╭ׅׄ̇─ׅ̻ׄ╮۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹*
 *۬ׄ߭├ׁ̟̇❍✎│𖥻𓏲⊹ިٜ𝆭߭ \`𝕚𝕒 - 𝕒𝕚\` ⌑𓍯*
 *໋̇ꥇ╰ׁ̻─ׅׄ ⊹ٜ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜׄ߭꒦*
∫☕✎ .dalle
∫☕✎ .demo *<texto>*
∫☕✎ .flux *<texto>*
∫☕✎ .gemini
∫☕✎ .ia
∫☕✎ .llama
∫☕✎ .simi
꒷꒦ 🐉︶︶︶︶︶︶︶︶︶︶ ⚔️꒦꒷

*╭ׅׄ̇─ׅ̻ׄ╮۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹*
 *۬ׄ߭├ׁ̟̇❍✎│𖥻𓏲⊹ިٜ𝆭߭ \`ℂ𝕆ℕ𝕍𝔼ℝ𝕋𝕀𝔻𝕆ℝ𝔼𝕊\` ⌑𓍯*
 *໋̇ꥇ╰ׁ̻─ׅׄ ⊹ٜ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜׄ߭꒦*
∫🐚✎ .tourl <imagen>
∫🐚✎ .catbox
∫🐚✎ .tourl3
∫🐚✎ .togifaud
∫🐚✎ .tomp3
∫🐚✎ .tovideo
∫🐚✎ .tts
∫🐚✎ .tts2
꒷꒦ 💥︶︶︶︶︶︶︶︶︶︶ 🍁꒦꒷
  `.trim();

    await conn.sendMessage(m.chat, {
      image: { url: randomImage },
      caption: menu,
      contextInfo: { 
        mentionedJid: [m.sender], 
        isForwarded: true, 
        forwardedNewsletterMessageInfo: { 
          newsletterJid: 'channel@example.com', 
          newsletterName: 'Canal Oficial', 
          serverMessageId: -1, 
        }, 
        forwardingScore: 999, 
        externalAdReply: { 
          title: botname, 
          body: dev, 
          thumbnailUrl: perfil, 
          sourceUrl: redes, 
          mediaType: 1, 
          renderLargerThumbnail: false 
        }
      }
    })

    await m.react(emojis)    

  } catch (e) {
    await m.reply(`✘ Ocurrió un error al enviar el menú\n\n${e}`)
    await m.react(error)
  }
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'help', 'menú', 'allmenú', 'allmenu', 'menucompleto'] 
handler.register = true
export default handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':')
}