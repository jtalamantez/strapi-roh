module.exports = ({ env }) => ({
  //...
  "import-export-entries": {
    enabled: true,
    config: {
      // See `Config` section.
    },
  },
  filter: {
    enabled: true,
    resolve: "./src/plugins/filter",
  },
  upload: {
    config: {
        provider: 'cloudinary',
        providerOptions: {
            cloud_name: env('CLOUDINARY_NAME'),
            api_key: env('CLOUDINARY_KEY'),
            api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
            upload: {},
            delete: {},
        },
    },
    /*
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: "AKIA47CR3GF3236BWWDN",
        secretAccessKey: "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",
        region: "us-east-1",
        params: {
          ACL: env("AWS_ACL", "public-read"),
          signedUrlExpires: env("AWS_SIGNED_URL_EXPIRES", 15 * 60),
          Bucket: "strapi-latest-131",
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
    */
  },
});
