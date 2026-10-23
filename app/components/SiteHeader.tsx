'use client';
import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import styles from '../page.module.scss';
export default function SiteHeader() {
 const [menuOpen, setMenuOpen] = useState(false);
 return <>
    <header className={styles.header}>
      <a className={styles.brand} href="#home" aria-label="MD Tawhid home"><span className={styles.brandMark}>MT<span/></span><span>MD TAWHID <small>PORTFOLIO / 2026</small></span></a>
      <nav className={styles.desktopNav} aria-label="Main navigation"><a href="#about">ABOUT</a><a href="#work">SELECTED WORK</a><a href="#story">MY PROCESS</a><a href="#contact">CONTACT</a></nav>
      <a className={styles.githubTop} href="https://github.com/Tawhid-01" target="_blank" rel="noreferrer">GITHUB <ArrowUpRight size={14}/></a>
      <button className={styles.menuButton} aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      {menuOpen && <nav className={styles.mobileNav}><a onClick={() => setMenuOpen(false)} href="#about">ABOUT</a><a onClick={() => setMenuOpen(false)} href="#work">SELECTED WORK</a><a onClick={() => setMenuOpen(false)} href="#story">MY PROCESS</a><a onClick={() => setMenuOpen(false)} href="#contact">CONTACT</a></nav>}
    </header>
 </>;
}
