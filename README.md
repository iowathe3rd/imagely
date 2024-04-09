# **Imagely**

The project is a SaaS (Software as a Service) application designed to provide users with . It uses modern web development technologies to provide a seamless user experience. This is a simple pet-project that entails the logic of a simple graphic editor that works with pictures

## Stack

this project is written on some of the most popular and modern web tools.

- Nextjs (ssr, engine)
- TailwindCSS (styling)
- MongoDB (data layer)
- Stripe (payments)
- Clerk (auth)
- Cloudinary (image magic :)) )
- Shadcn ui (ui library)

look at the documentation for each tool

## Getting Started

Getting started with the project is the same as with another nextjs project, BUT first prepare env variables

```bash
npm install
npm run dev
```

Create a .env.local file in the project root, and add your environment variables there, which you will receive in the corresponding dashboards.

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

MONGODB_URL=

CLERK_WEBHOOK_SECRET=

CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_SERVER_URL="http://localhost:3000"

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
