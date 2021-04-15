interface CustomIconProps {
    price: string;
    color: string;
}

const CustomIcon: React.FC<CustomIconProps> = ({ price, color }) => {
    return (
        <div
            className="py-2 px-2 w-28 hover:opacity-50"
            style={{ background: color }}
        >
            <p className="text-white font-bold text-base text-center">
                <span className="ml-2">€</span>
                {price}
            </p>
        </div>
    );
};
export default CustomIcon;
