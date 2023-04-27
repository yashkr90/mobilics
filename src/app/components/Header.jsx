"use client";

import React from "react";
import { usePage } from "@/store/store";
import { shallow } from "zustand/shallow";
import useSWR from "swr";
import { use } from "react";
import que from "../../data/que.json";
import { motion, AnimatePresence } from "framer-motion";
import { Opacity } from "@mui/icons-material";

const Header = () => {
  const page = usePage((state) => state.page, shallow);
  // console.log(dataPromise);
  // const data=use(dataPromise);

  // if (isLoading) return <div> loadig..</div>;
  // if (error) return <div> Error</div>;
  // console.log(que);
  return (
    <>
      <header className="header_div">
        <AnimatePresence mode="wait">
          <motion.div
            layout
            key={page}
            initial={{
              // x: -100,
              y: -120,
              opacity: 0.5,
              // scale:0.5
            }}
            animate={{
              opacity: 1,
              // x: 0,
              // scale:1,
              y: 0,
              transition: {
                type: "spring",
                delay: 0.3,
              },
            }}
            exit={{
              //  x:100,
              y: -120,
              opacity: 0.5,
              // scale:0.5,
            }}
            className="header_inner"
          >
            {que[page - 1].que}
          </motion.div>
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
