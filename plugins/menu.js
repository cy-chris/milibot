let handler  = async (m, { conn, usedPrefix: _p }) => {
  let preview = {}
  try {
    if (!conn.menu) preview = await conn.generateLinkPreview('https://github.com/Arya274/Arya-Bot')
  } catch (e) {
    try {
      if (!conn.menu) preview = await global.conn.generateLinkPreview('https://github.com/Nurutomo/wabot-aq')
    } catch (e) {}
  } finally {
    let exp = global.DATABASE.data.users[m.sender].exp
    let name = conn.getName(m.sender)
    let d = new Date
    let locale = 'id-Id'
    let weton = ['Pon','Wage','Kliwon','Legi','Pahing'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })

    let text =  conn.menu ? conn.menu
      .replace(/%p/g, _p)
      .replace(/%exp/g, exp)
      .replace(/%name/g, name)
      .replace(/%weton/g, weton)
      .replace(/%week/g, week)
      .replace(/%date/g, date)
      .replace(/%time/g, time): `
🤖 [NFQ BOT] 🤖
Created Bye: @Drawl Nag

olaaa, ${name} 👋
Exp: ${exp}

📟 tempo: ${time}
📆 encontro: ${week}, ${date}

${more.repeat(1000)}

Como adicionar XP:
+1 Encomenda exp/regular
+10 Exp/comando

╠═════✪〘 MENU TOP PRA KRL 〙✪═══
║
╠═〘 Xp 〙 ═
╠➥ ${_p}leaderboard [jumlah user]
║
╠═〘 Commandos 〙 ═
╠➥ ${_p}menu
╠➥ ${_p}help
╠➥ ${_p}?
║
╠═〘 MILENA-BOT 〙 ═
╠➥ ${_p}tutorial
║
╠═〘 Outros 〙 ═
╠➥ ${_p}qr <texto>
╠➥ ${_p}stiker (captura)
╠➥ ${_p}stiker <link pra fazer sticker>
╠➥ ${_p}toimg (sticker para foto)
╠➥ ${_p}bucin
╠➥ ${_p}ssweb <url>
╠➥ ${_p}sswebf <url>
╠➥ ${_p}google <pesquisa>
╠➥ ${_p}googlef <pesquisa>
╠➥ ${_p}readmore <texto>|<ocultar>
╠➥ ${_p}quran
╠➥ ${_p}modApk
║
╠═〘 Group 〙 ═
╠➥ ${_p}add [55819XXXXXX]
╠➥ ${_p}promote [marcar o membro]
╠➥ ${_p}demote [marcar o membro]
╠➥ ${_p}linkgrup [pegar o link do grupo]
╠➥ ${_p}pengumuman [texto]
╠➥ ${_p}hidetag [texto]
╠➥ ${_p}listonline
╠➥ ${_p}kick [marca o ghostKKK]
╠➥ ${_p}grouplist [sla que porra e essa]
║
╠═〘 EXPERIMENTAL 〙 ═
╠➥ ${_p}jadibot [código de login se houver/vazio]
╠➥ ${_p}berhenti
╠➥ ${_p}getcode
║
╠═〘 PROPRIETÁRIO 〙 ═
╠➥ ${_p}bcgc <texto>
╠➥ ${_p}setmenu <texto>
╠➥ ${_p}deletechat (chat do grupo)
╠➥ ${_p}deletechat group
╠➥ ${_p}mutechat (chat do grupo)
╠➥ ${_p}mutechat group
║
╠═〘 PROPAGANDA 〙 ═
╠➥ Instagram: @cy_chrisfds.trash
╠➥ Github: https://github.com/cy-chris/milibot
║
╠═〘 Info do bot 〙 ═
╠➥ nome : MILENA-BOT
╠➥ Codificado usando *Nano* no Android \\ w Termux
╠➥ Request? Wa.me/5581996207906
╠═════
║ Advanced:
║  > return m
║
╠═〘 NfQ BOT 〙═
`.trim()
    conn.reply(m.chat, {...preview, text}, m)
  }
}
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
