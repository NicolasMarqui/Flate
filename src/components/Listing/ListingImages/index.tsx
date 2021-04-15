import { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { motion } from "framer-motion";

interface ListingImagesProps {
    pictures: string;
    id: string;
}

const ListingImages: React.FC<ListingImagesProps> = ({ pictures, id }) => {
    const [isOpenGallery, setIsOpenGallery] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const picArr = pictures.split(",").map((img) => `${img}.jpg`);

    const handleClick = (idx: number) => {
        setSelectedImage(idx);
        setIsOpenGallery(true);
    };

    return (
        <>
            <motion.div className="mt-6 flex flex-wrap md:grid grid-cols-4 grid-rows-2 gap-3">
                <div
                    className="row-span-2 col-span-2 cursor-pointer group"
                    onClick={() => handleClick(0)}
                >
                    <motion.img
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.8 }}
                        layoutId={`mainImage#${id}`}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        src={`${picArr[0]}`}
                        alt="Image 1"
                        className="h-full w-full object-cover group-hover:scale-105"
                    />
                </div>
                <div
                    className="row-start-1 col-start-3 cursor-pointer"
                    onClick={() => handleClick(1)}
                >
                    <motion.img
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.8 }}
                        src={`${picArr[1]}`}
                        alt="Image 2"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div
                    className="row-start-1 col-start-4 cursor-pointer"
                    onClick={() => handleClick(2)}
                >
                    <motion.img
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.8 }}
                        src={`${picArr[2]}`}
                        alt="Image 3"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div
                    className="row-start-2 col-start-3 cursor-pointer"
                    onClick={() => handleClick(3)}
                >
                    <motion.img
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.8 }}
                        src={`${picArr[3]}`}
                        alt="Image 4"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div
                    className="row-start-2 col-start-4 cursor-pointer relative"
                    onClick={() => handleClick(4)}
                >
                    {picArr.length > 5 && (
                        <div className="absolute inset-0 bg-overlay flex items-center justify-center">
                            <p className="text-white text-lg">
                                {picArr.length - 5} more photos available
                            </p>
                        </div>
                    )}
                    <motion.img
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.8 }}
                        src={`${picArr[4]}`}
                        alt="Image 5"
                        className="h-full w-full object-cover"
                    />
                </div>
            </motion.div>
            {isOpenGallery && (
                <Lightbox
                    mainSrc={picArr[selectedImage]}
                    nextSrc={picArr[(selectedImage + 1) % picArr.length]}
                    prevSrc={
                        picArr[
                            (selectedImage + picArr.length - 1) % picArr.length
                        ]
                    }
                    onCloseRequest={() => setIsOpenGallery(false)}
                    onMovePrevRequest={() =>
                        setSelectedImage(
                            (selectedImage + picArr.length - 1) % picArr.length
                        )
                    }
                    onMoveNextRequest={() =>
                        setSelectedImage((selectedImage + 1) % picArr.length)
                    }
                />
            )}
        </>
    );
};
export default ListingImages;
