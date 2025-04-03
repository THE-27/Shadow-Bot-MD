var handler = async (m, { conn, participants, usedPrefix, command }) => {
    if (!m.mentionedJid[0] && !m.quoted) {
        return conn.reply(m.chat, `${emojis} *𝑬𝒕𝒊𝒒𝒖𝒆𝒕𝒂 𝒐 𝒓𝒆𝒔𝒑𝒐𝒏𝒅𝒆 𝒂𝒍 𝒎𝒆𝒏𝒔𝒂𝒋𝒆 𝒅𝒆 𝒍𝒂 𝒑𝒆𝒓𝒔𝒐𝒏𝒂 𝒒𝒖𝒆 𝒒𝒖𝒊𝒆𝒓𝒆𝒔 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒓*`, m);
    }

    let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;

    const groupInfo = await conn.groupMetadata(m.chat);
    const ownerGroup = groupInfo.owner || m.chat.split`-`[0] + '@s.whatsapp.net';
    const ownerBot = global.owner[0][0] + '@s.whatsapp.net';
    //const nn = conn.getName(m.sender);

    if (user === conn.user.jid) {
        return conn.reply(m.chat, `${emojis} 𝑁𝑜 𝑝𝑢𝑒𝑑𝑜 𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑟 𝑒𝑙 𝑏𝑜𝑡 𝑑𝑒𝑙 𝑔𝑟𝑢𝑝𝑜.`, m);
    }

    if (user === ownerGroup) {
        return conn.reply(m.chat, `${emojis} 𝑁𝑜 𝑝𝑢𝑒𝑑𝑜 𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑟 𝑎𝑙 𝑝𝑟𝑜𝑝𝑖𝑒𝑡𝑎𝑟𝑖𝑜 𝑑𝑒𝑙 𝑔𝑟𝑢𝑝𝑜`, m);
    }

    if (user === ownerBot) {
        return conn.reply(m.chat, `${emojis} 𝑁𝑜 𝑝𝑢𝑒𝑑𝑜 𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑟 𝑎𝑙 𝑝𝑟𝑜𝑝𝑖𝑒𝑡𝑎𝑟𝑖𝑜 𝑑𝑒𝑙 𝑏𝑜𝑡`, m);
    }

    await conn.groupParticipantsUpdate(m.chat, [user], 'remove');

};

handler.help = ['kick'];
handler.tags = ['grupo'];
handler.command = ['kick','echar','hechar','ban'];
handler.admin = true;
handler.register = true
handler.botAdmin = true;

export default handler;