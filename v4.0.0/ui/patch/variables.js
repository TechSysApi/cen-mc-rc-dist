var variables={
  "name": "@ch-post/cen-mc-rc-stream-api",
  "version": "4.0.0",
  "description": "cen-mc-rc stream API",
  "scripts": {
    "start": "apikana start src dist",
    "stop": "apikana stop",
    "create-sample": "apikana create-sample",
    "validate-samples": "apikana validate-samples",
    "test": "eslint src --ext .ts && apikana validate-samples",
    "lint": "eslint src --ext .ts",
    "lint-fix": "eslint src --ext .ts --fix"
  },
  "author": "herzamk",
  "license": "Apache-2.0",
  "dependencies": {},
  "devDependencies": {
    "apikana": "0.9.25",
    "apikana-defaults": "0.0.71",
    "@typescript-eslint/eslint-plugin": "^4.13.0",
    "@typescript-eslint/parser": "^4.13.0",
    "eslint": "^7.17.0",
    "eslint-config-prettier": "^7.1.0",
    "eslint-plugin-prettier": "^3.3.1",
    "prettier": "^2.2.1",
    "typescript": "^4.1.3"
  },
  "customConfig": {
    "type": "stream-api",
    "domain": "post.ch",
    "author": "herzamk",
    "namespace": "app.techsys.cen.mc.rc",
    "shortName": "cen-mc-rc",
    "projectName": "cen-mc-rc-stream-api",
    "npmPackage": "@ch-post/cen-mc-rc-stream-api",
    "title": "cen-mc-rc stream API",
    "plugins": [
      "dotnet",
      "readme"
    ],
    "dotnetNamespace": "Ch.Post.PL.Api.CenMcRc.V1",
    "dotnetPackageId": "Ch.Post.PL.Api.CenMcRc",
    "mqs": "MQTT"
  },
  "_": [
    "start",
    "src",
    "dist"
  ]
}