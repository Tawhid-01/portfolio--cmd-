import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import styles from '../page.module.scss';
export default function HeroSection({ typedText }: { typedText: string }) {
 const heroHeading = 'Confusion, then clarity.';
 return <>
    <section id="home" className={styles.hero}>
      <div className={styles.heroMeta}><span><i/> AVAILABLE TO LEARN & COLLABORATE</span><span>23° 48' N — DHAKA, BD</span></div>
      <div className={styles.heroGrid}>
        <div className={styles.heroCopy}><p className={styles.eyebrow}>ASPIRING FULL-STACK DEVELOPER</p><h1 className={styles.typedHeroHeading}>{heroHeading}</h1><p className={styles.typeLine} aria-label={typedText}><span>{typedText}</span><i aria-hidden="true"/> </p><p className={styles.heroLead}>I’m MD Tawhid. I’m learning to build useful software, understand the problems behind the code, and get a little better with every attempt.</p><div className={styles.heroActions}><a className={styles.primaryButton} href="#work">EXPLORE MY WORK <ArrowDownRight size={16}/></a><a className={styles.textLink} href="https://github.com/Tawhid-01" target="_blank" rel="noreferrer">GITHUB PROFILE <ArrowUpRight size={15}/></a></div></div>
        <div className={styles.portraitFrame}><div className={styles.cornerTL}/><div className={styles.portraitPlaceholder}><img className={styles.portraitImage} src="/images/tawhid-portrait.png" alt="MD Tawhid in a modern office" fetchPriority="high"/><div className={styles.portraitCross}>+</div><span className={styles.portraitNote}>CURIOUS BY NATURE<br/>BUILDING WITH PURPOSE</span><span className={styles.portraitOrbit}/></div><div className={styles.lightSweep}/><div className={styles.portraitCaption}><span>THE PERSON BEHIND THE CODE</span><span>MD TAWHID</span></div><div className={styles.cornerBR}/></div>
      </div>
      <div className={styles.heroBottom}><span>SCROLL TO RECEIVE <span className={styles.scrollArrow}>↓</span></span><span className={styles.heroBottomText}>STILL LEARNING. STILL BUILDING.</span><span>EST. IN CURIOSITY</span></div>
      <div className={styles.heroGlow}/>
    </section>
 </>;
}
