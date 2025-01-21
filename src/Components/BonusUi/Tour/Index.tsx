import { Steps } from "@/Data/BonusUi/Tour";
import TourComponents from "./TourComponents";
import { TourGuideClient } from "@sjmc11/tourguidejs";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

const Tour = () => {

  const tourRef = useRef<any | null>(null);
  const [isTourOpen, setIsTourOpen] = useState(false);

  useEffect(() => {
    try {
      tourRef.current = new TourGuideClient({ steps: Steps });
    } catch (error) {
      toast.error("Error initializing TourGuideClient:" + error);
    }

    return () => tourRef.current?.destroy?.();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsTourOpen(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isTourOpen) tourRef.current?.start?.();
  }, [isTourOpen]);

  return (
    <>
        <TourComponents />
    </>
  );
};

export default Tour;
