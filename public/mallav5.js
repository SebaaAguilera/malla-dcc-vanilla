const mallav5 = {
  "semesters": [
    {
      "number": 1,
      "subjects": [
        {
          "code": "FI1000",
          "name": "Introducción a la Física Clásica",
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
          "code": "CD1100",
          "name": "Desafíos de Innovación en Ingeniería y Ciencias",
          "shortName": "Desafíos",
          "requirements": [],
          "credits": "6"
        },
        {
          "code": "BT1211",
          "name": "Aplicaciones de la Biología a la Ingeniería y Ciencias",
          "shortName": "Biología",
          "requirements": [],
          "credits": "3"
        }
      ]
    },
    {
      "number": 2,
      "subjects": [
        {
          "code": "FI1100",
          "name": "Introducción a la Física Moderna",
          "shortName": "Moderna",
          "requirements": ["FI1000", "MA1001", "MA1101"],
          "credits": "6"
        },
        {
          "code": "MA1002",
          "name": "Cálculo Diferencial e Integral",
          "shortName": "Diferencial",
          "requirements": ["MA1001"],
          "credits": "6"
        },
        {
          "code": "MA1102",
          "name": "Álgebra Lineal",
          "shortName": "Lineal",
          "requirements": ["MA1101"],
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
          "code": "CD1201",
          "name": "Proyecto de Innovación en Ingeniería y Ciencias",
          "shortName": "Proyecto",
          "requirements": ["CD1100"],
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
          "code": "FI2001",
          "name": "Mecánica",
          "shortName": "Mecánica",
          "requirements": ["FI1100", "MA1002", "MA1102"],
          "credits": "6"
        },
        {
          "code": "FI2003",
          "name": "Métodos Experimentales",
          "shortName": "Métodos",
          "requirements": ["FI1100", "MA1002"],
          "credits": "6"
        },
        {
          "code": "IQ2211",
          "name": "Química",
          "shortName": "Química",
          "requirements": [],
          "credits": "6"
        }
      ]
    },
    {
      "number": 4,
      "subjects": [
        {
          "code": "MA2002",
          "name": "Cálculo Avanzado y Aplicaciones",
          "shortName": "CAA",
          "requirements": ["MA2001", "MA2601"],
          "credits": "6"
        },
        {
          "code": "IN2201",
          "name": "Economía",
          "shortName": "Econo",
          "requirements": ["MA2001"],
          "credits": "6"
        },
        {
          "code": "FI2002",
          "name": "Electromagnetismo",
          "shortName": "Electro",
          "requirements": ["MA2001", "MA2601", "FI2003"],
          "credits": "6"
        },
        {
          "code": "FI2004/IQ2212",
          "name": "Termodinámica / Termodinámica Química",
          "shortName": "Termo",
          "requirements": ["IQ2211", "FI2001", "MA2001"],
          "credits": "6"
        },
        {
          "code": "CD2201",
          "name": "Módulo Interdisciplinario",
          "shortName": "Módulo",
          "requirements": ["CD1201"],
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
      "number": 5,
      "subjects": [
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
          "requirements": ["MA2001", "MA2601", "CC1002", "FI2001"],
          "credits": "6"
        },
        {
          "code": "CC3001",
          "name": "Algoritmos y Estructuras de Datos",
          "shortName": "Algoritmos",
          "requirements": ["CC1002"],
          "credits": "6"
        },
        {
          "code": "CC3101",
          "name": "Matemáticas Discretas para la Computación",
          "shortName": "Discretas",
          "requirements": ["MA1101", "CC1002"],
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
      "number": 6,
      "subjects": [
        {
          "code": "CC3201",
          "name": "Bases de Datos",
          "shortName": "Batos",
          "requirements": ["CC3001"],
          "credits": "6"
        },
        {
          "code": "CC3002",
          "name": "Metodologías de Diseño y Programación",
          "shortName": "Memes",
          "requirements": ["CC3001"],
          "credits": "6"
        },
        {
          "code": "CC3102",
          "name": "Teoría de la Computación",
          "shortName": "Teoría",
          "requirements": ["CC3101"],
          "credits": "6"
        },
        {
          "code": "CC3301",
          "name": "Programación de Software de Sistemas",
          "shortName": "PSS",
          "requirements": ["CC3001"],
          "credits": "6"
        },
        {
          "code": "EL0001",
          "name": "Electivo de Licenciatura 1",
          "shortName": "Electivo",
          "requirements": [],
          "credits": "6"
        },
        {
          "code": "CC4900",
          "name": "Taller de Práctica Profesional I",
          "shortName": "Taller de Práctica 1",
          "requirements": [],
          "credits": "0"
        }
      ]
    },
    {
      "number": 7,
      "subjects": [
        {
          "code": "CC5205",
          "name": "Minería de Datos",
          "shortName": "Minería",
          "requirements": ["CC3001"],
          "credits": "6"
        },
        {
          "code": "CC4401",
          "name": "Ingeniería de Software",
          "shortName": "Ing de SW",
          "requirements": ["CC3002", "CC3201"],
          "credits": "6"
        },
        {
          "code": "CC4102",
          "name": "Diseño y Análisis de Algoritmos",
          "shortName": "Logaritmos",
          "requirements": ["MA3403", "CC3001", "CC3102"],
          "credits": "6"
        },
        {
          "code": "CC4302",
          "name": "Sistemas Operativos",
          "shortName": "SOs",
          "requirements": ["CC3301"],
          "credits": "6"
        },
        {
          "code": "EL0003",
          "name": "Electivo de Licenciatura 2",
          "shortName": "Electivo",
          "requirements": [],
          "credits": "6"
        },
        {
          "code": "CC4901",
          "name": "Práctica Profesional I",
          "shortName": "Práctica 1",
          "requirements": ["CC3002", "CC3201", "CC3301", "CC4900"],
          "credits": "7"
        }
      ]
    },
    {
      "number": 8,
      "subjects": [
        {
          "code": "CC4402",
          "name": "Formulación, Evaluación y Gestión de Proyectos",
          "shortName": "Evalua",
          "requirements": ["CC4401", "IN2201", "CD2201"],
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
          "code": "CC4303",
          "name": "Redes",
          "shortName": "Redes",
          "requirements": ["CC4302"],
          "credits": "6"
        },
        {
          "code": "EL0004",
          "name": "Electivo de Licenciatura 3",
          "shortName": "Electivo",
          "requirements": [],
          "credits": "6"
        },
        {
          "code": "EL0005",
          "name": "Electivo de Licenciatura 4",
          "shortName": "Electivo",
          "requirements": [],
          "credits": "6"
        },
        {
          "code": "CC5900",
          "name": "Taller de Práctica Profesional II",
          "shortName": "Taller de Práctica 2",
          "requirements": ["CC4901"],
          "credits": "0"
        }
      ]
    },
    {
      "number": 9,
      "subjects": [
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
        },
        {
          "code": "CG0001",
          "name": "Núcleo Gestión para Ingenieros",
          "shortName": "Gestión",
          "requirements": [],
          "credits": "6"
        },
        {
          "code": "FE0001",
          "name": "Formación Integral de Especialidad I",
          "shortName": "FI Especialidad",
          "requirements": [],
          "credits": "3"
        },
        {
          "code": "FE0002",
          "name": "Formación Integral de Especialidad II",
          "shortName": "FI Especialidad",
          "requirements": [],
          "credits": "3"
        },
        {
          "code": "CC5901",
          "name": "Práctica Profesional II",
          "shortName": "Práctica 2",
          "requirements": ["CC4901", "CC4401", "CC4101"],
          "credits": "7"
        }
      ]
    },
    {
      "number": 10,
      "subjects": [
        {
          "code": "CC6907",
          "name": "Introducción al Trabajo de Título",
          "shortName": "E",
          "requirements": ["CC4402"],
          "credits": "6"
        },
        {
          "code": "EE0004",
          "name": "Electivo de Especialidad 4",
          "shortName": "Electivo",
          "requirements": [],
          "credits": "6"
        },
        {
          "code": "EE0005",
          "name": "Electivo de Especialidad 5",
          "shortName": "Electivo",
          "requirements": [],
          "credits": "6"
        },
        {
          "code": "CC5402",
          "name": "Proyecto de Software",
          "shortName": "Proyecto",
          "requirements": ["CC5205", "CC4402"],
          "credits": "12"
        }
      ]
    },
    {
      "number": 11,
      "subjects": [
        {
          "code": "CC6919",
          "name": "Trabajo de Título",
          "shortName": "F",
          "requirements": ["CC6907"],
          "credits": "24"
        },
        {
          "code": "EE0006",
          "name": "Electivo de Especialidad 6",
          "shortName": "Electivo",
          "requirements": [],
          "credits": "6"
        }
      ]
    }
  ]
}
