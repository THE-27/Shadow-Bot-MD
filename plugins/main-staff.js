let handler = async (m, { conn, command, usedPrefix }) => {
let img = './src/catalogo.jpg'
let staff = `
 ︵ٜ⊹۬︵߭ꥈ‌⏜ׄ︵‌୨ ꥇ⭐߭ ୧‌︵۬߭⏜ꥇ‌︵⊹︵
    ꥇ𝐄ٜ۬߭𝐐ׄꥇ‌𝐔ᨘ࣪𝐈ꥈ𝐏࣭߭𝐎 𝐃𝐄 𝐀𝐘𝐔𝐃𝐀𝐍𝐓𝐄𝐒.il
  ⏝۬‌ꥇ︶ꥇ⊹۬︶‌⏝۬︶ᨘ⊹߭︶ׅꥇ⏝߭︶۬⊹ꥈ︶⏝
          .⬪  ࣪   🏜️(*𝐒𝐡𝐚𝐝𝐨𝐰_𝐌𝐃*) 

✰ *Dueño* ${creador}
✦ *Bot:* ${botname}
⚘ *Versión:* ${vs}
❖ *Libreria:* ${libreria} ${baileys}

❍ *Creador:*

ᰔᩚ ✧͜͡҉ℕℒᎯ𖤍̸̷̶ 
> 🜸 Rol » *Creador*
> ⍰ Numero » wa.me/qr/5B6AGA5YNOUZI1
> ✧ GitHub » https://github.com/The-27

❒ *Colaboradores:*

no ay 
`
await conn.sendFile(m.chat, img, 'Shadow.jpg', staff.trim(), fkontak)
}
  
handler.help = ['staff']
handler.command = ['colaboradores', 'staff']
handler.register = true
handler.tags = ['main']

export default handler
