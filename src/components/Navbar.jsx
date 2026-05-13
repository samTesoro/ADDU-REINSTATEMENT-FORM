import adduLogo from "../assets/addu-white.png";
import UserInfo from "./UserInfo";

export default function Navbar({ user }) {

  return (
    <header
      className="flex justify-between items-center px-3 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-3 sm:py-4 md:py-6 lg:py-8 shadow-md flex-wrap md:flex-nowrap gap-2"
      style={{ backgroundColor: "#2F3590" }}
    >
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 min-w-0">
        <img src={adduLogo} alt="ADDU Logo" className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 shrink-0" />
        <div
          className="text-white hidden md:block min-w-0"
          style={{ fontFamily: "'Trajan Pro'", fontWeight: 300 }}
        >
          <div className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-4xl truncate">ATENEO DE DAVAO UNIVERSITY</div>
          <div className="text-xs md:text-xs lg:text-sm xl:text-[15px] truncate">STRONG IN FAITH THAT DOES JUSTICE </div>
        </div>
      </div>

      <div className="shrink-0">
        <UserInfo user={user} />
      </div>
    </header>
  );
}
