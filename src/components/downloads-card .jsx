

function DownloadCard({bg_image, image, title, description}) {
    return (
        <div className="w-full aspect-square bg-zinc-800 rounded-3xl text-left relative flex-col justify-between overflow-hidden border border-zinc-800 drop-shadow-md transition ease-out delay-50 hover:drop-shadow-xl hover:scale-105">
            <div className="absolute w-full h-full z-50 bg-gradient-to-t from-black ...">
                <div className="h-full flex flex-col justify-end p-4">
                <h3 className="text-lg font-semibold text-zinc-100 ">{title}</h3>
                <p className="text-lg font-normal text-zinc-500 leading-none">{description}</p>
                </div>
            </div>
            <img src={image} alt="#"  className="w-full absolute z-20"/>
            
        </div>
    );

}

export default DownloadCard;