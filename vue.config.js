module.exports = {
    css: {
      loaderOptions: {
        sass: {
            prependData: `@import "@/assets/css/general.scss";`
  
        }
      }
    }
};