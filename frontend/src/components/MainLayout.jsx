import { Footer, Navbar, Wrapper } from ".";

const MainLayout = ({ children }) => {
  return (
    <Wrapper>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Wrapper>
  );
};

export default MainLayout;
