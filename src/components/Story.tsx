import React from 'react';

export const Story = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Our Story</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="text-gray-300">
              Coastal State Roleplay is a premier roleplaying community utilizing the FiveM
              platform. Our community as a whole was founded nearly 5 years ago during the
              Grand Theft Auto V era. We are a community with a strict foundation on realistic,
              serious, and dedicated roleplay.
            </p>
            <p className="text-gray-300">
              Coastal State Roleplay brings the best of the best from a completely custom vehicle
              fleet, uniforms to include custom belts, sirens, a near 1:1 replica of a real life MDC
              system, and proper lingo and policies. All crafted by our in-house development team.
            </p>
            <p className="text-yellow-400 font-semibold">
              Simply put, there is no other community that correctly depicts Southern California like we do.
            </p>
          </div>
          <div className="relative aspect-video">
            <iframe
              className="absolute inset-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/your-video-id"
              title="Community Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};