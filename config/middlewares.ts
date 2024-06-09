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
            "*ondigitalocean.app",
            "*.blr1.digitaloceanspaces.com",
            "breakingmv.blr1.digitaloceanspaces.com",
            "breakingmv.blr1.cdn.digitaloceanspaces.com",
          ],
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            env("CF_PUBLIC_ACCESS_URL").replace(/^https?:\/\//, ""),
            // `https://breakingmv.blr1.cdn.digitaloceanspaces.com/breakingmv_media/1a14c64db3b3015ee1ef15e5e1b0385c.jpg`,
            `${env("DO_SPACE_BUCKET")}.${env("DO_SPACE_ENDPOINT")}`,
            `${env("DO_SPACE_BUCKET")}.${env("DO_SPACE_CDN")}`,
            `${env("DO_SPACE_BUCKET")}.${env("DO_SPACE_CDN")}`,
            "market-assets.strapi.io",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            env("CF_PUBLIC_ACCESS_URL").replace(/^https?:\/\//, ""),
            `${env("DO_SPACE_BUCKET")}.${env("DO_SPACE_ENDPOINT")}`,
            `${env("DO_SPACE_BUCKET")}.${env("DO_SPACE_CDN")}`,
            `${env("DO_SPACE_BUCKET")}.${env("DO_SPACE_CDN")}`,
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
