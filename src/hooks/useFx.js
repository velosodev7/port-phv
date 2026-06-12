import { useSyncExternalStore, useCallback } from "react";

/**
 * Estado global dos efeitos visuais (CRT/scanline + animações).
 * Fonte de verdade: atributo data-fx no <html> (setado antes do paint por um
 * script inline no index.html). Persistido em localStorage. Sem Context: um
 * store mínimo sincroniza todos os botões via useSyncExternalStore.
 */
const KEY = "phv-fx";
const listeners = new Set();

const subscribe = (cb) => {
  listeners.add(cb);
  return () => listeners.delete(cb);
};

const isEnabled = () =>
  document.documentElement.getAttribute("data-fx") !== "off";

export const setFx = (enabled) => {
  document.documentElement.setAttribute("data-fx", enabled ? "on" : "off");
  try {
    localStorage.setItem(KEY, enabled ? "on" : "off");
  } catch {
    /* localStorage indisponível — segue só com o atributo */
  }
  listeners.forEach((cb) => cb());
};

export const useFx = () => {
  const enabled = useSyncExternalStore(subscribe, isEnabled, () => true);
  const toggle = useCallback(() => setFx(!isEnabled()), []);
  return { enabled, toggle };
};
