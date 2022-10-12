import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      { children }
      <Footer />
    </div>
  );
};
