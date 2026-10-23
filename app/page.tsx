'use client';
import { useEffect, useState } from 'react';
import styles from './page.module.scss';
import SiteHeader from './components/SiteHeader';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import FoundationsSection from './components/FoundationsSection';
import StorySection from './components/StorySection';
import ContactSection from './components/ContactSection';
import SiteFooter from './components/SiteFooter';

export default function Home() {
 const [intro, setIntro] = useState(true);
 const [reduceMotion, setReduceMotion] = useState(false);
 const [typedText, setTypedText] = useState('');
 useEffect(() => { if (reduceMotion) { setTypedText('Full-stack developer in progress'); return; } const phrases = ['Full-stack developer in progress', 'Curious problem solver', 'Building software with purpose']; let phraseIndex=0, charIndex=0, deleting=false; let timeout:number; const tick=()=>{ const phrase=phrases[phraseIndex]; charIndex += deleting ? -1 : 1; setTypedText(phrase.slice(0,charIndex)); let delay=deleting?34:68; if(!deleting && charIndex===phrase.length){deleting=true;delay=1450;} else if(deleting && charIndex===0){deleting=false;phraseIndex=(phraseIndex+1)%phrases.length;delay=300;} timeout=window.setTimeout(tick,delay);}; timeout=window.setTimeout(tick,450); return ()=>window.clearTimeout(timeout); },[reduceMotion]);
 useEffect(() => { const seen=sessionStorage.getItem('signal-seen'); const prefersReduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches; setReduceMotion(prefersReduced); if(seen||prefersReduced) setIntro(false); else { const timer=window.setTimeout(()=>{setIntro(false);sessionStorage.setItem('signal-seen','1');},2600); const onKey=(e:KeyboardEvent)=>{if(e.key==='Escape'){setIntro(false);sessionStorage.setItem('signal-seen','1');}}; window.addEventListener('keydown',onKey); return ()=>{window.clearTimeout(timer);window.removeEventListener('keydown',onKey);}; } },[]);
 const closeIntro=()=>{setIntro(false);sessionStorage.setItem('signal-seen','1');};
 useEffect(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const sections = Array.from(document.querySelectorAll<HTMLElement>('main > section:not([role="dialog"])'));
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
    if (entry.isIntersecting) {
     entry.target.classList.add('scroll-fade-visible');
     observer.unobserve(entry.target);
    }
   });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  sections.forEach((section, index) => {
   // Keep the first screen immediate; reveal the remaining sections as they enter view.
   if (index === 0) return;
   section.classList.add('scroll-fade');
   observer.observe(section);
  });
  return () => observer.disconnect();
 }, []);
 useEffect(() => { const finePointer=window.matchMedia('(pointer: fine)').matches; if(!finePointer||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return; const cursor=document.createElement('div');cursor.className='signal-cursor';cursor.setAttribute('aria-hidden','true');document.body.appendChild(cursor);let raf=0,x=-100,y=-100;const move=(event:PointerEvent)=>{x=event.clientX;y=event.clientY;if(!raf)raf=requestAnimationFrame(()=>{cursor.style.transform=`translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;cursor.classList.add('signal-cursor--visible');raf=0;});};const leave=()=>cursor.classList.remove('signal-cursor--visible');const hover=(event:Event)=>{const target=event.target;if(target instanceof Element&&target.closest('a,button,input,textarea,select,[role="button"]'))cursor.classList.add('signal-cursor--hover');else cursor.classList.remove('signal-cursor--hover');};window.addEventListener('pointermove',move,{passive:true});document.addEventListener('pointerover',hover,{passive:true});window.addEventListener('blur',leave);return()=>{window.removeEventListener('pointermove',move);document.removeEventListener('pointerover',hover);window.removeEventListener('blur',leave);if(raf)cancelAnimationFrame(raf);cursor.remove();}; },[]);
 return <main className={reduceMotion ? styles.reduceMotion : ''}>
 {intro && <div className={styles.intro} role="status" aria-label="Welcome"><span className={styles.introLabel}>PORTFOLIO / INITIALIZING</span><div className={styles.signalLine}/><h1>WELCOME</h1><button onClick={closeIntro} className={styles.skip}>SKIP INTRO ↗</button></div>}
 <SiteHeader />
 <HeroSection typedText={typedText} />
 <AboutSection />
 <ProjectsSection />
 <FoundationsSection />
 <StorySection />
 <ContactSection />
 <SiteFooter reduceMotion={reduceMotion} setReduceMotion={setReduceMotion} />
 </main>;
}
