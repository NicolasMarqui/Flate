interface ListingContactProps {
    employee: any;
}

const ListingContact: React.FC<ListingContactProps> = ({ employee }) => {
    return (
        <div className="details__resp">
            <div className="resp__static">
                <div className="rounded-2xl bg-white py-5 px-5">
                    <div className="flex w-full items-center justify-center mt-2">
                        <img
                            src="https://res.cloudinary.com/drbszfkyw/image/upload/v1617807889/nivelo/ofzzndfwkr2ufcxyeiz5.jpg"
                            alt={employee.first_name}
                            className="rounded-full h-24 w-24 object-cover"
                        />
                    </div>

                    <div className="mt-4">
                        <h4 className="text-black222 text-3xl font-bold text-center">
                            {employee.first_name} {employee.last_name}
                        </h4>

                        <p className="mt-2 text-black222 mx-auto text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quaerat nobis quis cum tempora perferendis
                            mollitia, et deleniti.
                        </p>

                        <div className="mt-5 bg-primary rounded-2xl flex items-center justify-center cursor-pointer hover:bg-primaryHover">
                            <p className="text-white font-bold p-2">
                                CONTACT ME
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ListingContact;
