import { Footer, Navbar, Wrapper } from ".";

const MainLayout = ({ children }) => {
  return (
    <Wrapper>
      <div className="flex h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </Wrapper>
  );
};

export default MainLayout;
