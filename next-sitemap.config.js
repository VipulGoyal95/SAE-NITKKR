// next-sitemap.config.js

module.exports = {
    siteUrl: 'https://www.saenitkurukshetra.com', // ✅ Your actual domain
    generateRobotsTxt: true, // ✅ Generate robots.txt as well
    changefreq: 'weekly',
    priority: 0.7,
    sitemapSize: 5000,
    exclude: ['/private','/crowdfunding/thankyou','/crowdfunding/payment'], // ❌ Add routes you don't want to include
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/private'], // 🔒 Optional disallowed paths
        },
      ],
      additionalSitemaps: [],
    },
  };
  