/* Local storage */
const localStorageThemeKey = 'localStorageThemeKey';
const localStorageMallaKey = 'localStorageMallaKey';
let currentTheme;
let currentMalla;

const createElement = (tag, attributes, ...children) => {
  const element = document.createElement(tag);
  Object.entries(attributes).forEach(([key, attr]) =>
    element.setAttribute(key, attr));
  children.forEach((child) => element.appendChild(child));
  return element;
};

const changeStyleById = (id, status) => {
  const element = document.getElementById(id);
  switch (status) {
    case 'required':
      element.classList.add('subject-required');
      break;
    case 'simultaneous':
      element.classList.add('subject-simultaneous');
      break;
    case 'or':
      element.classList.add('subject-or');
      break;
    default:
      element.classList.remove('subject-required');
      element.classList.remove('subject-simultaneous');
      element.classList.remove('subject-or');
      break;
  }
};

const createSubject = (subject) => {
  const title = document.createElement('div');
  title.classList.add('subject-title');
  title.textContent = subject.name;

  const code = document.createElement('span');
  code.textContent = subject.code;

  const credits = document.createElement('span');
  credits.textContent = subject.credits;

  const bar = createElement('div', {}, code, credits);
  bar.classList.add('subject-bar');

  const subjectDiv =
    createElement('div', {id: subject.code, class: 'subject'}, bar, title);

  subjectDiv.onmouseover = () => {
    subjectDiv.classList.add('subject-hover');

    subject.requirements.forEach((requirement) => {
      if (requirement.endsWith('S')) {
        changeStyleById(requirement.slice(0, -1), 'simultaneous');
      } else if (requirement.indexOf('/') > -1) {
        requirement.split('/').forEach((requirement) =>
          changeStyleById(requirement, 'or'));
      } else {
        changeStyleById(requirement, 'required');
      }
    });
  };

  subjectDiv.onmouseout = () => {
    subjectDiv.classList.remove('subject-hover');

    subject.requirements.forEach((requirement) => {
      if (requirement.endsWith('S')) {
        changeStyleById(requirement.slice(0, -1));
      } else if (requirement.indexOf('/') > -1) {
        requirement.split('/').forEach((requirement) =>
          changeStyleById(requirement));
      } else {
        changeStyleById(requirement);
      }
    });
  };

  return subjectDiv;
};

const createSemester = (number, subjects) => {
  const paragraph = document.createElement('p');
  paragraph.innerHTML = `SEMESTRE <br> ${number}`;

  return createElement('div', {
    id: `semester-${number}`,
    class: 'semester',
  },
  createElement('div', {
    class: 'semester-title',
  },
  paragraph,
  ),
  ...subjects.map((subject) => createSubject(subject)),
  );
};

const mount = (mallaKey) => {
  const canvas = document.getElementById('malla');
  canvas.innerHTML = '';

  let malla = (mallaKey === 'mallav5') ? mallav5 : mallav3;
  malla.semesters.map(({number, subjects}) => {
    canvas.appendChild(createSemester(number, subjects));
  });

  currentMalla = mallaKey;
  localStorage.setItem(localStorageMallaKey, currentMalla);
};

const toggleTheme = () => {
  currentTheme =
    document.getElementById('checkboxTheme').checked ? 'Dark' : 'Light';
  document.getElementById('checkboxInfo').innerHTML = `${currentTheme} theme`;
  document.querySelector('body').dataset.theme = currentTheme.toLowerCase();
  localStorage.setItem(localStorageThemeKey, currentTheme);
};

const init = () => {
  currentMalla = localStorage.getItem(localStorageMallaKey) || 'mallav5';
  mount(currentMalla);

  currentTheme = localStorage.getItem(localStorageThemeKey) ||
    (window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'Dark' : 'Light');
  document.getElementById('checkboxTheme').checked = currentTheme === 'Dark';
  toggleTheme();
}
