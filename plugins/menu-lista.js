import ws from 'ws';

let handler = async (m, { conn, prefijo, text, args, command }) => {
    let uniqueUsers = new Map();

    let users = [...uniqueUsers.values()];
    let totalUsers = users.length;
    let name = await conn.getName(m.sender);
    let totalusr = Object.keys(global.db.data.users).length;
    let rtotal = Object.entries(global.db.data.users).length || '0'
    let _uptime = process.uptime() * 1000;
    let uptime = clockString(_uptime);
    let username = conn.getName(m.sender);
    //let name = conn.getName(m.sender)
    let locale = 'es';
    let d = new Date(new Date + 3600000);
    let time = d.toLocaleTimeString(locale, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });

    let totalreg = Object.keys(global.db.data.users).length;
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length;

    m.react("⚔️");
    let menu = ``;

    let txt = `╭࣭࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🚀⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫╮\n`
        txt += `⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬𝐇𝐨𝐥𝐚: ${name}💖\n`  
        txt += `⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬𝐓𝐢𝐞𝐦𝐩𝐨 𝐀𝐜𝐭𝐢𝐯𝐨\n`
        txt += `⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬${uptime}⏱️\n`
        txt += `⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬𝐔𝐬𝐮𝐚𝐫𝐢𝐨𝐬 𝐑𝐞𝐠𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐬\n`
        txt += `⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬${rtotalreg}🧩\n`
        txt += `⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬𝐓𝐨𝐭𝐚𝐥 𝐝𝐞 𝐔𝐬𝐮𝐚𝐫𝐢𝐨𝐬\n`
        txt += `⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬${rtotal}🌺\n`
        txt += `⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬𝐕𝐞𝐫𝐬𝐢𝐨́𝐧 𝐝𝐞𝐥 𝐛𝐨𝐭\n`
        txt += `⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬${vs}\n`
        txt += `⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬𝐒𝐞𝐥𝐞𝐜𝐜𝐢𝐨𝐧𝐚 𝐭𝐮 𝐥𝐨 𝐪𝐮𝐞 𝐪𝐮𝐢𝐞𝐫𝐚𝐬 𝐮𝐬𝐚𝐫\n`
        txt += `⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬𝐃𝐢𝐬𝐟𝐫𝐮𝐭𝐚 𝐝𝐞𝐥 𝐁𝐨𝐭 (๑˃̵　ᴗ　˂̵)و\n`
        txt += `╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸┄̸࣭࣭࣭࣭࣭ٜ۫╯ׂ`;

    let listSections = []
listSections.push({
title: `✎ SELECCIÓNA LO QUE NECESITES`, highlight_label: `Popular Shadow`,
rows: [
{
title: "│🤴│ᴄʀᴇᴀᴅᴏʀ ᴅᴇʟ ʙᴏᴛ", 
description: "ɴᴜᴍᴇʀᴏs ᴏғɪᴄɪᴀʟᴇs ᴅᴇ ꧁⟣٭𝕹𝕷𝕬٭⟢꧂",
id: `${prefijo}owner`,
},
{
title: "│🔥│ɢʀᴜᴘᴏs ᴏғᴄ ᴅᴇʟ ʙᴏᴛ", 
description: "ᴏʙᴛᴇɴ ʟᴀ ʟɪsᴛᴀ ᴅᴇ ʟᴏs ɢʀᴜᴘᴏs ᴏғɪᴄɪᴀʟᴇs ᴅᴇ sʜᴀᴅᴏᴡ-ʙᴏᴛ",
id: `${prefijo}grupos`,
},
{
title: "│❤️‍🔥│ᴇsᴛᴀᴅᴏ ᴅᴇʟ ʙᴏᴛ", 
description: "ᴏʙᴛᴇɴ ʟᴀ ɪɴғᴏʀᴍᴀᴄɪᴏɴ ᴅᴇʟ ᴇsᴛᴀᴅᴏ ᴀᴄᴛᴜᴀʟ ᴅᴇʟ ʙᴏᴛ",
id: `${prefijo}estado`,
},
{
title: "│❔│ɪɴғᴏ ᴅᴇʟ ʙᴏᴛ", 
description: "ᴏʙᴛᴇɴ ʟᴀ ɪɴғᴏʀᴍᴀᴄɪᴏɴ ᴅᴇ sʜᴀᴅᴏᴡ-ʙᴏᴛ",
id: `${prefijo}infobot`,
},
{
title: "│🏆│ᴀᴘᴏʏᴀʀ ᴀʟ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ", 
description: "sɪ ᴛᴇ ɢᴜsᴛᴀ ᴇʟ ʙᴏᴛ ᴀǫᴜɪ ᴘᴏᴅʀᴀs ᴀʏᴜᴅᴀʀ ᴀ ʟᴏs ǫᴜᴇ ʜɪᴄɪᴇʀᴏɴ ᴇsᴛᴏ ᴘᴏsɪʙʟᴇ",
id: `${prefijo}donar`,
},
{
title: "│🧩│ᴄᴜᴇɴᴛᴀs ᴏғɪᴄɪᴀʟᴇs", 
description: "ᴏʙᴛᴇɴ ʟᴀ ɪɴғᴏʀᴍᴀᴄɪᴏɴ ᴅᴇ ʟᴀs ᴄᴜᴇɴᴛᴀs ᴏғɪᴄɪᴀʟᴇs ᴅᴇ ʟᴏs ᴄʀᴇᴀᴅᴏʀᴇs ᴅᴇʟ ʙᴏᴛ",
id: `${prefijo}cuentas`,
},
{
title: "│🥂│sᴜʙʙᴏᴛs ᴀᴄᴛɪᴠᴏs", 
description: "ᴏʙᴛᴇɴ ᴜɴᴀ ʟɪsᴛᴀ ᴅᴇ ʟᴏs ʙᴏᴛs (sᴜʙʙᴏᴛs) ᴀᴄᴛɪᴠᴏs ᴀᴄᴛᴜᴀʟᴍᴇɴᴛᴇ",
id: `${prefijo}bots`,
},
],
},
{
title: 'Sᴏʟᴜᴄɪᴏɴ ᴀ Eʀʀᴏʀᴇs', highlight_label: "Importante",
rows: [
{
title: "│🧊│ᴍᴇɴsᴀᴊᴇs ᴇɴ ᴇsᴘᴇʀᴀ", 
description: "ᴅɪsᴘᴏɴɪʙʟᴇ ᴘᴀʀᴀ ᴛᴏᴅᴏs ᴜsᴀ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ sɪ ɴᴏ ᴘᴜᴇᴅᴇs ᴠᴇʀ ʟᴏs ᴍᴇɴsᴀᴊᴇs ᴅᴇʟ ʙᴏᴛ ᴏ ᴛᴇ sᴀʟᴇɴ ᴄᴏᴍᴏ ᴍᴇɴsᴀᴊᴇ ᴇɴ ᴇsᴘᴇʀᴀ",
id: `${prefijo}fixmsgespera`,
},
{
title: "│🍹│ᴍᴇɴsᴀᴊᴇs ᴇɴ ᴇsᴘᴇʀᴀ (ᴏᴡɴᴇʀ)", 
description: "ᴅɪsᴘᴏɴɪʙʟᴇ sᴏʟᴏ ᴘᴀʀᴀ ᴇʟ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ ᴅᴇʟ ʙᴏᴛ, sᴇ ᴜsᴀ ᴄᴜᴀɴᴅᴏ ɴᴏ sᴀʟᴇɴ ʟᴏs ᴍᴇɴsᴀᴊᴇs ᴅᴇʟ ʙᴏᴛ",
id: `${prefijo}ds`,
},
],
},
{
title: 'Mᴇɴᴜs ᴅᴇ Sᴀᴅᴏᴡ-Bᴏᴛ', highlight_label: "Popular",
rows: [
{
title: "│✨│ᴍᴇɴᴜ ᴄᴏᴍᴘʟᴇᴛᴏ", 
description: "ᴏʙᴛᴇɴ ᴇʟ ᴍᴇɴᴜ ᴄᴏᴍᴘʟᴇᴛᴏ ᴄᴏɴ ᴛᴏᴅᴀs ʟᴀs ғᴜɴᴄɪᴏɴᴇs ᴅᴇ sʜᴀᴅᴏᴡ-ʙᴏᴛ",
id: `${prefijo}menu`,
},
{
title: "│🔮│ᴍᴇɴᴜ ᴀɴɪᴍᴇ", 
description: "ᴏʙᴛᴇɴ ᴇʟ ᴍᴇɴᴜ ᴅᴇ ᴀɴɪᴍᴇs ᴅᴇʟ ʙᴏᴛ",
id: `${prefijo}menuanimes`,
},
{
title: "│🎮│ᴍᴇɴᴜ ᴊᴜᴇɢᴏs", 
description: "ᴏʙᴛᴇɴ ᴇʟ ᴍᴇɴᴜ ᴅᴇ ᴊᴜᴇɢᴏs ᴅᴇʟ ʙᴏᴛ",
id: `${prefijo}menujuegos`,
},
{
title: "│🎼│ᴍᴇɴᴜ ᴀᴜᴅɪᴏs", 
description: "ᴏʙᴛᴇɴ ᴇʟ ᴍᴇɴᴜ ᴅᴇ ᴀᴜᴅɪᴏs ᴅᴇʟ ʙᴏᴛ",
id: `${prefijo}menuaudios`,
},
{
title: "│💦│ᴍᴇɴᴜ ᴄᴏᴍᴀɴᴅᴏs +𝟷𝟾", 
description: "ᴏʙᴛᴇɴ ᴇʟ ᴍᴇɴᴜ ᴅᴇ ᴄᴏᴍᴀɴᴅᴏs +𝟷𝟾 ᴅᴇʟ ʙᴏᴛ",
id: `${prefijo}hornymenu`,
},
{
title: "│⚡│ᴍᴇɴᴜ ᴏᴡɴᴇʀ", 
description: "ᴏʙᴛᴇɴ ᴇʟ ᴍᴇɴᴜ ᴅᴇʟ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ ᴅᴇʟ ʙᴏᴛ",
id: `${prefijo}menuowner`,
},
],
},
{
title: 'Sᴇʀ ʙᴏᴛ Jᴀᴅɪʙᴏᴛ', highlight_label: "SerSubbot",
rows: [
{
title: "│🔗│ʙᴏᴛᴄʟᴏɴᴇ", 
description: "ᴄᴏɴᴠɪᴇ́ʀᴛᴇᴛᴇ ᴇɴ ᴜɴ ᴄʟᴏɴ ᴅᴇ ᴇsᴛᴇ ɪɴᴄʀᴇɪ́ʙʟᴇ ʙᴏᴛ ᴇsᴄᴀɴᴇᴀɴᴅᴏ ᴜɴ ǫʀ ᴇɴ ᴛᴜ ᴡʜᴀᴛsᴀᴘᴘ",
id: `${prefijo}serbot`,
},
{
title: "│🔗│ʙᴏᴛᴄʟᴏɴᴇ", 
description: "ᴄᴏɴᴠɪᴇ́ʀᴛᴇᴛᴇ ᴇɴ ᴜɴ ᴄʟᴏɴ ᴅᴇ ᴇsᴛᴇ ɪɴᴄʀᴇɪ́ʙʟᴇ ʙᴏᴛ ᴇsᴄʀɪʙɪᴇɴᴅᴏ ᴇsᴛᴇ ᴄᴏᴅɪɢᴏ ᴅᴇ 8 ᴅɪɢɪᴛᴏs ᴇɴ ᴛᴜ ᴡʜᴀᴛsᴀᴘᴘ, ᴇʟ ᴄᴏᴅɪɢᴏ sᴏʟᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴇʟ ɴᴜᴍᴇʀᴏ ǫᴜᴇ ʟᴏ sᴏʟɪᴄɪᴛᴏ",
id: `${prefijo}serbot code`,
},
{
title: "│🗑│ᴅᴇʟᴇᴛᴇʙᴏᴛ", 
description: "ᴇʟɪᴍɪɴᴀ ᴛᴜ ᴄᴏᴘɪᴀ (sᴜʙʙᴏᴛ) ᴅᴇ ᴍᴇɢᴜᴍɪɴ-ʙᴏᴛ",
id: `${prefijo}deletebot`,
},
{
title: "│🔗│sᴛᴏᴘ ᴍʏ sᴜʙʙᴏᴛ", 
description: "ᴅᴇᴛᴇɴ ᴅᴇ ғᴏʀᴍᴀ ᴛᴇᴍᴘᴏʀᴀʟ ᴛᴜ sᴜʙʙᴏᴛ",
id: `${prefijo}stop`,
},
],
},
{
title: 'Aᴄᴛɪᴠᴀʀ ᴏ Dᴇsᴀᴄᴛɪᴠᴀʀ', highlight_label: "Importantes",
rows: [
{
title: "│✅│ᴀᴄᴛɪᴠᴀʀ ʀᴇsᴛʀɪᴄᴄɪᴏɴᴇs", 
description: "ᴀᴄᴛɪᴠᴀ ʟᴀs ʀᴇsᴛʀɪᴄᴄɪᴏɴᴇs ᴅᴇʟ ʙᴏᴛ ᴘᴀʀᴀ ǫᴜᴇ ᴇsᴛᴇ ᴘᴜᴇᴅᴀ ᴀᴅᴍɪɴɪsᴛʀᴀʀ ᴍᴇᴊᴏʀ ʟᴏs ɢʀᴜᴘᴏs (sᴏʟᴏ ᴇʟ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ)",
id: `${prefijo}enable restrict`,
},
{
title: "│❎│ᴅᴇsᴀᴄᴛɪᴠᴀʀ ʀᴇsᴛʀɪᴄᴄɪᴏɴᴇs", 
description: "ᴅᴇsᴀᴄᴛɪᴠᴀ ʟᴀs ʀᴇsᴛʀɪᴄᴄɪᴏɴᴇs ᴅᴇʟ ʙᴏᴛ ᴘᴏʀ ʟᴏ ᴄᴜᴀʟ ɴᴏ ᴇʟɪᴍɪɴᴀʀᴀ́ ᴀ ʟᴏs ᴜsᴜᴀʀɪᴏs (sᴏʟᴏ ᴇʟ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ)",
id: `${prefijo}disable restrict`,
},
{
title: "│✅│ᴀᴄᴛɪᴠᴀʀ ᴡᴇʟᴄᴏᴍᴇ", 
description: "ᴀᴄᴛɪᴠᴀ ᴇʟ ᴍᴇɴsᴀᴊᴇ ᴅᴇ ʙɪᴇɴᴠᴇɴɪᴅᴀ ᴇɴ ᴇʟ ɢʀᴜᴘᴏ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}enable welcome`,
},
{
title: "│❎│ᴅᴇsᴀᴄᴛɪᴠᴀʀ ᴡᴇʟᴄᴏᴍᴇ", 
description: "ᴅᴇsᴀᴄᴛɪᴠᴀ ᴇʟ ᴍᴇɴsᴀᴊᴇ ᴅᴇ ʙɪᴇɴᴠᴇɴɪᴅᴀ ᴇɴ ᴇʟ ɢʀᴜᴘᴏ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}disable welcome`,
},
{
title: "│✅│ᴀᴄᴛɪᴠᴀʀ ᴍᴏᴅᴏʜᴏʀɴʏ", 
description: "ᴀᴄᴛɪᴠᴀ ʏ ᴘᴇʀᴍɪᴛᴇ ǫᴜᴇ ʟᴏs ᴜsᴜᴀʀɪᴏs ᴘᴜᴇᴅᴀɴ ᴜsᴀʀ ʟᴏs ᴄᴏᴍᴀɴᴅᴏs +𝟷𝟾 ᴅᴇʟ ʙᴏᴛ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}enable modohorny`,
},
{
title: "│❎│ᴅᴇsᴀᴄᴛɪᴠᴀʀ ᴍᴏᴅᴏʜᴏʀɴʏ", 
description: "ᴅᴇsᴀᴄᴛɪᴠᴀ ʏ ᴇᴠɪᴛᴀ ǫᴜᴇ ʟᴏs ᴜsᴜᴀʀɪᴏs ᴘᴜᴇᴅᴀɴ ᴜsᴀʀ ʟᴏs ᴄᴏᴍᴀɴᴅᴏs +𝟷𝟾 ᴅᴇʟ ʙᴏᴛ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}disable modohorny`,
},
{
title: "│✅│ᴀᴄᴛɪᴠᴀʀ ᴀɴᴛɪʟɪɴᴋ",
description: "ᴀᴄᴛɪᴠᴀ ʟᴀ ᴘʀᴏᴛᴇᴄᴄɪᴏ́ɴ ᴀɴᴛɪʟɪᴄᴋ, ᴇʟ ʙᴏᴛ ᴇʟɪᴍɪɴᴀʀᴀ́ ᴀ ʟᴏs ᴜsᴜᴀʀɪᴏs ǫᴜᴇ ᴍᴀɴᴅᴇɴ ʟɪɴᴋ ᴅᴇ ɢʀᴜᴘᴏs ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}enable antilink`,
},
{
title: "│❎│ᴅᴇsᴀᴄᴛɪᴠᴀʀ ᴀɴᴛɪʟɪɴᴋ", 
description: "ᴅᴇsᴀᴄᴛɪᴠᴀ ʟᴀ ᴘʀᴏᴛᴇᴄᴄɪᴏ́ɴ ᴀɴᴛɪʟɪᴄᴋ, ᴇʟ ʙᴏᴛ ɴᴏ ᴇʟɪᴍɪɴᴀʀᴀ́ ᴀ ʟᴏs ᴜsᴜᴀʀɪᴏs ᴏ̨ᴜᴇ ᴍᴀɴᴅᴇɴ ʟɪɴᴋ ᴅᴇ ɢʀᴜᴘᴏs ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}disable antilink`,
},
{
title: "│✅│ᴀᴄᴛɪᴠᴀʀ ᴀɴᴛɪʟɪɴᴋ𝟸", 
description: "ᴀᴄᴛɪᴠᴀ ʟᴀ ᴘʀᴏᴛᴇᴄᴄɪᴏ́ɴ ᴀɴᴛɪʟɪᴄᴋ𝟸, ᴇʟ ʙᴏᴛ ᴇʟɪᴍɪɴᴀʀᴀ́ ᴀ ʟᴏs ᴜsᴜᴀʀɪᴏs ǫᴜᴇ ᴍᴀɴᴅᴇɴ ᴄᴜᴀʟǫᴜɪᴇʀ ʟɪɴᴋ ᴀʟ ɢʀᴜᴘᴏ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}enable antilink2`,
},
{
title: "│❎│ᴅᴇsᴀᴄᴛɪᴠᴀʀ ᴀɴᴛɪʟɪɴᴋ𝟸", 
description: "ᴀᴄᴛɪᴠᴀ ʟᴀ ᴘʀᴏᴛᴇᴄᴄɪᴏ́ɴ ᴀɴᴛɪʟɪᴄᴋ𝟸, ᴇʟ ʙᴏᴛ ɴᴏ ᴇʟɪᴍɪɴᴀʀᴀ́ ᴀ ʟᴏs ᴜsᴜᴀʀɪᴏs ᴏ̨ᴜᴇ ᴍᴀɴᴅᴇɴ ᴄᴜᴀʟᴏ̨ᴜɪᴇʀ ʟɪɴᴋ ᴀʟ ɢʀᴜᴘᴏ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}disable antilink2`,
},
{
title: "│✅│ᴀᴄᴛɪᴠᴀʀ ᴅᴇᴛᴇᴄᴛ", 
description: "ᴇʟ ʙᴏᴛ ᴅᴇᴛᴇᴄᴛᴀʀᴀ ʏ ɪɴғᴏʀᴍᴀʀᴀ ᴇɴ ᴇʟ ɢʀᴜᴘᴏ ᴀᴄᴇʀᴄᴀ ᴅᴇ ᴄᴜᴀʟǫᴜɪᴇʀ ᴀᴄᴛɪᴠɪᴅᴀᴅ ᴇɴ ʟᴀ ᴄᴏɴғɪɢᴜʀᴀᴄɪᴏ́ɴ ᴅᴇʟ ɢʀᴜᴘᴏ ᴇᴊᴇᴍᴘʟᴏ ᴄᴜᴀɴᴅᴏ sᴇ ᴘʀᴏᴍᴜᴇᴠᴇ ᴜɴ ɴᴜᴇᴠᴏ ᴀᴅᴍɪɴ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}enable detect`,
},
{
title: "│❎│ᴅᴇsᴀᴄᴛɪᴠᴀʀ ᴅᴇᴛᴇᴄᴛ", 
description: "ᴇʟ ʙᴏᴛ ɴᴏ ᴅᴇᴛᴇᴄᴛᴀʀᴀ ɴɪ ɪɴғᴏʀᴍᴀʀᴀ ᴇɴ ᴇʟ ɢʀᴜᴘᴏ ᴀᴄᴇʀᴄᴀ ᴅᴇ ᴄᴜᴀʟᴏ̨ᴜɪᴇʀ ᴀᴄᴛɪᴠɪᴅᴀᴅ ᴇɴ ʟᴀ ᴄᴏɴғɪɢᴜʀᴀᴄɪᴏ́ɴ ᴅᴇʟ ɢʀᴜᴘᴏ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}disable detect`,
},
{
title: "│✅│ᴀᴄᴛɪᴠᴀʀ ᴀᴜᴅɪᴏs",
description: "sᴇ ᴀᴄᴛɪᴠᴀʀᴀ́ɴ ʟᴏs ᴀᴜᴅɪᴏs ᴅᴇʟ ʙᴏᴛ,ʀᴇᴄᴏᴍᴇɴᴅᴀʙʟᴇ ɴᴏ ʜᴀᴄᴇʀ sᴘᴀᴍ ᴅᴇ ᴇsᴛᴏs ᴀᴜᴅɪᴏs, ᴘᴀʀᴀ ᴍᴀs ɪɴғᴏʀᴍᴀᴄɪᴏ́ɴ ᴜsᴇ !ᴍᴇɴᴜ𝟸 (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}enable audios`,
},
{
title: "│❎│ᴅᴇsᴀᴄᴛɪᴠᴀʀ ᴀᴜᴅɪᴏs", 
description: "sᴇ ᴅᴇsᴀᴄᴛɪᴠᴀʀᴀ́ɴ ʟᴏs ᴀᴜᴅɪᴏs ᴅᴇʟ ʙᴏᴛ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}disable audios`,
},
{
title: "│✅│ᴀᴄᴛɪᴠᴀʀ ᴀᴜᴛᴏsᴛɪᴄᴋᴇʀ",
description: "ᴇʟ ʙᴏᴛ ᴇɴᴠɪᴀʀᴀ́ ᴀᴜᴛᴏᴍᴀ́ᴛɪᴄᴀᴍᴇɴᴛᴇ ᴇɴ ғᴏʀᴍᴀ ᴅᴇ sᴛɪᴄᴋᴇʀ ᴀ ᴄᴜᴀʟǫᴜɪᴇʀ ɪᴍᴀɢᴇɴ ɢɪғ ᴏ ᴠɪᴅᴇᴏ(𝟽 sᴇɢᴜɴᴅᴏs), ʀᴇᴄᴏᴍᴇɴᴅᴀʙʟᴇ ɴᴏ ʜᴀᴄᴇʀ sᴘᴀᴍ ᴄᴏɴ ᴇsᴛᴀ ғᴜɴᴄɪᴏɴ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}enable autosticker`,
},
{
title: "│❎│ᴅᴇsᴀᴄᴛɪᴠᴀʀ ᴀᴜᴛᴏsᴛɪᴄᴋᴇʀ", 
description: "ᴇʟ ʙᴏᴛ ɴᴏ ᴇɴᴠɪᴀʀᴀ́ ᴀᴜᴛᴏᴍᴀ́ᴛɪᴄᴀᴍᴇɴᴛᴇ ᴇɴ ғᴏʀᴍᴀ ᴅᴇ sᴛɪᴄᴋᴇʀ ᴀ ᴄᴜᴀʟᴏ̨ᴜɪᴇʀ ɪᴍᴀɢᴇɴ ɢɪғ ᴏ ᴠɪᴅᴇᴏ ᴜsᴀʀᴀɴ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ !s ᴘᴀʀᴀ ᴇsᴏ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}disable autosticker`,
},
{
title: "│✅│ᴀᴄᴛɪᴠᴀʀ ᴀɴᴛɪᴠɪᴇᴡᴏɴᴄᴇ", 
description: "ᴇʟ ʙᴏᴛ ʀᴇᴇɴᴠɪᴀʀᴀ ᴇʟ ᴀʀᴄʜɪᴠᴏ ǫᴜᴇ ᴍᴀɴᴅᴇɴ ᴇɴ ғᴏʀᴍᴀ ᴅᴇ ᴠɪᴇᴡᴏɴᴄᴇ(ᴠᴇʀ ᴜɴᴀ ᴠᴇᴢ) ᴀʟ ɢʀᴜᴘᴏ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}enable antiviewonce`,
},
{
title: "│❎│ᴅᴇsᴀᴄᴛɪᴠᴀʀ ᴀɴᴛɪᴠɪᴇᴡᴏɴᴄᴇ", 
description: "ᴇʟ ʙᴏᴛ ɴᴏ ʀᴇᴇɴᴠɪᴀʀᴀ ᴇʟ ᴀʀᴄʜɪᴠᴏ ᴏ̨ᴜᴇ ᴍᴀɴᴅᴇɴ ᴇɴ ғᴏʀᴍᴀ ᴅᴇ ᴠɪᴇᴡᴏɴᴄᴇ(ᴠᴇʀ ᴜɴᴀ ᴠᴇᴢ) ᴀʟ ɢʀᴜᴘᴏ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}disable antiviewonce`,
},
{
title: "│✅│ᴀᴄᴛɪᴠᴀʀ ᴀɴᴛɪᴛᴏxɪᴄ",
description: "ᴇʟ ʙᴏᴛ ᴅᴇᴛᴇᴄᴛᴀʀᴀ́ ʏ ᴇʟɪᴍɪɴᴀʀᴀ́ ᴀ ʟᴀ ᴘᴇʀsᴏɴᴀ ᴏ̨ᴜᴇ ᴍᴀɴᴅᴇ ᴍᴀʟᴀs ᴘᴀʟᴀʙʀᴀs ᴀʟ ɢʀᴜᴘᴏ (sᴏʟᴏ ɢᴀʏs)",
id: `${prefijo}enable antitoxic`,
},
{
title: "│❎│ᴅᴇsᴀᴄᴛɪᴠᴀʀ ᴀɴᴛɪᴛᴏxɪᴄ", 
description: "ᴇʟ ʙᴏᴛ ɴᴏ ᴅᴇᴛᴇᴄᴛᴀʀᴀ́ ɴɪ ᴇʟɪᴍɪɴᴀʀᴀ́ ᴀ ʟᴀ ᴘᴇʀsᴏɴᴀ ᴏ̨ᴜᴇ ᴍᴀɴᴅᴇ ᴍᴀʟᴀs ᴘᴀʟᴀʙʀᴀs ᴀʟ ɢʀᴜᴘᴏ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}disable antitoxic`,
},
{
title: "│✅│ᴀᴄᴛɪᴠᴀʀ ᴀɴᴛɪᴛʀᴀʙᴀ", 
description: "ᴇʟ ʙᴏᴛ ᴅᴇᴛᴇᴄᴛᴀʀᴀ́ ʏ ᴇʟɪᴍɪɴᴀʀᴀ́ ᴀʟ ᴜsᴜᴀʀɪᴏ ǫᴜᴇ ᴍᴀɴᴅᴇ ᴛʀᴀʙᴀs ᴀʟ ɢʀᴜᴘᴏ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}enable antitraba`,
},
{
title: "│❎│ᴅᴇsᴀᴄᴛɪᴠᴀʀ ᴀɴᴛɪᴛʀᴀʙᴀ", 
description: "ᴇʟ ʙᴏᴛ ɴᴏ ᴅᴇᴛᴇᴄᴛᴀʀᴀ́ ɴɪ ᴇʟɪᴍɪɴᴀʀᴀ́ ᴀʟ ᴜsᴜᴀʀɪᴏ ᴏ̨ᴜᴇ ᴍᴀɴᴅᴇ ᴛʀᴀʙᴀs ᴀʟ ɢʀᴜᴘᴏ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}disable antitraba`,
},
{
title: "│✅│ᴀᴄᴛɪᴠᴀʀ ᴀɴᴛɪᴀʀᴀʙᴇs", 
description: "ᴇʟ ʙᴏᴛ ᴅᴇᴛᴇᴄᴛᴀʀᴀ́ ʏ ᴇʟɪᴍɪɴᴀʀᴀ́ ᴀ ʟᴏs ᴀ́ʀᴀʙᴇs ǫᴜᴇ ɪɴᴛᴇɴᴛᴇɴ ᴇɴᴛʀᴀʀ ᴀʟ ɢʀᴜᴘᴏ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}enable antiarabes`,
},
{
title: "│❎│ᴅᴇsᴀᴄᴛɪᴠᴀʀ ᴀɴᴛɪᴀʀᴀʙᴇs", 
description: "ᴇʟ ʙᴏᴛ ɴᴏ ᴅᴇᴛᴇᴄᴛᴀʀᴀ́ ɴɪ ᴇʟɪᴍɪɴᴀʀᴀ́ ᴀ ʟᴏs ᴀ́ʀᴀʙᴇs ᴏ̨ᴜᴇ ᴇɴᴛʀᴇɴ ᴀʟ ɢʀᴜᴘᴏ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}disable antiarabes`,
},
{
title: "│✅│ᴀᴄᴛɪᴠᴀʀ ᴍᴏᴅᴏᴀᴅᴍɪɴ", 
description: "ᴇʟ ʙᴏᴛ sᴏʟᴏ ʀᴇsᴘᴏɴᴅᴇʀᴀ́ ᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs ᴅᴇʟ ɢʀᴜᴘᴏ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}enable modoadmin`,
},
{
title: "│❎│ᴅᴇsᴀᴄᴛɪᴠᴀʀ ᴍᴏᴅᴏᴀᴅᴍɪɴ", 
description: "ᴇʟ ʙᴏᴛ ʀᴇsᴘᴏɴᴅᴇʀᴀ́ ᴀ ᴛᴏᴅᴏs ʟʟs ᴜsᴜᴀʀɪᴏs ᴅᴇʟ ɢʀᴜᴘᴏ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}disable modoadmin`,
},
{
title: "│✅│ᴀᴄᴛɪᴠᴀʀ ᴀɴᴛɪᴅᴇʟᴇᴛᴇ", 
description: "ᴇʟ ʙᴏᴛ ᴍᴏsᴛʀᴀʀᴀ́ ʟᴏs ᴍᴇɴsᴀᴊᴇs ᴇʟɪᴍɪɴᴀᴅᴏs ᴇɴ ᴇʟ ɢʀᴜᴘᴏ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}enable antidelete`,
},
{
title: "│❎│ᴅᴇsᴀᴄᴛɪᴠᴀʀ ᴀɴᴛɪᴅᴇʟᴇᴛᴇ", 
description: "ᴇʟ ʙᴏᴛ ɴᴏ ᴍᴏsᴛʀᴀʀᴀ́ ʟᴏs ᴍᴇɴsᴀᴊᴇs ᴇʟɪᴍɪɴᴀᴅᴏs ᴇɴ ᴇʟ ɢʀᴜᴘᴏ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}disable antidelete`,
},
],
},
{
title: 'Gʀᴜᴘᴏs', highlight_label: "hot",
rows: [
{
title: "│📄│ɪɴғᴏʀᴍᴀᴄɪᴏɴ ᴅᴇʟ ɢʀᴜᴘᴏ", 
description: "ᴍᴜᴇsᴛʀᴀ ᴛᴏᴅᴀ ʟᴀ ɪɴғᴏʀᴍᴀᴄɪᴏ́ɴ ᴅᴇʟ ɢʀᴜᴘᴏ",
id: `${prefijo}infogroup`,
},
{
title: "│🍻│ʟɪɴᴋ ᴅᴇʟ ɢʀᴜᴘᴏ", 
description: "ᴏʙᴛᴇɴ ᴅᴇ ғᴏʀᴍᴀ ʀᴀᴘɪᴅᴀ ᴇʟ ʟɪɴᴋ ᴅᴇʟ ɢʀᴜᴘᴏ",
id: `${prefijo}link`,
},
{
title: "│🔏│ʀᴇᴇsᴛᴀʙʟᴇsᴇʀ ʟɪɴᴋ", 
description: "ʀᴇsᴛᴀʙʟᴇᴄᴇ ᴇʟ ʟɪɴᴋ ᴅᴇʟ ɢʀᴜᴘᴏ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}resetlink`,
},
{
title: "│⚠️│ʟɪsᴛᴀ ᴅᴇ ᴀᴅᴠᴇʀᴛᴇɴᴄɪᴀs", 
description: "ᴏʙᴛᴇɴ ʟᴀ ʟɪsᴛᴀ ᴅᴇ ʟᴏs ᴜsᴜᴀʀɪᴏs ǫᴜᴇ ᴛɪᴇɴᴇɴ ᴀᴅᴠᴇʀᴛᴇɴᴄɪᴀs ᴇɴ ᴇʟ ɢʀᴜᴘᴏ",
id: `${prefijo}listwarn`,
},
{
title: "│📢│ɪɴᴠᴏᴄᴀʀ ɢʀᴜᴘᴏ", 
description: "ᴍᴇɴᴄɪᴏɴᴀ ᴀ ᴛᴏᴅᴏs ʟᴏs ᴘᴀʀᴛɪᴄɪᴘᴀɴᴛᴇs ᴅᴇʟ ɢʀᴜᴘᴏ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}tagall`,
},
{
title: "│🔓│ᴀʙʀɪʀ ᴇʟ ɢʀᴜᴘᴏ", 
description: "ʜᴀʙʀᴇ ᴇʟ ɢʀᴜᴘᴏ ʏ ᴘᴇʀᴍɪᴛᴇ ǫᴜᴇ ᴛᴏᴅᴏs ʟᴏs ᴘᴀʀᴛɪᴄɪᴘᴀɴᴛᴇs ʜᴀʙʟᴇɴ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}grupo on`,
},
{
title: "│🔐│ᴄᴇʀʀᴀʀ ᴇʟ ɢʀᴜᴘᴏ", 
description: "ᴄɪᴇʀʀᴀ ᴇʟ ɢʀᴜᴘᴏ ᴅᴇ ᴍᴏᴅᴏ ᴛᴀʟ ǫᴜᴇ sᴏʟᴏ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs ᴘᴜᴇᴅᴇɴ ʜᴀʙʟᴀʀ (sᴏʟᴏ ᴀᴅᴍɪɴs)",
id: `${prefijo}grupo cerrar`,
},
],},
{
title: 'Fʀᴀsᴇs ʏ Tᴇxᴛᴏs', highlight_label: "♡",
rows: [
{
title: "│🍹│ᴘɪʀᴏᴘᴏs", 
description: "ᴏʙᴛᴇɴ ᴜɴ ᴘɪʀᴏᴘᴏ",
id: `${prefijo}piropo`,
},
{
title: "│✌│ᴄᴏɴsᴇᴊᴏs", 
description: "ᴏʙᴛᴇɴ ᴜɴ ᴄᴏɴsᴇᴊᴏ",
id: `${prefijo}consejo`,
},
{
title: "│🥰│ғʀᴀsᴇ ʀᴏᴍᴀɴᴛɪᴄᴀ", 
description: "ᴏʙᴛᴇɴ ᴜɴᴀ ғʀᴀsᴇ ʀᴏᴍᴀɴᴛɪᴄᴀ",
id: `${prefijo}fraseromantica`,
},
{
title: "│💕│ʜɪsᴛᴏʀɪᴀ ʀᴏᴍᴀɴᴛɪᴄᴀ", 
description: "ᴏʙᴛᴇɴ ᴜɴᴀ ᴘᴇǫᴜᴇɴ̃ᴀ ʜɪsᴛᴏʀɪᴀ ʀᴏᴍᴀɴᴛɪᴄᴀ",
id: `${prefijo}historiaromantica`,
},
],
},
{
title: 'Rᴀɴᴅᴏᴍ',
rows: [
{
title: "│🏞│ᴀᴠᴇɴᴛᴜʀᴀ", 
description: "ᴅɪʀɪ́ɢᴇᴛᴇ ᴀ ᴜɴᴀ ɢʀᴀɴ ᴀᴠᴇɴᴛᴜʀᴀ ʏ ɢᴀɴᴀ ᴜɴᴀ ʀᴇᴄᴏᴍᴘᴇɴsᴀ ᴘᴏʀ ᴇʟʟᴏ",
id: `${prefijo}adventure`,
},
{
title: "│🏹│ᴄᴀᴢᴀʀ", 
description: "sᴀʟ ᴅᴇ ᴄᴀᴢᴀ ʏ ɢᴀɴᴀ ᴛᴜ ʀᴇᴄᴏᴍᴘᴇɴsᴀ",
id: `${prefijo}cazar`,
},
{
title: "│🎲│ᴄᴏғʀᴇ", 
description: "ʜᴀʙʀᴇ́ ᴜɴ ᴄᴏғʀᴇ ʏ ᴏʙᴛᴇɴ ᴛᴜ ʀᴇᴄᴏᴍᴘᴇɴsᴀ ᴅɪᴀʀɪᴀ",
id: `${prefijo}cofre`,
},
{
title: "│⚖️│ʙᴀʟᴀɴᴄᴇ", 
description: "ᴏʙsᴇʀᴠᴀ ʟᴏ ǫᴜᴇ ᴛɪᴇɴᴇs ᴇɴ ᴛᴜ ɪɴᴠᴇɴᴛsʀɪᴏ",
id: `${prefijo}balance`,
},
{
title: "│💰│ᴄʟᴀɪᴍ", 
description: "ᴏʙᴛᴇɴ ᴛᴜ ʀᴇᴄᴏᴍᴘᴇɴsᴀ ᴅɪᴀʀɪᴀ",
id: `${prefijo}claim`,
},
{
title: "│🩹│ʜᴇᴀʟ", 
description: "ᴏʙᴛᴇɴ ᴛᴜ ᴇsᴛᴀᴅᴏ ᴅᴇ ᴠɪᴅᴀ ᴀᴄᴛᴜᴀʟ",
id: `${prefijo}heal`,
},
{
title: "│💯│ʟᴇᴀᴅᴇʀʙᴏᴀʀᴅ", 
description: "ᴏʙsᴇʀᴠᴀ ᴇʟ ᴛᴏᴘ𝟷𝟶 ᴜsᴜᴀʀɪᴏs ᴄᴏɴ ᴍᴀs xᴘ ʏ ᴄᴏᴍᴘᴀʀᴀ ᴛᴜ ʟᴜɢᴀʀ",
id: `${prefijo}lb`,
},
{
title: "│🌀│ʟᴇᴠᴇʟᴜᴘ", 
description: "sᴜʙᴇ ᴅᴇ ɴɪᴠᴇʟ ɪɴsᴛᴀɴᴛᴀ́ɴᴇᴀᴍᴇɴᴛᴇ sɪ ᴛɪᴇɴᴇs ᴇʟ xᴘ sᴜғɪᴄɪᴇɴᴛᴇ",
id: `${prefijo}levelup`,
},
{
title: "│👤│ᴘᴇʀғɪʟ", 
description: "ᴇᴄʜᴀ ᴜɴ ᴠɪsᴛᴀsᴏ ᴀ ᴛᴜ ᴘᴇʀғɪʟ",
id: `${prefijo}perfil`,
},
{
title: "│🔧│ᴡᴏʀᴋ", 
description: "ᴛʀᴀʙᴀᴊᴀ ʏ ɢᴀɴᴀ ᴛᴜ ᴍᴇʀᴇᴄɪᴅᴀ ʀᴇᴄᴏᴍᴘᴇɴsᴀ",
id: `${prefijo}work`,
},
{
title: "│⛏️│ᴍɪɴᴀʀ", 
description: "ɢᴀɴᴀ xᴘ ᴅᴇ ғᴏʀᴍᴀ ɪɴsᴛᴀɴᴛᴀ́ɴᴇᴀ",
id: `${prefijo}minar`,
},
{
title: "│💣│ᴍɪɴᴀʀ 𝟸", 
description: "ɢᴀɴᴀ ᴇsᴛʀᴇʟʟᴀs ʏ ᴏʙᴛᴇɴ ᴜɴ ʙᴏɴᴏ ᴅᴇ ғᴏʀᴍᴀ ɪɴsᴛᴀɴᴛᴀ́ɴᴇᴀ",
id: `${prefijo}minar2`,
},
{
title: "│💵│ʙᴜʏ", 
description: "ᴄᴏᴍᴘʀᴀ ᴇsᴛʀᴇʟʟᴀs ᴜsᴀɴᴅᴏ ᴛᴜ xᴘ (ᴜsᴏ ɴᴏʀᴍᴀʟ !ʙᴜʏ + ᴄᴀɴᴛɪᴅᴀᴅ)",
id: `${prefijo}buy`,
},
{
title: "│💸│ʙᴜʏ ᴀʟʟ", 
description: "ᴄᴏᴍᴘʀᴀ ᴅᴇ ғᴏʀɴᴀ ɪɴsᴛᴀɴᴛᴀ́ɴᴇᴀ ᴛᴏᴅᴏ ᴇʟ ᴇsᴛʀᴇʟʟᴀs ǫᴜᴇ ᴘᴜᴇᴅᴀs ᴜsᴀɴᴅᴏ ᴛᴏᴅᴏ ᴛᴜ xᴘ",
id: `${prefijo}buyall`,
},
],
})   

let vid = "https://qu.ax/Tdqmz.jpg"
let img = "https://qu.ax/fcOAa.jpg"
await conn.sendListB(m.chat, menu, txt, `TOCA AQUÍ.`, [vid, img].getRandom(), listSections, m)                             ;
};

handler.tags = ['main'];
handler.help = ['menulista'];
handler.command = ['menulista','lista','listmenu','menulist'];
handler.exp = 20;

export default handler;


function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  console.log({ ms, h, m, s });
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}


  var ase = new Date();
  var hour = ase.getHours();
switch(hour){
  case 0: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 1: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 💤'; break;
  case 2: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🦉'; break;
  case 3: hour = 'Bᴜᴇɴᴏs Dɪᴀs ✨'; break;
  case 4: hour = 'Bᴜᴇɴᴏs Dɪᴀs 💫'; break;
  case 5: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌅'; break;
  case 6: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌄'; break;
  case 7: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌅'; break;
  case 8: hour = 'Bᴜᴇɴᴏs Dɪᴀs 💫'; break;
  case 9: hour = 'Bᴜᴇɴᴏs Dɪᴀs ✨'; break;
  case 10: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌞'; break;
  case 11: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌨'; break;
  case 12: hour = 'Bᴜᴇɴᴏs Dɪᴀs ❄'; break;
  case 13: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌤'; break;
  case 14: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌇'; break;
  case 15: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🥀'; break;
  case 16: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌹'; break;
  case 17: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌆'; break;
  case 18: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 19: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
  case 20: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌌'; break;
  case 21: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
  case 22: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 23: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
}
  var greeting = hour;