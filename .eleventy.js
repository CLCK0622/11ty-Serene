const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/styles.css");
    eleventyConfig.addPassthroughCopy("src/main.js");

    eleventyConfig.addCollection("pages", function (collectionApi) {
        return collectionApi.getFilteredByGlob("src/sections/*.md").sort((a, b) => a.data.order - b.data.order);
    });

    eleventyConfig.addCollection("blog", function (collectionApi) {
        return collectionApi.getFilteredByGlob("src/blog/*.md").sort((a, b) => {
            return b.date - a.date;
        });
    });

    eleventyConfig.addFilter("date", (dateObj, format = "yyyy-MM-dd") => {
        return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(format);
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
