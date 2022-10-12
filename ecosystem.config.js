module.exports = {
    apps: [{
        name: "chordbook",
        script: "./index.js",
        instances: 8,
        env: {
            NODE_ENV: "development",
        },
        env_production: {
            NODE_ENV: "production",
        }
    }]
}