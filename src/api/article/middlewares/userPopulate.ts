import { factories } from "@strapi/strapi";

export default (config, { env, strapi }) => {
  return async (ctx, next) => {
    if (!ctx.query.populate) {
      ctx.query.populate = ["createdBy", "updatedBy"];
    }

    await next();
  };
};
