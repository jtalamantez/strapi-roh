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


    //MAKE SOMETRHING AS ROH TRUE
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


    async location_updateSINGLE_LOC_REMOVE(ctx) {
        //GEt post va
        const body = ctx.request.body
        const ids = body.ids
        const location = body.location

        console.log("Location: ", location) 
        console.log("IDS: ", ids)

        //const ids = [147, 148, 149]
        //Loop over ids and update
        for (const id of ids) {
            console.log("ID: ", id)
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

    async location_update(ctx) {
        const body = ctx.request.body
        const ids = body.ids
        const location = body.location
        const page = body.page
        let dbType = "api::recipe.recipe"

        switch (page) {
            case "recipe":
                dbType = "api::recipe.recipe"
                break;
            case "beverage-build":
                dbType = "api::beverage-build.beverage-build"
                break;
            case "line-build":
                dbType = "api::line-build.line-build"
                break;
            case "checklist":
                dbType = "api::checklist.checklist"
                break;
        }

        console.log("Location: ", location) 
        console.log("IDS: ", ids)
        console.log("page: ", page)
        console.log("dbType: ", dbType)


        for (const id of ids) {
            console.log("ID: ", id)

            // Fetch the existing locations
            const existingEntry = await strapi.db.query(dbType).findOne({
                where: {
                  id: id,
                },
                populate: ['Locations'],
            });

            console.log("EXISTING ENTRY: ", existingEntry)

            // Append the new location to the existing ones
            const updatedLocations = [...existingEntry.Locations, location];

            // Update the database with the new array of locations
            await strapi.db.query(dbType).update({
                where: {
                  id: id,
                },
                data: {
                  Locations: updatedLocations
                },
            });
        }
        return body
    },



   


}));
