import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'b86bf1db3e994471979bab97aec83243',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Soltanoff',
  domain: 'sulsoltanoff.notion.site',
  author: 'Sultan Soltanov',

  // open graph metadata (optional)
  description: 'My personal blog in world wide web',

  // social usernames (optional)
  twitter: 'sultansoltanoff',
  github: 'sulsoltanoff',
  linkedin: 'sulsoltanoff',
  telegram: 'sulsoltanoff',
  email: 'sulsoltanoff@icloud.com',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Обо мне',
      pageId: 'b9513666339f4ee1803c0347e7c8a6f6'
    },
    {
      title: 'Цели',
      pageId: 'ce7ca835c1c341cba3b1c8abe5b30d61'
    },
    {
      title: 'Личная библиотека',
      pageId: '14e6c97396284341b4524048f9ced3af'
    },
    {
      title: 'Заметки',
      pageId: '0772a9f408684b3a96c7012fa2db39fa'
    }
  ]
})
