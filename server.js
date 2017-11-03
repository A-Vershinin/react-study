// (function() {
//   var express = require("express"); //подключаем express сервер
//   var app = express(); // в переменной лежит функционал нашего веб-сервера
//
//   //считаем корнем нашего локального сайта папку public
//   app.use(express.static("public"));
//
//   app.use(function log(req, res, next) {
//     console.log([req.method, req.url].join(" "));
//     next();
//   });
//
//
//   // слушаем на порту 3000 и выводим в console.loge
//   // app.listen(3000, function() {
//   //   console.log("Server started on port 3000");
//   // });
//   app.listen(process.env.PORT || 3000);
//   console.log("Server started on port 3000");
//
// })();


"user strict";
const http = require("http");
const fs = require("fs");

const server = http.createServer(function(request, response) {
  console.log(request.url);

  switch(request.url) {
    case "/":
      response.writeHead(200, {"Content-Type" : "text/html"});
      const html = fs.readFileSync("./public/index.html", "utf8");
      response.end(html);
      break;
    case "/css/styles.css":
      response.writeHead(200, {"Content-type" : "text/css"});
      const css = fs.readFileSync("public/css/styles.css", "utf8");
      response.end(css);
      break;
    case "/js/App.jsx":
      response.writeHead(200, {"Content-type" : "text/babel"});
      const js = fs.readFileSync("public/js/App.jsx", "utf8");
      response.end(js);
      break;
    default:
      response.writeHead(404, {"Content-type" : "text/plain"});
      response.end("404 не найдено");
  }
});

server.listen(process.env.PORT || 3000, function () {
  console.log("Server started on port 3000");
});

