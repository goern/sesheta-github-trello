var http = require("http");
var createHandler = require("github-webhook-handler");
var events = require("github-webhook-handler/events");
var github = require("github_event_helper");

var handler = createHandler({ path: "/", secret: "myhashsecret" });

http
    .createServer(function(req, res) {
        handler(req, res, function(err) {
            res.statusCode = 404;
            res.end("no such location");
        });
    })
    .listen(8080);

Object.keys(events).forEach(function(event) {
    console.log(event, '=', events[event])
})

handler.on("error", function(err) {
    console.error("Error:", err.message);
});

handler.on("push", function(event) {
    console.log(
        "Received a push event for %s to %s",
        event.payload.repository.name,
        event.payload.ref
    );
});

handler.on("issues", github.handle_issue(event));