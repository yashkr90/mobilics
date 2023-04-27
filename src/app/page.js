// "use client"

import Image from "next/image";
import styles from "./page.module.css";
import { redirect } from "next/navigation";
import { usePage } from "@/store/store";
import Datatable from "./components/Datatable";

export default function Home() {
  if (true) redirect("/tables/1");

  return <>this is home page</>;
}
