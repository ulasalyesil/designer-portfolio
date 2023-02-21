import { Link } from "react-router-dom";


function ProductCard({target, icon, title, description}) {
    return (
        <Link to={target} className="w-full aspect-square bg-zinc-800 p-4 rounded-3xl text-left flex flex-col justify-between border cursor-pointer border-zinc-700 drop-shadow-md transition ease-out delay-50 hover:drop-shadow-xl hover:scale-105">
            <img src={icon} alt="#"  className="w-64 rounded-lg sm:w-16"/>
            <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-zinc-100 ">{title}</h3>
                <p className="text-lg font-normal text-zinc-500 leading-none">{description}</p>
            </div>
        </Link>
    );

}

export default ProductCard;