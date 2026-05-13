import adduLogo from "../assets/addu-white.png";
import UserProfile from "./UserProfile";

export default function Navbar({ user }) {

  return (
    <header
      className="flex justify-between items-center px-3 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-2 sm:py-3 md:py-5 lg:py-6 shadow-md flex-wrap md:flex-nowrap gap-2"
      style={{ backgroundColor: "#2F3590" }}
    >
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 min-w-0">
        <img src={adduLogo} alt="ADDU Logo" className="h-12 w-12 sm:h-14 sm:w-14 md:h-18 md:w-18 lg:h-20 lg:w-20 shrink-0" />
        <div
          className="text-white hidden md:block min-w-0"
          style={{ fontFamily: "'Trajan Pro'", fontWeight: 300 }}
        >
          <div className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-4xl truncate">ATENEO DE DAVAO UNIVERSITY</div>
          <div className="text-xs md:text-xs lg:text-sm xl:text-[15px] truncate">STRONG IN FAITH THAT DOES JUSTICE </div>
        </div>
      </div>

      <div className="shrink-0">
        {/* Always show UserProfile - it handles all responsive sizes */}
        <UserProfile 
          userName={`${user.firstName} ${user.lastName}`}
          userEmail={user.email}
          initials={user.firstName.split(" ")[0][0].toUpperCase()}
        />
      </div>
    </header>
  );
}
