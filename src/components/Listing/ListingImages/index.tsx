import { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app

interface ListingImagesProps {
    pictures: string;
}

const ListingImages: React.FC<ListingImagesProps> = ({ pictures }) => {
    const [isOpenGallery, setIsOpenGallery] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const picArr = pictures.split(",").map((img) => `${img}.jpg`);

    const handleClick = (idx: number) => {
        setSelectedImage(idx);
        setIsOpenGallery(true);
    };

    return (
        <>
            <div className="mt-6 flex flex-wrap md:grid grid-cols-4 grid-rows-2 gap-3">
                <div
                    className="row-span-2 col-span-2 cursor-pointer group"
                    onClick={() => handleClick(0)}
                >
                    <img
                        src={`${picArr[0]}`}
                        alt="Image 1"
                        className="h-full w-full object-cover group-hover:scale-105"
                    />
                </div>
                <div
                    className="row-start-1 col-start-3 cursor-pointer"
                    onClick={() => handleClick(1)}
                >
                    <img
                        src={`${picArr[1]}`}
                        alt="Image 2"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div
                    className="row-start-1 col-start-4 cursor-pointer"
                    onClick={() => handleClick(2)}
                >
                    <img
                        src={`${picArr[2]}`}
                        alt="Image 3"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div
                    className="row-start-2 col-start-3 cursor-pointer"
                    onClick={() => handleClick(3)}
                >
                    <img
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
                    <img
                        src={`${picArr[4]}`}
                        alt="Image 5"
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
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