import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    fullName: "Ganesh Kanchi",
    username: "ganesh-kanchi",
    password: "ganeshk123",
    bio: "Web Developer",
    website: "https://github.com/ganesh-kanchi",
    profileAvatar:
      "https://pbs.twimg.com/profile_images/1469654455209451522/RauMEOS7_400x400.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        fullName: "Soham Shah",
        username: "sohamshah",
        profileAvatar:
          "https://pbs.twimg.com/profile_images/1481869646018265088/SgTPHx3S_400x400.jpg",
      },
      {
        _id: uuid(),
        fullName: "Shubham Soni",
        username: "shubhamsoni",
        profileAvatar:
          "https://pbs.twimg.com/profile_images/1484438395988639744/MMJq78x2_400x400.jpg",
      },
      {
        _id: uuid(),
        fullName: "Nikhil_Belide",
        username: "Nikhil_Belide",
        profileAvatar:
          "https://pbs.twimg.com/profile_images/1542024739816091649/1Kd8fuje_400x400.jpg",
      }
    ],
    followers: [
      
      {
        _id: uuid(),
        fullName: "Shubham Soni",
        username: "shubhamsoni",
        profileAvatar:
          "https://pbs.twimg.com/profile_images/1484438395988639744/MMJq78x2_400x400.jpg",
      },
      {
        _id: uuid(),
        fullName: "Nikhil_Belide",
        username: "Nikhil_Belide",
        profileAvatar:
          "https://pbs.twimg.com/profile_images/1542024739816091649/1Kd8fuje_400x400.jpg",
      },
    ],
  },
  {
    _id: uuid(),
    fullName: "John Doe",
    username: "john_doe",
    password: "123john",
    bio: "People use my name for dummy user",
    website: "https://johndoehub.com",
    profileAvatar:
      "https://scontent.fmaa12-2.fna.fbcdn.net/v/t1.6435-9/132203714_233636998117958_2009380533331807730_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lHX8aLsvZ-gAX_KChDF&_nc_ht=scontent.fmaa12-2.fna&oh=00_AT-jIvQMRMs1PBjfzGO4SaFRlL3gUkGgbfIZT1QzHEB8eg&oe=630014DA",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        fullName: "Ganesh Kanchi",
        username: "ganesh-kanchi",
        profileAvatar:
          "https://pbs.twimg.com/profile_images/1469654455209451522/RauMEOS7_400x400.jpg",
      },
      {
        _id: uuid(),
        fullName: "Nikhil_Belide",
        username: "Nikhil_Belide",
        profileAvatar:
          "https://pbs.twimg.com/profile_images/1542024739816091649/1Kd8fuje_400x400.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        fullName: "Shubham Soni",
        username: "shubhamsoni",
        profileAvatar:
          "https://pbs.twimg.com/profile_images/1484438395988639744/MMJq78x2_400x400.jpg",
      },
    ],
  },
  {
    _id: uuid(),
    fullName: "Shubham Soni",
    username: "shubhamsoni",
    password: "shubham456",
    bio: "AI Enthusiast",
    website: "https://shubhamsoni.me",
    profileAvatar:
      "https://pbs.twimg.com/profile_images/1484438395988639744/MMJq78x2_400x400.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        fullName: "Ganesh Kanchi",
        username: "ganesh-kanchi",
        profileAvatar:
          "https://pbs.twimg.com/profile_images/1469654455209451522/RauMEOS7_400x400.jpg",
      },
      {
        _id: uuid(),
        fullName: "John Doe",
        username: "john_doe",
        profileAvatar:
          "https://scontent.fmaa12-2.fna.fbcdn.net/v/t1.6435-9/132203714_233636998117958_2009380533331807730_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lHX8aLsvZ-gAX_KChDF&_nc_ht=scontent.fmaa12-2.fna&oh=00_AT-jIvQMRMs1PBjfzGO4SaFRlL3gUkGgbfIZT1QzHEB8eg&oe=630014DA",
      },
    ],
    followers: [
      {
        _id: uuid(),
        fullName: "Ganesh Kanchi",
        username: "ganesh-kanchi",
        profileAvatar:
          "https://pbs.twimg.com/profile_images/1469654455209451522/RauMEOS7_400x400.jpg",
      },
    ],
  },
  {
    _id: uuid(),
    fullName: "Nikhil_Belide",
    username: "Nikhil_Belide",
    password: "nikhil_00",
    bio: "Web Dev under Construction",
    website: "https://nikhil-belide.netlify.app",
    profileAvatar:
      "https://pbs.twimg.com/profile_images/1542024739816091649/1Kd8fuje_400x400.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        fullName: "Ganesh Kanchi",
        username: "ganesh-kanchi",
        profileAvatar:
          "https://pbs.twimg.com/profile_images/1469654455209451522/RauMEOS7_400x400.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        fullName: "John Doe",
        username: "john_doe",
        profileAvatar:
          "https://scontent.fmaa12-2.fna.fbcdn.net/v/t1.6435-9/132203714_233636998117958_2009380533331807730_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lHX8aLsvZ-gAX_KChDF&_nc_ht=scontent.fmaa12-2.fna&oh=00_AT-jIvQMRMs1PBjfzGO4SaFRlL3gUkGgbfIZT1QzHEB8eg&oe=630014DA",
      },
      {
        _id: uuid(),
        fullName: "Ganesh Kanchi",
        username: "ganesh-kanchi",
        profileAvatar:
          "https://pbs.twimg.com/profile_images/1469654455209451522/RauMEOS7_400x400.jpg",
      },
    ],
  },
];
