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
      headers: ["Content-Type", "Authorization", "Origin", "Accept"],
      origin: [
        "http://localhost:1337",
        "http://localhost:3000",
        "https://*ondigitalocean.app",
        "https://*breakingmv.com",
      ],
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"],
      keepHeaderOnError: true,
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
  {
    name: "strapi::query",
    config: {
      arrayLimit: 100,
      depth: 20,
    },
  },
  {
    name: "strapi::body",
    config: {
      formLimit: "256mb", // modify form body
      jsonLimit: "256mb", // modify JSON body
      textLimit: "256mb", // modify text body
      formidable: {
        maxFileSize: 250 * 1024 * 1024, // multipart data, modify here limit of uploaded file size
      },
    },
  },
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::compression",
    config: {
      br: true,
    },
  },
];
