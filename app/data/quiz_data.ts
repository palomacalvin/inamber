// data/quizData.ts
export const quizQuestions = [
  {
    id: 1,
    question: "Which landscape feels most like home to you?",
    imageOptions: [
      { label: "Forest", value: "millipede", img: "/tracks/forest.png" },
      { label: "River", value: "waterbug", img: "/tracks/river.png" },
      { label: "Desert", value: "skinbeetle", img: "/tracks/desert.png" },
      { label: "Mountains", value: "mantis", img: "/tracks/mountains.png" },
    ],
  },
  {
    id: 2,
    question: "What's your favorite mode of transportation?",
    imageOptions: [
      { label: "Train", value: "weevil", img: "/tracks/train.png" },
      { label: "Swimming", value: "waterbug", img: "/tracks/swim.png" },
      { label: "Walking", value: "millipede", img: "/tracks/walk.png" },
      { label: "Flying", value: "mantis", img: "/tracks/flying.png" },
    ],
  },
  {
    id: 3,
    question: "When do you feel most yourself?",
    imageOptions: [
      { label: "On my own", value: "weevil", img: "/tracks/one.png" },
      { label: "In the company of strangers", value: "mantis", img: "/tracks/strangers.png" },
      { label: "With my closest friends", value: "millipede", img: "/tracks/friends.png" },
      { label: "I'm always myself no matter who I'm with", value: "skinbeetle", img: "/tracks/myself.png" },

    ],
  },
  {
    id: 4,
    question: "Are we all different or are we all the same?",
    imageOptions: [
      { label: "We're similar but distinct", value: "millipede", img: "/tracks/similar.png" },
      { label: "We are unreplicable", value: "weevil", img: "/tracks/distinct.png" },
      { label: "We're all the same at our core", value: "skinbeetle", img: "/tracks/same.png" },
      { label: "We are interchangeable", value: "mantis", img: "/tracks/interchangeable.png" },
    ],
  },
  {
    id: 5,
    question: "Do we all dream?",
    imageOptions: [
      { label: "I don't know", value: "weevil", img: "/tracks/unknown.png" },
      { label: "What constitutes a dream?", value: "mantis", img: "/tracks/dream.png" },
      { label: "We never truly dream", value: "millipede", img: "/tracks/never.png" },
      { label: "We all dream one and the same", value: "waterbug", img: "/tracks/yes.png" },

    ],
  },
];

export const resultTypes = {
  waterbug: {text: "You are a waterbug! You are adventurous and enjoy the good in life and never shy away from beauty.", img: "/tracks/waterbug.png",},
  mantis: {text: "You are a mantis! A fierce thinker with a spirit just as strong.", img: "/tracks/mantis.png",},
  millipede: {text: "You are a millipede! You know what you want, and you chase it with every inch of you.", img: "/tracks/millipede.png",},
  skinbeetle: {text: "You are a skin beetle! You are eccentric and may be misunderstood, but you keep the world turning.", img: "/tracks/skinbeetle.png",},
  weevil: {text: "You are a weevil! Such a cutie, you are everyone's greatest friend and one of the world's many treasures.", img: "/tracks/weevil.png",},
};
