import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Play, X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  videoUrl?: string;
}

const VideoModal = ({ isOpen, onClose, title, videoUrl }: VideoModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="flex items-center justify-between">
            <span>{title} - Preview</span>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>
        
        <div className="relative bg-black rounded-lg overflow-hidden mx-6 mb-6 aspect-video">
          {/* YouTube Video Embed */}
          {videoUrl ? (
            <iframe
              src={videoUrl}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={title}
            />
          ) : (
            <div className="flex items-center justify-center h-full bg-muted">
              <div className="text-center">
                <Play className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Video preview not available</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Course Info */}
        <div className="px-6 pb-6">
          <div className="bg-muted/50 rounded-lg p-4">
            <h4 className="font-semibold mb-2">What you'll learn:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Comprehensive understanding of the subject</li>
              <li>• Hands-on practical exercises and projects</li>
              <li>• Industry best practices and real-world applications</li>
              <li>• Access to downloadable resources and materials</li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;