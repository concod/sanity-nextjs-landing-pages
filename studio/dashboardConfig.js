export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f6c9a243f1f771b8f15cbf7',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-8qymjfvy',
                  apiId: '7e388991-fa55-43c0-884a-209aa0a7d8a0'
                },
                {
                  buildHookId: '5f6c9a24482bba1964189d5e',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-fmigbegw',
                  apiId: 'e4166a96-60e1-424a-a820-3e0a752b0e39'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/concod/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-fmigbegw.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
