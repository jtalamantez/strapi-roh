module.exports = ({ env }) => ({
    //...
    'import-export-entries': {
      enabled: true,
      config: {
        // See `Config` section.
      },
    },
    'filter-button': {
        enabled: true,
    },
    "fullstack-filters": {
        enabled: false,
        resolve: "./src/plugins/fullstack-filters", // path to plugin folder
      },
    //...
  });