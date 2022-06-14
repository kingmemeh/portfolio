const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'kingsleymemeh.ca',
  title: 'King.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Kingsley Memeh',
  role: 'Full-Stack Engineer',
  description:

    'Who is Kingsley? Excellent question. Kingsley isn&apos;t just another developer. Kingsley isn&apos;t just about software and development. Kingsley… Kingsley is about people and experiences. Kingsley is all about innovative development that makes a difference, transforming the world as we know it. Making the world a better place, through interactive and aesthectially pleasing applications. I firmly believe we can only achieve greatness if first we achieve goodness.\n  - Gavin Belson, CEO, Hooli',

  resume: 'https://drive.google.com/file/d/1dMsr1QGEWBndeBbFA4ZU7cWAzovh9Jac/view?usp=sharing',
  social: {
    linkedin: 'https://linkedin.com/in/kingsley-memeh',
    github: 'https://github.com/kingmemeh',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Magnus',
    description:
      'Magnus is an functional video streaming platform, focused on overall product design and user-interactivity ',
    stack: ['React', 'JavaScript', 'MongoDB', 'REST API'],
    sourceCode: 'https://github.com/kingmemeh/magnus-client',
    livePreview: 'https://magnusvideo.netlify.app',
  },
  {
    name: 'Bartender',
    description:
      'Bartender provides users with cocktail recipes.',
    stack: ['React', 'JavaScript', 'CocktailDB API', 'Material UI'],
    sourceCode: 'https://github.com/kingmemeh/bartender',
    livePreview: 'https://bartendr.netlify.app/',
  },
  {
    name: 'BandSite',
    description:
      'SPA for a band.',
    stack: ['Javascript', 'HTML', 'CSS', 'REST API'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'Node.js',
  'React',
  'Redux',
  'SQL',
  'MongoDB',
  'SASS',
  'Express',
  'Git',
  'CI/CD',
  'Rest API',
  'DOM',
  'OAuth',
  'Jest',
  'Agile',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'kingsleymemeh@icloud.com',
}

export { header, about, projects, skills, contact }
