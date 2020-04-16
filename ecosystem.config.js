module.exports = {
  apps: [
    {
      name: "Coodo-Pay",
      script: "server.js",
      instances: "max",
      env: {
        NODE_ENV: "dev",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
