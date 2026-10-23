import styles from '../page.module.scss';
export default function SiteFooter({ reduceMotion, setReduceMotion }: { reduceMotion: boolean; setReduceMotion: (value: boolean) => void }) { return <>
    <footer className={styles.footer}><span>MD TAWHID / PORTFOLIO</span><label><input type="checkbox" checked={reduceMotion} onChange={e=>setReduceMotion(e.target.checked)}/> REDUCE MOTION</label><span>MADE IN THE PROCESS OF LEARNING.</span></footer>
</>; }
