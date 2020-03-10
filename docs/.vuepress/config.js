module.exports = {
  title: '兜兜的读书笔记',
  themeConfig: {
    search: true,
    collapsable: true,
    searchMaxSuggestions: 10,
    lastUpdated: '最后更新时间',
    repo: 'https://github.com/mcdulldd/Note',
    base: '/Note/',
    repoLabel: 'Github',
    sidebar: 'auto',
    nav: [{
        text: 'HOME',
        link: '/'
      },
      {
        text: 'HTML',
        link: '/HTML/'
      },
      {
        text: 'CSS',
        link: '/CSS/CSS Secrets/',
      },
      {
        text: 'JavaScript',
        items: [
          {
            text: 'Effective JavaScript',
            link: '/JavaScript/Effective JavaScript/'
          }
        ]
      }
    ]
  }
}
