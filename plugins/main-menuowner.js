import moment from 'moment-timezone';

let handler = async (m, { conn, args }) => {
let owner = `
• 𝐌𝐄𝐍𝐔-𝐎𝐖𝐍𝐄𝐑 •
•° ☁️ *BY ${botname}* ⚔️ °•

һ᥆ᥣᥲ! s᥆ᥡ  *${botname}*  ٩(˘◡˘)۶
ᥲ𝗊ᥙí 𝗍іᥱᥒᥱs ᥣᥲ ᥣіs𝗍ᥲ ძᥱ ᥴ᥆mᥲᥒძ᥆s ძᥱ m᥆ძs ᥡ ᥆ᥕᥒᥱrs

»  ⊹˚• \`OWNERS\` •˚⊹

❀ ᥴ᥆mᥲᥒძ᥆s ძᥱ m᥆ძᥱrᥲᥴіóᥒ ᥡ ᥴ᥆ᥒ𝗍r᥆ᥣ ᥲ᥎ᥲᥒzᥲძ᥆ ⍴ᥲrᥲ ᥆ᥕᥒᥱrs.
┊ *#addowner • #delowner*
> ✦ Agrega o elimina un número de la lista de owners.
┊ *#codigo*
> ✦ Crea un token o código de canjeó de códigos.
┊ *#backup • #copia*
> ✦ Crear un respaldo de seguridad de la *db* del Bot.
┊ *#bcgc*
> ✦ Envia un mensaje a todos los grupos donde este el Bot.
┊ *#cleanfiles*
> ✦ Elimina archivos temporales.
┊ *#addcoins • #añadircoin*
> ✦ Añade coins a un usuario.
┊ *#userpremium • #addprem*
> ✦ Otorgar premium a un usuario.
┊ *#delprem #remove*
> ✦ Quitar premium a un usuario.
┊ *#addexp • #añadirxp*
> ✦ Añade XP a un usuario.
┊ *#autoadmin*
> ✦ El Bot dara admin automáticamente solo si el Bot es admin.
┊ *#listban • #banlist*
> ✦ Lista de usuarios y chats baneados.
┊ *#banuser*
> ✦ Banear a un usuario.
┊ *#unbanuser*
> ✦ Desbanear a un usuario.
┊ *#dsowner • #delai*
> ✦ Elimina archivos innecesarios de sesión.
┊ *#cleartmp • #vaciartmp*
> ✦ Elimina archivo innecesarios de la carpeta tmp.
┊ *#block • #unblock*
> ✦ Bloquear o desbloquear a un usuario del número del Bot.
┊ *#listblock • #blocklist*
> ✦ Ver listado de usuarios bloqueados.
┊ *#removecoin • #quitarcoin*
> ✦ Quitar coins a un usuario.
┊ *#deletedatauser • #resetuser*
> ✦ Restablecer los datos de un usuario.
┊ *#removexp • #quitarxp*
> ✦ Quitar XP a un usuario.
┊ *#newgc #creargc*
> ✦ Crea un nuevo grupo desde el número del Bot.
┊ *#deletefile*
> ✦ Elimina archivos del Bot
┊ *#get • #fetch*
> ✦ Ver el estado de una página web.
┊ *#plugin • #getplugin*
> ✦ Extraer un plugin de los archivos del Bot.
┊ *#grouplist • #listgroup*
> ✦ Ver listado de grupos en los que está unido el Bot.
┊ *#join • #invite*
> ✦ Agregar el Bot a un grupo mediante el enlace de invitación.
┊ *#leave • #salir*
> ✦ Sacar el Bot de un grupo.
┊ *#let*
> ✦ Envia un mensaje con una duración de 1 hora.
┊ *#prefix*
> ✦ Ver o cambiar el prefijo del Bot.
┊ *#resetprefix*
> ✦ Restablecer el prefijo del Bot.
┊ *#reiniciar • #restart*
> ✦ Reiniciar el servidor del Bot.
┊ *#reunion • #meeting*
> ✦ Envia un aviso de reunión a los owners.
┊ *#savejs • #savefile*
> ✦ Guarda un archivo en una de las rutas del Bot.
┊ *#saveplugin*
> ✦ Guarda un plugin en la carpeta de comandos del Bot.
┊ *#setbanner*
> ✦ Cambia la imagen del menu principal del Bot.
┊ *#setavatar*
> ✦ Cambia la imagen del catálogo.
┊ *#addcmd • #setcmd*
> ✦ Guarda un sticker/imagen como texto o comando.
┊ *#delcmd*
> ✦ Elimina el texto/comando del Bot.
┊ *#cmdlist • #listcmd*
> ✦ Ver listado de textos/comandos.
┊ *#setimage • #setpfp*
> ✦ Cambia la foto del perfil del Bot.
┊ *#setmoneda*
> ✦ Cambia la moneda del Bot.
┊ *#setname*
> ✦ Cambia el nombre del Bot
┊ *#setbio • #setstatus*
> ✦ Cambia la biografía del Bot.
┊ *#update*
> ✦ Actualiza el Bot a la versión más reciente de GitHub.
`.trim();

await conn.sendMessage(m.chat, {
text: owner,
contextInfo: {
externalAdReply: {
title: packname,
body: dev,
thumbnailUrl: icono,
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}
}
}, { quoted: m });
};

handler.help = ['mods'];
handler.tags = ['main'];
handler.command = ['dev', 'owners'];
handler.rowner = true;

export default handler;
