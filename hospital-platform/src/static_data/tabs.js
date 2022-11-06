import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import {
  BsKanban,
  BsBarChart,
  BsBoxSeam,
  BsCurrencyDollar,
  BsShield,
  BsChatLeft,
} from "react-icons/bs";
import { IoMdContacts, IoMdAnalytics } from "react-icons/io";
import { TbReportAnalytics } from "react-icons/tb";

export const links = [
  {
    title: "Analytics",
    links: [
      {
        name: "Dashboard",
        link: "dashboard",
        icon: <IoMdAnalytics />,
      },
    ],
  },

  {
    title: "Pages",
    links: [
      {
        name: "Open Tickets",
        link: "opentickets",
        icon: <TbReportAnalytics />,
      },
      {
        name: "Employees",
        link: "employees",
        icon: <IoMdContacts />,
      },
    ],
  },
];
