/**
 * article router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::article.article", {
  config: {
    find: {
      middlewares: ["api::article.user-populate"],
    },
    findOne: {
      middlewares: ["api::article.user-populate"],
    },
  },
});
