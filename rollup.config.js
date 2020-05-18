import buble from 'rollup-plugin-buble'
import uglify from 'rollup-plugin-uglify'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from "rollup-plugin-commonjs";

let plugins = [resolve({
  jsnext: true,
  main: true,
  browser: true,
}), commonjs(), buble()]
if (process.env.NODE_ENV == 'build') {
  plugins.push(uglify({ ie8: true }))
}

let TYPE = process.env.TYPE

export default {
  input: './index.js',  
  output: [{
    file: './build/index.js',
    format: 'umd',
    name: 'easeTweening',
    // sourcemap: process.env.NODE_ENV != 'build' ? 'inline' : false
  },{
    file: './demo/index.js',
    format: 'iife',
    name: 'easeTweening',
    // sourcemap: process.env.NODE_ENV != 'build' ? 'inline' : false
  }],
  plugins,
  watch: {
    exclude: ['node_modules/**']
  }
}
