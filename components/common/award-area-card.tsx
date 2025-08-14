interface Props {
    data: {
        title: string;
        info: string;
    };
}

const AwardAreaCard = ({ data }: Props) => {
    return (
        <>
            <div className="quanto-awards-box">
                <h6 className="awards-title">{data.title}</h6>
                <span className="awards-info">{data.info}</span>
            </div>
        </>
    );
};

export default AwardAreaCard;
