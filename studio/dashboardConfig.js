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
                  buildHookId: '61cee0b86b80652849d74d93',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pagesxx-studio',
                  apiId: 'd2c9a6eb-f12d-4d41-8adb-847ce89db2aa'
                },
                {
                  buildHookId: '61cee0b9c5975ebbc8717caa',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pagesxx',
                  apiId: '53244933-067b-4b71-be6a-dd6fb4ad3121'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Apeqcode/sanity-nextjs-landing-pagesXx',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pagesxx.netlify.app', category: 'apps'}
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
