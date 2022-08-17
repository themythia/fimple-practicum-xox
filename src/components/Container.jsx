const Container = ({ children }) => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500'>
      {children}
    </div>
  );
};
export default Container;
