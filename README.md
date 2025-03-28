# Insta Cloan

## Overview
Insta Cloan is a modern social media application inspired by Instagram, built with **Next.js**, **Drizzle ORM**, **Clerk for authentication**, and **PostgreSQL** for data storage. The app allows users to sign up, follow other users, and view profiles.

## Features
- 🔐 **User Authentication** - Sign up and log in with Clerk authentication.
- 🏆 **Follow Profiles** - View and follow users from a dynamic profile list.
- 📄 **Database Integration** - Uses Drizzle ORM with PostgreSQL.
- 🎨 **Theming Support** - Light & Dark mode using `next-themes`.
- 🚀 **Next.js API Routes** - Secure backend logic for user management.

## Tech Stack
- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Clerk
- **Deployment**: Vercel

## Working
### Authentication with Clerk
The app uses **Clerk** for authentication, allowing users to sign up and log in securely. The authentication is handled using Clerk's built-in components, making it seamless and secure.

### Fetching Data from API
User profile data is fetched from an external API (`https://api.slingacademy.com/v1/sample-data/users?limit=20`). The app dynamically loads user profiles and displays them in the **Following Profiles** section.

### Theming with Next Themes
The app supports both **Light** and **Dark** mode using the `next-themes` package. Users can switch between themes effortlessly, enhancing the user experience.

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/insta-app.git
   cd insta-app
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file and add the following:
   ```sh
   DATABASE_URL=your_postgres_connection_string
   NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
   CLERK_SECRET_KEY=your_clerk_secret_key
   ```

4. **Run the app locally:**
   ```sh
   npm run dev
   ```
   The app will be available at `http://localhost:3000`

## Deployment
To deploy the app on **Vercel**, run:
```sh
vercel --prod
```
Production Link: [Live App](https://insta-gamma-three.vercel.app/)

## Folder Structure
```
📦 insta-app
 ┣ 📂 db           # Database setup & Drizzle ORM schema
 ┣ 📂 components   # Reusable UI components
 ┣ 📂 pages        # Next.js pages & API routes
 ┣ 📂 public       # Static assets
 ┣ 📜 .env.local   # Environment variables (not committed)
 ┣ 📜 package.json # Project dependencies
 ┗ 📜 README.md    # Project documentation
```

## License
MIT License © 2025 NITESH

