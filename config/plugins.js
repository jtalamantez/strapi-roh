module.exports = ({ env }) => ({
    //...
    'import-export-entries': {
      enabled: true,
      config: {
        // See `Config` section.
      },
    },
    'filter': {
        enabled: true,
        resolve: './src/plugins/filter'
    },
  });
  

