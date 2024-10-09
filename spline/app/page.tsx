import Image from "next/image";
import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <div className="max-w-full">
       <Spline
        scene="https://prod.spline.design/RSyIkaogdLgiu0Zk/scene.splinecode" 
      />
       <Spline
        scene="https://prod.spline.design/UGtT-OZa2UR7UYse/scene.splinecode" 
      />
      <Spline
        scene="https://prod.spline.design/NSVcmuqcIoSj1Ne1/scene.splinecode" 
      />
      <Spline
        scene="https://prod.spline.design/DJXvfRtkXHwstMHb/scene.splinecode" 
      />
    </div>

  );
}
