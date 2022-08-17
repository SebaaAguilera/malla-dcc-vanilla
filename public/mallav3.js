const mallav3 = {
  "semesters": [
    {
      "number": 1,
      "subjects": [
        {
          "code": "FI1001",
          "name": "Introducción a la Física Newtoniana",
          "shortName": "Intro a la Física",
          "requirements": [],
          "credits": "6"
        },
        {
          "code": "MA1001",
          "name": "Introducción al Cálculo",
          "shortName": "Intro al Cálculo",
          "requirements": [],
          "credits": "6"
        },
        {
          "code": "MA1101",
          "name": "Introducción al Álgebra",
          "shortName": "Intro al Álgebra",
          "requirements": [],
          "credits": "6"
        },
        {
          "code": "CC1000",
          "name": "Herramientas Computacionales para Ingeniería y Ciencias",
          "shortName": "Herramientas",
          "requirements": [],
          "credits": "3"
        },
        {
          "code": "EI1001",
          "name": "Introducción a la Ingeniería I",
          "shortName": "Intro a la Ing",
          "requirements": [],
          "credits": "3"
        },
        {
          "code": "CM1001",
          "name": "Química",
          "shortName": "Química",
          "requirements": [],
          "credits": "3"
        }
      ]
    },
    {
      "number": 2,
      "subjects": [
        {
          "code": "FI1002",
          "name": "Sistemas Newtonianos",
          "shortName": "Sist. Newtonianos",
          "requirements": ["FI1001", "CC1000/CC1002", "MA1001"],
          "credits": "6"
        },
        {
          "code": "MA1002",
          "name": "Cálculo Diferencial e Integral",
          "shortName": "Diferencial",
          "requirements": ["MA1001", "MA1101S"],
          "credits": "6"
        },
        {
          "code": "MA1102",
          "name": "Álgebra Lineal",
          "shortName": "Lineal",
          "requirements": ["MA1001S", "MA1101"],
          "credits": "6"
        },
        {
          "code": "CC1002",
          "name": "Introducción a la Programación",
          "shortName": "Progra",
          "requirements": [],
          "credits": "6"
        },
        {
          "code": "EI1102",
          "name": "Introducción a la Ingeniería II",
          "shortName": "Intro II",
          "requirements": [],
          "credits": "3"
        },
        {
          "code": "FG0001",
          "name": "Formación Integral",
          "shortName": "Formación Integral",
          "requirements": [],
          "credits": "3"
        }
      ]
    },
    {
      "number": 3,
      "subjects": [
        {
          "code": "FI2001",
          "name": "Mecánica",
          "shortName": "Mecánica",
          "requirements": ["FI1002", "MA1002", "MA1102"],
          "credits": "6"
        },
        {
          "code": "MA2001",
          "name": "Cálculo en Varias Variables",
          "shortName": "CVV",
          "requirements": ["MA1002", "MA1102"],
          "credits": "6"
        },
        {
          "code": "MA2601",
          "name": "Ecuaciones Diferenciales Ordinarias",
          "shortName": "EDO",
          "requirements": ["MA1002", "MA1102"],
          "credits": "6"
        },
        {
          "code": "IN2201",
          "name": "Economía",
          "shortName": "Econo",
          "requirements": ["MA2001S"],
          "credits": "6"
        },
        {
          "code": "EI2001",
          "name": "Taller de Proyecto",
          "shortName": "Taller",
          "requirements": [],
          "credits": "3"
        },
        {
          "code": "FG0002",
          "name": "Formación Integral",
          "shortName": "Formación Integral",
          "requirements": [],
          "credits": "3"
        }
      ]
    },
    {
      "number": 4,
      "subjects": [
        {
          "code": "FI2004/CM2004",
          "name": "Termodinámica o Fisicoquímica",
          "shortName": "Mecánica",
          "requirements": ["CM1001", "MA2001", "FI2001S"],
          "credits": "6"
        },
        {
          "code": "MA2002",
          "name": "Cálculo Avanzado y Aplicaciones",
          "shortName": "CAA",
          "requirements": ["MA2001", "MA2601"],
          "credits": "6"
        },
        {
          "code": "FI2002",
          "name": "Electromagnetismo",
          "shortName": "Electro",
          "requirements": ["FI2001", "MA2001", "MA2601"],
          "credits": "6"
        },
        {
          "code": "FI2003",
          "name": "Métodos Experimentales",
          "shortName": "Métodos",
          "requirements": ["MA2001", "CM1001", "EI1102", "FI2001", "MA2601"],
          "credits": "6"
        },
        {
          "code": "FG0003",
          "name": "Formación Integral",
          "shortName": "Formación Integral",
          "requirements": [],
          "credits": "3"
        },
        {
          "code": "FG0004",
          "name": "Formación Integral",
          "shortName": "Formación Integral",
          "requirements": [],
          "credits": "3"
        }
      ]
    },
    {
      "number": 5,
      "subjects": [
        {
          "code": "CC3001",
          "name": "Algoritmos y Estructuras de Datos",
          "shortName": "Algoritmos",
          "requirements": ["CC1002", "MA1101"],
          "credits": "6"
        },
        {
          "code": "CC3101",
          "name": "Matemáticas Discretas para la Computación",
          "shortName": "Discretas",
          "requirements": ["CC1002", "MA1101"],
          "credits": "6"
        },
        {
          "code": "MA3403",
          "name": "Probabilidades y Estadística",
          "shortName": "Proba y Esta",
          "requirements": ["MA2001"],
          "credits": "6"
        },
        {
          "code": "CC3501",
          "name": "Modelación y Computación Gráfica para Ingenieros",
          "shortName": "Gráfica",
          "requirements": ["CC1002", "MA2601"],
          "credits": "6"
        },
        {
          "code": "FG0005",
          "name": "Formación Integral",
          "shortName": "Formación Integral",
          "requirements": [],
          "credits": "3"
        },
        {
          "code": "FG0006",
          "name": "Formación Integral",
          "shortName": "Formación Integral",
          "requirements": [],
          "credits": "3"
        }
      ]
    },
    {
      "number": 6,
      "subjects": [
        {
          "code": "CC3301",
          "name": "Programación de Software de Sistemas",
          "shortName": "PSS",
          "requirements": ["CC3001"],
          "credits": "6"
        },
        {
          "code": "CC3002",
          "name": "Metodologías de Diseño y Programación",
          "shortName": "Metodologías",
          "requirements": ["CC3001"],
          "credits": "6"
        },
        {
          "code": "CC3102",
          "name": "Teoría de la Computación",
          "shortName": "Teoría",
          "requirements": ["CC3101", "CC3001"],
          "credits": "6"
        },
        {
          "code": "CC3201",
          "name": "Bases de Datos",
          "shortName": "BDD",
          "requirements": ["CC3101/FI2002"],
          "credits": "6"
        },
        {
          "code": "EL0001",
          "name": "Electivo de Licenciatura 1",
          "shortName": "Electivo",
          "requirements": [],
          "credits": "6"
        }
      ]
    },
    {
      "number": 7,
      "subjects": [
        {
          "code": "CC4301",
          "name": "Arquitectura de Computadores",
          "shortName": "Arqui",
          "requirements": ["CC3301", "FI2002"],
          "credits": "6"
        },
        {
          "code": "CC4101",
          "name": "Lenguajes de Programación",
          "shortName": "Lenguajes",
          "requirements": ["CC3102"],
          "credits": "6"
        },
        {
          "code": "CC4401",
          "name": "Ingeniería de Software",
          "shortName": "Ing de SW",
          "requirements": ["CC3001", "CC3002", "CC3201"],
          "credits": "6"
        },
        {
          "code": "CC4901",
          "name": "Práctica Profesional I",
          "shortName": "Práctica 1",
          "requirements": ["CC3002", "CC3201", "CC3301"],
          "credits": "7"
        },
        {
          "code": "EL0003",
          "name": "Electivo de Licenciatura 2",
          "shortName": "Electivo",
          "requirements": [],
          "credits": "6"
        },
        {
          "code": "EL0003",
          "name": "Electivo de Licenciatura 3",
          "shortName": "Electivo",
          "requirements": [],
          "credits": "6"
        }
      ]
    },
    {
      "number": 8,
      "subjects": [
        {
          "code": "CC4302",
          "name": "Sistemas Operativos",
          "shortName": "SOs",
          "requirements": ["CC4301"],
          "credits": "6"
        },
        {
          "code": "CC4303",
          "name": "Redes",
          "shortName": "Redes",
          "requirements": ["CC4302S"],
          "credits": "6"
        },
        {
          "code": "CC4102",
          "name": "Diseño y Análisis de Algoritmos",
          "shortName": "Ing de SW",
          "requirements": ["MA3403", "CC3102", "FI2003"],
          "credits": "6"
        },
        {
          "code": "EL0004",
          "name": "Electivo de Licenciatura 4",
          "shortName": "Electivo",
          "requirements": [],
          "credits": "6"
        },
        {
          "code": "EL0005",
          "name": "Electivo de Licenciatura 5",
          "shortName": "Electivo",
          "requirements": [],
          "credits": "6"
        }
      ]
    },
    {
      "number": 9,
      "subjects": [
        {
          "code": "IN3301",
          "name": "Evaluación de Proyectos",
          "shortName": "Evalua",
          "requirements": ["IN2201", "MA3403"],
          "credits": "6"
        },
        {
          "code": "CC5401",
          "name": "Ingeniería de Software II",
          "shortName": "Ing de SW 2",
          "requirements": ["CC4101", "CC4401"],
          "credits": "6"
        },
        {
          "code": "CC5901",
          "name": "Práctica Profesional II",
          "shortName": "Práctica 2",
          "requirements": ["CC4901", "CC4401", "CC4101"],
          "credits": "7"
        },
        {
          "code": "EE0001",
          "name": "Electivo de Especialidad 1",
          "shortName": "Electivo",
          "requirements": [],
          "credits": "6"
        },
        {
          "code": "EE0002",
          "name": "Electivo de Especialidad 2",
          "shortName": "Electivo",
          "requirements": [],
          "credits": "6"
        },
        {
          "code": "EE0003",
          "name": "Electivo de Especialidad 3",
          "shortName": "Electivo",
          "requirements": [],
          "credits": "6"
        }
      ]
    },
    {
      "number": 10,
      "subjects": [
        {
          "code": "CC6908",
          "name": "Introducción al Trabajo de Título",
          "shortName": "E",
          "requirements": ["CC5401"],
          "credits": "6"
        },
        {
          "code": "CG0001",
          "name": "Gestión para Ingenieros",
          "shortName": "Gestión",
          "requirements": [],
          "credits": "6"
        },
        {
          "code": "CC5402",
          "name": "Proyecto de Software",
          "shortName": "Proyecto",
          "requirements": ["IN3301", "CC5401", "CC4303", "CC4102"],
          "credits": "12"
        },
        {
          "code": "EE0004",
          "name": "Electivo de Especialidad 4",
          "shortName": "Electivo",
          "requirements": [],
          "credits": "6"
        },
        {
          "code": "FE0001",
          "name": "Formación Integral de Especialidad I",
          "shortName": "FI Especialidad",
          "requirements": [],
          "credits": "3"
        }
      ]
    },
    {
      "number": 11,
      "subjects": [
        {
          "code": "CC6909",
          "name": "Trabajo de Memoria de Título",
          "shortName": "F",
          "requirements": ["CC6908", "CC5402"],
          "credits": "21"
        },
        {
          "code": "EE0005",
          "name": "Electivo de Especialidad 5",
          "shortName": "Electivo",
          "requirements": [],
          "credits": "6"
        },
        {
          "code": "FE0002",
          "name": "Formación Integral de Especialidad II",
          "shortName": "FI Especialidad",
          "requirements": [],
          "credits": "3"
        }
      ]
    }
  ]
}
