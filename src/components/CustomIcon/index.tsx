interface CustomIconProps {
    price: string;
}

const CustomIcon: React.FC<CustomIconProps> = ({ price }) => {
    return (
        <div className="py-2 px-2 w-28 bg-primary hover:bg-primaryHover">
            <p className="text-white font-bold text-base text-center">
                <span className="ml-2">€</span>
                {price}
            </p>
        </div>
    );
};
export default CustomIcon;
