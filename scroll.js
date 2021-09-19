const scrl = {
  stop: () => scrl._stop = true,
  run: (selectorToScroll = '.scroller-2LSbBU', selectorToObserve = '.scrollerInner-2YIMLh') => {
    const el = document.querySelector(selectorToScroll),
      observed = document.querySelector(selectorToObserve),
      observer = new MutationObserver((e) => update(e)),
      update = (e) => (!scrl._stop) && setTimeout(() => el.scrollTo(0, 1000), 0);

    observer.observe(observed, { childList: true });
    scrl._stop = false;

    update()
  },
  _stop: false
}
