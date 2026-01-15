// ==========================================
// 0. BACKUP DATA (Safety Net)
// ==========================================
const BACKUP_DATA = [
  {
    "generic_id": "G01",
    "generic_name": "Acetaminophen",
    "class": "Analgesic",
    "is_orderable": true,
    "composition": [
      "Acetaminophen"
    ],
    "rules": [
      {
        "rule_id": "R01",
        "indication": "General",
        "min_age": 1,
        "max_age": 18,
        "calc_mode": "BW",
        "dose_min": 10,
        "dose_max": 15,
        "unit": "mg",
        "max_s_dose": 500,
        "freq": "QID"
      }
    ],
    "products": [
      {
        "prod_id": "P01",
        "trade_name": "Anti-phen",
        "is_combo": false,
        "strength_display": "24",
        "strength_unit": "mg/mL",
        "form": "syrup",
        "calc_concentration": 24,
        "dispense_unit": "mL"
      },
      {
        "prod_id": "P02",
        "trade_name": "Acetal",
        "is_combo": false,
        "strength_display": "500",
        "strength_unit": "mg",
        "form": "tab",
        "calc_concentration": 500,
        "dispense_unit": "tab"
      }
    ]
  },
  {
    "generic_id": "G02",
    "generic_name": "Ibuprofen",
    "class": "Analgesic",
    "is_orderable": true,
    "composition": [
      "Ibuprofen"
    ],
    "rules": [
      {
        "rule_id": "R02",
        "indication": "General",
        "min_age": 1,
        "max_age": 18,
        "calc_mode": "BW",
        "dose_min": 5,
        "dose_max": 10,
        "unit": "mg",
        "max_s_dose": 400,
        "freq": "QID"
      }
    ],
    "products": [
      {
        "prod_id": "P03",
        "trade_name": "Idofen",
        "is_combo": false,
        "strength_display": "20",
        "strength_unit": "mg/mL",
        "form": "syrup",
        "calc_concentration": 20,
        "dispense_unit": "mL"
      },
      {
        "prod_id": "P04",
        "trade_name": "Purfen",
        "is_combo": false,
        "strength_display": "400",
        "strength_unit": "mg",
        "form": "tab",
        "calc_concentration": 400,
        "dispense_unit": "tab"
      }
    ]
  },
  {
    "generic_id": "G03",
    "generic_name": "Amoxicillin/clavulanic acid",
    "class": "Antibiotic",
    "is_orderable": true,
    "composition": [
      "Amoxicillin",
      "clavulanic acid"
    ],
    "rules": [
      {
        "rule_id": "R03",
        "indication": "Standard",
        "min_age": 1,
        "max_age": 18,
        "calc_mode": "BW",
        "dose_min": 20,
        "dose_max": 23,
        "unit": "mg",
        "max_s_dose": 875,
        "freq": "BID"
      },
      {
        "rule_id": "R04",
        "indication": "High Dose",
        "min_age": 1,
        "max_age": 18,
        "calc_mode": "BW",
        "dose_min": 40,
        "dose_max": 45,
        "unit": "mg",
        "max_s_dose": 875,
        "freq": "BID"
      }
    ],
    "products": [
      {
        "prod_id": "P05",
        "trade_name": "Augmentin",
        "is_combo": false,
        "strength_display": "80/11.4",
        "strength_unit": "mg/mL",
        "form": "syrup",
        "calc_concentration": 80,
        "dispense_unit": "mL"
      },
      {
        "prod_id": "P48",
        "trade_name": "Curam",
        "is_combo": false,
        "strength_display": "875/125",
        "strength_unit": "mg",
        "form": "tab",
        "calc_concentration": 875,
        "dispense_unit": "tab"
      }
    ]
  },
  {
    "generic_id": "G04",
    "generic_name": "Levocetirizine",
    "class": "Antihistamine (II)",
    "is_orderable": true,
    "composition": [
      "Levocetirizine"
    ],
    "rules": [
      {
        "rule_id": "R05",
        "indication": "General",
        "min_age": 1,
        "max_age": 5,
        "calc_mode": "fix",
        "dose_min": 1.25,
        "dose_max": 1.25,
        "unit": "mg",
        "max_s_dose": null,
        "freq": "HS"
      },
      {
        "rule_id": "R06",
        "indication": "General",
        "min_age": 6,
        "max_age": 11,
        "calc_mode": "fix",
        "dose_min": 2.5,
        "dose_max": 2.5,
        "unit": "mg",
        "max_s_dose": null,
        "freq": "HS"
      },
      {
        "rule_id": "R07",
        "indication": "General",
        "min_age": 12,
        "max_age": 18,
        "calc_mode": "fix",
        "dose_min": 5,
        "dose_max": 5,
        "unit": "mg",
        "max_s_dose": null,
        "freq": "HS"
      }
    ],
    "products": [
      {
        "prod_id": "P06",
        "trade_name": "Xyzal",
        "is_combo": false,
        "strength_display": "5",
        "strength_unit": "mg",
        "form": "tab",
        "calc_concentration": 5,
        "dispense_unit": "tab"
      }
    ]
  },
  {
    "generic_id": "G05",
    "generic_name": "Guaifenesin",
    "class": "Cough and Cold Preparation",
    "is_orderable": true,
    "composition": [
      "Guaifenesin"
    ],
    "rules": [
      {
        "rule_id": "R08",
        "indication": "General",
        "min_age": 2,
        "max_age": 5,
        "calc_mode": "fix",
        "dose_min": 50,
        "dose_max": 100,
        "unit": "mg",
        "max_s_dose": null,
        "freq": "QID"
      },
      {
        "rule_id": "R09",
        "indication": "General",
        "min_age": 6,
        "max_age": 11,
        "calc_mode": "fix",
        "dose_min": 100,
        "dose_max": 200,
        "unit": "mg",
        "max_s_dose": null,
        "freq": "QID"
      },
      {
        "rule_id": "R10",
        "indication": "General",
        "min_age": 12,
        "max_age": 18,
        "calc_mode": "fix",
        "dose_min": 200,
        "dose_max": 400,
        "unit": "mg",
        "max_s_dose": null,
        "freq": "QID"
      }
    ],
    "products": [
      {
        "prod_id": "P07",
        "trade_name": "Guaphen",
        "is_combo": false,
        "strength_display": "20",
        "strength_unit": "mg/mL",
        "form": "syrup",
        "calc_concentration": 20,
        "dispense_unit": "mL"
      }
    ]
  },
  {
    "generic_id": "G06",
    "generic_name": "Guaifenesin/Methylephedrine/Chlorpheniramine",
    "class": "Cough and Cold Preparation",
    "is_orderable": false,
    "composition": [
      "Guaifenesin",
      "Methylephedrine",
      "Chlorpheniramine"
    ],
    "rules": [
      {
        "rule_id": "R11",
        "indication": "General",
        "min_age": 6,
        "max_age": 9,
        "calc_mode": "fix",
        "dose_min": 6.5,
        "dose_max": 6.5,
        "unit": "mL",
        "max_s_dose": null,
        "freq": "TID"
      },
      {
        "rule_id": "R12",
        "indication": "General",
        "min_age": 9,
        "max_age": 11,
        "calc_mode": "fix",
        "dose_min": 10,
        "dose_max": 10,
        "unit": "mL",
        "max_s_dose": null,
        "freq": "TID"
      },
      {
        "rule_id": "R13",
        "indication": "General",
        "min_age": 12,
        "max_age": 18,
        "calc_mode": "fix",
        "dose_min": 20,
        "dose_max": 20,
        "unit": "mL",
        "max_s_dose": null,
        "freq": "TID"
      }
    ],
    "products": [
      {
        "prod_id": "P08",
        "trade_name": "Secorine",
        "is_combo": true,
        "strength_display": "5/1/0.1",
        "strength_unit": "mg/mL",
        "form": "syrup",
        "calc_concentration": 1,
        "dispense_unit": "mL"
      }
    ]
  },
  {
    "generic_id": "G07",
    "generic_name": "Ambroxol",
    "class": "Cough and Cold Preparation",
    "is_orderable": true,
    "composition": [
      "Ambroxol"
    ],
    "rules": [
      {
        "rule_id": "R14",
        "indication": "General",
        "min_age": 2,
        "max_age": 5,
        "calc_mode": "fix",
        "dose_min": 7.5,
        "dose_max": 15,
        "unit": "mg",
        "max_s_dose": null,
        "freq": "TID"
      },
      {
        "rule_id": "R15",
        "indication": "General",
        "min_age": 6,
        "max_age": 11,
        "calc_mode": "fix",
        "dose_min": 15,
        "dose_max": 30,
        "unit": "mg",
        "max_s_dose": null,
        "freq": "TID"
      },
      {
        "rule_id": "R16",
        "indication": "General",
        "min_age": 12,
        "max_age": 18,
        "calc_mode": "fix",
        "dose_min": 20,
        "dose_max": 40,
        "unit": "mg",
        "max_s_dose": null,
        "freq": "TID"
      }
    ],
    "products": [
      {
        "prod_id": "P09",
        "trade_name": "Ambroxol",
        "is_combo": false,
        "strength_display": "30",
        "strength_unit": "mg",
        "form": "tab",
        "calc_concentration": 30,
        "dispense_unit": "tab"
      }
    ]
  },
  {
    "generic_id": "G08",
    "generic_name": "Azithromycin",
    "class": "Antibiotic",
    "is_orderable": true,
    "composition": [
      "Azithromycin"
    ],
    "rules": [
      {
        "rule_id": "R17",
        "indication": "General",
        "min_age": 1,
        "max_age": 18,
        "calc_mode": "BW",
        "dose_min": 10,
        "dose_max": 12,
        "unit": "mg",
        "max_s_dose": 500,
        "freq": "QD"
      }
    ],
    "products": [
      {
        "prod_id": "P10",
        "trade_name": "Zithromax",
        "is_combo": false,
        "strength_display": "250",
        "strength_unit": "mg",
        "form": "tab",
        "calc_concentration": 250,
        "dispense_unit": "tab"
      },
      {
        "prod_id": "P11",
        "trade_name": "Zithromax",
        "is_combo": false,
        "strength_display": "40",
        "strength_unit": "mg/mL",
        "form": "suspension",
        "calc_concentration": 40,
        "dispense_unit": "mL"
      }
    ]
  },
  {
    "generic_id": "G09",
    "generic_name": "Cefixime",
    "class": "Antibiotic",
    "is_orderable": true,
    "composition": [
      "Cefixime"
    ],
    "rules": [
      {
        "rule_id": "R18",
        "indication": "General",
        "min_age": 1,
        "max_age": 18,
        "calc_mode": "BW",
        "dose_min": 4,
        "dose_max": 4,
        "unit": "mg",
        "max_s_dose": 200,
        "freq": "Q12H"
      }
    ],
    "products": [
      {
        "prod_id": "P12",
        "trade_name": "Ceficin",
        "is_combo": false,
        "strength_display": "100",
        "strength_unit": "mg",
        "form": "cap",
        "calc_concentration": 100,
        "dispense_unit": "cap"
      }
    ]
  },
  {
    "generic_id": "G10",
    "generic_name": "Cephalexin",
    "class": "Antibiotic",
    "is_orderable": true,
    "composition": [
      "Cephalexin"
    ],
    "rules": [
      {
        "rule_id": "R19",
        "indication": "Standard",
        "min_age": 1,
        "max_age": 18,
        "calc_mode": "BW",
        "dose_min": 6.25,
        "dose_max": 12.5,
        "unit": "mg",
        "max_s_dose": 500,
        "freq": "Q6H"
      },
      {
        "rule_id": "R20",
        "indication": "High Dose",
        "min_age": 1,
        "max_age": 18,
        "calc_mode": "BW",
        "dose_min": 18.75,
        "dose_max": 25,
        "unit": "mg",
        "max_s_dose": 1000,
        "freq": "Q6H"
      }
    ],
    "products": [
      {
        "prod_id": "P13",
        "trade_name": "Ulexin",
        "is_combo": false,
        "strength_display": "25",
        "strength_unit": "mg/mL",
        "form": "syrup",
        "calc_concentration": 25,
        "dispense_unit": "mL"
      }
    ]
  },
  {
    "generic_id": "G11",
    "generic_name": "Cephradine",
    "class": "Antibiotic",
    "is_orderable": true,
    "composition": [
      "Cephradine"
    ],
    "rules": [
      {
        "rule_id": "R21",
        "indication": "General",
        "min_age": 1,
        "max_age": 18,
        "calc_mode": "BW",
        "dose_min": 6.25,
        "dose_max": 12.5,
        "unit": "mg",
        "max_s_dose": 500,
        "freq": "Q6H"
      }
    ],
    "products": [
      {
        "prod_id": "P14",
        "trade_name": "Unifradine",
        "is_combo": false,
        "strength_display": "500",
        "strength_unit": "mg",
        "form": "cap",
        "calc_concentration": 500,
        "dispense_unit": "cap"
      }
    ]
  },
  {
    "generic_id": "G12",
    "generic_name": "Cetirizine",
    "class": "Antihistamine (II)",
    "is_orderable": true,
    "composition": [
      "Cetirizine"
    ],
    "rules": [
      {
        "rule_id": "R22",
        "indication": "General",
        "min_age": 1,
        "max_age": 1,
        "calc_mode": "fix",
        "dose_min": 2.5,
        "dose_max": 2.5,
        "unit": "mg",
        "max_s_dose": null,
        "freq": "HS"
      },
      {
        "rule_id": "R23",
        "indication": "General",
        "min_age": 2,
        "max_age": 5,
        "calc_mode": "fix",
        "dose_min": 5,
        "dose_max": 5,
        "unit": "mg",
        "max_s_dose": null,
        "freq": "HS"
      },
      {
        "rule_id": "R24",
        "indication": "General",
        "min_age": 6,
        "max_age": 18,
        "calc_mode": "fix",
        "dose_min": 10,
        "dose_max": 10,
        "unit": "mg",
        "max_s_dose": null,
        "freq": "HS"
      }
    ],
    "products": [
      {
        "prod_id": "P15",
        "trade_name": "Alltec",
        "is_combo": false,
        "strength_display": "10",
        "strength_unit": "mg",
        "form": "tab",
        "calc_concentration": 10,
        "dispense_unit": "tab"
      },
      {
        "prod_id": "P16",
        "trade_name": "Cetirizine",
        "is_combo": false,
        "strength_display": "1",
        "strength_unit": "mg/mL",
        "form": "soln",
        "calc_concentration": 1,
        "dispense_unit": "mL"
      }
    ]
  },
  {
    "generic_id": "G13",
    "generic_name": "Ciprofloxacin",
    "class": "Antibiotic",
    "is_orderable": true,
    "composition": [
      "Ciprofloxacin"
    ],
    "rules": [
      {
        "rule_id": "R25",
        "indication": "General",
        "min_age": 1,
        "max_age": 18,
        "calc_mode": "BW",
        "dose_min": 10,
        "dose_max": 20,
        "unit": "mg",
        "max_s_dose": 500,
        "freq": "Q12H"
      }
    ],
    "products": [
      {
        "prod_id": "P17",
        "trade_name": "Ciproxin",
        "is_combo": false,
        "strength_display": "250",
        "strength_unit": "mg",
        "form": "tab",
        "calc_concentration": 250,
        "dispense_unit": "tab"
      }
    ]
  },
  {
    "generic_id": "G14",
    "generic_name": "Cyproheptadine",
    "class": "Antihistamine (I)",
    "is_orderable": true,
    "composition": [
      "Cyproheptadine"
    ],
    "rules": [
      {
        "rule_id": "R26",
        "indication": "General",
        "min_age": 2,
        "max_age": 18,
        "calc_mode": "BW",
        "dose_min": 0.08,
        "dose_max": 0.08,
        "unit": "mg",
        "max_s_dose": 4,
        "freq": "TID"
      }
    ],
    "products": [
      {
        "prod_id": "P18",
        "trade_name": "Cypromin",
        "is_combo": false,
        "strength_display": "0.4",
        "strength_unit": "mg/mL",
        "form": "soln",
        "calc_concentration": 0.4,
        "dispense_unit": "mL"
      }
    ]
  },
  {
    "generic_id": "G15",
    "generic_name": "Dexamethasone",
    "class": "Steroids",
    "is_orderable": true,
    "composition": [
      "Dexamethasone"
    ],
    "rules": [
      {
        "rule_id": "R27",
        "indication": "General",
        "min_age": 1,
        "max_age": 18,
        "calc_mode": "BW",
        "dose_min": 0.006,
        "dose_max": 0.085,
        "unit": "mg",
        "max_s_dose": 2,
        "freq": "QID"
      }
    ],
    "products": [
      {
        "prod_id": "P19",
        "trade_name": "Dexazone",
        "is_combo": false,
        "strength_display": "0.5",
        "strength_unit": "mg",
        "form": "tab",
        "calc_concentration": 0.5,
        "dispense_unit": "tab"
      }
    ]
  },
  {
    "generic_id": "G16",
    "generic_name": "Dexchlorpheniramine",
    "class": "Antihistamine (I)",
    "is_orderable": true,
    "composition": [
      "Dexchlorpheniramine"
    ],
    "rules": [
      {
        "rule_id": "R28",
        "indication": "General",
        "min_age": 2,
        "max_age": 5,
        "calc_mode": "fix",
        "dose_min": 0.5,
        "dose_max": 0.5,
        "unit": "mg",
        "max_s_dose": null,
        "freq": "QID"
      },
      {
        "rule_id": "R29",
        "indication": "General",
        "min_age": 6,
        "max_age": 11,
        "calc_mode": "fix",
        "dose_min": 1,
        "dose_max": 1,
        "unit": "mg",
        "max_s_dose": null,
        "freq": "QID"
      },
      {
        "rule_id": "R30",
        "indication": "General",
        "min_age": 12,
        "max_age": 18,
        "calc_mode": "fix",
        "dose_min": 2,
        "dose_max": 2,
        "unit": "mg",
        "max_s_dose": null,
        "freq": "QID"
      }
    ],
    "products": [
      {
        "prod_id": "P20",
        "trade_name": "DEX-CTM",
        "is_combo": false,
        "strength_display": "2",
        "strength_unit": "mg",
        "form": "tab",
        "calc_concentration": 2,
        "dispense_unit": "tab"
      }
    ]
  },
  {
    "generic_id": "G17",
    "generic_name": "Diclofenac",
    "class": "Analgesic",
    "is_orderable": true,
    "composition": [
      "Diclofenac"
    ],
    "rules": [
      {
        "rule_id": "R31",
        "indication": "General",
        "min_age": 12,
        "max_age": 18,
        "calc_mode": "fix",
        "dose_min": 25,
        "dose_max": 25,
        "unit": "mg",
        "max_s_dose": null,
        "freq": "QID"
      }
    ],
    "products": [
      {
        "prod_id": "P21",
        "trade_name": "Flamquit",
        "is_combo": false,
        "strength_display": "25",
        "strength_unit": "mg",
        "form": "tab",
        "calc_concentration": 25,
        "dispense_unit": "tab"
      }
    ]
  },
  {
    "generic_id": "G18",
    "generic_name": "Dicloxacillin",
    "class": "Antibiotic",
    "is_orderable": true,
    "composition": [
      "Dicloxacillin"
    ],
    "rules": [
      {
        "rule_id": "R32",
        "indication": "Standard",
        "min_age": 1,
        "max_age": 18,
        "calc_mode": "BW",
        "dose_min": 6.25,
        "dose_max": 12.5,
        "unit": "mg",
        "max_s_dose": 500,
        "freq": "Q6H"
      },
      {
        "rule_id": "R33",
        "indication": "High Dose",
        "min_age": 1,
        "max_age": 18,
        "calc_mode": "BW",
        "dose_min": 25,
        "dose_max": 25,
        "unit": "mg",
        "max_s_dose": 500,
        "freq": "Q6H"
      }
    ],
    "products": [
      {
        "prod_id": "P22",
        "trade_name": "Ziefmycin",
        "is_combo": false,
        "strength_display": "250",
        "strength_unit": "mg",
        "form": "cap",
        "calc_concentration": 250,
        "dispense_unit": "cap"
      }
    ]
  },
  {
    "generic_id": "G19",
    "generic_name": "Domperidone",
    "class": "Gastro-intestinal Agents",
    "is_orderable": true,
    "composition": [
      "Domperidone"
    ],
    "rules": [
      {
        "rule_id": "R34",
        "indication": "General",
        "min_age": 1,
        "max_age": 18,
        "calc_mode": "BW",
        "dose_min": 0.3,
        "dose_max": 0.6,
        "unit": "mg",
        "max_s_dose": 10,
        "freq": "TIDAC"
      }
    ],
    "products": [
      {
        "prod_id": "P23",
        "trade_name": "Wempty",
        "is_combo": false,
        "strength_display": "1",
        "strength_unit": "mg/mL",
        "form": "suspension",
        "calc_concentration": 1,
        "dispense_unit": "mL"
      },
      {
        "prod_id": "P24",
        "trade_name": "Motilium",
        "is_combo": false,
        "strength_display": "10",
        "strength_unit": "mg",
        "form": "tab",
        "calc_concentration": 10,
        "dispense_unit": "tab"
      }
    ]
  },
  {
    "generic_id": "G20",
    "generic_name": "Doxycycline",
    "class": "Antibiotic",
    "is_orderable": true,
    "composition": [
      "Doxycycline"
    ],
    "rules": [
      {
        "rule_id": "R35",
        "indication": "General",
        "min_age": 1,
        "max_age": 18,
        "calc_mode": "BW",
        "dose_min": 1.1,
        "dose_max": 2.2,
        "unit": "mg",
        "max_s_dose": 100,
        "freq": "Q12H"
      }
    ],
    "products": [
      {
        "prod_id": "P25",
        "trade_name": "Doxycycline",
        "is_combo": false,
        "strength_display": "100",
        "strength_unit": "mg",
        "form": "cap",
        "calc_concentration": 100,
        "dispense_unit": "cap"
      }
    ]
  },
  {
    "generic_id": "G21",
    "generic_name": "Fusidic acid",
    "class": "Antibiotic",
    "is_orderable": true,
    "composition": [
      "Fusidic acid"
    ],
    "rules": [
      {
        "rule_id": "R36",
        "indication": "General",
        "min_age": 1,
        "max_age": 4,
        "calc_mode": "fix",
        "dose_min": 250,
        "dose_max": 250,
        "unit": "mg",
        "max_s_dose": null,
        "freq": "TID"
      },
      {
        "rule_id": "R37",
        "indication": "General",
        "min_age": 5,
        "max_age": 11,
        "calc_mode": "fix",
        "dose_min": 250,
        "dose_max": 500,
        "unit": "mg",
        "max_s_dose": null,
        "freq": "TID"
      },
      {
        "rule_id": "R38",
        "indication": "General",
        "min_age": 12,
        "max_age": 18,
        "calc_mode": "fix",
        "dose_min": 500,
        "dose_max": 1000,
        "unit": "mg",
        "max_s_dose": null,
        "freq": "TID"
      }
    ],
    "products": [
      {
        "prod_id": "P26",
        "trade_name": "Fucidin",
        "is_combo": false,
        "strength_display": "250",
        "strength_unit": "mg",
        "form": "tab",
        "calc_concentration": 250,
        "dispense_unit": "tab"
      }
    ]
  },
  {
    "generic_id": "G22",
    "generic_name": "Ketotifen",
    "class": "Antihistamine (II)",
    "is_orderable": true,
    "composition": [
      "Ketotifen"
    ],
    "rules": [
      {
        "rule_id": "R39",
        "indication": "General",
        "min_age": 1,
        "max_age": 3,
        "calc_mode": "BW",
        "dose_min": 0.05,
        "dose_max": 0.05,
        "unit": "mg",
        "max_s_dose": 1,
        "freq": "BID"
      },
      {
        "rule_id": "R40",
        "indication": "General",
        "min_age": 4,
        "max_age": 18,
        "calc_mode": "fix",
        "dose_min": 1,
        "dose_max": 1,
        "unit": "mg",
        "max_s_dose": 1,
        "freq": "BID"
      }
    ],
    "products": [
      {
        "prod_id": "P27",
        "trade_name": "Asthan",
        "is_combo": false,
        "strength_display": "1",
        "strength_unit": "mg",
        "form": "tab",
        "calc_concentration": 1,
        "dispense_unit": "tab"
      },
      {
        "prod_id": "P28",
        "trade_name": "Asthmin",
        "is_combo": false,
        "strength_display": "0.2",
        "strength_unit": "mg/mL",
        "form": "syrup",
        "calc_concentration": 0.2,
        "dispense_unit": "mL"
      }
    ]
  },
  {
    "generic_id": "G23",
    "generic_name": "Lactulose",
    "class": "Gastro-intestinal Agents",
    "is_orderable": true,
    "composition": [
      "Lactulose"
    ],
    "rules": [
      {
        "rule_id": "R41",
        "indication": "General",
        "min_age": 1,
        "max_age": 18,
        "calc_mode": "BW",
        "dose_min": 333,
        "dose_max": 999,
        "unit": "mg",
        "max_s_dose": 9999,
        "freq": "BID"
      }
    ],
    "products": [
      {
        "prod_id": "P29",
        "trade_name": "Lactulose",
        "is_combo": false,
        "strength_display": "666",
        "strength_unit": "mg/mL",
        "form": "syrup",
        "calc_concentration": 666,
        "dispense_unit": "mL"
      }
    ]
  },
  {
    "generic_id": "G24",
    "generic_name": "Loratadine",
    "class": "Antihistamine (II)",
    "is_orderable": true,
    "composition": [
      "Loratadine"
    ],
    "rules": [
      {
        "rule_id": "R42",
        "indication": "General",
        "min_age": 2,
        "max_age": 5,
        "calc_mode": "fix",
        "dose_min": 5,
        "dose_max": 5,
        "unit": "mg",
        "max_s_dose": null,
        "freq": "HS"
      },
      {
        "rule_id": "R43",
        "indication": "General",
        "min_age": 6,
        "max_age": 18,
        "calc_mode": "fix",
        "dose_min": 10,
        "dose_max": 10,
        "unit": "mg",
        "max_s_dose": null,
        "freq": "HS"
      }
    ],
    "products": [
      {
        "prod_id": "P30",
        "trade_name": "Finska",
        "is_combo": false,
        "strength_display": "10",
        "strength_unit": "mg",
        "form": "tab",
        "calc_concentration": 10,
        "dispense_unit": "tab"
      }
    ]
  },
  {
    "generic_id": "G25",
    "generic_name": "Meclizine",
    "class": "Antihistamine (I)",
    "is_orderable": true,
    "composition": [
      "Meclizine"
    ],
    "rules": [
      {
        "rule_id": "R44",
        "indication": "General",
        "min_age": 12,
        "max_age": 18,
        "calc_mode": "fix",
        "dose_min": 8,
        "dose_max": 34,
        "unit": "mg",
        "max_s_dose": null,
        "freq": "TID"
      }
    ],
    "products": [
      {
        "prod_id": "P31",
        "trade_name": "Meclizine",
        "is_combo": false,
        "strength_display": "25",
        "strength_unit": "mg",
        "form": "tab",
        "calc_concentration": 25,
        "dispense_unit": "tab"
      }
    ]
  },
  {
    "generic_id": "G26",
    "generic_name": "Metoclopramide",
    "class": "Gastro-intestinal Agents",
    "is_orderable": true,
    "composition": [
      "Metoclopramide"
    ],
    "rules": [
      {
        "rule_id": "R45",
        "indication": "General",
        "min_age": 1,
        "max_age": 18,
        "calc_mode": "BW",
        "dose_min": 0.1,
        "dose_max": 0.2,
        "unit": "mg",
        "max_s_dose": 10,
        "freq": "TIDAC"
      }
    ],
    "products": [
      {
        "prod_id": "P32",
        "trade_name": "Aswell",
        "is_combo": false,
        "strength_display": "1",
        "strength_unit": "mg/mL",
        "form": "soln",
        "calc_concentration": 1,
        "dispense_unit": "mL"
      },
      {
        "prod_id": "P33",
        "trade_name": "Promeran",
        "is_combo": false,
        "strength_display": "3.84",
        "strength_unit": "mg",
        "form": "tab",
        "calc_concentration": 3.84,
        "dispense_unit": "tab"
      }
    ]
  },
  {
    "generic_id": "G27",
    "generic_name": "Prednisolone",
    "class": "Steroids",
    "is_orderable": true,
    "composition": [
      "Prednisolone"
    ],
    "rules": [
      {
        "rule_id": "R46",
        "indication": "General",
        "min_age": 1,
        "max_age": 18,
        "calc_mode": "BW",
        "dose_min": 0.5,
        "dose_max": 1,
        "unit": "mg",
        "max_s_dose": 30,
        "freq": "BID"
      }
    ],
    "products": [
      {
        "prod_id": "P34",
        "trade_name": "Kidsolone",
        "is_combo": false,
        "strength_display": "1",
        "strength_unit": "mg/mL",
        "form": "soln",
        "calc_concentration": 1,
        "dispense_unit": "mL"
      },
      {
        "prod_id": "P35",
        "trade_name": "Prednisolone",
        "is_combo": false,
        "strength_display": "5",
        "strength_unit": "mg",
        "form": "tab",
        "calc_concentration": 5,
        "dispense_unit": "tab"
      }
    ]
  },
  {
    "generic_id": "G28",
    "generic_name": "Procaterol",
    "class": "Bronchodilators",
    "is_orderable": true,
    "composition": [
      "Procaterol"
    ],
    "rules": [
      {
        "rule_id": "R47",
        "indication": "General",
        "min_age": 1,
        "max_age": 5,
        "calc_mode": "BW",
        "dose_min": 0.00125,
        "dose_max": 0.00125,
        "unit": "mg",
        "max_s_dose": 0.025,
        "freq": "BID"
      },
      {
        "rule_id": "R48",
        "indication": "General",
        "min_age": 6,
        "max_age": 18,
        "calc_mode": "fix",
        "dose_min": 0.025,
        "dose_max": 0.025,
        "unit": "mg",
        "max_s_dose": null,
        "freq": "BID"
      }
    ],
    "products": [
      {
        "prod_id": "P36",
        "trade_name": "Meptin",
        "is_combo": false,
        "strength_display": "5",
        "strength_unit": "mcg/mL",
        "form": "liquid",
        "calc_concentration": 0.005,
        "dispense_unit": "mL"
      }
    ]
  },
  {
    "generic_id": "G29",
    "generic_name": "Pseudoephedrine",
    "class": "Cough and Cold Preparation",
    "is_orderable": true,
    "composition": [
      "Pseudoephedrine"
    ],
    "rules": [
      {
        "rule_id": "R49",
        "indication": "General",
        "min_age": 1,
        "max_age": 5,
        "calc_mode": "BW",
        "dose_min": 1,
        "dose_max": 1,
        "unit": "mg",
        "max_s_dose": 15,
        "freq": "QID"
      },
      {
        "rule_id": "R50",
        "indication": "General",
        "min_age": 6,
        "max_age": 11,
        "calc_mode": "fix",
        "dose_min": 30,
        "dose_max": 30,
        "unit": "mg",
        "max_s_dose": null,
        "freq": "QID"
      },
      {
        "rule_id": "R51",
        "indication": "General",
        "min_age": 12,
        "max_age": 18,
        "calc_mode": "fix",
        "dose_min": 60,
        "dose_max": 60,
        "unit": "mg",
        "max_s_dose": null,
        "freq": "QID"
      }
    ],
    "products": []
  },
  {
    "generic_id": "G30",
    "generic_name": "Racecadotril",
    "class": "Gastro-intestinal Agents",
    "is_orderable": true,
    "composition": [
      "Racecadotril"
    ],
    "rules": [
      {
        "rule_id": "R52",
        "indication": "General",
        "min_age": 1,
        "max_age": 18,
        "calc_mode": "BW",
        "dose_min": 1.5,
        "dose_max": 1.5,
        "unit": "mg",
        "max_s_dose": 60,
        "freq": "TID"
      }
    ],
    "products": [
      {
        "prod_id": "P38",
        "trade_name": "Hidrasec",
        "is_combo": false,
        "strength_display": "10",
        "strength_unit": "mg",
        "form": "granule",
        "calc_concentration": 10,
        "dispense_unit": "pk"
      }
    ]
  },
  {
    "generic_id": "G31",
    "generic_name": "Sennosides",
    "class": "Gastro-intestinal Agents",
    "is_orderable": true,
    "composition": [
      "Sennosides"
    ],
    "rules": [
      {
        "rule_id": "R53",
        "indication": "General",
        "min_age": 3,
        "max_age": 5,
        "calc_mode": "fix",
        "dose_min": 5,
        "dose_max": 10,
        "unit": "mg",
        "max_s_dose": null,
        "freq": "HS"
      },
      {
        "rule_id": "R54",
        "indication": "General",
        "min_age": 6,
        "max_age": 18,
        "calc_mode": "fix",
        "dose_min": 10,
        "dose_max": 20,
        "unit": "mg",
        "max_s_dose": null,
        "freq": "HS"
      }
    ],
    "products": [
      {
        "prod_id": "P39",
        "trade_name": "Through",
        "is_combo": false,
        "strength_display": "20",
        "strength_unit": "mg",
        "form": "tab",
        "calc_concentration": 20,
        "dispense_unit": "tab"
      }
    ]
  },
  {
    "generic_id": "G32",
    "generic_name": "Simethicone",
    "class": "Gastro-intestinal Agents",
    "is_orderable": true,
    "composition": [
      "Simethicone"
    ],
    "rules": [
      {
        "rule_id": "R55",
        "indication": "General",
        "min_age": 1,
        "max_age": 1,
        "calc_mode": "fix",
        "dose_min": 20,
        "dose_max": 20,
        "unit": "mg",
        "max_s_dose": null,
        "freq": "QID"
      },
      {
        "rule_id": "R56",
        "indication": "General",
        "min_age": 2,
        "max_age": 18,
        "calc_mode": "fix",
        "dose_min": 40,
        "dose_max": 40,
        "unit": "mg",
        "max_s_dose": null,
        "freq": "QID"
      }
    ],
    "products": [
      {
        "prod_id": "P40",
        "trade_name": "Kascoal",
        "is_combo": false,
        "strength_display": "40",
        "strength_unit": "mg",
        "form": "tab",
        "calc_concentration": 40,
        "dispense_unit": "tab"
      }
    ]
  },
  {
    "generic_id": "G33",
    "generic_name": "Trimethoprim/Sulfamethoxazole",
    "class": "Antibiotic",
    "is_orderable": true,
    "composition": [
      "Trimethoprim",
      "Sulfamethoxazole"
    ],
    "rules": [
      {
        "rule_id": "R57",
        "indication": "General",
        "min_age": 1,
        "max_age": 18,
        "calc_mode": "BW",
        "dose_min": 4,
        "dose_max": 6,
        "unit": "mg",
        "max_s_dose": 160,
        "freq": "Q12H"
      }
    ],
    "products": [
      {
        "prod_id": "P41",
        "trade_name": "Baktar",
        "is_combo": false,
        "strength_display": "400/80",
        "strength_unit": "mg",
        "form": "tab",
        "calc_concentration": 80,
        "dispense_unit": "tab"
      },
      {
        "prod_id": "P42",
        "trade_name": "Sulfacotrim",
        "is_combo": false,
        "strength_display": "40/8",
        "strength_unit": "mg/mL",
        "form": "suspension",
        "calc_concentration": 8,
        "dispense_unit": "mL"
      }
    ]
  },
  {
    "generic_id": "G34",
    "generic_name": "Amoxicillin",
    "class": "Antibiotic",
    "is_orderable": true,
    "composition": [
      "Amoxicillin"
    ],
    "rules": [
      {
        "rule_id": "R58",
        "indication": "Standard",
        "min_age": 1,
        "max_age": 18,
        "calc_mode": "BW",
        "dose_min": 20,
        "dose_max": 23,
        "unit": "mg",
        "max_s_dose": 1000,
        "freq": "BID"
      },
      {
        "rule_id": "R59",
        "indication": "High Dose",
        "min_age": 1,
        "max_age": 18,
        "calc_mode": "BW",
        "dose_min": 40,
        "dose_max": 45,
        "unit": "mg",
        "max_s_dose": 1000,
        "freq": "BID"
      }
    ],
    "products": [
      {
        "prod_id": "P43",
        "trade_name": "Amoxicillin",
        "is_combo": false,
        "strength_display": "250",
        "strength_unit": "mg",
        "form": "cap",
        "calc_concentration": 250,
        "dispense_unit": "cap"
      }
    ]
  },
  {
    "generic_id": "G35",
    "generic_name": "Dextromethorphan",
    "class": "Cough and Cold Preparation",
    "is_orderable": true,
    "composition": [
      "Dextromethorphan"
    ],
    "rules": [
      {
        "rule_id": "R60",
        "indication": "General",
        "min_age": 2,
        "max_age": 5,
        "calc_mode": "fix",
        "dose_min": 5,
        "dose_max": 5,
        "unit": "mg",
        "max_s_dose": null,
        "freq": "QID"
      },
      {
        "rule_id": "R61",
        "indication": "General",
        "min_age": 6,
        "max_age": 11,
        "calc_mode": "fix",
        "dose_min": 10,
        "dose_max": 10,
        "unit": "mg",
        "max_s_dose": null,
        "freq": "QID"
      },
      {
        "rule_id": "R62",
        "indication": "General",
        "min_age": 12,
        "max_age": 18,
        "calc_mode": "fix",
        "dose_min": 20,
        "dose_max": 20,
        "unit": "mg",
        "max_s_dose": null,
        "freq": "QID"
      }
    ],
    "products": [
      {
        "prod_id": "P44",
        "trade_name": "Delcopan",
        "is_combo": false,
        "strength_display": "10",
        "strength_unit": "mg",
        "form": "tab",
        "calc_concentration": 10,
        "dispense_unit": "tab"
      }
    ]
  },
  {
    "generic_id": "G36",
    "generic_name": "Acetylcysteine",
    "class": "Cough and Cold Preparation",
    "is_orderable": true,
    "composition": [
      "Acetylcysteine"
    ],
    "rules": [
      {
        "rule_id": "R63",
        "indication": "General",
        "min_age": 1,
        "max_age": 18,
        "calc_mode": "BW",
        "dose_min": 5,
        "dose_max": 5,
        "unit": "mg",
        "max_s_dose": 200,
        "freq": "TID"
      }
    ],
    "products": [
      {
        "prod_id": "P45",
        "trade_name": "Actein",
        "is_combo": false,
        "strength_display": "100",
        "strength_unit": "mg",
        "form": "granule",
        "calc_concentration": 100,
        "dispense_unit": "pk"
      },
      {
        "prod_id": "P46",
        "trade_name": "Actein",
        "is_combo": false,
        "strength_display": "200",
        "strength_unit": "mg",
        "form": "granule",
        "calc_concentration": 200,
        "dispense_unit": "pk"
      }
    ]
  },
  {
    "generic_id": "G37",
    "generic_name": "Levofloxacin",
    "class": "Antibiotic",
    "is_orderable": true,
    "composition": [
      "Levofloxacin"
    ],
    "rules": [
      {
        "rule_id": "R64",
        "indication": "General",
        "min_age": 1,
        "max_age": 4,
        "calc_mode": "BW",
        "dose_min": 8,
        "dose_max": 10,
        "unit": "mg",
        "max_s_dose": 375,
        "freq": "BID"
      },
      {
        "rule_id": "R65",
        "indication": "General",
        "min_age": 5,
        "max_age": 18,
        "calc_mode": "BW",
        "dose_min": 8,
        "dose_max": 10,
        "unit": "mg",
        "max_s_dose": 750,
        "freq": "QD"
      }
    ],
    "products": [
      {
        "prod_id": "P47",
        "trade_name": "Cravit",
        "is_combo": false,
        "strength_display": "500",
        "strength_unit": "mg",
        "form": "tab",
        "calc_concentration": 500,
        "dispense_unit": "tab"
      }
    ]
  },
  {
    "generic_id": "G38",
    "generic_name": "Cetirizine/Pseudoephedrine",
    "class": "Cough and Cold Preparation",
    "is_orderable": false,
    "composition": [
      "Cetirizine",
      "Pseudoephedrine"
    ],
    "rules": [
      {
        "rule_id": "R66",
        "indication": "General",
        "min_age": 12,
        "max_age": 18,
        "calc_mode": "fix",
        "dose_min": 1,
        "dose_max": 1,
        "unit": "cap",
        "max_s_dose": null,
        "freq": "BID"
      }
    ],
    "products": [
      {
        "prod_id": "P49",
        "trade_name": "Hiros S.R.M",
        "is_combo": true,
        "strength_display": "5/120",
        "strength_unit": "mg",
        "form": "cap",
        "calc_concentration": 1,
        "dispense_unit": "cap"
      }
    ]
  },
  {
    "generic_id": "G39",
    "generic_name": "Brompheniramine/Pseudoephedrine",
    "class": "Cough and Cold Preparation",
    "is_orderable": false,
    "composition": [
      "Brompheniramine",
      "Pseudoephedrine"
    ],
    "rules": [
      {
        "rule_id": "R67",
        "indication": "General",
        "min_age": 3,
        "max_age": 5,
        "calc_mode": "fix",
        "dose_min": 0.25,
        "dose_max": 0.25,
        "unit": "pk",
        "max_s_dose": null,
        "freq": "QID"
      },
      {
        "rule_id": "R68",
        "indication": "General",
        "min_age": 6,
        "max_age": 11,
        "calc_mode": "fix",
        "dose_min": 0.5,
        "dose_max": 0.5,
        "unit": "pk",
        "max_s_dose": null,
        "freq": "QID"
      },
      {
        "rule_id": "R69",
        "indication": "General",
        "min_age": 12,
        "max_age": 18,
        "calc_mode": "fix",
        "dose_min": 1,
        "dose_max": 1,
        "unit": "pk",
        "max_s_dose": null,
        "freq": "QID"
      }
    ],
    "products": [
      {
        "prod_id": "P50",
        "trade_name": "Histapp",
        "is_combo": true,
        "strength_display": "4/15",
        "strength_unit": "mg",
        "form": "granule",
        "calc_concentration": 1,
        "dispense_unit": "pk"
      }
    ]
  },
  {
    "generic_id": "G40",
    "generic_name": "Triprolidine/Pseudoephedrine",
    "class": "Cough and Cold Preparation",
    "is_orderable": false,
    "composition": [
      "Triprolidine",
      "Pseudoephedrine"
    ],
    "rules": [
      {
        "rule_id": "R70",
        "indication": "General",
        "min_age": 1,
        "max_age": 1,
        "calc_mode": "fix",
        "dose_min": 1.25,
        "dose_max": 1.25,
        "unit": "mL",
        "max_s_dose": null,
        "freq": "TID"
      },
      {
        "rule_id": "R71",
        "indication": "General",
        "min_age": 2,
        "max_age": 5,
        "calc_mode": "fix",
        "dose_min": 2.5,
        "dose_max": 2.5,
        "unit": "mL",
        "max_s_dose": null,
        "freq": "TID"
      },
      {
        "rule_id": "R72",
        "indication": "General",
        "min_age": 6,
        "max_age": 11,
        "calc_mode": "fix",
        "dose_min": 5,
        "dose_max": 5,
        "unit": "mL",
        "max_s_dose": null,
        "freq": "TID"
      },
      {
        "rule_id": "R73",
        "indication": "General",
        "min_age": 12,
        "max_age": 18,
        "calc_mode": "fix",
        "dose_min": 10,
        "dose_max": 10,
        "unit": "mL",
        "max_s_dose": null,
        "freq": "TID"
      }
    ],
    "products": [
      {
        "prod_id": "P51",
        "trade_name": "Pseu",
        "is_combo": true,
        "strength_display": "0.25/6",
        "strength_unit": "mL",
        "form": "soln",
        "calc_concentration": 1,
        "dispense_unit": "mL"
      }
    ]
  },
  {
    "generic_id": "G41",
    "generic_name": "Dextromethorphan/Cresolsulfonate/Lysozyme",
    "class": "Cough and Cold Preparation",
    "is_orderable": false,
    "composition": [
      "Dextromethorphan",
      "Cresolsulfonate",
      "Lysozyme"
    ],
    "rules": [
      {
        "rule_id": "R74",
        "indication": "General",
        "min_age": 15,
        "max_age": 18,
        "calc_mode": "fix",
        "dose_min": 1,
        "dose_max": 1,
        "unit": "cap",
        "max_s_dose": null,
        "freq": "TID"
      }
    ],
    "products": [
      {
        "prod_id": "P52",
        "trade_name": "Medika",
        "is_combo": true,
        "strength_display": "20/90/20",
        "strength_unit": "mg",
        "form": "cap",
        "calc_concentration": 1,
        "dispense_unit": "cap"
      }
    ]
  },
  {
    "generic_id": "G42",
    "generic_name": "Dioctahedral Smectite",
    "class": "Gastro-intestinal Agents",
    "is_orderable": true,
    "composition": [
      "Dioctahedral Smectite"
    ],
    "rules": [
      {
        "rule_id": "R75",
        "indication": "General",
        "min_age": 2,
        "max_age": 18,
        "calc_mode": "fix",
        "dose_min": 3,
        "dose_max": 3,
        "unit": "gm",
        "max_s_dose": null,
        "freq": "TID"
      }
    ],
    "products": [
      {
        "prod_id": "P53",
        "trade_name": "Smecta",
        "is_combo": false,
        "strength_display": "3",
        "strength_unit": "gm",
        "form": "granule",
        "calc_concentration": 1,
        "dispense_unit": "pk"
      }
    ]
  },
  {
    "generic_id": "G43",
    "generic_name": "Magnesium oxide",
    "class": "Gastro-intestinal Agents",
    "is_orderable": true,
    "composition": [
      "Magnesium oxide"
    ],
    "rules": [
      {
        "rule_id": "R76",
        "indication": "General",
        "min_age": 1,
        "max_age": 18,
        "calc_mode": "BW",
        "dose_min": 6.25,
        "dose_max": 6.25,
        "unit": "mg",
        "max_s_dose": 250,
        "freq": "TID"
      }
    ],
    "products": [
      {
        "prod_id": "P54",
        "trade_name": "MgO",
        "is_combo": false,
        "strength_display": "250",
        "strength_unit": "mg",
        "form": "tab",
        "calc_concentration": 250,
        "dispense_unit": "tab"
      }
    ]
  },
  {
    "generic_id": "G44",
    "generic_name": "Butamirate",
    "class": "Cough and Cold Preparation",
    "is_orderable": true,
    "composition": [
      "Butamirate"
    ],
    "rules": [
      {
        "rule_id": "R77",
        "indication": "General",
        "min_age": 1,
        "max_age": 18,
        "calc_mode": "fix",
        "dose_min": 5,
        "dose_max": 5,
        "unit": "mL",
        "max_s_dose": null,
        "freq": "TID"
      }
    ],
    "products": [
      {
        "prod_id": "P55",
        "trade_name": "Sutussi",
        "is_combo": false,
        "strength_display": "0.8",
        "strength_unit": "mg/mL",
        "form": "soln",
        "calc_concentration": 1,
        "dispense_unit": "mL"
      }
    ]
  },
  {
    "generic_id": "G45",
    "generic_name": "Montelukast",
    "class": "Bronchodilators",
    "is_orderable": true,
    "composition": [
      "Montelukast"
    ],
    "rules": [
      {
        "rule_id": "R78",
        "indication": "General",
        "min_age": 1,
        "max_age": 5,
        "calc_mode": "fix",
        "dose_min": 4,
        "dose_max": 4,
        "unit": "mg",
        "max_s_dose": null,
        "freq": "QD"
      },
      {
        "rule_id": "R79",
        "indication": "General",
        "min_age": 6,
        "max_age": 14,
        "calc_mode": "fix",
        "dose_min": 5,
        "dose_max": 5,
        "unit": "mg",
        "max_s_dose": null,
        "freq": "QD"
      },
      {
        "rule_id": "R80",
        "indication": "General",
        "min_age": 15,
        "max_age": 18,
        "calc_mode": "fix",
        "dose_min": 10,
        "dose_max": 10,
        "unit": "mg",
        "max_s_dose": null,
        "freq": "QD"
      }
    ],
    "products": [
      {
        "prod_id": "P56",
        "trade_name": "Monkast",
        "is_combo": false,
        "strength_display": "4",
        "strength_unit": "mg",
        "form": "granule",
        "calc_concentration": 4,
        "dispense_unit": "pk"
      },
      {
        "prod_id": "P57",
        "trade_name": "Monkast",
        "is_combo": false,
        "strength_display": "10",
        "strength_unit": "mg",
        "form": "tab",
        "calc_concentration": 10,
        "dispense_unit": "tab"
      },
      {
        "prod_id": "P58",
        "trade_name": "Singulair",
        "is_combo": false,
        "strength_display": "5",
        "strength_unit": "mg",
        "form": "tab",
        "calc_concentration": 5,
        "dispense_unit": "tab"
      }
    ]
  },
  {
    "generic_id": "G46",
    "generic_name": "Diclofenac supp.",
    "class": "Analgesic",
    "is_orderable": true,
    "composition": [
      "Diclofenac"
    ],
    "rules": [
      {
        "rule_id": "R81",
        "indication": "General",
        "min_age": 1,
        "max_age": 18,
        "calc_mode": "BW",
        "dose_min": 0.2,
        "dose_max": 1,
        "unit": "mg",
        "max_s_dose": 12.5,
        "freq": "TID"
      }
    ],
    "products": [
      {
        "prod_id": "P59",
        "trade_name": "Voren",
        "is_combo": false,
        "strength_display": "12.5",
        "strength_unit": "mg",
        "form": "supp",
        "calc_concentration": 12.5,
        "dispense_unit": "supp"
      }
    ]
  }
];

// ==========================================
// 1. DATA SOURCE 
// ==========================================
let rawData = [];
 
async function loadDrugData() {
  try {
    console.log("Attempting to fetch drugs.json...");
    const response = await fetch('./drugs.json');
    
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    // 1. Parse JSON response and store in variable
    rawData = await response.json();
    console.log('Successfully loaded data from JSON'); 
  } catch (error) {
    console.warn('Network/JSON fetch failed. Switching to BACKUP_DATA.', error);   
    // 2. [Fallback] Switch to BACKUP_DATA if fetch fails
    if (typeof BACKUP_DATA !== 'undefined') {
        rawData = BACKUP_DATA;
        alert("Network unstable. Using offline data mode.");
    } else {
        console.error("Critical: BACKUP_DATA is missing!");
    }
    
  } finally {
    // 3. Initialization: Execute regardless of data source (Fetch or Backup)
    if (rawData && rawData.length > 0) {
        DB.init(); 
        Render.updateAll();
        console.log("App initialized successfully.");
    } else {
        alert("Critical Error: No data available (Network & Backup both failed).");
    }
  }
}

loadDrugData();

// ==========================================
// 2_1 CONFIG & UTILS
// ==========================================
const CONFIG = {
  SLOTS: ["A", "B", "C", "D"]
};

const Utils = {
  // 1. Sanitize inputs to prevent Cross-Site Scripting (XSS)
  escape: (str) => {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  },

  // 2. Safely parse numerical input
  parseNum: (val) => {
    const n = parseFloat(val);
    return isNaN(n) ? 0 : n;
  },

  // 3. Generate Ingredient Map (Core Logic: Duplicate Detection)
  // Transforms selected items into a map keyed by ingredient name.
  getIngredientMap: (selectedItems) => {
    const map = {};
    selectedItems.forEach((item) => {
      // Ensure composition is an array to prevent runtime errors
      const list = item.composition || [];

      // Construct display name: Trade Name (Form) Strength
      let displayName = item.trade_name || item.generic_name;
      
      if (item.type === "trade") {
        // Use standardized 'tradeType' from DB layer for consistency
        const formStr = item.tradeType || item.form || ""; 
        if (formStr) displayName += ` (${formStr})`;
        
        // Append strength info if available
        if (item.strengthNum) displayName += ` ${item.strengthNum}${item.strengthUnit || ''}`;
      }
      
      // Group by ingredient name (Key) to identify duplicates
      list.forEach((ing) => {
        if (!map[ing]) map[ing] = [];
        map[ing].push({
            id: item.uniqueKey,
            name: displayName
        });
      });
    });
    return map;
  }
};

// ==========================================
// 2_2 ICON ASSETS (SVG)
// ==========================================

// Storing SVGs inline to reduce HTTP requests and improve loading performance.
const DrugIcons = {
  tablet: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="9" rx="10" ry="6"></ellipse><path d="M2 9 v4 A 10 6 0 0 0 22 16 v-4"></path><path d="M6 12 L18 6"></path></svg>`,
  capsule: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><g transform="rotate(-45 12 12)"><rect x="1" y="7" width="22" height="10" rx="5" ry="5"></rect><path d="M12 7v10"></path></g></svg>`,
  bottle: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5 L7 21 L17 21 L20 5"></path><path d="M5.3 12 C 8 10, 11 14, 13 12 S 16 10, 18.7 12 L 17 21 L 7 21 Z"></path></svg>`,
  suppository: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21 h6 Q 17 21 17 19 v-7 C 17 7 15 2 12 2 C 9 2 7 7 7 12 v7 Q 7 21 9 21 z"></path></svg>`,
  granule: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><g transform="rotate(-45 12 12)"><path d="M4 12 L4 7 L20 7 L20 17 L12 17"></path><path d="M3 17v0 M6 18v0 M1 19v0 M9 19v0 M4 20v0 M5 16v0 M8 17v0 M8 14v0 M11 13v0 M14 13v0 M17 12v0"></path></g></svg>`,
  alert: `<svg class="w-5 h-5 text-red-500 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>`,
  default: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>`,

  // Generates HTML string for the icon based on drug form.
  // Uses fuzzy matching to handle various data formats (e.g., "Syrup", "Susp").
  getHtml: (typeStr) => {
    if (!typeStr) return "";
    const t = typeStr.toLowerCase().trim();
    const safeTitle = Utils.escape(typeStr);  // Use Utils.escape for title attribute to prevent XSS
    
    if (t.includes("syrup") || t.includes("susp") || t.includes("sol") || t.includes("liq")) {
      return `<span class="text-teal-500 shrink-0" title="${typeStr}">${DrugIcons.bottle}</span>`;
    }
    if (t.includes("cap")) {
      return `<span class="text-indigo-500 shrink-0" title="${typeStr}">${DrugIcons.capsule}</span>`;
    }
    if (t.includes("tab") || t.includes("pill")) {
      return `<span class="text-indigo-500 shrink-0" title="${typeStr}">${DrugIcons.tablet}</span>`;
    }
    if (t.includes("granule") || t.includes("pk") || t.includes("powd")) {
      return `<span class="text-orange-500 shrink-0" title="${typeStr}">${DrugIcons.granule}</span>`;
    }
    if (t.includes("supp")) {
      return `<span class="text-purple-500 shrink-0" title="${typeStr}">${DrugIcons.suppository}</span>`;
    }
    return `<span class="text-gray-400 shrink-0" title="${typeStr}">${DrugIcons.default}</span>`;
  }
};

// ==========================================
// 3. DATABASE CORE 
// ==========================================
const DB = {
  // 1. State Definitions
  map: new Map(),
  searchList: [],

  // 2. Init methods
  // Transforms hierarchical rawData into linear structures for efficiency
  init: function() {
    this.map.clear();
    this.searchList.length = 0;

    rawData.forEach((gen) => {
      // A. Process Generic Item
      const genericItem = {
        ...gen,
        type: "generic",
        uniqueKey: gen.generic_id,
        label: gen.generic_name
      };
      
      // Store full object in Map
      this.map.set(gen.generic_id, genericItem);
      
      // Push lightweight object to searchList
      this.searchList.push({
        uniqueKey: gen.generic_id,
        label: gen.generic_name,
        sub: gen.generic_name,
        type: "generic",
        classType: gen.class || "Others",
        searchStr: (gen.generic_name || "").toLowerCase(),
        tradeType: "",
        strengthNum: "",
        strengthUnit: "",
        // Default to true if is_orderable is undefined
        isOrderable: typeof gen.is_orderable !== "undefined" ? gen.is_orderable : true,
        isCombo: gen.composition && gen.composition.length > 1,
        components: gen.composition || []
      });

      // B. Process Associated Products (Trade Items)
      if (gen.products && gen.products.length > 0) {
        gen.products.forEach((prod) => {
          const tradeItem = {
            ...prod,
            type: "trade",
            uniqueKey: prod.prod_id,
            label: prod.trade_name,
            tradeType: prod.form,
            parent: genericItem, // Link to parent for accessing calculation rules
            composition: gen.composition,
            strengthNum: prod.strength_display,
            strengthUnit: prod.strength_unit
          };
          
          this.map.set(prod.prod_id, tradeItem); 
          
          this.searchList.push({ 
            uniqueKey: prod.prod_id,
            label: prod.trade_name,
            sub: gen.generic_name,
            type: "trade",
            classType: gen.class || "Others", // Combine Trade Name and Generic Name for comprehensive search
            searchStr: `${prod.trade_name} ${gen.generic_name}`.toLowerCase(),
            tradeType: prod.form,
            strengthNum: prod.strength_display,
            strengthUnit: prod.strength_unit,
            isCombo: prod.is_combo,
            components: gen.composition || [],
            parent: genericItem
          });
        });
      }
    });

    // Sorting: Generics first, then alphabetical by Label
    this.searchList.sort((a, b) => {
      if (a.type !== b.type) return a.type === "generic" ? -1 : 1;
      return a.label.localeCompare(b.label);
    });
    
    console.log(`DB Initialized. Total items: ${this.searchList.length}`);
  },

  // 3. Retrieval Methods
  get: function(key) {
    return this.map.get(key); 
  },

  search: function(term) {
    if (!term) return this.searchList; 
    const lowerTerm = term.toLowerCase();
    return this.searchList.filter((i) => i.searchStr.includes(lowerTerm));
  }
}; 

// ==========================================
// 4. CALCULATION ENGINE
// ==========================================
const Calculator = {
  // [Property] Grid for fine-tuning small doses (Range: 0 ~ 1)
  SMALL_DOSE_GRID: [0.25, 0.33, 0.5, 0.66, 0.75],

  // [Method] Base dosing Calculation
  _calcMg: function(wt, dose, max) {
    let v = wt * dose;
    return max && v > max ? max : v;
  },

  // [Method] Snap to Grid (BW Mode only)
  // Rounds values to clinically practical increments
  snapGrid: function(val) {
    if (val <= 0) return 0;
    // Rule A: Dose >= 1 (Round to nearest 0.5)
    if (val >= 1) {
      return Math.round(val * 2) / 2;
    }
    // Rule B: Dose < 1 (Use fine-tuning grid)
    if (val < 0.05) return 0;
    if (val > 0.95) return 1;

    const grid = this.SMALL_DOSE_GRID;
    let closest = grid[0];
    let minDiff = Math.abs(val - grid[0]);

    for (let i = 1; i < grid.length; i++) {
      const diff = Math.abs(val - grid[i]);
      if (diff < minDiff) {
        minDiff = diff;
        closest = grid[i];
      }
    }
    return closest;
  },

  // [Method] Smart Search (BW Mode only)
  // Find an "easy-to-administer" dose within the calculated range
  findSmartTablet: function(minRaw, maxRaw) {
    if (minRaw > maxRaw) [minRaw, maxRaw] = [maxRaw, minRaw];

    // 1. Priority: Find Integer (Whole tablet)
    const startInt = Math.ceil(minRaw);
    if (startInt <= maxRaw) return startInt;

    // 2. Secondary: Find Half-tablet (0.5 increments)
    const startHalf = Math.ceil(minRaw * 2) / 2;
    if (startHalf <= maxRaw && startHalf % 1 !== 0) return startHalf;

    // 3. Tertiary: Find special fractional dose (only if base is 0)
    const intBase = Math.floor(minRaw);
    if (intBase === 0) {
      for (let dec of this.SMALL_DOSE_GRID) {
        if (dec >= minRaw && dec <= maxRaw) return dec;
      }
    }
    return null;
  },

  // [Main Function] Calculate Final Result
  getResult: function(item, weight, age, ctxRule = null) {
    const fallback = { dose: "-", unit: "", freq: "" };
    if (!item) return fallback;

    const parent = item.type === "generic" ? item : item.parent;
    const rules = parent.rules || [];
    let rule = ctxRule;

    // Auto-select rule based on Age if not provided
    if (!rule) {
      if (age > 0) {
        rule = rules.find((r) => age >= r.min_age && age <= r.max_age);
      }
      if (!rule) rule = rules[0];
    }

    if (!rule) return { dose: "No Data", unit: "", freq: "" };
    const freq = rule.freq || "";

    // MODE A: Fix Dosage
    if (rule.calc_mode === "fix") {
      if (age >= 1 && age <= 18 && (age < rule.min_age || age > rule.max_age)) {
        return { dose: `<span class="text-gray-300 text-sm line-through">Age N/A</span>`, unit: "", freq: "-" };
      }
      if ((age < 1 || age > 18) && (rule.min_age > 0 || rule.max_age <= 18)) {
        return { dose: `<span class="text-blue-400 text-sm font-bold">Input Age</span>`, unit: "", freq: "-" };
      }

      let val = rule.dose_min;
      if (item.type === "generic") return { dose: `${val}`, unit: rule.unit, freq: freq };
      if (rule.unit === item.dispense_unit) return { dose: `${val}`, unit: item.dispense_unit, freq: freq };

      // Unit Conversion (mg to unit)
      if (rule.unit === "mg" && item.calc_concentration > 0) {
        let finalVal = val / item.calc_concentration;
        const displayVal = item.dispense_unit === "mL"
          ? parseFloat(finalVal.toFixed(1))
          : parseFloat(finalVal.toFixed(2));
        return { dose: `${displayVal}`, unit: item.dispense_unit, freq: freq };
      }
      return { dose: `${val}`, unit: rule.unit, freq: freq };
    }

    // MODE B: BW Calculation (only for >=6kg)
    if (rule.calc_mode === "BW") {
      if (!weight || weight < 6) {
        return { dose: `<span class="text-blue-400 text-sm font-bold">Input BW</span>`, unit: "", freq: "-" };
      }

      const absMax = rule.max_s_dose || 9999;
      let minMg = this._calcMg(weight, rule.dose_min, absMax);
      let maxMg = this._calcMg(weight, rule.dose_max, absMax);

      // Generic: Display range
      if (item.type === "generic") {
        minMg = Math.round(minMg);
        maxMg = Math.round(maxMg);
        return { dose: minMg === maxMg ? `${minMg}` : `${minMg}-${maxMg}`, unit: "mg", freq: freq };
      }

      // Trade Name: Calculate specific amount
      const conc = item.calc_concentration;
      if (!conc || conc <= 0) return { dose: "?", unit: "", freq: freq };

      const minRaw = minMg / conc;
      const maxRaw = maxMg / conc;
      const unit = item.dispense_unit;

      // 1. Liquid Form (mL); Smart Rounding
      if (unit === "mL") {
        let v1, v2;
        if (minRaw < 1) v1 = Math.ceil(minRaw * 10) / 10;
        else if (minRaw < 10) v1 = Math.ceil(minRaw * 2) / 2;
        else v1 = Math.ceil(minRaw);

        if (maxRaw < 1) v2 = Math.floor(maxRaw * 10) / 10;
        else if (maxRaw < 10) v2 = Math.floor(maxRaw * 2) / 2;
        else v2 = Math.floor(maxRaw);

        if (v1 > v2) {
          return { dose: `${minRaw.toFixed(1)}-${maxRaw.toFixed(1)}`, unit: "mL", freq: freq };
        }
        return { dose: `${v1}`, unit: "mL", freq: freq };
      }

      // 2. Solid Form 
      if (unit !== "mL") {
        // Safety Check: Dose too small to split (< 0.22 tab)
        if (maxRaw < 0.22) {
          return { dose: `<span class="text-red-500 font-bold text-xs leading-tight block whitespace-normal">Consider changing<br>medication</span>`, unit: "", freq: "" };
        }

        // Priority: Smart Single Dose (Integer or Half)
        const smartSingle = this.findSmartTablet(minRaw, maxRaw);
        if (smartSingle !== null) {
          return { dose: `${smartSingle}`, unit: unit, freq: freq };
        }

        // Fallback: Snap to nearest grid
        const sMin = this.snapGrid(minRaw);
        const sMax = this.snapGrid(maxRaw);

        // [Safety] Cap at Maximum calculated dose
        const finalDose = sMin > sMax ? sMax : sMin;
        return { dose: `${finalDose}`, unit: unit, freq: freq };
      }
    }
    return fallback;
  }
};

// ==========================================
// 5. STATE MANAGEMENT
// ==========================================
const State = {
  // Application State
  inputs: { weight: 0, age: 0, search: "" },
  selected: [],
  slots: { A: [], B: [], C: [], D: [] },
  currentTab: "drug",
  expandedClasses: new Set(),
  isAlertOpen: false,

  // 1. Initialize State (Hydration)
  // Loads persisted data from LocalStorage on startup
  init() {
    try {
      const saved = localStorage.getItem("pediatric_slots");
      if (saved) this.slots = JSON.parse(saved);
    } catch (e) {
      console.error("Failed to load slots", e);
    }
  },

  // 2. Selection Mutators
  toggleItem(key) {
    const idx = this.selected.findIndex((i) => i.uniqueKey === key);
    if (idx > -1) {
      this.selected.splice(idx, 1);
    } else {
      const item = DB.get(key);
      if (item) this.selected.push(item);
    }
    Render.updateAll();
  },

  removeItem(key) {
    this.selected = this.selected.filter((i) => i.uniqueKey !== key);
    Render.updateAll();
  },

  clearAll() {
    this.selected = [];
    Render.updateAll();
  },

  // 3. Slot Management (Persistence)
  loadSlot(id) {
    const keys = this.slots[id];
    if (!keys || keys.length === 0) return alert(`Slot ${id} is empty!`);
    keys.forEach((k) => {
      const item = DB.get(k);
      // Logic: Merge strategy - Avoid adding duplicates
      if (item && !this.selected.some((s) => s.uniqueKey === k)) {
        this.selected.push(item);
      }
    });
    Render.updateAll();
  },

  saveSlot(id) {
    if (this.selected.length === 0) return alert("No drugs selected to save!");
    
    // Optimization: Store only IDs (Reference) instead of full objects
    if (confirm(`Save as Slot ${id}?`)) {
      try {
        this.slots[id] = this.selected.map((i) => i.uniqueKey);
        localStorage.setItem("pediatric_slots", JSON.stringify(this.slots));
        Render.updateSlotsUI();
      } catch (e) {
        alert("Storage full or disabled! Cannot save.");
        console.error(e);
      }
    }
  },

  // 4. Drag & Drop Reordering
  moveItem(oldIndex, newIndex) {
    const [removed] = this.selected.splice(oldIndex, 1);
    this.selected.splice(newIndex, 0, removed);
  }
};

State.init();

// ==========================================
// 6. RENDER & UI LOGIC
// ==========================================
const Render = {
  // A. List View Rendering (Left Panel)
  list: () => {
    const container = document.getElementById("list-container");
    if (!container) return;

    const rawItems = DB.search(State.inputs.search);
    const filteredItems = rawItems.filter((i) => {
      if (i.type === "generic") {
        if (i.isOrderable === false) return false;
      }
      return true;
    });

    // Helper: Generate HTML for a single list item
    const createItemHtml = (i) => {
      const isChecked = State.selected.some((s) => s.uniqueKey === i.uniqueKey);
      const typeLabel = i.type === "trade" && i.tradeType ? DrugIcons.getHtml(i.tradeType) : "";
      
      let strengthHtml = "";
      if (i.type === "trade" && i.strengthNum) {
        const unitHtml = i.strengthUnit ? `<span class="text-[10px] leading-none text-gray-800 ml-0.5">${Utils.escape(i.strengthUnit)}</span>` : "";
        strengthHtml = `<span class="text-xs text-gray-800 ml-1.5 whitespace-nowrap">${Utils.escape(i.strengthNum)}${unitHtml}</span>`;
      }

      let inlineInfoHtml = "";
      let blockInfoHtml = "";

      if (i.type === "generic") {
        inlineInfoHtml = `<span class="ml-2 px-0.5 rounded bg-gray-100 text-gray-500 text-[7px] border border-gray-200 font-medium whitespace-nowrap leading-none translate-y-[-1px]">Generic</span>`;
      } else {
        blockInfoHtml = `<div class="-mt-0.5 leading-none"><span class="block pl-4 text-[10px] text-gray-400 whitespace-normal break-words">(${Utils.escape(i.sub)})</span></div>`;
      }

      return `
            <div onclick="State.toggleItem('${i.uniqueKey}')" class="flex items-center justify-between py-2 px-2 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors group">
                <div class="flex items-center w-full overflow-hidden">
                    <input type="checkbox" class="w-4 h-4 text-blue-600 rounded border-gray-300 mr-1 pointer-events-none shrink-0 transition-transform active:scale-90" ${isChecked ? "checked" : ""}>
                    <div class="flex flex-col w-full min-w-0">
                          <div class="flex items-baseline flex-wrap">
                            ${typeLabel}
                            <span class="pl-1 text-gray-800 font-bold text-sm">
                                ${Utils.escape(i.label)}
                            </span>
                            ${strengthHtml}
                            ${inlineInfoHtml} 
                          </div>
                          ${blockInfoHtml} 
                    </div>
                </div>
            </div>`;
    };

    // Case 1: Drug Tab (Flat List)
    if (State.currentTab === "drug") {
      if (filteredItems.length === 0) {
        container.innerHTML = `<div class="flex flex-col items-center justify-center h-40 text-gray-400 text-sm"><svg class="w-8 h-8 mb-2 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>No matches found</div>`;
        return;
      }
      container.innerHTML = filteredItems.map(createItemHtml).join("");
      return;
    }

    // Case 2: Class Tab (Grouped List)
    if (State.currentTab === "class") {
      const groups = {};
      filteredItems.forEach((item) => {
        const cls = item.classType || "Others";
        if (!groups[cls]) groups[cls] = [];
        groups[cls].push(item);
      });
      const sortedClasses = Object.keys(groups).sort();

      if (sortedClasses.length === 0) {
        container.innerHTML = `<div class="flex flex-col items-center justify-center h-40 text-gray-400 text-sm"><svg class="w-8 h-8 mb-2 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>No matches found</div>`;
        return;
      }

      container.innerHTML = sortedClasses.map((clsName) => {
        const groupItems = groups[clsName];
        const isOpen = State.expandedClasses.has(clsName) ? "open" : "";
        const itemRows = groupItems.map(createItemHtml).join("");

        return `
                <details class="border-b border-gray-200 bg-white group" ${isOpen} ontoggle="toggleClassState('${Utils.escape(clsName)}', this.open)">
                    <summary class="flex justify-between items-center py-1.5 px-3 bg-gray-50 hover:bg-gray-100 cursor-pointer list-none select-none transition-colors">
                        <span class="font-bold text-sm text-gray-700 flex items-center gap-2">
                           <span class="w-1 h-4 bg-purple-500 rounded-full inline-block"></span>
                           ${Utils.escape(clsName)}
                           <span class="text-xs text-gray-400 font-normal ml-1">(${groupItems.length})</span>
                        </span>
                        <svg class="w-4 h-4 text-gray-400 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </summary>
                    <div class="bg-white border-t border-gray-100">
                        ${itemRows}
                    </div>
                </details>`;
      }).join("");
    }
  },

  // B. Result Table Rendering (Right Panel)
  table: () => {
    const tbody = document.getElementById("result-body");
    const emptyMsg = document.getElementById("empty-msg");
    const clearBtn = document.getElementById("btn-clear-all");
    
    if (!tbody) return;

    // Handle Empty State
    if (State.selected.length === 0) {
      tbody.innerHTML = "";
      if (emptyMsg) emptyMsg.style.display = "flex";
      if (clearBtn) clearBtn.classList.add("hidden");
      return;
    }
    if (emptyMsg) emptyMsg.style.display = "none";
    if (clearBtn) clearBtn.classList.remove("hidden");

    const ingredientMap = Utils.getIngredientMap(State.selected);

    tbody.innerHTML = State.selected.map((item, index) => {
        const parent = item.type === "generic" ? item : item.parent;
        const options = parent.rules || [];
        const currentAge = State.inputs.age;

      // Auto-match rule based on age  
      let matchedOption = null;
        if (options.length > 0 && currentAge >= 1) {
          matchedOption = options.find((r) => currentAge >= r.min_age && currentAge <= r.max_age);
        }

        const distinctIndications = [...new Set(options.map((r) => r.indication))];
        const showAsMulti = distinctIndications.length > 1;

        const parentName = item.type === "generic" ? item.generic_name : item.parent.generic_name;
        const subTextHtml = item.type === "trade" 
            ? `<span class="block leading-none text-[10px] text-gray-400 pl-4 -mt-0.5 whitespace-normal break-words">(${Utils.escape(parentName)})</span>`
            : "";

        const typeLabel = item.type === "trade" && item.tradeType ? DrugIcons.getHtml(item.tradeType) : "";

        // Duplicate Warning Logic
        let currentIngs = item.composition || [];
        const dupIngredients = currentIngs.filter(
          (ing) => ingredientMap[ing] && ingredientMap[ing].length > 1
        );

        const tooltipText = dupIngredients.map(ing => {
            const sources = ingredientMap[ing].map(s => s.name).join(", ");
            return `${ing}: ${sources}`;
        }).join("\n");

        const alertIconHtml = dupIngredients.length > 0
            ? `<div class="mr-1 shrink-0 cursor-help" title="Duplicate:\n${Utils.escape(tooltipText)}">
                 ${DrugIcons.alert}
               </div>`
            : "";

        let strengthHtml = "";
        if (item.type === "trade" && item.strengthNum) {
          const unitHtml = item.strengthUnit ? `<span class="text-[10px] leading-none text-gray-800 ml-0.5">${Utils.escape(item.strengthUnit)}</span>` : "";
          strengthHtml = `<span class="text-xs text-gray-800 ml-1.5 whitespace-nowrap">${item.strengthNum}${unitHtml}</span>`;
        }

      
        // Mode 1: Single Line Display (Standard)
        if (!showAsMulti) {
          const result = Calculator.getResult(item, State.inputs.weight, State.inputs.age, matchedOption);
          return `
          <tbody class="draggable-item group select-none" data-id="${item.uniqueKey}">
              <tr class="relative group hover:bg-gray-50 transition-colors" style="z-index: ${100 - index};">
                  <td class="w-px pl-0 py-1.5 align-top">
                      <button onclick="State.removeItem('${item.uniqueKey}')" class="p-0.5 mt-0.5 text-gray-200 hover:text-stone-600 transition-colors">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                      </button>
                  </td>
                  <td class="py-1.5 align-baseline max-w-0 w-full"> 
                      <div class="flex items-start">
                          ${alertIconHtml} 
                          <div class="flex flex-col w-full min-w-0">
                              <div class="flex items-baseline flex-nowrap overflow-hidden pr-2">
                                  ${typeLabel} 
                                  <span class="pl-0.5 text-gray-800 font-bold text-base truncate">${Utils.escape(item.label)}</span>
                                  <span class="whitespace-nowrap">${strengthHtml}</span>
                              </div>
                              ${subTextHtml}
                          </div>
                      </div>
                  </td>
                  <td class="w-28 py-1.5 align-baseline text-right pr-0.5">
                      <div class="flex justify-end items-baseline whitespace-nowrap leading-tight">
                          <span class="text-blue-600 font-bold text-base">${result.dose}</span>
                          ${result.unit ? `<span class="text-xs text-gray-500 font-medium ml-0.5">${result.unit}</span>` : ""}
                      </div>
                  </td>
                  <td class="w-24 py-1.5 align-baseline text-center text-base text-blue-600 font-bold whitespace-nowrap pr-1">
                      ${result.freq}
                  </td>
              </tr>
          </tbody>`;
        }

        // Mode 2: Multi-Option Display (Tree diagram)
        const subRowsHtml = options.map((opt, idx, arr) => {
            const res = Calculator.getResult(item, State.inputs.weight, State.inputs.age, opt);
            const isLast = idx === arr.length - 1;
            return `
            <tr class="relative">
                <td class="w-px pl-0 py-0.5 align-top relative">
                    <div class="absolute left-0 top-0 w-px bg-gray-300 ${isLast ? 'h-1/2' : 'h-full'}"></div>
                    <div class="absolute left-0 top-1/2 w-2 h-px bg-gray-300"></div>
                </td>
                <td class="py-0.5 pl-4 align-baseline max-w-0 w-full">
                    <div class="flex items-center">
                        <div class="text-sm text-gray-700 font-medium truncate">${Utils.escape(opt.indication)}</div>
                    </div>
                </td>
                <td class="w-28 py-0.5 align-baseline text-right pr-0.5">
                    <div class="flex justify-end items-baseline whitespace-nowrap leading-tight">
                        <span class="text-blue-600 font-bold text-base">${res.dose}</span>
                        ${res.unit ? `<span class="text-xs text-gray-500 font-medium ml-0.5">${res.unit}</span>` : ""}
                    </div>
                </td>
                <td class="w-24 py-0.5 align-baseline text-center text-base text-blue-600 font-bold whitespace-nowrap pr-1">
                    ${res.freq}
                </td>
            </tr>`;
        }).join("");

        const expandRowId = `expand-${item.uniqueKey}`;
        const iconId = `icon-${item.uniqueKey}`;

        return `
          <tbody class="draggable-item group select-none" data-id="${item.uniqueKey}">
              <tr class="relative cursor-pointer group-hover:bg-gray-50 transition-colors" 
                  style="z-index: ${100 - index};"
                  onclick="toggleSubRow('${expandRowId}', '${iconId}')">
                  <td class="w-px pl-0 py-1.5 align-top" onclick="event.stopPropagation()">
                      <button onclick="State.removeItem('${item.uniqueKey}')" class="p-0.5 mt-0.5 text-gray-200 hover:text-stone-600 transition-colors">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                      </button>
                  </td>
                  <td class="py-1.5 align-baseline max-w-0 w-full"> 
                      <div class="flex items-start">
                          ${alertIconHtml} 
                          <div class="flex flex-col w-full min-w-0">
                              <div class="flex items-baseline flex-nowrap overflow-hidden pr-2">
                                  ${typeLabel} 
                                  <span class="pl-0.5 text-gray-800 font-bold text-base truncate">${Utils.escape(item.label)}</span>
                                  <span class="whitespace-nowrap">${strengthHtml}</span>
                              </div>
                              ${subTextHtml}
                          </div>
                      </div>
                  </td>
                  <td class="w-28 py-1.5 align-baseline pt-2 pr-1 relative" colspan="2">
                      <div class="flex justify-end items-center gap-1 pointer-events-none">
                          <svg id="${iconId}" class="w-4 h-4 text-gray-200 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                      </div>
                  </td>
              </tr>
              <tr id="${expandRowId}" class="group-hover:bg-gray-50 transition-colors">
                  <td colspan="4" class="p-0">
                      <div class="pl-11 py-0.5 relative">
                          <div class="absolute left-11 top-0 bottom-6 w-px bg-gray-300"></div>
                          <div class="rounded-md overflow-hidden relative z-10">
                              <table class="w-full border-collapse">
                                  <tbody>${subRowsHtml}</tbody>
                              </table>
                          </div>
                      </div>
                  </td>
              </tr>
          </tbody>`;
      }).join("");

    Render.initSortable();
  },

  // C. Alert Box Rendering
  warnings: () => {
    const box = document.getElementById("alert-box");
    const toggleBtn = document.getElementById("btn-alert-toggle");
    if (!box || !toggleBtn) return;

    const ingredientMap = Utils.getIngredientMap(State.selected);
    
    // Filter ingredients with more than 1 source
    const warns = Object.entries(ingredientMap).filter(
      ([ingName, sources]) => sources.length > 1
    );

    if (warns.length === 0) {
      box.classList.add("hidden");
      toggleBtn.classList.add("hidden");
      State.isAlertOpen = false;
      return;
    }

    toggleBtn.classList.remove("hidden");
    toggleBtn.innerHTML = DrugIcons.alert;

    if (!State.isAlertOpen) {
      box.classList.add("hidden");
      return;
    }

    const itemsHtml = warns
      .map(([ingName, sources]) => {
         const names = sources.map(s => s.name).join(", ");
         return `<li>Duplicate: <b>${Utils.escape(ingName)}</b> <span class="text-gray-500">[${names}]</span></li>`;
      })
      .join("");

    box.innerHTML = `<div class="flex items-start">
                        <div class="w-4 h-4 mr-2 mt-0.5 shrink-0 text-red-500">${DrugIcons.alert}</div>
                        <div>
                            <h3 class="text-xs font-bold text-red-800 mb-1">Duplicate Components (${warns.length})</h3>
                            <ul class="text-xs text-red-700 list-disc list-inside space-y-0.5">${itemsHtml}</ul>
                        </div>
                     </div>`;
    box.classList.remove("hidden");
  },

  // D. UI Helpers
  updateSlotsUI: () => {
    CONFIG.SLOTS.forEach((id) => {
      const btn = document.getElementById(`btn-set-${id}`);
      if (!btn) return;
      const hasData = State.slots[id] && State.slots[id].length > 0;
      if (hasData) btn.classList.add("slot-filled");
      else btn.classList.remove("slot-filled");
    });
  },

  sortableInstance: null,
  initSortable: () => {
    const el = document.getElementById("result-body");
    if (!el) return;
    if (Render.sortableInstance) Render.sortableInstance.destroy();
    
    // SortableJS Configuration
    Render.sortableInstance = Sortable.create(el, {
      animation: 150,
      delay: 300,
      delayOnTouchOnly: true,
      ghostClass: "sortable-ghost",
      chosenClass: "sortable-chosen",
      draggable: "tbody.draggable-item",
      handle: "tr:first-child",
      onEnd: function(evt) {
        if (evt.oldIndex !== evt.newIndex) State.moveItem(evt.oldIndex, evt.newIndex);
      },
    });
  },

  updateAll: () => {
    Render.list();
    Render.table();
    Render.warnings();
  },
};

// ==========================================
// 7. GLOBAL EVENT HANDLERS (Exposed to Window)
// ==========================================

// UI: Update the visual state of the Toggle Switch (Drug vs Class)
window.updateModeBtnUI = () => {
  const track = document.getElementById("mode-switch-track");
  const slider = document.getElementById("toggle-slider");
  const iconDrug = document.getElementById("knob-icon-drug");
  const iconClass = document.getElementById("knob-icon-class");

  if (!track || !slider || !iconDrug || !iconClass) return;

  if (State.currentTab === "drug") {
    slider.style.transform = "translateX(0)";
    track.classList.add("bg-blue-200");
    track.classList.remove("bg-purple-200");
    iconDrug.classList.remove("opacity-0");
    iconDrug.classList.add("opacity-100");
    iconClass.classList.remove("opacity-100");
    iconClass.classList.add("opacity-0");
  } else {
    slider.style.transform = "translateX(calc(100% + 4px))";
    track.classList.remove("bg-blue-200");
    track.classList.add("bg-purple-200");
    iconDrug.classList.remove("opacity-100");
    iconDrug.classList.add("opacity-0");
    iconClass.classList.remove("opacity-0");
    iconClass.classList.add("opacity-100");
  }
};

window.toggleSearchMode = () => {
  State.currentTab = State.currentTab === "drug" ? "class" : "drug";
  updateModeBtnUI();
  Render.list();
  // Reset scroll position on tab switch
  const container = document.getElementById("list-container");
  if (container) container.scrollTop = 0;
};

window.toggleClassState = (clsName, isOpen) => {
  if (isOpen) State.expandedClasses.add(clsName);
  else State.expandedClasses.delete(clsName);
};

window.handleSearch = (val) => {
  State.inputs.search = val.trim();
  const clearBtn = document.getElementById("btn-clear-search");
  
  // Toggle Clear 'X' button visibility
  if (clearBtn) {
    if (val.length > 0) clearBtn.classList.remove("hidden");
    else clearBtn.classList.add("hidden");
  }
  Render.list();
  const container = document.getElementById("list-container");
  if (container) container.scrollTop = 0;
};

window.clearSearch = () => {
  const input = document.getElementById("search-input");
  if (input) {
    input.value = "";
    input.focus();
    window.handleSearch("");
  }
};

// Bridge functions to State methods
window.loadSet = (id) => State.loadSlot(id);
window.saveToSet = (id) => State.saveSlot(id);
window.toggleItem = (key) => State.toggleItem(key);
window.removeItem = (key) => State.removeItem(key);
window.clearAllDrugs = () => {
  State.clearAll();
  
  // [UX Fix] Force close menus to prevent sticky state
  // Reset toolbar stacking context
  document.getElementById("menu-load")?.classList.add("hidden");
  document.getElementById("menu-save")?.classList.add("hidden");
  const toolbar = document.getElementById("result-toolbar");
  if (toolbar) toolbar.style.zIndex = "";
};
window.toggleAlert = () => {
  State.isAlertOpen = !State.isAlertOpen;
  Render.warnings();
  
  // [UX Consistency] Also close menus when toggling alert
  document.getElementById("menu-load")?.classList.add("hidden");
  document.getElementById("menu-save")?.classList.add("hidden");
  const toolbar = document.getElementById("result-toolbar");
  if (toolbar) toolbar.style.zIndex = "";
};

window.toggleSubRow = (id, iconId) => {
  const row = document.getElementById(id);
  const icon = document.getElementById(iconId);
  if (row) {
    const isHidden = row.classList.contains('hidden');
    if (isHidden) {
      row.classList.remove('hidden');
      if (icon) icon.style.transform = 'rotate(180deg)';
    } else {
      row.classList.add('hidden');
      if (icon) icon.style.transform = 'rotate(0deg)';
    }
  }
};

// Dropdown Menu Logic: Close the other menu if open (Mutual Exclusion)
window.toggleLoadMenu = () => {
  const menu = document.getElementById("menu-load");
  const other = document.getElementById("menu-save");
  const toolbar = document.getElementById("result-toolbar");
  if (other) other.classList.add("hidden");
  if (menu) {
    menu.classList.toggle("hidden");
    const isOpen = !menu.classList.contains("hidden");
    // Raise Z-Index so menu floats above content
    if (toolbar) {
      toolbar.style.zIndex = isOpen ? "200" : "";
    }
  }
};

window.toggleSaveMenu = () => {
  const menu = document.getElementById("menu-save");
  const other = document.getElementById("menu-load");
  const toolbar = document.getElementById("result-toolbar");
  if (other) other.classList.add("hidden"); 
  if (menu) {
    menu.classList.toggle("hidden");
    const isOpen = !menu.classList.contains("hidden");
    if (toolbar) {
      toolbar.style.zIndex = isOpen ? "200" : "";
    }
  }
};

// Close menus when clicking outside
document.addEventListener('click', (e) => {
  const isButton = e.target.closest('button');
  const isMenu = e.target.closest('#menu-load') || e.target.closest('#menu-save');
  if (!isButton && !isMenu) {
    document.getElementById("menu-load")?.classList.add("hidden");
    document.getElementById("menu-save")?.classList.add("hidden");
    const toolbar = document.getElementById("result-toolbar");
    if (toolbar) toolbar.style.zIndex = "";
  }
});

// ==========================================
// 8. APPLICATION ENTRY POINT
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  // DOM Elements
  const wtInput = document.getElementById("pt-weight");
  const ageInput = document.getElementById("pt-age");
  const searchInput = document.getElementById("search-input");
  const ageErrorMsg = document.getElementById("age-error-msg");
  const wtErrorMsg = document.getElementById("weight-error-msg");

  // Input Masking: Allow only numbers and one decimal point
  const formatInputValue = (val) => {
    val = val.replace(/[^\d.]/g, "");
    const dots = val.split(".");
    if (dots.length > 2) val = dots[0] + "." + dots.slice(1).join("");
    const parts = val.split(".");
    if (parts[0].length > 3) parts[0] = parts[0].substring(0, 3);
    if (parts.length > 1) {
      parts[1] = parts[1].substring(0, 1);
      val = `${parts[0]}.${parts[1]}`;
    } else {
      val = parts[0];
    }
    return val;
  };

  // UX: Clean up input on blur (remove trailing dot)
  const handleBlur = (e, key) => {
    let val = e.target.value;
    if (val.endsWith(".")) {
      e.target.value = val.slice(0, -1);
      State.inputs[key] = parseFloat(e.target.value) || 0;
      Render.table();
    }
  };

  // Visual Validation Feedback
  const toggleErrorStyle = (inputEl, errorMsgEl, isError) => {
    if (isError) {
      if (errorMsgEl) errorMsgEl.classList.remove("hidden");
      inputEl.classList.add("border-red-500", "focus:border-red-500", "focus:ring-red-500");
      inputEl.classList.remove("border-blue-200", "focus:border-blue-500", "focus:ring-blue-500");
    } else {
      if (errorMsgEl) errorMsgEl.classList.add("hidden");
      inputEl.classList.remove("border-red-500", "focus:border-red-500", "focus:ring-red-500");
      inputEl.classList.add("border-blue-200", "focus:border-blue-500", "focus:ring-blue-500");
    }
  };

  // ==Attach Listeners==
  
  if (wtInput) {
    wtInput.addEventListener("input", (e) => {
      const cleanVal = formatInputValue(e.target.value);
      if (e.target.value !== cleanVal) e.target.value = cleanVal;
      
      const numVal = Utils.parseNum(cleanVal);
      State.inputs.weight = numVal;
      Render.table(); // Real-time calculation
      
      const hasValue = cleanVal.trim() !== "";
      const isError = hasValue && numVal > 0 && numVal < 6; // BW >=6
      toggleErrorStyle(wtInput, wtErrorMsg, isError);
    });
    wtInput.addEventListener("blur", (e) => handleBlur(e, "weight"));
  }

  if (ageInput) {
    ageInput.addEventListener("input", (e) => {
      const cleanVal = formatInputValue(e.target.value);
      if (e.target.value !== cleanVal) e.target.value = cleanVal;
      
      const numVal = Utils.parseNum(cleanVal);
      State.inputs.age = numVal;
      Render.table(); // Real-time calculation
      
      const hasValue = cleanVal.trim() !== "";
      const isError = hasValue && numVal > 0 && (numVal < 1 || numVal > 18); // Age 1-18
      toggleErrorStyle(ageInput, ageErrorMsg, isError);
    });
    ageInput.addEventListener("blur", (e) => handleBlur(e, "age"));
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      window.handleSearch(e.target.value);
    });
  }

  // --- Final Boot Sequence ---
  State.init();
  window.updateModeBtnUI();
  Render.updateSlotsUI();
  Render.list();
  Render.table();
  Render.warnings();

  console.log("System Ready: Pediatric Dose Calculator (Advanced Mode)");
});