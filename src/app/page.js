import Image from 'next/image'
import styles from './page.module.css'
import { useRouter } from 'next/navigation';
import { usePage } from "@/store/store";
import Datatable from './components/Datatable';

export default function Home() {
  
  useRouter.push(`/tables/${usePage.getState().page}`)
  return (
    <>
    {/* <Page1 /> */}
    this is home page
    
    {/* <Datatable /> */}
    </>
  )
}
