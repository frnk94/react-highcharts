!function(r,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.Highcharts=t(require("react")):r.Highcharts=t(r.react)}(this,function(r){return function(r){function t(o){if(e[o])return e[o].exports;var n=e[o]={exports:{},id:o,loaded:!1};return r[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var e={};return t.m=r,t.c=e,t.p="",t(0)}([function(r,t,e){r.exports=e(4)},function(t,e){t.exports=r},function(r,t,e){"use strict";var o=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o])}return r},n=e(1);if("undefined"==typeof Highcharts)throw Error('Starting with version 3 of react-highcharts, Highcharts is not bundled by default.  use "react-highcharts/dist/bundle/highcharts" instead, or include highcharts. ');r.exports=function(r,t){var e="Highcharts"+t,i=n.createClass({displayName:e,propTypes:{config:n.PropTypes.object.isRequired,isPureConfig:n.PropTypes.bool},renderChart:function(n){if(!n)throw new Error("Config must be specified for the "+e+" component");var i=n.chart;this.chart=new r[t](o({},n,{chart:o({},i,{renderTo:this.refs.chart})}))},shouldComponentUpdate:function(r){return this.props.isPureConfig&&this.props.config===r.config||this.renderChart(r.config),!0},getChart:function(){if(!this.chart)throw new Error("getChart() should not be called before the component is mounted");return this.chart},componentDidMount:function(){this.renderChart(this.props.config)},render:function(){var r=this.props;return r=o({},r,{ref:"chart"}),n.createElement("div",r)}});return i.Highcharts=r,i}},,function(r,t,e){"use strict";if(Highcharts&&!Highcharts.Map)throw Error("ReactHighmaps requires highmaps to be loaded");var o=e(2);r.exports=o(Highcharts,"Map")}])});