import { Config as ImageOptimizerConfig } from "strapi-plugin-image-optimizer/dist/server/models/config";

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
        localServer: {
          maxage: 300000,
        },
        sizeLimit: 250 * 1024 * 1024, // 256mb in bytes
      },
    },
  },
  "image-optimizer": {
    enabled: true,
    config: {
      include: ["jpeg", "jpg", "png"],
      exclude: ["gif"],
      formats: ["webp"],
      sizes: [
        {
          name: "xs",
          width: 300,
        },
        {
          name: "sm",
          width: 768,
        },
        {
          name: "md",
          width: 1280,
        },
        {
          name: "lg",
          width: 1920,
        },
        // {
        //   name: "xl",
        //   width: 2840,
        //   // Won't create an image larger than the original size
        //   withoutEnlargement: true,
        // },
        {
          // Uses original size but still transforms for formats
          name: "original",
        },
      ],
      quality: 70,
    } satisfies ImageOptimizerConfig,
  },
});
