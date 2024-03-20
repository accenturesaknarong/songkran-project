import React from 'react';

import Avatar1 from "../../images/avatar/Avatar1";
import Avatar2 from "../../images/avatar/Avatar2";
import Avatar3 from "../../images/avatar/Avatar3";
import Avatar4 from "../../images/avatar/Avatar4";
import Avatar5 from "../../images/avatar/Avatar5";
import Avatar6 from "../../images/avatar/Avatar6";

export const USER_ICONS_STYLE = {
    icon1: {
      icon: "icon1",
      face: "#F4D5CC",
      neck: "#D6B7AE",
      hairType1: "#393939",
    },
    icon2: {
      icon: "icon2",
      face: "#F4D4C9",
      neck: "#D6B6AB",
      hairType1: "#613F2B",
    },
    icon3: {
      icon: "icon3",
      face: "#EED4CC",
      neck: "#D0B6AE",
      hairType1: "#E7939E",
      hairType2: "#FFBBC6",
    },
    icon4: {
      icon: "icon4",
      face: "#F6DDD6",
      neck: "#D8BFB8",
      hairType1: "#62360D",
      hairType2: "#8A5E35",
      hairType3: "#9E7249",
      hairType4: "#4E2200",
    },
    icon5: {
      icon: "icon5",
      face: "#F6DDD6",
      neck: "#D8BFB8",
      hairType1: "#543415",
      hairType4: "#402001",
    },
    icon6: {
      icon: "icon6",
      face: "#F6DDD6",
      neck: "#D8BFB8",
      hairType1: "#D47581",
    },
};

export const USER_ICONS = [
    {
      icon: <Avatar1 custom={USER_ICONS_STYLE.icon1} />,
      key: "icon1",
      image: require("../../images/avatar/png/Avatar1.png"),
    },
    {
      icon: <Avatar2 custom={USER_ICONS_STYLE.icon2} />,
      key: "icon2",
      image: require("../../images/avatar/png/Avatar2.png"),
    },
    {
      icon: <Avatar3 custom={USER_ICONS_STYLE.icon3} />,
      key: "icon3",
      image: require("../../images/avatar/png/Avatar3.png"),
    },
    {
      icon: <Avatar4 custom={USER_ICONS_STYLE.icon4} />,
      key: "icon4",
      image: require("../../images/avatar/png/Avatar4.png"),
    },
    {
      icon: <Avatar5 custom={USER_ICONS_STYLE.icon5} />,
      key: "icon5",
      image: require("../../images/avatar/png/Avatar5.png"),
    },
    {
      icon: <Avatar6 custom={USER_ICONS_STYLE.icon6} />,
      key: "icon6",
      image: require("../../images/avatar/png/Avatar6.png"),
    },
  ];
  