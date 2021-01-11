let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: Drawl Nag
╠➥ Script: @Nurotomo
║
╠➥ Github: https://github.com/Y0kenz4su/botwatap
╠➥ Instagram: @yokenza_
╠➥ YouTube: YZ MODS
║
╠═〘 Thanks To 〙 ═
╠➥ Nurotomo
╠➥ MfarelS
╠➥ ST4RZ
╠➥ Dan kawan yang lain :)
║
╠═〘 DONASI 〙 ═
╠➥ SmartFren: 0882-2144-9680
╠➥ Dana: 0882-2144-9680
╠➥ PayPall: https://www.paypal.me/Yokenzasu
║
║>Request? Wa.me/6288221449680
║
╠═〘 YZ BOT 〙 ═
`.trim(), m)
}
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

