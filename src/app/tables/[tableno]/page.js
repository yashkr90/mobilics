// 'use client'

import DataTable from "@/app/components/Datatable";
import { usePage } from "@/store/store";
const page = async ({ params }) => {

  const URL=process.env.URL;
  const pageno = params.tableno;
  console.log(params);

  usePage.setState({ page: pageno });
  console.log("page in store ", usePage.getState().page);

  const page = usePage.getState().page;
  const res = await fetch(`${URL}/data${page}`);
  const users = await res.json();
  // console.log(users);
  // console.log(params);
  // const rows= await getData(pageno);
  // console.log(rows);
  // const rows={}

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

    { name: "income", label: "Income",
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

  // const columns = [
  //   { field: 'id', headerName: 'ID', width: 70 },
  //   { field: 'firstName', headerName: 'First name', width: 130 },
  //   { field: 'lastName', headerName: 'Last name', width: 130 },
  //   {
  //     field: 'age',
  //     headerName: 'Age',
  //     type: 'number',
  //     width: 90,
  //   },
  // ]
  // const rows = [
  //   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  //   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  //   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  //   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  //   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null }
  // ]
  return (
    <>
      {/* this is pageno {page} */}
      <DataTable rows={rows} columns={columns} />
    </>
  );
};

export default page;
