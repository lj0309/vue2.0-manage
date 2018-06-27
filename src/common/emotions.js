const emotions = {
  "0": ["[微笑]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/0.gif"],
  "1": ["[撇嘴]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/1.gif"],
  "2": ["[色]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/2.gif"],
  "3": ["[发呆]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/3.gif"],
  "4": ["[得意]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/4.gif"],
  "5": ["[流泪]", "https://res.wx.qq.com/mpres/htmledition/images/icon/common/emotion_panel/smiley/smiley_937e205.png"],
  "6": ["[害羞]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/6.gif"],
  "7": ["[闭嘴]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/7.gif"],
  "8": ["[睡]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/8.gif"],
  "9": ["[大哭]", "https://res.wx.qq.com/mpres/htmledition/images/icon/common/emotion_panel/smiley/smiley_537e205.png"],
  "10": ["[尴尬]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/10.gif"],
  "11": ["[发怒]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/11.gif"],
  "12": ["[调皮]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/12.gif"],
  "13": ["[呲牙]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/13.gif"],
  "14": ["[惊讶]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/14.gif"],
  "15": ["[难过]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/15.gif"],
  "16": ["[酷]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/16.gif"],
  "17": ["[冷汗]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/17.gif"],
  "18": ["[抓狂]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/18.gif"],
  "19": ["[吐]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/19.gif"],
  "20": ["[偷笑]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/20.gif"],
  "21": ["[可爱]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/21.gif"],
  "22": ["[白眼]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/22.gif"],
  "23": ["[傲慢]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/23.gif"],
  "24": ["[饥饿]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/24.gif"],
  "25": ["[困]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/25.gif"],
  "26": ["[惊恐]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/26.gif"],
  "27": ["[流汗]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/27.gif"],
  "28": ["[憨笑]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/28.gif"],
  "29": ["[大兵]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/29.gif"],
  "30": ["[奋斗]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/30.gif"],
  "31": ["[咒骂]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/31.gif"],
  "32": ["[疑问]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/32.gif"],
  "33": ["[嘘]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/33.gif"],
  "34": ["[晕]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/34.gif"],
  "35": ["[折磨]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/35.gif"],
  "36": ["[衰]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/36.gif"],
  "37": ["[骷髅]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/37.gif"],
  "38": ["[敲打]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/38.gif"],
  "39": ["[再见]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/39.gif"],
  "40": ["[擦汗]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/40.gif"],
  "41": ["[抠鼻]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/41.gif"],
  "42": ["[鼓掌]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/42.gif"],
  "43": ["[糗大了]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/43.gif"],
  "44": ["[坏笑]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/44.gif"],
  "45": ["[左哼哼]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/45.gif"],
  "46": ["[右哼哼]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/46.gif"],
  "47": ["[哈欠]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/47.gif"],
  "48": ["[鄙视]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/48.gif"],
  "49": ["[委屈]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/49.gif"],
  "50": ["[快哭了]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/50.gif"],
  "51": ["[阴险]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/51.gif"],
  "52": ["[亲亲]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/52.gif"],
  "53": ["[吓]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/53.gif"],
  "54": ["[可怜]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/54.gif"],
  "55": ["[菜刀]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/55.gif"],
  "56": ["[西瓜]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/56.gif"],
  "57": ["[啤酒]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/57.gif"],
  "58": ["[篮球]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/58.gif"],
  "59": ["[乒乓]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/59.gif"],
  "60": ["[咖啡]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/60.gif"],
  "61": ["[饭]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/61.gif"],
  "62": ["[猪头]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/62.gif"],
  "63": ["[玫瑰]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/63.gif"],
  "64": ["[凋谢]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/64.gif"],
  "65": ["[示爱]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/65.gif"],
  "66": ["[爱心]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/66.gif"],
  "67": ["[心碎]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/67.gif"],
  "68": ["[蛋糕]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/68.gif"],
  "69": ["[闪电]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/69.gif"],
  "70": ["[炸弹]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/70.gif"],
  "71": ["[刀]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/71.gif"],
  "72": ["[足球]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/72.gif"],
  "73": ["[瓢虫]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/73.gif"],
  "74": ["[便便]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/74.gif"],
  "75": ["[月亮]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/75.gif"],
  "76": ["[太阳]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/76.gif"],
  "77": ["[礼物]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/77.gif"],
  "78": ["[拥抱]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/78.gif"],
  "79": ["[强]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/79.gif"],
  "80": ["[弱]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/80.gif"],
  "81": ["[握手]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/81.gif"],
  "82": ["[胜利]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/82.gif"],
  "83": ["[抱拳]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/83.gif"],
  "84": ["[勾引]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/84.gif"],
  "85": ["[拳头]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/85.gif"],
  "86": ["[差劲]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/86.gif"],
  "87": ["[爱你]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/87.gif"],
  "88": ["[NO]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/88.gif"],
  "89": ["[OK]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/89.gif"],
  "90": ["[爱情]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/90.gif"],
  "91": ["[飞吻]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/91.gif"],
  "92": ["[跳跳]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/92.gif"],
  "93": ["[发抖]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/93.gif"],
  "94": ["[怄火]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/94.gif"],
  "95": ["[转圈]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/95.gif"],
  "96": ["[磕头]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/96.gif"],
  "97": ["[回头]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/97.gif"],
  "98": ["[跳绳]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/98.gif"],
  "99": ["[挥手]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/99.gif"],
  "100": ["[激动]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/100.gif"],
  "101": ["[街舞]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/101.gif"],
  "102": ["[献吻]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/102.gif"],
  "103": ["[左太极]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/103.gif"],
  "104": ["[右太极]", "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/104.gif"]
};

export default emotions;
