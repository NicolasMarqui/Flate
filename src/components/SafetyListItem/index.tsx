interface SafetyListItemProps {
    item: {
        id: number;
        title: string;
        desc: string;
        icon: React.ReactElement;
    };
}

const SafetyListItem: React.FC<SafetyListItemProps> = ({ item }) => {
    const { title, desc, icon } = item;

    return (
        <div className="flex-1 mx-3 flex flex-col items-center justify-center mb-5 md:mb-0">
            <div className="my-4 p-4 md:p-0 bg-white rounded-full md:w-28 md:h-28 flex items-center justify-center">
                {icon}
            </div>

            <h3 className="text-white my-4 text-2xl">{title}</h3>
            <p className="text-gray-400 mt-2 text-center md:w-2/3">{desc}</p>
        </div>
    );
};
export default SafetyListItem;
