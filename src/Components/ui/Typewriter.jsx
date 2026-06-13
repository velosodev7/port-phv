import { useEffect, useRef, useState } from "react";
import "./Typewriter.css";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/**
 * Efeito "máquina de escrever": revela o texto caractere a caractere com um
 * cursor que pisca ao terminar. Conteúdo real e acessível — o texto completo
 * vai no aria-label; a parte animada é aria-hidden. Respeita
 * prefers-reduced-motion (mostra tudo de imediato, sem animar).
 *
 * Para encadear vários numa sequência (boot de terminal), use `active` para
 * controlar quando começa a digitar e `onDone` para avançar ao próximo.
 * Enquanto `active` é falso (e ainda não terminou), fica vazio — sem cursor.
 */
const Typewriter = ({
  text,
  speed = 55,
  startDelay = 300,
  cursor = true,
  className = "",
  active = true,
  onDone,
}) => {
  const reduce = prefersReducedMotion();
  const [count, setCount] = useState(reduce ? text.length : 0);
  const doneRef = useRef(false);
  // Mantém onDone estável entre renders sem entrar nas deps do efeito.
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  const finish = () => {
    if (doneRef.current) return;
    doneRef.current = true;
    onDoneRef.current?.();
  };

  useEffect(() => {
    // Texto novo recomeça a digitação e volta a poder disparar onDone.
    doneRef.current = false;
    if (reduce) {
      setCount(text.length);
      finish();
      return;
    }
    if (!active) return;
    setCount(0);
    let i = 0;
    let intervalId;
    const startId = setTimeout(() => {
      intervalId = setInterval(() => {
        i += 1;
        setCount(i);
        if (i >= text.length) {
          clearInterval(intervalId);
          finish();
        }
      }, speed);
    }, startDelay);
    return () => {
      clearTimeout(startId);
      clearInterval(intervalId);
    };
  }, [active, reduce, text, speed, startDelay]);

  const done = count >= text.length && count > 0;
  // Cursor só na linha que está digitando agora; ao avançar (active=false)
  // ele passa para a próxima linha. A linha que digita: sólido enquanto
  // escreve, piscando no instante em que completa.
  const showCursor = cursor && active;

  return (
    <span className={`typewriter ${className}`.trim()} aria-label={text}>
      <span aria-hidden="true">{text.slice(0, count)}</span>
      {showCursor && (
        <span
          className={`typewriter__cursor${done ? " is-done" : ""}`}
          aria-hidden="true"
        >
          _
        </span>
      )}
    </span>
  );
};

export default Typewriter;
