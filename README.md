# webpackstudy
webpack：https://www.webpackjs.com/guides/getting-started/#基本安装

npm版本和node版本。
创建文件夹/项目
npm init -y
npm install webpack webpack-clie --save-dev

创建src目录
创建index.html
创建src/index.js

安装lodash
npm install lodash --save-dev

使用node8.2以上的版本，使用
npx webpack 编译启动。

webpack4仍然支持配置文件的形式。
创建webpack.config.js
const path = require('path');

module.exports = {
    entry:'./src/index.js', //源文件
    output:{//输出目录文件名和目录。
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    }
};
npx webpack --config webpack.config.js
这里显示的使用--config调用了配置文件，在项目中，如果该文件存在，默认npx webpack仍然会使用它。
使用webpack-cli运行脚本不方便，我们使用npm script来支持定义。
在package.json中添加scripts
{
  "name": "webpackstudy",
  "version": "1.0.0",
  "description": "",
  "private": true,
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build":"webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "lodash": "^4.17.11",
    "webpack": "^4.30.0",
    "webpack-cli": "^3.3.1"
  }
}
注意标红的部分，现在我们就可以使用npm run build ,它等价于npx webpack
Asset：资源管理
加载css
首先我们需要添加loader
npm install --save-dev style-loader css-loader
然后我们在webpack.config.js中增加：
  module: {
+     rules: [
+       {
+         test: /\.css$/,
+         use: [
+           'style-loader',
+           'css-loader'
+         ]
+       }
+     ]
+   }
这样我们就可以使用import来导入css文件。
如果加载图片，我们需要file-loader
npm install file-loader --save-dev

在config中增加
{
test:/\.(png|jpg|svg|gif)$/,
use:['file-loader']
}
加载字体也是用file-loaer
{
+         test: /\.(woff|woff2|eot|ttf|otf)$/,
+         use: [
+           'file-loader'
+         ]
+       }

entry:可以是一个对象
 entry: './src/index.js',
+   entry: {
+     app: './src/index.js',
+     print: './src/print.js'
+   },
安装插件并使用：
npm install --save-dev html-webpack-plugin

是可以通过template指定index.html的模板，会依据模板在dist输出目录下创建一个html。
清理dist文件夹，我们可以通过clean-webpack-plugin实现
npm install clean-webpack-plugin --save-dev

new CleanWebpackPlugin(['dist'])

source-map：
https://www.webpackjs.com/configuration/devtool/
更多是一个映射工具，推荐使用eval-source-map
不需要安装，webpack自带的。
在config文件中配置：
devtool:'eval-source-map'

开发工具webpack-dev-server等。观察项目实时动态。
npm install webpack-dev-server --save-dev


