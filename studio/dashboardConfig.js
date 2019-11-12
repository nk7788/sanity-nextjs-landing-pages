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
                  buildHookId: '5dcaf352cd35920f69c3bcd8',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-hjj6rpwr',
                  apiId: '937c1c89-88f5-42a6-9a80-188f6172df51'
                },
                {
                  buildHookId: '5dcaf3529abbe6a812195ccb',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-xb37fk1a',
                  apiId: '7f6959f5-2cc3-4eb9-b92f-fe7869a19001'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nk7788/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-xb37fk1a.netlify.com', category: 'apps'}
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
