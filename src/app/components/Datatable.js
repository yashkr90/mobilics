"use client";

import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "../styles/datatable.css";
import { Scrollbars } from "react-custom-scrollbars-2";
import { motion } from "framer-motion";
import MUIDataTable from "mui-datatables";
import { ThemeProvider, createTheme } from "@mui/material";
import { InfoRounded } from "@mui/icons-material";
import TableCell from "@mui/material/TableCell";
import { EnvelopeFill, ChatQuoteFill } from "react-bootstrap-icons";
import { MdPerson, MdOutlineFormatListNumbered } from "react-icons/md";
import { BiMaleFemale, BiDollar } from "react-icons/bi";
import { FaCity, FaCarAlt } from "react-icons/fa";
import { BsPhoneFill } from "react-icons/bs";

import Stack from "@mui/material/Stack";

const theme = createTheme({
  components: {
    MUIDataTableHeadCell: {
      styleOverrides: {
        data: {
          fontSize: "16px !important",
          fontWeight: "600 !important",
          fontFamily: "'Poppins', sans-serif !important",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          // fontSize: "medium !important",
          fontWeight: "600 !important",
          fontFamily: "'Poppins', sans-serif !important",
        },
      },
    },
  },
});

// const theme1 = createTheme({
//   styleOverrides: {
//     MuiCssBaseline: {
//       '@global': {
//         '*::-webkit-scrollbar': {
//           width: '8px',
//           height: '8px',
//         },
//         '*::-webkit-scrollbar-track': {
//           background: 'inherit',
//           boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
//         },
//         '*::-webkit-scrollbar-thumb': {
//           backgroundColor: "red",
//           borderRadius: '20px',
//           // border: header,
//         },
//         '*::-webkit-scrollbar-corner': {
//           background: 'inherit',
//         },
//       },
//     },
//   },
//   }
// );

// import { Scrollbars } from 'react-custom-scrollbars';

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
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
// ];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];
// const renderThumb = ({ style, ...props }) => {
//   const thumbStyle = {
//     borderRadius: 6,
//     backgroundColor: 'rgba(35, 49, 86, 0.8)'
//   };
//   return <div style={{ ...style, ...thumbStyle }} {...props} />;
// };

// const CustomScrollbars = props => (
//   <Scrollbars
//     renderThumbHorizontal={renderThumb}
//     renderThumbVertical={renderThumb}
//     {...props}
//   />
// );
const headerIcon = {
  fullname: <MdPerson />,
  email: <EnvelopeFill />,
  gender: <BiMaleFemale />,
  income: <BiDollar />,
  city: <FaCity />,
  car: <FaCarAlt />,
  quote: <ChatQuoteFill />,
  phone_price: <BsPhoneFill />,
  slno: <MdOutlineFormatListNumbered />,
  average_income: <BiDollar />,
};

const options = {
  selectableRowsHeader: false,
  selectableRows: "none",
  print: false,
  // viewColumns:false,
  // display:"excluded",
  download: false,
  filter: false,
  // borderRadius: "50px",
  tableBodyHeight: "400px",
  tableBodyMaxHeight: "400px",
  onTableChange: (action, state) => {
    console.log(action);
    console.dir(state);
  },
  // customRowRender:(data, dataIndex, rowIndex) => {
  //   console.log(data);
  // }
};

export default function DataTable({ rows, columns }) {
  // const datas =rendericons(columns);

  const datas = columns.map((column) => {
    return {
      ...column,
      options: {
        customHeadLabelRender: (columnMeta) => {
          console.log(columnMeta);
          const fieldname = columnMeta.name;
          return (
            <>
              <Stack direction="row" spacing={1.5}>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignContent: "center",
                  }}
                >
                  {headerIcon[fieldname]}
                </div>
                <div>{columnMeta.label} </div>
              </Stack>
            </>
          );
        },
      },
    };
  });

  // console.log(datas);
  return (
    <>
      <div
        style={{
          height: 500,
          width: "80%",
          marginBottom: "30px",
          marginTop: "30px",
          marginLeft: "auto",
          marginRight: "auto",
          // position:"relative",
        }}
      >
        <ThemeProvider theme={theme}>
          {/* <Scrollbars style={{ width: "100%", height: "100%" }}> */}
          <div className="datatable_div">
            <motion.div
              initial={{
                opacity: 0,
                //  y: -40,
                scale: 0.1,
              }}
              animate={{
                opacity: 1,
                // y: 0,
                scale: 1,
                transition: {
                  // duration: 3,
                  delay: 0.3,
                },
              }}
              exit={{
                opacity: 0,
                // translateY:50,
                scale: 0.1,
              }}
            >
              <MUIDataTable
                title={"Mobilics"}
                data={rows}
                columns={datas}
                options={options}
                // pageSize={5}
                // rowsPerPageOptions={[5]}
              />
            </motion.div>
          </div>
        </ThemeProvider>
        {/* </Scrollbars> */}
      </div>
    </>
  );
}
