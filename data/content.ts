import type {
  HeroData,
  SkillsData,
  AboutData,
  ContactEntry,
  ProjectCategory,
} from "./types";

// Re-export types so existing imports keep working.
export type { ContactEntry, Project, ProjectCategory } from "./types";

// ─── Hero ────────────────────────────────────────────────────
export const heroData: HeroData = {
  greeting: "你好，我是顾睿涵",
  titles: ["运营实习生", "Growth & Resilience", "AI Agent & Vibe Coding"],
};

// ─── Skills ──────────────────────────────────────────────────
export const skillsData: SkillsData = {
  skills: "AI & 敏捷开发: Vibe Coding, Gemini, GPT-4, Python, Claude\n数据与分析: SQL, Excel\n设计与内容: Figma, Midjourney, Stable Diffusion, 结构化 Prompt",
  highlights: ["Vibe Coding", "Figma", "SQL"],
};

// ─── About ───────────────────────────────────────────────────
export const aboutData: AboutData = {
  image: "/pic.png",
  imageAlt: " Character Illustration",
  text: `【EDUCATION】2023-2027：杭师大 历史学（师范）
【EXPERRIENCES】·2025年2-6月：浙江实在智能科技有限公司（电商运营实习生）
·2025年6-11月：杭州归一智能科技有限公司（内容/产品运营实习生）   ·个人IP：8万+小说作者；独立运营个人账号；运用vibe coding制作程序网站 `,
};

// ─── Contact ─────────────────────────────────────────────────
export const contactData: ContactEntry[] = [
  {
    type: "Phone",
    value: "+86 18967285968",
    href: "tel:+8618967285968",
  },
  {
    type: "Email",
    value: "2246640882@qq.com",
    href: "mailto:2246640882@qq.com",
  },
];

// ─── Work / Projects ─────────────────────────────────────────
export const projectCategories: ProjectCategory[] = [
  {
    category: "Web Development",
    projects: [
      {
        title: "小红书爆款笔记",
        image: "/projects/1.png",
        techStack: ["小红书", "ai tools"],
        href: "#",
      },
      {
        title: "figma应用",
        image: "/projects/2.jpg",
        techStack: ["figma", "ai tools"],
        href: "#",
      },
    ],
  },
  {
    category: "3D Visualization",
    projects: [
      {
        title: "vibe coding网页",
        image: "/projects/3.png",
        techStack: ["ai studio", "codex"],
        href: "https://ruihanna04-svg.github.io/dayspark/",
      },
    ],
  },
  {
    category: "UI/UX Design",
    projects: [
      {
        title: "视频剪辑",
        image: "/projects/cover.jpg",
        techStack: ["Figma", "剪映"],
        href: "https://www.xiaohongshu.com/discovery/item/69218ef2000000000d00c186?source=webshare&xhsshare=pc_web&xsec_token=ABh_-3YcSGyON-d24hdcZKbmzeLVvqSc-2yF2AcOS2w0g=&xsec_source=pc_share",
      },
    ],
  },
  {
    category: "Mobile App",
    projects: [
      {
        title: "文案内容创作功底",
        image: "/projects/4.jpg",
        techStack: ["公众号", "小红书"],
        href: "#",
      },
    ],
  },
];

