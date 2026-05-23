

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  "stories": [
    "../youtrack/**/__stories__/*.stories.@(js|jsx)",
    "../youtrack/**/*.stories.@(js|jsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-mcp"
  ],
  "framework": "@storybook/react-vite"
};
export default config;