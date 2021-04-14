import "reoverlay/lib/ModalWrapper.css";
import { ModalWrapper } from "reoverlay";

interface ModalContainerProps {
    children: any;
}

const ModalContainer: React.FC<ModalContainerProps> = ({ children }) => {
    return (
        <ModalWrapper
            animation="slideDown"
            contentContainerClassName="container__modal"
        >
            <div className="p-8 rounded-3xl md:p-10 flex justify-center items-center flex-col">
                {children}
            </div>
        </ModalWrapper>
    );
};
export default ModalContainer;
