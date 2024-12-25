module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/styles.css");
    eleventyConfig.addPassthroughCopy("src/main.js");
  
    eleventyConfig.addCollection("pages", function(collectionApi) {
      return collectionApi.getFilteredByGlob("src/sections/*.md").sort((a, b) => a.data.order - b.data.order);
    });
  
    return {
      dir: {
        input: "src",
        includes: "_includes",
        output: "_site"
      },
      markdownTemplateEngine: "njk",
      htmlTemplateEngine: "njk",
      dataTemplateEngine: "njk",
      templateFormats: ["md", "njk"]
    };
  };
  