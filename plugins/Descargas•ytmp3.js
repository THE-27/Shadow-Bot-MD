/* import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
    if (!text) {
        await m.react('✖️');
        return conn.reply(m.chat, `☁️ Ingresa un enlace de YouTube.`, m, fake);
    }

    try {
        await m.react('🕒');

        let api = await fetch(`https://dark-core-api.vercel.app/api/download/YTMP3?key=Izumi22&url=${encodeURIComponent(text)}`);
        let json = await api.json();

        if (!json.status || !json.download) {
            await m.react('❌');
            return conn.reply(
                m.chat,
                `《❌》No se pudo obtener el enlace de descarga. Verifica el enlace y vuelve a intentarlo.`,
                m
            );
        }

        let title = json.title || "Sin título";
        let dl_url = json.download;

        await conn.sendMessage(
            m.chat,
            { 
                audio: { url: dl_url }, 
                fileName: `${title}.mp3`, 
                mimetype: 'audio/mp4' 
            },
            { quoted: m }
        );

        await m.react('✅');

    } catch (error) {
        console.error(error);
        await m.react('❌');
        conn.reply(
            m.chat,
            `《❌》Ocurrió un error al intentar descargar el audio. Por favor, verifica el enlace e inténtalo nuevamente.`,
            m
        );
    }
};

handler.help = ['ytmp3 *<url>*']
handler.tags = ['dl']
handler.command = ['ytmp3', 'fgmp3', 'yta'];

export default handler; */