export default ({ env }) => ({
  // rest: {
  //   enabled: true,
  // },
  graphql: {
    enabled: true,
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 7,
      amountLimit: 100,
      // apolloServer: {
      //   tracing: false,
      // },
    },
  },
  // "apollo-sandbox": {
  //   enabled: env("APOLLO_SANDBOX_ENABLED", false),
  // },
  upload: {
    // config: {
    //   provider: "strapi-provider-cloudflare-r2",
    //   providerOptions: {
    //     accessKeyId: env("CF_ACCESS_KEY_ID"),
    //     secretAccessKey: env("CF_ACCESS_SECRET"),
    //     endpoint: env("CF_ENDPOINT"),
    //     params: {
    //       Bucket: env("CF_BUCKET"),
    //     },
    //     cloudflarePublicAccessUrl: env("CF_PUBLIC_ACCESS_URL"),
    //   },
    //   actionOptions: {
    //     upload: {},
    //     uploadStream: {},
    //     delete: {},
    //   },
    // },
    config: {
      provider: "strapi-provider-upload-do",
      providerOptions: {
        key: env("DO_SPACE_ACCESS_KEY"),
        secret: env("DO_SPACE_SECRET_KEY"),
        endpoint: env("DO_SPACE_ENDPOINT"),
        space: env("DO_SPACE_BUCKET"),
        // directory: env("DO_SPACE_DIRECTORY"),
        // cdn: env("DO_SPACE_CDN"),
      },
    },
  },
});
