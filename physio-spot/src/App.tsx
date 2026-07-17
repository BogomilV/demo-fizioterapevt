import React, { useState } from 'react';
import { 
  Activity, 
  Phone, 
  MapPin, 
  CheckCircle, 
  Menu, 
  X, 
  Brain, 
  Star, 
  ShieldCheck, 
  Clock, 
  Heart, 
  ChevronRight,
  ArrowUpRight,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// ==========================================
// 1. NAVBAR COMPONENT
// ==========================================
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="navbar-container">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group" id="logo-link">
            <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center border border-teal-100 group-hover:scale-105 transition-transform">
              <Activity className="w-5.5 h-5.5 text-teal-600" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tight text-slate-900 group-hover:text-teal-600 transition-colors">
              Physio <span className="text-teal-600">Spot</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-slate-600 hover:text-teal-600 font-medium text-sm transition-colors">Начало</a>
            <a href="#about" className="text-slate-600 hover:text-teal-600 font-medium text-sm transition-colors">За мен</a>
            <a href="#services" className="text-slate-600 hover:text-teal-600 font-medium text-sm transition-colors">Услуги</a>
            <a href="#faq" className="text-slate-600 hover:text-teal-600 font-medium text-sm transition-colors">Въпроси</a>
            <a href="#contact" className="text-slate-600 hover:text-teal-600 font-medium text-sm transition-colors">Контакти</a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a 
              href="tel:+359879051823" 
              className="bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all flex items-center gap-2 group hover:translate-y-[-1px]"
              id="cta-nav-button"
            >
              <Phone className="w-4 h-4 transition-transform group-hover:rotate-12" />
              Запази час
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-600 hover:text-teal-600 hover:bg-slate-50 transition-colors"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-slate-100 bg-white"
            id="mobile-menu-panel"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              <a 
                href="#home" 
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-xl text-base font-medium text-slate-800 hover:bg-teal-50 hover:text-teal-700 transition-all"
              >
                Начало
              </a>
              <a 
                href="#about" 
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-xl text-base font-medium text-slate-800 hover:bg-teal-50 hover:text-teal-700 transition-all"
              >
                За мен
              </a>
              <a 
                href="#services" 
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-xl text-base font-medium text-slate-800 hover:bg-teal-50 hover:text-teal-700 transition-all"
              >
                Услуги
              </a>
              <a 
                href="#faq" 
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-xl text-base font-medium text-slate-800 hover:bg-teal-50 hover:text-teal-700 transition-all"
              >
                Чести Въпроси
              </a>
              <a 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-xl text-base font-medium text-slate-800 hover:bg-teal-50 hover:text-teal-700 transition-all"
              >
                Контакти
              </a>
              <div className="pt-4 px-4">
                <a 
                  href="tel:+359879051823" 
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-center py-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Запази час
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// ==========================================
// 2. HERO SECTION COMPONENT
// ==========================================
function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-white via-teal-50/20 to-slate-50/50 py-16 md:py-24 lg:py-32 border-b border-slate-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left: Copy & CTA */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left">
            {/* Social Proof Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50/80 border border-teal-100/50 text-teal-800 text-xs md:text-sm font-semibold tracking-wide shadow-xs">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>5.0 Отличен рейтинг (100+ отзива)</span>
            </div>

            {/* Headline & Subheadline */}
            <div className="space-y-4">
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-tight tracking-tight">
                Свобода на движението. <br />
                <span className="text-teal-600">Живот без болка.</span>
              </h1>
              <p className="text-slate-600 text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans font-normal">
                Специализирана физиотерапия и рехабилитация във Варна. Ние лекуваме първопричината, а не само симптомите.
              </p>
            </div>

            {/* CTA Elements */}
            <div className="flex flex-col sm:items-center lg:items-start space-y-4">
              <a 
                href="tel:+359879051823" 
                className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 text-white font-bold text-base md:text-lg px-8 py-4.5 rounded-2xl shadow-lg shadow-teal-600/20 hover:shadow-teal-600/30 transition-all duration-300 flex items-center justify-center gap-3 group transform hover:-translate-y-0.5"
                id="hero-cta-button"
              >
                ЗАПАЗЕТЕ ЧАС ЗА КОНСУЛТАЦИЯ
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              
              <div className="flex items-center justify-center gap-2 text-slate-500 text-sm font-medium">
                <div className="w-6 h-6 rounded-md bg-teal-50 flex items-center justify-center border border-teal-100/40">
                  <MapPin className="w-3.5 h-3.5 text-teal-600" />
                </div>
                <span>Студио Elevate, кв. Бриз, Варна</span>
              </div>
            </div>

            {/* Additional trust factors */}
            <div className="pt-4 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 border-t border-slate-100">
              <div className="text-center lg:text-left">
                <p className="font-display font-bold text-2xl text-slate-900">10+</p>
                <p className="text-slate-500 text-xs">Години Опит</p>
              </div>
              <div className="text-center lg:text-left border-x border-slate-100 px-4">
                <p className="font-display font-bold text-2xl text-slate-900">100%</p>
                <p className="text-slate-500 text-xs">Индивидуален план</p>
              </div>
              <div className="text-center lg:text-left pl-4">
                <p className="font-display font-bold text-2xl text-slate-900">5.0★</p>
                <p className="text-slate-500 text-xs">Оценка на Пациенти</p>
              </div>
            </div>
          </div>

          {/* Hero Right: Modern Vector Wellness Illustration Card */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="relative w-full max-w-md h-[420px] rounded-3xl bg-white border border-slate-100 p-8 shadow-xl flex flex-col justify-between overflow-hidden">
              {/* Absolutes/Glows */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-teal-50/50 rounded-full blur-3xl -z-10" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-stone-50 rounded-full blur-3xl -z-10" />

              {/* Graphical Top-Section */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-semibold bg-stone-50 text-slate-500 px-3 py-1 rounded-full border border-slate-100">Здравен Компакт</span>
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                    <span className="w-2 h-2 rounded-full bg-teal-200" />
                  </div>
                </div>

                {/* Healing Path SVG Graphic */}
                <div className="w-full h-44 bg-slate-50/60 rounded-2xl border border-slate-100/50 flex items-center justify-center p-4 relative overflow-hidden">
                  <svg viewBox="0 0 200 100" className="w-full h-full stroke-teal-600/20 stroke-[1.5] fill-none">
                    {/* Background Grid Pattern */}
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" strokeWidth="1" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                    
                    {/* Spine representation */}
                    <g className="stroke-teal-600 stroke-[2] opacity-80">
                      <path d="M100,15 L100,85" strokeDasharray="3,3" />
                      {[20, 30, 40, 50, 60, 70, 80].map((y, i) => (
                        <circle key={i} cx="100" cy={y} r="3" className="fill-teal-50 stroke-teal-600 stroke-2" />
                      ))}
                    </g>

                    {/* Kinetic waves representing healing */}
                    <path d="M40,50 Q70,20 100,50 T160,50" className="stroke-teal-600/40" />
                    <path d="M40,50 Q70,80 100,50 T160,50" className="stroke-teal-500/30" />
                    <path d="M60,50 Q100,10 140,50" className="stroke-teal-600 animate-pulse" strokeWidth="2.5" />
                  </svg>

                  {/* Highlight Floating Badge */}
                  <div className="absolute top-4 left-4 bg-teal-600/90 text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md shadow-xs">
                    АКТИВНА ТЕРАПИЯ
                  </div>
                </div>
              </div>

              {/* Graphic Mid-Section Status Cards */}
              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3 bg-teal-50/60 border border-teal-100/30 p-3.5 rounded-xl">
                  <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center text-white shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-teal-900 font-bold">100% Доказана Безопасност</p>
                    <p className="text-[10px] text-teal-700/80">Сертифицирани медицински похвати</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-stone-50 border border-stone-100 p-3.5 rounded-xl">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-white shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-slate-800 font-bold">Бързо Възстановяване</p>
                    <p className="text-[10px] text-slate-500">Първи резултати след броени сесии</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ==========================================
// 3. ABOUT THE EXPERT COMPONENT
// ==========================================
function About() {
  const [imageError, setImageError] = useState(false);
  const checkmarks = [
    "Неврологична рехабилитация",
    "Миофасциална терапия",
    "Функционално движение на стъпалата",
    "Зрение, проприоцепция и баланс"
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white border-b border-slate-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* About Left: Beautiful Graphic Portrait Box */}
          <div className="lg:col-span-5 relative flex justify-center w-full">
            <div className="relative w-full max-w-sm aspect-[4/5]" id="about-portrait-card">
              {/* Outer container with padding & shadow but NO overflow-hidden, so the badge can float gracefully outside the bounds! */}
              <div className="relative w-full h-full rounded-3xl bg-gradient-to-tr from-stone-50 via-teal-50/40 to-teal-50 border border-slate-100 p-4 shadow-xl group">
                {/* Inner image frame with overflow-hidden for secure image rounding and scale animations */}
                <div className="w-full h-full rounded-2xl bg-white border border-slate-100 shadow-inner flex flex-col justify-end items-center relative overflow-hidden" id="portrait-image-frame">
                  {/* Outer decorative grids */}
                  <div className="absolute inset-0 bg-[radial-gradient(#0d9488_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
                  
                  {!imageError ? (
                    <img
                      src="/assets/cvetislava_portrait.jpeg"
                      alt="Цветислава Панова - Рехабилитатор във Варна"
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover rounded-2xl relative z-10 transition-transform duration-500 group-hover:scale-102"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    /* Aesthetic fallback drawing mimicking a professional portrait */
                    <div className="w-full h-full flex flex-col justify-end items-center p-6 relative">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-tr from-teal-200/50 to-teal-50 rounded-full blur-2xl" />
                      
                      {/* Clean minimalist abstract avatar */}
                      <div className="w-36 h-36 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center shadow-md relative z-10">
                        <div className="w-28 h-28 rounded-full bg-gradient-to-b from-teal-500 to-teal-600 flex items-center justify-center shadow-inner overflow-hidden">
                          {/* Abstract female avatar symbol */}
                          <div className="w-12 h-12 rounded-full bg-teal-100/95 shadow-sm mb-1 mt-6" />
                          <div className="absolute bottom-6 w-20 h-10 rounded-t-full bg-teal-200/90" />
                        </div>
                      </div>

                      <div className="text-center mt-6 space-y-1.5 relative z-10 bg-white/90 backdrop-blur-xs p-4 rounded-xl border border-slate-100 shadow-xs w-full">
                        <p className="font-display font-bold text-lg text-slate-900">Цветислава Панова</p>
                        <p className="text-xs text-teal-600 font-semibold uppercase tracking-wider">Специалист Рехабилитатор</p>
                        <p className="text-[11px] text-slate-500">Медицински Колеж - Варна</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Experience Badge - perfectly positioned on top z-index, outside the overflow boundary, beautifully floating and not clipped! */}
              <div className="absolute -top-3.5 -right-3.5 md:-top-4 md:-right-4 bg-teal-600 text-white text-xs md:text-sm font-bold py-3 px-4 md:py-3.5 md:px-5 rounded-2xl shadow-xl shadow-teal-600/20 border border-teal-500 flex items-center gap-2 z-20 hover:scale-105 transition-transform duration-300" id="experience-badge">
                <Star className="w-4 h-4 text-amber-300 fill-amber-300 animate-pulse shrink-0" />
                <span className="font-semibold" id="experience-badge-text">10+ Години Опит</span>
              </div>
            </div>
          </div>

          {/* About Right: Copy details */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            <div className="space-y-3">
              <span className="text-teal-600 text-xs md:text-sm font-bold uppercase tracking-wider bg-teal-50 px-3.5 py-1.5 rounded-full inline-block border border-teal-100/50">
                Вашият Рехабилитатор
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 tracking-tight">
                Цветислава Панова
              </h2>
            </div>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-sans font-normal">
              Цвети е рехабилитатор по призвание с над 10 години опит. Завършила е Медицински Колеж - Варна и използва индивидуален, холистичен подход. Нейната цел са доволните и независими пациенти, които знаят как да се грижат за здравето си.
            </p>

            {/* Checkmark Bullets Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {checkmarks.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-slate-50/50 border border-slate-100/80 rounded-xl hover:border-teal-100 hover:bg-teal-50/20 transition-all group">
                  <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center border border-teal-100 group-hover:bg-teal-600 group-hover:border-teal-600 transition-all shrink-0">
                    <CheckCircle className="w-4 h-4 text-teal-600 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-sm md:text-base font-semibold text-slate-800 tracking-tight">{item}</span>
                </div>
              ))}
            </div>

            {/* Quote block */}
            <div className="border-l-4 border-teal-600 pl-4 py-1 bg-stone-50/50 rounded-r-xl">
              <p className="text-sm italic text-slate-500 leading-relaxed">
                "Вярвам, че истинското изцеление започва от разбирането на тялото и връзката му с нервната система. Моята мисия е да ви върна свободата на движение."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ==========================================
// 4. SERVICES / EXPERTISE SECTION
// ==========================================
interface ServiceCardProps {
  key?: React.Key;
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

function ServiceCard({ icon, title, description, index }: ServiceCardProps) {
  return (
    <div 
      className="bg-white border border-slate-100/80 rounded-2xl p-8 shadow-xs hover:shadow-xl hover:border-teal-100/80 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group flex flex-col justify-between"
      id={`service-card-${index}`}
    >
      {/* Decorative hover gradient glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50/20 rounded-full blur-2xl group-hover:bg-teal-500/10 transition-colors" />
      
      <div>
        {/* Animated icon container */}
        <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100/50 flex items-center justify-center text-teal-600 group-hover:scale-110 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 shadow-xs mb-6 shrink-0">
          {icon}
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-xl text-slate-900 group-hover:text-teal-700 transition-colors tracking-tight">
          {title}
        </h3>

        {/* Text */}
        <p className="text-slate-500 text-sm md:text-base leading-relaxed mt-3 group-hover:text-slate-600 transition-colors font-sans">
          {description}
        </p>
      </div>

      {/* Footer link style inside card */}
      <div className="pt-6 flex items-center text-teal-600 text-xs font-bold uppercase tracking-wider gap-1 group/link mt-4">
        <span>Научете повече</span>
        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
      </div>
    </div>
  );
}

function Services() {
  const list = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Физиотерапия и Масаж",
      description: "Внимателно отношение и справяне с хронични болки и скованост."
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Кинезиология",
      description: "Дисфункции на позата, походката и движението. Интегрирана кинетична неврология."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Холистичен Подход",
      description: "Откриване на корена на проблема чрез мозъчно базирано обучение."
    }
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50/50 border-b border-slate-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-teal-600 text-xs md:text-sm font-bold uppercase tracking-wider bg-teal-50 px-3.5 py-1.5 rounded-full inline-block border border-teal-100/50">
            Специализирани Услуги
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900 tracking-tight">
            Специализирани Услуги
          </h2>
          <p className="text-slate-500 text-base md:text-lg leading-relaxed font-sans max-w-xl mx-auto">
            Индивидуални терапевтични планове, съобразени с вашите нужди и състояние за оптимални и трайни резултати.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {list.map((item, index) => (
            <ServiceCard 
              key={index}
              index={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

// ==========================================
// 4.5. FAQ SECTION COMPONENT
// ==========================================
interface FAQItemProps {
  key?: React.Key;
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="border border-slate-100 bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:border-teal-100 shadow-xs hover:shadow-md">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center px-6 py-5 text-left font-display font-bold text-slate-900 hover:text-teal-600 transition-colors gap-4"
      >
        <span className="text-base md:text-lg leading-snug">{question}</span>
        <div className={`w-8 h-8 rounded-full bg-slate-50 border border-slate-100/80 flex items-center justify-center text-slate-500 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-teal-50 text-teal-600 border-teal-100' : ''}`}>
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-6 pt-1 text-slate-500 text-sm md:text-base leading-relaxed border-t border-slate-50/50 font-sans">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Как да се подготвя за първото си посещение?",
      answer: "За първото посещение е препоръчително да носите удобни спортни дрехи, които не ограничават движението. Ако имате предишни медицински изследвания, рентгенови снимки или ЯМР, моля, носете ги със себе си за преглед."
    },
    {
      question: "Колко време продължава една терапевтична сесия?",
      answer: "Стандартната сесия продължава около 50 до 60 минути, в зависимост от конкретната терапия и индивидуалните нужди на пациента."
    },
    {
      question: "Каква е политиката за отмяна на записан час?",
      answer: "Молим да ни уведомите поне 24 часа по-рано, ако се налага да отмените или промените часа си. По този начин давате възможност на друг пациент, нуждаещ се от неотложна грижа, да се възползва от освободения час."
    },
    {
      question: "Колко процедури ще са ми необходими?",
      answer: "Това зависи изцяло от вашето състояние и първоначалната ни диагностика. Някои пациенти усещат облекчение още след първата процедура, докато при по-хронични състояния е необходим курс от 5 до 10 сесии."
    },
    {
      question: "Трябва ли ми направление от личен лекар?",
      answer: "Не, не се изисква направление от лекар. Нашите услуги се извършвают изцяло на свободен прием чрез предварително записване на час за консултация и лечение."
    }
  ];

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white border-b border-slate-100/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-teal-600 text-xs md:text-sm font-bold uppercase tracking-wider bg-teal-50 px-3.5 py-1.5 rounded-full inline-block border border-teal-100/50">
            Въпроси и Отговори
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900 tracking-tight">
            Често Задавани Въпроси
          </h2>
          <p className="text-slate-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed font-sans">
            Всичко, което трябва да знаете за подготовката преди процедура, правилата на студиото и лечебния процес.
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={activeIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

// ==========================================
// 5. CONTACT / FOOTER COMPONENT
// ==========================================
function InquiryForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [reason, setReason] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-white border border-slate-100/80 rounded-3xl p-6 md:p-10 shadow-xl relative overflow-hidden" id="quick-inquiry-card">
      {/* Decorative background glow */}
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-teal-50/40 rounded-full blur-3xl -z-10" />

      {submitted ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-10 space-y-4"
        >
          <div className="w-16 h-16 bg-teal-50 border border-teal-100 rounded-full flex items-center justify-center mx-auto text-teal-600 mb-4">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h3 className="font-display font-bold text-2xl text-slate-900">Благодарим Ви!</h3>
          <p className="text-slate-600 text-sm md:text-base max-w-md mx-auto">
            Вашето запитване беше изпратено успешно. Цветислава Панова ще се свърже с Вас възможно най-бързо на посочения телефон.
          </p>
          <button 
            onClick={() => {
              setName('');
              setPhone('');
              setReason('');
              setSubmitted(false);
            }}
            className="mt-6 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors inline-flex items-center gap-1.5"
          >
            Изпратете друго запитване
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div className="space-y-2">
            <h3 className="font-display font-bold text-2xl text-slate-900">
              Бързо Запитване
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Оставете вашите контакти и ние ще се свържем с вас за уточняване на удобен час.
            </p>
          </div>

          <div className="space-y-5">
            {/* Name Input */}
            <div className="space-y-2">
              <label htmlFor="inquiry-name" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Вашето Име *
              </label>
              <input
                id="inquiry-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Иван Иванов"
                className="w-full px-5 py-3.5 rounded-xl border border-slate-100 bg-slate-50/50 text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-teal-500 focus:bg-white transition-all text-sm font-medium"
              />
            </div>

            {/* Phone Input */}
            <div className="space-y-2">
              <label htmlFor="inquiry-phone" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Телефонен Номер *
              </label>
              <input
                id="inquiry-phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="0888 123 456"
                className="w-full px-5 py-3.5 rounded-xl border border-slate-100 bg-slate-50/50 text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-teal-500 focus:bg-white transition-all text-sm font-medium"
              />
            </div>

            {/* Reason Select */}
            <div className="space-y-2">
              <label htmlFor="inquiry-reason" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Причина за посещение / Желана услуга
              </label>
              <div className="relative">
                <select
                  id="inquiry-reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-full px-5 py-3.5 rounded-xl border border-slate-100 bg-slate-50/50 text-slate-800 focus:outline-hidden focus:border-teal-500 focus:bg-white transition-all text-sm font-medium appearance-none"
                >
                  <option value="">Изберете услуга (по избор)</option>
                  <option value="Физиотерапия и Масаж">Физиотерапия и Масаж</option>
                  <option value="Кинезиология">Кинезиология</option>
                  <option value="Холистичен Подход">Холистичен Подход</option>
                  <option value="Друго състояние / Консултация">Друго състояние / Консултация</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-base py-4 rounded-xl shadow-lg shadow-teal-600/10 hover:shadow-teal-600/20 transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            Изпрати Запитване
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </form>
      )}
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-stone-50 border-b border-slate-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Contact Left Column: Intro and Details */}
          <div className="lg:col-span-5 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <span className="text-teal-600 text-xs md:text-sm font-bold uppercase tracking-wider bg-teal-50 px-3.5 py-1.5 rounded-full inline-block border border-teal-100/50">
                Контакти
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 tracking-tight">
                Готови ли сте за осезаемо подобрение?
              </h2>
              <p className="text-slate-500 text-base leading-relaxed max-w-md mx-auto lg:mx-0">
                Свържете се с нас днес, за да направим първата стъпка към вашето дълготрайно възстановяване.
              </p>
            </div>

            {/* Info Cards Column */}
            <div className="space-y-6 max-w-md mx-auto lg:mx-0">
              {/* Phone & CTA Group */}
              <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-xs hover:shadow-md transition-all space-y-4">
                <a 
                  href="tel:+359879051823" 
                  className="flex items-center gap-4 text-left group block"
                  id="contact-phone-card"
                >
                  <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100/50 flex items-center justify-center text-teal-600 shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Телефон за връзка</p>
                    <p className="text-lg md:text-xl font-bold text-slate-800 mt-0.5 group-hover:text-teal-600 transition-colors">
                      087 905 1823
                    </p>
                  </div>
                </a>

                <a 
                  href="tel:+359879051823" 
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-base md:text-lg px-8 py-3.5 rounded-2xl shadow-lg shadow-teal-600/20 hover:shadow-teal-600/30 transition-all duration-300 inline-flex items-center justify-center gap-3 group transform hover:-translate-y-0.5 shrink-0"
                  id="footer-cta-button"
                >
                  <Phone className="w-5 h-5 transition-transform group-hover:rotate-12" />
                  Обадете се сега
                </a>
              </div>

              {/* Address & Google Maps Interactive Block */}
              <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group/map">
                {/* Address Card Top */}
                <div className="flex items-center gap-4 p-5 text-left bg-gradient-to-r from-white via-slate-50/20 to-teal-50/10">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100/50 flex items-center justify-center text-teal-600 shrink-0 group-hover/map:scale-105 transition-transform duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Адрес на студиото</p>
                    <p className="text-sm md:text-base font-bold text-slate-800 mt-0.5">
                      ул. Д-р Любен Попов 26, кв. Бриз, Варна
                    </p>
                    <span className="text-[10px] text-teal-600 font-bold uppercase tracking-wider mt-1 block">
                      Студио Elevate
                    </span>
                  </div>
                </div>

                {/* Map directly below, visually unified */}
                <div className="w-full h-64 border-t border-slate-100 relative" id="contact-map-container">
                  <iframe
                    src="https://maps.google.com/maps?q=ul.%20Doctor%20Lyuben%20Popov%2026%2C%20Briz%2C%20Varna&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0 absolute inset-0"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Physio Spot Варна - Карта"
                  ></iframe>
                </div>

                {/* Direct Google Maps Navigation Link */}
                <div className="p-4 bg-slate-50/60 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                  <span className="text-xs text-slate-500 font-sans">
                    Натиснете бутона за бърза навигация и GPS указания
                  </span>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=ул.+Д-р+Любен+Попов+26,+кв.+Бриз,+Варна"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-white hover:bg-teal-50 border border-slate-200 hover:border-teal-200 text-slate-700 hover:text-teal-600 font-bold text-xs px-4 py-2 rounded-xl shadow-xs transition-all duration-300 shrink-0 group/btn"
                  >
                    <span>Навигация</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Right Column: Quick Inquiry Form */}
          <div className="lg:col-span-7 w-full">
            <InquiryForm />
          </div>

        </div>
      </div>
    </section>
  );
}

// ==========================================
// 6. MAIN APP EXPORT
// ==========================================
export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-slate-800 selection:bg-teal-100 selection:text-teal-900 scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <FAQ />
        <Contact />
      </main>

      {/* Footer Copy */}
      <footer className="bg-white py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-teal-600" />
              <span className="font-display font-bold text-lg tracking-tight text-slate-900">
                Physio <span className="text-teal-600">Spot</span>
              </span>
            </div>
            
            <p className="text-xs md:text-sm text-slate-400">
              &copy; {new Date().getFullYear()} Physio Spot. Всички права запазени. Студио за рехабилитация Elevate.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
