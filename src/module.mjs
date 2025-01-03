import { CourseClass } from "./script.mjs";

const extraClass = new CourseClass({
  name: "Extra Class",
  duration: "1h",
  videoID: "8787878787",
});

setTimeout(() => {
  extraClass.playVideo();
}, 3000);

setTimeout(() => {
  extraClass.pauseVideo();
}, 6000);
