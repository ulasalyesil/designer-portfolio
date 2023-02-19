// component
import Downloadcard from "./downloads-card ";

// images
import abstract from "../assets/abstract.png"
import portugal from "../assets/portugal.png"
import DownloadCard from "./downloads-card ";



function Downloads() {
    return (
        <div className="flex flex-col gap-2">
            <h3 className="text-lg text-zinc-500 font-semibold text-left">Downloads</h3>
            <div id="row" className="flex gap-4">
            <Downloadcard image={abstract} title="Wallpapers" description="Abstract vol. 1"/>
            <DownloadCard image={portugal} title="Wallpapers" description="Portugal vol. 1"/>
            </div>
        </div>
    );
}

export default Downloads;