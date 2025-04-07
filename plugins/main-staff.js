let handler = async (m, { conn, command, usedPrefix }) => {
let img = './src/catalogo.jpg'
let staff = `ᥫ᭡ *EQUIPO DE AYUDANTES* ❀
✰ *Dueño* ${creador}
✦ *Bot:* ${botname}
⚘ *Versión:* ${vs}
❖ *Libreria:* ${libreria} ${baileys}

❍ *Creador:*

ᰔᩚ ✧͜͡҉ℕℒᎯ𖤍̸̷̶ 
> 🜸 Rol » *Creador*
> ✧ GitHub » https://github.com/THE-27

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
