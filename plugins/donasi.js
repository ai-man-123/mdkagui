/**
 * TOLONG JANGAN GANTI GAMBARNYA,NOMORKU DAN SAWERIAKU
 * MENDING KALIAN TAMBAHIN NOMOR KALIAN
*/

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
let handler = async (m) => {
let duit = `πΏπππΌππ πππΌ β’

β₯ πππππππππ½ππ
β ππππ β ππππ π½πππππ 

_*silahkan pc owner untuk mengakses*_`
let message = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/ca517a39ce85c8a4c0479.jpg' }}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: bot ini menggunakan script,
           hydratedFooterText: catzy bot-Md,
           hydratedButtons: [{
             urlButton: {
               displayText: 'ππ·π°πππ°πΏπΏ',
               url: 'https:/wa.me/60102810046'
             }

           },
               {
             callButton: {
               displayText: 'πππππ ππππππ',
               phoneNumber: '+60102810046'
             }
           },           
               {
             quickReplyButton: {
               displayText: 'owner',
               id: '.owner',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)|bagiduit$/i

module.exports = handler
