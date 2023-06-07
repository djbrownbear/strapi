"use strict";

/**
 * offering controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

const queryPopulate = (populate) => {
  if (Array.isArray(populate)) {
    return populate.flatMap(value => {
      return value.split(',').map(value => value);
    })
  }
}

module.exports = createCoreController(
  "api::offering.offering",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params;
      const { populate } = ctx.query;

      const entity = await strapi.db
        .query("api::offering.offering")
        .findOne({ where: { slug: id }, populate: queryPopulate(populate) });
      const sanitizedResults = await this.sanitizeOutput(entity);

      return this.transformResponse(sanitizedResults);
    },
  })
);
