import { exec } from 'child_process';

let handler = async (m, { conn }) => {
  m.reply(`${emoji2} 𝑨𝒄𝒕𝒖𝒂𝒍𝒊𝒛𝒂𝒏𝒅𝒐 𝒆𝒍 𝒃𝒐𝒕...`);

  exec('git pull', (err, stdout, stderr) => {
    if (err) {
      conn.reply(m.chat, `${msm} Error: No se pudo realizar la actualización.\nRazón: ${err.message}`, m);
      return;
    }

    if (stderr) {
      console.warn('Advertencia durante la actualización:', stderr);
    }

    if (stdout.includes('Already up to date.')) {
      conn.reply(m.chat, `${emoji4} 𝐄𝐥 𝐛𝐨𝐭 𝐲𝐚 𝐞𝐬𝐭𝐚 𝐚𝐜𝐭𝐮𝐚𝐥𝐢𝐳𝐚𝐝𝐨.`, m);
    } else {
      conn.reply(m.chat, `${emoji} Actualización realizada con éxito.\n\n${stdout}`, m);
    }
  });
};

handler.help = ['update'];
handler.tags = ['owner'];
handler.command = ['update'];
handler.rowner = true;

export default handler;