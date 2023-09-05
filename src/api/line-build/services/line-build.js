'use strict';

/**
 * line-build service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::line-build.line-build');
