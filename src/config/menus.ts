
import {
  Graph,
  Stacks2,
  User,
  Grid,
  Settings,
  Note3,
  Book,
  DashBoard,
  Application,
  Files,
  ClipBoard,
  Pointer,
  ClipBoard2
} from "@/src/components/svg";
export interface MenuItemProps {
  title: string;
  icon: any;
  href?: string;
  child?: MenuItemProps[];
  megaMenu?: MenuItemProps[];
  multi_menu? : MenuItemProps[]
  nested?: MenuItemProps[]
  onClick: () => void;
  
}

export const menusConfig = {
  mainNav: [
      {
      title: "Dashboard",
      icon: Graph,
      child: [
        {
          title: "Analytics",
          icon: Application,
          href: "/dashboard",
        },
      ]
    },
    {
      title: "Users Management",
      icon: User,
      child: [
        {
          title: "Dealers",
          icon: Grid,
          href: "/users_management/dealers",
        },
        {
          title: "Customers",
          icon: User,
          href: "/users_management/customers/customer_list",
        },
        {
          title: "System Users",
          icon: Settings,
          href: "/users_management/system_users",
        },
      ]
    },
    {
      title: "Pricing Level",
      icon: Note3,
      child: [
        {
          title: "All Pricing Levels",
          icon: Book,
          href: "#",
        },
        {
          title: "Add New Pricing Level",
          icon: DashBoard,
          href: "#",
        },
      ]
    },

    {
      title: "Document Management",
      icon: Files,
      child: [
        {
          title: "All Documents",
          icon: ClipBoard,
          href: "/document-management",
        },
      ]
    },

    {
      title: "Update Manager",
      icon: Pointer,
      child: [
        {
          title: "All Devices",
          icon: Settings,
          href: "/update-manager",
        },
      ]
    },
    {
      title: "Logs/History",
      icon: ClipBoard2,
      child: [
        {
          title: "All Logs/History",
          icon: Grid,
          href: "/logs-history",
        },
      ]
    },
  ],
  sidebarNav: {
    modern: [
      {
        title: "Dashboard",
        icon: Graph,
        child: [
          {
            title: "Analytics",
            icon: Application,
            href: "#",
          },
        ]
      },
      {
        title: "Users Management",
        icon: User,
        child: [
          {
            title: "Dealers",
            icon: Grid,
            href: "/users_management/dealers",
          },
          {
            title: "Customers",
            icon: User,
            href: "/users_management/customers/customer_list",
          },
          {
            title: "System Users",
            icon: Settings,
            href: "/users_management/system_users",
          },
        ]
      },
      {
        title: "Pricing Level",
        icon: Note3,
        child: [
          {
            title: "All Pricing Levels",
            icon: Book,
            href: "#",
          },
          {
            title: "Add New Pricing Level",
            icon: DashBoard,
            href: "#",
          },
        ]
      },
    ],
    classic: [
       {
        isHeader: true,
        title: "menu",
      },
      {
        title: "Dashboard",
        icon: Graph,
        child: [
          {
            title: "Analytics",
            icon: Application,
            href: "#",
          },
        ]
      },
      {
        title: "Users Management",
        icon: User,
        child: [
          {
            title: "Dealers",
            icon: Grid,
            href: "/users_management/dealers",
          },
          {
            title: "Customers",
            icon: User,
            href: "/users_management/customers/customer_list",
          },
          {
            title: "System Users",
            icon: Settings,
            href: "/users_management/system_users",
          },
        ]
      },
      {
        title: "Pricing Level",
        icon: Note3,
        child: [
          {
            title: "All Pricing Levels",
            icon: Book,
            href: "#",
          },
          {
            title: "Add New Pricing Level",
            icon: DashBoard,
            href: "#",
          },
        ]
      },
    ],
  },
};


export type ModernNavType = (typeof menusConfig.sidebarNav.modern)[number]
export type ClassicNavType = (typeof menusConfig.sidebarNav.classic)[number]
export type MainNavType = (typeof menusConfig.mainNav)[number]