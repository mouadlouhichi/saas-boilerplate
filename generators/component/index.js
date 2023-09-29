/**
 *
 * @type {import('plop').PlopGenerator}
 */
module.exports = {
  description: "Component Generator",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "component name"
    },
    {
      type: "list",
      name: "shared",
      message: "whiche category does this component?",
      choices: ["component", "shared"]
    }
  ],
  actions: (answers) => {
    const componentGeneratePath =
      !answers.feature || answers.feature === "component"
        ? "src/components/"
        : "src/shared/";
    return [
      {
        type: "add",
        path: componentGeneratePath + "/{{properCase name}}/index.ts",
        templateFile: "generators/component/index.ts.hbs"
      },
      {
        type: "add",
        path:
          componentGeneratePath +
          "/{{properCase name}}/{{properCase name}}.tsx",
        templateFile: "generators/component/Component.tsx.hbs"
      },
      {
        type: "add",
        path:
          componentGeneratePath +
          "/{{properCase name}}/{{properCase name}}.stories.tsx",
        templateFile: "generators/component/Component.stories.tsx.hbs"
      }
    ];
  }
};
