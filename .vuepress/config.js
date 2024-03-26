module.exports = {
  title: 'Starry',
  head: [['link', { rel: 'icon', href: '/assets/img/logo.png' }]],
  themeConfig: {
    logo: '/assets/img/logo.png',
    sidebarDepth: 0,
    nav: [
      { text: 'Index 首页', link: '/' },
      { text: 'Starry', link: 'https://www.starry.sg' },
    ],
    markdown: {
      lineNumbers: true,              // 让代码块显示行号
      extractHeaders: ['h2', 'h3'],   // 从 MarkDown 文档中提取哪几级标题，保存到 this.$page.headers
      toc: { includeLevel: [2, 3] },  // MarkDown 文档中，用 [[toc]] 标签建立目录时，收集哪几级标题
    },
    sidebar: [
      '/',
      ['/about/about', 'About'],
    ]
  }
}
