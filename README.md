# ElevenLabs Realtime Transcriptions for your live events

Real-time captioning platform with on-device translation. Built with ElevenLabs Scribe and Supabase.

![LiveCaptions Header](https://raw.githubusercontent.com/elevenlabs/captions.events/refs/heads/main/public/supa_scribe_og.jpg)

## Features

- Real-time speech-to-text transcription (100-200ms latency)
- Live caption broadcasting to unlimited viewers
- On-device translation with [Chrome built-in AI](https://developer.chrome.com/docs/ai/translator-api) (Chrome 138+)
- Automatic language detection
- GitHub OAuth authentication
- Caption history and event management

## Prerequisites

- Node.js 18+
- pnpm
- Supabase account
- ElevenLabs API key
- GitHub account (for OAuth)

## Quick Setup

1. **Clone and install**

```bash
git clone https://github.com/yourusername/v0_realtime_scribe.git
cd v0_realtime_scribe
pnpm install
```

2. **Set up Supabase**

- Create project at [supabase.com](https://supabase.com)
- Run migrations from `supabase/migrations/` in order
- Or use CLI: `supabase start` (for local dev)

3. **Configure GitHub OAuth**

- Create OAuth App at [github.com/settings/developers](https://github.com/settings/developers)
- Callback URL: `http://localhost:3000/auth/callback`
- Add credentials to Supabase Dashboard → Authentication → Providers

4. **Environment variables**

Create `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
ELEVENLABS_API_KEY=your_api_key
```

5. **Run**

```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Usage

**Broadcaster:**

1. Sign in, create an event
2. Go to `/broadcast/[uid]`, click "Start Recording"
3. Grant microphone access and speak

**Viewer:**

1. Visit `/view/[uid]`
2. Select language for on-device translation (Chrome 138+)

## Deployment

Deploy to Vercel:

1. Import repo at [vercel.com](https://vercel.com)
2. Add environment variables
3. Update GitHub OAuth callback URL for production

## Documentation

- [SCRIBE_SETUP.md](./SCRIBE_SETUP.md) - ElevenLabs configuration
- [GITHUB_AUTH_SETUP.md](./GITHUB_AUTH_SETUP.md) - OAuth setup
- [TRANSLATION_FEATURE.md](./TRANSLATION_FEATURE.md) - Translation details

## Troubleshooting

- **Token fails**: Check `ELEVENLABS_API_KEY` in `.env.local`
- **No microphone**: Grant permissions, use HTTPS
- **No captions**: Check Supabase connection and RLS policies
- **Translation unavailable**: Use Chrome 138+

---

Built with ElevenLabs Scribe, Supabase Realtime, and Next.js
