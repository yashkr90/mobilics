"use client";

import DataTable from "@/app/components/Datatable";
import { usePage } from "@/store/store";
import useSWR from "swr";
import Skeleton from "@mui/material/Skeleton";
import MUIDataTable from "mui-datatables";

// const URL = "http://localhost:8000";
const URL = process.env.URL;
console.log

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
  if (isLoading)
    return <div>Loading...</div>
  const users = data;

  const rows = users.map((currEl, i) => {
    return { ...currEl, id: currEl.city, slno: i + 1 };
  });

  const columns = [
    {
      name: "slno",
      label: "Sl no",
    },

    {
      name: "city",
      label: "City",
    },
    {
      name: "average_income",
      label: "Average income",
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
