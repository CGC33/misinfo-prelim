// ── Data  ──────────────────────────────────────────────────────────────
const ITEMS = [
  {
    id: 1,
    tag_zh: "健康", tag_en: "Health",
    text_zh: "寨卡疫苗有望治疗致命的脑癌",
    text_en: "Zika vaccine shows promise for treating deadly brain cancer"
  },
  {
    id: 2,
    tag_zh: "健康", tag_en: "Health",
    text_zh: "牛奶蛋白被证明可以减轻化疗的副作用",
    text_en: "Milk protein shown to alleviate chemotherapy side effects."
  },
  {
    id: 3,
    tag_zh: "健康", tag_en: "Health",
    text_zh: "微型可植入设备切断饥饿感，有助于减肥",
    text_en: "Tiny implantable device short-circuits hunger pangs, aids weight loss"
  },
  {
    id: 4,
    tag_zh: "健康", tag_en: "Health",
    text_zh: "维生素C可能减少怀孕期间吸烟对婴儿肺部造成的伤害",
    text_en: "Vitamin C May Reduce Harm to Infants' Lungs Caused by Smoking During Pregnancy"
  },
  {
    id: 5,
    tag_zh: "健康", tag_en: "Health",
    text_zh: "刺果番荔枝叶提取物可预防纤维肌痛症状",
    text_en: "Extract from soursop leaves can prevent the symptoms of fibromyalgia"
  },
  {
    id: 6,
    tag_zh: "健康", tag_en: "Health",
    text_zh: "脉冲射频可缓解急性背痛和坐骨神经痛",
    text_en: "Pulsed radiofrequency relieves acute back pain and sciatica"
  },
  {
    id: 7,
    tag_zh: "健康", tag_en: "Health",
    text_zh: "新型血液检测可早期发现卵巢癌",
    text_en: "New blood test detects early stage ovarian cancer"
  },
  {
    id: 8,
    tag_zh: "健康", tag_en: "Health",
    text_zh: "研究表明，泡热水澡可能有助于改善炎症和新陈代谢",
    text_en: "A hot bath may help improve inflammation, metabolism, study suggests"
  },
  {
    id: 9,
    tag_zh: "健康", tag_en: "Health",
    text_zh: "发酵乳制品可能预防心脏病发作",
    text_en: "Fermented dairy products may protect against heart attack"
  },
  {
    id: 10,
    tag_zh: "健康", tag_en: "Health",
    text_zh: "每周吃鱼与更好的睡眠和更高的智商有关",
    text_en: "Weekly fish consumption linked to better sleep, higher IQ"
  },
  {
    id: 11,
    tag_zh: "健康", tag_en: "Health",
    text_zh: "研究：跑步实际上能降低膝关节炎症",
    text_en: "Study: Running actually lowers inflammation in knee joints"
  },
  {
    id: 12,
    tag_zh: "健康", tag_en: "Health",
    text_zh: "治疗发作性嗜睡病的药物可以帮助食物成瘾者减肥",
    text_en: "Drug for narcolepsy could help food addicts lose weight"
  },
  {
    id: 13,
    tag_zh: "健康", tag_en: "Health",
    text_zh: "相比阳光，LED灯在产生维生素D3方面更安全、更有效",
    text_en: "LED lights safer, more effective in producing Vitamin D3 than sunlight"
  },
  {
    id: 14,
    tag_zh: "健康", tag_en: "Health",
    text_zh: "糖能改善60岁以上人群的记忆力，帮助他们更高效地工作",
    text_en: "Sugar improves memory in over-60s, helping them work smarter"
  },
  {
    id: 15,
    tag_zh: "健康", tag_en: "Health",
    text_zh: "新兴研究表明，蒙特莫伦西酸樱桃可能有助于增强肠道健康",
    text_en: "New emerging research suggests Montmorency tart cherries may help enhance gut health"
  },
  {
    id: 16,
    tag_zh: "健康", tag_en: "Health",
    text_zh: "益生菌可以帮助数百万患有双相情感障碍的患者",
    text_en: "Probiotics could help millions of patients suffering from bipolar disorder"
  },
  {
    id: 17,
    tag_zh: "健康", tag_en: "Health",
    text_zh: "吃洋葱有助于对抗极端高温",
    text_en: "Eating onions helps combat extreme heat"
  },
  {
    id: 18,
    tag_zh: "健康", tag_en: "Health",
    text_zh: "癌症筛查测试包的灭菌使患者处于危险之中",
    text_en: "Sterilization of cancer screening test kits puts patients at riske"
  },
  {
    id: 19,
    tag_zh: "健康", tag_en: "Health",
    text_zh: "松节油可以帮助排毒。每天喝少量可以保持身体健康",
    text_en: "Turpentine can help detoxify. Drinking a small amount every day can maintain good health"
  },
  {
    id: 20,
    tag_zh: "健康", tag_en: "Health",
    text_zh: "不吃蔬菜会改善粉刺",
    text_en: "Not eating vegetables will improve acne"
  },
  {
    id: 21,
    tag_zh: "健康", tag_en: "Health",
    text_zh: "煮沸的沙司可以治疗咳嗽",
    text_en: "Boiled Sarsi can treat coughs"
  },
  {
    id: 22,
    tag_zh: "健康", tag_en: "Health",
    text_zh: "双氧水可以用来治疗百日咳",
    text_en: "Hydrogen peroxide can be used to treat pertussis"
  },
  {
    id: 23,
    tag_zh: "健康", tag_en: "Health",
    text_zh: "小苏打（也被称为碳酸氢钠）可以帮助人们对抗流感病毒",
    text_en: "Baking soda (also known as sodium bicarbonate) can help people fight against the flu virus"
  },
  {
    id: 24,
    tag_zh: "健康", tag_en: "Health",
    text_zh: "吸入二氧化碳可以改善焦虑和偏头痛",
    text_en: "Inhaling carbon dioxide can improve anxiety and migraines"
  },
  {
    id: 25,
    tag_zh: "健康", tag_en: "Health",
    text_zh: "含铅涂料可以保护房屋免受电磁辐射",
    text_en: "Lead-based paint can protect houses from electromagnetic radiation"
  },
  {
    id: 26,
    tag_zh: "健康", tag_en: "Health",
    text_zh: "饮用芦荟和蛋清的混合物可以改善糖尿病和高血压",
    text_en: "Drinking a mixture of aloe vera and egg white can improve diabetes and hypertension"
  },
  {
    id: 27,
    tag_zh: "健康", tag_en: "Health",
    text_zh: "采用低胆固醇饮食或服用降胆固醇药物会增加患阿尔茨海默病的风险",
    text_en: "Adopting a low-cholesterol diet or taking cholesterol medications can increase the risk of developing Alzheimer's disease"
  },
  {
    id: 28,
    tag_zh: "健康", tag_en: "Health",
    text_zh: "人乳头瘤病毒（HPV）疫苗可能导致女性不孕",
    text_en: "Human papillomavirus (HPV) vaccination may lead to female infertility"
  },
  {
    id: 29,
    tag_zh: "健康", tag_en: "Health",
    text_zh: "糖苹果叶茶可以帮助治疗子宫内膜癌（一种影响子宫上部的癌症）",
    text_en: "Sugar apple leaf tea can help treat endometrial cancer (a type of cancer that affects the upper part of the uterus)"
  },
  {
    id: 30,
    tag_zh: "健康", tag_en: "Health",
    text_zh: "喝椰汁可以帮助治疗肾脏疾病",
    text_en: "Drinking sprouted coconut juice can help treat kidney disease"
  },
  {
    id: 31,
    tag_zh: "健康", tag_en: "Health",
    text_zh: "人工流产会增加患乳腺癌的风险",
    text_en: "Induced abortion increases the risk of breast cancer"
  },
  {
    id: 32,
    tag_zh: "健康", tag_en: "Health",
    text_zh: "尼古丁在一定程度上能治疗神经系统疾病",
    text_en: "Nicotine can cure neurological diseases to a certain extent"
  },
  {
    id: 33,
    tag_zh: "健康", tag_en: "Health",
    text_zh: "氟化钠是导致癌症的主要原因之一。氟化钠是一种化学化合物，通常被添加到牙膏中，在一些国家，还被添加到饮用水中。它的主要目的是通过加强牙釉质来防止蛀牙。",
    text_en: "Sodium fluoride is one of the main causes of cancer.Sodium fluoride is a chemical compound commonly added to toothpaste and, in some countries, drinking water.  Its main purpose is to help prevent tooth decay by strengthening tooth enamel"
  },
  {
    id: 34,
    tag_zh: "健康", tag_en: "Health",
    text_zh: "太阳风暴会影响人体健康，并可能影响人体，引起生物钟紊乱、焦虑和心悸等症状",
    text_en: "Solar storms can affect human health and may impact the human body, causing symptoms such as disrupted biological clocks, anxiety, and palpitations"
  },
  {
    id: 35,
    tag_zh: "健康", tag_en: "Health",
    text_zh: "新的研究发现，纤维肌痛的真正原因是手脚的一种特定血管附近的特定神经过多",
    text_en: "New research has found that the real cause of fibromyalgia is an excessive number of specific nerves near a particular type of blood vessel in the hands and feet"
  },
  {
    id: 36,
    tag_zh: "健康", tag_en: "Health",
    text_zh: "2025年8月，德国科学家开发出一种无需手术即可再生关节软骨的凝胶",
    text_en: "German scientists developed a gel to regrow joint cartilage without surgery in August 2025"
  },
  {
    id: 37,
    tag_zh: "科学", tag_en: "Science",
    text_zh: "在美国印第安纳州，车牌侧面的一个微小的5G标记跟踪支持蜂窝网络的5G基础设施",
    text_en: "A tiny 5G mark on the side of a license plate in Indiana, USA, tracks the 5G infrastructure that supports cellular networks"
  },
  {
    id: 38,
    tag_zh: "科学", tag_en: "Science",
    text_zh: "下一代天气雷达（NEXRAD）系统由多个美国政府机构操作，可以探测风和降水，并引导飓风海伦",
    text_en: "The next-generation weather radar (NEXRAD) system, operated by multiple US government agencies, can detect wind and precipitation and guide Hurricane Helen"
  },
  {
    id: 39,
    tag_zh: "科学", tag_en: "Science",
    text_zh: "中国发明了一种“人造子宫”来养育人类婴儿",
    text_en: "China has invented an'artificial womb'for nurturing human infants"
  },
  {
    id: 40,
    tag_zh: "科学", tag_en: "Science",
    text_zh: "日本科学家成功发明了一种核磁共振成像机器，可以记录梦境并将其重建以供日后观看",
    text_en: "Japanese scientists successfully created an MRI machine that can record dreams and reconstruct them to be viewed later"
  },
  {
    id: 41,
    tag_zh: "科学", tag_en: "Science",
    text_zh: "日本政府出于对健康的担忧，禁止开发5G技术",
    text_en: "The Japanese government banned the development of 5G technology over health concerns"
  },
  {
    id: 42,
    tag_zh: "科学", tag_en: "Science",
    text_zh: "在读卡器中输入错误的密码可以保护你免受借记卡欺诈",
    text_en: "Entering the wrong PIN into a card reader will protect you against debit card fraud"
  },
  {
    id: 43,
    tag_zh: "科学", tag_en: "Science",
    text_zh: "中国科学家开发出世界上最轻的“脑控”设备，可以将蜜蜂变成远程控制的“半机械人”无人机，用于军事监视和侦察任务",
    text_en: "Chinese scientists have developed the world's lightest'brain control'device to turn bees into remotely controlled'cyborg'drones for military surveillance and reconnaissance missions"
  },
  {
    id: 44,
    tag_zh: "科学", tag_en: "Science",
    text_zh: "新能源车企电车污染比油车更严重",
    text_en: "Electric vehicles from new energy vehicle manufacturers cause more pollution than gasoline vehicles."
  },
  {
    id: 45,
    tag_zh: "科学", tag_en: "Science",
    text_zh: "卧室里放WiFi路由器会致癌",
    text_en: "Putting a WiFi router in the bedroom causes cancer"
  },
  {
    id: 46,
    tag_zh: "科学", tag_en: "Science",
    text_zh: "没有透明的太阳能电池板",
    text_en: "There is no transparent solar panel"
  },
  {
    id: 47,
    tag_zh: "科学", tag_en: "Science",
    text_zh: "日本发明了一种硬币大小的发电机，可以“凭空”地全天候发电",
    text_en: "Japan has invented a coin-sized generator that can generate all-weather electricity‘out of thin air’"
  },
  {
    id: 48,
    tag_zh: "科学", tag_en: "Science",
    text_zh: "科技企业家埃隆·马斯克正在创造一种代理机器人，它可以让人类胎儿受精并携带9个月",
    text_en: "Tech entrepreneur Elon Musk is creating surrogate robots that can fertilize and carry a human fetus for nine months"
  },
  {
    id: 49,
    tag_zh: "科学", tag_en: "Science",
    text_zh: "可穿戴技术声称可以将智能手机直接投射到前臂上",
    text_en: "Wearable technology claims to project your smartphone directly onto your forearm"
  },
  {
    id: 50,
    tag_zh: "科学", tag_en: "Science",
    text_zh: "实验证明在微波炉里煮过的水对植物有害",
    text_en: "Experiment proves water that has been boiled in a microwave oven is harmful to plants"
  },
  {
    id: 51,
    tag_zh: "科学", tag_en: "Science",
    text_zh: "有一种装置可以在没有电源的情况下点亮灯泡",
    text_en: "There is a device that can light up a bulb without power supply"
  },
  {
    id: 52,
    tag_zh: "科学", tag_en: "Science",
    text_zh: "人造的放射性“钻石电池”能够在不充电的情况下提供数千年的能量",
    text_en: "Man-made, radioactive'diamond batteries'are capable of providing thousands of years of energy without a charge"
  },
  {
    id: 53,
    tag_zh: "科学", tag_en: "Science",
    text_zh: "把电池放在冰箱或冰柜里可以提高电池的性能",
    text_en: "Storing batteries in a refrigerator or freezer will improve their performance"
  },
  {
    id: 54,
    tag_zh: "科学", tag_en: "Science",
    text_zh: "把汽车电池放在水泥地上会耗尽电池的电量并损坏电池",
    text_en: "Storing a car battery on a concrete floor will drain the battery and ruin it"
  },
  {
    id: 55,
    tag_zh: "科学", tag_en: "Science",
    text_zh: "研究人员发现了一种比汽油强1693倍的新型“超级燃料”",
    text_en: "Researchers Discovered a New 'Superfuel' 1,693 Times More Powerful Than Gasoline"
  },
  {
    id: 56,
    tag_zh: "科学", tag_en: "Science",
    text_zh: "有些人用腌黄瓜、AA电池和iPhone充电线来爆爆米花",
    text_en: "Some people use a pickled cucumber, an AA battery and an iPhone charging cable to pop popcorn"
  },
  {
    id: 57,
    tag_zh: "科学", tag_en: "Science",
    text_zh: "你可以用微波炉快速给手机充电",
    text_en: "You can quickly recharge your cell phone by microwaving it"
  },
  {
    id: 58,
    tag_zh: "科学", tag_en: "Science",
    text_zh: "哈佛大学的一项研究证明，苹果有意放慢老款iphone的速度，以配合新机型的发布，并促进新机型的销售",
    text_en: "A Harvard study proved that Apple purposely slows down its older model iPhones to coincide with device releases and to boost sales of new models"
  },
  {
    id: 59,
    tag_zh: "科学", tag_en: "Science",
    text_zh: "一种被称为“unobtainium”的物质是一种真正的化学物质或元素周期表中的有效元素",
    text_en: "A substance dubbed'unobtainium'is a real chemical or a valid element included in the periodic table"
  },
  {
    id: 60,
    tag_zh: "科学", tag_en: "Science",
    text_zh: "人们应该避免将手机插入公共USB接口，因为这是一种被称为“充电座盗取数据”的安全威胁",
    text_en: "People should avoid plugging their phones into a public USB port due to a security threat called'juice-jacking'"
  },
  {
    id: 61,
    tag_zh: "科学", tag_en: "Science",
    text_zh: "Facebook上有关消费者收到“刷单”诈骗包裹的危险的帖子警告说，扫描恶意二维码（在未经请求的包裹中发现的代码）的单独行为可以立即泄露用户的手机、个人和财务信息，并耗尽他们的银行账户",
    text_en: "Facebook posts about the dangers of consumers receiving a package as part of a brushing scam warn that the lone act of scanning a malicious QR code — a code found inside the unsolicited parcel — can immediately compromise a user's phone and personal and financial information, and drain their bank accounts"
  },
  {
    id: 62,
    tag_zh: "科学", tag_en: "Science",
    text_zh: "一些空气炸锅可能在“监视”它们的用户",
    text_en: "Some air fryers could be'spying'on their users"
  },
  {
    id: 63,
    tag_zh: "科学", tag_en: "Science",
    text_zh: "隐身模式保护用户数据不被记录",
    text_en: "Incognito mode protects users' data from being recorded"
  },
];

// ── i18n Dictionary ───────────────────────────────────────────────────
const I18N = {
  zh: {
    q1Text: "上述内容为真的可能性有多大？",
    q2Text: "您是否熟悉上述标题（此前是否曾见过或听说过相关内容）？",
    q3Text: "假设上述标题内容完全属实，那么这则新闻会有多重要？",
    q1Labels: [
      { val: 1, label: "1\n极不可能" },
      { val: 2, label: "2\n中度不可能" },
      { val: 3, label: "3\n稍不可能" },
      { val: 4, label: "4\n稍有可能" },
      { val: 5, label: "5\n中度可能" },
      { val: 6, label: "6\n极有可能" }
    ],
    q2Labels: [
      { val: "yes", label: "是 " },
      { val: "unsure", label: "不确定 " },
      { val: "no",  label: "否 " }
    ],
    q3Labels: [
      { val: 1, label: "1\n极不重要" },
      { val: 2, label: "2\n中度不重要" },
      { val: 3, label: "3\n稍不重要" },
      { val: 4, label: "4\n稍重要" },
      { val: 5, label: "5\n中度重要" },
      { val: 6, label: "6\n极重要" }
    ],
    evalClaim: "待评估说法",
    btnPrev: "← 上一题",
    btnNext: "下一题 →",
    btnSubmit: "提交问卷 ✓",
    endTitle: "感谢你的参与",
    endSub: "共回答 {count} 题 · 用时约 {elapsed} 分钟<br>你的回答已同步至云端，并保存在本地。",
    exportJson: "⬇ 导出 JSON",
    exportCsv: "⬇ 导出 CSV",
    reset: "↺ 重新作答",
    langToggle: "EN"
  },
  en: {
    q1Text: "What is the likelihood that the above headline is true?",
    q2Text: "Are you familiar with the above headline (have you seen or heard about it before)?",
    q3Text: "Assuming the above headline is entirely accurate, how important would this news be?",
    q1Labels: [
      { val: 1, label: "1\nExtremely\nunlikely" },
      { val: 2, label: "2\nModerately\nunlikely" },
      { val: 3, label: "3\nSlightly\nunlikely" },
      { val: 4, label: "4\nSlightly\nlikely" },
      { val: 5, label: "5\nModerately\nlikely" },
      { val: 6, label: "6\nExtremely\nlikely" },
    ],
    q2Labels: [
      { val: "yes", label: "Yes" },
      { val: "unsure", label: "Unsure" },
      { val: "no",  label: "No" }
    ],
    q3Labels: [
      { val: 1, label: "1\nExtremely\nunimportant" },
      { val: 2, label: "2\nModerately\nunimportant" },
      { val: 3, label: "3\nSlightly\nunimportant" },
      { val: 4, label: "4\nSlightly\nimportant" },
      { val: 5, label: "5\nModerately\nimportant" },
      { val: 6, label: "6\nExtremely\nimportant" },
    ],
    evalClaim: "Claim to Evaluate",
    btnPrev: "← Prev",
    btnNext: "Next →",
    btnSubmit: "Submit ✓",
    endTitle: "Thank You",
    endSub: "Answered {count} items · Took ~{elapsed} mins<br>Your responses have been securely synced.",
    exportJson: "⬇ Export JSON",
    exportCsv: "⬇ Export CSV",
    reset: "↺ Restart",
    langToggle: "中文"
  }
};

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby_doJGyiDZSn88ZbxIQqDF8nTb0TFzStbp9cYEBypdzOWOIkMXvXylO9f1Ie2rWsz79A/exec';

// ── State ─────────────────────────────────────────────────────────────
const STORAGE_KEY = 'misinfo_survey_v1';
let state = {
  cur: 0,
  lang: 'zh', // 默认语言
  answers: {},
  startTime: Date.now(),
  done: false,
};

function loadState() {
  try {
    const s = localStorage.getItem(STORAGE_KEY);
    if (s) {
      const parsed = JSON.parse(s);
      state = { ...state, ...parsed }; 
    }
  } catch(e) {}
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

loadState();

// ── Render ─────────────────────────────────────────────────────────────
const mainEl = document.getElementById('main');
const progressBar = document.getElementById('progressBar');
const headerCounter = document.getElementById('headerCounter');

function toggleLang() {
  state.lang = state.lang === 'zh' ? 'en' : 'zh';
  saveState();
  render();
}

function updateHeader() {
  if (state.done) {
    headerCounter.textContent = '完成';
    progressBar.style.width = '100%';
  } else {
    headerCounter.textContent = `${state.cur + 1} / ${ITEMS.length}`;
    progressBar.style.width = `${((state.cur + 1) / ITEMS.length) * 100}%`;
  }
}

function render() {
  updateHeader();
  if (state.done) { renderEnd(); return; }

  const item = ITEMS[state.cur];
  const ans = state.answers[item.id] || {};
  const t = I18N[state.lang];

  const currentTag = state.lang === 'zh' ? item.tag_zh : item.tag_en;
  const currentText = state.lang === 'zh' ? item.text_zh : item.text_en;

  const floatingBtnHTML = `
    <button onclick="toggleLang()" style="position: fixed; bottom: 24px; right: 24px; z-index: 9999; width: 50px; height: 50px; border-radius: 50%; background-color: #ffffff; border: 1px solid #e0e0e0; box-shadow: 0 4px 12px rgba(0,0,0,0.15); cursor: pointer; font-weight: bold; color: #333; display: flex; align-items: center; justify-content: center; font-size: 14px; transition: transform 0.2s;">
      ${t.langToggle}
    </button>
  `;

  mainEl.innerHTML = `
  <div class="slide" id="slide">
    <div class="item-num">ITEM ${String(item.id).padStart(2,'0')} · ${currentTag}</div>

    <div class="claim-card">
      <div class="claim-tag">${t.evalClaim}</div>
      <div class="claim-text">${currentText}</div>
    </div>

    <div class="questions">
      <div class="q-block">
        <div class="q-label">
          <span class="qnum">Q1</span>
          ${t.q1Text}
        </div>
        <div class="scale-row" style="flex-wrap: wrap;">
          ${t.q1Labels.map(o => `
            <button class="scale-btn q1-btn${ans.q1 === o.val ? ' sel-' + o.val : ''}"
              onclick="pick(${item.id}, 'q1', ${o.val})"
              style="white-space:pre-line; flex: 1 1 auto; min-width: 45px;">${o.label}</button>
          `).join('')}
        </div>
      </div>

      <div class="q-block">
        <div class="q-label">
          <span class="qnum">Q2</span>
          ${t.q2Text}
        </div>
        <div class="share-row">
          ${t.q2Labels.map(o => `
            <button class="share-btn${ans.q2 === o.val ? ' selected' : ''}"
              onclick="pick(${item.id}, 'q2', '${o.val}')">${o.label}</button>
          `).join('')}
        </div>
      </div>

      <div class="q-block">
        <div class="q-label">
          <span class="qnum">Q3</span>
          ${t.q3Text}
        </div>
        <div class="scale-row" style="flex-wrap: wrap;">
          ${t.q3Labels.map(o => `
            <button class="scale-btn q3-btn${ans.q3 === o.val ? ' sel-' + o.val : ''}"
              onclick="pick(${item.id}, 'q3', ${o.val})"
              style="white-space:pre-line; flex: 1 1 auto; min-width: 45px;">${o.label}</button>
          `).join('')}
        </div>
      </div>

    </div>

    <div class="nav" style="display: flex; gap: 10px; flex-wrap: wrap;">
      <button class="btn" onclick="go(-1)" ${state.cur === 0 ? 'disabled' : ''}>${t.btnPrev}</button>
      <button class="btn-next btn" onclick="go(1)" id="btnNext" style="margin-left: auto;" ${canAdvance() ? '' : 'disabled'}>
        ${state.cur === ITEMS.length - 1 ? t.btnSubmit : t.btnNext}
      </button>
    </div>
  </div>
  ${floatingBtnHTML}`;
}

// 修复验证逻辑：必须三道题都回答完，"下一题"按钮才会亮起
function canAdvance() {
  const item = ITEMS[state.cur];
  const ans = state.answers[item.id] || {};
  return ans.q1 !== undefined && ans.q2 !== undefined && ans.q3 !== undefined;
}

// 修复点击逻辑：增加对 Q3 按钮颜色高亮的判定
function pick(id, q, val) {
  if (!state.answers[id]) state.answers[id] = {};
  state.answers[id][q] = val;
  saveState();
  
  if (q === 'q1') {
    document.querySelectorAll('.q1-btn').forEach((btn, i) => {
      btn.className = 'scale-btn q1-btn' + (I18N[state.lang].q1Labels[i].val === val ? ' sel-' + val : '');
    });
  } else if (q === 'q2') {
    document.querySelectorAll('.share-btn').forEach((btn, i) => {
      btn.className = 'share-btn' + (I18N[state.lang].q2Labels[i].val === val ? ' selected' : '');
    });
  } else if (q === 'q3') {
    document.querySelectorAll('.q3-btn').forEach((btn, i) => {
      btn.className = 'scale-btn q3-btn' + (I18N[state.lang].q3Labels[i].val === val ? ' sel-' + val : '');
    });
  }
  
  const btnNext = document.getElementById('btnNext');
  if (btnNext) btnNext.disabled = !canAdvance();
}

function go(dir) {
  if (dir === 1 && !canAdvance()) return;
  const slide = document.getElementById('slide');
  if (!slide) return;
  slide.classList.add('out');
  
  setTimeout(async () => {
    if (dir === 1) {
      if (state.cur === ITEMS.length - 1) {
        state.done = true;
        saveState();
        await submitToSheets();  
        renderEnd();
        updateHeader();
        return;
      }
      state.cur++;
    } else {
      state.cur = Math.max(0, state.cur - 1);
    }
    saveState();
    render();
  }, 220);
}

// ── End screen ─────────────────────────────────────────────────────────
function renderEnd() {
  const count = Object.keys(state.answers).length;
  const elapsed = Math.round((Date.now() - state.startTime) / 1000 / 60);
  const t = I18N[state.lang];
  const subText = t.endSub.replace('{count}', count).replace('{elapsed}', elapsed);

  const floatingBtnHTML = `
    <button onclick="toggleLang()" style="position: fixed; bottom: 24px; right: 24px; z-index: 9999; width: 50px; height: 50px; border-radius: 50%; background-color: #ffffff; border: 1px solid #e0e0e0; box-shadow: 0 4px 12px rgba(0,0,0,0.15); cursor: pointer; font-weight: bold; color: #333; display: flex; align-items: center; justify-content: center; font-size: 14px; transition: transform 0.2s;">
      ${t.langToggle}
    </button>
  `;

  mainEl.innerHTML = `
  <div class="end-screen slide" id="slide">
    <div class="end-icon">✦</div>
    <div class="end-title">${t.endTitle}</div>
    <div class="end-sub">${subText}</div>
    <div class="export-btns">
      <button class="btn-export" onclick="exportJSON()">${t.exportJson}</button>
      <button class="btn-export" onclick="exportCSV()">${t.exportCsv}</button>
      <button class="btn-export" onclick="resetSurvey()">${t.reset}</button>
    </div>
    <div class="data-preview">
      <div class="data-preview-title">DATA PREVIEW — answers.json</div>
      <pre>${JSON.stringify(buildExportData(), null, 2).slice(0, 2000)}</pre>
    </div>
  </div>
  ${floatingBtnHTML}`;
}

// ── Export ─────────────────────────────────────────────────────────────
function buildExportData() {
  const respondent_id = localStorage.getItem('misinfo_uid') || (() => {
    const id = 'r_' + Math.random().toString(36).slice(2, 10);
    localStorage.setItem('misinfo_uid', id);
    return id;
  })();
  
  return {
    respondent_id,
    timestamp: new Date().toISOString(),
    duration_sec: Math.round((Date.now() - state.startTime) / 1000),
    lang: state.lang,
    answers: ITEMS.map(item => ({
      item_id: item.id,
      tag: item.tag_zh,
      text: item.text_zh,
      q1_credibility: state.answers[item.id]?.q1 ?? null,
      q2_heard: state.answers[item.id]?.q2 ?? null,
      q3_importance: state.answers[item.id]?.q3 ?? null, // 新增 Q3 的存储结构
    }))
  };
}

function exportJSON() {
  const data = buildExportData();
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `misinfo_${data.respondent_id}_${Date.now()}.json`;
  a.click();
}

function exportCSV() {
  const data = buildExportData();
  // 在表头新增 q3_importance 列
  const rows = [
    ['respondent_id', 'timestamp', 'lang', 'item_id', 'tag', 'text', 'q1_credibility_1to7', 'q2_heard', 'q3_importance_1to6'],
    ...data.answers.map(a => [
      data.respondent_id,
      data.timestamp,
      data.lang,
      a.item_id,
      a.tag,
      `"${a.text.replace(/"/g, '""')}"`,
      a.q1_credibility ?? '',
      a.q2_heard ?? '',
      a.q3_importance ?? '' // 将 Q3 数据写入 CSV
    ])
  ];
  const csv = rows.map(r => r.join(',')).join('\n');
  const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `misinfo_${data.respondent_id}_${Date.now()}.csv`;
  a.click();
function resetSurvey() {
  if (!confirm(state.lang === 'zh' ? '确定要清除所有答案并重新开始吗？' : 'Are you sure you want to clear all answers and restart?')) return;
  state = { cur: 0, lang: state.lang, answers: {}, startTime: Date.now(), done: false };
  saveState();
  render();
  updateHeader();
}

// ── Network Submission ─────────────────────────────────────────────────
async function submitToSheets() {
  const data = buildExportData();
  try {
    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8'
      },
      body: JSON.stringify(data)
    });
    console.log("数据同步请求已发送！");
  } catch(err) {
    console.error("同步出错:", err); 
  }
}

// ── Init ───────────────────────────────────────────────────────────────
render(); // 这行极其重要，它是启动整个界面的引擎
