
const SectionTitle = ({heading,subheading}) => {
    return (
        <div className="grid justify-center my-24 text-center">
            <p className="text-[#A9B388]">{subheading}</p>
            <hr />
            <h1 className="my-4 text-[#E1C78F] font-semibold text-3xl">{heading}</h1>
            <hr />
        </div>
    );
};

export default SectionTitle;

