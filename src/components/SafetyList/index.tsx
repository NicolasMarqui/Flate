import { BsHouse } from "react-icons/bs";
import { RiPsychotherapyLine } from "react-icons/ri";
import { FcAlarmClock } from "react-icons/fc";
import SafetyListItem from "@components/SafetyListItem";

const SafetyList: React.FC = ({}) => {
    const data = [
        {
            id: 1,
            title: "Confort places",
            desc:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
            icon: <RiPsychotherapyLine size={50} />,
        },
        {
            id: 2,
            title: "Best facilities",
            desc:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
            icon: <BsHouse size={50} />,
        },
        {
            id: 3,
            title: "24/7",
            desc:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
            icon: <FcAlarmClock size={50} />,
        },
    ];

    return (
        <div className="mt-10 flex flex-col md:flex-row items-center">
            {data.map((s) => (
                <SafetyListItem item={s} />
            ))}
        </div>
    );
};
export default SafetyList;
