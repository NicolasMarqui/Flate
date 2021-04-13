interface PreTitleProps {
    classes?: string;
}

const PreTitle: React.FC<PreTitleProps> = ({ children, classes }) => {
    return (
        <h5
            className={`${classes} font-bold text-6xl md:text-9xl text-preTitle text-center`}
        >
            {children}
        </h5>
    );
};
export default PreTitle;
