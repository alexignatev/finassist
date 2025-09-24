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
        "companies": 60,
        "files": 331,
        "periods": 16,
        "formats": [
          "csv",
          "txt",
          "xlsx"
        ],
        "description": "60 компаний, более 300 файлов и разные форматы выгрузок"
      },
      "recognition": {
        "recognized": 272,
        "needsMapping": 53,
        "duplicates": 6
      },
      "files": [
        {
          "name": "Компания_01/OSV_2024_Q1.xlsx",
          "company": "Компания 01",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_01/PnL_2024_Q1.csv",
          "company": "Компания 01",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "ОФР",
          "format": "csv",
          "status": "recognized",
          "origin": "почта бухгалтера"
        },
        {
          "name": "Компания_01/Balance_20240331.xlsx",
          "company": "Компания 01",
          "period": "2024-03-31",
          "periodLabel": "31.03.2024",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_01/Receivables_2024_Q1.xlsx",
          "company": "Компания 01",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_02/OSV_2024_Q2.xlsx",
          "company": "Компания 02",
          "period": "2024-Q2",
          "periodLabel": "II квартал 2024",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_02/PnL_2024_Q2.xlsx",
          "company": "Компания 02",
          "period": "2024-Q2",
          "periodLabel": "II квартал 2024",
          "type": "ОФР",
          "format": "xlsx",
          "status": "recognized",
          "origin": "почта бухгалтера"
        },
        {
          "name": "Компания_02/Balance_20240630.xlsx",
          "company": "Компания 02",
          "period": "2024-06-30",
          "periodLabel": "30.06.2024",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_02/Receivables_2024_Q2.xlsx",
          "company": "Компания 02",
          "period": "2024-Q2",
          "periodLabel": "II квартал 2024",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_02/Inventory_2024_05.csv",
          "company": "Компания 02",
          "period": "2024-05",
          "periodLabel": "Май 2024",
          "type": "Запасы",
          "format": "csv",
          "status": "mapping",
          "mappingHint": "Подтвердите коды складов и единицы измерения",
          "origin": "склад"
        },
        {
          "name": "Компания_03/OSV_2023_Q4.xlsx",
          "company": "Компания 03",
          "period": "2023-Q4",
          "periodLabel": "IV квартал 2023",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "архив выгрузок"
        },
        {
          "name": "Компания_03/PnL_2023_Q4.csv",
          "company": "Компания 03",
          "period": "2023-Q4",
          "periodLabel": "IV квартал 2023",
          "type": "ОФР",
          "format": "csv",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_03/Balance_20231231.xlsx",
          "company": "Компания 03",
          "period": "2023-12-31",
          "periodLabel": "31.12.2023",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_03/Receivables_2023_Q4.xlsx",
          "company": "Компания 03",
          "period": "2023-Q4",
          "periodLabel": "IV квартал 2023",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_03/Cashflow_2023_Q4.xlsx",
          "company": "Компания 03",
          "period": "2023-Q4",
          "periodLabel": "IV квартал 2023",
          "type": "Прочее",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_04/OSV_2023_Q3.xlsx",
          "company": "Компания 04",
          "period": "2023-Q3",
          "periodLabel": "III квартал 2023",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_04/PnL_2023_Q3.xlsx",
          "company": "Компания 04",
          "period": "2023-Q3",
          "periodLabel": "III квартал 2023",
          "type": "ОФР",
          "format": "xlsx",
          "status": "recognized",
          "origin": "почта бухгалтера"
        },
        {
          "name": "Компания_04/Balance_20230930.xlsx",
          "company": "Компания 04",
          "period": "2023-09-30",
          "periodLabel": "30.09.2023",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "архив выгрузок"
        },
        {
          "name": "Компания_04/Receivables_2023_Q3.xlsx",
          "company": "Компания 04",
          "period": "2023-Q3",
          "periodLabel": "III квартал 2023",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_04/Inventory_2023_08.csv",
          "company": "Компания 04",
          "period": "2023-08",
          "periodLabel": "Август 2023",
          "type": "Запасы",
          "format": "csv",
          "status": "mapping",
          "mappingHint": "Подтвердите коды складов и единицы измерения",
          "origin": "склад"
        },
        {
          "name": "Компания_04/Projects_2023.csv",
          "company": "Компания 04",
          "period": "2023",
          "periodLabel": "2023",
          "type": "Прочее",
          "format": "csv",
          "status": "mapping",
          "mappingHint": "Определите тип отчёта для проектных данных",
          "origin": "проектный офис"
        },
        {
          "name": "Компания_05/OSV_2024_Q1.xlsx",
          "company": "Компания 05",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_05/PnL_2024_Q1.csv",
          "company": "Компания 05",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "ОФР",
          "format": "csv",
          "status": "recognized",
          "origin": "почта бухгалтера"
        },
        {
          "name": "Компания_05/Balance_20240331.xlsx",
          "company": "Компания 05",
          "period": "2024-03-31",
          "periodLabel": "31.03.2024",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_05/Receivables_2024_Q1.xlsx",
          "company": "Компания 05",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_05/Legal_2024.csv",
          "company": "Компания 05",
          "period": "2024",
          "periodLabel": "2024",
          "type": "Юр.события",
          "format": "csv",
          "status": "recognized",
          "origin": "юридический отдел"
        },
        {
          "name": "Компания_06/OSV_2024_Q2.xlsx",
          "company": "Компания 06",
          "period": "2024-Q2",
          "periodLabel": "II квартал 2024",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "архив выгрузок"
        },
        {
          "name": "Компания_06/PnL_2024_Q2.xlsx",
          "company": "Компания 06",
          "period": "2024-Q2",
          "periodLabel": "II квартал 2024",
          "type": "ОФР",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_06/Balance_20240630.xlsx",
          "company": "Компания 06",
          "period": "2024-06-30",
          "periodLabel": "30.06.2024",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_06/Receivables_2024_Q2.xlsx",
          "company": "Компания 06",
          "period": "2024-Q2",
          "periodLabel": "II квартал 2024",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_06/Inventory_2024_05.csv",
          "company": "Компания 06",
          "period": "2024-05",
          "periodLabel": "Май 2024",
          "type": "Запасы",
          "format": "csv",
          "status": "mapping",
          "mappingHint": "Подтвердите коды складов и единицы измерения",
          "origin": "склад"
        },
        {
          "name": "Компания_06/Cashflow_2024_Q2.xlsx",
          "company": "Компания 06",
          "period": "2024-Q2",
          "periodLabel": "II квартал 2024",
          "type": "Прочее",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_07/OSV_2023_Q4.xlsx",
          "company": "Компания 07",
          "period": "2023-Q4",
          "periodLabel": "IV квартал 2023",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_07/PnL_2023_Q4.csv",
          "company": "Компания 07",
          "period": "2023-Q4",
          "periodLabel": "IV квартал 2023",
          "type": "ОФР",
          "format": "csv",
          "status": "recognized",
          "origin": "почта бухгалтера"
        },
        {
          "name": "Компания_07/Balance_20231231.xlsx",
          "company": "Компания 07",
          "period": "2023-12-31",
          "periodLabel": "31.12.2023",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_07/Receivables_2023_Q4.xlsx",
          "company": "Компания 07",
          "period": "2023-Q4",
          "periodLabel": "IV квартал 2023",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_07/Loans_2023_10.txt",
          "company": "Компания 07",
          "period": "2023-10",
          "periodLabel": "Октябрь 2023",
          "type": "Прочее",
          "format": "txt",
          "status": "mapping",
          "mappingHint": "Разметьте столбцы задолженности",
          "origin": "кредитный отдел"
        },
        {
          "name": "Компания_08/OSV_2023_Q3.xlsx",
          "company": "Компания 08",
          "period": "2023-Q3",
          "periodLabel": "III квартал 2023",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_08/PnL_2023_Q3.xlsx",
          "company": "Компания 08",
          "period": "2023-Q3",
          "periodLabel": "III квартал 2023",
          "type": "ОФР",
          "format": "xlsx",
          "status": "recognized",
          "origin": "почта бухгалтера"
        },
        {
          "name": "Компания_08/Balance_20230930.xlsx",
          "company": "Компания 08",
          "period": "2023-09-30",
          "periodLabel": "30.09.2023",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "архив выгрузок"
        },
        {
          "name": "Компания_08/Receivables_2023_Q3.xlsx",
          "company": "Компания 08",
          "period": "2023-Q3",
          "periodLabel": "III квартал 2023",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_08/Inventory_2023_08.csv",
          "company": "Компания 08",
          "period": "2023-08",
          "periodLabel": "Август 2023",
          "type": "Запасы",
          "format": "csv",
          "status": "mapping",
          "mappingHint": "Подтвердите коды складов и единицы измерения",
          "origin": "склад"
        },
        {
          "name": "Компания_08/Projects_2023.csv",
          "company": "Компания 08",
          "period": "2023",
          "periodLabel": "2023",
          "type": "Прочее",
          "format": "csv",
          "status": "mapping",
          "mappingHint": "Определите тип отчёта для проектных данных",
          "origin": "проектный офис"
        },
        {
          "name": "Компания_09/OSV_2024_Q1.xlsx",
          "company": "Компания 09",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "архив выгрузок"
        },
        {
          "name": "Компания_09/PnL_2024_Q1.csv",
          "company": "Компания 09",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "ОФР",
          "format": "csv",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_09/Balance_20240331.xlsx",
          "company": "Компания 09",
          "period": "2024-03-31",
          "periodLabel": "31.03.2024",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_09/Receivables_2024_Q1.xlsx",
          "company": "Компания 09",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_09/Cashflow_2024_Q1.xlsx",
          "company": "Компания 09",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "Прочее",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_10/OSV_2024_Q2.xlsx",
          "company": "Компания 10",
          "period": "2024-Q2",
          "periodLabel": "II квартал 2024",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_10/PnL_2024_Q2.xlsx",
          "company": "Компания 10",
          "period": "2024-Q2",
          "periodLabel": "II квартал 2024",
          "type": "ОФР",
          "format": "xlsx",
          "status": "recognized",
          "origin": "почта бухгалтера"
        },
        {
          "name": "Компания_10/PnL_2024_Q2_v2.xlsx",
          "company": "Компания 10",
          "period": "2024-Q2",
          "periodLabel": "II квартал 2024",
          "type": "ОФР",
          "format": "xlsx",
          "status": "duplicate",
          "duplicateGroup": "Компания_10_PnL_2024_Q2",
          "origin": "повторная выгрузка"
        },
        {
          "name": "Компания_10/Balance_20240630.xlsx",
          "company": "Компания 10",
          "period": "2024-06-30",
          "periodLabel": "30.06.2024",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_10/Receivables_2024_Q2.xlsx",
          "company": "Компания 10",
          "period": "2024-Q2",
          "periodLabel": "II квартал 2024",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_10/Inventory_2024_05.csv",
          "company": "Компания 10",
          "period": "2024-05",
          "periodLabel": "Май 2024",
          "type": "Запасы",
          "format": "csv",
          "status": "mapping",
          "mappingHint": "Подтвердите коды складов и единицы измерения",
          "origin": "склад"
        },
        {
          "name": "Компания_10/Legal_2024.csv",
          "company": "Компания 10",
          "period": "2024",
          "periodLabel": "2024",
          "type": "Юр.события",
          "format": "csv",
          "status": "recognized",
          "origin": "юридический отдел"
        },
        {
          "name": "Компания_11/OSV_2023_Q4.xlsx",
          "company": "Компания 11",
          "period": "2023-Q4",
          "periodLabel": "IV квартал 2023",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_11/PnL_2023_Q4.csv",
          "company": "Компания 11",
          "period": "2023-Q4",
          "periodLabel": "IV квартал 2023",
          "type": "ОФР",
          "format": "csv",
          "status": "recognized",
          "origin": "почта бухгалтера"
        },
        {
          "name": "Компания_11/Balance_20231231.xlsx",
          "company": "Компания 11",
          "period": "2023-12-31",
          "periodLabel": "31.12.2023",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_11/Receivables_2023_Q4.xlsx",
          "company": "Компания 11",
          "period": "2023-Q4",
          "periodLabel": "IV квартал 2023",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_12/OSV_2023_Q3.xlsx",
          "company": "Компания 12",
          "period": "2023-Q3",
          "periodLabel": "III квартал 2023",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "архив выгрузок"
        },
        {
          "name": "Компания_12/PnL_2023_Q3.xlsx",
          "company": "Компания 12",
          "period": "2023-Q3",
          "periodLabel": "III квартал 2023",
          "type": "ОФР",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_12/Balance_20230930.xlsx",
          "company": "Компания 12",
          "period": "2023-09-30",
          "periodLabel": "30.09.2023",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "архив выгрузок"
        },
        {
          "name": "Компания_12/Receivables_2023_Q3.xlsx",
          "company": "Компания 12",
          "period": "2023-Q3",
          "periodLabel": "III квартал 2023",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_12/Inventory_2023_08.csv",
          "company": "Компания 12",
          "period": "2023-08",
          "periodLabel": "Август 2023",
          "type": "Запасы",
          "format": "csv",
          "status": "mapping",
          "mappingHint": "Подтвердите коды складов и единицы измерения",
          "origin": "склад"
        },
        {
          "name": "Компания_12/Projects_2023.csv",
          "company": "Компания 12",
          "period": "2023",
          "periodLabel": "2023",
          "type": "Прочее",
          "format": "csv",
          "status": "mapping",
          "mappingHint": "Определите тип отчёта для проектных данных",
          "origin": "проектный офис"
        },
        {
          "name": "Компания_12/Cashflow_2023_Q3.xlsx",
          "company": "Компания 12",
          "period": "2023-Q3",
          "periodLabel": "III квартал 2023",
          "type": "Прочее",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_13/OSV_2024_Q1.xlsx",
          "company": "Компания 13",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_13/PnL_2024_Q1.csv",
          "company": "Компания 13",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "ОФР",
          "format": "csv",
          "status": "recognized",
          "origin": "почта бухгалтера"
        },
        {
          "name": "Компания_13/Balance_20240331.xlsx",
          "company": "Компания 13",
          "period": "2024-03-31",
          "periodLabel": "31.03.2024",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_13/Receivables_2024_Q1.xlsx",
          "company": "Компания 13",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_14/OSV_2024_Q2.xlsx",
          "company": "Компания 14",
          "period": "2024-Q2",
          "periodLabel": "II квартал 2024",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_14/PnL_2024_Q2.xlsx",
          "company": "Компания 14",
          "period": "2024-Q2",
          "periodLabel": "II квартал 2024",
          "type": "ОФР",
          "format": "xlsx",
          "status": "recognized",
          "origin": "почта бухгалтера"
        },
        {
          "name": "Компания_14/Balance_20240630.xlsx",
          "company": "Компания 14",
          "period": "2024-06-30",
          "periodLabel": "30.06.2024",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_14/Receivables_2024_Q2.xlsx",
          "company": "Компания 14",
          "period": "2024-Q2",
          "periodLabel": "II квартал 2024",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_14/Inventory_2024_05.csv",
          "company": "Компания 14",
          "period": "2024-05",
          "periodLabel": "Май 2024",
          "type": "Запасы",
          "format": "csv",
          "status": "mapping",
          "mappingHint": "Подтвердите коды складов и единицы измерения",
          "origin": "склад"
        },
        {
          "name": "Компания_14/Loans_2024_04.txt",
          "company": "Компания 14",
          "period": "2024-04",
          "periodLabel": "Апрель 2024",
          "type": "Прочее",
          "format": "txt",
          "status": "mapping",
          "mappingHint": "Разметьте столбцы задолженности",
          "origin": "кредитный отдел"
        },
        {
          "name": "Компания_15/OSV_2023_Q4.xlsx",
          "company": "Компания 15",
          "period": "2023-Q4",
          "periodLabel": "IV квартал 2023",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "архив выгрузок"
        },
        {
          "name": "Компания_15/PnL_2023_Q4.csv",
          "company": "Компания 15",
          "period": "2023-Q4",
          "periodLabel": "IV квартал 2023",
          "type": "ОФР",
          "format": "csv",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_15/Balance_20231231.xlsx",
          "company": "Компания 15",
          "period": "2023-12-31",
          "periodLabel": "31.12.2023",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_15/Receivables_2023_Q4.xlsx",
          "company": "Компания 15",
          "period": "2023-Q4",
          "periodLabel": "IV квартал 2023",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_15/Legal_2023.csv",
          "company": "Компания 15",
          "period": "2023",
          "periodLabel": "2023",
          "type": "Юр.события",
          "format": "csv",
          "status": "recognized",
          "origin": "юридический отдел"
        },
        {
          "name": "Компания_15/Cashflow_2023_Q4.xlsx",
          "company": "Компания 15",
          "period": "2023-Q4",
          "periodLabel": "IV квартал 2023",
          "type": "Прочее",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_16/OSV_2023_Q3.xlsx",
          "company": "Компания 16",
          "period": "2023-Q3",
          "periodLabel": "III квартал 2023",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_16/PnL_2023_Q3.xlsx",
          "company": "Компания 16",
          "period": "2023-Q3",
          "periodLabel": "III квартал 2023",
          "type": "ОФР",
          "format": "xlsx",
          "status": "recognized",
          "origin": "почта бухгалтера"
        },
        {
          "name": "Компания_16/Balance_20230930.xlsx",
          "company": "Компания 16",
          "period": "2023-09-30",
          "periodLabel": "30.09.2023",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "архив выгрузок"
        },
        {
          "name": "Компания_16/Receivables_2023_Q3.xlsx",
          "company": "Компания 16",
          "period": "2023-Q3",
          "periodLabel": "III квартал 2023",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_16/Inventory_2023_08.csv",
          "company": "Компания 16",
          "period": "2023-08",
          "periodLabel": "Август 2023",
          "type": "Запасы",
          "format": "csv",
          "status": "mapping",
          "mappingHint": "Подтвердите коды складов и единицы измерения",
          "origin": "склад"
        },
        {
          "name": "Компания_16/Projects_2023.csv",
          "company": "Компания 16",
          "period": "2023",
          "periodLabel": "2023",
          "type": "Прочее",
          "format": "csv",
          "status": "mapping",
          "mappingHint": "Определите тип отчёта для проектных данных",
          "origin": "проектный офис"
        },
        {
          "name": "Компания_17/OSV_2024_Q1.xlsx",
          "company": "Компания 17",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_17/PnL_2024_Q1.csv",
          "company": "Компания 17",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "ОФР",
          "format": "csv",
          "status": "recognized",
          "origin": "почта бухгалтера"
        },
        {
          "name": "Компания_17/Balance_20240331.xlsx",
          "company": "Компания 17",
          "period": "2024-03-31",
          "periodLabel": "31.03.2024",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_17/Receivables_2024_Q1.xlsx",
          "company": "Компания 17",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_18/OSV_2024_Q2.xlsx",
          "company": "Компания 18",
          "period": "2024-Q2",
          "periodLabel": "II квартал 2024",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "архив выгрузок"
        },
        {
          "name": "Компания_18/PnL_2024_Q2.xlsx",
          "company": "Компания 18",
          "period": "2024-Q2",
          "periodLabel": "II квартал 2024",
          "type": "ОФР",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_18/Balance_20240630.xlsx",
          "company": "Компания 18",
          "period": "2024-06-30",
          "periodLabel": "30.06.2024",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_18/Receivables_2024_Q2.xlsx",
          "company": "Компания 18",
          "period": "2024-Q2",
          "periodLabel": "II квартал 2024",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_18/Inventory_2024_05.csv",
          "company": "Компания 18",
          "period": "2024-05",
          "periodLabel": "Май 2024",
          "type": "Запасы",
          "format": "csv",
          "status": "mapping",
          "mappingHint": "Подтвердите коды складов и единицы измерения",
          "origin": "склад"
        },
        {
          "name": "Компания_18/Cashflow_2024_Q2.xlsx",
          "company": "Компания 18",
          "period": "2024-Q2",
          "periodLabel": "II квартал 2024",
          "type": "Прочее",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_19/OSV_2023_Q4.xlsx",
          "company": "Компания 19",
          "period": "2023-Q4",
          "periodLabel": "IV квартал 2023",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_19/PnL_2023_Q4.csv",
          "company": "Компания 19",
          "period": "2023-Q4",
          "periodLabel": "IV квартал 2023",
          "type": "ОФР",
          "format": "csv",
          "status": "recognized",
          "origin": "почта бухгалтера"
        },
        {
          "name": "Компания_19/Balance_20231231.xlsx",
          "company": "Компания 19",
          "period": "2023-12-31",
          "periodLabel": "31.12.2023",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_19/Receivables_2023_Q4.xlsx",
          "company": "Компания 19",
          "period": "2023-Q4",
          "periodLabel": "IV квартал 2023",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_20/OSV_2023_Q3.xlsx",
          "company": "Компания 20",
          "period": "2023-Q3",
          "periodLabel": "III квартал 2023",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_20/PnL_2023_Q3.xlsx",
          "company": "Компания 20",
          "period": "2023-Q3",
          "periodLabel": "III квартал 2023",
          "type": "ОФР",
          "format": "xlsx",
          "status": "recognized",
          "origin": "почта бухгалтера"
        },
        {
          "name": "Компания_20/PnL_2023_Q3_v2.xlsx",
          "company": "Компания 20",
          "period": "2023-Q3",
          "periodLabel": "III квартал 2023",
          "type": "ОФР",
          "format": "xlsx",
          "status": "duplicate",
          "duplicateGroup": "Компания_20_PnL_2023_Q3",
          "origin": "повторная выгрузка"
        },
        {
          "name": "Компания_20/Balance_20230930.xlsx",
          "company": "Компания 20",
          "period": "2023-09-30",
          "periodLabel": "30.09.2023",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "архив выгрузок"
        },
        {
          "name": "Компания_20/Receivables_2023_Q3.xlsx",
          "company": "Компания 20",
          "period": "2023-Q3",
          "periodLabel": "III квартал 2023",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_20/Inventory_2023_08.csv",
          "company": "Компания 20",
          "period": "2023-08",
          "periodLabel": "Август 2023",
          "type": "Запасы",
          "format": "csv",
          "status": "mapping",
          "mappingHint": "Подтвердите коды складов и единицы измерения",
          "origin": "склад"
        },
        {
          "name": "Компания_20/Projects_2023.csv",
          "company": "Компания 20",
          "period": "2023",
          "periodLabel": "2023",
          "type": "Прочее",
          "format": "csv",
          "status": "mapping",
          "mappingHint": "Определите тип отчёта для проектных данных",
          "origin": "проектный офис"
        },
        {
          "name": "Компания_20/Legal_2023.csv",
          "company": "Компания 20",
          "period": "2023",
          "periodLabel": "2023",
          "type": "Юр.события",
          "format": "csv",
          "status": "recognized",
          "origin": "юридический отдел"
        },
        {
          "name": "Компания_21/OSV_2024_Q1.xlsx",
          "company": "Компания 21",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "архив выгрузок"
        },
        {
          "name": "Компания_21/PnL_2024_Q1.csv",
          "company": "Компания 21",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "ОФР",
          "format": "csv",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_21/Balance_20240331.xlsx",
          "company": "Компания 21",
          "period": "2024-03-31",
          "periodLabel": "31.03.2024",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_21/Receivables_2024_Q1.xlsx",
          "company": "Компания 21",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_21/Loans_2024_01.txt",
          "company": "Компания 21",
          "period": "2024-01",
          "periodLabel": "Январь 2024",
          "type": "Прочее",
          "format": "txt",
          "status": "mapping",
          "mappingHint": "Разметьте столбцы задолженности",
          "origin": "кредитный отдел"
        },
        {
          "name": "Компания_21/Cashflow_2024_Q1.xlsx",
          "company": "Компания 21",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "Прочее",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_22/OSV_2024_Q2.xlsx",
          "company": "Компания 22",
          "period": "2024-Q2",
          "periodLabel": "II квартал 2024",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_22/PnL_2024_Q2.xlsx",
          "company": "Компания 22",
          "period": "2024-Q2",
          "periodLabel": "II квартал 2024",
          "type": "ОФР",
          "format": "xlsx",
          "status": "recognized",
          "origin": "почта бухгалтера"
        },
        {
          "name": "Компания_22/Balance_20240630.xlsx",
          "company": "Компания 22",
          "period": "2024-06-30",
          "periodLabel": "30.06.2024",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_22/Receivables_2024_Q2.xlsx",
          "company": "Компания 22",
          "period": "2024-Q2",
          "periodLabel": "II квартал 2024",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_22/Inventory_2024_05.csv",
          "company": "Компания 22",
          "period": "2024-05",
          "periodLabel": "Май 2024",
          "type": "Запасы",
          "format": "csv",
          "status": "mapping",
          "mappingHint": "Подтвердите коды складов и единицы измерения",
          "origin": "склад"
        },
        {
          "name": "Компания_23/OSV_2023_Q4.xlsx",
          "company": "Компания 23",
          "period": "2023-Q4",
          "periodLabel": "IV квартал 2023",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_23/PnL_2023_Q4.csv",
          "company": "Компания 23",
          "period": "2023-Q4",
          "periodLabel": "IV квартал 2023",
          "type": "ОФР",
          "format": "csv",
          "status": "recognized",
          "origin": "почта бухгалтера"
        },
        {
          "name": "Компания_23/Balance_20231231.xlsx",
          "company": "Компания 23",
          "period": "2023-12-31",
          "periodLabel": "31.12.2023",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_23/Receivables_2023_Q4.xlsx",
          "company": "Компания 23",
          "period": "2023-Q4",
          "periodLabel": "IV квартал 2023",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_24/OSV_2023_Q3.xlsx",
          "company": "Компания 24",
          "period": "2023-Q3",
          "periodLabel": "III квартал 2023",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "архив выгрузок"
        },
        {
          "name": "Компания_24/PnL_2023_Q3.xlsx",
          "company": "Компания 24",
          "period": "2023-Q3",
          "periodLabel": "III квартал 2023",
          "type": "ОФР",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_24/Balance_20230930.xlsx",
          "company": "Компания 24",
          "period": "2023-09-30",
          "periodLabel": "30.09.2023",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "архив выгрузок"
        },
        {
          "name": "Компания_24/Receivables_2023_Q3.xlsx",
          "company": "Компания 24",
          "period": "2023-Q3",
          "periodLabel": "III квартал 2023",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_24/Inventory_2023_08.csv",
          "company": "Компания 24",
          "period": "2023-08",
          "periodLabel": "Август 2023",
          "type": "Запасы",
          "format": "csv",
          "status": "mapping",
          "mappingHint": "Подтвердите коды складов и единицы измерения",
          "origin": "склад"
        },
        {
          "name": "Компания_24/Projects_2023.csv",
          "company": "Компания 24",
          "period": "2023",
          "periodLabel": "2023",
          "type": "Прочее",
          "format": "csv",
          "status": "mapping",
          "mappingHint": "Определите тип отчёта для проектных данных",
          "origin": "проектный офис"
        },
        {
          "name": "Компания_24/Cashflow_2023_Q3.xlsx",
          "company": "Компания 24",
          "period": "2023-Q3",
          "periodLabel": "III квартал 2023",
          "type": "Прочее",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_25/OSV_2024_Q1.xlsx",
          "company": "Компания 25",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_25/PnL_2024_Q1.csv",
          "company": "Компания 25",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "ОФР",
          "format": "csv",
          "status": "recognized",
          "origin": "почта бухгалтера"
        },
        {
          "name": "Компания_25/Balance_20240331.xlsx",
          "company": "Компания 25",
          "period": "2024-03-31",
          "periodLabel": "31.03.2024",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_25/Receivables_2024_Q1.xlsx",
          "company": "Компания 25",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_25/Legal_2024.csv",
          "company": "Компания 25",
          "period": "2024",
          "periodLabel": "2024",
          "type": "Юр.события",
          "format": "csv",
          "status": "recognized",
          "origin": "юридический отдел"
        },
        {
          "name": "Компания_26/OSV_2024_Q2.xlsx",
          "company": "Компания 26",
          "period": "2024-Q2",
          "periodLabel": "II квартал 2024",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_26/PnL_2024_Q2.xlsx",
          "company": "Компания 26",
          "period": "2024-Q2",
          "periodLabel": "II квартал 2024",
          "type": "ОФР",
          "format": "xlsx",
          "status": "recognized",
          "origin": "почта бухгалтера"
        },
        {
          "name": "Компания_26/Balance_20240630.xlsx",
          "company": "Компания 26",
          "period": "2024-06-30",
          "periodLabel": "30.06.2024",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_26/Receivables_2024_Q2.xlsx",
          "company": "Компания 26",
          "period": "2024-Q2",
          "periodLabel": "II квартал 2024",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_26/Inventory_2024_05.csv",
          "company": "Компания 26",
          "period": "2024-05",
          "periodLabel": "Май 2024",
          "type": "Запасы",
          "format": "csv",
          "status": "mapping",
          "mappingHint": "Подтвердите коды складов и единицы измерения",
          "origin": "склад"
        },
        {
          "name": "Компания_27/OSV_2023_Q4.xlsx",
          "company": "Компания 27",
          "period": "2023-Q4",
          "periodLabel": "IV квартал 2023",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "архив выгрузок"
        },
        {
          "name": "Компания_27/PnL_2023_Q4.csv",
          "company": "Компания 27",
          "period": "2023-Q4",
          "periodLabel": "IV квартал 2023",
          "type": "ОФР",
          "format": "csv",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_27/Balance_20231231.xlsx",
          "company": "Компания 27",
          "period": "2023-12-31",
          "periodLabel": "31.12.2023",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_27/Receivables_2023_Q4.xlsx",
          "company": "Компания 27",
          "period": "2023-Q4",
          "periodLabel": "IV квартал 2023",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_27/Cashflow_2023_Q4.xlsx",
          "company": "Компания 27",
          "period": "2023-Q4",
          "periodLabel": "IV квартал 2023",
          "type": "Прочее",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_28/OSV_2023_Q3.xlsx",
          "company": "Компания 28",
          "period": "2023-Q3",
          "periodLabel": "III квартал 2023",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_28/PnL_2023_Q3.xlsx",
          "company": "Компания 28",
          "period": "2023-Q3",
          "periodLabel": "III квартал 2023",
          "type": "ОФР",
          "format": "xlsx",
          "status": "recognized",
          "origin": "почта бухгалтера"
        },
        {
          "name": "Компания_28/Balance_20230930.xlsx",
          "company": "Компания 28",
          "period": "2023-09-30",
          "periodLabel": "30.09.2023",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "архив выгрузок"
        },
        {
          "name": "Компания_28/Receivables_2023_Q3.xlsx",
          "company": "Компания 28",
          "period": "2023-Q3",
          "periodLabel": "III квартал 2023",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_28/Inventory_2023_08.csv",
          "company": "Компания 28",
          "period": "2023-08",
          "periodLabel": "Август 2023",
          "type": "Запасы",
          "format": "csv",
          "status": "mapping",
          "mappingHint": "Подтвердите коды складов и единицы измерения",
          "origin": "склад"
        },
        {
          "name": "Компания_28/Projects_2023.csv",
          "company": "Компания 28",
          "period": "2023",
          "periodLabel": "2023",
          "type": "Прочее",
          "format": "csv",
          "status": "mapping",
          "mappingHint": "Определите тип отчёта для проектных данных",
          "origin": "проектный офис"
        },
        {
          "name": "Компания_28/Loans_2023_07.txt",
          "company": "Компания 28",
          "period": "2023-07",
          "periodLabel": "Июль 2023",
          "type": "Прочее",
          "format": "txt",
          "status": "mapping",
          "mappingHint": "Разметьте столбцы задолженности",
          "origin": "кредитный отдел"
        },
        {
          "name": "Компания_29/OSV_2024_Q1.xlsx",
          "company": "Компания 29",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_29/PnL_2024_Q1.csv",
          "company": "Компания 29",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "ОФР",
          "format": "csv",
          "status": "recognized",
          "origin": "почта бухгалтера"
        },
        {
          "name": "Компания_29/Balance_20240331.xlsx",
          "company": "Компания 29",
          "period": "2024-03-31",
          "periodLabel": "31.03.2024",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_29/Receivables_2024_Q1.xlsx",
          "company": "Компания 29",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_30/OSV_2024_Q2.xlsx",
          "company": "Компания 30",
          "period": "2024-Q2",
          "periodLabel": "II квартал 2024",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "архив выгрузок"
        },
        {
          "name": "Компания_30/PnL_2024_Q2.xlsx",
          "company": "Компания 30",
          "period": "2024-Q2",
          "periodLabel": "II квартал 2024",
          "type": "ОФР",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_30/PnL_2024_Q2_v2.xlsx",
          "company": "Компания 30",
          "period": "2024-Q2",
          "periodLabel": "II квартал 2024",
          "type": "ОФР",
          "format": "xlsx",
          "status": "duplicate",
          "duplicateGroup": "Компания_30_PnL_2024_Q2",
          "origin": "повторная выгрузка"
        },
        {
          "name": "Компания_30/Balance_20240630.xlsx",
          "company": "Компания 30",
          "period": "2024-06-30",
          "periodLabel": "30.06.2024",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_30/Receivables_2024_Q2.xlsx",
          "company": "Компания 30",
          "period": "2024-Q2",
          "periodLabel": "II квартал 2024",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_30/Inventory_2024_05.csv",
          "company": "Компания 30",
          "period": "2024-05",
          "periodLabel": "Май 2024",
          "type": "Запасы",
          "format": "csv",
          "status": "mapping",
          "mappingHint": "Подтвердите коды складов и единицы измерения",
          "origin": "склад"
        },
        {
          "name": "Компания_30/Legal_2024.csv",
          "company": "Компания 30",
          "period": "2024",
          "periodLabel": "2024",
          "type": "Юр.события",
          "format": "csv",
          "status": "recognized",
          "origin": "юридический отдел"
        },
        {
          "name": "Компания_30/Cashflow_2024_Q2.xlsx",
          "company": "Компания 30",
          "period": "2024-Q2",
          "periodLabel": "II квартал 2024",
          "type": "Прочее",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_31/OSV_2023_Q4.xlsx",
          "company": "Компания 31",
          "period": "2023-Q4",
          "periodLabel": "IV квартал 2023",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_31/PnL_2023_Q4.csv",
          "company": "Компания 31",
          "period": "2023-Q4",
          "periodLabel": "IV квартал 2023",
          "type": "ОФР",
          "format": "csv",
          "status": "recognized",
          "origin": "почта бухгалтера"
        },
        {
          "name": "Компания_31/Balance_20231231.xlsx",
          "company": "Компания 31",
          "period": "2023-12-31",
          "periodLabel": "31.12.2023",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_31/Receivables_2023_Q4.xlsx",
          "company": "Компания 31",
          "period": "2023-Q4",
          "periodLabel": "IV квартал 2023",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_32/OSV_2023_Q3.xlsx",
          "company": "Компания 32",
          "period": "2023-Q3",
          "periodLabel": "III квартал 2023",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_32/PnL_2023_Q3.xlsx",
          "company": "Компания 32",
          "period": "2023-Q3",
          "periodLabel": "III квартал 2023",
          "type": "ОФР",
          "format": "xlsx",
          "status": "recognized",
          "origin": "почта бухгалтера"
        },
        {
          "name": "Компания_32/Balance_20230930.xlsx",
          "company": "Компания 32",
          "period": "2023-09-30",
          "periodLabel": "30.09.2023",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "архив выгрузок"
        },
        {
          "name": "Компания_32/Receivables_2023_Q3.xlsx",
          "company": "Компания 32",
          "period": "2023-Q3",
          "periodLabel": "III квартал 2023",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_32/Inventory_2023_08.csv",
          "company": "Компания 32",
          "period": "2023-08",
          "periodLabel": "Август 2023",
          "type": "Запасы",
          "format": "csv",
          "status": "mapping",
          "mappingHint": "Подтвердите коды складов и единицы измерения",
          "origin": "склад"
        },
        {
          "name": "Компания_32/Projects_2023.csv",
          "company": "Компания 32",
          "period": "2023",
          "periodLabel": "2023",
          "type": "Прочее",
          "format": "csv",
          "status": "mapping",
          "mappingHint": "Определите тип отчёта для проектных данных",
          "origin": "проектный офис"
        },
        {
          "name": "Компания_33/OSV_2024_Q1.xlsx",
          "company": "Компания 33",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "архив выгрузок"
        },
        {
          "name": "Компания_33/PnL_2024_Q1.csv",
          "company": "Компания 33",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "ОФР",
          "format": "csv",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_33/Balance_20240331.xlsx",
          "company": "Компания 33",
          "period": "2024-03-31",
          "periodLabel": "31.03.2024",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_33/Receivables_2024_Q1.xlsx",
          "company": "Компания 33",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_33/Cashflow_2024_Q1.xlsx",
          "company": "Компания 33",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "Прочее",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_34/OSV_2024_Q2.xlsx",
          "company": "Компания 34",
          "period": "2024-Q2",
          "periodLabel": "II квартал 2024",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_34/PnL_2024_Q2.xlsx",
          "company": "Компания 34",
          "period": "2024-Q2",
          "periodLabel": "II квартал 2024",
          "type": "ОФР",
          "format": "xlsx",
          "status": "recognized",
          "origin": "почта бухгалтера"
        },
        {
          "name": "Компания_34/Balance_20240630.xlsx",
          "company": "Компания 34",
          "period": "2024-06-30",
          "periodLabel": "30.06.2024",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_34/Receivables_2024_Q2.xlsx",
          "company": "Компания 34",
          "period": "2024-Q2",
          "periodLabel": "II квартал 2024",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_34/Inventory_2024_05.csv",
          "company": "Компания 34",
          "period": "2024-05",
          "periodLabel": "Май 2024",
          "type": "Запасы",
          "format": "csv",
          "status": "mapping",
          "mappingHint": "Подтвердите коды складов и единицы измерения",
          "origin": "склад"
        },
        {
          "name": "Компания_35/OSV_2023_Q4.xlsx",
          "company": "Компания 35",
          "period": "2023-Q4",
          "periodLabel": "IV квартал 2023",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_35/PnL_2023_Q4.csv",
          "company": "Компания 35",
          "period": "2023-Q4",
          "periodLabel": "IV квартал 2023",
          "type": "ОФР",
          "format": "csv",
          "status": "recognized",
          "origin": "почта бухгалтера"
        },
        {
          "name": "Компания_35/Balance_20231231.xlsx",
          "company": "Компания 35",
          "period": "2023-12-31",
          "periodLabel": "31.12.2023",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_35/Receivables_2023_Q4.xlsx",
          "company": "Компания 35",
          "period": "2023-Q4",
          "periodLabel": "IV квартал 2023",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_35/Loans_2023_10.txt",
          "company": "Компания 35",
          "period": "2023-10",
          "periodLabel": "Октябрь 2023",
          "type": "Прочее",
          "format": "txt",
          "status": "mapping",
          "mappingHint": "Разметьте столбцы задолженности",
          "origin": "кредитный отдел"
        },
        {
          "name": "Компания_35/Legal_2023.csv",
          "company": "Компания 35",
          "period": "2023",
          "periodLabel": "2023",
          "type": "Юр.события",
          "format": "csv",
          "status": "recognized",
          "origin": "юридический отдел"
        },
        {
          "name": "Компания_36/OSV_2023_Q3.xlsx",
          "company": "Компания 36",
          "period": "2023-Q3",
          "periodLabel": "III квартал 2023",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "архив выгрузок"
        },
        {
          "name": "Компания_36/PnL_2023_Q3.xlsx",
          "company": "Компания 36",
          "period": "2023-Q3",
          "periodLabel": "III квартал 2023",
          "type": "ОФР",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_36/Balance_20230930.xlsx",
          "company": "Компания 36",
          "period": "2023-09-30",
          "periodLabel": "30.09.2023",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "архив выгрузок"
        },
        {
          "name": "Компания_36/Receivables_2023_Q3.xlsx",
          "company": "Компания 36",
          "period": "2023-Q3",
          "periodLabel": "III квартал 2023",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_36/Inventory_2023_08.csv",
          "company": "Компания 36",
          "period": "2023-08",
          "periodLabel": "Август 2023",
          "type": "Запасы",
          "format": "csv",
          "status": "mapping",
          "mappingHint": "Подтвердите коды складов и единицы измерения",
          "origin": "склад"
        },
        {
          "name": "Компания_36/Projects_2023.csv",
          "company": "Компания 36",
          "period": "2023",
          "periodLabel": "2023",
          "type": "Прочее",
          "format": "csv",
          "status": "mapping",
          "mappingHint": "Определите тип отчёта для проектных данных",
          "origin": "проектный офис"
        },
        {
          "name": "Компания_36/Cashflow_2023_Q3.xlsx",
          "company": "Компания 36",
          "period": "2023-Q3",
          "periodLabel": "III квартал 2023",
          "type": "Прочее",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_37/OSV_2024_Q1.xlsx",
          "company": "Компания 37",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_37/PnL_2024_Q1.csv",
          "company": "Компания 37",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "ОФР",
          "format": "csv",
          "status": "recognized",
          "origin": "почта бухгалтера"
        },
        {
          "name": "Компания_37/Balance_20240331.xlsx",
          "company": "Компания 37",
          "period": "2024-03-31",
          "periodLabel": "31.03.2024",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_37/Receivables_2024_Q1.xlsx",
          "company": "Компания 37",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_38/OSV_2024_Q2.xlsx",
          "company": "Компания 38",
          "period": "2024-Q2",
          "periodLabel": "II квартал 2024",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_38/PnL_2024_Q2.xlsx",
          "company": "Компания 38",
          "period": "2024-Q2",
          "periodLabel": "II квартал 2024",
          "type": "ОФР",
          "format": "xlsx",
          "status": "recognized",
          "origin": "почта бухгалтера"
        },
        {
          "name": "Компания_38/Balance_20240630.xlsx",
          "company": "Компания 38",
          "period": "2024-06-30",
          "periodLabel": "30.06.2024",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_38/Receivables_2024_Q2.xlsx",
          "company": "Компания 38",
          "period": "2024-Q2",
          "periodLabel": "II квартал 2024",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_38/Inventory_2024_05.csv",
          "company": "Компания 38",
          "period": "2024-05",
          "periodLabel": "Май 2024",
          "type": "Запасы",
          "format": "csv",
          "status": "mapping",
          "mappingHint": "Подтвердите коды складов и единицы измерения",
          "origin": "склад"
        },
        {
          "name": "Компания_39/OSV_2023_Q4.xlsx",
          "company": "Компания 39",
          "period": "2023-Q4",
          "periodLabel": "IV квартал 2023",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "архив выгрузок"
        },
        {
          "name": "Компания_39/PnL_2023_Q4.csv",
          "company": "Компания 39",
          "period": "2023-Q4",
          "periodLabel": "IV квартал 2023",
          "type": "ОФР",
          "format": "csv",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_39/Balance_20231231.xlsx",
          "company": "Компания 39",
          "period": "2023-12-31",
          "periodLabel": "31.12.2023",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_39/Receivables_2023_Q4.xlsx",
          "company": "Компания 39",
          "period": "2023-Q4",
          "periodLabel": "IV квартал 2023",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_39/Cashflow_2023_Q4.xlsx",
          "company": "Компания 39",
          "period": "2023-Q4",
          "periodLabel": "IV квартал 2023",
          "type": "Прочее",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_40/OSV_2023_Q3.xlsx",
          "company": "Компания 40",
          "period": "2023-Q3",
          "periodLabel": "III квартал 2023",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_40/PnL_2023_Q3.xlsx",
          "company": "Компания 40",
          "period": "2023-Q3",
          "periodLabel": "III квартал 2023",
          "type": "ОФР",
          "format": "xlsx",
          "status": "recognized",
          "origin": "почта бухгалтера"
        },
        {
          "name": "Компания_40/PnL_2023_Q3_v2.xlsx",
          "company": "Компания 40",
          "period": "2023-Q3",
          "periodLabel": "III квартал 2023",
          "type": "ОФР",
          "format": "xlsx",
          "status": "duplicate",
          "duplicateGroup": "Компания_40_PnL_2023_Q3",
          "origin": "повторная выгрузка"
        },
        {
          "name": "Компания_40/Balance_20230930.xlsx",
          "company": "Компания 40",
          "period": "2023-09-30",
          "periodLabel": "30.09.2023",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "архив выгрузок"
        },
        {
          "name": "Компания_40/Receivables_2023_Q3.xlsx",
          "company": "Компания 40",
          "period": "2023-Q3",
          "periodLabel": "III квартал 2023",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_40/Inventory_2023_08.csv",
          "company": "Компания 40",
          "period": "2023-08",
          "periodLabel": "Август 2023",
          "type": "Запасы",
          "format": "csv",
          "status": "mapping",
          "mappingHint": "Подтвердите коды складов и единицы измерения",
          "origin": "склад"
        },
        {
          "name": "Компания_40/Projects_2023.csv",
          "company": "Компания 40",
          "period": "2023",
          "periodLabel": "2023",
          "type": "Прочее",
          "format": "csv",
          "status": "mapping",
          "mappingHint": "Определите тип отчёта для проектных данных",
          "origin": "проектный офис"
        },
        {
          "name": "Компания_40/Legal_2023.csv",
          "company": "Компания 40",
          "period": "2023",
          "periodLabel": "2023",
          "type": "Юр.события",
          "format": "csv",
          "status": "recognized",
          "origin": "юридический отдел"
        },
        {
          "name": "Компания_41/OSV_2024_Q1.xlsx",
          "company": "Компания 41",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_41/PnL_2024_Q1.csv",
          "company": "Компания 41",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "ОФР",
          "format": "csv",
          "status": "recognized",
          "origin": "почта бухгалтера"
        },
        {
          "name": "Компания_41/Balance_20240331.xlsx",
          "company": "Компания 41",
          "period": "2024-03-31",
          "periodLabel": "31.03.2024",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_41/Receivables_2024_Q1.xlsx",
          "company": "Компания 41",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_42/OSV_2024_Q2.xlsx",
          "company": "Компания 42",
          "period": "2024-Q2",
          "periodLabel": "II квартал 2024",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "архив выгрузок"
        },
        {
          "name": "Компания_42/PnL_2024_Q2.xlsx",
          "company": "Компания 42",
          "period": "2024-Q2",
          "periodLabel": "II квартал 2024",
          "type": "ОФР",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_42/Balance_20240630.xlsx",
          "company": "Компания 42",
          "period": "2024-06-30",
          "periodLabel": "30.06.2024",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_42/Receivables_2024_Q2.xlsx",
          "company": "Компания 42",
          "period": "2024-Q2",
          "periodLabel": "II квартал 2024",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_42/Inventory_2024_05.csv",
          "company": "Компания 42",
          "period": "2024-05",
          "periodLabel": "Май 2024",
          "type": "Запасы",
          "format": "csv",
          "status": "mapping",
          "mappingHint": "Подтвердите коды складов и единицы измерения",
          "origin": "склад"
        },
        {
          "name": "Компания_42/Loans_2024_04.txt",
          "company": "Компания 42",
          "period": "2024-04",
          "periodLabel": "Апрель 2024",
          "type": "Прочее",
          "format": "txt",
          "status": "mapping",
          "mappingHint": "Разметьте столбцы задолженности",
          "origin": "кредитный отдел"
        },
        {
          "name": "Компания_42/Cashflow_2024_Q2.xlsx",
          "company": "Компания 42",
          "period": "2024-Q2",
          "periodLabel": "II квартал 2024",
          "type": "Прочее",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_43/OSV_2023_Q4.xlsx",
          "company": "Компания 43",
          "period": "2023-Q4",
          "periodLabel": "IV квартал 2023",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_43/PnL_2023_Q4.csv",
          "company": "Компания 43",
          "period": "2023-Q4",
          "periodLabel": "IV квартал 2023",
          "type": "ОФР",
          "format": "csv",
          "status": "recognized",
          "origin": "почта бухгалтера"
        },
        {
          "name": "Компания_43/Balance_20231231.xlsx",
          "company": "Компания 43",
          "period": "2023-12-31",
          "periodLabel": "31.12.2023",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_43/Receivables_2023_Q4.xlsx",
          "company": "Компания 43",
          "period": "2023-Q4",
          "periodLabel": "IV квартал 2023",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_44/OSV_2023_Q3.xlsx",
          "company": "Компания 44",
          "period": "2023-Q3",
          "periodLabel": "III квартал 2023",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_44/PnL_2023_Q3.xlsx",
          "company": "Компания 44",
          "period": "2023-Q3",
          "periodLabel": "III квартал 2023",
          "type": "ОФР",
          "format": "xlsx",
          "status": "recognized",
          "origin": "почта бухгалтера"
        },
        {
          "name": "Компания_44/Balance_20230930.xlsx",
          "company": "Компания 44",
          "period": "2023-09-30",
          "periodLabel": "30.09.2023",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "архив выгрузок"
        },
        {
          "name": "Компания_44/Receivables_2023_Q3.xlsx",
          "company": "Компания 44",
          "period": "2023-Q3",
          "periodLabel": "III квартал 2023",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_44/Inventory_2023_08.csv",
          "company": "Компания 44",
          "period": "2023-08",
          "periodLabel": "Август 2023",
          "type": "Запасы",
          "format": "csv",
          "status": "mapping",
          "mappingHint": "Подтвердите коды складов и единицы измерения",
          "origin": "склад"
        },
        {
          "name": "Компания_44/Projects_2023.csv",
          "company": "Компания 44",
          "period": "2023",
          "periodLabel": "2023",
          "type": "Прочее",
          "format": "csv",
          "status": "mapping",
          "mappingHint": "Определите тип отчёта для проектных данных",
          "origin": "проектный офис"
        },
        {
          "name": "Компания_45/OSV_2024_Q1.xlsx",
          "company": "Компания 45",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "архив выгрузок"
        },
        {
          "name": "Компания_45/PnL_2024_Q1.csv",
          "company": "Компания 45",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "ОФР",
          "format": "csv",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_45/Balance_20240331.xlsx",
          "company": "Компания 45",
          "period": "2024-03-31",
          "periodLabel": "31.03.2024",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_45/Receivables_2024_Q1.xlsx",
          "company": "Компания 45",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_45/Legal_2024.csv",
          "company": "Компания 45",
          "period": "2024",
          "periodLabel": "2024",
          "type": "Юр.события",
          "format": "csv",
          "status": "recognized",
          "origin": "юридический отдел"
        },
        {
          "name": "Компания_45/Cashflow_2024_Q1.xlsx",
          "company": "Компания 45",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "Прочее",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_46/OSV_2024_Q2.xlsx",
          "company": "Компания 46",
          "period": "2024-Q2",
          "periodLabel": "II квартал 2024",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_46/PnL_2024_Q2.xlsx",
          "company": "Компания 46",
          "period": "2024-Q2",
          "periodLabel": "II квартал 2024",
          "type": "ОФР",
          "format": "xlsx",
          "status": "recognized",
          "origin": "почта бухгалтера"
        },
        {
          "name": "Компания_46/Balance_20240630.xlsx",
          "company": "Компания 46",
          "period": "2024-06-30",
          "periodLabel": "30.06.2024",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_46/Receivables_2024_Q2.xlsx",
          "company": "Компания 46",
          "period": "2024-Q2",
          "periodLabel": "II квартал 2024",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_46/Inventory_2024_05.csv",
          "company": "Компания 46",
          "period": "2024-05",
          "periodLabel": "Май 2024",
          "type": "Запасы",
          "format": "csv",
          "status": "mapping",
          "mappingHint": "Подтвердите коды складов и единицы измерения",
          "origin": "склад"
        },
        {
          "name": "Компания_47/OSV_2023_Q4.xlsx",
          "company": "Компания 47",
          "period": "2023-Q4",
          "periodLabel": "IV квартал 2023",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_47/PnL_2023_Q4.csv",
          "company": "Компания 47",
          "period": "2023-Q4",
          "periodLabel": "IV квартал 2023",
          "type": "ОФР",
          "format": "csv",
          "status": "recognized",
          "origin": "почта бухгалтера"
        },
        {
          "name": "Компания_47/Balance_20231231.xlsx",
          "company": "Компания 47",
          "period": "2023-12-31",
          "periodLabel": "31.12.2023",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_47/Receivables_2023_Q4.xlsx",
          "company": "Компания 47",
          "period": "2023-Q4",
          "periodLabel": "IV квартал 2023",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_48/OSV_2023_Q3.xlsx",
          "company": "Компания 48",
          "period": "2023-Q3",
          "periodLabel": "III квартал 2023",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "архив выгрузок"
        },
        {
          "name": "Компания_48/PnL_2023_Q3.xlsx",
          "company": "Компания 48",
          "period": "2023-Q3",
          "periodLabel": "III квартал 2023",
          "type": "ОФР",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_48/Balance_20230930.xlsx",
          "company": "Компания 48",
          "period": "2023-09-30",
          "periodLabel": "30.09.2023",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "архив выгрузок"
        },
        {
          "name": "Компания_48/Receivables_2023_Q3.xlsx",
          "company": "Компания 48",
          "period": "2023-Q3",
          "periodLabel": "III квартал 2023",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_48/Inventory_2023_08.csv",
          "company": "Компания 48",
          "period": "2023-08",
          "periodLabel": "Август 2023",
          "type": "Запасы",
          "format": "csv",
          "status": "mapping",
          "mappingHint": "Подтвердите коды складов и единицы измерения",
          "origin": "склад"
        },
        {
          "name": "Компания_48/Projects_2023.csv",
          "company": "Компания 48",
          "period": "2023",
          "periodLabel": "2023",
          "type": "Прочее",
          "format": "csv",
          "status": "mapping",
          "mappingHint": "Определите тип отчёта для проектных данных",
          "origin": "проектный офис"
        },
        {
          "name": "Компания_48/Cashflow_2023_Q3.xlsx",
          "company": "Компания 48",
          "period": "2023-Q3",
          "periodLabel": "III квартал 2023",
          "type": "Прочее",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_49/OSV_2024_Q1.xlsx",
          "company": "Компания 49",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_49/PnL_2024_Q1.csv",
          "company": "Компания 49",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "ОФР",
          "format": "csv",
          "status": "recognized",
          "origin": "почта бухгалтера"
        },
        {
          "name": "Компания_49/Balance_20240331.xlsx",
          "company": "Компания 49",
          "period": "2024-03-31",
          "periodLabel": "31.03.2024",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_49/Receivables_2024_Q1.xlsx",
          "company": "Компания 49",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_49/Loans_2024_01.txt",
          "company": "Компания 49",
          "period": "2024-01",
          "periodLabel": "Январь 2024",
          "type": "Прочее",
          "format": "txt",
          "status": "mapping",
          "mappingHint": "Разметьте столбцы задолженности",
          "origin": "кредитный отдел"
        },
        {
          "name": "Компания_50/OSV_2024_Q2.xlsx",
          "company": "Компания 50",
          "period": "2024-Q2",
          "periodLabel": "II квартал 2024",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_50/PnL_2024_Q2.xlsx",
          "company": "Компания 50",
          "period": "2024-Q2",
          "periodLabel": "II квартал 2024",
          "type": "ОФР",
          "format": "xlsx",
          "status": "recognized",
          "origin": "почта бухгалтера"
        },
        {
          "name": "Компания_50/PnL_2024_Q2_v2.xlsx",
          "company": "Компания 50",
          "period": "2024-Q2",
          "periodLabel": "II квартал 2024",
          "type": "ОФР",
          "format": "xlsx",
          "status": "duplicate",
          "duplicateGroup": "Компания_50_PnL_2024_Q2",
          "origin": "повторная выгрузка"
        },
        {
          "name": "Компания_50/Balance_20240630.xlsx",
          "company": "Компания 50",
          "period": "2024-06-30",
          "periodLabel": "30.06.2024",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_50/Receivables_2024_Q2.xlsx",
          "company": "Компания 50",
          "period": "2024-Q2",
          "periodLabel": "II квартал 2024",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_50/Inventory_2024_05.csv",
          "company": "Компания 50",
          "period": "2024-05",
          "periodLabel": "Май 2024",
          "type": "Запасы",
          "format": "csv",
          "status": "mapping",
          "mappingHint": "Подтвердите коды складов и единицы измерения",
          "origin": "склад"
        },
        {
          "name": "Компания_50/Legal_2024.csv",
          "company": "Компания 50",
          "period": "2024",
          "periodLabel": "2024",
          "type": "Юр.события",
          "format": "csv",
          "status": "recognized",
          "origin": "юридический отдел"
        },
        {
          "name": "Компания_51/OSV_2023_Q4.xlsx",
          "company": "Компания 51",
          "period": "2023-Q4",
          "periodLabel": "IV квартал 2023",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "архив выгрузок"
        },
        {
          "name": "Компания_51/PnL_2023_Q4.csv",
          "company": "Компания 51",
          "period": "2023-Q4",
          "periodLabel": "IV квартал 2023",
          "type": "ОФР",
          "format": "csv",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_51/Balance_20231231.xlsx",
          "company": "Компания 51",
          "period": "2023-12-31",
          "periodLabel": "31.12.2023",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_51/Receivables_2023_Q4.xlsx",
          "company": "Компания 51",
          "period": "2023-Q4",
          "periodLabel": "IV квартал 2023",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_51/Cashflow_2023_Q4.xlsx",
          "company": "Компания 51",
          "period": "2023-Q4",
          "periodLabel": "IV квартал 2023",
          "type": "Прочее",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_52/OSV_2023_Q3.xlsx",
          "company": "Компания 52",
          "period": "2023-Q3",
          "periodLabel": "III квартал 2023",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_52/PnL_2023_Q3.xlsx",
          "company": "Компания 52",
          "period": "2023-Q3",
          "periodLabel": "III квартал 2023",
          "type": "ОФР",
          "format": "xlsx",
          "status": "recognized",
          "origin": "почта бухгалтера"
        },
        {
          "name": "Компания_52/Balance_20230930.xlsx",
          "company": "Компания 52",
          "period": "2023-09-30",
          "periodLabel": "30.09.2023",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "архив выгрузок"
        },
        {
          "name": "Компания_52/Receivables_2023_Q3.xlsx",
          "company": "Компания 52",
          "period": "2023-Q3",
          "periodLabel": "III квартал 2023",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_52/Inventory_2023_08.csv",
          "company": "Компания 52",
          "period": "2023-08",
          "periodLabel": "Август 2023",
          "type": "Запасы",
          "format": "csv",
          "status": "mapping",
          "mappingHint": "Подтвердите коды складов и единицы измерения",
          "origin": "склад"
        },
        {
          "name": "Компания_52/Projects_2023.csv",
          "company": "Компания 52",
          "period": "2023",
          "periodLabel": "2023",
          "type": "Прочее",
          "format": "csv",
          "status": "mapping",
          "mappingHint": "Определите тип отчёта для проектных данных",
          "origin": "проектный офис"
        },
        {
          "name": "Компания_53/OSV_2024_Q1.xlsx",
          "company": "Компания 53",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_53/PnL_2024_Q1.csv",
          "company": "Компания 53",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "ОФР",
          "format": "csv",
          "status": "recognized",
          "origin": "почта бухгалтера"
        },
        {
          "name": "Компания_53/Balance_20240331.xlsx",
          "company": "Компания 53",
          "period": "2024-03-31",
          "periodLabel": "31.03.2024",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_53/Receivables_2024_Q1.xlsx",
          "company": "Компания 53",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_54/OSV_2024_Q2.xlsx",
          "company": "Компания 54",
          "period": "2024-Q2",
          "periodLabel": "II квартал 2024",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "архив выгрузок"
        },
        {
          "name": "Компания_54/PnL_2024_Q2.xlsx",
          "company": "Компания 54",
          "period": "2024-Q2",
          "periodLabel": "II квартал 2024",
          "type": "ОФР",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_54/Balance_20240630.xlsx",
          "company": "Компания 54",
          "period": "2024-06-30",
          "periodLabel": "30.06.2024",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_54/Receivables_2024_Q2.xlsx",
          "company": "Компания 54",
          "period": "2024-Q2",
          "periodLabel": "II квартал 2024",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_54/Inventory_2024_05.csv",
          "company": "Компания 54",
          "period": "2024-05",
          "periodLabel": "Май 2024",
          "type": "Запасы",
          "format": "csv",
          "status": "mapping",
          "mappingHint": "Подтвердите коды складов и единицы измерения",
          "origin": "склад"
        },
        {
          "name": "Компания_54/Cashflow_2024_Q2.xlsx",
          "company": "Компания 54",
          "period": "2024-Q2",
          "periodLabel": "II квартал 2024",
          "type": "Прочее",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_55/OSV_2023_Q4.xlsx",
          "company": "Компания 55",
          "period": "2023-Q4",
          "periodLabel": "IV квартал 2023",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_55/PnL_2023_Q4.csv",
          "company": "Компания 55",
          "period": "2023-Q4",
          "periodLabel": "IV квартал 2023",
          "type": "ОФР",
          "format": "csv",
          "status": "recognized",
          "origin": "почта бухгалтера"
        },
        {
          "name": "Компания_55/Balance_20231231.xlsx",
          "company": "Компания 55",
          "period": "2023-12-31",
          "periodLabel": "31.12.2023",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_55/Receivables_2023_Q4.xlsx",
          "company": "Компания 55",
          "period": "2023-Q4",
          "periodLabel": "IV квартал 2023",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_55/Legal_2023.csv",
          "company": "Компания 55",
          "period": "2023",
          "periodLabel": "2023",
          "type": "Юр.события",
          "format": "csv",
          "status": "recognized",
          "origin": "юридический отдел"
        },
        {
          "name": "Компания_56/OSV_2023_Q3.xlsx",
          "company": "Компания 56",
          "period": "2023-Q3",
          "periodLabel": "III квартал 2023",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_56/PnL_2023_Q3.xlsx",
          "company": "Компания 56",
          "period": "2023-Q3",
          "periodLabel": "III квартал 2023",
          "type": "ОФР",
          "format": "xlsx",
          "status": "recognized",
          "origin": "почта бухгалтера"
        },
        {
          "name": "Компания_56/Balance_20230930.xlsx",
          "company": "Компания 56",
          "period": "2023-09-30",
          "periodLabel": "30.09.2023",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "архив выгрузок"
        },
        {
          "name": "Компания_56/Receivables_2023_Q3.xlsx",
          "company": "Компания 56",
          "period": "2023-Q3",
          "periodLabel": "III квартал 2023",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_56/Inventory_2023_08.csv",
          "company": "Компания 56",
          "period": "2023-08",
          "periodLabel": "Август 2023",
          "type": "Запасы",
          "format": "csv",
          "status": "mapping",
          "mappingHint": "Подтвердите коды складов и единицы измерения",
          "origin": "склад"
        },
        {
          "name": "Компания_56/Projects_2023.csv",
          "company": "Компания 56",
          "period": "2023",
          "periodLabel": "2023",
          "type": "Прочее",
          "format": "csv",
          "status": "mapping",
          "mappingHint": "Определите тип отчёта для проектных данных",
          "origin": "проектный офис"
        },
        {
          "name": "Компания_56/Loans_2023_07.txt",
          "company": "Компания 56",
          "period": "2023-07",
          "periodLabel": "Июль 2023",
          "type": "Прочее",
          "format": "txt",
          "status": "mapping",
          "mappingHint": "Разметьте столбцы задолженности",
          "origin": "кредитный отдел"
        },
        {
          "name": "Компания_57/OSV_2024_Q1.xlsx",
          "company": "Компания 57",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "архив выгрузок"
        },
        {
          "name": "Компания_57/PnL_2024_Q1.csv",
          "company": "Компания 57",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "ОФР",
          "format": "csv",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_57/Balance_20240331.xlsx",
          "company": "Компания 57",
          "period": "2024-03-31",
          "periodLabel": "31.03.2024",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_57/Receivables_2024_Q1.xlsx",
          "company": "Компания 57",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_57/Cashflow_2024_Q1.xlsx",
          "company": "Компания 57",
          "period": "2024-Q1",
          "periodLabel": "I квартал 2024",
          "type": "Прочее",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_58/OSV_2024_Q2.xlsx",
          "company": "Компания 58",
          "period": "2024-Q2",
          "periodLabel": "II квартал 2024",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_58/PnL_2024_Q2.xlsx",
          "company": "Компания 58",
          "period": "2024-Q2",
          "periodLabel": "II квартал 2024",
          "type": "ОФР",
          "format": "xlsx",
          "status": "recognized",
          "origin": "почта бухгалтера"
        },
        {
          "name": "Компания_58/Balance_20240630.xlsx",
          "company": "Компания 58",
          "period": "2024-06-30",
          "periodLabel": "30.06.2024",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_58/Receivables_2024_Q2.xlsx",
          "company": "Компания 58",
          "period": "2024-Q2",
          "periodLabel": "II квартал 2024",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_58/Inventory_2024_05.csv",
          "company": "Компания 58",
          "period": "2024-05",
          "periodLabel": "Май 2024",
          "type": "Запасы",
          "format": "csv",
          "status": "mapping",
          "mappingHint": "Подтвердите коды складов и единицы измерения",
          "origin": "склад"
        },
        {
          "name": "Компания_59/OSV_2023_Q4.xlsx",
          "company": "Компания 59",
          "period": "2023-Q4",
          "periodLabel": "IV квартал 2023",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_59/PnL_2023_Q4.csv",
          "company": "Компания 59",
          "period": "2023-Q4",
          "periodLabel": "IV квартал 2023",
          "type": "ОФР",
          "format": "csv",
          "status": "recognized",
          "origin": "почта бухгалтера"
        },
        {
          "name": "Компания_59/Balance_20231231.xlsx",
          "company": "Компания 59",
          "period": "2023-12-31",
          "periodLabel": "31.12.2023",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "папка клиента"
        },
        {
          "name": "Компания_59/Receivables_2023_Q4.xlsx",
          "company": "Компания 59",
          "period": "2023-Q4",
          "periodLabel": "IV квартал 2023",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_60/OSV_2023_Q3.xlsx",
          "company": "Компания 60",
          "period": "2023-Q3",
          "periodLabel": "III квартал 2023",
          "type": "ОСВ",
          "format": "xlsx",
          "status": "recognized",
          "origin": "архив выгрузок"
        },
        {
          "name": "Компания_60/PnL_2023_Q3.xlsx",
          "company": "Компания 60",
          "period": "2023-Q3",
          "periodLabel": "III квартал 2023",
          "type": "ОФР",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_60/PnL_2023_Q3_v2.xlsx",
          "company": "Компания 60",
          "period": "2023-Q3",
          "periodLabel": "III квартал 2023",
          "type": "ОФР",
          "format": "xlsx",
          "status": "duplicate",
          "duplicateGroup": "Компания_60_PnL_2023_Q3",
          "origin": "повторная выгрузка"
        },
        {
          "name": "Компания_60/Balance_20230930.xlsx",
          "company": "Компания 60",
          "period": "2023-09-30",
          "periodLabel": "30.09.2023",
          "type": "Баланс",
          "format": "xlsx",
          "status": "recognized",
          "origin": "архив выгрузок"
        },
        {
          "name": "Компания_60/Receivables_2023_Q3.xlsx",
          "company": "Компания 60",
          "period": "2023-Q3",
          "periodLabel": "III квартал 2023",
          "type": "Дебиторка",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        },
        {
          "name": "Компания_60/Inventory_2023_08.csv",
          "company": "Компания 60",
          "period": "2023-08",
          "periodLabel": "Август 2023",
          "type": "Запасы",
          "format": "csv",
          "status": "mapping",
          "mappingHint": "Подтвердите коды складов и единицы измерения",
          "origin": "склад"
        },
        {
          "name": "Компания_60/Projects_2023.csv",
          "company": "Компания 60",
          "period": "2023",
          "periodLabel": "2023",
          "type": "Прочее",
          "format": "csv",
          "status": "mapping",
          "mappingHint": "Определите тип отчёта для проектных данных",
          "origin": "проектный офис"
        },
        {
          "name": "Компания_60/Legal_2023.csv",
          "company": "Компания 60",
          "period": "2023",
          "periodLabel": "2023",
          "type": "Юр.события",
          "format": "csv",
          "status": "recognized",
          "origin": "юридический отдел"
        },
        {
          "name": "Компания_60/Cashflow_2023_Q3.xlsx",
          "company": "Компания 60",
          "period": "2023-Q3",
          "periodLabel": "III квартал 2023",
          "type": "Прочее",
          "format": "xlsx",
          "status": "recognized",
          "origin": "финансовый отдел"
        }
      ],
      "mappingSteps": [
        {
          "title": "Проверьте компанию/ИНН",
          "description": "Система распределила 60 компаний по папкам и ИНН автоматически.",
          "suggestion": "60 компаний в группе"
        },
        {
          "title": "Проверьте тип отчёта",
          "description": "По шаблонам заголовков определены ОСВ, ОФР, Баланс, дебиторка, запасы и доп. данные.",
          "suggestion": "Типы отчётов сопоставлены автоматически"
        },
        {
          "title": "Проверьте период",
          "description": "Дата и период распознаны по 2023–2024 годам, включая месяцы и кварталы.",
          "suggestion": "Периоды: 2023–2024"
        }
      ],
      "duplicateResolutions": [
        {
          "group": "Компания_10_PnL_2024_Q2",
          "files": [
            "Компания_10/PnL_2024_Q2.xlsx",
            "Компания_10/PnL_2024_Q2_v2.xlsx"
          ],
          "messages": {
            "keepNew": "Обновлённый отчёт Компания 10 сохранён, старая версия в архиве.",
            "keepOld": "Сохраняем исходный P&L Компания 10, повторную выгрузку убрали.",
            "merge": "Склейка версий Компания 10 завершена. Строк объединено: 230."
          }
        },
        {
          "group": "Компания_20_PnL_2023_Q3",
          "files": [
            "Компания_20/PnL_2023_Q3.xlsx",
            "Компания_20/PnL_2023_Q3_v2.xlsx"
          ],
          "messages": {
            "keepNew": "Обновлённый отчёт Компания 20 сохранён, старая версия в архиве.",
            "keepOld": "Сохраняем исходный P&L Компания 20, повторную выгрузку убрали.",
            "merge": "Склейка версий Компания 20 завершена. Строк объединено: 240."
          }
        },
        {
          "group": "Компания_30_PnL_2024_Q2",
          "files": [
            "Компания_30/PnL_2024_Q2.xlsx",
            "Компания_30/PnL_2024_Q2_v2.xlsx"
          ],
          "messages": {
            "keepNew": "Обновлённый отчёт Компания 30 сохранён, старая версия в архиве.",
            "keepOld": "Сохраняем исходный P&L Компания 30, повторную выгрузку убрали.",
            "merge": "Склейка версий Компания 30 завершена. Строк объединено: 250."
          }
        },
        {
          "group": "Компания_40_PnL_2023_Q3",
          "files": [
            "Компания_40/PnL_2023_Q3.xlsx",
            "Компания_40/PnL_2023_Q3_v2.xlsx"
          ],
          "messages": {
            "keepNew": "Обновлённый отчёт Компания 40 сохранён, старая версия в архиве.",
            "keepOld": "Сохраняем исходный P&L Компания 40, повторную выгрузку убрали.",
            "merge": "Склейка версий Компания 40 завершена. Строк объединено: 260."
          }
        },
        {
          "group": "Компания_50_PnL_2024_Q2",
          "files": [
            "Компания_50/PnL_2024_Q2.xlsx",
            "Компания_50/PnL_2024_Q2_v2.xlsx"
          ],
          "messages": {
            "keepNew": "Обновлённый отчёт Компания 50 сохранён, старая версия в архиве.",
            "keepOld": "Сохраняем исходный P&L Компания 50, повторную выгрузку убрали.",
            "merge": "Склейка версий Компания 50 завершена. Строк объединено: 270."
          }
        },
        {
          "group": "Компания_60_PnL_2023_Q3",
          "files": [
            "Компания_60/PnL_2023_Q3.xlsx",
            "Компания_60/PnL_2023_Q3_v2.xlsx"
          ],
          "messages": {
            "keepNew": "Обновлённый отчёт Компания 60 сохранён, старая версия в архиве.",
            "keepOld": "Сохраняем исходный P&L Компания 60, повторную выгрузку убрали.",
            "merge": "Склейка версий Компания 60 завершена. Строк объединено: 280."
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
      "companies": 60,
      "files": 331,
      "period": "2023–2024, смешанные выгрузки",
      "eliminatedPairs": 28
    },
    "totals": {
      "before": {
        "revenue": 684000000,
        "cogs": 512000000,
        "grossMargin": 172000000,
        "interestPayable": 12800000,
        "interestReceivable": 12800000,
        "intraRevenue": 48000000,
        "intraCogs": 48000000,
        "note": "До исключения 60 компаний дают завышенные обороты и проценты"
      },
      "after": {
        "revenue": 636000000,
        "cogs": 464000000,
        "grossMargin": 172000000,
        "interestPayable": 0,
        "interestReceivable": 0,
        "note": "Исключения убрали 48 млн внутригрупповой выручки и проценты"
      }
    },
    "eliminationEntries": [
      {
        "pair": "Компания 12 → Компания 27",
        "description": "Поставка оборудования",
        "amount": 18500000,
        "metric": "Выручка/Себестоимость"
      },
      {
        "pair": "Компания 08 ↔ Компания 19",
        "description": "Совместные услуги",
        "amount": 12800000,
        "metric": "Выручка/Прочие расходы"
      },
      {
        "pair": "Компания 33 → Компания 05",
        "description": "Проценты по внутригрупповому займу",
        "amount": 6400000,
        "metric": "Проценты к получению/уплате"
      },
      {
        "pair": "Компания 41 ↔ Компания 52",
        "description": "Корректировка по остаткам",
        "amount": 9200000,
        "metric": "Консервативная корректировка по большей сумме"
      },
      {
        "pair": "Компания 14 → Компания 44",
        "description": "Передача сырья",
        "amount": 8700000,
        "metric": "Выручка/Себестоимость"
      },
      {
        "pair": "Компания 60 ↔ Компания 11",
        "description": "Перераспределение лицензий",
        "amount": 6200000,
        "metric": "Прочие доходы/расходы"
      }
    ],
    "infoNotes": [
      "Баланс — на дату. ОФР — за период. Аналогия: камера мгновенной и средней скорости.",
      "Снятие внутригрупповых оборотов даёт честный результат группы."
    ],
    "ruleHints": [
      "Исключаем проценты к уплате и к получению по внутригрупповым займам.",
      "Консервативная корректировка: при расхождениях берём большую сумму.",
      "Правило баланса: нет двойного учёта между дочерними компаниями."
    ]
  },
  "detectors": {
    "receivables": [
      {
        "counterparty": "Торговый дом \"Север\"",
        "company": "Компания 03",
        "days": 240,
        "amount": 7200000,
        "source": "Receivables_2024_Q1.xlsx"
      },
      {
        "counterparty": "ООО \"Метеор\"",
        "company": "Компания 18",
        "days": 305,
        "amount": 9800000,
        "source": "Receivables_2024_Q2.xlsx"
      },
      {
        "counterparty": "ЗАО \"Партнёр\"",
        "company": "Компания 25",
        "days": 188,
        "amount": 6100000,
        "source": "Receivables_2023_Q4.xlsx"
      },
      {
        "counterparty": "ООО \"Орион\"",
        "company": "Компания 34",
        "days": 330,
        "amount": 11200000,
        "source": "Receivables_2023_Q3.xlsx"
      },
      {
        "counterparty": "ИП Сафронов",
        "company": "Компания 42",
        "days": 145,
        "amount": 4500000,
        "source": "Receivables_2024_Q1.xlsx"
      },
      {
        "counterparty": "АО \"Логистика\"",
        "company": "Компания 51",
        "days": 276,
        "amount": 8800000,
        "source": "Receivables_2024_Q2.xlsx"
      },
      {
        "counterparty": "ООО \"Квант\"",
        "company": "Компания 57",
        "days": 365,
        "amount": 12500000,
        "source": "Receivables_2023_Q4.xlsx"
      },
      {
        "counterparty": "ПАО \"Синтез\"",
        "company": "Компания 60",
        "days": 198,
        "amount": 5400000,
        "source": "Receivables_2023_Q3.xlsx"
      }
    ],
    "inventory": [
      {
        "item": "Партия кабеля КБ-14",
        "company": "Компания 18",
        "issues": [
          "долго лежит"
        ],
        "amount": 2250000,
        "source": "Inventory_2024_05.csv"
      },
      {
        "item": "Компоненты серии X17",
        "company": "Компания 12",
        "issues": [
          "истёк срок"
        ],
        "amount": 1840000,
        "source": "Inventory_2024_02.csv"
      },
      {
        "item": "Готовая продукция L2",
        "company": "Компания 25",
        "issues": [
          "брак",
          "долго лежит"
        ],
        "amount": 2760000,
        "source": "Inventory_2023_11.csv"
      },
      {
        "item": "Материалы проекта R",
        "company": "Компания 33",
        "issues": [
          "долго лежит"
        ],
        "amount": 1610000,
        "source": "Inventory_2023_08.csv"
      },
      {
        "item": "Партия микросхем M9",
        "company": "Компания 41",
        "issues": [
          "брак"
        ],
        "amount": 2380000,
        "source": "Inventory_2024_02.csv"
      },
      {
        "item": "Резервные модули S3",
        "company": "Компания 54",
        "issues": [
          "долго лежит",
          "истёк срок"
        ],
        "amount": 3120000,
        "source": "Inventory_2023_11.csv"
      }
    ],
    "legend": {
      "receivables": "Дебиторка",
      "inventory": "Запасы"
    }
  },
  "liquidation": {
    "before": {
      "equity": 182000000,
      "cash": 48500000,
      "assets": [
        {
          "label": "Дебиторская задолженность",
          "amount": 84500000
        },
        {
          "label": "Запасы",
          "amount": 67400000
        },
        {
          "label": "Основные средства",
          "amount": 123500000
        },
        {
          "label": "Прочие активы",
          "amount": 28500000
        }
      ]
    },
    "adjustments": [
      {
        "label": "Списание дебитора ООО \"Метеор\"",
        "impact": -9800000,
        "reason": ">300 дней без оплаты",
        "source": "Receivables_2024_Q2.xlsx"
      },
      {
        "label": "Списание партии КБ-14",
        "impact": -2250000,
        "reason": "неликвид > 10 месяцев",
        "source": "Inventory_2024_05.csv"
      },
      {
        "label": "Дисконт готовой продукции L2",
        "impact": -1620000,
        "reason": "брак и переоценка",
        "source": "Inventory_2023_11.csv"
      },
      {
        "label": "Резерв по проектам высокого риска",
        "impact": -5400000,
        "reason": "пересмотр денежных потоков",
        "source": "Projects_2024.csv"
      }
    ],
    "after": {
      "equity": 132000000,
      "cash": 62500000,
      "ownerStatement": "Оценка: после очистки собственник может рассчитывать на ~62,5 млн руб. живыми деньгами."
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
        "company": "Компания 03",
        "status": "green",
        "financial": "Платёж дисциплинирован, оборачиваемость 32 дня.",
        "legal": "Нет активных судебных дел.",
        "note": "Допустимый лимит 18 млн руб."
      },
      {
        "name": "АО \"Логистика\"",
        "company": "Компания 18",
        "status": "yellow",
        "financial": "Просрочка выросла до 60 дней.",
        "legal": "Исполнительное производство на 4,2 млн руб.",
        "note": "Рекомендация: ужесточить условия поставок."
      },
      {
        "name": "ООО \"Метеор\"",
        "company": "Компания 18",
        "status": "red",
        "financial": "Просрочка 305 дней, резкое падение оборотов.",
        "legal": "Получено уведомление о подготовке к банкротству.",
        "note": "Поставки остановлены, контроль службы безопасности."
      },
      {
        "name": "ЗАО \"Партнёр\"",
        "company": "Компания 25",
        "status": "yellow",
        "financial": "Просрочка 188 дней, есть частичные оплаты.",
        "legal": "Претензионная работа без суда.",
        "note": "Рекомендуем переход на предоплату."
      },
      {
        "name": "ИП Сафронов",
        "company": "Компания 42",
        "status": "green",
        "financial": "Оплата вовремя, обороты растут.",
        "legal": "Нарушений нет.",
        "note": "Можно расширить лимит до 7 млн руб."
      },
      {
        "name": "ПАО \"Синтез\"",
        "company": "Компания 60",
        "status": "yellow",
        "financial": "Промедление платежей до 50 дней.",
        "legal": "Появилась судебная претензия контрагента.",
        "note": "Контроль менеджмента, запрос финансовой отчётности."
      },
      {
        "name": "ООО \"Квант\"",
        "company": "Компания 57",
        "status": "red",
        "financial": "Просрочка 365 дней, высокая долговая нагрузка.",
        "legal": "Инициирована процедура наблюдения.",
        "note": "Договор расторгнут, требуется работа с обеспечением."
      },
      {
        "name": "АО \"Регионстрой\"",
        "company": "Компания 21",
        "status": "green",
        "financial": "Стабильные платежи, маржа 18%.",
        "legal": "Нет негативных событий.",
        "note": "Расширяем лимит до 22 млн руб."
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
