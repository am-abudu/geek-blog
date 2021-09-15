module.exports = {
    apps: [{
        name: 'geek_blog',
        exec_mode: 'cluster',
        instances: 'max', // Or a number of instances
        script: './node_modules/nuxt/bin/nuxt.js',
        args: 'start',
        env: {
            NODE_ENV: "production",
            PORT: 3095
        }
    }],
	server: {
    // 默认localhost 只能本地访问
    // 若想要对外访问，要配置为 0.0.0.0
    host: '0.0.0.0',
    // nuxtjs 默认 3000
    // vercel 默认80
    port: 80
  }
}
