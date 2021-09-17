import { createStore } from "vuex";

export default createStore({
  state: {
    starEntity: {
      ids: [0, 1, 2, 3, 4, 5],
      entities: {
        0: {
          questionIds: [],
        },
        1: {
          questionIds: [3],
        },
        2: {
          questionIds: [4, 5],
        },
        3: {
          questionIds: [6],
        },
        4: {
          questionIds: [7],
        },
        5: {
          questionIds: [1, 2],
        },
      },
    },
    questionEntity: {
      ids: [1, 2, 3, 4, 5, 6, 7],
      entities: {
        1: {
          star: 5,
          question: "服務品質如何?",
        },
        2: {
          star: 5,
          question: "餐點味道如何?",
        },
        3: {
          star: 1,
          question: "送餐速度如何?",
        },
        4: {
          star: 2,
          question: "外送員如何?",
        },
        5: {
          star: 2,
          question: "外送員正嗎?",
        },
        6: {
          star: 3,
          question: "單身嗎?",
        },
        7: {
          star: 4,
          question: "約嗎約嗎?",
        },
      },
    },
  },
  mutations: {
    updatedQuestion(state, { id, question, star }) {
      let targetQuestion = state.questionEntity.entities[id];
      if (question) targetQuestion.question = question;
      if (star) targetQuestion.star = star;
    },
    addedQuestion(state, { question, star }) {
      if (typeof question !== "string" || typeof star !== "number") return;
      if (!question || !(star in [1, 2, 3, 4, 5])) return;

      let id = Math.max(...state.questionEntity.ids) + 1;
      state.questionEntity.ids = [...state.questionEntity.ids, id];
      state.questionEntity.entities[id] = {
        star,
        question,
      };
      // state.starEntity.entities[star].questionIds.push(id);
      state.starEntity.entities[star].questionIds = [
        ...state.starEntity.entities[star].questionIds,
        id,
      ];
    },
  },
  actions: {},
  modules: {},
});
