<script>
import { h } from "@vue/runtime-core";
export default {
  name: "question",
  props: {
    question: Object,
  },
  render() {
    console.log("Render: ", this.question.question);
    return h("h1", {}, `${this.question.question}`);
  },
};
</script>
