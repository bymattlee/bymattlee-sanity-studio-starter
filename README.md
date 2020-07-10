[![ByMattLee](http://hosted.bymattlee.com/github/bymattlee-logo.png)](http://bymattlee.com)

# ByMattLee Sanity Starter CMS
A starter headless CMS that features Sanity Studio and includes basic sections and fields.

## Installation
##### 1. Install Node >=12.0.0: <https://nodejs.org/en/>
##### 2. Install all dependencies
```
$ yarn
```

## Configuration
##### 1. Update Sanity API configuration
In `sanity.json`, enter the `projectId` and `dataset` to connect to cloud API.
##### 2. Update Dashboard config
In `dashboardConfig.json`, update GitHub URLs for reference and Netlify configuration for deployment.

## Use
##### Build Files And Start Development Server
```
$ yarn start
```
##### Build Files
```
$ yarn build
```

## Features
* Custom dashboard configuration with Netlify deployment
* Predefined fields and blocks for Pages, Articles, Sections, Menus, Settings (SEO, Favicons, Social, Analytics)
* Media browser
* Use with your favorite front-end setup

## Customizations
* Customize dashboard logo in `parts/customLogo.js`
* Customize favicon by replacing `favicon.ico` in `/static`
* Customize dashboard brand colors in `styles/variables.css`
