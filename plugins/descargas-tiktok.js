import fetch from 'node-fetch';

var handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) {
        return conn.reply(m.chat, `🤍 𝑷𝒐𝒓 𝒇𝒂𝒗𝒐𝒓, 𝒊𝒏𝒈𝒓𝒆𝒔𝒂 𝒖𝒏 𝒆𝒏𝒍𝒂𝒄𝒆 𝒅𝒆 𝐓𝐈𝐊𝐓𝐎𝐊.`, m);
    }

    try {
        await conn.reply(m.chat, `*${emojis} \`𝐸𝑠𝑝𝑒𝑟𝑒 𝑢𝑛 𝑚𝑜𝑚𝑒𝑛𝑡𝑜, 𝑒𝑠𝑡𝑜𝑦 𝑑𝑒𝑠𝑐𝑎𝑟𝑔𝑎𝑛𝑑𝑜 𝑠𝑢 𝑣𝑖𝑑𝑒𝑜 ...\`*`, m);

        const tiktokData = await tiktokdl(args[0]);

        if (!tiktokData || !tiktokData.data || !tiktokData.data.play) {
            return conn.reply(m.chat, "Error: No se pudo obtener el video.", m);
        }

        const videoURL = tiktokData.data.play;

        if (videoURL) {
            await conn.sendFile(m.chat, videoURL, "tiktok.mp4", ` ⬪࣪${emojis} ᥲ𝗊ᥙі 𝗍іᥱᥒᥱs 𝗍ᥙ ᥎іძᥱ᥆ ฅ^•ﻌ•^ฅ𑁍ꥈ࣪⬪`, m);
        } else {
            return conn.reply(m.chat, "No se pudo descargar.", m);
        }
    } catch (error1) {
        return conn.reply(m.chat, `Error: ${error1.message}`, m);
    }
};

handler.help = ['tiktok'].map((v) => v + ' *<link>*');
handler.tags = ['descargas'];
handler.command = ['tiktok', 'tt'];
handler.group = true;
handler.register = true;
handler.coin = 2;
handler.limit = true;

export default handler;

async function tiktokdl(url) {
    let tikwm = `https://www.tikwm.com/api/?url=${url}?hd=1`;
    let response = await (await fetch(tikwm)).json();
    return response;
}