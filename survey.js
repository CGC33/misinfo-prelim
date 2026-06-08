// ── Data  ──────────────────────────────────────────────────────────────
const ITEMS = [
  {
    id: 1,
    tag_zh: "健康", tag_en: "Health",
    text_zh: "按摩疗法可能增强免疫系统以对抗感冒和流感",
    text_en: "Massage Therapy May Boost Immune System to Combat Cold, Flu"
  },
  {
    id: 2,
    tag_zh: "健康", tag_en: "Health",
    text_zh: "牛奶蛋白被证明可以减轻化疗的副作用",
    text_en: "Milk protein shown to alleviate chemotherapy side effects"
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
    tag_zh: "科学", tag_en: "Science",
    text_zh: "运动后进食会让锻炼白费，食物会立刻转化为脂肪",
    text_en: "Eating after a workout makes it useless, and the food immediately turns into fat"
  },
  {
    id: 17,
    tag_zh: "科学", tag_en: "Science",
    text_zh: "电热毯、暖宝宝有辐射，会致癌",
    text_en: "Electric blankets and hand warmers emit radiation and may cause cancer."
  },
  {
    id: 18,
    tag_zh: "科学", tag_en: "Science",
    text_zh: "小苏打加白醋可以疏通下水道",
    text_en: "Baking soda and white vinegar can unclog drains."
  },
  {
    id: 19,
    tag_zh: "科学", tag_en: "Science",
    text_zh: "5G基站辐射大",
    text_en: "5G base stations emit high levels of radiation."
  },
  {
    id: 20,
    tag_zh: "科学", tag_en: "Science",
    text_zh: "空气炸锅易产生致癌物",
    text_en: "Air fryers may produce carcinogens"
  },
  {
    id: 21,
    tag_zh: "科学", tag_en: "Science",
    text_zh: "佩戴金属饰品，更容易被雷击",
    text_en: "Wearing metal jewelry makes you more susceptible to lightning strikes."
  },
  {
    id: 22,
    tag_zh: "科学", tag_en: "Science",
    text_zh: "尿液有泡沫意味着肾不好",
    text_en: "Foamy urine means bad kidneys"
  },
  {
    id: 23,
    tag_zh: "科学", tag_en: "Science",
    text_zh: "新能源车企电车污染比油车更严重",
    text_en: "Electric vehicles from new energy vehicle manufacturers cause more pollution than gasoline vehicles."
  },
  {
    id: 24,
    tag_zh: "科学", tag_en: "Science",
    text_zh: "卧室里放WiFi路由器会致癌",
    text_en: "Putting a WiFi router in the bedroom causes cancer"
  },
  {
    id: 25,
    tag_zh: "科学", tag_en: "Science",
    text_zh: "聚酯纤维衣服是旧塑料瓶做的",
    text_en: "Polyester clothing is made from old plastic bottles."
  },
  {
    id: 26,
    tag_zh: "科学", tag_en: "Science",
    text_zh: "大白菜上的小黑点意味着它已经坏了，必须扔掉",
    text_en: "Small black spots on Napa cabbage mean it has gone bad and must be thrown away"
  },
  {
    id: 27,
    tag_zh: "科学", tag_en: "Science",
    text_zh: "地震余震较小，不用担心",
    text_en: "The aftershocks were minor, so there's no need to worry."
  },
  {
    id: 28,
    tag_zh: "科学", tag_en: "Science",
    text_zh: "空气炸锅做的食物致癌",
    text_en: "Food cooked in an air fryer is carcinogenic."
  },
  {
    id: 29,
    tag_zh: "科学", tag_en: "Science",
    text_zh: "汽车车身轻量化，让安全性下降",
    text_en: "Lighter car bodies reduce safety."
  },
  {
    id: 30,
    tag_zh: "科学", tag_en: "Science",
    text_zh: "智能电视会自动监听用户说话并上传",
    text_en: "Smart TVs automatically listen to the user's speech and upload it."
  },
];

// ── i18n Dictionary ───────────────────────────────────────────────────
const I18N = {
  zh: {
    q1Text: "你认为这条信息有多可能为真？",
    q2Text: "你之前听说过这件事吗？",
    q1Labels: [
      { val: 1, label: "1\n极不可能" },
      { val: 2, label: "2" },
      { val: 3, label: "3" },
      { val: 4, label: "4\n不确定" },
      { val: 5, label: "5" },
      { val: 6, label: "6" },
      { val: 7, label: "7\n极有可能" }
    ],
    q2Labels: [
      { val: "yes", label: "是 (听说过)" },
      { val: "no",  label: "否 (没听过)" }
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
    q1Text: "How likely do you think this information is true?",
    q2Text: "Have you heard of this before?",
    q1Labels: [
      { val: 1, label: "1\nExtremely\nUnlikely" },
      { val: 2, label: "2" },
      { val: 3, label: "3" },
      { val: 4, label: "4\nUncertain" },
      { val: 5, label: "5" },
      { val: 6, label: "6" },
      { val: 7, label: "7\nExtremely\nLikely" }
    ],
    q2Labels: [
      { val: "yes", label: "Yes" },
      { val: "no",  label: "No" }
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

  // 右下角悬浮按钮的样式
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
            <button class="scale-btn${ans.q1 === o.val ? ' sel-' + o.val : ''}"
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

function canAdvance() {
  const item = ITEMS[state.cur];
  const ans = state.answers[item.id] || {};
  return ans.q1 !== undefined && ans.q2 !== undefined;
}

function pick(id, q, val) {
  if (!state.answers[id]) state.answers[id] = {};
  state.answers[id][q] = val;
  saveState();
  if (q === 'q1') {
    document.querySelectorAll('.scale-btn').forEach((btn, i) => {
      btn.className = 'scale-btn' + (I18N[state.lang].q1Labels[i].val === val ? ' sel-' + val : '');
    });
  } else {
    document.querySelectorAll('.share-btn').forEach((btn, i) => {
      btn.className = 'share-btn' + (I18N[state.lang].q2Labels[i].val === val ? ' selected' : '');
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

  // 保持相同的右下角悬浮按钮
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
      tag: item.tag_zh, // 统一记录中文Tag用于分析对齐
      text: item.text_zh,
      q1_credibility: state.answers[item.id]?.q1 ?? null,
      q2_heard: state.answers[item.id]?.q2 ?? null,
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
  const rows = [
    ['respondent_id', 'timestamp', 'lang', 'item_id', 'tag', 'text', 'q1_credibility_1to7', 'q2_heard'],
    ...data.answers.map(a => [
      data.respondent_id,
      data.timestamp,
      data.lang,
      a.item_id,
      a.tag,
      `"${a.text.replace(/"/g, '""')}"`,
      a.q1_credibility ?? '',
      a.q2_heard ?? ''
    ])
  ];
  const csv = rows.map(r => r.join(',')).join('\n');
  const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `misinfo_${data.respondent_id}_${Date.now()}.csv`;
  a.click();
}

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
render();