export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "609a921c41e62f1810e976c2",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-20210511-studio",
                  apiId: "5daaaead-0878-4fdf-8049-f71f39db82e6",
                },
                {
                  buildHookId: "609a921c4c04723458d5cfa7",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-20210511",
                  apiId: "c6c04da2-7d01-4205-bb08-58aace29e75c",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/difarsa/sanity-gatsby-blog-20210511",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-20210511.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
