module.exports = {
    routes: [
        {
            method: 'POST',
            path: '/location_update',
            handler: 'recipe.location_update',
            config: {
                auth:false
            },
        }
    ]
}