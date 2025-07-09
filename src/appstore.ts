import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { AppStoreSearchOptions, AppInfo } from "./types.js";

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const store = require('app-store-scraper');

export function registerAppStoreTools(server: McpServer) {
  server.registerTool(
    "search-appstore",
    {
      title: "Search App Store",
      description: "Search for apps in the Apple App Store by term and return top N results with title, URL, and ID",
      inputSchema: {
        term: z.string().describe("The search term to find apps"),
        num: z.number().min(1).max(10).default(5).describe("Number of results to return (1-10, default: 5)"),
        country: z.string().default("us").describe("Country code (e.g., 'us', 'uk', 'de', default: 'us')"),
        lang: z.string().default("en-US").describe("Language code (e.g., 'en-US', 'de-DE', default: 'en-US')"),
      }
    },
    async ({ term, num, country, lang }) => {
      try {
        const searchOptions: AppStoreSearchOptions = {
          term,
          num,
          page: 1,
          country,
          lang
        };

        const results = await store.search(searchOptions);
        
        const apps: AppInfo[] = results.map((app: any) => ({
          id: app.id,
          title: app.title,
          url: app.url
        }));

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(apps, null, 2)
            }
          ]
        };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
        return {
          content: [
            {
              type: "text",
              text: `Error searching App Store: ${errorMessage}`
            }
          ]
        };
      }
    }
  );
}