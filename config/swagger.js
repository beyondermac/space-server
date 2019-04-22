'use strict'

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Swagger Information
  | Please use Swagger 2 Spesification Docs
  | https://swagger.io/docs/specification/2-0/basic-structure/
  |--------------------------------------------------------------------------
  */

  enable: true,
  specUrl: '/swagger.json',

  options: {
    swaggerDefinition: {
      info: {
        title: 'Adonis 💘 Swagger',
        version: '1.0.0',
      },

      basePath: '/',

      securityDefinitions: {
        ApiKey: {
          description: 'ApiKey description',
          name: 'Authorization'
        },

        OAuth2: {
          authorizationUrl: 'https://example.com/oauth/authorize',
          tokenUrl: 'https://example.com/oauth/token',
          scopes: {
            read: 'Grants read access (this is just sample)',
            write: 'Grants write access (this is just sample)',
            admin: 'Grants read and write access to administrative information (this is just sample)'
          }
        },
      }
    },

    apis: [
      //'doc/**/*.yml',
      'app/**/*.js',
    ]
  }
}
