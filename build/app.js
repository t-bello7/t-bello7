"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const markdown_it_1 = __importDefault(require("markdown-it"));
const fetchRssData_1 = require("./fetchRssData");
const fetchGithubData_1 = require("./fetchGithubData");
const md = (0, markdown_it_1.default)({
    html: true,
    xhtmlOut: false,
    // breaks: true,
    linkify: true,
});
const blogFeedUrl = "https://tbello.hashnode.dev/rss.xml";
const ossProjectRepos = [
    "classroomio",
    "AfriSplash-Frontend",
    "24pullrequests",
    "casa"
];
const githubUsername = "t-bello7";
const websiteUrl = "https://tbello.bio";
const blogUrl = "https://blog.hashnode.dev";
const linkedinUrl = "https://linkedin.com/in/tbello7";
const twitterUrl = "https://twitter.com/__tbello";
const githubUrl = "https://github.com/t-bello7";
const generateMarkdown = () => __awaiter(void 0, void 0, void 0, function* () {
    const websiteBadge = `[![Website Badge](https://img.shields.io/badge/-Website-3B7EBF?style=for-the-badge&logo=amp&logoColor=white)](${websiteUrl})`;
    const hashnodeBadge = `[![Blog Badge](https://img.shields.io/badge/-Blog-3B7EBF?style=for-the-badge&logo=Hashnode&logoColor=white)](${blogUrl})`;
    const linkedinBadge = `[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-3B7EBF?style=for-the-badge&logo=Linkedin&logoColor=white)](${linkedinUrl})`;
    const twitterBadge = `[![Twitter Badge](https://img.shields.io/badge/-@__tbello-3B7EBF?style=for-the-badge&logo=x&logoColor=white)](${twitterUrl})`;
    const profileCountBadge = `![Profile Views Count Badge](https://komarev.com/ghpvc/?username=${githubUsername}&style=for-the-badge)`;
    const githubStatsCardDark = `[![GitHub-Stats-Card-Dark](https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&hide_border=true&include_all_commits=true&card_width=600&custom_title=GitHub%20Open%20Source%20Stats&title_color=3B7EBF&text_color=FFF&icon_color=3B7EBF&hide=contribs&show=reviews,prs_merged,prs_merged_percentage&theme=transparent#gh-dark-mode-only)](https://github.com/${githubUsername}/${githubUsername}#gh-dark-mode-only)`;
    const githubStatsCardLight = `[![GitHub-Stats-Card-Light](https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&hide_border=true&include_all_commits=true&card_width=600&custom_title=GitHub%20Open%20Source%20Stats&title_color=3B7EBF&text_color=474A4E&icon_color=3B7EBF&hide=contribs&show=reviews,prs_merged,prs_merged_percentage&theme=transparent#gh-light-mode-only)](https://github.com/${githubUsername}/${githubUsername}#gh-light-mode-only)`;
    const markdownText = `
<div alighn="center">\n
${websiteBadge} ${hashnodeBadge} ${linkedinBadge} ${twitterBadge} ${profileCountBadge}

---\n
👋 Hi there, I'm a web specialist with in-depth knowledge of designing, developing and maintaining web applications for organizations or individuals. I create technical content, build open-source projects, tutor and  dabble in the art of hacking around with the latest technologies. My main gig? Frontend and DevOps engineering – where I spin up beautiful, interactive, and scalable applications.
---\n

${githubStatsCardDark}\n
${githubStatsCardLight}\n

</div>

## Highlights

<details>\n
<summary>OSS Projects</summary>\n
<br />
Here are some open source projects have worked on that you can check out:\n
<br />\n<br />
${yield (0, fetchGithubData_1.fetchGitHubData)(ossProjectRepos)}\n
</details>\n

<details>\n
<summary>Recent Blogposts</summary>\n
<br />\n<br />
${yield (0, fetchRssData_1.fetchRssData)(blogFeedUrl)}\n
</details>\n

<details>\n
<summary>Quick Tips</summary>\n\n
- 💬 How to reach me: DM [@bello](https://linkedin.com/in/tbello7) on Linkedin .\n
- 📬 Where to find me: Follow me on [@__tbello](https://github.com/__tbello)\n
- 📖 Book recommendations: [Atomic Habits by James Clear](https://bit.ly/45r1kBH) and [The Subtle art of not giving a fuck](https://markmanson.net/books/subtle-art).\n
- 💙 Fun fact: I'm a big time space fan :).\n
</details>\n


![no. of times visited](https://visitor-badge.laobi.icu/badge?page_id=t-bello7.t-bello7)

    `;
    const result = md.set({ html: true }).render(markdownText);
    fs.writeFile("README.md", result, (error) => {
        if (error)
            throw new Error(`Something went wrong: ${error}.`);
        console.log('✅ README.md file was succesfully generated.');
    });
});
generateMarkdown();
