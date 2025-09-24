const state = {
  config: null,
  data: null,
  currentScenario: null,
  mappingComplete: false,
  duplicateDecisions: new Map(),
  flaggedReceivables: new Set(),
  threshold: null,
  inventoryFilters: new Set(),
  liquidationCleaned: false,
  trafficFilter: 'all',
  trafficCompany: 'all',
  progressStart: 0,
  progressDuration: 0,
  progressFrame: null,
  lastUploadCount: 0
};

const elements = {};

const numberFormatter = new Intl.NumberFormat('ru-RU');

document.addEventListener('DOMContentLoaded', init);

async function init() {
  cacheElements();
  setDemoScenarioAvailability(false);
  const resources = await loadResources();
  if (!resources) {
    displayResourceLoadError();
    return;
  }

  state.config = resources.config;
  state.data = resources.data;

  setupEventHandlers();
  initializeProgressSteps();
  initializeInventoryFilters();
  initializeTrafficFilters();
  initializeTrafficCompanies();
  renderFinalScreen();
  updateCTA();
  renderTrafficList();

  setDemoScenarioAvailability(true);
}

function cacheElements() {
  elements.dropZone = document.getElementById('dropZone');
  elements.fileInput = document.getElementById('fileInput');
  elements.demoScenario = document.getElementById('demoScenario');
  elements.summaryFiles = document.getElementById('summary-files');
  elements.summaryCompanies = document.getElementById('summary-companies');
  elements.summaryPeriods = document.getElementById('summary-periods');
  elements.summaryFormats = document.getElementById('summary-formats');
  elements.summaryDescription = document.getElementById('summary-description');
  elements.recognitionLegend = document.getElementById('recognition-legend');
  elements.badgeFiles = document.getElementById('badge-files');
  elements.badgeCompanies = document.getElementById('badge-companies');
  elements.badgePeriods = document.getElementById('badge-periods');
  elements.badgeFormats = document.getElementById('badge-formats');
  elements.companyFileList = document.getElementById('companyFileList');
  elements.periodFileList = document.getElementById('periodFileList');
  elements.tabCompanies = document.getElementById('tab-companies');
  elements.tabPeriods = document.getElementById('tab-periods');
  elements.panelCompanies = document.getElementById('panel-companies');
  elements.panelPeriods = document.getElementById('panel-periods');
  elements.attentionList = document.getElementById('attentionList');
  elements.duplicateList = document.getElementById('duplicateList');
  elements.startMapping = document.getElementById('startMapping');
  elements.startConsolidation = document.getElementById('startConsolidation');
  elements.uploadScreen = document.getElementById('upload-screen');
  elements.progressScreen = document.getElementById('progress-screen');
  elements.triadScreen = document.getElementById('triad-screen');
  elements.progressIndicator = document.getElementById('progressIndicator');
  elements.progressValue = document.getElementById('progressValue');
  elements.progressSteps = document.getElementById('progressSteps');
  elements.progressStatus = document.getElementById('progressStatus');
  elements.triadNavButtons = document.querySelectorAll('.triad-nav-btn');
  elements.consolidationMetrics = document.getElementById('consolidationMetrics');
  elements.toggleElimination = document.getElementById('toggleElimination');
  elements.showEliminations = document.getElementById('showEliminations');
  elements.eliminationDetails = document.getElementById('eliminationDetails');
  elements.consolidationHints = document.getElementById('consolidationHints');
  elements.consolidationRules = document.getElementById('consolidationRules');
  elements.thresholdRange = document.getElementById('thresholdRange');
  elements.thresholdValue = document.getElementById('thresholdValue');
  elements.receivablesList = document.getElementById('receivablesList');
  elements.sendToTraffic = document.getElementById('sendToTraffic');
  elements.trafficMessage = document.getElementById('trafficMessage');
  elements.inventoryFilters = document.getElementById('inventoryFilters');
  elements.inventoryList = document.getElementById('inventoryList');
  elements.cleanBalance = document.getElementById('cleanBalance');
  elements.liquidationBeforeSummary = document.getElementById('liquidationBeforeSummary');
  elements.liquidationAssets = document.getElementById('liquidationAssets');
  elements.liquidationAdjustments = document.getElementById('liquidationAdjustments');
  elements.liquidationAfterSummary = document.getElementById('liquidationAfterSummary');
  elements.ownerStatement = document.getElementById('ownerStatement');
  elements.trafficFilters = document.getElementById('trafficFilters');
  elements.trafficCompany = document.getElementById('trafficCompany');
  elements.trafficList = document.getElementById('trafficList');
  elements.finalHeadline = document.getElementById('finalHeadline');
  elements.finalPoints = document.getElementById('finalPoints');
  elements.finalDisclaimer = document.getElementById('finalDisclaimer');
  elements.ctaButton = document.getElementById('ctaButton');
  elements.mappingTemplate = document.getElementById('mappingStepTemplate');
}

function setDemoScenarioAvailability(enabled) {
  if (!elements.demoScenario) {
    return;
  }
  elements.demoScenario.disabled = !enabled;
  if (enabled) {
    elements.demoScenario.removeAttribute('aria-disabled');
  } else {
    elements.demoScenario.setAttribute('aria-disabled', 'true');
  }
}

function setupEventHandlers() {
  elements.dropZone.addEventListener('dragover', onDragOver);
  elements.dropZone.addEventListener('dragleave', onDragLeave);
  elements.dropZone.addEventListener('drop', onDropFiles);
  elements.dropZone.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      elements.fileInput.click();
    }
  });

  elements.fileInput.addEventListener('change', (event) => {
    handleFiles(event.target.files);
  });

  elements.demoScenario.addEventListener('click', () => {
    if (!state.data?.uploadScenarios?.length) {
      return;
    }
    const scenario = state.data.uploadScenarios[1] || state.data.uploadScenarios[0];
    loadScenario(scenario, scenario.summary.files);
  });

  elements.tabCompanies.addEventListener('click', () => setActiveTab('companies'));
  elements.tabPeriods.addEventListener('click', () => setActiveTab('periods'));
  [elements.tabCompanies, elements.tabPeriods].forEach((tab) => {
    tab.addEventListener('keydown', onTabKeydown);
  });

  elements.startMapping.addEventListener('click', openMappingWizard);
  elements.startConsolidation.addEventListener('click', startConsolidation);

  elements.triadNavButtons.forEach((button) => {
    button.addEventListener('click', () => switchTriadPanel(button.dataset.target, button));
  });

  elements.toggleElimination.addEventListener('change', renderConsolidationMetrics);
  elements.showEliminations.addEventListener('click', toggleEliminationList);

  elements.thresholdRange.min = state.config.receivables.minDays;
  elements.thresholdRange.max = state.config.receivables.maxDays;
  elements.thresholdRange.addEventListener('input', (event) => {
    state.threshold = Number(event.target.value);
    elements.thresholdValue.textContent = state.threshold;
    renderReceivables();
  });

  elements.sendToTraffic.addEventListener('click', addReceivablesToTraffic);

  elements.cleanBalance.addEventListener('click', applyLiquidationScenario);
  elements.trafficCompany.addEventListener('change', (event) => {
    state.trafficCompany = event.target.value;
    renderTrafficList();
  });
}

function onDragOver(event) {
  event.preventDefault();
  elements.dropZone.classList.add('dragover');
}

function onDragLeave(event) {
  event.preventDefault();
  elements.dropZone.classList.remove('dragover');
}

function onDropFiles(event) {
  event.preventDefault();
  elements.dropZone.classList.remove('dragover');
  const files = event.dataTransfer?.files;
  if (files && files.length) {
    handleFiles(files);
  }
}

function handleFiles(fileList) {
  state.lastUploadCount = fileList.length;
  const scenario = chooseScenario(Array.from(fileList));
  loadScenario(scenario, fileList.length);
  elements.fileInput.value = '';
}

function chooseScenario(files) {
  if (!files || !files.length) {
    return state.data.uploadScenarios[0];
  }
  const hasZip = files.some((file) => file.name.toLowerCase().endsWith('.zip'));
  if (hasZip) {
    return state.data.uploadScenarios.find((item) => item.id === 'zipArchive') || state.data.uploadScenarios[0];
  }
  if (files.length > 20) {
    return state.data.uploadScenarios.find((item) => item.id === 'groupUpload') || state.data.uploadScenarios[0];
  }
  return state.data.uploadScenarios.find((item) => item.id === 'singleCompany') || state.data.uploadScenarios[0];
}

function loadScenario(scenario, uploadedCount = 0) {
  if (!scenario) {
    return;
  }
  state.currentScenario = scenario;
  state.mappingComplete = scenario.mappingSteps?.length === 0;
  state.duplicateDecisions = new Map();
  state.flaggedReceivables.clear();
  state.inventoryFilters.clear();
  state.liquidationCleaned = false;
  state.threshold = state.config.receivables.defaultThreshold;
  elements.thresholdRange.value = state.threshold;
  elements.thresholdValue.textContent = state.threshold;
  state.lastUploadCount = uploadedCount;
  elements.trafficMessage.textContent = '';

  elements.inventoryFilters.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.checked = false;
  });

  renderScenarioSummary();
  renderGroupings();
  renderAttentionList();
  renderDuplicateList();
  updateMappingButton();
  updateStartButtonState();
  resetScreensToUpload();
  elements.triadNavButtons.forEach((btn, idx) => {
    btn.setAttribute('aria-pressed', idx === 0 ? 'true' : 'false');
  });
  elements.eliminationDetails.setAttribute('hidden', '');
  elements.showEliminations.textContent = 'Показать устранённые внутригрупповые обороты';
  resetLiquidationView();
  state.trafficFilter = 'all';
  state.trafficCompany = 'all';
  elements.trafficFilters.querySelectorAll('button').forEach((btn) => {
    const active = btn.dataset.value === 'all';
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  });
  elements.trafficCompany.value = 'all';
  renderReceivables();
  renderInventoryList();
  renderTrafficList();
}

function renderScenarioSummary() {
  const scenario = state.currentScenario;
  elements.summaryFiles.textContent = scenario.summary.files;
  elements.summaryCompanies.textContent = scenario.summary.companies;
  elements.summaryPeriods.textContent = scenario.summary.periods;
  elements.summaryFormats.textContent = scenario.summary.formats.join(' • ');
  const uploadInfo = state.lastUploadCount ? `Загружено: ${state.lastUploadCount}` : 'Готовый демо-набор';
  elements.summaryDescription.textContent = `${uploadInfo}. Сценарий: ${scenario.summary.description}.`;
  elements.recognitionLegend.textContent = `Распознано: ${scenario.recognition.recognized} • Требует маппинга: ${scenario.recognition.needsMapping} • Дубликаты: ${scenario.recognition.duplicates}`;
  elements.badgeFiles.textContent = `Файлов: ${scenario.summary.files}`;
  elements.badgeCompanies.textContent = `Компаний: ${scenario.summary.companies}`;
  elements.badgePeriods.textContent = `Периодов: ${scenario.summary.periods}`;
  elements.badgeFormats.textContent = `Форматы: ${scenario.summary.formats.join(', ')}`;
}

function renderGroupings() {
  const scenario = state.currentScenario;
  renderCompanyGroups(scenario.files);
  renderPeriodGroups(scenario.files);
}

function renderCompanyGroups(files) {
  elements.companyFileList.innerHTML = '';
  const companyMap = new Map();
  files.forEach((file) => {
    if (!companyMap.has(file.company)) {
      companyMap.set(file.company, []);
    }
    companyMap.get(file.company).push(file);
  });
  companyMap.forEach((companyFiles, company) => {
    const details = document.createElement('details');
    details.className = 'file-group';
    details.open = companyMap.size <= 4;
    const summary = document.createElement('summary');
    summary.textContent = `${company} • ${companyFiles.length} файлов`;
    details.appendChild(summary);
    companyFiles.forEach((file) => {
      details.appendChild(createFileRow(file));
    });
    elements.companyFileList.appendChild(details);
  });
}

function renderPeriodGroups(files) {
  elements.periodFileList.innerHTML = '';
  const yearMap = new Map();
  files.forEach((file) => {
    const year = file.period?.toString().slice(0, 4) || 'Не указан';
    if (!yearMap.has(year)) {
      yearMap.set(year, new Map());
    }
    const periodKey = file.periodLabel || file.period || 'Без периода';
    const periodMap = yearMap.get(year);
    if (!periodMap.has(periodKey)) {
      periodMap.set(periodKey, []);
    }
    periodMap.get(periodKey).push(file);
  });

  yearMap.forEach((periodMap, year) => {
    const details = document.createElement('details');
    details.className = 'file-group';
    details.open = yearMap.size <= 3;
    const totalFiles = Array.from(periodMap.values()).reduce((acc, list) => acc + list.length, 0);
    const summary = document.createElement('summary');
    summary.textContent = `${year} • ${totalFiles} файлов`;
    details.appendChild(summary);

    periodMap.forEach((periodFiles, periodLabel) => {
      const header = document.createElement('div');
      header.className = 'file-row period-label';
      const titleSpan = document.createElement('span');
      titleSpan.textContent = periodLabel;
      header.appendChild(titleSpan);
      details.appendChild(header);
      periodFiles.forEach((file) => {
        details.appendChild(createFileRow(file));
      });
    });

    elements.periodFileList.appendChild(details);
  });
}

function createFileRow(file, options = {}) {
  const row = document.createElement('div');
  row.className = 'file-row';
  const name = document.createElement('span');
  name.textContent = file.name;
  row.appendChild(name);

  const type = document.createElement('span');
  type.textContent = file.format ? `${file.type} (${file.format})` : file.type;
  row.appendChild(type);

  const period = document.createElement('span');
  period.textContent = file.periodLabel || file.period || '—';
  row.appendChild(period);

  const origin = document.createElement('span');
  origin.textContent = file.origin || '—';
  row.appendChild(origin);

  const status = document.createElement('span');
  status.className = 'file-status';
  status.dataset.status = file.status || 'recognized';
  status.textContent = statusLabel(file.status);
  row.appendChild(status);

  if (file.mappingHint && options.showHint !== false) {
    const hint = document.createElement('span');
    hint.textContent = file.mappingHint;
    hint.className = 'section-subtitle';
    hint.style.gridColumn = '1 / -1';
    row.appendChild(hint);
  }

  if (options.actions) {
    const actionsContainer = document.createElement('div');
    actionsContainer.className = 'file-actions';
    actionsContainer.style.gridColumn = '1 / -1';
    options.actions.forEach((actionButton) => {
      actionsContainer.appendChild(actionButton);
    });
    row.appendChild(actionsContainer);
  }

  return row;
}

function statusLabel(status = 'recognized') {
  const map = {
    recognized: 'Распознано',
    mapping: 'Нужен маппинг',
    duplicate: 'Дубликат'
  };
  return map[status] || status;
}

function renderAttentionList() {
  const scenario = state.currentScenario;
  elements.attentionList.innerHTML = '';
  const needsMapping = scenario.files.filter((file) => file.status === 'mapping');
  if (!needsMapping.length) {
    const message = document.createElement('p');
    message.className = 'section-subtitle';
    message.textContent = 'Все файлы распознаны. Маппинг не требуется.';
    elements.attentionList.appendChild(message);
    return;
  }
  needsMapping.forEach((file) => {
    elements.attentionList.appendChild(createFileRow(file));
  });
}

function renderDuplicateList() {
  const scenario = state.currentScenario;
  elements.duplicateList.innerHTML = '';
  const groups = scenario.duplicateResolutions || [];
  if (!groups.length) {
    const message = document.createElement('p');
    message.className = 'section-subtitle';
    message.textContent = 'Дубликатов не найдено.';
    elements.duplicateList.appendChild(message);
    return;
  }

  groups.forEach((group) => {
    const details = document.createElement('details');
    details.className = 'file-group';
    details.open = true;
    const summary = document.createElement('summary');
    summary.textContent = `Возможный дубликат: ${group.group}`;
    details.appendChild(summary);

    group.files.forEach((name) => {
      const original = state.currentScenario.files.find((file) => file.name === name);
      const fileRow = createFileRow(
        original || {
          name,
          type: 'Отчёт',
          periodLabel: '—',
          origin: '—',
          status: 'duplicate'
        },
        { showHint: false }
      );
      details.appendChild(fileRow);
    });

    const actionRow = document.createElement('div');
    actionRow.className = 'file-row';
    actionRow.style.gridTemplateColumns = '1fr';
    const message = document.createElement('span');
    message.id = `duplicate-msg-${group.group}`;
    message.textContent = 'Выберите действие:';
    actionRow.appendChild(message);

    const actions = document.createElement('div');
    actions.className = 'file-actions';

    ['keepNew', 'keepOld', 'merge'].forEach((action) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'button-secondary';
      button.dataset.action = action;
      const labels = {
        keepNew: 'Оставить новый',
        keepOld: 'Оставить старый',
        merge: 'Склеить'
      };
      button.textContent = labels[action];
      button.addEventListener('click', () => handleDuplicateDecision(group, action));
      actions.appendChild(button);
    });

    actionRow.appendChild(actions);
    details.appendChild(actionRow);
    elements.duplicateList.appendChild(details);
  });
}

function handleDuplicateDecision(group, action) {
  state.duplicateDecisions.set(group.group, action);
  const message = document.getElementById(`duplicate-msg-${group.group}`);
  if (message) {
    message.textContent = group.messages[action];
  }
  const container = message?.parentElement?.querySelector('.file-actions');
  if (container) {
    container.querySelectorAll('button').forEach((btn) => {
      btn.disabled = true;
      btn.classList.toggle('button-primary', btn.dataset.action === action);
    });
  }
  updateStartButtonState();
}

function updateMappingButton() {
  const scenario = state.currentScenario;
  if (!scenario || !scenario.mappingSteps || !scenario.mappingSteps.length) {
    elements.startMapping.textContent = 'Маппинг не требуется';
    elements.startMapping.disabled = true;
    elements.startMapping.setAttribute('aria-disabled', 'true');
  } else if (state.mappingComplete) {
    elements.startMapping.textContent = 'Мастер пройден';
    elements.startMapping.disabled = true;
    elements.startMapping.setAttribute('aria-disabled', 'true');
  } else {
    elements.startMapping.textContent = 'Открыть мастер маппинга';
    elements.startMapping.disabled = false;
    elements.startMapping.removeAttribute('aria-disabled');
  }
}

function updateStartButtonState() {
  const scenarioReady = Boolean(state.currentScenario);
  const duplicates = state.currentScenario?.duplicateResolutions || [];
  const duplicatesResolved = duplicates.every((group) => state.duplicateDecisions.has(group.group)) || !duplicates.length;
  const ready = scenarioReady && state.mappingComplete && duplicatesResolved;
  elements.startConsolidation.disabled = !ready;
}

function resetScreensToUpload() {
  elements.uploadScreen.classList.add('active');
  elements.progressScreen.classList.remove('active');
  elements.triadScreen.classList.remove('active');
  elements.progressIndicator.style.width = '0%';
  elements.progressValue.textContent = '0%';
  elements.progressStatus.textContent = 'Подготовка';
  elements.progressSteps.querySelectorAll('.progress-step').forEach((step, idx) => {
    step.classList.toggle('active', idx === 0);
  });
}

async function fetchJSON(path) {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`Не удалось загрузить ${path}`);
  }
  return response.json();
}

async function loadResources() {
  try {
    const [config, data] = await Promise.all([
      fetchJSON('config.json'),
      fetchJSON('assets/data/mockData.json')
    ]);
    return { config, data };
  } catch (error) {
    if (window.__FINASSIST_OFFLINE__?.config && window.__FINASSIST_OFFLINE__?.data) {
      console.warn('Используем встроенные офлайн-данные', error);
      return {
        config: window.__FINASSIST_OFFLINE__.config,
        data: window.__FINASSIST_OFFLINE__.data
      };
    }
    console.error('Не удалось загрузить конфигурацию или данные', error);
    return null;
  }
}

function displayResourceLoadError() {
  const message = 'Не удалось загрузить демо-данные. Откройте прототип через статический сервер или обновите страницу.';
  elements.summaryDescription.textContent = message;
  elements.recognitionLegend.textContent = 'Демо-набор недоступен.';
  elements.summaryFiles.textContent = '0';
  elements.summaryCompanies.textContent = '0';
  elements.summaryPeriods.textContent = '0';
  elements.summaryFormats.textContent = '—';
}

function openMappingWizard() {
  const steps = state.currentScenario?.mappingSteps || [];
  if (!steps.length) {
    return;
  }
  let index = 0;
  const backdrop = document.createElement('div');
  backdrop.className = 'modal-backdrop';

  const showStep = () => {
    backdrop.innerHTML = '';
    const fragment = elements.mappingTemplate.content.cloneNode(true);
    const modal = fragment.querySelector('.modal');
    const step = steps[index];
    modal.querySelector('[data-role="title"]').textContent = step.title;
    modal.querySelector('[data-role="description"]').textContent = step.description;
    modal.querySelector('[data-role="suggestion"]').textContent = step.suggestion;
    modal.querySelector('[data-role="cancel"]').addEventListener('click', () => {
      document.body.removeChild(backdrop);
    });
    modal.querySelector('[data-role="confirm"]').addEventListener('click', () => {
      index += 1;
      if (index >= steps.length) {
        state.mappingComplete = true;
        document.body.removeChild(backdrop);
        updateMappingButton();
        updateStartButtonState();
      } else {
        showStep();
      }
    });
    backdrop.appendChild(fragment);
  };

  document.body.appendChild(backdrop);
  showStep();
}

function initializeProgressSteps() {
  elements.progressSteps.innerHTML = '';
  state.config.loading.stageLabels.forEach((label, idx) => {
    const step = document.createElement('span');
    step.className = 'progress-step';
    if (idx === 0) {
      step.classList.add('active');
    }
    step.textContent = label;
    elements.progressSteps.appendChild(step);
  });
}

function startConsolidation() {
  if (!state.currentScenario) {
    return;
  }
  elements.uploadScreen.classList.remove('active');
  elements.progressScreen.classList.add('active');
  state.progressStart = performance.now();
  const min = state.config.loading.minSeconds * 1000;
  const max = state.config.loading.maxSeconds * 1000;
  state.progressDuration = Math.floor(Math.random() * (max - min + 1)) + min;
  if (state.progressFrame) {
    cancelAnimationFrame(state.progressFrame);
  }
  state.progressFrame = requestAnimationFrame(animateProgress);
}

function animateProgress(timestamp) {
  const current = typeof timestamp === 'number' ? timestamp : performance.now();
  const elapsed = current - state.progressStart;
  const progress = Math.min(elapsed / state.progressDuration, 1);
  elements.progressIndicator.style.width = `${Math.round(progress * 100)}%`;
  elements.progressValue.textContent = `${Math.round(progress * 100)}%`;

  const stages = elements.progressSteps.querySelectorAll('.progress-step');
  const activeStage = Math.min(
    stages.length - 1,
    Math.floor(progress * stages.length)
  );
  stages.forEach((stage, idx) => {
    stage.classList.toggle('active', idx === activeStage);
  });
  elements.progressStatus.textContent = state.config.loading.stageLabels[activeStage] || 'Обработка';

  if (progress < 1) {
    state.progressFrame = requestAnimationFrame(animateProgress);
  } else {
    completeProgress();
  }
}

function completeProgress() {
  state.progressFrame = null;
  elements.progressScreen.classList.remove('active');
  elements.triadScreen.classList.add('active');
  renderConsolidationMetrics();
  renderEliminationDetails();
  renderHintsAndRules();
  renderReceivables();
  renderInventoryList();
  renderLiquidation();
  renderTrafficList();
  switchTriadPanel('consolidation');
}

function renderConsolidationMetrics() {
  const totals = state.currentScenario ? state.data.consolidation.totals : null;
  if (!totals) {
    return;
  }
  const useAfter = elements.toggleElimination.checked;
  const selected = useAfter ? totals.after : totals.before;
  const base = state.data.consolidation.baseSummary;
  elements.consolidationMetrics.innerHTML = '';

  const summaryCard = document.createElement('div');
  summaryCard.className = 'metric-card';
  summaryCard.innerHTML = `
    <span class="metric-value">${base.companies}</span>
    <span>Компаний в консолидированной базе</span>
    <p class="metric-note">Файлов учтено: ${base.files}. Период: ${base.period}. Элиминаций: ${base.eliminatedPairs}.</p>
  `;
  elements.consolidationMetrics.appendChild(summaryCard);

  const metrics = [
    { key: 'revenue', label: 'Выручка' },
    { key: 'cogs', label: 'Себестоимость' },
    { key: 'grossMargin', label: 'Валовая маржа' },
    { key: 'interestPayable', label: 'Проценты к уплате' },
    { key: 'interestReceivable', label: 'Проценты к получению' }
  ];

  metrics.forEach((metric) => {
    if (selected[metric.key] === undefined) {
      return;
    }
    const card = document.createElement('div');
    card.className = 'metric-card';
    card.innerHTML = `
      <span>${metric.label}</span>
      <span class="metric-value">${formatCurrency(selected[metric.key])}</span>
    `;
    elements.consolidationMetrics.appendChild(card);
  });

  if (!useAfter) {
    const intraCard = document.createElement('div');
    intraCard.className = 'metric-card';
    intraCard.innerHTML = `
      <span>Внутригрупповая выручка</span>
      <span class="metric-value">${formatCurrency(totals.before.intraRevenue)}</span>
      <p class="metric-note">До элиминации остаётся в отчётности.</p>
    `;
    elements.consolidationMetrics.appendChild(intraCard);
  }

  if (selected.note) {
    const note = document.createElement('p');
    note.className = 'metric-note';
    note.textContent = selected.note;
    elements.consolidationMetrics.appendChild(note);
  }
}

function renderEliminationDetails() {
  const list = state.data.consolidation.eliminationEntries;
  elements.eliminationDetails.innerHTML = '';
  list.forEach((entry) => {
    const item = document.createElement('div');
    item.className = 'elimination-item';
    item.innerHTML = `
      <strong>${entry.pair}</strong>
      <p class="section-subtitle">${entry.description}</p>
      <p class="section-subtitle">${entry.metric}: ${formatCurrency(entry.amount)}</p>
    `;
    elements.eliminationDetails.appendChild(item);
  });
}

function renderHintsAndRules() {
  elements.consolidationHints.innerHTML = '';
  state.data.consolidation.infoNotes.forEach((note) => {
    const p = document.createElement('p');
    p.textContent = note;
    elements.consolidationHints.appendChild(p);
  });
  elements.consolidationRules.innerHTML = '';
  state.data.consolidation.ruleHints.forEach((hint) => {
    const p = document.createElement('p');
    p.textContent = hint;
    elements.consolidationRules.appendChild(p);
  });
}

function toggleEliminationList() {
  const hidden = elements.eliminationDetails.hasAttribute('hidden');
  if (hidden) {
    elements.eliminationDetails.removeAttribute('hidden');
    elements.showEliminations.textContent = 'Скрыть устранённые обороты';
  } else {
    elements.eliminationDetails.setAttribute('hidden', '');
    elements.showEliminations.textContent = 'Показать устранённые внутригрупповые обороты';
  }
}

function renderReceivables() {
  elements.receivablesList.innerHTML = '';
  const threshold = state.threshold || state.config.receivables.defaultThreshold;
  const list = state.data.detectors.receivables;
  list.forEach((item) => {
    const row = document.createElement('div');
    row.className = 'receivable-row';
    const counterparty = document.createElement('span');
    counterparty.textContent = `${item.counterparty} • ${item.company}`;
    row.appendChild(counterparty);
    const days = document.createElement('span');
    days.textContent = `${item.days} дней`;
    const highlight = getReceivableHighlight(item.days, threshold);
    if (highlight) {
      days.classList.add(highlight);
    }
    row.appendChild(days);
    const amount = document.createElement('span');
    amount.textContent = formatCurrency(item.amount);
    if (highlight) {
      amount.classList.add(highlight);
    }
    row.appendChild(amount);
    const source = document.createElement('span');
    source.textContent = item.source;
    row.appendChild(source);
    elements.receivablesList.appendChild(row);
  });
}

function getReceivableHighlight(days, threshold) {
  if (days >= threshold) {
    return 'highlight-red';
  }
  if (days >= threshold - 30) {
    return 'highlight-yellow';
  }
  return 'highlight-green';
}

function addReceivablesToTraffic() {
  const threshold = state.threshold || state.config.receivables.defaultThreshold;
  const list = state.data.detectors.receivables.filter((item) => item.days >= threshold);
  list.forEach((item) => state.flaggedReceivables.add(item.counterparty));
  elements.trafficMessage.textContent = list.length
    ? `Добавлено в светофор: ${list.length}.`
    : 'По текущему порогу просрочки нет.';
  renderTrafficList();
}

function initializeInventoryFilters() {
  if (!state.config) {
    return;
  }
  elements.inventoryFilters.classList.add('inventory-filters');
  elements.inventoryFilters.innerHTML = '';
  state.config.inventoryMarkers.forEach((marker) => {
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = marker;
    checkbox.addEventListener('change', (event) => {
      if (event.target.checked) {
        state.inventoryFilters.add(marker);
      } else {
        state.inventoryFilters.delete(marker);
      }
      renderInventoryList();
    });
    const span = document.createElement('span');
    span.textContent = marker;
    label.appendChild(checkbox);
    label.appendChild(span);
    elements.inventoryFilters.appendChild(label);
  });
}

function renderInventoryList() {
  elements.inventoryList.innerHTML = '';
  const filters = state.inventoryFilters;
  const list = state.data.detectors.inventory;
  list.forEach((item) => {
    const row = document.createElement('div');
    row.className = 'inventory-row';
    const name = document.createElement('span');
    name.textContent = `${item.item} • ${item.company}`;
    row.appendChild(name);
    const amount = document.createElement('span');
    amount.textContent = formatCurrency(item.amount);
    row.appendChild(amount);
    const source = document.createElement('span');
   source.textContent = item.source;
   row.appendChild(source);
   const flags = document.createElement('div');
   flags.className = 'inventory-flags';
   item.issues.forEach((issue) => {
     const badge = document.createElement('span');
     badge.textContent = issue;
     flags.appendChild(badge);
   });
    flags.style.gridColumn = '1 / -1';
    row.appendChild(flags);

    if (!filters.size) {
      highlightInventoryRow(row, item.issues);
    } else if (item.issues.some((issue) => filters.has(issue))) {
      highlightInventoryRow(row, item.issues);
    }

    elements.inventoryList.appendChild(row);
  });
}

function highlightInventoryRow(row, issues) {
  const severity = issues.includes('брак') || issues.includes('истёк срок') ? 'highlight-red' : 'highlight-yellow';
  row.querySelectorAll('span').forEach((span) => span.classList.add(severity));
}

function resetLiquidationView() {
  elements.liquidationAfterSummary.textContent = 'Нажмите «Очистить», чтобы применить сценарий.';
  elements.ownerStatement.textContent = '';
  elements.cleanBalance.disabled = false;
  elements.cleanBalance.textContent = 'Очистить';
  elements.liquidationAdjustments.innerHTML = '';
  state.data.liquidation.adjustments.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = `${item.label}: ${formatCurrency(item.impact)} (${item.reason}, источник: ${item.source})`;
    elements.liquidationAdjustments.appendChild(li);
  });
}

function renderLiquidation() {
  const data = state.data.liquidation;
  elements.liquidationBeforeSummary.textContent = `Собственный капитал: ${formatCurrency(data.before.equity)} • Денежные средства: ${formatCurrency(data.before.cash)}`;
  elements.liquidationAssets.innerHTML = '';
  data.before.assets.forEach((asset) => {
    const li = document.createElement('li');
    li.textContent = `${asset.label}: ${formatCurrency(asset.amount)}`;
    elements.liquidationAssets.appendChild(li);
  });
  if (state.liquidationCleaned) {
    elements.liquidationAfterSummary.textContent = `Капитал после очистки: ${formatCurrency(data.after.equity)} • Денежный остаток: ${formatCurrency(data.after.cash)}`;
    elements.ownerStatement.textContent = data.after.ownerStatement;
  }
}

function applyLiquidationScenario() {
  state.liquidationCleaned = true;
  renderLiquidation();
  elements.cleanBalance.disabled = true;
  elements.cleanBalance.textContent = 'Очистка выполнена';
}

function initializeTrafficFilters() {
  const labels = state.data.trafficLight.statusLabels;
  elements.trafficFilters.innerHTML = '';
  Object.entries(labels).forEach(([value, label]) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'button-secondary';
    button.textContent = label;
    button.dataset.value = value;
    if (value === 'all') {
      button.classList.add('active');
      button.setAttribute('aria-pressed', 'true');
    } else {
      button.setAttribute('aria-pressed', 'false');
    }
    button.addEventListener('click', () => {
      state.trafficFilter = value;
      elements.trafficFilters.querySelectorAll('button').forEach((btn) => {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      });
      button.classList.add('active');
      button.setAttribute('aria-pressed', 'true');
      renderTrafficList();
    });
    elements.trafficFilters.appendChild(button);
  });
}

function initializeTrafficCompanies() {
  const companies = new Set(['all']);
  state.data.trafficLight.items.forEach((item) => companies.add(item.company));
  elements.trafficCompany.innerHTML = '';
  companies.forEach((company) => {
    const option = document.createElement('option');
    option.value = company;
    option.textContent = company === 'all' ? 'Все компании' : company;
    elements.trafficCompany.appendChild(option);
  });
  elements.trafficCompany.value = 'all';
}

function renderTrafficList() {
  elements.trafficList.innerHTML = '';
  const filter = state.trafficFilter;
  const companyFilter = state.trafficCompany;
  const flagged = state.flaggedReceivables;
  state.data.trafficLight.items
    .map((item) => {
      const flaggedStatus = flagged.has(item.name) ? 'red' : item.status;
      return { ...item, status: flaggedStatus, flagged: flagged.has(item.name) };
    })
    .filter((item) => (filter === 'all' ? true : item.status === filter))
    .filter((item) => (companyFilter === 'all' ? true : item.company === companyFilter))
    .forEach((item) => {
      const card = document.createElement('article');
      card.className = 'traffic-card';
      const header = document.createElement('div');
      header.innerHTML = `<strong>${item.name}</strong> • ${item.company}`;
      card.appendChild(header);
      const status = document.createElement('span');
      status.className = 'status-pill';
      status.dataset.status = item.status;
      status.textContent = state.data.trafficLight.statusLabels[item.status] || item.status;
      card.appendChild(status);
      const financial = document.createElement('p');
      financial.className = 'section-subtitle';
      financial.textContent = item.financial;
      card.appendChild(financial);
      const legal = document.createElement('p');
      legal.className = 'section-subtitle';
      legal.textContent = item.legal;
      card.appendChild(legal);
      if (item.note) {
        const note = document.createElement('p');
        note.className = 'section-subtitle';
        note.textContent = item.note;
        card.appendChild(note);
      }
      if (item.flagged) {
        const badge = document.createElement('p');
        badge.className = 'section-subtitle';
        badge.textContent = 'Добавлено из детектора дебиторки.';
        card.appendChild(badge);
      }
      elements.trafficList.appendChild(card);
    });
  if (!elements.trafficList.children.length) {
    const message = document.createElement('p');
    message.className = 'section-subtitle';
    message.textContent = 'Нет контрагентов по выбранному фильтру.';
    elements.trafficList.appendChild(message);
  }
}

function switchTriadPanel(target, button) {
  document.querySelectorAll('.triad-panel').forEach((panel) => {
    panel.hidden = true;
  });
  document.getElementById(`panel-${target}`).hidden = false;
  elements.triadNavButtons.forEach((btn) => btn.setAttribute('aria-pressed', 'false'));
  if (button) {
    button.setAttribute('aria-pressed', 'true');
  } else {
    const activeButton = Array.from(elements.triadNavButtons).find((btn) => btn.dataset.target === target);
    if (activeButton) {
      activeButton.setAttribute('aria-pressed', 'true');
    }
  }
}

function onTabKeydown(event) {
  const tabs = [elements.tabCompanies, elements.tabPeriods];
  const currentIndex = tabs.indexOf(event.target);
  if (event.key === 'ArrowRight') {
    const next = tabs[(currentIndex + 1) % tabs.length];
    next.focus();
    next.click();
  } else if (event.key === 'ArrowLeft') {
    const prev = tabs[(currentIndex - 1 + tabs.length) % tabs.length];
    prev.focus();
    prev.click();
  }
}

function setActiveTab(tab) {
  if (tab === 'companies') {
    elements.tabCompanies.setAttribute('aria-selected', 'true');
    elements.tabPeriods.setAttribute('aria-selected', 'false');
    elements.panelCompanies.hidden = false;
    elements.panelPeriods.hidden = true;
  } else {
    elements.tabCompanies.setAttribute('aria-selected', 'false');
    elements.tabPeriods.setAttribute('aria-selected', 'true');
    elements.panelCompanies.hidden = true;
    elements.panelPeriods.hidden = false;
  }
}

function renderFinalScreen() {
  const summary = state.data.finalSummary;
  elements.finalHeadline.textContent = summary.headline;
  elements.finalPoints.innerHTML = '';
  summary.points.forEach((point) => {
    const li = document.createElement('li');
    li.textContent = point;
    elements.finalPoints.appendChild(li);
  });
  elements.finalDisclaimer.textContent = summary.disclaimer;
}

function updateCTA() {
  if (state.config?.ctaUrl) {
    elements.ctaButton.href = state.config.ctaUrl;
  }
}

function formatCurrency(value) {
  if (typeof value !== 'number') {
    return value;
  }
  return `${numberFormatter.format(value)} ₽`;
}
