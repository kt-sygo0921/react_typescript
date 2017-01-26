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

const target_ts = glob.sync(path.resolve(__dirname, 'app/src/ts/**/{*.ts*,*.tsx}'), {ignore:path.resolve(__dirname, 'app/src/ts/**/{_*.ts,_*.tsx}')});
const entries_ts = {};

target_ts.forEach(value => {
    var key = value.replace(re , '');
    key = key.replace(/\//, ''); //先頭に付与される/を削除
    key = key.replace(/.tsx/,'.js'); //拡張子書き換え
    key = key.replace(/.ts/,'.js'); //拡張子書き換え
    entries_ts[key] = value;
})

module.exports = {
    entry: entries_ts,
    output: {
        path: path.join(__dirname , '/app/view/js/es6/'),
        filename: "[name]",
        resolve: {
            root:[path.join(__dirname,'node_modules')],
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
};
