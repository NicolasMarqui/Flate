import Navbar from "@components/Navbar";

const Layout = ({ children }: any) => {
    return (
        <>
            <Navbar />
            <div className="nivelo overflow-x-hidden">{children}</div>
        </>
    );
};

export default Layout;