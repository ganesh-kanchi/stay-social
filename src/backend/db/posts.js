import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "Day 3 of #30dayschallenge ➡️ Solved 2 JS Questions ➡️ Added Authentication to Social Media Project",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Nikhil_Belide",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "How do handle a situation where you were waiting for an opportunity and when you finally get to prove yourself, you fail.😕😕",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shubhamsoni",

    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },{
    _id: uuid(),
    content:
      `"Never use your logics to beat your ethics" So much deep quote; simply mind blowing! 🤯💯`,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "sohamshah",

    comments: [
      {
        _id: uuid(),
        username: "Nikhil_Belide",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },{
    _id: uuid(),
    content:
      `"Never use your logics to beat your ethics" So much deep quote; simply mind blowing! 🤯💯`,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shubhamsoni",

    comments: [
      {
        _id: uuid(),
        username: "Nikhil_Belide",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];


