var moment = require("moment-timezone");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/css");

  eleventyConfig.addFilter("dateformat", function (dateIn) {
    return moment(dateIn).tz("Europe/London").format("DD-MMMM-Y HH:mm");
  });

  return {
    dir: {
      output: "dist",
      input: "src",
      data: "jsondata",
      includes: "partials_layouts",
    },

    templateFormats: ["njk", "md"],
  };
};
