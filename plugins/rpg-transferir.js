const items = ['coins', 'exp'];
const confirmation = {};

async function handler(m, { conn, args, usedPrefix, command }) {
  if (confirmation[m.sender]) return conn.sendMessage(m.chat, {text: '*✰ 𝑨𝒖𝒏 𝒉𝒂𝒚 𝒇𝒐𝒏𝒅𝒐𝒔 𝒆𝒏 𝒕𝒓𝒂𝒏𝒔𝒇𝒆𝒓𝒆𝒏𝒄𝒊𝒂, 𝒂𝒈𝒖𝒂𝒓𝒅𝒂 𝒖𝒏 𝒎𝒐𝒎𝒆𝒏𝒕𝒐.*', mentions: [m.sender]}, {quoted: m});
  const user = global.db.data.users[m.sender];
  const item = items.filter((v) => v in user && typeof user[v] == 'number');
  const lol = `*┏━┅┉┅┄┄┄⟞⟨⟡⟩⟝┄┄┄┉┉┉━┓*
*┃⚔️ 𝑼𝒔𝒐 𝒅𝒆𝒍 𝒄𝒐𝒎𝒂𝒎𝒅𝒐.* 
*┃◉ ${usedPrefix + command}*  [tipo] [cantidad] [@user]
*┃🍁 𝑬𝒋𝒆𝒎𝒑𝒍𝒐:* ${usedPrefix + command} exp 65 @${m.sender.split('@')[0]}
┣❣◤▬▭▬▭▬ ◆ ▬▭▬▭▬ ◤❢
*┃◉ 🚀 𝑨𝒓𝒕𝒊𝒄𝒖𝒍𝒐𝒔 𝒕𝒓𝒂𝒏𝒔𝒇𝒆𝒓𝒊𝒃𝒍𝒆𝒔.*
┃▢ *${moneda}* = 𝒄𝒐𝒊𝒏𝒔 ⛃
┃▢ *exp* = 𝑬𝒙𝒑𝒆𝒓𝒊𝒆𝒏𝒄𝒊𝒂
*┗━┅┉┅┄┈┄⟞⟨⟠⟩⟝┄┈┄┉┉┉━┛*
`.trim();
  const type = (args[0] || '').toLowerCase();
  if (!item.includes(type)) return conn.sendMessage(m.chat, {text: lol, mentions: [m.sender]}, {quoted: m});
  const count = Math.min(Number.MAX_SAFE_INTEGER, Math.max(1, (isNumber(args[1]) ? parseInt(args[1]) : 1))) * 1;
  const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : '';
  if (!who) return conn.sendMessage(m.chat, {text: '*❖ 𝑴𝒆𝒏𝒄𝒊𝒐𝒏𝒂 𝒂𝒍 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 𝒒𝒖𝒆 𝒅𝒆𝒔𝒆𝒂 𝒉𝒂𝒄𝒆𝒓 𝒍𝒂 𝒕𝒓𝒂𝒏𝒔𝒇𝒆𝒓𝒆𝒏𝒄𝒊𝒂.*', mentions: [m.sender]}, {quoted: m});
  if (!(who in global.db.data.users)) return conn.sendMessage(m.chat, {text: `*✰ 𝑬𝒍 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 ${who} 𝒏𝒐 𝒆𝒔𝒕𝒂 𝒆𝒏 𝒍𝒂 𝒃𝒂𝒔𝒆 𝒅𝒆 𝒅𝒂𝒕𝒐𝒔.*`, mentions: [m.sender]}, {quoted: m});
  if (user[type] * 1 < count) return conn.sendMessage(m.chat, {text: `*✧ 𝑵𝒐 𝒕𝒊𝒆𝒏𝒆𝒔 𝒔𝒖𝒇𝒊𝒄𝒊𝒆𝒏𝒕𝒆𝒔 ${type} 𝒑𝒂𝒓𝒂 𝒕𝒓𝒂𝒏𝒔𝒇𝒆𝒓𝒊𝒓.*`, mentions: [m.sender]}, {quoted: m});
const confirm = `✦ *¿𝑬𝒔𝒕𝒂 𝒔𝒆𝒈𝒖𝒓𝒐 𝒅𝒆 𝒒𝒖𝒆 𝒅𝒆𝒔𝒆𝒂 𝒕𝒓𝒂𝒏𝒔𝒇𝒆𝒓𝒊𝒓 ${count} ${type} a @${(who || '').replace(/@s\.whatsapp\.net/g, '')}?* 
*—◉ 𝑻𝒊𝒆𝒏𝒆𝒔 60 𝒔𝒆𝒈𝒖𝒏𝒅𝒐𝒔 𝒑𝒂𝒓𝒂 𝒄𝒐𝒏𝒇𝒊𝒓𝒎𝒂𝒓*

*—◉ 𝑬𝒔𝒄𝒓𝒊𝒃𝒂:* 
*◉ si = 𝒑𝒂𝒓𝒂 𝒂𝒄𝒆𝒓𝒕𝒂𝒓*
*◉ no = 𝒑𝒂𝒓𝒂 𝒄𝒂𝒏𝒄𝒆𝒍𝒂𝒓*`.trim();
  await conn.sendMessage(m.chat, {text: confirm, mentions: [who]}, {quoted: m});
  confirmation[m.sender] = { sender: m.sender, to: who, message: m, type, count, timeout: setTimeout(() => (conn.sendMessage(m.chat, {text: '*❖ 𝑺𝒆 𝒂𝒄𝒂𝒃𝒐 𝒆𝒍 𝒕𝒊𝒆𝒎𝒑𝒐, 𝒏𝒐 𝒔𝒆 𝒐𝒃𝒕𝒖𝒗𝒐 𝒓𝒆𝒔𝒑𝒖𝒆𝒔𝒕𝒂. 𝑻𝒓𝒂𝒏𝒔𝒇𝒆𝒓𝒆𝒏𝒄𝒊𝒂 𝒄𝒂𝒏𝒄𝒆𝒍𝒂𝒅𝒂.*', mentions: [m.sender]}, {quoted: m}), delete confirmation[m.sender]), 60 * 1000)};
}

handler.before = async (m) => {
  if (m.isBaileys) return;
  if (!(m.sender in confirmation)) return;
  if (!m.text) return;
  const { timeout, sender, message, to, type, count } = confirmation[m.sender];
  if (m.id === message.id) return;
  const user = global.db.data.users[sender];
  const _user = global.db.data.users[to];
  if (/^No|no$/i.test(m.text)) {
    clearTimeout(timeout);
    delete confirmation[sender];
    return conn.sendMessage(m.chat, {text: '*✰ 𝑪𝒂𝒏𝒄𝒆𝒍𝒂𝒅𝒐, 𝒍𝒂 𝒕𝒓𝒂𝒏𝒔𝒇𝒆𝒓𝒆𝒏𝒄𝒊𝒂 𝒏𝒐 𝒔𝒆 𝒓𝒆𝒂𝒍𝒊𝒛𝒂𝒓𝒂.*', mentions: [m.sender]}, {quoted: m});
  }
  if (/^Si|si$/i.test(m.text)) {
    const previous = user[type] * 1;
    const _previous = _user[type] * 1;
    user[type] -= count * 1;
    _user[type] += count * 1;
    if (previous > user[type] * 1 && _previous < _user[type] * 1) {
      conn.sendMessage(m.chat, {text: `*✦ 𝑺𝒆 𝒕𝒓𝒂𝒏𝒔𝒇𝒊𝒓𝒊𝒆𝒓𝒐𝒏 𝒄𝒐𝒓𝒓𝒆𝒄𝒕𝒂𝒎𝒆𝒏𝒕𝒆 ${count} ${type} 𝒂 @${(to || '').replace(/@s\.whatsapp\.net/g, '')}*`, mentions: [to]}, {quoted: m});
    } else {
      user[type] = previous;
      _user[type] = _previous;
      conn.sendMessage(m.chat, {text: `*✰ 𝑬𝒓𝒓𝒐𝒓 𝒂𝒍 𝒕𝒓𝒂𝒏𝒔𝒇𝒆𝒓𝒊𝒓 ${count} ${type} 𝒂 @${(to || '').replace(/@s\.whatsapp\.net/g, '')}*`, mentions: [to]}, {quoted: m});
    }
    clearTimeout(timeout);
    delete confirmation[sender];
  }
};
handler.help = ['transfer'].map((v) => v + ' [tipo] [cantidad] [@tag]');
handler.tags = ['rpg'];
handler.command = ['payxp', 'transfer', 'darxp', 'transferir'];

handler.register = true
export default handler;

function special(type) {
  const b = type.toLowerCase();
  const special = (['common', 'uncommon', 'shado', 'legendary', 'pet'].includes(b) ? ' Crate' : '');
  return special;
}
function isNumber(x) {
  return !isNaN(x);
}
