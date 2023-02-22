import image from "../assets/project-icon-1.png"
import Footer from "../components/footer";
import Inspect from "inspx";
import { Link } from "react-router-dom";

function ProjectDetailPage() {
    return (

        <Inspect>
        <div id='main-wrapper' className='bg-zinc-900 w-screen h-full flex flex-col place-content-center'>
      <div id='content' className='flex flex-col p-4 pt-16 mb-16 m-auto gap-8 max-w-2xl sm:pt-32 pb-60'>
        <h1 className="text-2xl text-zinc-200 text-left">Project Name</h1>
        <div>
            <img src={image} className="rounded-2xl w-80" alt="project"/>
        </div>
          <Link to="/">
            <button className="bg-zinc-100 p-2 w-full rounded-full shadow-xl shadow-zinc-100/16 hover:shadow-2xl hover:shadow-zinc-100-30">Go back</button>
          </Link>
        </div>

        <Footer />
      </div>
      </Inspect>

    );
}

export default ProjectDetailPage;