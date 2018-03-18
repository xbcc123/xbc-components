// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserlist" field in package.json
    'postcss-import': {},   
	'autoprefixer': {
		 browsers: ['last 2 versions', 'Android >= 2.0']  
		 //根据CanIUse.com追踪的最后2个版本的所有浏览器，Android 2.0以上
	},
	'cssnano': {}
  }
}
