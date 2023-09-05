'use strict';

/**
 * beverage-build service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::beverage-build.beverage-build');
