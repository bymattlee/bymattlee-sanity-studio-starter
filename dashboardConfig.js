export default {
  widgets: [
    {
      name: 'structure-menu',
    },
    {
      name: 'project-info',
      options: {
        data: [
          {
            title: 'Sanity Repo',
            value: 'https://github.com/bymattlee/sanity-eleventy-blog',
            category: 'Code'
          },
          {
            title: 'Eleventy Repo',
            value: 'https://github.com/bymattlee/sanity-eleventy-blog',
            category: 'Code'
          }
        ]
      }
    },
    {
      name: 'netlify',
      options: {
        title: 'Netlify Deploys',
        description: 'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
        sites: [
          {
            title: 'Sanity',
            apiId: 'XXX',
            buildHookId: 'XXX',
            name: 'XXX',
          },
          {
            title: 'Website',
            apiId: 'XXX',
            buildHookId: 'XXX',
            name: 'XXX'
          }
        ]
      }
    }
  ]
}
