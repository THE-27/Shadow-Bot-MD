let handler = async (m, { conn, usedPrefix, command, args }) => {
  if (!(m.chat in global.db.data.chats)) {
    return conn.reply(m.chat, `《✦》¡𝑬𝒔𝒕𝒆 𝒄𝒉𝒂𝒕 𝒏𝒐 𝒆𝒔𝒕𝒂 𝒓𝒆𝒈𝒊𝒔𝒕𝒓𝒂𝒅𝒐!.`, m, rcanal);
  }

  let chat = global.db.data.chats[m.chat];

  if (command === 'bot') {
    if (args.length === 0) {
      const estado = chat.isBanned ? '✗ Desactivado' : '✓ Activado';
      const info = `
「✦」𝐔𝐧 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫 𝐩𝐮𝐞𝐝𝐞 𝐚𝐜𝐭𝐢𝐯𝐚𝐫 𝐨 𝐝𝐞𝐬𝐚𝐜𝐭𝐢𝐯𝐚𝐫 𝐚 *${botname}* 𝐮𝐭𝐢𝐥𝐢𝐳𝐚𝐧𝐝𝐨:

> ✐ *${usedPrefix}bot on* 𝒑𝒂𝒓𝒂 𝒂𝒄𝒕𝒊𝒗𝒂𝒓
> ✐ *${usedPrefix}bot off* 𝒑𝒂𝒓𝒂 𝒅𝒆𝒔𝒂𝒄𝒕𝒊𝒗𝒂𝒓

✧ 𝐄𝐬𝐭𝐚𝐝𝐨 𝐚𝐜𝐭𝐮𝐚𝐥 » *${estado}*
`;
      return conn.reply(m.chat, info, m);
    }

    if (args[0] === 'off') {
      if (chat.isBanned) {
        return conn.reply(m.chat, `《✧》${botname} ya estaba desactivado.`, m);
      }
      chat.isBanned = true;
      return conn.reply(m.chat, `✐ 𝐇𝐚𝐬 *𝐝𝐞𝐬𝐚𝐜𝐭𝐢𝐯𝐚𝐝𝐨* 𝐚 ${botname}!`, m);
    } else if (args[0] === 'on') {
      if (!chat.isBanned) {
        return conn.reply(m.chat, `《✧》*${botname}* 𝐲𝐚 𝐞𝐬𝐭𝐚𝐛𝐚 𝐚𝐜𝐭𝐢𝐯𝐨.`, m);
      }
      chat.isBanned = false;
      return conn.reply(m.chat, `✐ 𝐇𝐚𝐬 *𝐚𝐜𝐭𝐢𝐯𝐚𝐝𝐨* 𝐚 ${botname}!`, m);
    }
  }
};

handler.help = ['bot'];
handler.tags = ['grupo'];
handler.command = ['bot'];
handler.admin = true;

export default handler;
