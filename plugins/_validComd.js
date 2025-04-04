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

  if (validCommand(command, global.plugins)) {
    let chat = global.db.data.chats[m.chat];
    let user = global.db.data.users[m.sender];
    if (chat.isBanned) return;
    if (!user.commands) {
      user.commands = 0;
    }
    user.commands += 1;
  } else {
    const comando = m.text.trim().split(' ')[0];
    await conn.sendMessage(m.chat, {
      text: `〘${emojis}〙𝐸𝑙 𝑐𝑜𝑚𝑎𝑛𝑑𝑜 *「${comando}」* 𝑛𝑜 𝑒𝑥𝑖𝑠𝑡𝑒.\n𝑃𝑎𝑟𝑎 𝑣𝑒𝑟 𝑙𝑎 𝑙𝑖𝑠𝑡𝑎 𝑑𝑒 𝑐𝑜𝑚𝑎𝑛𝑑𝑜𝑠 𝑢𝑠𝑎:\n> » /menu`,
      buttons: [
        {
          buttonId: '.menu',
          buttonText: { displayText: '⋆mᥱᥒᥙ' },
        },
      ],
      footer: `${dev}`,
      viewOnce: true,
    }, { quoted: m });
  }
}