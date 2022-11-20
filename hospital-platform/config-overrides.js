// module.exports = function override (config, env) {
//     console.log('override')
//     let loaders = config.resolve
//     loaders.fallback = {
//         // existing configs...
//         "os": require.resolve("os-browserify/browser"),
//         "target":'node'
//    }
    
//     return config
// }


module.exports = function override(config, env) {
    console.log("React app rewired works!");
    console.log('override');
    config.resolve.fallback = {
      fs: false,
      "os": require.resolve("os-browserify/browser"),
      "path": require.resolve("path-browserify")
    };
    return config;
  };