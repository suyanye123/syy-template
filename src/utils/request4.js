function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

function forEach(obj, fn) {
  if (obj === null || typeof obj === 'undefined') {
    return
  }

  if (typeof obj !== 'object') {
    obj = [obj]
  }

  if (Array.isArray(obj)) {
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj)
    }
  } else {
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj)
      }
    }
  }
}

function merge(...args) {
  var result = {}

  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val)
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val)
    } else if (Array.isArray(val)) {
      result[key] = val.slice()
    } else {
      result[key] = val
    }
  }

  for (var i = 0, l = args.length; i < l; i++) {
    forEach(args[i], assignValue);
  }

  return result
}

function buildFullPath(baseURL, relativeURL) {

  if (/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(relativeURL)) return relativeURL

  return relativeURL ?
    baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') :
    baseURL;
}

const instanceConfig = {
  baseURL: '',
  header: {
    'content-type': 'application/json'
  },
  method: 'GET',
  dataType: 'json',
  responseType: 'text'
}

function dispatchRequest(config) {
  const url = buildFullPath(config.baseURL, config.url)
  return new Promise((resolve, reject) => {
    config.success = function (res) {
      res.config = config
      resolve(res)
    }
    config.fail = function (err) {
      reject(err)
    }
    uni.request({
      ...config,
      url
    })
  })
}

class InterceptorManager {
  handlers = []

  use(fulfilled, rejected) {
    this.handlers.push({
      fulfilled: fulfilled,
      rejected: rejected
    })
    return this.handlers.length - 1
  }

  forEach(fn) {
    this.handlers.forEach(fn)
  }
}

export default class Request {
  defaults = instanceConfig

  interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  }

  constructor(config) {
    this.defaults = merge(this.defaults, config)
  }

  request(config) {
    config = merge(this.defaults, config)

    const chain = [dispatchRequest, undefined]

    let promise = Promise.resolve(config)

    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      chain.unshift(interceptor.fulfilled, interceptor.rejected)
    })

    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      chain.push(interceptor.fulfilled, interceptor.rejected)
    })

    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift())
    }

    return promise
  }
}