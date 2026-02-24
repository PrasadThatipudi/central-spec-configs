#!/usr/bin/env deno

console.log("Command line arguments: ", Deno.args);
console.log("Current directory: ", Deno.cwd());
console.log(
  "File content: \n",
  Deno.readTextFileSync("./.github/agents/speckit.analyze.agent.md"),
);
