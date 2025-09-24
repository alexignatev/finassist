// Автогенерированный файл для офлайн-режима.
// Обновите вручную при изменении исходных JSON.

window.__FINASSIST_OFFLINE__ = {
  config: {
  "ctaUrl": "https://solward.example/test-drive",
  "loading": {
    "minSeconds": 25,
    "maxSeconds": 35,
    "stageLabels": [
      "Импорт",
      "Нормализация",
      "Сшивка",
      "Проверки",
      "Готово"
    ]
  },
  "receivables": {
    "defaultThreshold": 180,
    "minDays": 100,
    "maxDays": 270
  },
  "inventoryMarkers": [
    "долго лежит",
    "истёк срок",
    "брак"
  ]
},
  data: {
  "uploadScenarios": [
    {
      "id": "singleCompany",
      "label": "Одна компания, много файлов",
      "summary": {
        "companies": 1,
        "files": 12,
        "periods": 4,
        "formats": [
          "xlsx",
          "csv"
        ],
        "description": "Разнобой периодов и форматов для одной компании"
      },
      "recognition": {
        "recognized": 7,
        "needsMapping": 3,
        "duplicates": 2
      },
      "files": [
        {
          "name": "ОСВ_январь.xlsx",
          "company": "Компания А",
          "period": "2024-01",
          "periodLabel": "Январь 2024",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "ОФР_Q1.csv",
          "company": "Компания А",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "ОФР",
          "format": "csv",
          "status": "duplicate",
          "duplicateGroup": "ОФР_Q1",
          "origin": "почта бухгалтера"
        },
        {
          "name": "ОФР_Q1_v2.csv",
          "company": "Компания А",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "ОФР",
          "format": "csv",
          "status": "duplicate",
          "duplicateGroup": "ОФР_Q1",
          "origin": "повторная выгрузка"
        },
        {
          "name": "баланс_31-03.xlsx",
          "company": "Компания А",
          "period": "2024-03-31",
          "periodLabel": "31.03.2024",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "запасы_февраль.csv",
          "company": "Компания А",
          "period": "2024-02",
          "periodLabel": "Февраль 2024",
          "type": "Запасы",
          "format": "csv",
          "status": "mapping",
          "mappingHint": "Сопоставить с классификатором запасов"
        },
        {
          "name": "дебиторка_Q1.xlsx",
          "company": "Компания А",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "кредиторка_Q1.xlsx",
          "company": "Компания А",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "Прочее",
          "format": "xlsx",
          "status": "mapping",
          "mappingHint": "Требуется указать тип отчёта"
        },
        {
          "name": "движение_денег.xlsx",
          "company": "Компания А",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "Прочее",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "инвентаризация_2023.csv",
          "company": "Компания А",
          "period": "2023",
          "periodLabel": "2023",
          "type": "Запасы",
          "format": "csv",
          "status": "mapping",
          "mappingHint": "Уточнить период учёта"
        },
        {
          "name": "реестр_контрагентов.xlsx",
          "company": "Компания А",
          "period": "2024",
          "periodLabel": "2024",
          "type": "Контрагенты",
          "format": "xlsx",
          "status": "recognized",
          "origin": "служба безопасности"
        },
        {
          "name": "юрисобытия_2024.csv",
          "company": "Компания А",
          "period": "2024",
          "periodLabel": "2024",
          "type": "Юр.события",
          "format": "csv",
          "status": "recognized",
          "origin": "юридический отдел"
        },
        {
          "name": "архив_выручка_2022.xlsx",
          "company": "Компания А",
          "period": "2022",
          "periodLabel": "2022",
          "type": "Прочее",
          "format": "xlsx",
          "status": "recognized",
          "origin": "архив"
        }
      ],
      "mappingSteps": [
        {
          "title": "Проверьте компанию/ИНН",
          "description": "Система распознала компанию по шапке файлов.",
          "suggestion": "Компания А • ИНН 7701234567"
        },
        {
          "title": "Проверьте тип отчёта",
          "description": "По заголовку файла предполагаем ОФР за период.",
          "suggestion": "ОФР (за период)"
        },
        {
          "title": "Проверьте период",
          "description": "Подсказка из имени файла",
          "suggestion": "I квартал 2024"
        }
      ],
      "duplicateResolutions": [
        {
          "group": "ОФР_Q1",
          "files": [
            "ОФР_Q1.csv",
            "ОФР_Q1_v2.csv"
          ],
          "messages": {
            "keepNew": "Новая версия сохранена. Предыдущая отправлена в архив.",
            "keepOld": "Оставили исходный файл. Новую выгрузку пометили как резерв.",
            "merge": "Склейка завершена. Строк объединено: 184."
          }
        }
      ]
    },
    {
      "id": "groupUpload",
      "label": "Группа компаний, много файлов",
      "summary": {
        "companies": 3,
        "files": 31,
        "periods": 6,
        "formats": [
          "xlsx",
          "csv",
          "txt"
        ],
        "description": "Каждая компания прислала свою пачку"
      },
      "recognition": {
        "recognized": 24,
        "needsMapping": 5,
        "duplicates": 2
      },
      "files": [
        {
          "name": "Компания_A/OSV_jan.xlsx",
          "company": "Компания А",
          "period": "2024-01",
          "periodLabel": "Январь 2024",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "архив"
        },
        {
          "name": "Компания_A/OSV_feb.xlsx",
          "company": "Компания А",
          "period": "2024-02",
          "periodLabel": "Февраль 2024",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "архив"
        },
        {
          "name": "Компания_A/OSV_mar.xlsx",
          "company": "Компания А",
          "period": "2024-03",
          "periodLabel": "Март 2024",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "архив"
        },
        {
          "name": "Компания_A/bal_31-03.xlsx",
          "company": "Компания А",
          "period": "2024-03-31",
          "periodLabel": "31.03.2024",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "архив"
        },
        {
          "name": "Компания_A/pnl_q1.csv",
          "company": "Компания А",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "ОФР",
          "format": "csv",
          "status": "recognized",
          "origin": "архив"
        },
        {
          "name": "Компания_A/debt_q1.xlsx",
          "company": "Компания А",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_A/inventory_feb.csv",
          "company": "Компания А",
          "period": "2024-02",
          "periodLabel": "Февраль 2024",
          "type": "Запасы",
          "format": "csv",
          "status": "mapping",
          "mappingHint": "Нужно сопоставить коды ТМЦ"
        },
        {
          "name": "Компания_A/legal_2024.csv",
          "company": "Компания А",
          "period": "2024",
          "periodLabel": "2024",
          "type": "Юр.события",
          "format": "csv",
          "status": "recognized",
          "origin": "юридический отдел"
        },
        {
          "name": "Компания_B/OSV_q1.xlsx",
          "company": "Компания B",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_B/pnl_q1.xlsx",
          "company": "Компания B",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "ОФР",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_B/balance_31-03.xlsx",
          "company": "Компания B",
          "period": "2024-03-31",
          "periodLabel": "31.03.2024",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_B/loans.txt",
          "company": "Компания B",
          "period": "2024",
          "periodLabel": "2024",
          "type": "Прочее",
          "format": "txt",
          "status": "mapping",
          "mappingHint": "Указать структуру колонок"
        },
        {
          "name": "Компания_B/inventory_mar.csv",
          "company": "Компания B",
          "period": "2024-03",
          "periodLabel": "Март 2024",
          "type": "Запасы",
          "format": "csv",
          "status": "recognized",
          "origin": "склад"
        },
        {
          "name": "Компания_B/debt_feb.xlsx",
          "company": "Компания B",
          "period": "2024-02",
          "periodLabel": "Февраль 2024",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_B/legal_2024.csv",
          "company": "Компания B",
          "period": "2024",
          "periodLabel": "2024",
          "type": "Юр.события",
          "format": "csv",
          "status": "recognized",
          "origin": "юридический отдел"
        },
        {
          "name": "Компания_C/osv_q1.xlsx",
          "company": "Компания C",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_C/pnl_q1.xlsx",
          "company": "Компания C",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "ОФР",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_C/balance_31-03.xlsx",
          "company": "Компания C",
          "period": "2024-03-31",
          "periodLabel": "31.03.2024",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_C/inventory_mar.csv",
          "company": "Компания C",
          "period": "2024-03",
          "periodLabel": "Март 2024",
          "type": "Запасы",
          "format": "csv",
          "status": "recognized",
          "origin": "склад"
        },
        {
          "name": "Компания_C/debt_mar.xlsx",
          "company": "Компания C",
          "period": "2024-03",
          "periodLabel": "Март 2024",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "mapping",
          "mappingHint": "Проверить валюту"
        },
        {
          "name": "Компания_C/contracts.xlsx",
          "company": "Компания C",
          "period": "2024",
          "periodLabel": "2024",
          "type": "Контрагенты",
          "format": "xlsx",
          "status": "recognized",
          "origin": "служба безопасности"
        },
        {
          "name": "Компания_C/legal_2024.csv",
          "company": "Компания C",
          "period": "2024",
          "periodLabel": "2024",
          "type": "Юр.события",
          "format": "csv",
          "status": "recognized",
          "origin": "юридический отдел"
        },
        {
          "name": "Компания_B/pnl_feb.xlsx",
          "company": "Компания B",
          "period": "2024-02",
          "periodLabel": "Февраль 2024",
          "type": "ОФР",
          "format": "xlsx",
          "status": "duplicate",
          "duplicateGroup": "Компания_B_ОФР_Q1",
          "origin": "альтернативная версия"
        },
        {
          "name": "Компания_B/pnl_feb_v2.xlsx",
          "company": "Компания B",
          "period": "2024-02",
          "periodLabel": "Февраль 2024",
          "type": "ОФР",
          "format": "xlsx",
          "status": "duplicate",
          "duplicateGroup": "Компания_B_ОФР_Q1",
          "origin": "альтернативная версия"
        },
        {
          "name": "Компания_A/cashflow_q1.xlsx",
          "company": "Компания А",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "Прочее",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_A/projects.txt",
          "company": "Компания А",
          "period": "2024",
          "periodLabel": "2024",
          "type": "Прочее",
          "format": "txt",
          "status": "mapping",
          "mappingHint": "Указать тип выгрузки"
        },
        {
          "name": "Компания_B/receivables_jan.xlsx",
          "company": "Компания B",
          "period": "2024-01",
          "periodLabel": "Январь 2024",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_C/receivables_jan.xlsx",
          "company": "Компания C",
          "period": "2024-01",
          "periodLabel": "Январь 2024",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_B/suppliers.xlsx",
          "company": "Компания B",
          "period": "2024",
          "periodLabel": "2024",
          "type": "Контрагенты",
          "format": "xlsx",
          "status": "recognized",
          "origin": "закупки"
        },
        {
          "name": "Компания_A/suppliers.xlsx",
          "company": "Компания А",
          "period": "2024",
          "periodLabel": "2024",
          "type": "Контрагенты",
          "format": "xlsx",
          "status": "recognized",
          "origin": "закупки"
        },
        {
          "name": "Компания_C/suppliers.xlsx",
          "company": "Компания C",
          "period": "2024",
          "periodLabel": "2024",
          "type": "Контрагенты",
          "format": "xlsx",
          "status": "recognized",
          "origin": "закупки"
        },
        {
          "name": "Компания_A/legal_2023.csv",
          "company": "Компания А",
          "period": "2023",
          "periodLabel": "2023",
          "type": "Юр.события",
          "format": "csv",
          "status": "recognized",
          "origin": "юридический отдел"
        },
        {
          "name": "Компания_B/legal_2023.csv",
          "company": "Компания B",
          "period": "2023",
          "periodLabel": "2023",
          "type": "Юр.события",
          "format": "csv",
          "status": "recognized",
          "origin": "юридический отдел"
        },
        {
          "name": "Компания_C/legal_2023.csv",
          "company": "Компания C",
          "period": "2023",
          "periodLabel": "2023",
          "type": "Юр.события",
          "format": "csv",
          "status": "recognized",
          "origin": "юридический отдел"
        }
      ],
      "mappingSteps": [
        {
          "title": "Проверьте компанию/ИНН",
          "description": "Из названия папки система определила группу.",
          "suggestion": "Группа компаний АБВ"
        },
        {
          "title": "Проверьте тип отчёта",
          "description": "По столбцам определён формат ОСВ.",
          "suggestion": "ОСВ (на дату)"
        },
        {
          "title": "Проверьте период",
          "description": "Предложенный период совпадает с заголовком.",
          "suggestion": "Январь–Март 2024"
        }
      ],
      "duplicateResolutions": [
        {
          "group": "Компания_B_ОФР_Q1",
          "files": [
            "Компания_B/pnl_feb.xlsx",
            "Компания_B/pnl_feb_v2.xlsx"
          ],
          "messages": {
            "keepNew": "Новая версия отчёта по Компании B сохранена.",
            "keepOld": "Сохранили исходный отчёт. Новую выгрузку пометили как резерв.",
            "merge": "Склейка завершена для Компании B. Строк объединено: 236."
          }
        }
      ]
    },
    {
      "id": "zipArchive",
      "label": "ZIP-архив группы",
      "summary": {
        "companies": 3,
        "files": 28,
        "periods": 5,
        "formats": [
          "zip"
        ],
        "description": "Архив с вложенными папками компаний"
      },
      "recognition": {
        "recognized": 21,
        "needsMapping": 4,
        "duplicates": 3
      },
      "files": [
        {
          "name": "group_upload.zip/Company_A/OSV_2024_Q1.xlsx",
          "company": "Компания А",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "архив"
        },
        {
          "name": "group_upload.zip/Company_A/PnL_2024_Q1.xlsx",
          "company": "Компания А",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "ОФР",
          "format": "xlsx",
          "status": "recognized",
          "origin": "архив"
        },
        {
          "name": "group_upload.zip/Company_A/Balance_31_03.xlsx",
          "company": "Компания А",
          "period": "2024-03-31",
          "periodLabel": "31.03.2024",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "архив"
        },
        {
          "name": "group_upload.zip/Company_A/Inventory_feb.csv",
          "company": "Компания А",
          "period": "2024-02",
          "periodLabel": "Февраль 2024",
          "type": "Запасы",
          "format": "csv",
          "status": "mapping",
          "mappingHint": "Нужно подтвердить единицы измерения"
        },
        {
          "name": "group_upload.zip/Company_A/Receivables.csv",
          "company": "Компания А",
          "period": "2024",
          "periodLabel": "2024",
          "type": "Дебиторка",
          "format": "csv",
          "status": "recognized",
          "origin": "архив"
        },
        {
          "name": "group_upload.zip/Company_B/OSV_2024_Q1.xlsx",
          "company": "Компания B",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "архив"
        },
        {
          "name": "group_upload.zip/Company_B/PnL_Jan.xlsx",
          "company": "Компания B",
          "period": "2024-01",
          "periodLabel": "Январь 2024",
          "type": "ОФР",
          "format": "xlsx",
          "status": "duplicate",
          "duplicateGroup": "Company_B_PnL",
          "origin": "архив"
        },
        {
          "name": "group_upload.zip/Company_B/PnL_Feb.xlsx",
          "company": "Компания B",
          "period": "2024-02",
          "periodLabel": "Февраль 2024",
          "type": "ОФР",
          "format": "xlsx",
          "status": "duplicate",
          "duplicateGroup": "Company_B_PnL",
          "origin": "архив"
        },
        {
          "name": "group_upload.zip/Company_B/PnL_Mar.xlsx",
          "company": "Компания B",
          "period": "2024-03",
          "periodLabel": "Март 2024",
          "type": "ОФР",
          "format": "xlsx",
          "status": "duplicate",
          "duplicateGroup": "Company_B_PnL",
          "origin": "архив"
        },
        {
          "name": "group_upload.zip/Company_B/Balance_31_03.xlsx",
          "company": "Компания B",
          "period": "2024-03-31",
          "periodLabel": "31.03.2024",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "архив"
        },
        {
          "name": "group_upload.zip/Company_B/Inventory_march.csv",
          "company": "Компания B",
          "period": "2024-03",
          "periodLabel": "Март 2024",
          "type": "Запасы",
          "format": "csv",
          "status": "recognized",
          "origin": "архив"
        },
        {
          "name": "group_upload.zip/Company_B/Receivables.xlsx",
          "company": "Компания B",
          "period": "2024",
          "periodLabel": "2024",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "архив"
        },
        {
          "name": "group_upload.zip/Company_C/OSV_Q1.xlsx",
          "company": "Компания C",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "архив"
        },
        {
          "name": "group_upload.zip/Company_C/PnL_Q1.xlsx",
          "company": "Компания C",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "ОФР",
          "format": "xlsx",
          "status": "recognized",
          "origin": "архив"
        },
        {
          "name": "group_upload.zip/Company_C/Balance_31_03.xlsx",
          "company": "Компания C",
          "period": "2024-03-31",
          "periodLabel": "31.03.2024",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "архив"
        },
        {
          "name": "group_upload.zip/Company_C/Inventory_feb.csv",
          "company": "Компания C",
          "period": "2024-02",
          "periodLabel": "Февраль 2024",
          "type": "Запасы",
          "format": "csv",
          "status": "mapping",
          "mappingHint": "Уточнить склад"
        },
        {
          "name": "group_upload.zip/Company_C/Receivables.xlsx",
          "company": "Компания C",
          "period": "2024",
          "periodLabel": "2024",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "архив"
        },
        {
          "name": "group_upload.zip/security/events.csv",
          "company": "Группа",
          "period": "2024",
          "periodLabel": "2024",
          "type": "Юр.события",
          "format": "csv",
          "status": "recognized",
          "origin": "служба безопасности"
        },
        {
          "name": "group_upload.zip/security/partners.xlsx",
          "company": "Группа",
          "period": "2024",
          "periodLabel": "2024",
          "type": "Контрагенты",
          "format": "xlsx",
          "status": "recognized",
          "origin": "служба безопасности"
        },
        {
          "name": "group_upload.zip/Company_A/cashflow.xlsx",
          "company": "Компания А",
          "period": "2024",
          "periodLabel": "2024",
          "type": "Прочее",
          "format": "xlsx",
          "status": "recognized",
          "origin": "архив"
        },
        {
          "name": "group_upload.zip/Company_B/cashflow.xlsx",
          "company": "Компания B",
          "period": "2024",
          "periodLabel": "2024",
          "type": "Прочее",
          "format": "xlsx",
          "status": "recognized",
          "origin": "архив"
        },
        {
          "name": "group_upload.zip/Company_C/cashflow.xlsx",
          "company": "Компания C",
          "period": "2024",
          "periodLabel": "2024",
          "type": "Прочее",
          "format": "xlsx",
          "status": "recognized",
          "origin": "архив"
        },
        {
          "name": "group_upload.zip/readme.txt",
          "company": "Группа",
          "period": "2024",
          "periodLabel": "2024",
          "type": "Прочее",
          "format": "txt",
          "status": "recognized",
          "origin": "архив"
        },
        {
          "name": "group_upload.zip/Company_A/projects.csv",
          "company": "Компания А",
          "period": "2024",
          "periodLabel": "2024",
          "type": "Прочее",
          "format": "csv",
          "status": "mapping",
          "mappingHint": "Укажите тип данных"
        },
        {
          "name": "group_upload.zip/Company_B/projects.csv",
          "company": "Компания B",
          "period": "2024",
          "periodLabel": "2024",
          "type": "Прочее",
          "format": "csv",
          "status": "mapping",
          "mappingHint": "Укажите тип данных"
        },
        {
          "name": "group_upload.zip/Company_C/projects.csv",
          "company": "Компания C",
          "period": "2024",
          "periodLabel": "2024",
          "type": "Прочее",
          "format": "csv",
          "status": "mapping",
          "mappingHint": "Укажите тип данных"
        },
        {
          "name": "group_upload.zip/security/archive_2023.zip",
          "company": "Группа",
          "period": "2023",
          "periodLabel": "2023",
          "type": "Прочее",
          "format": "zip",
          "status": "recognized",
          "origin": "архив"
        },
        {
          "name": "group_upload.zip/Company_B/loans.xlsx",
          "company": "Компания B",
          "period": "2024",
          "periodLabel": "2024",
          "type": "Прочее",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        }
      ],
      "mappingSteps": [
        {
          "title": "Проверьте компанию/ИНН",
          "description": "Архив содержит подпапки по компаниям.",
          "suggestion": "Компания А • Компания B • Компания C"
        },
        {
          "title": "Проверьте тип отчёта",
          "description": "По структуре данных распознаны ОСВ и ОФР.",
          "suggestion": "Баланс (на дату) и ОФР (за период)"
        },
        {
          "title": "Проверьте период",
          "description": "Выделен диапазон по именам файлов.",
          "suggestion": "Январь–Март 2024"
        }
      ],
      "duplicateResolutions": [
        {
          "group": "Company_B_PnL",
          "files": [
            "group_upload.zip/Company_B/PnL_Jan.xlsx",
            "group_upload.zip/Company_B/PnL_Feb.xlsx",
            "group_upload.zip/Company_B/PnL_Mar.xlsx"
          ],
          "messages": {
            "keepNew": "Сохранён последний файл за март, предыдущие помечены как исторические.",
            "keepOld": "Сохранили январскую версию, остальные спрятаны в архив.",
            "merge": "Объединение трёх файлов завершено. Строк объединено: 312."
          }
        }
      ]
    }
  ],
  "consolidation": {
    "baseSummary": {
      "companies": 5,
      "files": 42,
      "period": "I квартал 2024",
      "eliminatedPairs": 8
    },
    "totals": {
      "before": {
        "revenue": 154000000,
        "cogs": 112500000,
        "grossMargin": 41500000,
        "interestPayable": 2200000,
        "interestReceivable": 2200000,
        "intraRevenue": 11000000,
        "intraCogs": 11000000,
        "note": "До элиминации внутригрупповые обороты и проценты увеличивают обороты"
      },
      "after": {
        "revenue": 143000000,
        "cogs": 101500000,
        "grossMargin": 41500000,
        "interestPayable": 0,
        "interestReceivable": 0,
        "note": "Элиминации убрали внутригрупповую выручку и проценты"
      }
    },
    "eliminationEntries": [
      {
        "pair": "Компания А → Компания B",
        "description": "Поставка сырья",
        "amount": 11000000,
        "metric": "Выручка/Себестоимость"
      },
      {
        "pair": "Компания B → Компания D",
        "description": "Проценты по займу",
        "amount": 2200000,
        "metric": "Проценты к получению/уплате"
      },
      {
        "pair": "Компания C ↔ Компания E",
        "description": "Внутригрупповые услуги",
        "amount": 3600000,
        "metric": "Выручка/Прочие расходы"
      },
      {
        "pair": "Компания А ↔ Компания C",
        "description": "Расхождение по остаткам",
        "amount": 1000000,
        "metric": "Консервативная корректировка по большей сумме"
      }
    ],
    "infoNotes": [
      "Баланс — на дату. ОФР — за период. Аналогия: камера мгновенной и средней скорости.",
      "Элиминации — снятие внутригрупповых оборотов для честного результата."
    ],
    "ruleHints": [
      "Элиминация процентов к уплате и к получению по внутригрупповым займам.",
      "Консервативная корректировка: при расхождениях берём большую сумму.",
      "Правило баланса: нет двойного учёта между дочерними компаниями."
    ]
  },
  "detectors": {
    "receivables": [
      {
        "counterparty": "Торговый дом \"Север\"",
        "company": "Компания А",
        "days": 210,
        "amount": 4200000,
        "source": "дебиторка_Q1.xlsx"
      },
      {
        "counterparty": "ООО \"Метеор\"",
        "company": "Компания B",
        "days": 275,
        "amount": 3200000,
        "source": "дебиторка_Q1.xlsx"
      },
      {
        "counterparty": "ЗАО \"Партнёр\"",
        "company": "Компания C",
        "days": 165,
        "amount": 1800000,
        "source": "дебиторка_Q1.xlsx"
      },
      {
        "counterparty": "ИП Сафронов",
        "company": "Компания D",
        "days": 95,
        "amount": 950000,
        "source": "дебиторка_Q1.xlsx"
      },
      {
        "counterparty": "АО \"Логистика\"",
        "company": "Компания Е",
        "days": 188,
        "amount": 2400000,
        "source": "дебиторка_Q1.xlsx"
      }
    ],
    "inventory": [
      {
        "item": "Партия кабеля КБ-14",
        "company": "Компания B",
        "issues": [
          "долго лежит"
        ],
        "amount": 1250000,
        "source": "запасы_февраль.csv"
      },
      {
        "item": "Компоненты серии X17",
        "company": "Компания А",
        "issues": [
          "истёк срок"
        ],
        "amount": 840000,
        "source": "запасы_февраль.csv"
      },
      {
        "item": "Готовая продукция L2",
        "company": "Компания C",
        "issues": [
          "брак",
          "долго лежит"
        ],
        "amount": 1560000,
        "source": "inventory_mar.csv"
      },
      {
        "item": "Материалы проекта R",
        "company": "Компания D",
        "issues": [
          "долго лежит"
        ],
        "amount": 610000,
        "source": "inventory_mar.csv"
      }
    ],
    "legend": {
      "receivables": "Дебиторка",
      "inventory": "Запасы"
    }
  },
  "liquidation": {
    "before": {
      "equity": 72000000,
      "cash": 18500000,
      "assets": [
        {
          "label": "Дебиторская задолженность",
          "amount": 32500000
        },
        {
          "label": "Запасы",
          "amount": 26800000
        },
        {
          "label": "Основные средства",
          "amount": 54000000
        }
      ]
    },
    "adjustments": [
      {
        "label": "Списание дебитора ООО \"Метеор\"",
        "impact": -3200000,
        "reason": ">270 дней без оплаты",
        "source": "дебиторка_Q1.xlsx"
      },
      {
        "label": "Списание партии КБ-14",
        "impact": -1250000,
        "reason": "неликвид > 9 месяцев",
        "source": "запасы_февраль.csv"
      },
      {
        "label": "Дисконт готовой продукции L2",
        "impact": -780000,
        "reason": "брак, продажа с уценкой",
        "source": "inventory_mar.csv"
      }
    ],
    "after": {
      "equity": 52000000,
      "cash": 41000000,
      "ownerStatement": "Оценка: при продаже бизнеса собственник получит около 41 млн руб. живыми деньгами."
    }
  },
  "trafficLight": {
    "statusLabels": {
      "all": "Все",
      "green": "Зелёные",
      "yellow": "Жёлтые",
      "red": "Красные"
    },
    "items": [
      {
        "name": "ООО \"Форвард\"",
        "company": "Компания А",
        "status": "green",
        "financial": "Платёж дисциплинирован, оборачиваемость 35 дней.",
        "legal": "Нет активных судебных дел.",
        "note": "Допустимый лимит 12 млн руб."
      },
      {
        "name": "АО \"Логистика\"",
        "company": "Компания Е",
        "status": "yellow",
        "financial": "Рост просрочки до 45 дней.",
        "legal": "Имеется исполнительное производство на небольшую сумму.",
        "note": "Рекомендация: запросить обновлённые документы."
      },
      {
        "name": "ООО \"Метеор\"",
        "company": "Компания B",
        "status": "red",
        "financial": "Просрочка 275 дней, выручка снижается.",
        "legal": "Сообщение о намерении банкротства.",
        "note": "Поставки остановлены, требуется контроль."
      },
      {
        "name": "ЗАО \"Партнёр\"",
        "company": "Компания C",
        "status": "yellow",
        "financial": "Просрочка 165 дней, частичные платежи.",
        "legal": "Претензионная работа без суда.",
        "note": "Дополнительное согласование скидок."
      },
      {
        "name": "ИП Сафронов",
        "company": "Компания D",
        "status": "green",
        "financial": "Оплата вовремя, обороты стабильны.",
        "legal": "Нет событий.",
        "note": "Можно расширить лимит до 5 млн руб."
      }
    ]
  },
  "finalSummary": {
    "headline": "Минуты вместо дней. Минимум ручного труда. Триада готова.",
    "points": [
      "Файлы собраны, нормализованы и сведены в одну базу.",
      "Проблемные зоны подсвечены автоматически.",
      "Команда видит, где действовать первой."
    ],
    "disclaimer": "Демонстрационный прототип. Данные и расчёты упрощены."
  }
}
};
