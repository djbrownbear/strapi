'use strict';

/**
 * offering controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController(
  "api::offering.offering",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { title } = ctx.params
      const { results, pagination } = await strapi.db
        .query("api::offering.offering")
        .findOne({ where: { slug: title } });
      const sanitizedResults = await this.sanitizeOutput(results, ctx);

      return this.transformResponse(sanitizedResults, { pagination });
    },
  })
);
