This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Project description:

1. Data is fetched from Server using api endpoints created using Nodejs.
2. Five endpoints for API is viz. * /data1, /data2, /data3, /data4, /data5 * and each endpoint serves data to their respective tables. 
3. Five routes are made to display each of the table using nextjs dynamic routing which are named as 
/tables/*[pagenum].
4. Header and Footer components are made which is wrapped in layout.js to render Header and Footer on each page.
5. Two env files .env.development and .env.production contain server url for development and production build.
5. On each page data is fetched using nextjs useSwr to enable caching of data for better performance and 
  passed on to client side component Datatable.js to display the table.
6. Global store is made using Zustand to manage state for pagenumber, changing the page dynamically redirects the application to different route.

7. Material ui is used for creating components , framer-motion is used to create subtle animations.

## Server description:

1. Server is created using Nodejs and expressjs.
2. The sample_data is loaded onto the MongoDB atlas on staring the server.
3. Five routes viz. * /data1, /data2, /data3, /data4, /data5 * are created and each endpoint uses mongoose to query data from MongoDB database.
4. Mongoose query are fast and efficient to retrieve data quickly and then selected documents are returned as response in JSON format from each endpoint.
5. .env files created to store and hide mongodb url.

   




