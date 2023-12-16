"use strict";
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
exports.fetchRssData = void 0;
const rss_parser_1 = __importDefault(require("rss-parser"));
const parser = new rss_parser_1.default();
const fetchRssData = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const feed = yield parser.parseURL(url);
    const list = feed.items.slice(0, 5).map(item => {
        const date = new Date(item.pubDate);
        const publishedData = `${date.getDate()}/${date.getMonth() + 1} /${date.getFullYear()}`;
        return `<li><a href=${item.link} target="_blank" rel="noopener noreferrer">${item.title}</a> (${publishedData}).</li>`;
    });
    return `<ul>${list.join("")}</ul>\n`;
});
exports.fetchRssData = fetchRssData;
