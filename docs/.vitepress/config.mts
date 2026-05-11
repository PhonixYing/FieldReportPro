import { defineConfig } from 'vitepress'

const base = '/FieldReportPro/'
const siteUrl = 'https://phonixying.github.io/FieldReportPro'

export default defineConfig({
  base,
  title: 'Field Report Pro',
  description: 'Photo PDF reports for contractors, inspectors, landlords, and property managers.',
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: `${base}FieldReportPro_AppIcon.png` }],
    ['meta', { name: 'theme-color', content: '#0b1a22' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Field Report Pro' }],
    ['meta', { property: 'og:image', content: `${siteUrl}/FieldReportPro_AppIcon.png` }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }]
  ],
  sitemap: {
    hostname: `${siteUrl}/`
  },
  themeConfig: {
    logo: '/FieldReportPro_AppIcon.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Privacy', link: '/privacy/' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/phonixying/FieldReportPro' }
    ],
    footer: {
      message: 'Offline field reporting for iPhone and iPad',
      copyright: 'Copyright © 2026 Field Report Pro'
    }
  }
})
