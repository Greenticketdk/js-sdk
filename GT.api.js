/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                                                                                                                                             *
 *   ██████╗ ██████╗ ███████╗███████╗███╗   ██╗████████╗██╗ ██████╗██╗  ██╗███████╗████████╗         ██╗███████╗    ███████╗██████╗ ██╗  ██╗   *
 *  ██╔════╝ ██╔══██╗██╔════╝██╔════╝████╗  ██║╚══██╔══╝██║██╔════╝██║ ██╔╝██╔════╝╚══██╔══╝         ██║██╔════╝    ██╔════╝██╔══██╗██║ ██╔╝   *
 *  ██║  ███╗██████╔╝█████╗  █████╗  ██╔██╗ ██║   ██║   ██║██║     █████╔╝ █████╗     ██║            ██║███████╗    ███████╗██║  ██║█████╔╝    *
 *  ██║   ██║██╔══██╗██╔══╝  ██╔══╝  ██║╚██╗██║   ██║   ██║██║     ██╔═██╗ ██╔══╝     ██║       ██   ██║╚════██║    ╚════██║██║  ██║██╔═██╗    *
 *  ╚██████╔╝██║  ██║███████╗███████╗██║ ╚████║   ██║   ██║╚██████╗██║  ██╗███████╗   ██║       ╚█████╔╝███████║    ███████║██████╔╝██║  ██╗   *
 *   ╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚═╝ ╚═════╝╚═╝  ╚═╝╚══════╝   ╚═╝        ╚════╝ ╚══════╝    ╚══════╝╚═════╝ ╚═╝  ╚═╝   *
 *                                                                                                                                             *
 *  Greenticket Official Javascript SDK                                                                                                        *
 *  Author: Emil Hagbarth Rasmussen                                                                                                            *
 *  Date: 2014-04-10                                                                                                                           *
 *  Company: Greenticket                                                                                                                       *
 *  All rights reserved                                                                                                                        *
 *                                                                                                                                             *
 *                                                                                                                                             *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

//SHA256 JS Implementation

var Sha256 = {};
Sha256.hash = function(e){
    var n = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
    var r = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];
    e += String.fromCharCode(128);
    var i = e.length / 4 + 2;
    var s = Math.ceil(i / 16);
    var o = new Array(s);
    for (var u = 0; u < s; u++) {
        o[u] = new Array(16);
        for (var a = 0; a < 16; a++) {
            o[u][a] = e.charCodeAt(u * 64 + a * 4) << 24 | e.charCodeAt(u * 64 + a * 4 + 1) << 16 | e.charCodeAt(u * 64 + a * 4 + 2) << 8 | e.charCodeAt(u * 64 + a * 4 + 3)
        }
    }
    o[s - 1][14] = (e.length - 1) * 8 / Math.pow(2, 32);
    o[s - 1][14] = Math.floor(o[s - 1][14]);
    o[s - 1][15] = (e.length - 1) * 8 & 4294967295;
    var f = new Array(64);
    var l, c, h, p, d, v, m, g;
    for (var u = 0; u < s; u++) {
        for (var y = 0; y < 16; y++) f[y] = o[u][y];
        for (var y = 16; y < 64; y++) f[y] = Sha256.sigma1(f[y - 2]) + f[y - 7] + Sha256.sigma0(f[y - 15]) + f[y - 16] & 4294967295;
        l = r[0];
        c = r[1];
        h = r[2];
        p = r[3];
        d = r[4];
        v = r[5];
        m = r[6];
        g = r[7];
        for (var y = 0; y < 64; y++) {
            var b = g + Sha256.Sigma1(d) + Sha256.Ch(d, v, m) + n[y] + f[y];
            var w = Sha256.Sigma0(l) + Sha256.Maj(l, c, h);
            g = m;
            m = v;
            v = d;
            d = p + b & 4294967295;
            p = h;
            h = c;
            c = l;
            l = b + w & 4294967295
        }
        r[0] = r[0] + l & 4294967295;
        r[1] = r[1] + c & 4294967295;
        r[2] = r[2] + h & 4294967295;
        r[3] = r[3] + p & 4294967295;
        r[4] = r[4] + d & 4294967295;
        r[5] = r[5] + v & 4294967295;
        r[6] = r[6] + m & 4294967295;
        r[7] = r[7] + g & 4294967295
    }
    return Sha256.toHexStr(r[0]) + Sha256.toHexStr(r[1]) + Sha256.toHexStr(r[2]) + Sha256.toHexStr(r[3]) + Sha256.toHexStr(r[4]) + Sha256.toHexStr(r[5]) + Sha256.toHexStr(r[6]) + Sha256.toHexStr(r[7])
};
Sha256.ROTR = function(e, t) {
    return t >>> e | t << 32 - e
};
Sha256.Sigma0 = function(e) {
    return Sha256.ROTR(2, e) ^ Sha256.ROTR(13, e) ^ Sha256.ROTR(22, e)
};
Sha256.Sigma1 = function(e) {
    return Sha256.ROTR(6, e) ^ Sha256.ROTR(11, e) ^ Sha256.ROTR(25, e)
};
Sha256.sigma0 = function(e) {
    return Sha256.ROTR(7, e) ^ Sha256.ROTR(18, e) ^ e >>> 3
};
Sha256.sigma1 = function(e) {
    return Sha256.ROTR(17, e) ^ Sha256.ROTR(19, e) ^ e >>> 10
};
Sha256.Ch = function(e, t, n) {
    return e & t ^ ~e & n
};
Sha256.Maj = function(e, t, n) {
    return e & t ^ e & n ^ t & n
};
Sha256.toHexStr = function(e) {
    var t = "",
        n;
    for (var r = 7; r >= 0; r--) {
        n = e >>> r * 4 & 15;
        t += n.toString(16)
    }
    return t
};

//Reserve GT namespace
var GT = {};

//Instantiate critical vars
var app_id = 0;
var secret = '';
var queued_funcs = [];
var is_inited = false;

/*
 *  Checks if GT is initialized, queues function if not
 *  @param {function} func
 *  @param {Array} params
 *  @return Boolean
 */
var checkInit = function(func, params) {
    if (is_inited) {
        var wrappedFunction = wrapFunction(func, GT, params);
        queued_funcs.push(wrappedFunction);
        return false;
    } else return true;
}

/*
 *  Wraps a function for later execution
 *  @param {function} fn
 *  @param {Object} context
 *  @param {Array} params
 *  @return {Boolean} success
 */
var wrapFunction = function(fn, context, params) {
    return function() {
        fn.apply(context, params);
    };
}

/*
 *  Authenticates client
 *  @param {function(success, msg)} callback
 *  @return {Boolean} success
 */
var auth = function(callback) {
    if (checkInit(auth, [callback])) {
        var hmac = Sha256.hash('/AppAuth' + secret, false);
        console.log(hmac);
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://www.greenticket.dk/api/AppAuth?app_id=' + app_id + '&hmac=' + hmac);
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var response = this.responseText;
                var json = JSON.parse(response)
                if (json.success) {
                    callback(true, 'Authentication successful');
                } else {
                    callback(false, json.errMsg);
                }
            }
        };
        xhr.send(null);
    }
};

/*
 *  Initializes Greenticket API
 *  @param {Object} params
 *  @param {function(success, msg)} callback
 *  @return void
 */
GT.init = function(params, callback) {
    var required_params = ['app_id', 'secret'],
        param_keys = Object.keys(params);

    for (var i = required_params.length - 1; i >= 0; i--) {
        if (param_keys.indexOf(required_params[i]) < 0) {
            throw new Error('Missing parameter', 'Missing the paramter `' + required_params[i] + '`');
        }
    };

    app_id = params['app_id'];
    secret = params['secret'];

    auth(function(success, msg) {
        if (success) {
            is_inited = true;
            while (queued_funcs.length > 0) {
                (queued_funcs.shift())();
            }
            if (callback)
                callback(success);
        } else {
            throw new Error('Failed authentication: "' + msg + '"');
        }
    });
};

/*
 *  Loads a call to Greenticket API
 *  @param {String} query
 *  @param {String} verb
 *  @param {function(response)} callBack
 *  @return void
 */
GT.api = function(query, verb, callback) {
    if (checkInit(GT.api, [query, verb, callback])) {
        if (query && verb) {
            var hmac = Sha256.hash('' + query + secret);
            console.log(hmac);
            var xhr = new XMLHttpRequest();
            xhr.open(verb, 'https://www.greenticket.dk/api' + query + '?app_id=' + app_id + '&hmac=' + hmac);
            xhr.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var json = JSON.parse(this.responseText);
                    callback(json);
                } else {
	            	callback(false, 'Connection Error');
				}
            };
            xhr.send(null);
        }
    }
}
