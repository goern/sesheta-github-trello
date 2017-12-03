function handle_issue(issueEvent) {
    if (issueEvent.action == 'open') {
        return true;
    }
}

module.exports = {
    handle_issue: handle_issue
};