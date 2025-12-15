"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface ScheduleCallProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  duration?: "30min" | "60min";
  userDetails?: {
    name?: string;
    email?: string;
    phone?: string;
    notes?: string;
  };
}

export default function ScheduleCall({
  isOpen,
  setIsOpen,
  duration = "30min",
}: ScheduleCallProps) {
  const namespace = duration;
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);



  // Build Cal link
  const calLink = `meet-pritam/${duration}`;
  useEffect(() => {
    if (!isOpen) return;

    (async function () {
      const cal = await getCalApi({ namespace });

      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });

      cal("on", {
        action: "bookingSuccessful",
        callback: (e) => {
          console.log("Booking successful:", e.detail);
          toast.success("Your call has been scheduled successfully!");
          setIsOpen(false);
        },
      });

      cal("on", {
        action: "linkReady",
        callback: (e) => {
          console.log("Cal.com embed is ready:", e.detail);
        },
      });

      cal("on", {
        action: "bookingCancelled",
        callback: (e) => {
          console.log("Booking cancelled:", e.detail);
          toast.warning("Your booking has been cancelled.");
          setIsOpen(false);
        },
      });

    })();
  }, [isOpen, namespace, setIsOpen]);

  const calContent = (
    <Cal
      namespace={namespace}
      hidden={!isOpen}
      calLink={calLink}
      style={{
        width: "100%",
        height: "100%",
      }}
      config={{
        layout: "month_view",
      }}
    />
  );

  const headerContent = (
    <div className="text-lg text-black font-semibold">
      Schedule a {duration === "60min" ? "1 Hour" : "30 Min"} Call
    </div>
  );



  // Render Sheet for mobile, Dialog for desktop
  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent 
          side="bottom" 
          className="h-[80dvh] p-0 rounded-t-lg bg-white text-black"
        >
          <SheetHeader className="px-4 py-3 border-b bg-white">
            <SheetTitle className="text-left">
              {headerContent}
            </SheetTitle>
          </SheetHeader>
          <div className="flex-1 p-4 pt-0 overflow-auto h-full">
            {calContent}
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  // Desktop version with Dialog
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-2xl w-[95%] md:w-[90%] h-[90vh] p-0 gap-0 rounded-lg shadow-xl bg-white text-black">
        <DialogHeader className="flex justify-between items-center text-black sm:py-4 py-2 border-b">
          <DialogTitle>
            {headerContent}
          </DialogTitle>
        </DialogHeader>
        <div className="flex-1 p-4 pt-0 overflow-auto">
          {calContent}
        </div>
      </DialogContent>
    </Dialog>
  );
}