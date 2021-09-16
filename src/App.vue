<template>
  <AppDummy :obj="new Object()" />
  <img alt="Vue logo" src="./assets/logo.png" @click="updatedQuestion" />
  <div class="stars">
    <button
      v-for="i in 5"
      :key="i"
      :class="['star', { active: i <= star }]"
      @click="setStar(i)"
    ></button>
  </div>
  <Question
    v-for="(question, index) in matchedQuestions"
    :key="index"
    :question="question"
  />
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { useStore } from "vuex";

import Question from "@/components/Question.vue";
import AppDummy from "@/components/AppDummy.vue";

export default {
  name: "App",
  components: {
    Question,
    AppDummy,
  },
  setup() {
    const store = useStore();

    const star = ref(0);

    const questions = computed(() => {
      console.log("compute questions");
      return Object.values(store.state.questionEntity.entities);
    });
    const matchedQuestions = computed(() => {
      console.log("compute mathcedQuestions");
      return questions.value.filter((question) => question.star === star.value);
    });

    function setStar(number) {
      star.value = number;
    }

    return {
      star,
      matchedQuestions,
      setStar,
      updatedQuestion: () =>
        store.commit("updatedQuestion", {
          id: 1,
          question: Date.now().toString(),
        }),
    };
  },
};
</script>

<style lang="scss">
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #eeeeee;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #1d1d1d;
}

.stars {
  display: flex;
}

.star {
  border: 0;
  padding: 0;
  width: 50px;
  height: 50px;
  background: transparent;
  & + & {
    margin-left: 10px;
  }

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    clip-path: polygon(
      50% 0%,
      61% 35%,
      98% 35%,
      68% 57%,
      79% 91%,
      50% 70%,
      21% 91%,
      32% 57%,
      2% 35%,
      39% 35%
    );
    background: #eeeeee;
  }
  &.active::after {
    background: yellow;
  }
}
</style>
