module.exports = {
  apps: [
    {
      name: "Soundify",
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
