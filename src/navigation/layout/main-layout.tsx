import { Outlet } from "react-router-dom";
import Navbar from "./navbar/navbar";
import { Footer } from "./footer";

export default function Layout() {
  return (
    <>
      <div className="min-h-full">
        <Navbar />

        <main>
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>

        <Footer/>
      </div>
    </>
  );
}
