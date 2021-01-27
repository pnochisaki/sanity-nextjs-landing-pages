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
                  buildHookId: '6011e15ff3645f11f941c09c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ctd7fq2b',
                  apiId: '26db79e3-88e0-4ac2-a07e-731f0aa24c45'
                },
                {
                  buildHookId: '6011e15f84ce3c012f727095',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-55bw2ip1',
                  apiId: '50238f0c-9750-40e3-8c19-4ce7645b3521'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pnochisaki/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-55bw2ip1.netlify.app', category: 'apps'}
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
