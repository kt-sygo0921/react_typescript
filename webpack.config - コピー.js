const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const glob = require('glob');


// const target_path = {
//     target_ts: ,
//     target_sass: path.join(basePath + 'scss/*.scss'),
//     target_ejs: basePath + 'ejs/*.ejs'
// }

//共通設定
const basePath = path.resolve(__dirname,'app/src/ts/');
const re = basePath.replace(/\\/g,'/'); //ファイルパス書き換え※windows用

const target_ts = glob.sync(path.resolve(__dirname, 'app/src/ts/**/*.ts'), {ignore:path.resolve(__dirname, 'app/src/ts/**/_*.ts')});
//const target_scss = glob.sync(path.resolve(__dirname, 'app/src/scss/**/*.scss'), {ignore:path.resolve(__dirname, 'app/src/scss/**/_*.scss')});
const entries_ts = {};
//const entries_scss = {};


target_ts.forEach(value => {
    var key = value.replace(re , '');
    key = key.replace(/.ts/,'.js');
    key = key.replace(/.tsx/,'.jsx');
    entries_ts[key] = value;
})

// target_scss.forEach(value => {
//     var key = value.replace(re , '');
//     key = key.replace(/.scss/,'.css');
//     entries_scss[key] = value;
// })

module.exports = [{
    entry: entries_ts,
    output: {
        // path: path.join(__dirname , '/app/view/js'),
        filename: "[name]",
        resolve: {
            extensions: [".ts", ".tsx",]
        }
    },
    module: {
        loaders: [
             {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            }
        ]
    }
}
//,{
//     entry: {
//         bundle: target_scss
//     },
//     output: {
//         path: path.join(__dirname , '/app/view/css'),
//         filename: "[name]"
//     },
//     module: {
//         loaders: [
//             {
//                 test:/\.scss$/,
//                 loader: ExtractTextPlugin.extract("style-loader","css-loader!postcss-loader")
//             }
//         ]
//     },
//     postcss:[autoprefixer({ browsers: ['IE 9', 'IE 10', 'IE 11', 'last 2 versions'] }), precss],
//     plugins: [
//         new ExtractTextPlugin("[name].css"),
//         new BrowserSyncPlugin({
//             server: { baseDir: ['./app'] },
//             directory: true,
//             files:[
//                 'app/view/js/*.js',
//                 'app/view/css/*.css'
//             ]
//         })
//     ]
//  }
//,{
//     module: {
//         loaders:[
//             {
//                 test: /\.ejs$/,
//                 loader: 'ejs-loader'
//             }
//         ]
//     },
//     ejsLoader : {
//     variable    : 'data',
//     interpolate : /\{\{(.+?)\}\}/g,
//     evaluate    : /\[\[(.+?)\]\]/g
//   }
// }
];
