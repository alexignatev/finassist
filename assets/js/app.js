const state = {
  config: null,
  data: null,
  currentScenario: null,
  mappingComplete: false,
  duplicateDecisions: new Map(),
  activeDuplicateGroup: null,
  flaggedReceivables: new Set(),
  threshold: null,
  inventoryFilters: new Set(),
  liquidationCleaned: false,
  trafficFilter: 'all',
  trafficCompany: 'all',
  progressStart: 0,
  progressDuration: 0,
  progressFrame: null,
  lastUploadCount: 0,
  virtualRenderTokens: {}
};

const elements = {};

const numberFormatter = new Intl.NumberFormat('ru-RU');
const FILE_BATCH_SIZE = 16;
const THEME_STORAGE_KEY = 'solward-theme';

document.addEventListener('DOMContentLoaded', init);

async function init() {
  cacheElements();
  initializeTheme();
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
  elements.themeToggle = document.getElementById('themeToggle');
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
  elements.duplicatePanel = document.getElementById('duplicateActionPanel');
  elements.duplicatePanelList = document.getElementById('duplicateActionList');
  elements.duplicatePanelHint = document.getElementById('duplicatePanelHint');
  elements.closeDuplicatePanel = document.getElementById('closeDuplicatePanel');
  elements.duplicatePanelButtons = document.querySelectorAll('#duplicateActionPanel [data-action]');
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

function initializeTheme() {
  const storedTheme = getStoredTheme();
  const prefersLight =
    typeof window !== 'undefined' && typeof window.matchMedia === 'function'
      ? window.matchMedia('(prefers-color-scheme: light)').matches
      : false;
  const theme = storedTheme || (prefersLight ? 'light' : 'dark');
  applyTheme(theme);
}

function getStoredTheme() {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY);
  } catch (error) {
    return null;
  }
}

function persistTheme(theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch (error) {
    // ignore storage errors
  }
}

function applyTheme(theme) {
  const nextTheme = theme === 'light' ? 'light' : 'dark';
  document.body.dataset.theme = nextTheme;
  updateThemeToggle(nextTheme);
  persistTheme(nextTheme);
}

function toggleTheme() {
  const currentTheme = document.body.dataset.theme === 'light' ? 'light' : 'dark';
  const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
  applyTheme(nextTheme);
}

function updateThemeToggle(theme) {
  if (!elements.themeToggle) {
    return;
  }
  const isLight = theme === 'light';
  elements.themeToggle.setAttribute('aria-pressed', String(isLight));
  const actionLabel = isLight ? 'Переключить на тёмную тему' : 'Переключить на светлую тему';
  elements.themeToggle.setAttribute('aria-label', actionLabel);
  elements.themeToggle.setAttribute('title', actionLabel);
  const icon = elements.themeToggle.querySelector('.theme-toggle__icon');
  const label = elements.themeToggle.querySelector('.theme-toggle__label');
  if (icon) {
    icon.textContent = isLight ? '🌞' : '🌙';
  }
  if (label) {
    label.textContent = isLight ? 'Тёмная тема' : 'Светлая тема';
  }
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

  if (elements.themeToggle) {
    elements.themeToggle.addEventListener('click', toggleTheme);
  }

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

  if (elements.closeDuplicatePanel) {
    elements.closeDuplicatePanel.addEventListener('click', hideDuplicatePanel);
  }

  elements.duplicatePanelButtons?.forEach((button) => {
    button.addEventListener('click', () => {
      if (!state.activeDuplicateGroup) {
        return;
      }
      handleDuplicateDecision(state.activeDuplicateGroup, button.dataset.action);
    });
  });

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
  state.activeDuplicateGroup = null;
  hideDuplicatePanel();
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
  elements.showEliminations.setAttribute('aria-expanded', 'false');
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
  elements.recognitionLegend.textContent = `Распознано: ${scenario.recognition.recognized} • Требует сверки: ${scenario.recognition.needsMapping} • Дубликаты: ${scenario.recognition.duplicates}`;
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

function createRenderToken(key) {
  if (!state.virtualRenderTokens) {
    state.virtualRenderTokens = {};
  }
  if (state.virtualRenderTokens[key]) {
    state.virtualRenderTokens[key].cancelled = true;
  }
  const token = { cancelled: false };
  state.virtualRenderTokens[key] = token;
  return token;
}

function finalizeRenderToken(key, token) {
  if (state.virtualRenderTokens[key] === token) {
    state.virtualRenderTokens[key] = null;
  }
}

function renderCompanyGroups(files) {
  const token = createRenderToken('companies');
  elements.companyFileList.innerHTML = '';
  if (!files.length) {
    const message = document.createElement('p');
    message.className = 'section-subtitle';
    message.textContent = 'Нет файлов для отображения.';
    elements.companyFileList.appendChild(message);
    elements.companyFileList.removeAttribute('aria-busy');
    finalizeRenderToken('companies', token);
    return;
  }

  elements.companyFileList.setAttribute('aria-busy', 'true');
  const companyMap = new Map();
  files.forEach((file) => {
    if (!companyMap.has(file.company)) {
      companyMap.set(file.company, []);
    }
    companyMap.get(file.company).push(file);
  });
  const entries = Array.from(companyMap.entries());
  let index = 0;

  const renderNextGroup = () => {
    if (token.cancelled) {
      return;
    }
    if (index >= entries.length) {
      if (!token.cancelled) {
        elements.companyFileList.removeAttribute('aria-busy');
        finalizeRenderToken('companies', token);
      }
      return;
    }

    const [company, companyFiles] = entries[index];
    const details = document.createElement('details');
    details.className = 'file-group';
    details.open = entries.length <= 4;
    const summary = document.createElement('summary');
    summary.textContent = `${company} • ${companyFiles.length} файлов`;
    details.appendChild(summary);
    elements.companyFileList.appendChild(details);

    let fileIndex = 0;

    const renderFileBatch = () => {
      if (token.cancelled) {
        return;
      }
      const fragment = document.createDocumentFragment();
      let batchCount = 0;
      while (fileIndex < companyFiles.length && batchCount < FILE_BATCH_SIZE) {
        fragment.appendChild(createFileRow(companyFiles[fileIndex]));
        fileIndex += 1;
        batchCount += 1;
      }
      details.appendChild(fragment);
      if (fileIndex < companyFiles.length) {
        requestAnimationFrame(renderFileBatch);
      } else {
        index += 1;
        requestAnimationFrame(renderNextGroup);
      }
    };

    requestAnimationFrame(renderFileBatch);
  };

  requestAnimationFrame(renderNextGroup);
}

function renderPeriodGroups(files) {
  const token = createRenderToken('periods');
  elements.periodFileList.innerHTML = '';
  if (!files.length) {
    const message = document.createElement('p');
    message.className = 'section-subtitle';
    message.textContent = 'Нет файлов для отображения.';
    elements.periodFileList.appendChild(message);
    elements.periodFileList.removeAttribute('aria-busy');
    finalizeRenderToken('periods', token);
    return;
  }

  elements.periodFileList.setAttribute('aria-busy', 'true');
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

  const yearEntries = Array.from(yearMap.entries());
  let yearIndex = 0;

  const renderNextYear = () => {
    if (token.cancelled) {
      return;
    }
    if (yearIndex >= yearEntries.length) {
      if (!token.cancelled) {
        elements.periodFileList.removeAttribute('aria-busy');
        finalizeRenderToken('periods', token);
      }
      return;
    }

    const [year, periodMap] = yearEntries[yearIndex];
    const details = document.createElement('details');
    details.className = 'file-group';
    details.open = yearEntries.length <= 3;
    const totalFiles = Array.from(periodMap.values()).reduce((acc, list) => acc + list.length, 0);
    const summary = document.createElement('summary');
    summary.textContent = `${year} • ${totalFiles} файлов`;
    details.appendChild(summary);
    elements.periodFileList.appendChild(details);

    const periods = Array.from(periodMap.entries());
    let periodIndex = 0;
    let periodFileIndex = 0;
    let headerRendered = false;

    const renderPeriodBatch = () => {
      if (token.cancelled) {
        return;
      }
      const fragment = document.createDocumentFragment();
      let batchCount = 0;
      while (periodIndex < periods.length && batchCount < FILE_BATCH_SIZE) {
        const [periodLabel, periodFiles] = periods[periodIndex];
        if (!headerRendered) {
          const header = document.createElement('div');
          header.className = 'file-row period-label';
          const titleSpan = document.createElement('span');
          titleSpan.textContent = periodLabel;
          header.appendChild(titleSpan);
          fragment.appendChild(header);
          headerRendered = true;
          batchCount += 1;
          continue;
        }

        if (periodFileIndex < periodFiles.length) {
          fragment.appendChild(createFileRow(periodFiles[periodFileIndex]));
          periodFileIndex += 1;
          batchCount += 1;
        } else {
          periodIndex += 1;
          periodFileIndex = 0;
          headerRendered = false;
        }
      }

      details.appendChild(fragment);

      if (periodIndex < periods.length) {
        requestAnimationFrame(renderPeriodBatch);
      } else {
        yearIndex += 1;
        requestAnimationFrame(renderNextYear);
      }
    };

    requestAnimationFrame(renderPeriodBatch);
  };

  requestAnimationFrame(renderNextYear);
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
    mapping: 'Нужна сверка',
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
    message.textContent = 'Все файлы распознаны. Сверка не требуется.';
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
    hideDuplicatePanel();
    return;
  }

  const unresolved = groups.filter((group) => !state.duplicateDecisions.has(group.group));

  if (!unresolved.length) {
    const message = document.createElement('p');
    message.className = 'section-subtitle';
    message.textContent = 'Все дубликаты разобраны.';
    elements.duplicateList.appendChild(message);
    if (elements.duplicatePanel) {
      clearDuplicatePanel('Все дубликаты обработаны.');
      elements.duplicatePanel.setAttribute('hidden', '');
    }
    return;
  }

  unresolved.forEach((group) => {
    const card = document.createElement('article');
    card.className = 'duplicate-card';
    card.dataset.group = group.group;

    const header = document.createElement('div');
    header.className = 'duplicate-card__header';
    const title = document.createElement('h4');
    title.textContent = group.group;
    const count = document.createElement('span');
    count.className = 'section-subtitle';
    count.textContent = `Файлов в группе: ${group.files.length}`;
    header.appendChild(title);
    header.appendChild(count);
    card.appendChild(header);

    const preview = document.createElement('ul');
    preview.className = 'duplicate-card__list';
    group.files.slice(0, 3).forEach((name) => {
      const original = state.currentScenario.files.find((file) => file.name === name);
      const item = document.createElement('li');
      item.textContent = original
        ? `${original.name} • ${original.periodLabel || original.period || '—'}`
        : name;
      preview.appendChild(item);
    });
    if (group.files.length > 3) {
      const more = document.createElement('li');
      more.className = 'duplicate-card__more';
      more.textContent = `…и ещё ${group.files.length - 3}`;
      preview.appendChild(more);
    }
    card.appendChild(preview);

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'button-ghost duplicate-card__action';
    button.textContent = 'Рассмотреть';
    button.addEventListener('click', () => showDuplicateInPanel(group));
    card.appendChild(button);

    if (state.activeDuplicateGroup === group.group) {
      card.classList.add('duplicate-card--active');
    }

    elements.duplicateList.appendChild(card);
  });

  if (elements.duplicatePanel) {
    elements.duplicatePanel.removeAttribute('hidden');
    if (!unresolved.some((group) => group.group === state.activeDuplicateGroup)) {
      clearDuplicatePanel();
    }
  }
}

function handleDuplicateDecision(groupId, action) {
  if (!groupId || !action) {
    return;
  }
  const group = getDuplicateGroupById(groupId);
  if (!group) {
    return;
  }
  state.duplicateDecisions.set(group.group, action);
  state.activeDuplicateGroup = null;
  if (elements.duplicatePanel) {
    elements.duplicatePanelHint.textContent = group.messages?.[action] || 'Решение применено.';
    elements.duplicatePanelList.innerHTML = '';
    elements.duplicatePanelButtons?.forEach((btn) => {
      btn.disabled = true;
    });
    elements.duplicatePanel.classList.add('floating-panel--inactive');
  }
  renderDuplicateList();
  updateStartButtonState();
}

function getDuplicateGroupById(groupId) {
  return state.currentScenario?.duplicateResolutions?.find((group) => group.group === groupId) || null;
}

function showDuplicateInPanel(group) {
  if (!group || !elements.duplicatePanel) {
    return;
  }
  elements.duplicatePanel.removeAttribute('hidden');
  elements.duplicatePanel.classList.remove('floating-panel--inactive');
  state.activeDuplicateGroup = group.group;
  elements.duplicatePanelHint.textContent = `Группа ${group.group}. Выберите действие.`;
  elements.duplicatePanelList.innerHTML = '';

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
    fileRow.classList.add('floating-panel__row');
    elements.duplicatePanelList.appendChild(fileRow);
  });

  elements.duplicatePanelButtons?.forEach((btn) => {
    btn.disabled = false;
  });

  highlightActiveDuplicateCard();
}

function highlightActiveDuplicateCard() {
  if (!elements.duplicateList) {
    return;
  }
  elements.duplicateList.querySelectorAll('.duplicate-card').forEach((card) => {
    card.classList.toggle('duplicate-card--active', card.dataset.group === state.activeDuplicateGroup);
  });
}

function clearDuplicatePanel(message) {
  if (!elements.duplicatePanel) {
    return;
  }
  state.activeDuplicateGroup = null;
  elements.duplicatePanelList.innerHTML = '';
  elements.duplicatePanelHint.textContent =
    message || 'Выберите группу отчётов слева, чтобы принять решение.';
  elements.duplicatePanelButtons?.forEach((btn) => {
    btn.disabled = true;
  });
  elements.duplicatePanel.classList.add('floating-panel--inactive');
  highlightActiveDuplicateCard();
}

function hideDuplicatePanel() {
  if (!elements.duplicatePanel) {
    return;
  }
  elements.duplicatePanel.setAttribute('hidden', '');
  clearDuplicatePanel();
}

function updateMappingButton() {
  const scenario = state.currentScenario;
  if (!scenario || !scenario.mappingSteps || !scenario.mappingSteps.length) {
    elements.startMapping.textContent = 'Сверка не требуется';
    elements.startMapping.disabled = true;
    elements.startMapping.setAttribute('aria-disabled', 'true');
  } else if (state.mappingComplete) {
    elements.startMapping.textContent = 'Сверка завершена';
    elements.startMapping.disabled = true;
    elements.startMapping.setAttribute('aria-disabled', 'true');
  } else {
    elements.startMapping.textContent = 'Открыть мастер сверки';
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
  const backdrop = document.createElement('div');
  backdrop.className = 'modal-backdrop';
  const fragment = elements.mappingTemplate.content.cloneNode(true);
  const modal = fragment.querySelector('.modal');
  const list = modal.querySelector('[data-role="list"]');
  list.innerHTML = '';

  steps.forEach((step) => {
    const item = document.createElement('article');
    item.className = 'modal-step';
    const title = document.createElement('h4');
    title.textContent = step.title;
    const description = document.createElement('p');
    description.textContent = step.description;
    item.appendChild(title);
    item.appendChild(description);
    if (step.suggestion) {
      const suggestion = document.createElement('p');
      suggestion.className = 'modal-suggestion';
      suggestion.textContent = step.suggestion;
      item.appendChild(suggestion);
    }
    list.appendChild(item);
  });

  modal.querySelector('[data-role="cancel"]').addEventListener('click', () => {
    document.body.removeChild(backdrop);
  });
  modal.querySelector('[data-role="confirm"]').addEventListener('click', () => {
    state.mappingComplete = true;
    document.body.removeChild(backdrop);
    updateMappingButton();
    updateStartButtonState();
  });

  backdrop.appendChild(fragment);
  document.body.appendChild(backdrop);
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
  hideDuplicatePanel();
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
    if (!elements.eliminationDetails.childElementCount) {
      renderEliminationDetails();
    }
    elements.eliminationDetails.removeAttribute('hidden');
    elements.showEliminations.textContent = 'Скрыть устранённые обороты';
    elements.showEliminations.setAttribute('aria-expanded', 'true');
    elements.eliminationDetails.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  } else {
    elements.eliminationDetails.setAttribute('hidden', '');
    elements.showEliminations.textContent = 'Показать устранённые внутригрупповые обороты';
    elements.showEliminations.setAttribute('aria-expanded', 'false');
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
  const isCritical = issues.includes('брак') || issues.includes('истёк срок');
  const severityClass = isCritical ? 'highlight-red' : 'highlight-yellow';
  row.classList.add(isCritical ? 'inventory-row--critical' : 'inventory-row--warning');
  row.querySelectorAll('span').forEach((span) => span.classList.add(severityClass));
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
