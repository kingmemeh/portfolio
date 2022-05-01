const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'King.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Kingsley Memeh',
  role: 'Full-Stack Engineer',
  description:
    'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Magnus',
    description:
      'Magnus is an functional video streaming platform, focused on overall product design and user-interactivity ',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/kingmemeh/magnus-client',
    livePreview: 'https://github.com',
  },
  {
    name: 'Bartender',
    description:
      'Bartender provides users with cocktail recipes.',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'BandSite',
    description:
      'SPA for a band.',
    stack: ['SASS', 'TypeScript', 'React'],
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
