import Lottie from "react-lottie";

const EmptyAnimation: React.FC = ({}) => {
    const EMPTY__ANIMATION = require("../../../public/animations/empty.json");

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: EMPTY__ANIMATION,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <div className="my-5 flex flex-col items-center justify-start">
            <Lottie
                options={defaultOptions}
                height={150}
                width={150}
                style={{ cursor: "initial" }}
            />

            <h5 className="text-gray-400">0 Properties found...</h5>
        </div>
    );
};
export default EmptyAnimation;
