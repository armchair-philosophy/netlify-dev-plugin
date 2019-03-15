const { existsSync } = require('fs')

module.exports = function() {
  if (!existsSync('config.toml') && !existsSync('config.yaml')) {
    return false
  }

  const settings = {
    port: 8888,
    proxyPort: 1313,
    env: { ...process.env },
    cmd: 'hugo',
    args: ['server', '-w'],
    urlRegexp: new RegExp(`(http://)([^:]+:)${1313}(/)?`, 'g'),
    dist: 'public'
  }

  return settings
}