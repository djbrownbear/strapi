"use strict";

/**
 * offering controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::offering.offering",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params;
      const { results, pagination } = await strapi.db
        .query("api::offering.offering")
        .findOne({ where: { slug: id } });
      const sanitizedResults = await this.sanitizeOutput(results, ctx);

      return this.transformResponse(sanitizedResults, { pagination });
    },
  })
);
