import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2, VolumeX, Maximize, X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  videoUrl?: string;
}

const VideoModal = ({ isOpen, onClose, title, videoUrl }: VideoModalProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Demo video URL - in real app, this would come from props
  const demoVideoUrl = "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4";

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    const video = document.getElementById("course-video") as HTMLVideoElement;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    const video = document.getElementById("course-video") as HTMLVideoElement;
    if (video) {
      video.muted = !isMuted;
    }
  };

  const toggleFullscreen = () => {
    const video = document.getElementById("course-video") as HTMLVideoElement;
    if (video) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      }
    }
  };

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
        
        <div className="relative bg-black rounded-lg overflow-hidden mx-6 mb-6">
          {/* Video Element */}
          <video
            id="course-video"
            className="w-full h-64 md:h-96"
            poster="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src={videoUrl || demoVideoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Video Controls Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={togglePlay}
                  className="text-white hover:text-white hover:bg-white/20"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </Button>
                
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={toggleMute}
                  className="text-white hover:text-white hover:bg-white/20"
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </Button>
              </div>
              
              <Button
                size="sm"
                variant="ghost"
                onClick={toggleFullscreen}
                className="text-white hover:text-white hover:bg-white/20"
              >
                <Maximize className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          {/* Play Overlay for non-playing state */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <Button
                size="lg"
                onClick={togglePlay}
                className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/30"
              >
                <Play className="w-8 h-8 mr-2" />
                Play Preview
              </Button>
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