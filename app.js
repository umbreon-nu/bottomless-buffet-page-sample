const FLOOR_MAP_IDS = Array.from({ length: 99 }, (_, index) => `${String(index + 1).padStart(2, "0")}F`);
const SPECIAL_MAP_IDS = ["blue_A", "blue_B", "blue_C", "blue_D", "blue_E", "blue_F"];
const MAP_IDS = [...FLOOR_MAP_IDS, ...SPECIAL_MAP_IDS];
// 出典: https://wikiwiki.jp/splatoon_r/%E3%83%80%E3%83%B3%E3%82%B8%E3%83%A7%E3%83%B3 （初期配置は同ページで「現状、不正確」と注記あり）
const CONFIGURATION_ROWS = `
01F|紫A|2100|ナベブタ・バクダン・テッキュウ・カタパッド・ヘビ
02F|紫E|2100|スモーカー×2・コウモリ×2・テッパン
03F|紫D|2400|メガ盛りタワー・タワー×3・スモーカー
04F|紫B|2100|ハネツキ×3・バクダン・モグラ
05F|紫C|2100|タンシオ・ハシラ・コウモリ・カタパッド・ダイバー
06F|紫E|2400|粗挽きテッパン・テッパン・タワー
07F|紫C|2100|テッパン・スモーカー・テッキュウ・カタパッド・バクダン
08F|紫A|2100|ヘビ×2・タンシオ×2・スモーカー
09F|紫B|2400|バリカタカタパッド・カタパッド・テッパン・ナベブタ
10F|紫D|2100|バクダン×2・コウモリ・カタパッド・モグラ
11F|紫B|2100|タンシオ×2・スモーカー・モグラ・ダイバー
12F|紫A|2400|つゆだくバクダン・ハネツキ×2・バクダン・カタパッド
13F|紫E|2100|タンシオ・スモーカー・カタパッド・タワー・コウモリ
14F|紫D|2100|ナベブタ×2・ハネツキ・バクダン・テッパン
15F|紫A|2400|替え玉テッキュウ・テッキュウ×2・ハネツキ
16F|緑A|2100|ナベブタ・テッパン・タンシオ・ハシラ・テッキュウ
17F|緑C|2100|テッパン×2・タンシオ×2・ナベブタ
18F|緑D|2400|メガ盛りタワー・タワー×2・ハネツキ・テッキュウ
19F|緑B|2100|スモーカー・コウモリ・モグラ・テッキュウ・テッパン
20F|緑A|2100|ヘビ×2・テッパン×2・バクダン
21F|緑E|2400|爆釣モグラ・モグラ×2・コウモリ
22F|緑C|2100|ハシラ・スモーカー・テッキュウ・タワー・バクダン
23F|緑E|2100|スモーカー×2・ハシラ・テッパン・タンシオ
24F|緑B|2400|替え玉テッキュウ・テッキュウ×2・コウモリ
25F|緑D|2100|バクダン・カタパッド・スモーカー・ヘビ・テッパン
26F|緑B|2100|テッキュウ・タワー・ハシラ・テッパン
27F|緑A|2400|メガ盛りタワー・バクダン・スモーカー・タワー・テッキュウ
28F|緑E|2100|タンシオ×2・バクダン・テッキュウ・モグラ
29F|緑D|2100|ハネツキ×5
30F|緑C|2400|つゆだくバクダン・バクダン×2・タンシオ・ハシラ
31F|桃A|2100|タンシオ・ナベブタ・バクダン・テッパン
32F|桃C|2100|ヘビ×3・ナベブタ・バクダン
33F|桃D|2400|メガ盛りタワー×2
34F|桃B|2100|バクダン×2・タンシオ・コウモリ・テッパン
35F|桃A|2100|コウモリ×2・テッパン・テッキュウ・タンシオ
36F|桃E|2400|ウデジマン・バクダン・テッキュウ・コウモリ
37F|桃C|2100|バクダン・テッパン・モグラ・ダイバー
38F|桃E|2100|カタパッド×2・タワー×2・タンシオ
39F|桃B|2400|大行列ヘビ・ヘビ×2・コウモリ・バクダン
40F|桃D|2100|タンシオ・タワー・バクダン・テッパン
41F|桃B|2100|ナベブタ×2・テッパン×2・タンシオ
42F|桃A|2400|粗挽きテッパン・タンシオ×2・テッパン×2
43F|桃E|2100|ヘビ×2・テッパン×2・タンシオ
44F|桃D|2100|バクダン×4・ナベブタ
45F|桃B|2400|厚切りタンシオ・タンシオ×4
46F|紫C|2100|タンシオ×2・カタパッド・テッパン・ヘビ
47F|紫E|2100|ヘビ×2・テッパン×2・バクダン
48F|紫A|2400|つゆだくバクダン・バクダン×3・モグラ
49F|紫D|2100|カタパッド×2・テッパン×2・バクダン
50F|紫C|2100|ナベブタ×2・スモーカー・バクダン・テッキュウ
51F|紫B|2400|大行列ヘビ・バクダン×2・ヘビ・コウモリ
52F|紫E|2100|タワー×3・カタパッド・タンシオ
53F|紫B|2100|タンシオ・ハシラ・コウモリ・モグラ・テッパン
54F|紫D|2400|ウデジマン・コウモリ×3
55F|紫A|2100|テッパン×3・コウモリ
56F|紫D|2100|ヘビ×3・タワー・スモーカー
57F|紫C|2400|バリカタカタパッド・タワー×2・バクダン×2
58F|紫B|2100|コウモリ・ナベブタ・スモーカー・テッパン・ダイバー
59F|紫A|2100|モグラ×2・ダイバー×2・ハシラ
60F|紫E|2400|厚切りタンシオ×2・タンシオ
61F|緑A|2100|ナベブタ×2・タンシオ・テッパン・モグラ
62F|緑E|2100|バクダン×2・ハネツキ×2・カタパッド
63F|緑C|2400|爆釣モグラ・テッパン・バクダン・スモーカー
64F|緑D|2100|ナベブタ・ヘビ・モグラ・テッキュウ・ハシラ
65F|緑A|2100|テッパン×2・ハシラ
66F|緑B|2400|ウデジマン・テッパン×2
67F|緑E|2100|テッパン×2・ヘビ・テッキュウ・モグラ
68F|緑B|2100|スモーカー×3・タンシオ・テッパン
69F|緑D|2400|粗挽きテッパン×2・テッパン
70F|緑C|2100|ヘビ×3・タンシオ・ハネツキ
71F|緑D|2100|ハシラ×2・テッキュウ・バクダン
72F|緑A|2400|厚切りタンシオ・タンシオ×2・ハネツキ・モグラ
73F|緑B|2100|ハネツキ×3・カタパッド・タワー
74F|緑C|2100|タンシオ×2・テッパン×2・タワー
75F|緑E|2400|バリカタカタパッド・カタパッド・バクダン・コウモリ・タンシオ
76F|桃A|2100|テッキュウ・ハネツキ・タンシオ×2・バクダン
77F|桃E|2100|テッキュウ・ハネツキ・ハシラ・スモーカー・ナベブタ
78F|桃C|2400|爆釣モグラ・モグラ×3
79F|桃D|2100|カタパッド×2・ハネツキ×2・バクダン
80F|桃A|2100|ハネツキ×2・コウモリ×2
81F|桃B|2400|メガ盛りタワー・ナベブタ・テッパン・スモーカー
82F|桃E|2100|タンシオ・ナベブタ・モグラ・ヘビ・コウモリ
83F|桃B|2100|モグラ×2・カタパッド
84F|桃D|2400|替え玉テッキュウ・テッキュウ×2・モグラ
85F|桃C|2100|ハネツキ×2・カタパッド・スモーカー・ハシラ
86F|桃D|2100|テッパン×2・タンシオ・スモーカー・バクダン
87F|桃A|2400|ウデジマン・テッキュウ×2・タンシオ・テッパン
88F|桃B|2100|ハシラ×5
89F|桃C|2100|テッパン×4・ナベブタ
90F|桃E|2400|つゆだくバクダン×2・バクダン×2
91F|青A|2400|大行列ヘビ・ヘビ・タワー・タンシオ
92F|青C|2400|バリカタカタパッド・バクダン×2・ヘビ・ハシラ
93F|青D|2400|メガ盛りタワー・タンシオ×2・タワー・バクダン
94F|青B|2400|つゆだくバクダン・バクダン×2・スモーカー×2
95F|青D|2400|大行列ヘビ・ヘビ×2・タンシオ・ナベブタ
96F|青A|2400|厚切りタンシオ・ハネツキ・タンシオ・テッパン
97F|青C|2400|粗挽きテッパン×2・タワー・ハネツキ
98F|青B|2400|バリカタカタパッド×2・ナベブタ
99F|青E|2600|ウデジマン×2・スモーカー・バクダン・コウモリ
blue_A|青A|2400|爆釣モグラ・モグラ・テッパン・コウモリ
blue_B|青B|2400|替え玉テッキュウ・タンシオ・タワー・ハシラ・ヘビ・テッパン
blue_C|青C|2400|爆釣モグラ・テッキュウ×2・モグラ・ナベブタ
blue_D|青D|2400|粗挽きテッパン・ハシラ×2・テッパン×2・バクダン・ハネツキ
blue_E|青E|2400|大行列ヘビ・ハネツキ×2・テッキュウ・カタパッド・モグラ
blue_F|青F|2400|メガ盛りタワー・カタパッド×2・バクダン×2・タンシオ`;
const CONFIGURATIONS = new Map(CONFIGURATION_ROWS.trim().split("\n").map((row) => {
  const [mapId, mapCode, quota, initialSpawns] = row.split("|");
  return [mapId, { mapCode, quota: Number(quota), initialSpawns }];
}));
const SPAWN_FILTERS = {
  "オオモノ": ["タンシオ", "ハネツキ", "テッパン", "タワー", "バクダン", "テッキュウ", "ハシラ", "ヘビ", "ナベブタ", "カタパッド", "スモーカー", "モグラ", "コウモリ", "ダイバー"],
  "キワモノ": ["厚切りタンシオ", "粗挽きテッパン", "メガ盛りタワー", "つゆだくバクダン", "替え玉テッキュウ", "爆釣モグラ", "大行列ヘビ", "バリカタカタパッド", "ウデジマン"]
};

const elements = {
  totalAttempts: document.querySelector("#total-attempts"),
  totalSuccesses: document.querySelector("#total-successes"),
  totalRate: document.querySelector("#total-rate"),
  highestClearFloor: document.querySelector("#highest-clear-floor"),
  challengeArea: document.querySelector("#challenge-area"),
  sortOrder: document.querySelector("#sort-order"),
  filterDescription: document.querySelector("#filter-description"),
  mapGrid: document.querySelector("#map-grid"),
  cardTemplate: document.querySelector("#map-card-template"),
  detailPanel: document.querySelector("#detail-panel"),
  detailMapId: document.querySelector("#detail-map-id"),
  detailTitle: document.querySelector("#detail-title"),
  detailMapImage: document.querySelector("#detail-map-image"),
  detailImageWrap: document.querySelector(".detail-image-wrap"),
  detailConfiguration: document.querySelector("#detail-configuration"),
  detailSummary: document.querySelector("#detail-summary"),
  detailHistory: document.querySelector("#detail-history"),
  recentHistory: document.querySelector("#recent-history"),
  closeDetail: document.querySelector("#close-detail"),
  quotaFilter: document.querySelector("#quota-filter"),
  spawnFilters: document.querySelector("#spawn-filters"),
  resetConfigurationFilters: document.querySelector("#reset-configuration-filters"),
  configurationCount: document.querySelector("#configuration-count"),
  status: document.querySelector("#status-message")
};

let attempts = [];
let selectedMapId = null;
let selectedSpawnFilters = new Set();

// 成功数と試行数から、整数に丸めた成功率の表示文字列を返す。
function percentage(successes, total) {
  return total === 0 ? "—" : `${Math.round((successes / total) * 100)}%`;
}

// 構成IDに対応するJPG画像のパスを返す。
function mapImagePath(mapId) {
  return MAP_IDS.includes(mapId) ? `./assets/maps/${mapId}.jpg` : null;
}

// JPGを読み込み、読み込めなければ共通のプレースホルダーへ切り替える。
function setMapImage(image, imageWrap, mapId) {
  const imagePath = mapImagePath(mapId);
  const displayId = displayMapId(mapId);
  let usingPlaceholder = false;
  imageWrap.dataset.loaded = "false";
  image.removeAttribute("src");
  image.alt = imagePath ? `${displayId} のマップ画像` : "";
  image.setAttribute("aria-hidden", String(!imagePath));
  image.onload = () => { imageWrap.dataset.loaded = "true"; };
  image.onerror = () => {
    imageWrap.dataset.loaded = "false";
    // プレースホルダーも読めなければ「画像なし」の表示に留め、再試行しない。
    if (usingPlaceholder) return;
    usingPlaceholder = true;
    image.alt = `${displayId} のプレースホルダー画像`;
    image.src = "./assets/placeholder.svg";
  };
  if (imagePath) image.src = imagePath;
}

// 内部用の構成IDを画面表示用の名称に変換する。
function displayMapId(mapId) {
  return mapId.startsWith("blue_") ? `青${mapId.at(-1)}` : mapId;
}

// 画面上のステータスメッセージと表示種別を更新する。
function setStatus(message, kind = "") {
  elements.status.textContent = message;
  elements.status.dataset.kind = kind;
}

// 記録済みの階数から、3階単位の挑戦エリア選択肢を生成する。
function prepareChallengeAreas() {
  // 101F〜103Fを起点とする3階単位で、記録があるエリアのみ選択可能にする。
  const starts = [...new Set(attempts.map((attempt) =>
    101 + Math.floor((attempt.floor - 101) / 3) * 3
  ))].sort((left, right) => left - right);
  elements.challengeArea.replaceChildren(new Option("すべて", ""));
  for (const start of starts) {
    elements.challengeArea.append(new Option(`${start}F〜${start + 2}F`, String(start)));
  }
}

// 選択中の挑戦エリアに該当する試行記録を返す。
function currentAttempts() {
  const start = Number.parseInt(elements.challengeArea.value, 10);
  return attempts.filter((attempt) => !Number.isInteger(start) ||
    (attempt.floor >= start && attempt.floor <= start + 2)
  );
}

// 現在の対象記録を構成ごとの試行数と成功数に集計する。
function aggregates() {
  const filtered = currentAttempts();
  const byMap = new Map(MAP_IDS.map((mapId) => [mapId, { mapId, attempts: 0, successes: 0 }]));

  for (const attempt of filtered) {
    const aggregate = byMap.get(attempt.mapId);
    if (!aggregate) continue;
    aggregate.attempts += 1;
    if (attempt.result === "success") aggregate.successes += 1;
  }

  return { filtered, byMap };
}

// 試行数に応じてカードの信頼度表示区分を返す。
function reliability(aggregate) {
  if (aggregate.attempts === 0) return "empty";
  if (aggregate.attempts < 5) return "reference";
  return "ranked";
}

// 構成別集計を、画面で選択された条件に従って並べ替える。
function sortedAggregates(byMap) {
  const values = [...byMap.values()];
  const order = elements.sortOrder.value;
  const rate = (item) => item.attempts === 0 ? -1 : item.successes / item.attempts;

  return values.sort((left, right) => {
    if (order === "id-asc") return left.mapId.localeCompare(right.mapId);
    if (left.attempts === 0 || right.attempts === 0) {
      if (left.attempts === 0 && right.attempts === 0) return left.mapId.localeCompare(right.mapId);
      return left.attempts === 0 ? 1 : -1;
    }
    if (order === "attempts-desc") return right.attempts - left.attempts || left.mapId.localeCompare(right.mapId);
    if (order === "rate-asc") return rate(left) - rate(right) || left.mapId.localeCompare(right.mapId);
    return rate(right) - rate(left) || right.attempts - left.attempts || left.mapId.localeCompare(right.mapId);
  });
}

// 対象記録の総試行数、成功数、成功率、最高クリア階を表示する。
function renderSummary(filtered) {
  const successes = filtered.filter((attempt) => attempt.result === "success").length;
  const highestClearFloor = filtered
    .filter((attempt) => attempt.result === "success" && (attempt.floor - 100) % 3 === 0)
    .reduce((highest, attempt) => Math.max(highest, attempt.floor), null);
  elements.totalAttempts.textContent = String(filtered.length);
  elements.totalSuccesses.textContent = String(successes);
  elements.totalRate.textContent = percentage(successes, filtered.length);
  elements.highestClearFloor.textContent = highestClearFloor ? `${highestClearFloor}F` : "—";

  const start = Number.parseInt(elements.challengeArea.value, 10);
  elements.filterDescription.textContent = Number.isInteger(start)
    ? `${start}F〜${start + 2}F の試行`
    : "全記録";
}

// 検索条件と並び順を反映した構成カード一覧を描画する。
function renderGrid(byMap) {
  elements.mapGrid.replaceChildren();
  const candidateIds = new Set(filteredConfigurationIds());
  const visibleAggregates = sortedAggregates(byMap).filter((aggregate) => candidateIds.has(aggregate.mapId));
  if (visibleAggregates.length === 0) {
    const empty = document.createElement("p");
    empty.className = "grid-empty";
    empty.textContent = "検索条件に一致する構成はありません。";
    elements.mapGrid.append(empty);
    return;
  }

  for (const aggregate of visibleAggregates) {
    const card = elements.cardTemplate.content.firstElementChild.cloneNode(true);
    const image = card.querySelector("img");
    const imageWrap = card.querySelector(".map-image-wrap");
    const configuration = CONFIGURATIONS.get(aggregate.mapId);
    const state = reliability(aggregate);
    const displayId = displayMapId(aggregate.mapId);
    setMapImage(image, imageWrap, aggregate.mapId);
    card.querySelector(".map-id").textContent = displayId;
    card.querySelector(".map-layout").textContent = `ノルマ ${configuration.quota}`;
    card.querySelector(".map-spawns").textContent = `初期配置：${configuration.initialSpawns}`;
    card.querySelector(".map-rate").textContent = percentage(aggregate.successes, aggregate.attempts);
    card.querySelector(".map-count").textContent = aggregate.attempts === 0
      ? "試行なし"
      : `${aggregate.successes}成功 / ${aggregate.attempts}試行${state === "reference" ? " · 参考値" : ""}`;
    card.dataset.reliability = state;
    card.dataset.selected = String(selectedMapId === aggregate.mapId);
    card.addEventListener("click", () => selectMap(aggregate.mapId));
    elements.mapGrid.append(card);
  }
}

// 指定された試行記録を履歴行としてコンテナへ描画する。
function renderHistory(container, records) {
  container.replaceChildren();
  if (records.length === 0) {
    const empty = document.createElement("p");
    empty.className = "history-meta";
    empty.textContent = "記録はありません。";
    container.append(empty);
    return;
  }

  for (const record of records) {
    const row = document.createElement("div");
    row.className = "history-row";
    const detail = document.createElement("div");
    const resultText = record.result === "success" ? "成功" : "失敗";
    detail.innerHTML = `<p><strong class="result-${record.result}">${resultText}</strong> · ${record.floor}F · ${displayMapId(record.mapId)}</p><p class="history-meta">${new Date(record.recordedAt).toLocaleString("ja-JP")}</p>`;
    row.append(detail);

    container.append(row);
  }
}

// 選択した構成の詳細情報と直近の試行履歴をダイアログに表示する。
function selectMap(mapId) {
  selectedMapId = mapId;
  const configuration = CONFIGURATIONS.get(mapId);
  const records = currentAttempts().filter((attempt) => attempt.mapId === mapId).sort((a, b) => b.recordedAt.localeCompare(a.recordedAt));
  const successes = records.filter((attempt) => attempt.result === "success").length;
  const displayId = displayMapId(mapId);
  elements.detailMapId.textContent = displayId;
  elements.detailTitle.textContent = `${displayId} の構成と試行履歴`;
  setMapImage(elements.detailMapImage, elements.detailImageWrap, mapId);
  elements.detailConfiguration.textContent = `ノルマ ${configuration.quota} · 初期配置（照合用）：${configuration.initialSpawns}`;
  elements.detailSummary.textContent = records.length < 5 && records.length > 0
    ? `${percentage(successes, records.length)}（${successes}成功 / ${records.length}試行・参考値）`
    : `${percentage(successes, records.length)}（${successes}成功 / ${records.length}試行）`;
  renderHistory(elements.detailHistory, records.slice(0, 20));
  if (!elements.detailPanel.open) elements.detailPanel.showModal();
  render();
}

// 現在の状態をもとに履歴、集計、構成カード、該当件数を再描画する。
function render() {
  const { filtered, byMap } = aggregates();
  renderHistory(elements.recentHistory, [...filtered].sort((a, b) => b.recordedAt.localeCompare(a.recordedAt)).slice(0, 20));
  renderSummary(filtered);
  renderGrid(byMap);
  elements.configurationCount.textContent = `該当する構成：${filteredConfigurationIds().length}件 / ${MAP_IDS.length}件`;
}

// ノルマと初期配置の検索条件を満たす構成IDの一覧を返す。
function filteredConfigurationIds() {
  const quota = Number(elements.quotaFilter.value);
  return MAP_IDS.filter((mapId) => {
    const configuration = CONFIGURATIONS.get(mapId);
    const spawns = configuration.initialSpawns.split("・").map((spawn) => spawn.replace(/×\d+$/, ""));
    return (!quota || configuration.quota === quota) &&
      (selectedSpawnFilters.size === 0 || [...selectedSpawnFilters].every((spawn) => spawns.includes(spawn)));
  });
}

// ノルマと初期配置の検索条件を初期状態へ戻す。
function clearConfigurationFilters() {
  elements.quotaFilter.value = "";
  selectedSpawnFilters = new Set();
  renderSpawnFilters();
}

// 初期配置の種類ごとに検索ボタンを生成し、選択操作を登録する。
function renderSpawnFilters() {
  elements.spawnFilters.replaceChildren();
  for (const [groupName, spawns] of Object.entries(SPAWN_FILTERS)) {
    const group = document.createElement("div");
    group.className = "spawn-filter-group";
    const heading = document.createElement("span");
    heading.className = "spawn-filter-group-title";
    heading.textContent = groupName;
    const list = document.createElement("div");
    list.className = "spawn-filter-list";
    for (const spawn of spawns) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "spawn-filter";
      button.textContent = spawn;
      button.dataset.selected = String(selectedSpawnFilters.has(spawn));
      button.setAttribute("aria-pressed", String(selectedSpawnFilters.has(spawn)));
      button.addEventListener("click", () => {
        if (selectedSpawnFilters.has(spawn)) selectedSpawnFilters.delete(spawn);
        else selectedSpawnFilters.add(spawn);
        renderSpawnFilters();
        render();
      });
      list.append(button);
    }
    group.append(heading, list);
    elements.spawnFilters.append(group);
  }
}

// 絞り込み、並び替え、詳細表示に必要なイベント処理を登録する。
function setupEvents() {
  for (const input of [elements.challengeArea, elements.sortOrder]) {
    input.addEventListener("input", render);
    input.addEventListener("change", render);
  }
  elements.closeDetail.addEventListener("click", () => elements.detailPanel.close());
  elements.detailPanel.addEventListener("close", () => { selectedMapId = null; render(); });
  elements.quotaFilter.addEventListener("change", render);
  elements.resetConfigurationFilters.addEventListener("click", () => {
    clearConfigurationFilters();
    render();
  });
}

// UIを準備して月別JSONを読み込み、ダッシュボードを初期表示する。
async function init() {
  renderSpawnFilters();
  setupEvents();
  try {
    // capture形式のindexと全月別JSONを読み込み、試行記録をまとめて返す。
    const loadCapture = async () => {
      const source = "capture";
      const indexResponse = await fetch(`./data/${source}/index.json`, { cache: "no-store" });
      if (!indexResponse.ok) throw new Error(`${source}の記録一覧を読み込めませんでした。`);
      const index = await indexResponse.json();
      if (!Array.isArray(index.months)) throw new Error(`${source}の記録一覧が不正です。`);
      const monthlyData = await Promise.all(index.months.map(async (month) => {
        const response = await fetch(`./data/${source}/${month}.json`, { cache: "no-store" });
        if (!response.ok) throw new Error(`${source}/${month}の記録を読み込めませんでした。`);
        const data = await response.json();
        if (!Array.isArray(data.attempts)) throw new Error(`${source}/${month}の記録が不正です。`);
        return data.attempts;
      }));
      return monthlyData.flat();
    };
    attempts = (await loadCapture())
      .sort((left, right) => left.recordedAt.localeCompare(right.recordedAt));
    prepareChallengeAreas();
    render();
  } catch (error) {
    setStatus(error.message, "error");
  }
}

init();
