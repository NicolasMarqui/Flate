interface SectionProps {
    classes?: string;
    children?: any;
    hasBgDetail?: boolean;
}

const Section: React.FC<SectionProps> = ({
    classes,
    children,
    hasBgDetail = false,
}) => {
    return (
        <div
            className={`${classes} relative py-20 md:py-24 border-2 border-light`}
        >
            {children}
        </div>
    );
};
export default Section;
