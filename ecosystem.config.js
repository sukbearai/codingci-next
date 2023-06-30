require('dotenv').config()

// 查看应用程序状态 npx pm2 status
// 查看应用程序日志 npx pm2 logs APP_NAME
// 停止应用 npx pm2 stop APP_NAME
module.exports = {
  apps: [
    {
      name: process.env.APP_NAME,
      script: 'npm',
      args: `start -- -p 8111`,
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
}
