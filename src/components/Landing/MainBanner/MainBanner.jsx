import { Video } from "../Video/Video";
import { VideoOverlay } from "../VideoOverlay/VideoOverlay";

export const MainBanner = () => {
  return <div className="main-banner relative" id="top">
    <Video />
    <VideoOverlay />
  </div>
}
