
import Project1 from "../../videos/CouchPreviewLong.mp4"
import ElectricCouch from "../../videos/CouchPreviewShort.mp4"
import PersonalPortfolio from "../../videos/PersonalPortfolio.mp4"
import PoseEstimation from "../../videos/PoseEstimation.mov"
import RFID_Hacking from "../../videos/RFID_Hacking.mp4"
import EmailMP3 from "../../videos/EmailMP3.mov"

const ProjectData = [

    {
        vidsrc: ElectricCouch,
        title: "Electric Couch Vehicle",
        text: "3-Seater Electric driving couch built from scratch. 5 Miles per charge, 15 MPH top speed, controlled by a Bluetooth PS4 remote. Programmed in C++",
        view: "/ElectricCouch"

    },

    {
        vidsrc: RFID_Hacking,
        title: "HackUMass Hacking RFID",
        text: "Grand Prize Hack; Demonstrating how a common RFID protocol, used in ~50% of RFID readers, can be broken and give malicous attackers power through remote access & DoS attacks",
        view: "Link to a video"

    },

    {
        vidsrc: EmailMP3,
        title: "Automated MP3 Email Summarizer",
        text: "Python Script written to summarize emails into an .MP3 file for morning Email debriefs; Utilizes ChatGPT, Gmail API and Twilio",
        view: "/ElectricCouch"

    }, 


    {
        vidsrc: PersonalPortfolio,
        title: "Personal Portfolio Website",
        text: "Website built for displaying my personal projects. Build in ReactJS with Javascript and CSS",
        view: "Link to a video"

    },

    {
        
        vidsrc: PoseEstimation,
        title: "Pose Estimation on NVIDIA Jetson",
        text: "Beacon network for localizing a deaf dog. Updated locations are displayed on a dynamic event-based server",
        view: "Link to a video"
    },


    {
        vidsrc: Project1,
        title: "BlockChain Camera",
        text: "Beacon network for localizing a deaf dog. Updated locations are displayed on a dynamic event-based server",
        view: "Link to a video"

    }, 
];

export default ProjectData

