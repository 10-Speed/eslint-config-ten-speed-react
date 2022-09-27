# CONTRIBUTING

## Adding rules
- Modify code and create a pull-request to `main` branch

## Release
- make sure all new changes are in `main` branch
- checkout `main` branch
- run `yarn publish:patch` or `yarn publish:minor` to create a new release tag
- Github Actions will automatically then attempt to release a new version to npm