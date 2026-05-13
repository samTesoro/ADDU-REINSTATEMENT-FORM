import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  const user = {
    firstName: "Ej",
    lastName: "Liu",
    email: "efliu@addu.edu.ph",
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar user={user} />

      <main className="flex-1 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-4 sm:py-6 md:py-8 lg:py-10 overflow-y-auto">
        <Outlet />
      </main>

      <Footer className="shrink-0" />
    </div>
  );
}
