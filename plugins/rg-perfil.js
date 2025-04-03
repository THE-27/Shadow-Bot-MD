import moment from 'moment-timezone';
import PhoneNumber from 'awesome-phonenumber';
import fetch from 'node-fetch';

let handler = async (m, { conn, args }) => {
    let userId;
    if (m.quoted && m.quoted.sender) {
        userId = m.quoted.sender;
    } else {
        userId = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
    }

    let user = global.db.data.users[userId];

    let name = conn.getName(userId);
    let description = user.description || 'Sin Descripción';
    let cumpleanos = user.birth || 'No especificado';
    let genero = user.genre || 'No especificado';
    let exp = user.exp || 0;
    let nivel = user.level || 0;
    let role = user.role || 'Sin Rango';
    let coins = user.estrellas || 0;
    let bankcoins = user.bank || 0;

    let perfil = await conn.profilePictureUrl(userId, 'image').catch(_ => 'https://files.catbox.moe/xr2m6u.jpg');

    let profileText = `
「✿」 *Perfil* ◢@${userId.split('@')[0]}◤

✦ Edad » ${user.age || 'Desconocida'}
✎description » ${description}
♛ *Cumpleaños* » ${cumpleanos}
⚥ *Género* » ${genero} 

「 ✦ *Recursos - User* ⛃ 」
✎⛀ *${moneda}:* ${coins}
✎≛ *Ni᥎ᥱᥣ:* ${nivel}
✎◭ *E᥊⍴ᥱrіᥱᥒᥴіᥲ:* ${exp.toLocaleString()}
✎♘ *Rᥲᥒg᥆:* ${role}

⛁ *Coins Cartera* » ${coins.toLocaleString()} ${moneda}
⛃ *Coins Banco* » ${bankcoins.toLocaleString()} ${moneda}
❁ *Premium* » ${user.premium ? '✅' : '❌'}

> ✧ ⍴ᥲrᥲ ᥱძі𝗍ᥲr 𝗍ᥙ ⍴ᥱr𝖿іᥣ ᥙsᥲ *#perfildates* `.trim();

    await conn.sendMessage(m.chat, { 
        text: profileText,
        contextInfo: {
            mentionedJid: [userId],
            externalAdReply: {
                title: '✧ ★᭄ꦿ᭄ꦿ𝑝𝑒𝑟𝑓𝑖𝑙 𝑑𝑒 𝑢𝑠𝑢𝑎𝑟𝑖𝑜★᭄ꦿ᭄ꦿ✧',
                body: dev,
                thumbnailUrl: perfil,
                mediaType: 1,
                showAdAttribution: true,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m });
};

handler.help = ['profile'];
handler.tags = ['rg'];
handler.command = ['profile', 'perfil'];

export default handler;

