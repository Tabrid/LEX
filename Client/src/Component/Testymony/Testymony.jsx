import Loading from "../Loading/Loading";

const Testymony = () => {
    const testymony = [
        {
            id: 1,
            name: 'Akash Saha',
            message: 'The service provided was excellent. I highly recommend it.',
            image: "https://i.ibb.co/6F9DLGK/img-4.jpg",
        },
        {
            id: 2,
            name: 'Rakesh Saha',
            message: 'I am very satisfied with the results. Thank you!',
            image: "https://i.ibb.co/BKRKgnb/photo-2023-09-17-13-31-15.jpg",
        },
        {
            id: 3,
            name: 'Dipro Paul',
            message: 'Great service! Keep up the good work.',
            image: "https://i.ibb.co/sgdrY3K/FB-IMG-1701979421983.jpg",
        },
        {
            id: 4,
            name: 'Supto Dip',
            message: 'Im impressed with the professionalism. Thank you!',
            image: "https://i.ibb.co/1s4DNd6/photo-2023-11-09-21-14-20.jpg",
        },
    ];
<Loading/>
    return (
        <div className="flex flex-col justify-center items-center my-20 sm:hidden">
            <div>
                <h1 className="text-4xl font-bold text-center mt-5">Feedback</h1>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-14 md:gap-6 mt-10 ">
                {testymony.map((testy) => (
                    <div
                        key={testy.id}
                        className="flex flex-col gap-5 h-72 w-64 items-center p-8 rounded-[22px] bg-[#212222]"
                        style={{ backgroundImage: 'url(https://i.ibb.co/bFXh66d/7.png)' }}>
                        <img src={testy.image} className="w-[75px] h-[75px] rounded-full" alt={testy.name} />
                        <div className="text-center font-['Montserrat'] font-bold tracking-[2] leading-[19.2px]  text-white mb-0">
                            {testy.name}
                        </div>
                        <div className="text-center  leading-[25.6px] text-white">
                            {testy.message}
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    );
};

export default Testymony;
