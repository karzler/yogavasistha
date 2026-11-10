// Adds a "Share this verse" button at the end of every verse.
// On phones it opens the device's share sheet; elsewhere it copies the verse and its link.
(function () {
  var VERSE_ID = /^\d+-\d+-\d+$/;

  function verseText(h2) {
    var ref = h2.id.split('-').join('.');
    var shloka = '', translation = '';
    for (var el = h2.nextElementSibling; el && el.tagName !== 'H2'; el = el.nextElementSibling) {
      if (!shloka && el.classList.contains('shloka')) {
        shloka = el.innerText.replace(/\n{2,}/g, '\n').trim();
      }
      if (!translation && el.tagName === 'P' && /^Translation:/.test(el.innerText)) {
        translation = el.innerText.replace(/^Translation:\s*/, '').trim();
      }
    }
    return { ref: ref, shloka: shloka, translation: translation };
  }

  function flash(btn, msg) {
    var label = btn.querySelector('.share-label');
    var old = label.textContent;
    label.textContent = msg;
    setTimeout(function () { label.textContent = old; }, 2000);
  }

  function copy(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      var ta = document.createElement('textarea');
      ta.value = text; ta.setAttribute('readonly', '');
      ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy') ? resolve() : reject(); } catch (e) { reject(e); }
      document.body.removeChild(ta);
    });
  }

  function addButtons() {
    var heads = document.querySelectorAll('.md-content h2[id]');
    heads.forEach(function (h2) {
      if (!VERSE_ID.test(h2.id) || h2.dataset.shareAdded) return;
      h2.dataset.shareAdded = '1';

      // find the last element belonging to this verse
      var last = h2;
      for (var el = h2.nextElementSibling; el && el.tagName !== 'H2'; el = el.nextElementSibling) last = el;

      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'verse-share';
      btn.setAttribute('aria-label', 'Share verse ' + h2.id.split('-').join('.'));
      btn.innerHTML =
        '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11A2.99 2.99 0 0 0 21 5a3 3 0 1 0-5.91.7L8.04 9.81A3 3 0 1 0 6 15c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65A2.92 2.92 0 1 0 18 16.08z"/></svg>' +
        '<span class="share-label">Share this verse</span>';

      btn.addEventListener('click', function () {
        var v = verseText(h2);
        var url = location.origin + location.pathname + '#' + h2.id;
        var title = 'Yoga Vasiṣṭha ' + v.ref;
        var body = title + '\n\n' + v.shloka + '\n\n' + v.translation;
        if (navigator.share) {
          navigator.share({ title: title, text: body, url: url }).catch(function () {});
        } else {
          copy(body + '\n\n' + url).then(
            function () { flash(btn, 'Copied — paste it anywhere'); },
            function () { prompt('Copy this link:', url); }
          );
        }
      });

      var wrap = document.createElement('p');
      wrap.className = 'verse-share-row';
      wrap.appendChild(btn);
      last.parentNode.insertBefore(wrap, last.nextSibling);
    });
  }

  // Material's instant navigation re-renders pages without a full reload
  if (window.document$ && typeof window.document$.subscribe === 'function') {
    window.document$.subscribe(addButtons);
  } else {
    document.addEventListener('DOMContentLoaded', addButtons);
  }
})();
