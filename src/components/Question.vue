<script>
import { computed, h } from "vue";
import { useStore } from "vuex";

export default {
  name: "question",
  props: {
    id: Number,
  },
  render() {
    console.log("Render: ", this.question.question);
    return h("h1", {}, `${this.question.question}`);
  },
  setup(props) {
    const store = useStore();
    const question = computed(
      () => store.state.questionEntity.entities[props.id]
    );

    return {
      question,
    };
  },
};
</script>
