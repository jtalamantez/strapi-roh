'use strict';

/**
 * leadership-log service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::leadership-log.leadership-log');
