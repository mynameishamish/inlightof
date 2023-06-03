module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy('src/css');
    eleventyConfig.addWatchTarget('src/css');

    eleventyConfig.addPassthroughCopy('src/assets');

    eleventyConfig.addCollection('reports', (collection) => {
        return collection.getFilteredByGlob('src/reports/*.md');
    });

    eleventyConfig.addShortcode('year', () => {
        return `${new Date().getFullYear()}`;
    });

    return {
        dir: {
            input: 'src',
            output: 'public',
        },
    };
};