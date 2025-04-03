import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
// import _ from "lodash"
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
let user = global.db.data.users[m.sender]
let name2 = conn.getName(m.sender)
  let delirius = await axios.get(`https://delirius-apiofc.vercel.app/tools/country?text=${PhoneNumber('+' + m.sender.replace('@s.whatsapp.net', '')).getNumber('international')}`)
  let paisdata = delirius.data.result
  let mundo = paisdata ? `${paisdata.name} ${paisdata.emoji}` : 'Desconocido'
  let perfil = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://qu.ax/QGAVS.jpg')
  let bio = 0, fechaBio
 // let who2 = m.isGroup ? _.get(m, "mentionedJid[0]", m.quoted?.sender || m.sender) : m.sender
  let sinDefinir = '😿 Es privada'
  let biografia = await conn.fetchStatus(m.sender).catch(() => null)
  if (!biografia || !biografia[0] || biografia[0].status === null) {
  bio = sinDefinir
  fechaBio = "Fecha no disponible"
  } else {
  bio = biografia[0].status || sinDefinir
  fechaBio = biografia[0].setAt ? new Date(biografia[0].setAt).toLocaleDateString("es-ES", { day: "2-digit", month: "2-digit", year: "numeric", }) : "Fecha no disponible"
  }
if (user.registered === true) throw `*『✦』Ya estas registrado, para volver a registrarte, usa el comando: #unreg*`
if (!Reg.test(text)) throw `*『✦』El comando ingresado es incorrecto, uselo de la siguiente manera:*\n\n#reg *Nombre.edad*\n\n\`\`\`Ejemplo:\`\`\`\n#reg *${name2}.18*`
let [_, name, splitter, age] = text.match(Reg)
if (!name) throw '*『✦』No puedes registrarte sin nombre, el nombre es obligatorio. Inténtelo de nuevo.*'
if (!age) throw '*『✦』No puedes registrarte sin la edad, la edad es opcional. Inténtelo de nuevo.*'
if (name.length >= 30) throw '*『✦』El nombre no debe de tener mas de 30 caracteres.*' 
age = parseInt(age)
if (age > 999) throw '*『😏』Viejo/a Sabroso/a*'
if (age < 5) throw '*『🍼』Ven aquí, te adoptare!!*'
user.name = name.trim()
user.age = age
user.descripcion = bio
// user.persona = age >= 18? '(Persona adulta)' : '(Persona joven)'
user.regTime = + new Date
user.registered = true
global.db.data.users[m.sender].money += 5
global.db.data.users[m.sender].chocolates += 50
global.db.data.users[m.sender].exp += 245
global.db.data.users[m.sender].joincount += 20
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 20)        
m.react('📩') 
let regbot = `╔═̴̸᪳᷍═̷✩⃢̴═⃨⃜═̶⃕╡̴˚̸᪵✧̷⃘⃛᪻᪻᪻᷼᷍✧̵⃨˚̷᪵╞̶⃔══⃢̸⃨⃜✩̷══̸͜͞═̸̸̸᪳͟╗
 ✎𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐎 𝐂𝐎𝐌𝐏𝐋𝐄𝐓𝐎 ✦
╚̷͓═̴̸᪳᷍═̷✩⃢̴═⃨⃜═̶⃕╡̴˚̸᪵✧̷⃘⃛᪻᪻᪻᷼᷍✧̵⃨˚̷᪵╞̶⃔══⃢̸⃨⃜✩̷══̸͜͞═̸̸̸᪳͟╝

﹏͜͡﹏͜͡﹏͜͡﹏͜͡﹏͜͡﹏͜͡﹏͜͡﹏͜͡﹏͜͡﹏͜͡﹏͜͡﹏͜͡﹏͜͡﹏͜͡﹏͜͡﹏͜͡
*‧˚꒰「✎」꒱༘‧: N᥆mᑲrᥱ* » ${name}
*‧˚꒰「✦」꒱༘‧: Eძᥲძ* » ${age} años
꒰꛱ ͜ ꛱|꛱ ꛱͜ |꛱ ꛱͜ |꛱ ͜ ꛱|꛱ ͜ |୨🌔🏮୧꛱|꛱ ꛱͜ |꛱ ͜ ꛱ |꛱ ͜ ꛱|꛱ ꛱͜ |꛱ ͜ ꒱
「🎁」𝗥𝗲𝗰𝗼𝗺𝗽𝗲𝗻𝘀𝗮𝘀:
> ᦷᩘᦷ• ⛃ *coins* » 50
> ᦷᩘᦷ• ✨ *E᥊⍴ᥱrіᥱᥒᥴіᥲ* » 245
> ᦷᩘᦷ• ⚜️ *T᥆kᥱᥒs* » 20
﹏͜͡﹏͜͡﹏͜͡﹏͜͡﹏͜͡﹏͜͡﹏͜͡﹏͜͡﹏͜͡﹏͜͡﹏͜͡﹏͜͡﹏͜͡﹏͜͡﹏͜͡﹏͜͡
> ${dev}`
await conn.sendMessage(m.chat, {
            text: regbot,
            contextInfo: {
externalAdReply: {
            showAdAttribution: true,
            title: '୧⍤⃝⚔️ Usᥙᥲrі᥆ rᥱg⃟іs𝗍rᥲძ᥆ ❛░⃟ ⃟°˟',
            body: '✥ ׅ ֺ ֵ  ᡣᰍ ׄ ̸ׅ ˒˓ ֹsһᥲძ᥆ᥕ—장ׅ✧',
            thumbnailUrl: imagen3,
            sourceUrl: redes,
            previewType: "PHOTO",
            mediaType: 1,
            renderLargerThumbnail: true
        }}
    })
}
handler.help = ['reg']
handler.tags = ['rg']
handler.command = ['verify', 'verificar', 'reg', 'register', 'registrar'] 

export default handler
