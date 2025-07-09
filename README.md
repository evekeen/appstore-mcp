# Apple App Store MCP Server

An MCP (Model Context Protocol) server that provides search functionality for the Apple App Store.

## Features

- Search for apps in the Apple App Store by keyword
- Return top N results with app ID, title, and URL
- Support for different countries and languages

## Installation

```bash
npm install
npm run build
```

## Usage

The server runs on stdio and provides the following tool:

### search-appstore

Search for apps in the Apple App Store.

**Parameters:**
- `term` (string, required): The search term to find apps
- `num` (number, optional): Number of results to return (1-50, default: 10)
- `country` (string, optional): Country code (e.g., 'us', 'uk', 'de', default: 'us')
- `lang` (string, optional): Language code (e.g., 'en-US', 'de-DE', default: 'en-US')

**Returns:**
JSON array of apps with:
- `id`: App Store ID
- `title`: App name
- `url`: App Store URL

## Running the Server

```bash
npm start
```

The server will run on stdio and can be integrated with any MCP-compatible client.

## Development

```bash
npm run dev  # Run TypeScript compiler in watch mode
```

## Example Response

```json
[
  {
    "id": 1069511488,
    "title": "Calculator",
    "url": "https://apps.apple.com/us/app/calculator/id1069511488?uo=4"
  },
  {
    "id": 398129933,
    "title": "Calculator₊",
    "url": "https://apps.apple.com/us/app/calculator/id398129933?uo=4"
  }
]
```