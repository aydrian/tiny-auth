# Tiny Auth

A [MongoDB Stitch](https://www.mongodb.com/cloud/stitch) example demonstrating authentication using Email/Password, Facebook, and Google.

[![Powered by Stitch](http://badge.learnstitch.com/?appid=tiny-auth-cornj)](http://cloud.mongodb.com)

## web-ui

React.js application created using [Create React App](https://github.com/facebook/create-react-app).

## stitch-app

Exported (as template) [Stitch app](https://docs.mongodb.com/stitch/import-export/export-stitch-app/).

## Scripts

The following scripts will assist in the initial setup of your Stitch Application.

## Requirements:

- Install the [stitch-cli](https://docs.mongodb.com/stitch/import-export/stitch-cli-reference/)
- Generate an [API Key](https://docs.atlas.mongodb.com/configure-api-access/#generate-api-keys)
- Create a `.env` file like the following

```
export STITCH_API_KEY=<API_KEY>
export STITCH_USERNAME=<CLOUD_USERNAME>
export STITCH_APPID=<APPID>
```

- Create a `secrets.json` file in the `stitch-app` directory like the following

```
{
  "auth_providers": {
    "oauth2-google": {
      "clientSecret": "<client-secret>"
    },
    "oauth2-facebook": {
      "clientSecret": "<secret>"
    }
  }
}
```

**NOTE:** Do not commit this file.

### deploy.sh

Deploy current code using `./deploy.sh` in the root of the project

```
> ./deploy.sh
```

### export.sh

Export the project code template using `./export.sh` in the root of the project.

```
> ./export.sh
```

**Note:** This exports the application configuration without any service ID values, including the App ID.

### deploy-hosting.sh

Exports the Stitch Projects, copies files from `web-ui/build`, and deploys them to Stitch Hosting.

```
> ./deploy-hosting.sh
```

**Note:** Be sure to run `npm run build` in the `web-ui` folder first.
