

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  "stories": [
    "../design-system/**/__stories__/*.stories.@(js|jsx)",
    "../design-system/**/*.stories.@(js|jsx)"
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