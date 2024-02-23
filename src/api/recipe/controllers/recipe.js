'use strict';

/**
 * recipe controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::recipe.recipe',({strapi}) => ({
    
    async findTest(ctx) {
        console.log("HELLO2 ")
        const results = await strapi.db.query('api::recipe.recipe').findMany({ // uid syntax: 'api::api-name.content-type-name'
            where: {
              Name: {
                $startsWith: 'a',
              },
            },
            populate: {
              category: true,
            },
        });
        return results;
    },



    async customAction(ctx) {

        //GEt post va
        const body = ctx.request.body
        const ids = body.ids
        //const ids = [147, 148, 149]
        //Loop over ids and update
        for (const id of ids) {
            await strapi.db.query("api::recipe.recipe").update({
                where: {
                  id: id,
                },
                data: {
                  roh:true
                },
            });
        }
        
       
        /*
        const results = await strapi.db.query('api::recipe.recipe').findMany({ // uid syntax: 'api::api-name.content-type-name'
            where: {
              Name: {
                $startsWith: 'a',
              },
            },
            populate: {
              category: true,
            },
        });
        */
        return body
    },


    async snake(ctx) {

        //GEt post va
        const body = ctx.request.body
        const ids = body.ids
        const location = body.location
        //const ids = [147, 148, 149]
        //Loop over ids and update
        for (const id of ids) {
            await strapi.db.query("api::recipe.recipe").update({
                where: {
                  id: id,
                },
                data: {
                  Locations: [location]
                },
            });
        }
        
       
     
        return body
    },

   


}));
