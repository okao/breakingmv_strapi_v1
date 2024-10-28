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
            "iogscgkgow88gog0gwsk04wc.75.119.135.245.sslip.io",
            "dhurumee.com",
            "metabase.oala.dev",
            "breakingmv.com",
            "www.breakingmv.com",
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
      origin: [
        "http://localhost:3000",
        "http://localhost:3001",
        "https://dev.breakingmv.com",
        "https://breakingmv.com",
        "http://139.59.95.171:3000",
        "https://testing-next-server.vercel.app",
        "http://iogscgkgow88gog0gwsk04wc.75.119.135.245.sslip.io",
        "https://metabase.oala.dev",
        "https://dhurumee.com",
        "https://www.breakingmv.com",
      ],
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"],
      headers: [
        "Content-Type",
        "Authorization",
        "Origin",
        "Accept",
        "X-Requested-With",
        "X-CSRF-Token",
        "X-Frame-Options",
        "Access-Control-Allow-Origin",
        "Access-Control-Allow-Headers",
        "Access-Control-Allow-Methods",
        "Access-Control-Allow-Credentials",
        "Access-Control-Expose-Headers",
        "Access-Control-Max-Age",
      ],
      keepHeaderOnError: true,
    },
  },
  "strapi::poweredBy",
  "strapi::query",
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
];
