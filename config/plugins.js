//pulling from .env file

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
          provider: 'aws-s3',
          providerOptions: {
            accessKeyId: env('AAKIA47CR3GF3236BWWDN'),
            secretAccessKey: env('DwTRsJK39NQ0h2GHUWRBvyzQsiJrQhqYQkCeU6f0'),
            region: 'us-east-1',
            params: {
              ACL: env('AWS_ACL', 'public-read'),
              signedUrlExpires: env('AWS_SIGNED_URL_EXPIRES', 15 * 60),
              Bucket: env('strapi-latest-131'),
            },
          },
          actionOptions: {
            upload: {},
            uploadStream: {},
            delete: {},
          },
        },
      },
  });
  

