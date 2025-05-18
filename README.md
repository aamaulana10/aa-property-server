# Property Server API

A RESTful API service for managing property listings built with Express.js and TypeScript.

## Tech Stack

- Node.js
- Express.js
- TypeScript
- Supabase (Database)
- PNPM (Package Manager)
- Fly.io (Deployment)

## Prerequisites

- Node.js 18 or higher
- PNPM 10.11.0 or higher
- Supabase account and project
- Fly.io account

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_anon_key
PORT=8080