import "./top.css"
import { SectionWarapper, SectionHeader } from "../../components/index";

const top = () => {
  return (
    <div>
      <div className=" overflow-hidden">
      <SectionWarapper  >
        <SectionHeader text="Top Downloaded" />
      </SectionWarapper>
    </div>
    </div>
  )
}

export default top
