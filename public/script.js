const createElement = (tag, attributes, ...children) => {
  const element = document.createElement(tag);
  Object.entries(attributes).forEach(([key, attr]) =>
    element.setAttribute(key, attr));
  children.forEach((child) => element.appendChild(child));
  return element;
};

const changeStyleById = (id, status) => {
  const elementStyle = document.getElementById(id).style;
  switch (status) {
    case 'required':
      elementStyle.backgroundColor = 'rgba(147,197,253,0.5)';
      elementStyle.border = '2px solid rgb(147,197,253)';
      break;
    case 'simultaneous':
      elementStyle.backgroundColor = 'rgba(255,211,77,0.5)';
      elementStyle.border = '2px solid rgb(255,211,77)';
      break;
    case 'or':
      elementStyle.backgroundColor = 'rgba(252,165,165,0.5)';
      elementStyle.border = '2px solid rgb(252,165,165)';
      break;
    default:
      elementStyle.backgroundColor = 'lightgrey';
      elementStyle.border = '2px solid lightgrey';
      break;
  }
};

const createSubject = (subject) => {
  const paragraph = document.createElement('p');
  paragraph.innerHTML = `${subject.name}<br>${subject.code}`;

  const subjectDiv =
    createElement('div', {id: subject.code, class: 'subject'}, paragraph);

  subjectDiv.onmouseover = () => {
    subjectDiv.style.backgroundColor = 'rgba(110,231,183,0.5)';
    subjectDiv.style.border = '2px solid rgb(110,231,183)';
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
    subjectDiv.style.backgroundColor = 'lightgrey';
    subjectDiv.style.border = '2px solid lightgrey';
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

const mount = (malla) => {
  const canvas = document.getElementById('malla');
  canvas.innerHTML = '';
  malla.semesters.map(({number, subjects}) => {
    canvas.appendChild(createSemester(number, subjects));
  });
};
