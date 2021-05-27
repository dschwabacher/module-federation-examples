import { render, h } from "vue";
const button = {
  name: "vue-rendered-button",
  render() {
    return h(
      "button",
      {
        id: "btn-primary",
      },
      "Hello from Vue"
    );
  },
};
export default button;
