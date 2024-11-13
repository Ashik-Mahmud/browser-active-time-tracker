import "../global.css";
import View from "./View";

export const Popup = () => {
  return (
    <div className="p-5 flex items-center flex-col rounded ">
      <div className="">
        <video
          autoPlay
          loop
          muted
          src="https://cdn-icons-mp4.flaticon.com/512/15576/15576140.mp4"
          width={120}
        />
      </div>
      <h2 className="text-2xl text-center font-medium mb-4">
        Track Browser Active Time
      </h2>
      <View />
    </div>
  );
};
