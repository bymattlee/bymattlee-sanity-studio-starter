export default {
  widgets: [
    {
      name: 'structure-menu'
    },
    {
      name: 'project-info',
      options: {
        data: [
          {
            title: 'Sanity Repo',
            value: 'https://github.com/bymattlee/bymattlee-sanity-starter-cms',
            category: 'Code'
          },
          {
            title: 'Website Repo',
            value: 'https://github.com/bymattlee/bymattlee-web-starter-files',
            category: 'Code'
          }
        ]
      }
    },
    {
      name: 'netlify',
      options: {
        title: 'Netlify Deploys',
        description:
          'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
        sites: [
          {
            title: 'Sanity',
            apiId: 'XXX',
            buildHookId: 'XXX',
            name: 'XXX'
          },
          {
            title: 'Website',
            apiId: 'XXX',
            buildHookId: 'XXX',
            name: 'XXX'
          }
        ]
      }
    },
    {
      name: 'project-users'
    }
  ]
}
