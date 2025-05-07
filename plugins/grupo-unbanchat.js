let handler = async (m, { conn, usedPrefix, command, args }) => {
  if (!(m.chat in global.db.data.chats)) {
    return conn.reply(m.chat, `《✦》¡Este chat no está registrado!.`, m);
  }

  let chat = global.db.data.chats[m.chat];

  if (command === 'bot') {
    if (args.length === 0) {
      const estado = chat.isBanned ? '✗ Desactivado' : '✓ Activado';
      const info = `
「✦」Un administrador puede activar o desactivar a *${botname}* utilizando:

╭━━━━━━━━━━━━━╮
┃ *⚔️ COMANDOS DISPONIBLES:* 
┃ ✦ *${usedPrefix}bot on* – 👑 𝒂𝒄𝒕𝒊𝒗𝒂𝒓
┃ ✦ *${usedPrefix}bot off* – ⚡ 𝒅𝒆𝒔𝒂𝒄𝒕𝒊𝒗𝒂𝒓
╰━━━━━━━━━━━━━╯
> ✧ 𝐄𝐬𝐭𝐚𝐝𝐨 𝐚𝐜𝐭𝐮𝐚𝐥 » *${estado}*
`;
      return conn.reply(m.chat, info, m, rcanal);
    }

    if (args[0] === 'off') {
      if (chat.isBanned) {
        return conn.reply(m.chat, `〘⚔️〙*${botname} YA ESTABA DESACTIVADO!.*`, m);
      }
      chat.isBanned = true;
      return conn.reply(m.chat, `〘🍁〙 *${botname} HA SIDO DESACTIVADO EN ESTE CHAT!.*`, m, rcanal);
    } else if (args[0] === 'on') {
      if (!chat.isBanned) {
        return conn.reply(m.chat, `〘🔥〙*${botname} YA ESTABA ACTIVO!.*`, m);
      }
      chat.isBanned = false;
      return conn.reply(m.chat, `〘⚡〙 *${botname} HA SIDO ACTIVADO EN ESTE CHAT!.*`, m, rcanal);
    }
  }
};

handler.help = ['bot'];
handler.tags = ['grupo'];
handler.command = ['bot'];
handler.admin = true;

export default handler;
