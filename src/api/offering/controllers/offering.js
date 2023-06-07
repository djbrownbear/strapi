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
      const entity = await strapi.db
        .query("api::offering.offering")
        .findOne({ where: { slug: id } });
      const sanitizedResults = await this.sanitizeOutput(entity);

      return this.transformResponse(sanitizedResults);
    },
  })
);
