/**
 * @description 適当なUser一人のJSONを固定で返す関数
 */
export const getExampleUser = () => {
  return {
    id: 1,
    name: "John Doe",
    age: 20,
    comment: `Hello, I'm John Doe. I am passionate about technology and coding.
    In my spare time, I enjoy hiking, photography, and reading.
    I'm always looking for new challenges and opportunities to learn.
    Feel free to reach out if you want to collaborate on a project!`,
    image: "/user/image1.jpg",
  };
};
