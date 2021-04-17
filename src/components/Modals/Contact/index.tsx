import { useState } from "react";
import ModalContainer from "@components/ModalContainer";
import { useFormik } from "formik";

interface ContactProps {
    name: string;
}

const Contact: React.FC<ContactProps> = ({}) => {
    const [isSent, setIsSent] = useState(false);
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: "",
        },
        onSubmit: async (values, { setErrors }) => {
            const { name, email, message } = values;
            if (!name || !email || !message) {
                setErrors({
                    name: "Check the field!",
                    email: "Check the field!",
                    message: "Check the field",
                });
            } else {
                setIsSent(true);
            }
        },
    });

    return (
        <ModalContainer>
            <h3 className="text-xl font-bold text-center text-black222">
                Contact
            </h3>

            <div className="pt-8">
                {isSent ? (
                    <div className="my-4">
                        <h2>
                            Thanks for the contact{" "}
                            <span>{formik.values.name}</span>
                        </h2>
                        <p>Our employee will be in touch with you!</p>
                    </div>
                ) : (
                    <form onSubmit={formik.handleSubmit}>
                        <div className="mb-5">
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-gray-600"
                            >
                                Name
                            </label>

                            <input
                                type="text"
                                name="name"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                                className="block w-full p-3 rounded bg-gray-100 border border-transparent focus:outline-none focus:border-orange"
                            />
                            {formik.errors.name && (
                                <p className="my-1 bg-red-400 p-2 text-sm text-white text-center">
                                    {formik.errors.name}
                                </p>
                            )}
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-600"
                            >
                                Email
                            </label>

                            <input
                                type="text"
                                name="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                className="block w-full p-3 rounded bg-gray-100 border border-transparent focus:outline-none focus:border-orange"
                            />
                            {formik.errors.email && (
                                <p className="my-1 bg-red-400 p-2 text-sm text-white text-center">
                                    {formik.errors.email}
                                </p>
                            )}
                        </div>

                        <div className="mb-5">
                            <label
                                htmlFor="description"
                                className="block mb-2 text-sm font-medium text-gray-600"
                            >
                                Message
                            </label>

                            <textarea
                                name="message"
                                onChange={formik.handleChange}
                                value={formik.values.message}
                                className="block w-full p-3 rounded bg-gray-100 border border-transparent focus:outline-none focus:border-orange h-52 resize-none"
                            />
                            {formik.errors.message && (
                                <p className="my-1 bg-red-400 p-2 text-sm text-white text-center">
                                    {formik.errors.message}
                                </p>
                            )}
                        </div>

                        <button
                            className="w-full p-3 mt-4 bg-primary text-white rounded shadow hover:bg-primaryLight"
                            type="submit"
                        >
                            Send
                        </button>
                    </form>
                )}
            </div>
        </ModalContainer>
    );
};
export default Contact;
