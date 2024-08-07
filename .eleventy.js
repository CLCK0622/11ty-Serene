module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/main.js");
  
    return {
      dir: {
        input: "src",
        output: "_site"
      }
    };
  };
  