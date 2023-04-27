"use client";

import { useState } from "react";
import Button from "@mui/material/Button";
import Link from "next/link";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PaginationItem from "@mui/material/PaginationItem";
import { useRouter } from "next/navigation";
import { usePage } from "@/store/store";


const Footer = () => {
  const router = useRouter();

  const page = usePage((state) => state.page);
  const updatePage = usePage((state) => (state.updatePage));

  // const [page, setPage] = useState(1);
  const handleChange = async(event, value) => {
    console.log(value);
    // setPage(value);
    // usePage.setState({page:value});
console.log("the value is",value);
    await updatePage(value);

    console.log("page in store ", usePage.getState().page);
    
    router.push(`/tables/${usePage.getState().page}`);
  };

  return (
    <>
      <footer 
      style={{position:"absolute",bottom:0}}
      >
        {/* the page is {page} */}
        <Stack spacing={2}>
          {/* <Link href={`/tables/${page}`}> */}
          <Pagination
            count={5}
            page={Number(page)}
            size="large"
            onChange={handleChange}
            defaultPage={page}
            renderItem={(item) => (
              <PaginationItem
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            )}
          />
          {/* </Link> */}
        </Stack>
      </footer>
    </>
  );
};

export default Footer;
