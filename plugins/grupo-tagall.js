/* 
- tagall By Angel-OFC  
- etiqueta en un grupo a todos
- https://whatsapp.com/channel/0029VaJxgcB0bIdvuOwKTM2Y
*/
const handler = async (m, { isOwner, isAdmin, conn, text, participants, args, command, usedPrefix }) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  const customEmoji = global.db.data.chats[m.chat]?.customEmoji || '⚡';
  m.react(customEmoji);

  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }

  const pesan = args.join` `;
  const oi = `*⚔️ » INFO :* ${pesan}`;
  let teks = `*!  MENCION GENERAL  !*\n  *PARA ${participants.length} MIEMBROS* ☕\n\n ${oi}\n\n┏━✦✯𝐒𝐡𝐚𝐝𝐨𝐰 - 𝐌𝐃✯✦━★\n`;
  for (const mem of participants) {
    teks += `⏤͟͟͞͞➥${customEmoji} @${mem.id.split('@')[0]}\n`;
  }
  teks += `ּ｡･ﾟ♡ﾟ･｡.｡･ﾟ♡ﾟ･｡.｡･ﾟ♡ﾟ･｡⌬\n> ${dev}`;

  conn.sendMessage(m.chat, { text: teks, mentions: participants.map((a) => a.id) });
};

handler.help = ['todos *<mensaje opcional>*'];
handler.tags = ['group'];
handler.command = ['todos', 'invocar', 'tagall']
handler.admin = true;
handler.group = true;
handler.coin = 4; 

export default handler;