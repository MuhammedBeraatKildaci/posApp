import { Input, Badge } from "antd";
import {
  SearchOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  CopyOutlined,
  UserOutlined,
  BarChartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="flex justify-between items-center gap-5 text-white border-b border-gray-200 px-4 py-3 mb-3 bg-green-700">
      <div className="logo">
        <a href="/">
          <h2 className="text-2xl font-bold md:text-4xl">POS App</h2>
        </a>
      </div>
      <div className="search flex-1">
        <Input
          className="rounded-full max-w-[800px]"
          size="large"
          placeholder="Ürün Ara"
          prefix={<SearchOutlined />}
        />
      </div>
      <div className="menu-links flex justify-between items-center gap-7 md:static fixed bottom-0 md:w-auto w-screen md:bg-transparent bg-green-700 left-0 md:border-t-0 border-t md:px-0 px-4 py-1">
        <Link className="flex flex-col items-center hover:text-[#40a9ff] md:text-xl text-sm" to="/">
          <HomeOutlined /> <span>Anasayfa</span>
        </Link>
        <Link className="flex flex-col items-center hover:text-[#40a9ff] md:text-xl text-sm" to="/cart">
          <ShoppingCartOutlined /> <span>Sepet </span><Badge count={10} size="small" offset={[15, -50]} />
        </Link>
        <a className="flex flex-col items-center hover:text-[#40a9ff] md:text-xl text-sm" href="/">
          <CopyOutlined /> <span>Faturalar</span>
        </a>
        <a className="flex flex-col items-center hover:text-[#40a9ff] md:text-xl text-sm" href="/">
          <UserOutlined /> <span>Kullanıcılar</span>
        </a>
        <a className="flex flex-col items-center hover:text-[#40a9ff] md:text-xl text-sm" href="/">
          <BarChartOutlined /> <span>İstatistikler</span>
        </a>
        <a className="flex flex-col items-center hover:text-[#40a9ff] md:text-xl text-sm" href="/">
          <LogoutOutlined /> <span>Çıkış</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
