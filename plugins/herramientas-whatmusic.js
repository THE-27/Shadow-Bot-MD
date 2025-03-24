import acrcloud from 'acrcloud'

let acr = new acrcloud({
  host: 'identify-eu-west-1.acrcloud.com',
  access_key: 'c33c767d683f78bd17d4bd4991955d81',
  access_secret: 'bvgaIAEtADBTbLwiPGYlxupWqkNGIjT7J9Ag2vIu'
})
let handler = async (m, { conn, usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || q.mediaType || ''
  if (/video|audio/.test(mime)) {
  let buffer = await q.download()
  let { status, metadata } = await acr.identify(buffer)
  if (status.code !== 0) throw status.msg 
  let { title, artists, album, genres, release_date } = metadata.music[0]
  let txt = '╭┈⬣「𝐖𝐡𝐚𝐭𝐦𝐮𝐬𝐢𝐜 𝐓𝐨𝐨𝐥𝐬」⬣\n'
      txt += `┋  ≡◦ *🚀 𝐓𝐢𝐭𝐮𝐥𝐨 ∙* ${title}${artists ? `\n┋  ≡◦ *👤 𝐀𝐫𝐭𝐢𝐬𝐭𝐚 ∙* ${artists.map(v => v.name).join(', ')}` : ''}`
      txt += `${album ? `\n┋  ≡◦ *📚 𝐀𝐥𝐛𝐮𝐦 ∙* ${album.name}` : ''}${genres ? `\n┋  ≡◦ *🪴 𝐆𝐞𝐧𝐞𝐫𝐨 ∙* ${genres.map(v => v.name).join(', ')}` : ''}\n`
      txt += `┋  ≡◦ *🕜 𝐅𝐞𝐜𝐡𝐚 𝐝𝐞 𝐥𝐚𝐧𝐳𝐚𝐦𝐢𝐞𝐧𝐭𝐨 ∙* ${release_date}\n`
      txt += `╰┈┈┈⬣`
     conn.reply(m.chat, txt, m)
  } else return conn.reply(m.chat, `🍁 𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐞 𝐮𝐧 𝐚𝐮𝐝𝐢𝐨 𝐨 𝐯𝐢𝐝𝐞𝐨 𝐝𝐞 𝐩𝐨𝐜𝐚 𝐝𝐮𝐫𝐚𝐜𝐢𝐨𝐧 𝐜𝐨𝐧 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 *${usedPrefix + command}* 𝐏𝐚𝐫𝐚 𝐯𝐞𝐫 𝐪𝐮𝐞 𝐦𝐮𝐬𝐢𝐜𝐚 𝐜𝐨𝐧𝐭𝐢𝐞𝐧𝐞.`, m)
}
handler.help = ['whatmusic <audio/video>']
handler.tags = ['tools']
handler.command = ['shazam', 'whatmusic', 'quemusica', 'quemusicaes']
//handler.limit = 1
handler.register = true 
export default handler
