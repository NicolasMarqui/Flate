interface PreTitleProps {}

const PreTitle: React.FC<PreTitleProps> = ({ children }) => {
    return (
        <h5 className="font-bold text-6xl md:text-9xl text-preTitle text-center">
            {children}
        </h5>
    );
};
export default PreTitle;
