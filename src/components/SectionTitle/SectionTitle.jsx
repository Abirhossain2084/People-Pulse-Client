
const SectionTitle = ({heading,subheading}) => {
    return (
        <div className="grid justify-center my-16 text-center">
            <p className="text-[#D99904]">{subheading}</p>
            <hr />
            <h1 className="my-4 text-gray-500 font-semibold text-3xl">{heading}</h1>
            <hr />
        </div>
    );
};

export default SectionTitle;

