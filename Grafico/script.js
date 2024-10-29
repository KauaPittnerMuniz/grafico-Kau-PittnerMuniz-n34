const grafico = document.getElementById(meuGrafico).getContext("2d");
const meuGrafico = new chart (grafico{
type: "pie"
data:{
labels:[
    "Instagram"
    "WhatsApp"
    "Facebook"
    "WeChat"
    "TikTok"
    "DouYin"
    "Twitter"
    "Telegram"
    "FB Messenger"
    "LINE"
]
datasets:[{
    data:[
        16.5,
        16.1,
        12.8,
        12.8,
        7.4,
        6.6,
        3.2,
        2.4,
        2.3,
        1.7,
    ],
    backgrouncolor:[
        (75,0,130)
        (128,0,0)
        (255,0,0)
        (255,255,0)
        (255,0,255)
        (0,100,0)
        (0,255,255)
        (0,0,205)
        (211,211,211)
        (186,85,211)
    ]
}]
}
}
)