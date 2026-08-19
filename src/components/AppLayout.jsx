import Navbar from './common/Navbar';
import Footer from './Footer';

const AppLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default AppLayout; 