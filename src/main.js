import * as core from "@actions/core";
import * as github from "@actions/github";
import * as tc from "@actions/tool-cache";

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run() {
  try {
    // The `who-to-greet` input is defined in action metadata file
    const nodeDirectory = tc.find("node", "12.x", "x64");

    core.info(nodeDirectory);

    // Get the current time and set as an output
    const time = new Date().toTimeString();
    core.setOutput("time", time);

    // Output the payload for debugging
    core.info(
      `The event payload: ${JSON.stringify(github.context.payload, null, 2)}`,
    );
  } catch (error) {
    // Fail the workflow step if an error occurs
    core.setFailed(error.message);
  }
}
