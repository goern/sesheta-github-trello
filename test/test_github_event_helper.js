var assert = require("assert");
var should = require("should");

var github = require("../github_event_helper");

describe("github_event_handler", function() {
    describe("issue handler", function() {
        it("should ... on 'open issue event'", function() {
            var fs = require('fs');

            fs.readFile("test/fixtures/issue.json", "utf8", function(err, data) {
                if (err) {
                    return console.log(err);
                }

                this.issueJSON = data;

                assert.equal(true, github.handle_issue(this.issueJSON));
            });
        });
    });
});