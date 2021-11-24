import "./About.css"
import ReactPlayer from "react-player";
function About() {
    return (
        <div className="video">
            <ReactPlayer url="https://www.youtube.com/watch?v=Jov73-OBUDk&t=21s"
            // https://www.youtube.com/watch?v=Jov73-OBUDk&t=21s
            playing={true}/>

        </div>
    )
}

export default About
