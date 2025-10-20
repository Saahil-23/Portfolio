import styled from 'styled-components';
import AnimatedHeading from '../common/AnimatedHeading';
// We no longer need to import ReactPlayer
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import GlassCard from '../common/GlassCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { videosData } from '../../data/videos.js';

// --- STYLED COMPONENTS (No changes here, they are already perfect) ---

const CarouselSection = styled.section`
  padding: 100px 0;
  background-color: #0c1f3a; 
`;

const CarouselContainer = styled.div`
  max-width: 1100px;
  margin: 50px auto 0;
  padding: 0 2rem;
`;

const SwiperWrapper = styled.div`
  position: relative;
  // ... all the Swiper styling remains the same
  .swiper-button-prev,
  .swiper-button-next { color: ${({ theme }) => theme.colors.primary}; background-color: rgba(10, 25, 47, 0.5); border-radius: 50%; width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; transition: all 0.3s ease; opacity: 0.7; &:after { font-size: 1.5rem; } &:hover { opacity: 1; transform: scale(1.1); background-color: rgba(10, 25, 47, 0.8); } }
  .swiper-pagination { position: static; margin-top: 2rem; }
  .swiper-pagination-bullet { background: ${({ theme }) => theme.colors.textDark}; width: 12px; height: 12px; opacity: 0.7; transition: all 0.3s ease; }
  .swiper-pagination-bullet-active { background: ${({ theme }) => theme.colors.primary}; transform: scale(1.2); box-shadow: 0 0 10px ${({ theme }) => theme.colors.primary}; }
`;

const VideoSlideCard = styled(GlassCard)`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  
  // Style the iframe directly
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0; // Remove default iframe border
  }
`;

const VideoInfo = styled.div`
  text-align: center;
  margin-top: 2rem;
  max-width: 90%;
  h3 { color: ${({ theme }) => theme.colors.textLight}; font-size: 1.5rem; margin-bottom: 0.5rem; }
  p { color: ${({ theme }) => theme.colors.textDark}; font-size: 1rem; line-height: 1.5; }
`;

// --- THE COMPONENT ---

const VideoCarousel = () => {
  return (
    <CarouselSection id="videos">
      <CarouselContainer>
        <AnimatedHeading number="04" title="Video Content" />
        <SwiperWrapper>
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
          >
            {videosData.map((video) => (
              <SwiperSlide key={video.id}>
                <VideoSlideCard>
                  <PlayerWrapper>
                    {/* --- THE FIX --- */}
                    {/* Replaced ReactPlayer with a native iframe */}
                    <iframe
                      src={video.embedUrl}
                      title={video.title} // Important for accessibility
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy" // Professional touch: lazy loads the video
                    ></iframe>
                  </PlayerWrapper>
                  <VideoInfo>
                    <h3>{video.title}</h3>
                    <p>{video.description}</p>
                  </VideoInfo>
                </VideoSlideCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperWrapper>
      </CarouselContainer>
    </CarouselSection>
  );
};

export default VideoCarousel;