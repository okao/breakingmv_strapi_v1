// export default [
//   'strapi::logger',
//   'strapi::errors',
//   'strapi::security',
//   'strapi::cors',
//   'strapi::poweredBy',
//   'strapi::query',
//   'strapi::body',
//   'strapi::session',
//   'strapi::favicon',
//   'strapi::public',
// ];

export default ({ env }) => [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "frame-src": [
            "http://localhost:*",
            "self",
            "sandbox.embed.apollographql.com",
            "*ondigitalocean.app",
          ],
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            env("CF_PUBLIC_ACCESS_URL").replace(/^https?:\/\//, ""),
            "market-assets.strapi.io",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            env("CF_PUBLIC_ACCESS_URL").replace(/^https?:\/\//, ""),
            "market-assets.strapi.io",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      headers: "*",
      origin: "*",
      // origin: [
      //   // "http://localhost:1337",
      //   // "http://localhost:3000",
      //   // "https://*ondigitalocean.app",
      //   // "https://*breakingmv.com",
      //   // "http://172.**.**.**:3000",
      // ],
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
