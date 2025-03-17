import { Link } from "react-router-dom";

export default function Navbar(){
    return (
       <nav className="flex gap-4 container mx-auto  font-bold">
         <Link className="hover:underline" to={'/'}>Home</Link>
         <Link className="hover:underline" to={'/users'}>Users</Link>
       </nav>
    )
}