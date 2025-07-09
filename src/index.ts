import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { registerAppStoreTools } from "./appstore.js";

const server = new McpServer({
  name: "appstore",
  version: "1.0.0",
  capabilities: {
    resources: {},
    tools: {},
  },
});

async function main() {
  registerAppStoreTools(server);
  
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});