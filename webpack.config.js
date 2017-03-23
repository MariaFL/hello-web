// поскольку webpack это сборщик бандлов он не умеет выделять стили в отдельный файл ,
// поэтому испльзуем плагин

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    
  // входной файл который препроцессим
    entry: {
      //для каждого файла нужна такая строчка где index имя выходного файла
        index: './src/styl/index.styl',
        menu: './src/script/menu.js'
    },

  // вывод фалов после процессинга
    output: {

    // директория куда складывать
        path: './public/build',

    // имя выходного файла (имя взято в скобки чтобы подставлять имя исходного файла)
        filename: '[name].js'

    },


  // тут начинается самое интересное подключаются лоадеры которые работают по принципу анализа пути
  // к файлу или расширению если совпадает то приминять лоадер у которого совпадет условие

    module: {
        
    // лоадеры всегда помещаем в массив
        loaders: [

      // stylus loader -- обработает наши стилус файлы
      // наишм условием применения лоадера будет если расширение файла указанного в entry совпадет
      // с .styl
            {
                test: /\.styl$/,
        // применяем плагин для выделения ссs в отдельный файл предварительно делаем препроцессинг лодерами
                loader: ExtractTextPlugin.extract([
                    {
                        loader: 'css-loader',
            // параметры для лодера
                        options: {minimize: true}
                    },
                    {

            //еще один способ передавать параметры после названия лодера ставим ? и пишем параметры
                        loader: 'stylus-loader?resolve url'
                    }])
            }

        ]
    },

  // говорим плагину куда складывать отпроцессеный styl
    plugins: [new ExtractTextPlugin('[name].css')]

};