import bgimage from '../../assets/home/chef-service.jpg';

const About = () => {
    return (
        <div className="h-96 my-20 " style={{ backgroundImage: `url(${'https://i.ibb.co/nQ3ZT4S/alex-kotliarskyi-QBp-ZGq-EMs-Kg-unsplash.jpg'})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="hero-content text-center rounded-lg text-white  glass bg-transparent relative top-1/4 mx-20 h-1/2  ">
                <div className="max-w-md">
                    <h1 className="text-5xl text-slate-100 font-bold">People Pulse</h1>
                    <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
         
                </div>
            </div>
        </div>
    );
};

export default About;
