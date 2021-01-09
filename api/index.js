const { server, application } = require("./server");
server.listen(application.get("port"), () => {
  console.log(`Server on port ${application.get("port")}`);
});
