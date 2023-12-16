"use strict";
// Accept an array of repository names
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchGitHubData = void 0;
const fetchGitHubData = (repos) => __awaiter(void 0, void 0, void 0, function* () {
    const owner = "t-bello7";
    const list = yield Promise.all(repos.map((repo) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield fetch(`https://api.github.com/repos/${owner}/${repo}`);
        if (!response.ok) {
            throw new Error(`"${owner}/${repo}" not found. Kindly review your list of repositories`);
        }
        const data = yield response.json();
        const { html_url: url, full_name: name, stargazers_count: stars, forks_count: forks, description: desc } = data;
        return `<li><a href=${url} target="_blank" rel="noopener noreferrer">${name}</a>(<b>${stars}</b> ✨ and <b>${forks}</b> 🍴 ) : ${desc}</li>`;
    })));
    return `<ul>${list.join("")} \n<li>More coming soon :).</li></ul>`;
});
exports.fetchGitHubData = fetchGitHubData;
