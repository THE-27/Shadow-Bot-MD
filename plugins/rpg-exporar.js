let cooldowns = {};

let handler = async (m, { conn, text, command }) => {
  let users = global.db.data.users;
  let senderId = m.sender;

  let tiempoEspera = 5 * 60;

  if (cooldowns[m.sender] && Date.now() - cooldowns[m.sender] < tiempoEspera * 1000) {
    let tiempoRestante = segundosAHMS(Math.ceil((cooldowns[m.sender] + tiempoEspera * 1000 - Date.now()) / 1000));
    m.reply(`${emoji} Ya exploraste el bosque recientemente. Espera ⏳ *${tiempoRestante}* antes de aventurarte de nuevo.`);
    return;
  }

  cooldowns[m.sender] = Date.now();

  if (!users[senderId]) {
    users[senderId] = { health: 100, estrellas: 0, exp: 0 };
  }

  const eventos = [
    { nombre: '💰 Tesoro Escondido', estrellas: 100, exp: 50, health: 0, mensaje: `¡Encontraste un cofre lleno de ${moneda}!` },
    { nombre: '🐻 Oso Salvaje', estrellas: -50, exp: 20, health: -10, mensaje: `Un oso te atacó y perdiste algunas ${moneda} mientras escapabas.` },
    { nombre: '🕸️ Trampa Antigua', estrellas: 0, exp: 10, health: 0, mensaje: 'Caiste en una trampa, pero lograste escapar ileso.' },
    { nombre: '💎 Piedra Mágica', estrellas: 200, exp: 100, health: 0, mensaje: `¡Descubriste una piedra mágica que te otorgó ${moneda} adicionales!` },
    { nombre: '🧙 Viejo Sabio', estrellas: 50, exp: 30, health: 0, mensaje: 'Un sabio te recompensó por escuchar sus historias.' },
    { nombre: '⚔️ Enemigo Oculto', estrellas: -30, exp: 15, health: -10, mensaje: `Te enfrentaste a un enemigo oculto y perdiste algunos ${moneda}.` },
    { nombre: '🍄 Setas Extrañas', estrellas: 0, exp: 5, health: 0, mensaje: 'Comiste unas setas del bosque, pero no pasó nada interesante.' }
  ];

  let evento = eventos[Math.floor(Math.random() * eventos.length)];

  users[senderId].estrellas += evento.estrellas;
  users[senderId].exp += evento.exp;
  users[senderId].health += evento.health;

  let img = 'https://qu.ax/ljzxA.jpg';
  let info = `╭━〔 Exploración en el Bosque〕\n` +
             `┃Misión: *${evento.nombre}*\n` +
             `┃Evento: ${evento.mensaje}\n` +
             `┃Recompensa: ${evento.estrellas > 0 ? '+' : '-'}${Math.abs(evento.estrellas)} *${moneda}* y +${evento.exp} *XP*.\n` +
             `┃Tu salud ${evento.health < 0 ? 'bajó en: ' + Math.abs(evento.health) : 'se mantuvo igual.'}\n` +
             `╰━━━━━━━━━━━━⬣`;

  await conn.sendFile(m.chat, img, 'exploracion.jpg', info, fkontak);

  global.db.write();
};

handler.tags = ['rpg'];
handler.help = ['explorar'];
handler.command = ['explorar', 'bosque'];
handler.register = true;
handler.group = true;

export default handler;

function segundosAHMS(segundos) {
  let minutos = Math.floor(segundos / 60);
  let segundosRestantes = segundos % 60;
  return `${minutos} minutos y ${segundosRestantes} segundos`;
}
