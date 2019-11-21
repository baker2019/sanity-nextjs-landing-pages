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
                  buildHookId: '5dd63c93587f6d687c57df27',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-tg6mq8sr',
                  apiId: '37beab90-1bac-4e15-bd61-4d23169fc87f'
                },
                {
                  buildHookId: '5dd63c94b9f1d1d527c8c31a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-r2k6in7i',
                  apiId: '7d10acb8-b0d4-4205-a429-9821e7dba0e3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/baker2019/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-r2k6in7i.netlify.com', category: 'apps'}
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
