module.exports = {
    routes: [
        {
            method: 'POST',
            path: '/custom',
            handler: 'recipe.customAction',
            config: {
                auth:false
            },
        }
    ]
}