let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 MAIS INFORMAÇOES 〙 ═
╠➥ Feito em javascript via NodeJs
╠➥ Rec: Drawl Nag
╠➥ Script: @CYchris.gostoso
║
╠➥ Github: https://github.com/cy-chris/milibot
╠➥ Instagram: @cychris_fds.trash
╠➥ YouTube: nao tenho
║
╠═〘 obrigado 〙 ═
╠➥ CYchris [editor/criador]
╠➥ ruan [fez porra nenhuma mais vlw]
╠➥ biel [meu melhor amigo ti amo]
╠➥ uiliam [lindo fofo]
║
╠═〘 donate pa nois rika 〙 ═
╠➥ cychris: wa.me//55819962079
║
║>Request? Wa.me//55819962079
║
╠═〘 MILENA-BOT 〙 ═
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

