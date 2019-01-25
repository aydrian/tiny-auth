#!/bin/sh
source .env
echo Logging into Stitch
stitch-cli login --username=$STITCH_USERNAME --api-key=$STITCH_API_KEY
echo Exporting Project to hosting directory
stitch-cli export --app-id=$STITCH_APPID --output=./stitch-app-hosting
echo Setting up Hosting folder
mkdir -p stitch-app-hosting/hosting/files
echo $'[]' >> stitch-app-hosting/hosting/metadata.json
echo Copying web-ui build files
cp -rf web-ui/build/. stitch-app-hosting/hosting/files
echo Importing from hosting directory
stitch-cli import --include-hosting --app-id=$STITCH_APPID --path=./stitch-app-hosting
echo Logging out
stitch-cli logout
echo Deploy Hosting complete