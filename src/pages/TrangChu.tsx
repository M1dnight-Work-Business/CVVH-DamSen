import { useState } from 'react';

function TrangChu() {
    const imageList = [
        "src/assets/TrangChu.png",
        "src/assets/thanh-vien.png",
        "src/assets/than-tai.png",
    ];
    
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    const changeImage = (index) => {
        setCurrentImageIndex(index);
    };
    
    const prevImage = () => {
        if (currentImageIndex === 0) {
            setCurrentImageIndex(imageList.length - 1);
        } else {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    };
    
    const nextImage = () => {
        if (currentImageIndex === imageList.length - 1) {
            setCurrentImageIndex(0);
        } else {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    };

    return (
        <section>
            <div className="bg-[#ECF3E0] flex h-screen relative justify-center items-center">
                <div className="absolute pt-[60px] top-0">
                    <img src="src/assets/DamSen.svg" alt=""/>
                </div>
                <div className="p-6 h-full flex justify-center items-center">
                    <img className="h-full object-cover" src={imageList[currentImageIndex]} alt=""/>
                    
                    <button
                        className="absolute top-[50%] left-0 transform -translate-y-1/2 bg-transparent z-10"
                        onClick={prevImage}>
                        <img src="src/assets/LeftArrow.svg" alt="Left" className="w-10 h-10 mx-10" />
                    </button>
                    
                    <button
                        className="absolute top-[50%] right-0 transform -translate-y-1/2 bg-transparent z-10"
                        onClick={nextImage}>
                        <img src="src/assets/RightArrow.svg" alt="Right" className="w-10 h-10 mx-10" />
                    </button>
                    
                    <button
                        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-[#259E58] 
                                   text-white my-[91px] w-[180px] h-[45px] text-center text-[16px] 
                                   leading-[31.37px] uppercase fontNunito-bold rounded-lg">
                        Khám phá ngay
                    </button>
                </div>
            </div>
        </section>
    );
}

export default TrangChu;
