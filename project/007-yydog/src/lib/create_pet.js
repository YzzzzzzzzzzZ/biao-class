  let list = [];
  let breed_list = [{
    "id": 1,
    "name": "哈士奇",
    "type_size": "中型犬$中型",
    "type_feat": null,
    "type_func": "工作犬",
    "letter": "H"
  }, {
    "id": 2,
    "name": "藏獒",
    "type_size": "大型犬$大型",
    "type_feat": "不爱叫$不掉毛",
    "type_func": "工作犬",
    "letter": "Z"
  }, {
    "id": 3,
    "name": "贵宾犬",
    "type_size": "小型犬$小型",
    "type_feat": "聪明$易训$不掉毛$耐热",
    "type_func": "玩具犬$家庭犬",
    "letter": "G"
  }, {
    "id": 4,
    "name": "松狮",
    "type_size": "中型犬$中型",
    "type_feat": "不爱叫$会看家",
    "type_func": "家庭犬",
    "letter": "S"
  }, {
    "id": 5,
    "name": "边境牧羊犬",
    "type_size": "中型犬$中型",
    "type_feat": "聪明$易训",
    "type_func": "牧羊犬",
    "letter": "B"
  }, {
    "id": 6,
    "name": "吉娃娃",
    "type_size": "超小型犬$超小型",
    "type_feat": "会看家$耐热",
    "type_func": "玩具犬",
    "letter": "J"
  }, {
    "id": 7,
    "name": "德国牧羊犬",
    "type_size": "大型犬$大型",
    "type_feat": "聪明$易训",
    "type_func": "牧羊犬",
    "letter": "D"
  }, {
    "id": 8,
    "name": "秋田犬",
    "type_size": "超大型犬$超大型",
    "type_feat": "不爱叫$会看家",
    "type_func": "工作犬",
    "letter": "Q"
  }, {
    "id": 9,
    "name": "蝴蝶犬",
    "type_size": "小型犬$小型",
    "type_feat": "不爱叫$聪明$易训$不掉毛$耐热",
    "type_func": "玩具犬",
    "letter": "H"
  }, {
    "id": 10,
    "name": "博美犬",
    "type_size": "超小型犬$超小型",
    "type_feat": null,
    "type_func": "玩具犬",
    "letter": "B"
  }, {
    "id": 11,
    "name": "杜宾犬",
    "type_size": "超大型犬$超大型",
    "type_feat": "聪明$易训$会看家",
    "type_func": "工作犬",
    "letter": "D"
  }, {
    "id": 12,
    "name": "柴犬",
    "type_size": "中型犬$中型",
    "type_feat": "不爱叫$耐热",
    "type_func": "家庭犬",
    "letter": "C"
  }, {
    "id": 13,
    "name": "大丹犬",
    "type_size": "超大型犬$超大型",
    "type_feat": "不爱叫$友善",
    "type_func": "工作犬",
    "letter": "D"
  }, {
    "id": 14,
    "name": "卡斯罗",
    "type_size": "大型犬$大型",
    "type_feat": "耐热",
    "type_func": "工作犬",
    "letter": "Q"
  }, {
    "id": 15,
    "name": "法国斗牛犬",
    "type_size": "中型犬$中型",
    "type_feat": null,
    "type_func": "家庭犬",
    "letter": "F"
  }, {
    "id": 16,
    "name": "罗威纳犬",
    "type_size": "大型犬$大型",
    "type_feat": "不爱叫$聪明$会看家",
    "type_func": "工作犬",
    "letter": "L"
  }, {
    "id": 17,
    "name": "英国斗牛犬",
    "type_size": "中型犬$中型",
    "type_feat": "耐热",
    "type_func": "家庭犬",
    "letter": "Y"
  }, {
    "id": 18,
    "name": "萨摩耶犬",
    "type_size": "中型犬$中型",
    "type_feat": "友善$不掉毛",
    "type_func": "工作犬",
    "letter": "S"
  }, {
    "id": 19,
    "name": "阿富汗猎犬",
    "type_size": "大型犬$大型",
    "type_feat": "不爱叫$会看家",
    "type_func": "狩猎犬",
    "letter": "A"
  }, {
    "id": 20,
    "name": "腊肠犬",
    "type_size": "中型犬$中型",
    "type_feat": "会看家",
    "type_func": "狩猎犬",
    "letter": "X"
  }, {
    "id": 21,
    "name": "巴哥犬",
    "type_size": "小型犬$小型",
    "type_feat": "不掉毛",
    "type_func": "玩具犬",
    "letter": "B"
  }, {
    "id": 22,
    "name": "西施犬",
    "type_size": "小型犬$小型",
    "type_feat": null,
    "type_func": "玩具犬",
    "letter": "X"
  }, {
    "id": 23,
    "name": "大白熊犬",
    "type_size": "超大型犬$超大型",
    "type_feat": "不爱叫$不掉毛$会看家",
    "type_func": "工作犬",
    "letter": "D"
  }, {
    "id": 24,
    "name": "圣伯纳犬",
    "type_size": "大型犬$大型",
    "type_feat": "粘人$不爱叫$不掉毛",
    "type_func": "工作犬",
    "letter": "S"
  }, {
    "id": 25,
    "name": "金毛寻回犬",
    "type_size": "大型犬$大型",
    "type_feat": "不爱叫$聪明$易训$友善",
    "type_func": "枪猎犬",
    "letter": "J"
  }, {
    "id": 26,
    "name": "法老王猎犬",
    "type_size": "大型犬$大型",
    "type_feat": "不爱叫$不掉毛$耐热",
    "type_func": "狩猎犬",
    "letter": "F"
  }, {
    "id": 27,
    "name": "斗牛梗",
    "type_size": "中型犬$中型",
    "type_feat": "不爱叫",
    "type_func": "梗类犬",
    "letter": "D"
  }, {
    "id": 28,
    "name": "阿拉斯加雪橇犬",
    "type_size": "大型犬$大型",
    "type_feat": "不爱叫",
    "type_func": "工作犬",
    "letter": "A"
  }, {
    "id": 29,
    "name": "马尔济斯犬",
    "type_size": "超小型犬$超小型",
    "type_feat": "会看家$耐热",
    "type_func": "玩具犬",
    "letter": "M"
  }, {
    "id": 30,
    "name": "兰波格犬",
    "type_size": "超大型犬$超大型",
    "type_feat": null,
    "type_func": "工作犬",
    "letter": "L"
  }, {
    "id": 31,
    "name": "西高地白梗",
    "type_size": "小型犬$小型",
    "type_feat": "不掉毛",
    "type_func": "梗类犬",
    "letter": "X"
  }, {
    "id": 32,
    "name": "比利时牧羊犬",
    "type_size": "大型犬$大型",
    "type_feat": "不爱叫$聪明$易训",
    "type_func": "牧羊犬",
    "letter": "B"
  }, {
    "id": 33,
    "name": "卷毛比雄犬",
    "type_size": "小型犬$小型",
    "type_feat": "不爱叫$不掉毛",
    "type_func": "家庭犬",
    "letter": "J"
  }, {
    "id": 34,
    "name": "寻血猎犬",
    "type_size": "大型犬$大型",
    "type_feat": "不爱叫$友善$不掉毛",
    "type_func": "狩猎犬",
    "letter": "X"
  }, {
    "id": 35,
    "name": "纽芬兰犬",
    "type_size": "超大型犬$超大型",
    "type_feat": "粘人$不爱叫$友善",
    "type_func": "工作犬",
    "letter": "N"
  }, {
    "id": 36,
    "name": "北京犬",
    "type_size": "小型犬$小型",
    "type_feat": null,
    "type_func": "玩具犬",
    "letter": "B"
  }, {
    "id": 37,
    "name": "猎兔犬",
    "type_size": "中型犬$中型",
    "type_feat": null,
    "type_func": "狩猎犬",
    "letter": "L"
  }, {
    "id": 38,
    "name": "爱尔兰猎狼犬",
    "type_size": "超大型犬$超大型",
    "type_feat": "不爱叫",
    "type_func": "狩猎犬",
    "letter": "A"
  }, {
    "id": 39,
    "name": "伯恩山犬",
    "type_size": "大型犬$大型",
    "type_feat": "不爱叫",
    "type_func": "工作犬",
    "letter": "B"
  }, {
    "id": 40,
    "name": "喜乐蒂牧羊犬",
    "type_size": "中型犬$中型",
    "type_feat": "不爱叫$聪明$易训$会看家",
    "type_func": "牧羊犬",
    "letter": "X"
  }, {
    "id": 41,
    "name": "波尔多犬",
    "type_size": "大型犬$大型",
    "type_feat": null,
    "type_func": "工作犬",
    "letter": "B"
  }, {
    "id": 42,
    "name": "迷你杜宾",
    "type_size": "小型犬$小型",
    "type_feat": "不爱叫$易训$会看家",
    "type_func": "玩具犬",
    "letter": "M"
  }, {
    "id": 43,
    "name": "惠比特犬",
    "type_size": "中型犬$中型",
    "type_feat": "不爱叫",
    "type_func": "狩猎犬",
    "letter": "H"
  }, {
    "id": 44,
    "name": "中国冠毛犬",
    "type_size": "小型犬$小型",
    "type_feat": "不爱叫$友善",
    "type_func": "玩具犬",
    "letter": "Z"
  }, {
    "id": 45,
    "name": "贝灵顿梗",
    "type_size": "中型犬$中型",
    "type_feat": "不爱叫$不掉毛",
    "type_func": "梗类犬",
    "letter": "B"
  }, {
    "id": 46,
    "name": "柯利犬",
    "type_size": "大型犬$大型",
    "type_feat": "聪明$友善",
    "type_func": "牧羊犬",
    "letter": "K"
  }, {
    "id": 47,
    "name": "杰克罗素梗",
    "type_size": "小型犬$小型",
    "type_feat": null,
    "type_func": "梗类犬",
    "letter": "J"
  }, {
    "id": 48,
    "name": "哈瓦那犬",
    "type_size": "小型犬$小型",
    "type_feat": null,
    "type_func": "玩具犬",
    "letter": "H"
  }, {
    "id": 49,
    "name": "苏格兰梗",
    "type_size": "小型犬$小型",
    "type_feat": "不爱叫",
    "type_func": "梗类犬",
    "letter": "S"
  }, {
    "id": 50,
    "name": "拉布拉多寻回犬",
    "type_size": "中型犬$中型",
    "type_feat": "不爱叫$聪明$易训$友善",
    "type_func": "枪猎犬",
    "letter": "L"
  }, {
    "id": 51,
    "name": "大麦町犬",
    "type_size": "中型犬$中型",
    "type_feat": "易训",
    "type_func": "家庭犬",
    "letter": "D"
  }, {
    "id": 52,
    "name": "美国爱斯基摩犬",
    "type_size": "中型犬$中型",
    "type_feat": "耐热",
    "type_func": "家庭犬",
    "letter": "M"
  }, {
    "id": 53,
    "name": "苏俄猎狼犬",
    "type_size": "超大型犬$超大型",
    "type_feat": "友善$耐热",
    "type_func": "狩猎犬",
    "letter": "S"
  }, {
    "id": 54,
    "name": "万能梗",
    "type_size": "中型犬$中型",
    "type_feat": "不爱叫",
    "type_func": "梗类犬",
    "letter": "W"
  }, {
    "id": 55,
    "name": "波音达",
    "type_size": "超大型犬$超大型",
    "type_feat": "不爱叫$不掉毛",
    "type_func": "枪猎犬",
    "letter": "B"
  }, {
    "id": 56,
    "name": "刚毛猎狐梗",
    "type_size": "小型犬$小型",
    "type_feat": null,
    "type_func": "梗类犬",
    "letter": "G"
  }, {
    "id": 57,
    "name": "葡萄牙水犬",
    "type_size": "中型犬$中型",
    "type_feat": null,
    "type_func": "工作犬",
    "letter": "P"
  }, {
    "id": 58,
    "name": "波利犬",
    "type_size": "中型犬$中型",
    "type_feat": "不爱叫$不掉毛",
    "type_func": "牧羊犬",
    "letter": "B"
  }, {
    "id": 59,
    "name": "约克夏梗",
    "type_size": "超小型犬$超小型",
    "type_feat": "不掉毛$耐热",
    "type_func": "玩具犬",
    "letter": "Y"
  }, {
    "id": 60,
    "name": "拉萨犬",
    "type_size": "小型犬$小型",
    "type_feat": "会看家$耐热",
    "type_func": "家庭犬",
    "letter": "L"
  }, {
    "id": 61,
    "name": "中国沙皮犬",
    "type_size": "中型犬$中型",
    "type_feat": "粘人$会看家",
    "type_func": "家庭犬",
    "letter": "Z"
  }, {
    "id": 62,
    "name": "卡迪根威尔士柯基犬",
    "type_size": "小型犬$小型",
    "type_feat": null,
    "type_func": "牧羊犬",
    "letter": "Q"
  }, {
    "id": 63,
    "name": "波士顿梗",
    "type_size": "中型犬$中型",
    "type_feat": null,
    "type_func": "家庭犬",
    "letter": "B"
  }, {
    "id": 64,
    "name": "比格猎犬",
    "type_size": "小型犬$小型",
    "type_feat": "不爱叫$友善",
    "type_func": "狩猎犬",
    "letter": "B"
  }, {
    "id": 65,
    "name": "英国可卡犬",
    "type_size": "中型犬$中型",
    "type_feat": "聪明$友善$不掉毛",
    "type_func": "枪猎犬",
    "letter": "Y"
  }, {
    "id": 66,
    "name": "古代英国牧羊犬",
    "type_size": "中型犬$中型",
    "type_feat": "粘人$不爱叫$不掉毛",
    "type_func": "牧羊犬",
    "letter": "G"
  }, {
    "id": 67,
    "name": "小型雪纳瑞犬",
    "type_size": "小型犬$小型",
    "type_feat": "不爱叫$聪明$不掉毛",
    "type_func": "梗类犬",
    "letter": "X"
  }, {
    "id": 68,
    "name": "巴吉度犬",
    "type_size": "小型犬$小型",
    "type_feat": "不爱叫",
    "type_func": "狩猎犬",
    "letter": "B"
  }, {
    "id": 69,
    "name": "美国可卡犬",
    "type_size": "小型犬$小型",
    "type_feat": "聪明$友善$不掉毛",
    "type_func": "枪猎犬",
    "letter": "M"
  }, {
    "id": 70,
    "name": "西藏猎犬",
    "type_size": "小型犬$小型",
    "type_feat": "不爱叫$会看家",
    "type_func": "家庭犬",
    "letter": "X"
  }, {
    "id": 71,
    "name": "马士提夫獒犬",
    "type_size": "超大型犬$超大型",
    "type_feat": "不爱叫",
    "type_func": "工作犬",
    "letter": "M"
  }, {
    "id": 72,
    "name": "斗牛獒犬",
    "type_size": "大型犬$大型",
    "type_feat": "会看家",
    "type_func": "工作犬",
    "letter": "D"
  }, {
    "id": 73,
    "name": "凯利蓝梗",
    "type_size": "中型犬$中型",
    "type_feat": "不爱叫$不掉毛",
    "type_func": "梗类犬",
    "letter": "K"
  }, {
    "id": 74,
    "name": "法国狼犬",
    "type_size": "大型犬$大型",
    "type_feat": null,
    "type_func": "牧羊犬",
    "letter": "F"
  }, {
    "id": 75,
    "name": "澳大利亚牧羊犬",
    "type_size": "中型犬$中型",
    "type_feat": "不爱叫",
    "type_func": "牧羊犬",
    "letter": "A"
  }, {
    "id": 76,
    "name": "彭布罗克威尔士柯基犬",
    "type_size": "小型犬$小型",
    "type_feat": "聪明",
    "type_func": "牧羊犬",
    "letter": "P"
  }, {
    "id": 77,
    "name": "英国猎狐犬",
    "type_size": "大型犬$大型",
    "type_feat": "不爱叫",
    "type_func": "狩猎犬",
    "letter": "Y"
  }, {
    "id": 78,
    "name": "丝毛梗",
    "type_size": "小型犬$小型",
    "type_feat": "不爱叫$不掉毛$耐热",
    "type_func": "玩具犬",
    "letter": "S"
  }, {
    "id": 79,
    "name": "匈牙利牧羊犬",
    "type_size": "大型犬$大型",
    "type_feat": "不爱叫$会看家",
    "type_func": "工作犬",
    "letter": "X"
  }, {
    "id": 80,
    "name": "拳狮犬",
    "type_size": "大型犬$大型",
    "type_feat": "不掉毛",
    "type_func": "工作犬",
    "letter": "Q"
  }, {
    "id": 81,
    "name": "山地犬",
    "type_size": "中型犬$中型",
    "type_feat": null,
    "type_func": "牧羊犬",
    "letter": "S"
  }, {
    "id": 82,
    "name": "西藏梗",
    "type_size": "中型犬$中型",
    "type_feat": "不爱叫",
    "type_func": "家庭犬",
    "letter": "X"
  }, {
    "id": 83,
    "name": "罗得西亚脊背犬",
    "type_size": "大型犬$大型",
    "type_feat": "不爱叫$会看家",
    "type_func": "狩猎犬",
    "letter": "L"
  }, {
    "id": 84,
    "name": "湖畔梗",
    "type_size": "小型犬$小型",
    "type_feat": "不爱叫$会看家",
    "type_func": "梗类犬",
    "letter": "H"
  }, {
    "id": 85,
    "name": "爱尔兰雪达犬",
    "type_size": "大型犬$大型",
    "type_feat": null,
    "type_func": "枪猎犬",
    "letter": "A"
  }, {
    "id": 86,
    "name": "瑞典柯基犬",
    "type_size": "小型犬$小型",
    "type_feat": null,
    "type_func": "牧羊犬",
    "letter": "R"
  }, {
    "id": 87,
    "name": "芬兰拉普猎犬",
    "type_size": "中型犬$中型",
    "type_feat": null,
    "type_func": "牧羊犬",
    "letter": "F"
  }, {
    "id": 88,
    "name": "德国宾莎犬",
    "type_size": "中型犬$中型",
    "type_feat": null,
    "type_func": "工作犬",
    "letter": "D"
  }, {
    "id": 89,
    "name": "库瓦兹犬",
    "type_size": "超大型犬$超大型",
    "type_feat": null,
    "type_func": "工作犬",
    "letter": "K"
  }, {
    "id": 90,
    "name": "奇努克犬",
    "type_size": "大型犬$大型",
    "type_feat": null,
    "type_func": "工作犬",
    "letter": "Q"
  }, {
    "id": 91,
    "name": "巨型雪纳瑞犬",
    "type_size": "大型犬$大型",
    "type_feat": "不爱叫$会看家",
    "type_func": "工作犬",
    "letter": "J"
  }, {
    "id": 92,
    "name": "萨路基猎犬",
    "type_size": "超大型犬$超大型",
    "type_feat": "不爱叫$不掉毛$会看家",
    "type_func": "狩猎犬",
    "letter": "S"
  }, {
    "id": 93,
    "name": "维希拉猎犬",
    "type_size": "大型犬$大型",
    "type_feat": "耐热",
    "type_func": "枪猎犬",
    "letter": "W"
  }, {
    "id": 94,
    "name": "澳大利亚牧牛犬",
    "type_size": "中型犬$中型",
    "type_feat": "聪明$易训",
    "type_func": "牧羊犬",
    "letter": "A"
  }, {
    "id": 95,
    "name": "威尔士梗",
    "type_size": "小型犬$小型",
    "type_feat": null,
    "type_func": "梗类犬",
    "letter": "W"
  }, {
    "id": 96,
    "name": "格雷伊猎犬",
    "type_size": "超大型犬$超大型",
    "type_feat": "不掉毛",
    "type_func": "狩猎犬",
    "letter": "G"
  }, {
    "id": 97,
    "name": "普罗特猎犬",
    "type_size": "大型犬$大型",
    "type_feat": null,
    "type_func": "狩猎犬",
    "letter": "P"
  }, {
    "id": 98,
    "name": "墨西哥无毛犬",
    "type_size": "中型犬$中型",
    "type_feat": null,
    "type_func": "家庭犬",
    "letter": "M"
  }, {
    "id": 99,
    "name": "小型斗牛梗",
    "type_size": "小型犬$小型",
    "type_feat": "不爱叫",
    "type_func": "梗类犬",
    "letter": "X"
  }, {
    "id": 100,
    "name": "短毛猎狐梗",
    "type_size": "小型犬$小型",
    "type_feat": "不掉毛",
    "type_func": "梗类犬",
    "letter": "D"
  }, {
    "id": 101,
    "name": "斯塔福郡斗牛梗",
    "type_size": "中型犬$中型",
    "type_feat": "不爱叫$不掉毛",
    "type_func": "梗类犬",
    "letter": "S"
  }, {
    "id": 102,
    "name": "意大利灰狗",
    "type_size": "小型犬$小型",
    "type_feat": "不爱叫",
    "type_func": "玩具犬",
    "letter": "Y"
  }, {
    "id": 103,
    "name": "威玛犬",
    "type_size": "大型犬$大型",
    "type_feat": null,
    "type_func": "枪猎犬",
    "letter": "W"
  }, {
    "id": 104,
    "name": "荷兰毛狮犬",
    "type_size": "中型犬$中型",
    "type_feat": "不爱叫$聪明$会看家",
    "type_func": "家庭犬",
    "letter": "H"
  }, {
    "id": 105,
    "name": "爱尔兰水猎犬",
    "type_size": "大型犬$大型",
    "type_feat": "不爱叫",
    "type_func": "枪猎犬",
    "letter": "A"
  }, {
    "id": 106,
    "name": "美国猎狐犬",
    "type_size": "大型犬$大型",
    "type_feat": "不爱叫",
    "type_func": "狩猎犬",
    "letter": "M"
  }, {
    "id": 107,
    "name": "安纳托利亚牧羊犬",
    "type_size": "超大型犬$超大型",
    "type_feat": null,
    "type_func": "工作犬",
    "letter": "A"
  }, {
    "id": 108,
    "name": "冰岛牧羊犬",
    "type_size": "中型犬$中型",
    "type_feat": null,
    "type_func": "牧羊犬",
    "letter": "B"
  }, {
    "id": 109,
    "name": "帕尔森罗塞尔梗",
    "type_size": "小型犬$小型",
    "type_feat": null,
    "type_func": "梗类犬",
    "letter": "P"
  }, {
    "id": 110,
    "name": "英国跳猎犬",
    "type_size": "中型犬$中型",
    "type_feat": "聪明$易训",
    "type_func": "枪猎犬",
    "letter": "Y"
  }, {
    "id": 111,
    "name": "短脚长身梗",
    "type_size": "小型犬$小型",
    "type_feat": null,
    "type_func": "梗类犬",
    "letter": "D"
  }, {
    "id": 112,
    "name": "爱尔兰梗",
    "type_size": "中型犬$中型",
    "type_feat": "不爱叫$会看家",
    "type_func": "梗类犬",
    "letter": "A"
  }, {
    "id": 113,
    "name": "挪威伦德猎犬",
    "type_size": "超大型犬$超大型",
    "type_feat": null,
    "type_func": "家庭犬",
    "letter": "N"
  }, {
    "id": 114,
    "name": "挪威猎鹿犬",
    "type_size": "中型犬$中型",
    "type_feat": null,
    "type_func": "狩猎犬",
    "letter": "N"
  }, {
    "id": 115,
    "name": "西帕基犬",
    "type_size": "小型犬$小型",
    "type_feat": "聪明",
    "type_func": "家庭犬",
    "letter": "X"
  }, {
    "id": 116,
    "name": "黑俄罗斯梗",
    "type_size": "超大型犬$超大型",
    "type_feat": null,
    "type_func": "工作犬",
    "letter": "H"
  }, {
    "id": 117,
    "name": "苏格兰猎鹿犬",
    "type_size": "超大型犬$超大型",
    "type_feat": "会看家",
    "type_func": "狩猎犬",
    "letter": "S"
  }, {
    "id": 118,
    "name": "波兰低地牧羊犬",
    "type_size": "中型犬$中型",
    "type_feat": "不爱叫",
    "type_func": "牧羊犬",
    "letter": "B"
  }, {
    "id": 119,
    "name": "挪威梗",
    "type_size": "小型犬$小型",
    "type_feat": "不爱叫",
    "type_func": "梗类犬",
    "letter": "N"
  }, {
    "id": 120,
    "name": "爱尔兰红白雪达犬",
    "type_size": "大型犬$大型",
    "type_feat": null,
    "type_func": "枪猎犬",
    "letter": "A"
  }, {
    "id": 121,
    "name": "大瑞士山地犬",
    "type_size": "超大型犬$超大型",
    "type_feat": "不掉毛",
    "type_func": "工作犬",
    "letter": "D"
  }, {
    "id": 122,
    "name": "罗秦犬",
    "type_size": "小型犬$小型",
    "type_feat": "粘人$会看家",
    "type_func": "家庭犬",
    "letter": "L"
  }, {
    "id": 123,
    "name": "那不勒斯獒",
    "type_size": "超大型犬$超大型",
    "type_feat": null,
    "type_func": "工作犬",
    "letter": "N"
  }, {
    "id": 124,
    "name": "捷克梗",
    "type_size": "小型犬$小型",
    "type_feat": null,
    "type_func": "梗类犬",
    "letter": "J"
  }, {
    "id": 125,
    "name": "比利时马林诺斯犬",
    "type_size": "大型犬$大型",
    "type_feat": null,
    "type_func": "牧羊犬",
    "letter": "B"
  }, {
    "id": 126,
    "name": "标准型雪纳瑞犬",
    "type_size": "中型犬$中型",
    "type_feat": "聪明",
    "type_func": "工作犬",
    "letter": "B"
  }, {
    "id": 127,
    "name": "德国短毛波音达",
    "type_size": "大型犬$大型",
    "type_feat": "聪明",
    "type_func": "枪猎犬",
    "letter": "D"
  }, {
    "id": 128,
    "name": "锡利哈姆梗",
    "type_size": "小型犬$小型",
    "type_feat": "不爱叫",
    "type_func": "梗类犬",
    "letter": "X"
  }, {
    "id": 129,
    "name": "红骨猎浣熊犬",
    "type_size": "大型犬$大型",
    "type_feat": null,
    "type_func": "狩猎犬",
    "letter": "H"
  }, {
    "id": 130,
    "name": "巴仙吉犬",
    "type_size": "中型犬$中型",
    "type_feat": "不爱叫",
    "type_func": "狩猎犬",
    "letter": "B"
  }, {
    "id": 131,
    "name": "戈登雪达犬",
    "type_size": "大型犬$大型",
    "type_feat": "不掉毛",
    "type_func": "枪猎犬",
    "letter": "G"
  }, {
    "id": 132,
    "name": "诺福克梗",
    "type_size": "小型犬$小型",
    "type_feat": "友善$不掉毛$会看家",
    "type_func": "梗类犬",
    "letter": "N"
  }, {
    "id": 133,
    "name": "小型葡萄牙波登可犬",
    "type_size": "小型犬$小型",
    "type_feat": null,
    "type_func": "狩猎犬",
    "letter": "X"
  }, {
    "id": 134,
    "name": "骑士查理王小猎犬",
    "type_size": "小型犬$小型",
    "type_feat": "友善",
    "type_func": "玩具犬",
    "letter": "Q"
  }, {
    "id": 135,
    "name": "美国斯塔福郡梗",
    "type_size": "中型犬$中型",
    "type_feat": null,
    "type_func": "梗类犬",
    "letter": "M"
  }, {
    "id": 136,
    "name": "粗毛柯利犬",
    "type_size": "中型犬$中型",
    "type_feat": null,
    "type_func": "牧羊犬",
    "letter": "C"
  }, {
    "id": 137,
    "name": "切萨皮克海湾寻回犬",
    "type_size": "大型犬$大型",
    "type_feat": "不爱叫$易训$友善$耐热",
    "type_func": "枪猎犬",
    "letter": "Q"
  }, {
    "id": 138,
    "name": "比利时特伏丹犬",
    "type_size": "大型犬$大型",
    "type_feat": "不爱叫$聪明$易训",
    "type_func": "牧羊犬",
    "letter": "B"
  }, {
    "id": 139,
    "name": "玩具猎狐梗",
    "type_size": "小型犬$小型",
    "type_feat": null,
    "type_func": "梗类犬",
    "letter": "W"
  }, {
    "id": 140,
    "name": "日本忡",
    "type_size": "小型犬$小型",
    "type_feat": "不爱叫",
    "type_func": "玩具犬",
    "letter": "R"
  }, {
    "id": 141,
    "name": "玩具曼彻斯特犬",
    "type_size": "小型犬$小型",
    "type_feat": "不爱叫$会看家$耐热",
    "type_func": "玩具犬",
    "letter": "W"
  }, {
    "id": 142,
    "name": "爱尔兰峡谷梗",
    "type_size": "小型犬$小型",
    "type_feat": null,
    "type_func": "梗类犬",
    "letter": "A"
  }, {
    "id": 143,
    "name": "澳大利亚梗",
    "type_size": "小型犬$小型",
    "type_feat": "不爱叫$耐热",
    "type_func": "梗类犬",
    "letter": "A"
  }, {
    "id": 144,
    "name": "芬兰波美拉尼亚丝毛狗",
    "type_size": "中型犬$中型",
    "type_feat": null,
    "type_func": "家庭犬",
    "letter": "F"
  }, {
    "id": 145,
    "name": "猎水獭犬",
    "type_size": "大型犬$大型",
    "type_feat": "粘人$友善",
    "type_func": "狩猎犬",
    "letter": "L"
  }, {
    "id": 146,
    "name": "挪威布哈德犬",
    "type_size": "中型犬$中型",
    "type_feat": null,
    "type_func": "牧羊犬",
    "letter": "N"
  }, {
    "id": 147,
    "name": "爱尔兰软毛梗",
    "type_size": "中型犬$中型",
    "type_feat": null,
    "type_func": "梗类犬",
    "letter": "A"
  }, {
    "id": 148,
    "name": "卷毛寻回犬",
    "type_size": "大型犬$大型",
    "type_feat": "易训$友善",
    "type_func": "枪猎犬",
    "letter": "J"
  }, {
    "id": 149,
    "name": "弗莱特寻回犬",
    "type_size": "大型犬$大型",
    "type_feat": "不爱叫$聪明$易训",
    "type_func": "枪猎犬",
    "letter": "F"
  }, {
    "id": 150,
    "name": "英国玩具犬",
    "type_size": "小型犬$小型",
    "type_feat": null,
    "type_func": "玩具犬",
    "letter": "Y"
  }, {
    "id": 151,
    "name": "迦南犬",
    "type_size": "大型犬$大型",
    "type_feat": "粘人$会看家",
    "type_func": "牧羊犬",
    "letter": "J"
  }, {
    "id": 152,
    "name": "弗莱特寻回犬",
    "type_size": "大型犬$大型",
    "type_feat": "不爱叫$聪明$易训",
    "type_func": "枪猎犬",
    "letter": "F"
  }, {
    "id": 153,
    "name": "黑褐猎浣熊犬",
    "type_size": "大型犬$大型",
    "type_feat": "会看家",
    "type_func": "狩猎犬",
    "letter": "H"
  }, {
    "id": 154,
    "name": "布雷猎犬",
    "type_size": "大型犬$大型",
    "type_feat": "不爱叫$会看家",
    "type_func": "牧羊犬",
    "letter": "B"
  }, {
    "id": 155,
    "name": "布鲁塞尔格里芬犬",
    "type_size": "小型犬$小型",
    "type_feat": "粘人",
    "type_func": "玩具犬",
    "letter": "B"
  }, {
    "id": 156,
    "name": "德国硬毛波音达",
    "type_size": "大型犬$大型",
    "type_feat": "不爱叫",
    "type_func": "枪猎犬",
    "letter": "D"
  }, {
    "id": 157,
    "name": "布列塔尼犬",
    "type_size": "中型犬$中型",
    "type_feat": "聪明$友善",
    "type_func": "枪猎犬",
    "letter": "B"
  }, {
    "id": 158,
    "name": "美国水猎犬",
    "type_size": "中型犬$中型",
    "type_feat": "不爱叫",
    "type_func": "枪猎犬",
    "letter": "M"
  }, {
    "id": 159,
    "name": "西班牙小猎犬",
    "type_size": "中型犬$中型",
    "type_feat": "不爱叫",
    "type_func": "枪猎犬",
    "letter": "X"
  }, {
    "id": 160,
    "name": "比利牛斯牧羊犬",
    "type_size": "中型犬$中型",
    "type_feat": null,
    "type_func": "牧羊犬",
    "letter": "B"
  }, {
    "id": 161,
    "name": "树丛浣熊猎犬",
    "type_size": "大型犬$大型",
    "type_feat": null,
    "type_func": "狩猎犬",
    "letter": "S"
  }, {
    "id": 162,
    "name": "波兰德斯布比野犬",
    "type_size": "大型犬$大型",
    "type_feat": "不爱叫",
    "type_func": "牧羊犬",
    "letter": "B"
  }, {
    "id": 163,
    "name": "史毕诺犬",
    "type_size": "大型犬$大型",
    "type_feat": null,
    "type_func": "枪猎犬",
    "letter": "S"
  }, {
    "id": 164,
    "name": "美国英国猎浣熊犬",
    "type_size": "大型犬$大型",
    "type_feat": null,
    "type_func": "狩猎犬",
    "letter": "M"
  }, {
    "id": 165,
    "name": "伊比赞猎犬",
    "type_size": "大型犬$大型",
    "type_feat": null,
    "type_func": "狩猎犬",
    "letter": "Y"
  }, {
    "id": 166,
    "name": "凯斯梗",
    "type_size": "超大型犬$超大型",
    "type_feat": "不爱叫",
    "type_func": "梗类犬",
    "letter": "K"
  }, {
    "id": 167,
    "name": "布鲁克浣熊猎犬",
    "type_size": "大型犬$大型",
    "type_feat": null,
    "type_func": "狩猎犬",
    "letter": "B"
  }, {
    "id": 168,
    "name": "迷你贝吉格里芬凡丁犬",
    "type_size": "小型犬$小型",
    "type_feat": "粘人$友善$不掉毛",
    "type_func": "狩猎犬",
    "letter": "M"
  }, {
    "id": 169,
    "name": "新斯科舍猎鸭寻猎犬",
    "type_size": "中型犬$中型",
    "type_feat": null,
    "type_func": "枪猎犬",
    "letter": "X"
  }, {
    "id": 170,
    "name": "捕鼠梗",
    "type_size": "中型犬$中型",
    "type_feat": null,
    "type_func": "梗类犬",
    "letter": "B"
  }, {
    "id": 171,
    "name": "威尔士跳猎犬",
    "type_size": "中型犬$中型",
    "type_feat": "不爱叫",
    "type_func": "枪猎犬",
    "letter": "W"
  }, {
    "id": 172,
    "name": "田野小猎犬",
    "type_size": "中型犬$中型",
    "type_feat": "不爱叫$不掉毛",
    "type_func": "枪猎犬",
    "letter": "T"
  }, {
    "id": 173,
    "name": "英格兰雪达犬",
    "type_size": "大型犬$大型",
    "type_feat": null,
    "type_func": "枪猎犬",
    "letter": "Y"
  }, {
    "id": 174,
    "name": "博得猎狐犬",
    "type_size": "小型犬$小型",
    "type_feat": "不爱叫$不掉毛",
    "type_func": "梗类犬",
    "letter": "B"
  }, {
    "id": 175,
    "name": "苏塞克斯猎犬",
    "type_size": "小型犬$小型",
    "type_feat": "易训",
    "type_func": "枪猎犬",
    "letter": "S"
  }, {
    "id": 176,
    "name": "博伊金猎犬",
    "type_size": "中型犬$中型",
    "type_feat": null,
    "type_func": "枪猎犬",
    "letter": "B"
  }, {
    "id": 177,
    "name": "硬毛指示格里芬犬",
    "type_size": "大型犬$大型",
    "type_feat": "不爱叫",
    "type_func": "枪猎犬",
    "letter": "Y"
  }];

  let breed = {};


  export default function create_pet() {
    for (let i = 0; i < 100; i++) {
      let o = {}
      o.price = set_price();
      o.level = set_level();
      o.breed_id = set_breed_id();
      o.birthday = set_birthday();
      o.sex = set_sex();
      o.title = set_title(o);

      list.push(o);
    }
    return list;
  }


  function set_birthday() {
    let date = new Date();

    let y = RandomNum(1, 10);
    let r = ''

    if (y < 2) {
      r = date.getYear() + 1900 - 2 + '-' + RandomNum(1, 12);
    } else if (y >= 2 && y <= 4) {
      r = date.getYear() + 1900 - 1 + '-' + RandomNum(1, 12);
    } else {
      r = date.getYear() + 1900 + '-' + RandomNum(1, date.getMonth()+1);
    }
    r = r + '-' + RandomNum(1, 28);

    return r;
  }

  function set_price() {
    let r = RandomNum(5, 120);
    return r * 100;
  }

  function set_level() {
    let r = RandomNum(1, 10);

    let lv;
    
    if (r<7){
      lv = 1;
    }else if(r>=7 && r<=9) {
      lv = 2;
    }else {
      lv = 3;
    }
    return lv;
  }

  function set_breed_id() {
    let r = RandomNum(1, 177);

    breed = breed_list.find(current => {
      return current.id == r;
    });

    return r;
  }

  function set_sex() {
    let r = RandomNum(0, 2);

    if (r >= 1) {
      return 'mele';
    } else {
      return 'famele';
    }
  }

  function RandomNum(Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    var num = Min + Math.round(Rand * Range);
    return num;
  }

  function set_title(current) {
    let title =
      age(current.birthday) +
      breed.name +
      " " +
      level(current.level) +
      " " +
      sex(current.sex);
    
    return title;
  }

  function level(level) {
    if ((level == 1)) return "宠物级";
    else if ((level == 2)) return "血统级";
    else return "赛级";
  }

  function sex(s) {
    if ((s == "male")) return "公";
    else return "母";
  }

  function age(birthday) {
    if (!birthday) {
      return "-";
    }

    birthday = birthday.split(" ")[0];

    let arr = birthday.split("-");

    let b_y = arr[0];
    let b_m = arr[1];
    let b_d = arr[2];

    let date = new Date();
    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    let d = date.getDate();

    let r = "";
    let age_y = y - b_y;
    let age_m = m - b_m;
    let age_d = d - b_d;

    let get_date = new Date(y, m - 1, 0);
    let day = get_date.getDate();

    if (age_y < 0) {
      return "生日不合法！";
    } else if (age_y <= 0 && age_m < 0) {
      return "生日不合法！";
    }

    if (age_y >= 1 && age_m < 0) {
      age_y = age_y - 1;
      age_m = 12 + age_m;
    }

    if (age_y > 0) {
      r = age_y + "岁零";
    }

    if (age_m >= 2) {
      r = r + age_m + "个月";
      []
    } else if (age_m < 2) {
      if (age_m == 1 && age_d > 0) {
        age_d = age_d + day;
      } else if (age_d < 0) {
        age_d = age_d + day;
      }
      r = age_d + "天大";
    }

    return r;
  }