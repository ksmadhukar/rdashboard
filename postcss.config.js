var tailwindcss = require('tailwindcss');

const purgecss = require('@fullhuman/postcss-purgecss')({

    // Specify the paths to all of the template files in your project
    content: [
        './public/index.html',
        './src/**/*.css',
        './src/**/*.jsx',
        './src/**/*.js',
    ],

    // Include any special characters you're using in this regular expression
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = {
    plugins: [
        require('postcss-import'),
        tailwindcss('./tailwind.config.js'),
        require('postcss-nested'),
        require('autoprefixer'),
        require('cssnano')({
            preset: ['default', {
                discardComments: {
                    removeAll: true,
                },
            }]
        }),
        purgecss
    ]
}