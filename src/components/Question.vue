<template>
  <h1>{{ question.question }}</h1>
</template>

<script>
import { useStore } from "vuex";

export default {
  name: "question",
  props: {
    id: Number,
  },
  setup(props) {
    const store = useStore();
    const question = store.state.questionEntity.entities[props.id];

    return {
      question,
    };
  },
};
</script>
