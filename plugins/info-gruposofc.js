let media = './src/Grupo.jpg'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
   // await conn.sendMessage(m.chat, { react: { text: '⚡️', key: m.key } })
 await m.react('⚡️')
let str = `*📍 GRUPO OFICIAL*
`
await conn.sendButton(m.chat, str, `͟͞ ⏤͟͞𝐓𝐇𝐄 ✧͜͡҉ℕℒᎯ𖤍̸̷̶` + wm, media, [
['Menu Lista 💖', '/lista']], null, [
['✦ sһᥲძ᥆ᥕ ✰', `${md}`]], fkontak)}
                      
handler.command = ['grupos','linksk','gruposofc','gruposoficiales']
handler.register = true
handler.exp = 33

export default handler