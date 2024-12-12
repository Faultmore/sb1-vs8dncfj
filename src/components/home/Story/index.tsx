import React from 'react';
import { Container } from '../../ui/Container';
import { StoryContent } from './StoryContent';
import { StoryVideo } from './StoryVideo';

export const Story = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <Container>
        <h2 className="text-3xl font-bold mb-8">Our Story</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <StoryContent />
          <StoryVideo videoId="your-video-id" />
        </div>
      </Container>
    </section>
  );
};