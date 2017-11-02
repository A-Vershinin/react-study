(function() {
  var express = require("express"); //подключаем express сервер
  var app = express(); // в переменной лежит функционал нашего веб-сервера

  //считаем корнем нашего локального сайта папку public
  app.use(express.static("public"));

  app.use(function log(req, res, next) {
    console.log([req.method, req.url].join(" "));
    next();
  });


  //слушаем на порту 3000 и выводим в console.loge
  app.listen(3000, function() {
    console.log("Server started on port 3000");
  });


})();


// "user strict";
// const http = require("http");
// const fs = require("fs");
//
//
// const server = http.createServer(function(request, response) {
//   if (request.url === "public/css/styles.css") {
//     const css = fs.readFileSync("public/css/styles.css", "utf-8");
//     response.end(css);
//   } else {
//     const html = fs.readFileSync("public/index.html", "utf-8");
//     response.end(html);
//   }
// });
//


server.listen(3000, function () {
  console.log("Server started on port 3000");
});

