'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('fullstack-filters')
      .service('myService')
      .getWelcomeMessage();
  },
});
