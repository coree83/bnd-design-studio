import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import { projects } from './data/projects';
import { ArrowRight, Instagram, Phone } from 'lucide-react';

export default function App() {
  return (
    <div className="bg-white text-black selection:bg-black selection:text-white">
      <Navbar />
      
      <main>
        <Hero />

        {/* Work Section */}
        <section id="work" className="px-6 py-24 md:px-12 md:py-40">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold uppercase tracking-tighter"
            >
              Selected <br /> Works
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="max-w-xs text-sm leading-relaxed opacity-60"
            >
              AI 기술과 디자인 감각의 결합으로 탄생한 BND DESIGN의 핵심 프로젝트 리스트입니다.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 md:gap-y-24">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-black text-white px-6 py-24 md:px-12 md:py-40">
          <div className="max-w-4xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.4em] mb-12 block opacity-50"
            >
              Our Philosophy
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight mb-16"
            >
              디자인은 시각적 아름다움을 넘어 브랜드의 본질을 <span className="italic font-serif">공명(Resonate)</span>하게 만드는 일입니다. BND DESIGN은 AI를 도구로 시대를 앞서가는 가치를 설계합니다.
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-white/10">
              <div>
                <h4 className="text-xs uppercase tracking-widest mb-4 opacity-50">Strategy</h4>
                <p className="text-sm leading-relaxed">데이터와 AI 분석을 기반으로 브랜드의 핵심 에센스를 정의합니다.</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest mb-4 opacity-50">Design</h4>
                <p className="text-sm leading-relaxed">시간이 흘러도 변치 않는 미니멀하고 파워풀한 비주얼 시스템을 구축합니다.</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest mb-4 opacity-50">Experience</h4>
                <p className="text-sm leading-relaxed">사용자의 오감을 자극하는 원활한 디지털 및 오프라인 경험을 제공합니다.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="px-6 py-24 md:px-12 md:py-40 flex flex-col items-center text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-bold uppercase tracking-tighter mb-12"
          >
            Let's Create <br /> Together
          </motion.h2>
          
          <div className="space-y-6">
            {/* ✉️ 이메일: 클릭 시 메일 앱 실행 & 제목 자동 입력 */}
            <motion.a 
              href="mailto:bnddesign@bnddesign.co.kr?subject=[BND DESIGN] 프로젝트 문의드립니다."
              whileHover={{ scale: 1.05 }}
              className="group flex items-center justify-center space-x-4 text-xl md:text-3xl font-medium border-b-2 border-black pb-2"
            >
              <span>bnddesign@bnddesign.co.kr</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </motion.a>

            {/* 📞 전화번호: 모바일에서 클릭 시 바로 통화 화면으로 연결 */}
            <motion.a 
              href="tel:01087572316"
              whileHover={{ opacity: 0.6 }}
              className="flex items-center justify-center space-x-2 text-lg md:text-xl opacity-80"
            >
              <Phone className="w-4 h-4" />
              <span>+82-10-8757-2316</span>
            </motion.a>
          </div>

          <div className="mt-24 flex space-x-12">
            <a 
              href="https://www.instagram.com/bnd.designgram" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 group"
            >
              <Instagram className="w-6 h-6 opacity-40 group-hover:opacity-100 transition-opacity" />
              <span className="text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">bnd.designgram</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="px-6 py-12 md:px-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] font-medium opacity-40">
        <p>© 2026 BND DESIGN STUDIO. All Rights Reserved.</p>
        <div className="flex space-x-8">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
        <p>Built with Precision & AI</p>
      </footer>
    </div>
  );
}