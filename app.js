"use strict";
exports.__esModule = true;
const express    = require("express"),
      app        = express()

{
  // 饼图数据
  app.get('/pie', (req, res) => {
    res.set('Access-Control-Allow-Origin','*')
    const sendData = {
      "data": [
        {"value": parseInt(100 * Math.random()), "name": "数据接入"}, 
        {"value": parseInt(100 * Math.random()), "name": "数据输出"}, 
        {"value": parseInt(100 * Math.random()), "name": "储存数据"}, 
        {"value": parseInt(100 * Math.random()), "name": "数据分发"}, 
        {"value": parseInt(100 * Math.random()), "name": "导出数据"}
      ],
      "type": "pie"
    }
    res.send(sendData)
  });
}

// 折线图数据
{
  app.get('/line', (req, res) => {
    res.set('Access-Control-Allow-Origin','*')
    const sendData = {
      "data": [
        parseInt(50 * Math.random()),
        parseInt(50 * Math.random()),
        parseInt(50 * Math.random()),
        parseInt(50 * Math.random()),
        parseInt(50 * Math.random()),
        parseInt(50 * Math.random()),
        parseInt(50 * Math.random())
      ],
      "type": 'line'
    }
    res.send(sendData)
  });
}

// K线图数据
{
  app.get('/candlestick', (req, res) => {
    res.set('Access-Control-Allow-Origin','*')
    const sendData = {
      "data": [
        [2221.34 - parseInt(10 * Math.random()), 2251.81, 2210.77, 2252.87], 
        [2249.81 - parseInt(10 * Math.random()), 2282.87, 2248.41, 2288.09], 
        [2286.33 - parseInt(10 * Math.random()), 2299.99, 2281.9, 2309.39], 
        [2297.11 - parseInt(10 * Math.random()), 2305.11, 2290.12, 2305.3], 
        [2303.75 - parseInt(10 * Math.random()), 2302.4, 2292.43, 2314.18], 
        [2293.81 - parseInt(10 * Math.random()), 2275.67, 2274.1, 2304.95], 
        [2281.45 - parseInt(10 * Math.random()), 2288.53, 2270.25, 2292.59], 
        [2286.66 - parseInt(10 * Math.random()), 2293.08, 2283.94, 2301.7], 
        [2293.4 - parseInt(10 * Math.random()), 2321.32, 2281.47, 2322.1], 
        [2323.54 - parseInt(10 * Math.random()), 2324.02, 2321.17, 2334.33], 
        [2316.25 - parseInt(10 * Math.random()), 2317.75, 2310.49, 2325.72], 
        [2320.74 - parseInt(10 * Math.random()), 2300.59, 2299.37, 2325.53], 
        [2300.21 - parseInt(10 * Math.random()), 2299.25, 2294.11, 2313.43], 
        [2297.1 - parseInt(10 * Math.random()), 2272.42, 2264.76, 2297.1], 
        [2270.71 - parseInt(10 * Math.random()), 2270.93, 2260.87, 2276.86], 
        [2264.43 - parseInt(10 * Math.random()), 2242.11, 2240.07, 2266.69], 
        [2242.26 - parseInt(10 * Math.random()), 2210.9, 2205.07, 2250.63], 
        [2190.1 - parseInt(10 * Math.random()), 2148.35, 2126.22, 2190.1]
      ],
      "type": "candlestick",
    }
    res.send(sendData)
  })
}

// 2D地图
{
  app.get('/lines', (req, res) => {
    res.set('Access-Control-Allow-Origin','*')
    const sendData = {
      "type": "lines",
      "data": [
        {
          "fromName": "北京",
          "toName": "上海",
          "coords": [[parseInt(100 * Math.random()), parseInt(100 * Math.random())], [121.4648, 31.2891]]
        }
      ]
    }
    res.send(sendData)
  })
}

{
  // 涟漪图数据
  app.get('/effectScatter', (req, res) => {
    res.set('Access-Control-Allow-Origin','*')
    const sendData = {
      "data": [
        [96.24, parseInt(100 * Math.random())],
        [33.09, parseInt(100 * Math.random())],
        [57.60, parseInt(100 * Math.random())],
        [36.77, 27.26],
        [20.10, 6.72],
        [45.53, 36.37],
        [parseInt(100 * Math.random()), 80.13],
        [72.05, parseInt(100 * Math.random())],
        [39.82, 37.15],
        [48.05, parseInt(100 * Math.random())],
        [0.85, 12.57],
        [51.66, parseInt(100 * Math.random())],
        [61.07, 127.13],
        [64.54, parseInt(100 * Math.random())],
        [35.50, 25.01],
        [226.55, 664.02],
        [parseInt(100 * Math.random()), parseInt(100 * Math.random())],
        [81.31, 108.68]
      ],
      "type": 'effectScatter'
    }
    res.send(sendData)
  })
}

// 词云数据
{
  app.get('/wordCloud', (req, res) => {
    res.set('Access-Control-Allow-Origin','*')
    const sendData = {
      "data": [
        {"name":"SQL注入","value":parseInt(100 * Math.random())},
        {"name":"PHP代码注入","value":parseInt(100 * Math.random())},
        {"name":"百度爬虫","value":parseInt(100 * Math.random())},
        {"name":"雅虎爬虫","value":parseInt(100 * Math.random())},
        {"name":"跨站脚本注入","value":parseInt(100 * Math.random())},
        {"name":"谷歌爬虫","value":parseInt(100 * Math.random())},
        {"name":"Planet Fitness","value":parseInt(100 * Math.random())},
        {"name":"360webscan 扫描器","value":parseInt(100 * Math.random())},
        {"name":"必应爬虫","value":parseInt(100 * Math.random())},
        {"name":"360搜索爬虫","value":parseInt(100 * Math.random())},
        {"name":"命令注入","value":parseInt(100 * Math.random())},
        {"name":"提交方法不被允许","value":parseInt(100 * Math.random())}
      ],
      "type": 'wordCloud'
    }
    res.send(sendData)
  })
}

// 关系数据
{
  app.get('/graph', (req, res) => {
    res.set('Access-Control-Allow-Origin','*')
    const sendData = {
      "data": [
        {"id":"0", "name":"1号机组", "symbolSize": parseInt(50 * Math.random())},
        {"id":"1", "name":"2号机组", "symbolSize": parseInt(50 * Math.random())},
        {"id":"2", "name":"3号机组", "symbolSize": parseInt(50 * Math.random())},
        {"id":"3", "name":"4号机组", "symbolSize": parseInt(50 * Math.random())},
        {"id":"4", "name":"5号机组", "symbolSize": parseInt(50 * Math.random())},
        {"id":"5", "name":"6号机组", "symbolSize": parseInt(50 * Math.random())}
      ],
      "type": 'graph'
    }
    res.send(sendData)
  })
}

// 漏斗数据
{
  app.get('/funnel', (req, res) => {
    res.set('Access-Control-Allow-Origin','*')
    const sendData = {
      "data": [
        {"value":parseInt(100 * Math.random()),"name":"3#服务器"},
        {"value":parseInt(100 * Math.random()),"name":"4#服务器"},
        {"value":parseInt(100 * Math.random()),"name":"5#服务器"},
        {"value":parseInt(100 * Math.random()),"name":"2#服务器"},
        {"value":parseInt(100 * Math.random()),"name":"1#服务器"}
      ],
      "type": 'funnel'
    }
    res.send(sendData)
  })
}

// 3D连线设置
{
  app.get('/lines3D', (req, res) => {
    res.set('Access-Control-Allow-Origin','*')
    const sendData = {
      "data": [
        {coords:[[parseInt(100 * Math.random()), parseInt(100 * Math.random())], [116.35, 39.99]]},
        {coords:[[parseInt(100 * Math.random()), parseInt(100 * Math.random())], [116.35, 39.99]]},
        {coords:[[parseInt(100 * Math.random()), parseInt(100 * Math.random())], [116.35, 39.99]]},
        {coords:[[parseInt(100 * Math.random()), parseInt(100 * Math.random())], [116.35, 39.99]]},
        {coords:[[parseInt(100 * Math.random()), parseInt(100 * Math.random())], [116.35, 39.99]]},
        {coords:[[parseInt(100 * Math.random()), parseInt(100 * Math.random())], [116.35, 39.99]]},
        {coords:[[parseInt(100 * Math.random()), parseInt(100 * Math.random())], [116.35, 39.99]]},
        {coords:[[parseInt(100 * Math.random()), parseInt(100 * Math.random())], [116.35, 39.99]]},
        {coords:[[parseInt(100 * Math.random()), parseInt(100 * Math.random())], [116.35, 39.99]]},
        {coords:[[parseInt(100 * Math.random()), parseInt(100 * Math.random())], [116.35, 39.99]]},
        {coords:[[parseInt(100 * Math.random()), parseInt(100 * Math.random())], [116.35, 39.99]]},
        {coords:[[parseInt(100 * Math.random()), parseInt(100 * Math.random())], [116.35, 39.99]]},
        {coords:[[parseInt(100 * Math.random()), parseInt(100 * Math.random())], [116.35, 39.99]]},
        {coords:[[parseInt(100 * Math.random()), parseInt(100 * Math.random())], [116.35, 39.99]]},
        {coords:[[parseInt(100 * Math.random()), parseInt(100 * Math.random())], [116.35, 39.99]]},
        {coords:[[parseInt(100 * Math.random()), parseInt(100 * Math.random())], [116.35, 39.99]]},
        {coords:[[parseInt(100 * Math.random()), parseInt(100 * Math.random())], [116.35, 39.99]]},
        {coords:[[parseInt(100 * Math.random()), parseInt(100 * Math.random())], [116.35, 39.99]]},
        {coords:[[parseInt(100 * Math.random()), parseInt(100 * Math.random())], [116.35, 39.99]]},
        {coords:[[parseInt(100 * Math.random()), parseInt(100 * Math.random())], [116.35, 39.99]]},
        {coords:[[parseInt(100 * Math.random()), parseInt(100 * Math.random())], [116.35, 39.99]]},
        {coords:[[parseInt(100 * Math.random()), parseInt(100 * Math.random())], [116.35, 39.99]]}
      ],
      "type": "lines3D"
    }
    res.send(sendData)
  });
}

// 服务器实例
const server = app.listen(9999, () => {
  console.log('服务正在监听9999端口!');
});