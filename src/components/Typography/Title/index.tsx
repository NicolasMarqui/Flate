interface TitleProps {
    classes?: string;
    children?: any;
    smaller?: boolean;
}

const Title: React.FC<TitleProps> = ({ classes, children }) => {
    return (
        <h2 className={`${classes} font-bold text-4xl md:text-6xl text-white`}>
            {children}
        </h2>
    );
};
export default Title;
