interface FDropdownStatusProps {
    handleClick: (value: string) => any;
}

const FDropdownStatus: React.FC<FDropdownStatusProps> = ({ handleClick }) => {
    return (
        <div className="mb-2">
            <p className="text-base text-gray-500">Status</p>

            <div
                className="rounded-sm py-2 hover:bg-gray-100"
                onClick={() => handleClick("For sale")}
            >
                <h3 className="text-2xl text-black222 font-bold">For sale</h3>
            </div>
            <div
                className="rounded-sm py-2 hover:bg-gray-100"
                onClick={() => handleClick("For rent")}
            >
                <h3 className="text-2xl text-black222 font-bold">For rent</h3>
            </div>
        </div>
    );
};
export default FDropdownStatus;
