const Wrapper = ({ children }) => {
  return (
    <div className="max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8 w-full">
      {children}
    </div>
  );
};

export default Wrapper;
