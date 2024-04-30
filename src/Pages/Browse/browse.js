import "./browse.css"
import { Featured ,Top} from "../../sections/index";

const Browse = () => {
  return (
    <>
    <div className="d-flex gap-4 flex-wrap">
      <Featured/>
      <Top/>
      </div>
    </>
  )
}

export default Browse
