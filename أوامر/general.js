
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/
const os = require('os');
const { tlang, botpic,cmd, prefix, runtime,Config,formatp } = require('../lib')
const axios = require('axios')
const speed = require('performance-now')
//---------------------------------------------------------------------------
cmd({
        pattern: "chatdectakag",
        desc: "chat with an AI",
        category: "general",
        use: '<Hii,Secktor>',
        filename: __filename,
    },
    async(Void, citel,text) => {
        let zx = text.length;
        if (zx < 30) {
            let {data} = await axios.get(`http://api.brainshop.ai/get?bid=167991&key=aozpOoNOy3dfLgmB&uid=[${citel.sender.split("@")[0]}]&msg=[${text}]`);
            return citel.reply(data.cnt);  
        }
        if (!text) return citel.reply(`Hey there! ${citel.pushName}. How are you doing these days?`);
        const { Configuration, OpenAIApi } = require("openai");
        const configuration = new Configuration({
            apiKey: Config.OPENAI_API_KEY || "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",
        });
        const openai = new OpenAIApi(configuration);
        const completion = await openai.createCompletion({
            model: "text-davinci-002",
            prompt: text,
            temperature: 0.5,
            max_tokens: 80,
            top_p: 1.0,
            frequency_penalty: 0.5,
            presence_penalty: 0.0,
            stop: ['"""'],
        });
        citel.reply(completion.data.choices[0].text);
    }
)
//---------------------------------------------------------------------------
cmd({
        pattern: "script",
        alias: ["git", "github", "repo"],
        desc: "Sends info about repo.",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        let { data } = await axios.get('https://api.github.com/repos/SamPandey001/Secktor-Md')
        let cap = `*🌐 𒆜GON BOT𒆜♦️*

●. *Support group :* (اليك افضل 3جروبات لصنع البوت) 
¦السينسي رايزل☜ https://chat.whatsapp.com/Fld2cn1jPaT6yAyPa1jjv2

¦السينسي أل☜ https://chat.whatsapp.com/EwCh9XrjxmY68GeO8oVmMp

¦السينسي لايت☜ https://chat.whatsapp.com/JTpMOr8MIVFJkdYHbuk1En

●. *Github:* https://github.com/PrabathLK/PRABATH_MD

●. *Developer:* https://github.com/PrabathLK

gonbot ⦁ ᴍᴀᴅᴇ ʙʏ thomas
ʀᴇʟᴇᴀsᴇᴅ ⦁ 𝟸𝟶𝟸𝟹/𝟶𝟷/𝟶𝟸
`
        let buttonMessaged = {
            image: { url: await botpic() },
            caption: cap,
            headerType: 4,
            }
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)

//---------------------------------------------------------------------------

cmd({

            pattern: "لوجو",

            desc: "(menu cmdlist).",

            category: "downloader",

            react: "🎲",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}system`,

                    buttonText: {

                        displayText: "System",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}ping`,

                    buttonText: {

                        displayText: "Ping",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: await botpic(),

                },

                caption: `
.logo1 text
.logo2 text
.logo3 text
.logo4 text
.logo5 text
.logo6 text
.logo7 text
.logo8 text
.logo9 text
.logo10 text
.logo11 text
.logo12 text
.logo13 text
.logo14 text
.logo15 text
.logo16 text
.logo17 text
.logo18 text
.logo19 text
.logo20 text
.logo21 text
.logo22 text
.logo23 text
.logo24 text
.logo25 text
.logo26 text
.logo27 text
.logo28 text
.logo29 text
.logo30 text


ᴘʀᴀʙᴀᴛʜ-ᴍᴅ ⦁ ᴍᴀᴅᴇ ʙʏ ᴘʀᴀʙᴀᴛʜ
ʀᴇʟᴇᴀsᴇᴅ ⦁ 𝟸𝟶𝟸𝟹/𝟶𝟷/𝟶𝟸
`,

                footer: tlang().footer,


                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

//---------------------------------------------------------------------------

cmd({

            pattern: "groupcmdnew",

            desc: "(menu cmdlist).",

            category: "downloader",

            react: "📂",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}git`,

                    buttonText: {

                        displayText: "Github",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}system`,

                    buttonText: {

                        displayText: "Info",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: await botpic(),

                },

                caption: `

                

📟 *Command:-* .ستيكر
ℹ️ *Description:-* سيتم صناعة الملصق! 
🔥 *Help:-* منشن اي صورة او فيديو واكتب ستيكر


📟 *Command:-* .رفع
ℹ️ *Description:-* سيتم الترقيه الى ادمن
🔥 *Help:-* منشن على شخص واكتب رفع


📟 *Command:-* .تنزيل
ℹ️ *Description:-* سيتم تنزيلك من الادمن
🔥 *help:-* منشن مشرف واكتب تنزيل


📟 *Command:-* .بان
ℹ️ *Description:-* سبتم عمل بان للشخص
🔥 *Help:-* منشن شخص وتكتب بان


📟 *Command:-* .فك-البان
ℹ️ *Description:-* سيتم فك الباند على الشخص
🔥 *Help:-* منشن واكتب فك-البان


📟 *Command:-* .طرد
ℹ️ *Description:-* سيتم طرد العضو من الجروب
🔥 *Help:-* منشن واكتب طرد


📟 *Command:-* .اضافه
ℹ️ *Description:-* سيتم اضافه العضو
🔥 *Help:-* منشن رقم الشخص واكتب اضافه


📟 *Command:-* .تصويت
ℹ️ *Description:-* سيتم التصويت ف الجروب
🔥 *Help:-* اسطلاع سؤلل مثلا سؤال1 سؤال2 سؤال3


📟 *Command:-* .بروفايل
ℹ️ *Description:-* سيتم تنزيل بروفايلك ف الجروب
🔥 *Help:-* منشن واكتب بروفايل


📟 *Command:-* .جروب
ℹ️ *Description:-* تقدر تفتتح وتقفل الجروب
🔥 *Help:-* جروب


📟 *Command:-* .صورة-الجروب
ℹ️ *Description:-* سيتم تغير صورة الجروب
🔥 *Help:-* منشن الصورة واكتب الامر


📟 *Command:-* .حذف
ℹ️ *Description:-* سيتم حذف الرساله
🔥 *Help:-* منشن الرساله وسيتم حذفها بمجرد كتابة حذف


📟 *Command:-* .الروابط
ℹ️ *Description:-* سيتم طرد اي شخص يحط رابط بالجروب
🔥 *Help:-* اكتب الروابط لمنع اي رابط وطرد المخالف من المجموعه


📟 *Command:-* .منشن
ℹ️ *Description:-* منشن لاعضاء الجروب
🔥 *Help:-* .منشن


📟 *Command:-* .getjids
ℹ️ *Description:-* Get Jid
🔥 *Help:-* .getjids


📟 *Command:-* .رانك
ℹ️ *Description:-* معرفة المستوى
🔥 *Help:-* اكتب رانك او منشن وشوف المستوى


📟 *Command:-* .الترحيب 
ℹ️ *Description:-* تغير رسالة الترحيب
🔥 *Help:-* اكتب الرساله وبعدها امر الترحيب


📟 *Command:-* .الوداع
ℹ️ *Description:-* تغير رسالة الوداع
🔥 *Help:-* اكتب الرساله وبعدها اكتب الامر


📟 *Command:-* .gs
ℹ️ *Description:-* تغيير اعدادات المجموعة
🔥 *Help:-* .gs


📟 *Command:-* .الاعدادات
ℹ️ *Description:-* تغيير اعدادات المجموعه
🔥 *Help:-* .اعدادات


⦿. *REQUEST BY:* ${citel.pushName}

`,

                footer: tlang().footer,

                buttons: buttons,

                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

    

    

    //---------------------------------------------------------------------------

cmd({

            pattern: "mjakageksjsgwusksgaisjsgajhshshshshehbenu",

            desc: "(menu cmdlist).",

            category: "downloader",

            react: "🔖",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {


            let buttonMessage = {

                image: {

                    url: await botpic(),

                },

                caption: `

┌────────────────────────────
│  👨‍💻 *𒆜GON BOT𒆜* 👨‍💻  *اوامر البوت* 🎗️
└────────────────────────────


┌─(📥 اوامر التنزيل)
│.اغنيه
│.فيديو
│.apk
│.docsong 
│.docvideo
│.fb
│.تيكتوك
│.صوره
│.mp4down
│.fbs
└─────────◉
┌─(🔍اوامر البحث)
│.findvideo
│.findsong
│.يوتيوب
│.الطقس
│.movie
└─────────◉
┌─(🧰 اوامر التحويل)
│.ستيكر
│.attp
│.ttp
│.لوجو
│.ss
│.ترجم
└─────────◉
┌─(👥 اوامر الجروب)
│.طرد
│.رفع
│.تنزيل
│.مخفي
│.الترحيب
│.الوداع
│.gs
│.بان
│.فك-البان
│.السرعه
│.del
│.gdp
└─────────◉
┌─(🧑‍💻 اوامر المشرف)
│.ujid
│.حظر
│.فك-الحظر
│.رستر
│.ادخل
│.حفظ
│.dnote
│.dallnote
└─────────◉
┌─( 🎮 اوامر الالعاب)
│.اكس
│.النرد
└─────────◉
┌─(💬 اوامر جانبية)
│.alive
│.رانك
│.بروفايل
│.سيستم
│.eval
│.كود-gr
│.sn
└─────────◉

gonbot-ᴍᴅ ⦁ ᴍᴀᴅᴇ ʙʏ thomas
ʀᴇʟᴇᴀsᴇᴅ ⦁ 𝟸𝟶𝟸𝟹/𝟶𝟷/𝟶𝟸
`,

                footer: tlang().footer,


                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

//---------------------------------------------------------------------------

cmd({

            pattern: "gs",

            desc: "(menu cmdlist).",

            category: "downloader",

            react: "⚙️",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttonMessage = {

                image: {

                    url: await botpic(),

                },

                caption: `

┏━━━━━━━━━━━━━━━━━━━━━━━━━
┃  *اعدادات الجروبات*
┗━━━━━━━━━━━━━━━━━━━━━━━━━



🔇 *MUTE GROUP -* .group close
🔊 *UNMUTE GROUP -* .group open


✅ *ACTIVE ANTILINK -* .act antilink
❌ *DEACTIVE ANTILINK -* .deact antilink


✅ *ACTIVE BOT THIS GROUP -* .bot on
❌ *DEACTIVE BOT THIS GROUP -* .bot off


✅ *ACTIVE ADD AND LEFT MSJ -* .act events
❌ *DEACTIVE ADD AND LEFT MSJ -* .deact events

gonbot-ᴍᴅ ⦁ ᴍᴀᴅᴇ ʙʏ thomas
ʀᴇʟᴇᴀsᴇᴅ ⦁ 𝟸𝟶𝟸𝟹/𝟶𝟷/𝟶𝟸
`,


                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

//---------------------------------------------------------------------------

cmd({

            pattern: "اوامر-المالك",

            desc: "(menu cmdlist).",

            category: "downloader",

            react: "👨‍💻",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text,{isCreator}) => {

         

            let buttons = [{

                    buttonId: `${prefix}owner`,

                    buttonText: {

                        displayText: "المطور",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}git`,

                    buttonText: {

                        displayText: "نشر الموقع",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: await botpic(),

                },

                caption: `

📟 *Command:-* .تحميل
ℹ️ *Description:-* تثبيت رابط البرنامج
🔥 *Help:-* .install Plugin Url 


📟 *Command:-* .plugins
ℹ️ *Description:-* Install Plugins View 
🔥 *Help:-* .plugins 


📟 *Command:-* .حظر
ℹ️ *Description:-* حظر المستخدم
🔥 *Help:-* منشن واعمل حظر


📟 *Command:-* .فك-الحظر
ℹ️ *Description:-* سيتم اطلاق سراح المستخدم
🔥 *Help:-* منشن واعمل فك


📟 *Command:-* .ازالة
ℹ️ *Description:-* Remove Plugins 
🔥 *Help:-* .remove plugin url


📟 *Command:-* .ادخل
ℹ️ *Description:-* البوت يدخل اي جروب عن طريق الامر
🔥 *Help:-* منشن ع الرابط واكتب ادخل


*📟Command:-* .رستر
ℹ️ *Description:-* اعادة تشغيل البوت
🔥 *Help:-* .رستر


📟 *Command:-* .حفظ
ℹ️ *Description:-* حفظ الملاحظات من mongodb 
🔥 *Help:-* .حفظ gonbot-md


📟 *Command:-* .get
ℹ️ *Description:-* احصل على ملاحظات محفوظة
🔥 *Help:-* .get


📟 *Command:-* .dnote
ℹ️ *Description:-* حذف الملاحظات المحفوظه
🔥 *Help:-* .dnote ENTER NOTE ID


📟 *Command:-* .dallnote
ℹ️ *Description:-* احذف جميع الملاحظات المحفوظه
🔥 *Help:-* .dallnote


⦿. *REQUEST BY:* ${citel.pushName}

`,

                footer: tlang().footer,

                buttons: buttons,

                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

//---------------------------------------------------------------------------

cmd({

            pattern: "othercmdnew",

            desc: "(menu cmdlist).",

            category: "downloader",

            react: "🎊",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}Owner`,

                    buttonText: {

                        displayText: "المطور",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}install https://gist.github.com/prabathLK/01f3859256a7130f234ac54aeebf486e/raw`,

                    buttonText: {

                        displayText: "Install Voice Reply",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: await botpic(),

                },

                caption: `

📟 *Command:-* .سيستم
ℹ️ *Description:-* حالة النظام
🔥 *Help:-* .سيستم


📟 *Command:-* .الطقس
ℹ️ *Description:-* يجيب لك الطقس
🔥 *Help:-* اكتب الطقس واسم البلد


📟 *Command:-* .eval
ℹ️ *Description:-* اكواد التشغيل
🔥 *Help:-* .eval 


📟 *Command:-* .شات 
ℹ️ *Description:-* شات البوت
🔥 *Help:-* شات البوت


📟 *Command:-* .ترجم
ℹ️ *Description:-* مترجم جوجل 
🔥 *Help:-* ترجمة النص


⦿. *REQUEST BY:* ${citel.pushName}

`,

                footer: tlang().footer,

                buttons: buttons,

                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

//---------------------------------------------------------------------------

cmd({

            pattern: "concmdnew",

            desc: "(menu cmdlist).",

            category: "downloader",

            react: "🔄",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}Git`,

                    buttonText: {

                        displayText: "Github",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}rank`,

                    buttonText: {

                        displayText: "Rank",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: await botpic(),

                },

                caption: `

📟 *Command:-* .ترجمة
ℹ️ *Description:-* سيتم ترجمة اي لغة
🔥 *Help:-* .trt mantion text


📟 *Command:-* .ملصق
ℹ️ *Description:-* منشن صورة او فيديو حتى يتم صنعه الى ملصق
🔥 *Help:-* منشن صورة واكتب ملصقط

⦿. *REQUEST BY:* ${citel.pushName}

`,

                footer: tlang().footer,

                buttons: buttons,

                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )



//---------------------------------------------------------------------------

cmd({

            pattern: "getadmin",

            desc: "(menu cmdlist).",

            category: "downloader",

            react: "😾",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}promote 94762280384`,

                    buttonText: {

                        displayText: "Get Admin",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: await botpic(),

                },

                caption: `



මොනවද පගෝ බලන්නෙ 😹💔

`,

                footer: tlang().footer,

                buttons: buttons,

                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {


            });

        }

    )

