# ap-cognizant-tech-task

Created by Alex Pilugin as a Technical Assignment for [Cognizant / Zone company](https://www.cognizant.com/en-uk/)  

Link to the description: [https://zone.github.io/frontend/movie-listing-ui](https://zone.github.io/frontend/movie-listing-ui)    

This application requires your own registration on **[TMDb](https://www.themoviedb.org/account/signup)**

**This product uses the TMDb API but is not endorsed or certified by TMDb.**

This application uses: [TMDb Movies Now Playing API](https://developers.themoviedb.org/3/movies/get-now-playing), 
[TMDb Image API](https://developers.themoviedb.org/3/getting-started/images)

**Please use your own API_KEY to have access to TMDb API**     
**[Place your own VUE_APP_API_KEY](https://cli.vuejs.org/guide/mode-and-env.html#example-staging-mode) in .env file in the root project folder**    


This web app is bootstrapped with [Vue CLI create a project](https://cli.vuejs.org/guide/creating-a-project.html)        
This web application support SCSS/SASS preprocessor: [https://cli.vuejs.org/guide/css.html#pre-processors](https://cli.vuejs.org/guide/css.html#pre-processors)     

## TMDb Logos & Attribution
As per our terms of use, every application that uses our data or images is required to properly attribute TMDb as the source. Below you will find some logos you can use within your application. We've also included some basic brand guidelines.

![TMBd logo](https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg)

## Requirements

- Display a list of movies, each showing their title, genres and poster image.
- The movies should be ordered by popularity (most popular first - popularity property).
- Movies should also be filterable by their rating (vote_average property). i.e If rating was set to 5, you would expect to see all movies with a rating of 5 or higher.
- The input API's should only be called once.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm start
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Fix the issue with SSRI
[Regular Expression Denial of Service](https://www.npmjs.com/advisories/565/versions)

**Overview**     
ssri 5.2.2-6.0.1 and 7.0.0-8.0.0, processes SRIs using a regular expression which is vulnerable to a denial of service. Malicious SRIs could take an extremely long time to process, leading to denial of service. This issue only affects consumers using the strict option.
**Remediation**    
Update to version 6.0.2 or 8.0.1 or later     