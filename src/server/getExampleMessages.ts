/**
 * @description 適当なMessageの配列が含まれるJSONを固定で返す関数
 */
export const getExampleMessages = () => {
  return {
    messages: [
      {
        id: 1,
        text: `Welcome to my blog! This is my first post. Excited to share my thoughts and experiences here.`,
      },
      {
        id: 2,
        text: `I'm currently working on a new project. It's going to be a game changer.`,
      },
      {
        id: 3,
        text: `I just moved to a new city. Looking forward to exploring it.`,
      },
      {
        id: 4,
        text: `I'm learning how to cook. So far, I've mastered scrambled eggs and ramen.`,
      },
      {
        id: 5,
        text: `I'm going on a trip to Japan next month. I'm so excited!`,
      },
    ],
  };
};
