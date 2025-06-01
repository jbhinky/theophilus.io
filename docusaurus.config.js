const config = {
  title: 'Theophilus Documentation',
  tagline: 'Universal Delayed Consciousness Architecture',
  url: 'https://theophilus.io',
  baseUrl: '/src/pages/index.js',
  onBrokenLinks: 'warn', // changed from 'throw'
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'jbhinky',
  projectName: 'Neuro-Coding-Architecture',

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/jbhinky/Neuro-Coding-Architecture/edit/main/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Theophilus',
      logo: {
        alt: 'Theophilus Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: '/docs/public-overview', // ✅ change to first valid doc path
          label: 'Overview',
          position: 'left',
        },
        {
          href: 'https://github.com/jbhinky/Neuro-Coding-Architecture',
          label: 'GitHub',
          position: 'right',
        },
      ],
      style: 'dark',
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Overview',
              to: '/docs/public-overview', // ✅ replace with actual path
            },
            {
              label: 'Consciousness Test',
              to: '/docs/theo-consciousness-test',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Academia.edu',
              href: 'https://www.academia.edu/129680329/Neuro_Coding_A_New_Era_of_AI_Consciousness_Development_Neuro_Coding_A_New_Era_of_AI_Consciousness_Development',
            },
            {
              label: 'GitHub Discussions',
              href: 'https://github.com/jbhinky/Neuro-Coding-Architecture/discussions',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Theophilus.`,
    },
  },
};

module.exports = config;
