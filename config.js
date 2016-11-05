/**
 * Configuration for app
 */
module.exports = {
	/**
	 * Server port
	 */
	port: 5000,
	/**
	 * Versioned configuration
	 */
		/**
		 * Enable the caching module
		 */
		cacheEnabled: false,
		/**
		 * How long to cache data in the cache module
		 */
		cacheDuration: 3600000,
		//Här lägger du din mongoDB sträng
		db_connectionString: 'mongodb://heroku_x037q8fs:e6s967atfksdkr48nk9b64f7jd@ds021036.mlab.com:21036/heroku_x037q8fs',
		eureka : {
		  instance: {
		    app: 'uptiverse-news',
		    hostName: 'uptiverse-news.herokuapp.com',
		    statusPageUrl: 'https://uptiverse-news.herokuapp.com',
		    port: {
		      '$': 5000,
		      '@enabled': 'true',
		    },
		    vipAddress: 'jq.test.something.com',
		    dataCenterInfo: {
		      '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
		      name: 'MyOwn',
		    },
		  },
		  eureka: {
		    serviceUrl: [ 'https://user:incorrect2016@uptiverse-discovery.herokuapp.com/eureka/apps/' ],
		  },
		}
};
