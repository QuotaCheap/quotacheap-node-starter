# QuotaCheap Node Starter

Minimal Node.js starter for QuotaCheap's OpenAI-compatible API.

Base URL:

```bash
https://api.quota.cheap/v1
```

## Setup

```bash
cp .env.example .env
npm install
npm start
```

Set your API key in `.env`:

```env
QUOTACHEAP_API_KEY=your_quota_cheap_api_key
QUOTACHEAP_BASE_URL=https://api.quota.cheap/v1
QUOTACHEAP_MODEL=gpt-5.4-mini
```

## What this starter shows

- OpenAI SDK configured with QuotaCheap base URL
- Chat completion request
- Environment-based API key handling
- Small, copyable structure for agents and internal tools

After your first request, check the QuotaCheap dashboard for usage logs, token usage, latency, and costs.

Website: [quota.cheap](https://www.quota.cheap?utm_source=github&utm_medium=starter&utm_campaign=node)
