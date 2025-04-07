export async function before(m) {
  if (!m.text || !global.prefix.test(m.text)) {
    return;
  }

  const usedPrefix = global.prefix.exec(m.text)[0];
  const command = m.text.slice(usedPrefix.length).trim().split(' ')[0].toLowerCase();

  const validCommand = (command, plugins) => {
    for (let plugin of Object.values(plugins)) {
      if (plugin.command && (Array.isArray(plugin.command) ? plugin.command : [plugin.command]).includes(command)) {
        return true;
      }
    }
    return false;
  };

  if (!command) return;

  if (command === "bot") {
    return;
    }
  if (validCommand(command, global.plugins)) {
    let chat = global.db.data.chats[m.chat];
    let user = global.db.data.users[m.sender];
    
    if (chat.isBanned) {
      const avisoDesactivado = `《✦》𝑬𝒍 𝑩𝒐𝒕 *${botname}* 𝒆𝒔𝒕𝒂 𝒅𝒆𝒔𝒂𝒄𝒕𝒊𝒗𝒂𝒅𝒐 𝒆𝒏 𝒆𝒔𝒕𝒆 𝒈𝒓𝒖𝒑𝒐.\n\n> ✦ 𝑼𝒏 *𝒂𝒅𝒎𝒊𝒏𝒊𝒔𝒕𝒓𝒂𝒅𝒐𝒓* 𝒑𝒖𝒆𝒅𝒆 𝒂𝒄𝒕𝒊𝒗𝒂𝒓𝒍𝒐 𝒄𝒐𝒏 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐:\n> » *${usedPrefix}bot on*`;
      await m.reply(avisoDesactivado);
      return;
    }
    
    if (!user.commands) {
      user.commands = 0;
    }
    user.commands += 1;
  } else {
    const comando = m.text.trim().split(' ')[0];
    await m.reply(`✎⍰ 𝑬𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐《 *${comando}* 》𝒏𝒐 𝒆𝒙𝒊𝒔𝒕𝒆.\n𝒑𝒆𝒓𝒂 𝒗𝒆𝒓 𝒍𝒂 𝒍𝒊𝒔𝒕𝒂 𝒅𝒆 𝒄𝒐𝒎𝒂𝒏𝒅𝒐𝒔 𝒖𝒔𝒂:\n» *#𝗺𝗲𝗻𝘂*`);
  }
}
