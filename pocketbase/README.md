# PocketBase — Railway deployment

## Deploy

1. Go to [railway.app](https://railway.app) → New project → Deploy from GitHub repo
2. Select this repo, set **Root Directory** to `pocketbase/`
3. Railway auto-detects the Dockerfile and builds it
4. Under **Settings → Networking**, generate a public domain (e.g. `your-app.up.railway.app`)
5. Open `https://your-app.up.railway.app/_/` → create your superuser account
6. The `prds` collection is auto-created by the migration on first start

## Connect from the builder

Paste your Railway URL into the **Connect to PocketBase** screen in the builder.
The `prds` collection is public for MVP — lock it down via admin UI when you add team auth.

## Migrate to PostgreSQL later

When you need scale:
- Add a Railway PostgreSQL service
- Update PocketBase's `--dir` to point to the Postgres DSN (PocketBase supports both)
- Or export data and import into Supabase/Neon
