import React from "react";
import {
  FiMenu,
  FiMoreHorizontal,
  FiChevronDown,
  FiSettings,
} from "react-icons/fi";
import {
  BiSearch,
  BiCalendarEvent,
  BiMessageRounded,
  BiTime,
} from "react-icons/bi";
import { IoRocketOutline } from "react-icons/io5";
import { TfiAnnouncement, TfiPrinter, TfiHelpAlt } from "react-icons/tfi";
import { IoNotificationsOutline, IoDocumentsOutline } from "react-icons/io5";
import {
  MdOutlinePostAdd,
  MdAdd,
  MdOutlineScreenSearchDesktop,
} from "react-icons/md";
import { HiOutlineUserCircle } from "react-icons/hi";
import { FaAddressBook, FaUsers, FaUserAlt } from "react-icons/fa";
import { BsTable } from "react-icons/bs";

export const links = [
  {
    icon: <FiMenu />,
  },
  {
    name: "Home",
  },

  {
    name: "Job Openings",
    icon: <FiChevronDown />,
  },
  {
    name: "Candidates",
    icon: <FiChevronDown />,
  },
  {
    name: "Interviews",
  },
  {
    name: "Clients",
  },
  {
    name: "Contacts",
  },
  {
    name: "Campaigns",
  },
  {
    name: "Extra",
    icon: <FiMoreHorizontal />,
  },
];

export const tools = [
  {
    title: "Search",
    icon: <BiSearch />,
  },
  {
    title: "Rocket",
    icon: <IoRocketOutline />,
  },
  {
    title: "Announcement",
    icon: <TfiAnnouncement />,
  },
  {
    title: "Notification",
    icon: <IoNotificationsOutline />,
  },
  {
    title: "Notes",
    icon: <MdOutlinePostAdd />,
  },
  {
    title: "Calendar",
    icon: <BiCalendarEvent />,
  },
  {
    title: "Settings",
    icon: <FiSettings />,
  },
  {
    title: "Bar",
    icon: "|",
  },
  {
    title: "User",
    icon: <HiOutlineUserCircle />,
  },
];

export const applications = [
  {
    title: "icon",
    icon: <FaAddressBook color="blue" />,
  },
  {
    title: "Application",
    icon: "Applications",
  },
  {
    title: "Bar",
    icon: "|",
  },
  {
    title: "All",
    text: "All Applications",
    icon: <FiChevronDown />,
  },
  {
    title: "Aroow",
  },
];

export const apptools = [
  {
    title: "Add",
    icon: <MdAdd />,
  },
  {
    title: "Extra",
    icon: <FiMoreHorizontal />,
  },
  {
    title: "Grid",
    icon: <BsTable />,
  },
  {
    title: "Print",
    icon: <TfiPrinter />,
  },
];

export const filters = [
  {
    id: 1,
    title: "Posting Title",
  },
  {
    id: 2,
    title: "Application Status",
  },
  {
    id: 3,
    title: "To-Dos",
  },
  {
    id: 4,
    title: "Notes",
  },
  {
    id: 5,
    title: "Attachment Category",
  },
  {
    id: 6,
    title: "Rating",
  },
  {
    id: 7,
    title: "Last Name",
  },
  {
    id: 8,
    title: "Hiring Pipeline",
  },
  {
    id: 9,
    title: "Application ID",
  },
  {
    id: 10,
    title: "Account Manager",
  },
  {
    id: 11,
    title: "Application Owner",
  },
  {
    id: 12,
    title: "Application Source",
  },
  {
    id: 13,
    title: "Assigned Recruiter(s)",
  },
  {
    id: 14,
    title: "Associated Tags",
  },
];

export const users = [
  {
    title: "Chats",
    icon: <BiMessageRounded />,
  },
  {
    title: "Channels",
    icon: <FaUsers />,
  },
  {
    title: "Contacts",
    icon: <FaUserAlt />,
  },
];

export const footerhelp = [
  {
    id: 1,
    icon: <MdOutlineScreenSearchDesktop />,
  },
  {
    id: 2,
    icon: <BiTime />,
  },
  {
    id: 3,
    title: "Need Help",
    icon: <TfiHelpAlt />,
  },
  {
    id: 4,
    icon: <IoDocumentsOutline />,
  },
  {
    id: 5,
    icon: <BiSearch />,
  },
];

export const headers = [
  {
    title: "Rating",
  },
  {
    title: "Application Name",
  },
  {
    title: "Hiring Pipeline",
  },
  {
    title: "Application Status",
  },
  {
    title: "Application Id",
  },
  {
    title: "Posting Title",
  },
];
