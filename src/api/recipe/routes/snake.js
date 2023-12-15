module.exports = {
    routes: [
        {
            method: 'POST',
            path: '/snake',
            handler: 'recipe.snake',
            config: {
                auth:false
            },
        }
    ]
}