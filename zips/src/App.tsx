import { useState, useEffect } from 'react';
import { NavPage, ProjectItem, VideoShowcase } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { ContactModal } from './components/ContactModal';
import { CaseStudyDrawer } from './components/CaseStudyDrawer';
import { VideoPlayerModal } from './components/VideoPlayerModal';
import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { CreativePage } from './pages/CreativePage';
import { AboutPage } from './pages/AboutPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavPage>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<VideoShowcase | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Auto-dismiss toast
  useEffect(() => {
    if (!toastMessage) return;
    const timer = setTimeout(() => {
      setToastMessage(null);
    }, 3500);
    return () => clearTimeout(timer);
  }, [toastMessage]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  const handleNavigate = (page: NavPage) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenCaseStudy = (project: ProjectItem) => {
    setSelectedProject(project);
  };

  const handleCloseCaseStudy = () => {
    setSelectedProject(null);
  };

  const handleOpenVideo = (video: VideoShowcase) => {
    setSelectedVideo(video);
  };

  const handleCloseVideo = () => {
    setSelectedVideo(null);
  };

  const handleOpenContact = () => {
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#131313] text-[#e5e2e1] font-body selection:bg-[#c4c0ff]/30 selection:text-white flex flex-col">
      {/* Top Navbar & Mobile Bottom Dock */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenContact={handleOpenContact}
      />

      {/* Main View Area */}
      <main className="flex-1 w-full pt-16 pb-20 lg:pb-0">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenCaseStudy={handleOpenCaseStudy}
            onOpenVideo={handleOpenVideo}
            onOpenContact={handleOpenContact}
            onShowToast={showToast}
          />
        )}

        {currentPage === 'work' && (
          <WorkPage
            onOpenCaseStudy={handleOpenCaseStudy}
            onOpenContact={handleOpenContact}
            onShowToast={showToast}
          />
        )}

        {currentPage === 'creative' && (
          <CreativePage
            onOpenVideo={handleOpenVideo}
            onOpenContact={handleOpenContact}
            onShowToast={showToast}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onOpenContact={handleOpenContact}
            onShowToast={showToast}
          />
        )}
      </main>

      {/* Universal Signature Monolith Footer */}
      <Footer onShowToast={showToast} />

      {/* Interactive Overlays & Modals */}
      <CaseStudyDrawer
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={handleCloseCaseStudy}
        onShowToast={showToast}
      />

      <VideoPlayerModal
        video={selectedVideo}
        isOpen={Boolean(selectedVideo)}
        onClose={handleCloseVideo}
        onShowToast={showToast}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={handleCloseContact}
        onShowToast={showToast}
      />

      {/* Real-time Toast Notifications */}
      <Toast message={toastMessage} />
    </div>
  );
}
