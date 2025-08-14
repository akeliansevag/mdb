import Image from "next/image";

const ImageArea = () => {
    return (
        <>
            <div className="quanto-image-area style-2 overflow-hidden">
                <div className="container-fluid px-0">
                    <div className="row">
                        <div className="col-12">
                            <div className="quanto-hero__thumb text-end">
                                <Image
                                    height={0}
                                    width={0}
                                    sizes="100vw"
                                    src="/images/service/service-2-fig.png"
                                    alt="Image Area"
                                    className="d-block w-100"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ImageArea;
