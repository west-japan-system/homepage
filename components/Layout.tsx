import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout: React.FC = ({ children }: any) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
