## IDE exteinsions

This project uses [unocss](https://unocss.dev/) - great alternative to tailwind. You need to install unocss extension to IDE.
VS Code: https://unocss.dev/integrations/vscode
Jetbrains IDE: https://unocss.dev/integrations/jetbrains

## Package manager

This project uses [pnpm](https://pnpm.io) as package manager. You cannot install/delete/update packages with other package managers.
Installation guide: https://pnpm.io/installation

I prefer to use [ni](https://github.com/antfu/ni). This is small package that will determine which package manager is used by itself
Installation: `npm i -g @antfu/ni` 

## Dependencies installation

`pnpm install`

## Enviroment Variables

You need to create .env file with fields from `.env.sample`, otherwise, the application will not start.
`cp .env.sample .env`

## API

For local development, use [preview (mocked)](https://github.com/youtogether-online/mock) api. 
You can install it locally and run using npm, or run it with [docker-compose](https://github.com/youtogether-online/releases)

### Localhost

```
pnpm run start:dev # for development mode
pnpm run start:prod # for production mode
pnpm run start:storybook # for storybook
```
