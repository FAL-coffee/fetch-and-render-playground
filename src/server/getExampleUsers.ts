import { User } from "@/src/types";

/**
 * @description 適当なUserの配列が含まれるJSONを固定で返す関数
 */
export const getExampleUsers = (): { users: User[] } => {
  const users: User[] = [
    {
      id: 1,
      name: "John Doe",
      age: 20,
      comment: `Hello, I'm John Doe. I am passionate about technology and coding.
        In my spare time, I enjoy hiking, photography, and reading.
        I'm always looking for new challenges and opportunities to learn.
        Feel free to reach out if you want to collaborate on a project!`,
      image: "/user/image1.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 25,
      comment: `Hi, I'm Jane Smith. As a professional graphic designer, I love creating visual concepts.
          In my free time, I enjoy painting and traveling.
          I'm keen on collaborating on innovative design projects.`,
      image: "/user/image2.jpg",
    },
    {
      id: 3,
      name: "Alex Johnson",
      age: 30,
      comment: `I'm Alex Johnson, a web developer with a strong interest in front-end technologies.
          When not coding, I'm probably mountain biking or playing chess.
          I'm always open to discussing new tech trends and project ideas.`,
      image: "/user/image3.jpg",
    },
    {
      id: 4,
      name: "Emily Turner",
      age: 28,
      comment: `Hi there, I'm Emily Turner, a digital marketer and content creator.
          I have a passion for social media trends and SEO strategies.
          Outside of work, I enjoy yoga and exploring new cafes.`,
      image: "/user/image4.jpg",
    },
    {
      id: 5,
      name: "Michael Brown",
      age: 35,
      comment: `I'm Michael Brown, an experienced software engineer specializing in AI and machine learning.
          I love solving complex problems and working on innovative projects.
          In my downtime, I'm an avid reader and a chess enthusiast.`,
      image: "/user/image5.jpg",
    },
  ];

  // usersを適当にシャッフルする
  for (let i = users.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [users[i], users[j]] = [users[j], users[i]];
  }
  return {
    users,
  };
};
