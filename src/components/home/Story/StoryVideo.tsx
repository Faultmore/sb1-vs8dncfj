import React from 'react';

interface StoryVideoProps {
  videoId: string;
}

export const StoryVideo: React.FC<StoryVideoProps> = ({ videoId }) => {
  return (
    <div className="relative aspect-video">
      <iframe
        className="absolute inset-0 w-full h-full rounded-lg"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="Community Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};