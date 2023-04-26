"use client";

import DataTable from "@/app/components/Datatable";
import { usePage } from "@/store/store";
import useSWR from "swr";

const URL = "http://localhost:8000";

const fetcher = (path) => fetch(`${URL}/${path}`).then((res) => res.json());


const Page = (params) => {
  const URL = process.env.URL;
  console.log(params);
  const pageno = 5;
  console.log(params);

  usePage.setState({ page: pageno });
  console.log("page in store ", usePage.getState().page);

  const pagenum = usePage.getState().page;
  // const res = await fetch(`${URL}/data${page}`);
  // const users = await res.json();
  const { data, error, isLoading } = useSWR(`data${pagenum}`, fetcher);
 
 
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  const users = data;
  
  
  const rows = users.map((currEl, i) => {
    return { ...currEl, id: currEl.city, slno: i + 1 };
  });

  const columns = [
    {
      name: "slno",
      label: "Sl no",
      // align:"center",
      // headerAlign:"center",
      // width:150
    },

    {
      name: "city",
      label: "City",
      // flex:1,
      // // width:200,
      // align:"center",
      // headerAlign:"center",
    },
    {
      name: "average_income",
      label: "Average income",
      // flex:1,
      // // width:500,
      // align:"center",
      // headerAlign:"center"
    },
  ];

  // ]
  return (
    <>
      <DataTable rows={rows} columns={columns} />
    </>
  );
};

export default Page;
