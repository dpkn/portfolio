# Portfolio Website
This repo contains my portfolio website, made with [Vue](https://github.com/vuejs/vue), [Vue Router](https://github.com/vuejs/vue-router), [Normalize.css](https://github.com/necolas/normalize.css), and is scaffholded using the [Vue CLI](https://github.com/vuejs/vue-cli)

## Directories
| Directory         | Purpose                                                       |
|-------------------|---------------------------------------------------------------|
| /src/assets       | Static assets like fonts, images and styles                   |
| /src/views        | The Views used by Vue Router                                  |
| /src/components   | Vue Components that are used in the Views                     |
| /public           | Contains all static files that won't get processed by Webpack |
| /public/hku       | All static files regarding HKU assignments                    | 
| /public/portfolio | All static files for my professional portfolio                |
| /dist             | The compiled output from Webpack that will be published       |

## Project setup
The project is build upon the [Webpack](https://github.com/webpack/webpack) template. After cloning, run the following to install all the npm packages:
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
Will compile the website into the /dist folder

### Lints and fixes files
```
npm run lint
```
