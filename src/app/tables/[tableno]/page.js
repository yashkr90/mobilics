"use client";

import DataTable from "@/app/components/Datatable";
import { usePage } from "@/store/store";
import useSWR from "swr";
import { use } from "react";
import Skeleton from "@mui/material/Skeleton";

const URL = process.env.URL;
// const URL = "http://localhost:8000";

const fetcher = (path) => fetch(`${URL}/${path}`).then((res) => res.json());

const Page = ({ params }) => {
  const pageno = params.tableno;
  console.log(params);
  usePage.setState({ page: pageno });
  console.log("page in store ", usePage.getState().page);
  const pagenum = usePage.getState().page;
  console.log("pagenum is", pagenum);

  const { data, error, isLoading } = useSWR(`data${pagenum}`, fetcher);
  // const users=data;

  console.log(data);

  // const users = use(queryClient(`this${pagenum}`, () => {
  //   fetch(`${URL}/data${pagenum}`).then((res) => res.json());
  // })) ;

  // const users = fetchdata(pagenum).then((res)=> {return res});

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div><Skeleton variant="rectangular" width={210} height={60}></Skeleton></div>;
  const users = data;
  // console.log("users are", users);
  // const res = await fetch(`${URL}/data${page}`);
  // const users = await res.json();
  // console.log(users);
  

  const rows = users.map((currEl) => {
    return { ...currEl, fullname: `${currEl.first_name} ${currEl.last_name}` };
  });

  const columns = [
    {
      name: "fullname",
      label: "Name",
      // width: 150,
    },
    {
      name: "email",
      label: "Email",

      // width: 250,
    },
    {
      name: "gender",
      label: "Gender",
      // width: 100,
    },

    {
      name: "income",
      label: "Income",
      //  width: 100,
    },

    {
      name: "city",
      label: "City",
      // width: 190,
    },
    {
      name: "car",
      label: "Car",
      // width: 100,
    },
    {
      name: "quote",
      label: "Quote",
      // width: 220,
    },
    {
      name: "phone_price",
      label: "Phone price",
      // width: 110,
    },
  ];

  return (
    <>
      {/* this is pageno {page} */}
      <DataTable rows={rows} columns={columns} />
    </>
  );
};

export default Page;
