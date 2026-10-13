export const ROOT_DOMAIN = "helloworld.ind.in";

export type Service = {
  name: string;
  subdomain: string;
  description: string;
  icon: string;
};

// Add, remove or reorder entries here and the landing page updates itself.
export const services: Service[] = [
  /*{
    name: "Sign in",
    subdomain: "auth",
    description: "One login for every service. Sign in or create an account.",
    icon: "🔐",
  },*/
  /*{
    name: "Account",
    subdomain: "account",
    description: "View and manage your profile, settings and account information.",
    icon: "⚙️",
  },*/
  /*{
    name: "Blog",
    subdomain: "blog",
    description: "Articles, notes and write-ups on things we build and learn.",
    icon: "✍️",
  },*/
  /*{
    name: "Todo",
    subdomain: "todo",
    description: "A simple, fast task manager to plan your day and get things done.",
    icon: "✅",
  },*/
  /*{
    name: "Portfolio",
    subdomain: "devashish",
    description: "Meet Devashish: projects, skills and the story behind the work.",
    icon: "👤",
  },*/
];

export const serviceUrl = (subdomain: string) =>
  `https://${subdomain}.${ROOT_DOMAIN}`;
