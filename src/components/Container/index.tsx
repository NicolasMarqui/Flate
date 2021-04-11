interface ContainerProps {
    hasMargin?: boolean;
    classes?: string;
}

const Container: React.FC<ContainerProps> = ({ children, classes }) => {
    return <div className={`container z-10 ${classes}`}>{children}</div>;
};

export default Container;