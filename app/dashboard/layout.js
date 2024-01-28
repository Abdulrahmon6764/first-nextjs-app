import './dashbStyles.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({children}){
    // usePathName
   const pathName = usePathname();

   
    return (
        <section>

        {/* navBbar     */}
       <nav className="navBbar">
        <li>
         <Link href={'/'} className={`a-link ${pathName === '/' ? 'active' : ''}`} >Home</Link>
        </li>
        <li>
         <Link href={'/dashboard'} className='a-link'>Dashboard</Link>
        </li>
        <li>
         <Link href={'/contact'} className='a-link'>Contact</Link>
        </li>
       </nav>
        
       {children}
        </section>
    )
}