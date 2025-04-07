import { canLevelUp, xpRange } from '../lib/levelling.js';
import db from '../lib/database.js';

let handler = async (m, { conn }) => {
    let mentionedUser = m.mentionedJid[0];
    let citedMessage = m.quoted ? m.quoted.sender : null;
    let who = mentionedUser || citedMessage || m.sender; 
    let name = conn.getName(who) || 'Usuario';
    let user = global.db.data.users[who];

    if (!user) {
        await conn.sendMessage(m.chat, "No se encontraron datos del usuario.", { quoted: m });
        return;
    }

    let { min, xp } = xpRange(user.level, global.multiplier);
    
    let before = user.level * 1;
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++;

    if (before !== user.level) {
        let txt = `⚔️ Felicidades Has subido de nivel ❀\n\n`; 
        txt += `*${before}* ➔ *${user.level}* [ ${user.role} ]\n\n`;
        txt += `• ✰ *𝑵𝒊𝒗𝒆𝒍 𝒂𝒏𝒕𝒆𝒓𝒊𝒐𝒓* : ${before}\n`;
        txt += `• ✦ *𝑵𝒖𝒆𝒗𝒐𝒔 𝑵𝒊𝒗𝒆𝒍𝒆𝒔* : ${user.level}\n`;
        txt += `• ❖ *𝑭𝒆𝒄𝒉𝒂* : ${new Date().toLocaleString('id-ID')}\n\n`;
        txt += `> ➨ 𝑵𝒐𝒕𝒂: *ᥴᥙᥲᥒ𝗍᥆ más іᥒ𝗍ᥱrᥲᥴ𝗍úᥱs ᥴ᥆ᥒ ᥱᥣ ᑲ᥆𝗍, mᥲᥡ᥆r sᥱrá 𝗍ᥙ ᥒі᥎ᥱᥣ.*`;
        await conn.sendMessage(m.chat, { text: txt }, { quoted: m });
    } else {
        let users = Object.entries(global.db.data.users).map(([key, value]) => {
            return { ...value, jid: key };
        });

        let sortedLevel = users.sort((a, b) => (b.level || 0) - (a.level || 0));
        let rank = sortedLevel.findIndex(u => u.jid === who) + 1;

        let txt = `*「✿」Usuario* ◢ ${name} ◤\n\n`;
        txt += `✦ ᥒі᥎ᥱᥣ » *${user.level}*\n`;
        txt += `✰ ᥱ᥊⍴ᥱrіᥱᥒᥴіᥲ » *${user.exp}*\n`;
        txt += `❖ rᥲᥒg᥆ » ${user.role}\n`;
        txt += `➨ ⍴r᥆grᥱs᥆ » *${user.exp - min} => ${xp}* _(${Math.floor(((user.exp - min) / xp) * 100)}%)_\n`;
        txt += `# ⍴ᥙᥱs𝗍᥆ » *${rank}* de *${sortedLevel.length}*\n`;
        txt += `❒ ᥴ᥆mᥲᥒძ᥆s 𝗍᥆𝗍ᥲᥣᥱs » *${user.commands || 0}*`;

        await conn.sendMessage(m.chat, { text: txt }, { quoted: m });
    }
}

handler.help = ['levelup', 'lvl @user']
handler.tags = ['rpg']
handler.command = ['nivel', 'lvl', 'level', 'levelup']
handler.register = true
handler.group = true

export default handler
