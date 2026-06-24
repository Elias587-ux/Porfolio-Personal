import htmlLogo from './assets/tech.icon/html.png';
import cssLogo from './assets/tech.icon/css.png';
import javascriptLogo from './assets/tech.icon/javascript.png';
import reactjsLogo from './assets/tech.icon/reactjs.png';
import tailwindcssLogo from './assets/tech.icon/tailwindcss.png';
import nodejsLogo from './assets/tech.icon/nodejs.png';
import mongodbLogo from './assets/tech.icon/mongodb.png';
import mysqlLogo from './assets/tech.icon/mysql.png';
import cppLogo from './assets/tech.icon/c++.png';
import pythonLogo from './assets/tech.icon/python.png';
import gitLogo from './assets/tech.icon/git.png';
import githubLogo from './assets/tech.icon/github.png';
import postmanLogo from './assets/tech.icon/postman.png';
import figmaLogo from './assets/tech.icon/figma.png';
import netlifyLogo from './assets/tech.icon/netlify.png';
import webfundationLogo from './assets/work/webfundation.jpeg';
import institutoLogo from './assets/education/insituto.jpg';
import fundacionpescarLogo from './assets/education/fundacionPescar.jpg';
import wordcupLogo from './assets/projects/wordcup.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'MySQL', logo: mysqlLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: webfundationLogo,
    role: 'Frontend Developer',
    company: 'Fundación Museos',
    date: 'Septiembre 2025 - Noviembre 2025',
    dateEn: 'September 2025 - November 2025',
    desc: 'Desarrollé el sitio web institucional que funciona como cara digital de la institución para informar al público y herramienta de gestión interna.',
    descEn: 'Developed the institutional website serving as the digital face of the organization to inform the public and as an internal content management tool.',
    skills: ['HTML', 'CSS', 'JavaScript', 'PHP'],
  },
];

export const education = [
  {
    id: 0,
    img: institutoLogo,
    school: 'Instituto de Educación Superior Nº11',
    date: 'Marzo 2024 - Presente',
    dateEn: 'March 2024 - Present',
    desc: 'Formación académica en Análisis de Sistemas con bases sólidas en Estructuras de Datos, Bases de Datos y Análisis y Diseño de Sistemas, dominando lenguajes como C++ y Python.',
    descEn: 'Academic training in Systems Analysis with solid foundations in Data Structures, Databases, and Systems Analysis and Design, mastering languages such as C++ and Python.',
  },
  {
    id: 1,
    img: fundacionpescarLogo,
    school: 'Fundación Pescar',
    date: 'Agosto 2025 - Diciembre 2025',
    dateEn: 'August 2025 - December 2025',
    desc: 'Formación intensiva en desarrollo web full stack: HTML, CSS, JavaScript, Node.js, MongoDB, Git/GitHub y Java con POO. Con fuerte enfoque en habilidades blandas, comunicación y trabajo en equipo.',
    descEn: 'Intensive training in full stack web development: HTML, CSS, JavaScript, Node.js, MongoDB, Git/GitHub, and Java with OOP. Strong focus on soft skills, communication, and teamwork.',
  },
];

export const workImageMap = {
  webfundation: webfundationLogo,
  wordcup: wordcupLogo,
};
