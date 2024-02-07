// button.stories.js
import "./../assets/stylesheets/index.scss";

export default {
  title: "Button",
};

export const PrimaryButton = () => `
  <button class="btn--primary">Download <strong>v1.3</strong></button>
`;

export const SecondaryButton = () => `
  <button class="btn--secondary">Download <strong>v1.3</strong></button>
`;
