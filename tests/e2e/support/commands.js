Cypress.Commands.add("overmind", () => {
  let overmind;

  const cmd = Cypress.log({
    name: "overmind",
    consoleProps() {
      return {
        Overmind: overmind
      };
    }
  });

  return (
    cy
      .window({ log: false })
      // instead of .its('overmind') that always logs to the console
      // use ".then" shortcut (but without retry)
      .then({ log: false }, win => {
        overmind = win.overmind;
        cmd.end();
        return overmind;
      })
  );
});
