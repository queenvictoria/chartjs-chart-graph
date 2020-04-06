// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload'

export default [{
  output: {
    file: 'build/Chart.Graphs.js',
    name: 'ChartGraphs',
    format: 'umd',
    globals: {
      'chart.js': 'Chart'
    }
  },
  external: ['chart.js'],
  plugins: [
    resolve(),
    commonjs(),
    babel()
  ]
}, {
  output: {
    file: 'build/Chart.Graphs.esm.js',
    name: 'ChartGraphs',
    format: 'esm',
    globals: {
      'chart.js': 'Chart'
    }
  },
  external: ['chart.js'],
  plugins: [
    resolve(),
    commonjs(),
    babel(),
    serve({
      open: true,
      openPage: '/samples/index.html',
      contentBase: '',
    })
  ]
}];
