import { CiSearch } from "react-icons/ci";
import { MdMenu, MdApps } from "react-icons/md";
import { IoMdMic, IoIosVideocam } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import { useSidebar } from "../../context/sidebar-context";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const Header = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query");
  const { toggleSidebar } = useSidebar();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // inputtaki değeri al
    const text = e.target[0].value.trim();
    if (text) {
      // react rooter dom da bir fonksiyon içine yönlendirme yapmak istiuorsak navigate donksiyonunu kullanırız.Bunu kullanabilmek için usenavigate hook unu import ederiz.
      // arama sayfasına yönlendir aratılan kelimeyi parametre olarak ekle.
      navigate(`/results?search_query=${text}`);
    }
  };
  return (
    <header className="flex justify-between gap-4 px-4 h-14">
      {/* sol logo */}
      <div className="flex items-center gap-3]">
        <button
          onClick={toggleSidebar}
          className="p-2 hover:bg-grey rounded-full transition-duration-200-"
        >
          <MdMenu className="text-xl md:text-2xl " />
        </button>
        <Link to="/" className="flex items-center gap-1">
          <img src="/youtube.png" alt="youtube" className="w-8" />
          <span className="text-xl font-bold tracking-tight max-sm:hidden">
            Youtube
          </span>
        </Link>
      </div>

      {/* orta :Arama */}
      <div className="flex-1 max-w-[728px] mx-4 flex justify-center items-center">
        <form
          className="flex w-full max-w-[640px] items-center"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-1">
            <input
              type="text"
              defaultValue={query}
              className="w-full h-10 px-4 bg-[#121212] border border-grey rounded-l-full text-white  placeholder:text-[#aaaaaa] focus:border-[#1c62b9] outline-none "
              placeholder="Ara"
            />
            <button className="w-16 h-10 px-4 bg-[#222222] border border-grey rounded-r-full flex justify-center items-center hover:bg-zinc-700 transition">
              <CiSearch className="text-xl text-white" />
            </button>
          </div>
          <button className="ml-2 p-2 bg-[#181818] hover:bg-grey transition rounded-full max-sm:hidden ">
            <IoMdMic />
          </button>
        </form>
      </div>
      {/* sol :Icons */}
      <div className="flex items-center gap-2">
        <button className="icon">
          <IoIosVideocam />
        </button>
        <button className="icon">
          <MdApps />
        </button>
        <button className="icon">
          <FaBell />
          <span className="absolute -top-0.5 -right-1 bg-red-600 text-xs rounded-full size-4 grid place-items-center font-bold">
            3
          </span>
        </button>

        <button className="icon">
          <RiAccountCircleLine />
        </button>
      </div>
    </header>
  );
};
export default Header;
