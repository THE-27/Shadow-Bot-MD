import ws from 'ws'
let handler = async (m, { conn, usedPrefix, isRowner}) => {
let _uptime = process.uptime() * 1000;
let totalreg = Object.keys(global.db.data.users).length
let totalchats = Object.keys(global.db.data.chats).length

let uptime = clockString(_uptime);
let users = [...new Set([...global.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])];
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) 
const totalUsers = users.length;
let old = performance.now()
let neww = performance.now()
let speed = neww - old
const used = process.memoryUsage()
let info = `╭╼⬪࣪      ✧.ɪɴғᴏʀᴍᴀᴄɪᴏɴ ᴅᴇ ${botname}.✧\n`
info += `┃֪࣪\n`
info += `├ׁ̟̇✎.਼ ⃝֟፝˖့᜔݊ᰔᩚ  *◜𝐶𝑟𝑒𝑎𝑑𝑜𝑟◞* ⇢ ${etiqueta}\n`
info += `├ׁ̟̇✎.਼ ⃝֟፝˖့᜔݊🜸  *◜𝑃𝑟𝑒𝑓𝑖𝑗𝑜◞* ⇢ [ ${usedPrefix} ]\n`
info += `├ׁ̟̇✎.਼ ⃝֟፝˖့᜔݊✧  *◜𝑉𝑒𝑟𝑠𝑖𝑜𝑛◞* ⇢ ${vs}\n`
info += `├ׁ̟̇✎.਼ ⃝֟፝˖့᜔݊❖  *◜𝐶ℎ𝑎𝑡𝑠 𝑃𝑟𝑖𝑣𝑎𝑑𝑜𝑠◞* ⇢ ${chats.length - groupsIn.length}\n`
info += `├ׁ̟̇✎.਼ ⃝֟፝˖့᜔݊✎  *◜𝑇𝑜𝑡𝑎𝑙 𝐷𝑒 𝐶ℎ𝑎𝑡𝑠◞* ⇢ ${chats.length}\n`
info += `├ׁ̟̇✎.਼ ⃝֟፝˖့᜔݊  *◜𝑈𝑠𝑢𝑎𝑟𝑖𝑜𝑠◞* ⇢ ${totalreg}\n`
info += `├ׁ̟̇✎.਼ ⃝֟፝˖့᜔݊❑  *◜𝐺𝑟𝑢𝑝𝑜𝑠◞* ⇢ ${groupsIn.length}\n`
info += `├ׁ̟̇✎.਼ ⃝֟፝˖့᜔݊✰  *◜𝐴𝑐𝑡𝑖𝑣𝑖𝑑𝑎𝑑◞* ⇢ ${uptime}\n`
info += `├ׁ̟̇✎.਼ ⃝֟፝˖့᜔݊ⴵ  *◜𝑉𝑒𝑙𝑜𝑐𝑖𝑑𝑎𝑑◞* ⇢ ${(speed * 1000).toFixed(0) / 1000}\n`
info += `├ׁ̟̇✎.਼ ⃝֟፝˖့᜔݊✦  *◜𝑆𝑢𝑏-𝐵𝑜𝑡𝑠 𝐴𝑐𝑡𝑖𝑣𝑜𝑠◞*\n`
info += `├ׁ̟̇✎.਼ ⃝֟፝˖့᜔݊✎⇢ ${totalUsers || '0'}\n`
info += `╰╼⬪࣪ ּּּ ּ｡･ﾟ♡ﾟ･｡.｡･ﾟ♡ﾟ･｡.｡･ﾟ♡ﾟ･｡`
await conn.sendFile(m.chat, avatar, 'estado.jpg', info, fkontak)
}
handler.help = ['estado']
handler.tags = ['info']
handler.command = ['estado', 'status', 'estate', 'state', 'stado', 'stats']
handler.register = true

export default handler

function clockString(ms) {
    let seconds = Math.floor((ms / 1000) % 60);
    let minutes = Math.floor((ms / (1000 * 60)) % 60);
    let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    return `${hours}h ${minutes}m ${seconds}s`;
}
