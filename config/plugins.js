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
    upload: {
        config: {
          provider: 'local',
          providerOptions: {
            sizeLimit: 100000000, //these are in bytes
          },
        },
      },
  });
  

