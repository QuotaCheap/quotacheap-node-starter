import 'dotenv/config';
import OpenAI from 'openai';

const apiKey = process.env.QUOTACHEAP_API_KEY;
const baseURL = process.env.QUOTACHEAP_BASE_URL || 'https://api.quota.cheap/v1';
const model = process.env.QUOTACHEAP_MODEL || 'gpt-5.4-mini';

if (!apiKey) {
  console.error('Set QUOTACHEAP_API_KEY in .env first.');
  process.exit(1);
}

const client = new OpenAI({ apiKey, baseURL });

const response = await client.chat.completions.create({
  model,
  messages: [
    { role: 'system', content: 'You are a concise developer assistant.' },
    { role: 'user', content: 'Write one sentence about why API usage logs matter.' },
  ],
});

console.log(response.choices?.[0]?.message?.content || response);
