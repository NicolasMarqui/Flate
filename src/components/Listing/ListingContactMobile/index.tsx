import { MdChatBubble } from "react-icons/md";

interface ListingContactMobileProps {
    employee: any;
}

const ListingContactMobile: React.FC<ListingContactMobileProps> = ({
    employee,
}) => {
    return (
        <div className="details__resp-mobile bg-white flex items-center shadow-sm z-50">
            <img
                src="https://res.cloudinary.com/drbszfkyw/image/upload/v1617807889/nivelo/ofzzndfwkr2ufcxyeiz5.jpg"
                alt={employee.first_name}
                className="rounded-full h-20 w-h-20 object-cover -mt-6 px-2"
            />

            <div className="flex-1 flex p-2 flex-row items-center justify-between">
                <h4 className="text-black222 text-xl font-bold text-center">
                    {employee.first_name} {employee.last_name}
                </h4>
                <div className="bg-primary rounded-full flex items-center justify-center cursor-pointer hover:bg-primaryHover p-3 mr-2">
                    <MdChatBubble size={25} color="#fff" />
                </div>
            </div>
        </div>
    );
};
export default ListingContactMobile;
