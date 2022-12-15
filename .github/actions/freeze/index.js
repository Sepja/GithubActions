const core = require('@actions/core');
const github = require('@actions/github');

try {
    // `who-to-greet` input defined in action metadata file
    const nameToGreet = core.getInput('who-to-greet');
    const valid = core.getInput('valid');
    console.log(`Hello ${nameToGreet}!`);
    console.log(`Valid ${valid}!`);
    const time = (new Date()).toTimeString();
    core.setOutput("time", time);
    core.setOutput("isValid", valid);
    // Get the JSON webhook payload for the event that triggered the workflow
} catch (error) {
    core.setFailed(error.message);
}
