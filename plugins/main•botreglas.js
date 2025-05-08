// Reglas Para Shadow_OFC

let handler = async (m, { conn, usedPrefix, command }) => {
    let img = "./src/catalago.jpg";

    let fkontak = {
        "key": {
            "participants": "0@s.whatsapp.net",
            "remoteJid": "status@broadcast",
            "fromMe": false,
            "id": "Halo"
        },
        "message": {
            "contactMessage": {
                "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
            }
        },
        "participant": "0@s.whatsapp.net"
    };

    let shadow = `ꔷ⃘࣭࣭࣭࣭ٜ❀۫  ၞ࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭ٜٜٜꪳ❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ⟅◌ٜ࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭◌⟆࣭࣭ٜ࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭໑⃕ꔷ⃘࣭࣭࣭࣭ٜ❀۫  ၞ࣭࣭࣭࣭࣭࣭࣭࣭࣭࣭ٜٜٜꪳ❀⃘࣭࣭࣭
╭━━━━━━━━━━━━⬣
┇ \`𝐑𝐞𝐠𝐥𝐚𝐬 𝐃𝐞\`
┇ \`${botname}\`
╰━━━━━━━━━━━━⬣


╔═══*.·:·.☽✧    ✦    ✧☾.·:·.*═══╗
> 🌤️》•No llamar al bot.
> ⚡》•No hacerle spam al bot.
> ☕》•Contacta al creador si es necesario.
> 🍧》•Usa el bot de forma apropiada.
> ⚔️》•Pedir permiso para añadir al bot a un grupo.
╚═══*.·:·.☽✧    ✦    ✧☾.·:·.*═══╝
      ֗ 𝆺𝅥 𝆭    ִ ֗ 𝆺𝅥 𝆭    ִ ֗ 𝆺𝅥  𝆭    ִ ֗ 𝆺𝅥 𝆭    ִ  ֗ 𝆺𝅥 𝆭     ִ  ֗ 𝆺𝅥

> *╭━━━━━━━━━━━━┅┈*
> *┃     📚 \`NOTA:\`*
> *┣━━━━━━━━━━━━┅┈*
> *┃ Si rompe alguna de*
> *┃ las reglas del bot, puede*
> *┃ ser baneado y bloqueado*
> *┃ del bot.*
> *╰━━━━━━━━━━━━┅┈*
 
> ╭≼ཊ🚀⊰⸎҉✯︎ஓ֯͜͡☕֯͜͡ஓ✯︎⸎҉⊱👑ཏ≽╮
> ʂι ƚҽ ɠυʂƚα ҽʅ Ⴆσƚ, ƚαɱႦιҽɳ
> ρυҽԃҽʂ ιɾ αʅ ɾҽρσʂιƚσɾισ ყ
> ԃҽʝαɾ υɳα 🌟 
> ╰≼ཊ🚀⊰⸎✯︎҉ஓ֯͜͡☕֯͜͡ஓ✯︎⸎҉⊱👑ཏ≽╯  
🚀⫘⫘⫘❁︩︪•°ֺ໋۪݊⚔️°໋•︪︩❁⫘⫘⫘🚀\n${global.md}\n> ${textbot}`.trim(); 

    await conn.reply(m.chat, shadow, m, rcanal);
};

handler.help = ['botreglas'];
handler.tags = ['main'];
handler.command = ['botreglas', 'reglasdelbot', 'reglasbot', 'reglas'];
handler.coin = 5;
handler.register = true;

export default handler;

const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':');
}
