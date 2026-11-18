(() => {
  const key = 'vuelta-theme';
  const modes = ['system', 'light', 'dark'];
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  const saved = () => {
    const value = document.cookie.split('; ').find(pair => pair.startsWith(key + '='))?.slice(key.length + 1);
    return modes.includes(value) ? value : 'system';
  };
  let mode = saved();
  function apply() {
    document.documentElement.dataset.theme = mode;
    const dark = mode === 'dark' || (mode === 'system' && system.matches);
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#19191c' : '#edece7');
    document.querySelectorAll('select[data-theme-picker]').forEach(picker => { picker.value = mode; });
  }
  document.addEventListener('change', event => {
    const picker = event.target;
    if (!(picker instanceof HTMLSelectElement) || !picker.hasAttribute('data-theme-picker') || !modes.includes(picker.value)) return;
    mode = picker.value;
    document.cookie = `${key}=${mode}; Path=/; Max-Age=${mode === 'system' ? 0 : 31536000}; SameSite=Lax${location.protocol === 'https:' ? '; Secure' : ''}`;
    apply();
  });
  apply();
  system.addEventListener('change', apply);
  document.addEventListener('DOMContentLoaded', apply);
  window.addEventListener('pageshow', () => { mode = saved(); apply(); });
})();
