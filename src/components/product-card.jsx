

function ProductCard({type, icon, title, description}) {
    return (
        <div className="w-full aspect-square bg-zinc-800 p-4 rounded-3xl text-left flex flex-col justify-between border border-zinc-700 drop-shadow-md transition ease-out delay-50 hover:drop-shadow-xl hover:scale-105">
            <img src={icon} alt="#"  className="w-16"/>
            <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-zinc-100 ">{title}</h3>
                <p className="text-lg font-normal text-zinc-500">{description}</p>
            </div>
        </div>
    );

}

export default ProductCard;