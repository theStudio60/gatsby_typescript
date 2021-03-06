const path = require(`path`)
module.exports = {
  siteMetadata: {
    title: `Gastby60`,
    description: `This is a starter kit to build static websites using ReactJS, GatsbyJS and TypeScript`,
    author: `STUDIO60`,
    author_url: `https://www.studio60.ch`,
    
    homepage_link: `home`,
    homepage_image: `./image.jpg`,
    homepage_title: `Hola World !!`,
    homepage_subtitle: `This is a starter kit to build static websites using ReactJS, GatsbyJS and TypeScript`,
    homepage_intro: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
 
    about_page_link: `about`,
    about_page_image: `image.jpg`,
    about_page_title: `About This Starter Kit`,
    about_page_subtitle: `This is a starter kit to build static websites with Gatsby and TypeScript`,
    about_page_intro: `At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi.`,

    blog_page_link: `blog`,
    blog_page_title: `Blog`,
    blog_page_subtitle: ` `,
    blog_page_intro: `Posts will show up on this page`,

    contact_page_link: `contact`,
    contact_page_title: `Want to hire a web developpement team ?`,
    contact_page_subtitle: `Contact Us !`,
    contact_page_intro: ` Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae.`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        //background_color: `#663399`,
        //theme_color: `#663399`,
        //display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `node-sass`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    {
    resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
    resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [],
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
