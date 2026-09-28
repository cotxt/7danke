/* Minimal replacement for the exported component runtime. No user data is collected. */
(() => {
  'use strict';
  const cards = [...document.querySelectorAll('[data-spice]')];
  function select(card) {
    const value = card.dataset.spice;
    cards.forEach(item => {
      const active = item === card;
      item.setAttribute('aria-pressed', String(active));
      item.querySelector('.spice-ring').hidden = !active;
    });
    document.getElementById('spice-value').textContent = value;
  }
  cards.forEach(card => {
    card.addEventListener('click', () => select(card));
    card.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault(); select(card);
      }
    });
  });
  const labels = {
    login: '로그인', signup: '회원가입', kakao: '카카오 가입', naver: '네이버 가입',
    sample: '매운맛 샘플 영상', classroom: '화상수업', contact: '문의',
    refund: '환불 규정', terms: '이용약관', privacy: '개인정보 처리방침'
  };
  const notice = document.getElementById('service-notice');
  let trigger = null;
  document.querySelectorAll('[data-action]').forEach(button => {
    button.addEventListener('click', event => {
      event.preventDefault();
      const action = button.dataset.action;
      const destination = window.SEVEN_DANKE_LINKS?.[action];
      if (destination) {
        try {
          const url = new URL(destination);
          if (url.protocol === 'https:' && !url.username && !url.password) {
            window.location.assign(url.href); return;
          }
        } catch (_) { /* Use the notice when configuration is invalid. */ }
      }
      trigger = button;
      const title = `${labels[action] || '서비스'} 연결 준비 중`;
      const text = action === 'sample'
        ? '이 페이지에는 샘플 영상 파일이나 재생 주소가 아직 연결되어 있지 않습니다. 영상이 준비되면 이 버튼에서 볼 수 있습니다.'
        : '현재는 서비스 소개 페이지입니다. 이 기능에 연결할 페이지가 아직 등록되어 있지 않습니다. 실제 가입·결제·예약이 진행되거나 개인정보가 수집되지는 않습니다.';
      document.getElementById('notice-title').textContent = title;
      document.getElementById('notice-message').textContent = text;
      if (typeof notice.showModal === 'function') notice.showModal();
      else window.alert(title + '\n\n' + text);
    });
  });
  notice.querySelectorAll('button').forEach(button => button.addEventListener('click', () => notice.close()));
  notice.addEventListener('close', () => trigger?.focus({ preventScroll: true }));
})();
