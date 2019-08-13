module.exports = {
  // lintOnSave: false,
//   publicPath: process.env.NODE_ENV === 'production',
  //     ? './'
  //     : '/',
  devServer: {
      proxy: {
          '/apis': {
              target: 'http://api.douban.com/',// target host
              ws: true,  // proxy websockets
              changeOrigin: true,  // needed for virtual hosted sites
              pathRewrite: {
                  '^/apis':'http://api.douban.com/'  // rewrite path
              }
          },
          '/wyy': {
            target: 'https://api.apiopen.top/',// target host
            ws: true, // proxy websockets
            changeOrigin: true, // needed for virtual hosted sites
            pathRewrite: {
            '^/wyy':'https://api.apiopen.top/' // rewrite path
            }
            },
      }, 

  }
};
