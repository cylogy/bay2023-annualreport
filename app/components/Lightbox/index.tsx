'use client'

import React, { useEffect } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Video from 'yet-another-react-lightbox/plugins/video';
import 'yet-another-react-lightbox/styles.css';

import { GenericSlide } from 'yet-another-react-lightbox';

declare module 'yet-another-react-lightbox' {
  export interface YoutubeSlide extends GenericSlide {
    src: string;
    title: string;
    width: number;
    height: number;
  }

  interface SlideTypes {
    youtube: YoutubeSlide;
  }
}

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
};

const LightboxComponent = ({ open, setOpen }: Props) => {
  useEffect(() => {
    const handleBackgroundClick = (event: MouseEvent): void => {
      const target = event.target as HTMLElement;
      if (target.classList.contains('yarl__slide')) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('click', handleBackgroundClick);
    } else {
      document.removeEventListener('click', handleBackgroundClick);
    }

    return () => {
      document.removeEventListener('click', handleBackgroundClick);
    };
  }, []);

  return (
    <Lightbox
      plugins={[Video]}
      open={open}
      styles={{ container: { backgroundColor: "rgba(0, 0, 0, .4)" } }}
      close={() => setOpen(false)}
      slides={[
        {
          type: 'youtube' as const,
          src: 'https://www.youtube.com/embed/QpjN7IhEbXo?autoplay=1&mute=1',
          title: "Message from the Air District's Executive Officer",
          width: 905,
          height: 543,
        },
      ]}
      render={{
        slide: ({ slide, rect }) =>
          slide.type === 'youtube' ? (
            <iframe
              width={Math.min(
                slide.width,
                rect.width,
                (slide.width * rect.height) / slide.height,
              )}
              height={Math.min(
                slide.height,
                rect.height,
                (slide.height * rect.width) / slide.width,
              )}
              src={slide.src}
              title={slide.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : undefined,
      }}
    />
  );
};

export default LightboxComponent;
