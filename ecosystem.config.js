module.exports = {
  apps: [
    {
      name: "nuxt-props",
      cwd: "./",
      script: "server/index.js",
      instances: 1,
      max_restarts: 300,
      exec_mode: "cluster_mode",
      error_file: "./log/pm2-err.log",
      out_file: "./log/pm2-out.log",
      log_date_format: "YYYY-MM-DD HH:mm Z",
      watch: false,
      ignore_watch: ["node_modules", "log"]
    }
  ],
  deploy: {
    production: {},
    test: {}
  }
};