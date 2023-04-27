"use client";

import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "../styles/datatable.css";

import { motion } from "framer-motion";
import MUIDataTable from "mui-datatables";
import { ThemeProvider, createTheme } from "@mui/material";

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
  download: false,
  filter: false,
  tableBodyHeight: "400px",
  tableBodyMaxHeight: "400px",
  onTableChange: (action, state) => {
    console.log(action);
    console.dir(state);
  },
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
              />
            </motion.div>
          </div>
        </ThemeProvider>
        {/* </Scrollbars> */}
      </div>
    </>
  );
}
