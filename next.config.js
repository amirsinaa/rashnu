const { i18n } = require('./next-i18next.config')

module.exports = {
	i18n,
	basePath: '',
	webpack: (config, { isServer }) => {
		if (!isServer) {
			config.resolve.fallback.fs = false
			config.resolve.fallback.net = false
			config.resolve.fallback.tls = false
			config.resolve.fallback.child_process = false
		}
		return config
	}
}