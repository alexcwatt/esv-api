var http = require('http'),
    qs = require('querystring');

var EsvApi = function(key) {
    this.key = key;
}

EsvApi.prototype = {

    key: '',
    baseUrl: 'http://www.esvapi.org/v2/rest/',

    buildRequest: function(path, params, callback) {
        params.key = this.key;
        return this.baseUrl + path + '?' + qs.stringify(params);
    },

    passageQuery: function(params, callback) {
        params = this.buildRequest('passageQuery', params);
        var data = '';
        http.get(params, function(res) {
            res.setEncoding = 'utf8';
            res.on('data', function(chunk) {
                data += chunk;
            });
            res.on('end', function() {
                callback(data);
            });
        })
        .on('error', function(error) {
            callback(error);
        });
    }
}

module.exports = EsvApi;
