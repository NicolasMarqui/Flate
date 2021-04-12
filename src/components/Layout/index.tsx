import Footer from "@components/Footer";
import Navbar from "@components/Navbar";

const Layout = ({ children }: any) => {
    return (
        <>
            <Navbar />
            <div className="nivelo">{children}</div>
            <Footer />
        </>
    );
};

export default Layout;
