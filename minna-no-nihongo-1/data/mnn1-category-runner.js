/**
 * MINNA NO NIHONGO 1 - UNIVERSAL CATEGORY RUNNER
 * 
 * Mengelola fungsionalitas seluruh 14 halaman kategori tematik:
 * 1. Filter bab & pencarian teks real-time
 * 2. Daftar kosakata interaktif dengan dukungan Romaji Tap-to-Reveal
 * 3. 3D Flashcard dengan kontrol pintasan keyboard
 * 4. Permainan Refleks Cepat (8 detik) berhadiah XP
 * 5. Integrasi mulus dengan Gamifikasi (XP, Streak & Badges) dan UX (Global Search & Romaji Toggle)
 */

(function () {
  'use strict';

  var currentCategoryKey = '';
  var allVocab = [];
  var filteredVocab = [];
  var currentFCIndex = 0;

  // Reflex state
  var reflexRunning = false;
  var reflexTimer = null;
  var reflexTimeLeft = 8000;
  var reflexScore = 0;
  var reflexCombo = 0;
  var currentReflexItem = null;

  // 1. Mobile Menu Toggle
  function toggleMnnMobileMenu() {
    var menu = document.getElementById('mnn-mobile-menu');
    var icon = document.getElementById('mnn-mobile-icon');
    if (!menu) return;
    if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
      if (icon) { icon.classList.remove('fa-bars'); icon.classList.add('fa-times'); }
    } else {
      menu.classList.add('hidden');
      if (icon) { icon.classList.remove('fa-times'); icon.classList.add('fa-bars'); }
    }
  }

  // 2. Tab Switching
  function switchCategoryTab(tabId) {
    // Stop reflex timer if leaving reflex tab
    if (tabId !== 'tab-reflex' && reflexTimer) {
      clearInterval(reflexTimer);
      reflexRunning = false;
      var btnStart = document.getElementById('btn-start-reflex');
      if (btnStart) btnStart.classList.remove('hidden');
    }

    document.querySelectorAll('.cat-content').forEach(function (el) { el.classList.add('hidden'); });
    var target = document.getElementById(tabId);
    if (target) target.classList.remove('hidden');

    var tabs = [
      { id: 'tab-list', btn: 'tab-btn-list' },
      { id: 'tab-flashcard', btn: 'tab-btn-flashcard' },
      { id: 'tab-reflex', btn: 'tab-btn-reflex' }
    ];

    tabs.forEach(function (t) {
      var btn = document.getElementById(t.btn);
      if (!btn) return;
      if (t.id === tabId) {
        btn.className = 'cat-tab-btn flex items-center px-4 py-2.5 rounded-2xl font-black text-xs sm:text-sm bg-white text-gray-900 shadow-md transition whitespace-nowrap';
      } else {
        btn.className = 'cat-tab-btn flex items-center px-4 py-2.5 rounded-2xl font-bold text-xs sm:text-sm bg-white/20 text-white hover:bg-white/30 transition whitespace-nowrap';
      }
    });

    if (tabId === 'tab-flashcard') renderFC();
    if (tabId === 'tab-reflex' && !reflexRunning) startReflexGame();
  }

  // 3. Filtering Logic
  function applyFilters() {
    var searchInput = document.getElementById('filter-search-input');
    var q = searchInput ? (searchInput.value || '').trim().toLowerCase() : '';
    var babSelect = document.getElementById('select-filter-bab');
    var babFilter = babSelect ? babSelect.value : 'all';

    filteredVocab = allVocab.filter(function (item) {
      if (babFilter !== 'all' && item.bab !== parseInt(babFilter, 10)) return false;
      if (!q) return true;
      return (item.kanji && item.kanji.toLowerCase().includes(q)) ||
             (item.kana && item.kana.toLowerCase().includes(q)) ||
             (item.romaji && item.romaji.toLowerCase().includes(q)) ||
             (item.arti && item.arti.toLowerCase().includes(q));
    });

    var badge = document.getElementById('total-count-badge');
    if (badge) badge.textContent = filteredVocab.length;

    renderList();
    currentFCIndex = 0;
    renderFC();
  }

  // 4. Render Vocabulary List Grid
  function renderList() {
    var grid = document.getElementById('items-grid');
    var empty = document.getElementById('empty-state');
    if (!grid) return;
    grid.innerHTML = '';

    if (filteredVocab.length === 0) {
      if (empty) empty.classList.remove('hidden');
      return;
    }
    if (empty) empty.classList.add('hidden');

    filteredVocab.forEach(function (item) {
      var isLearned = window.isVocabLearned ? window.isVocabLearned(item.id) : false;
      var card = document.createElement('div');
      card.className = `p-4 rounded-3xl bg-white border transition-all duration-200 hover:shadow-md flex flex-col justify-between ${
        isLearned ? 'border-green-200 bg-green-50/20' : 'border-gray-200 hover:border-red-300'
      }`;

      card.innerHTML = `
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-red-50 text-red-700">Bab ${item.bab}</span>
            <button onclick="window.toggleCategoryLearned('${item.id}', this)" class="p-1 text-xs transition ${
              isLearned ? 'text-green-600' : 'text-gray-300 hover:text-green-500'
            }" title="${isLearned ? 'Sudah hafal' : 'Tandai sudah hafal'}">
              <i class="fas fa-check-circle text-base"></i>
            </button>
          </div>

          <div class="flex items-baseline justify-between mb-1">
            <div class="font-jp text-2xl font-bold text-gray-900">${item.kanji !== item.kana ? item.kanji : item.kana}</div>
            <button onclick="window.speakJapanese('${item.kana || item.kanji}', this)" class="touch-bounce w-8 h-8 rounded-full bg-gray-50 hover:bg-red-50 text-gray-400 hover:text-red-600 flex items-center justify-center transition shadow-sm" title="Putar Suara">
              <i class="fas fa-volume-up text-xs"></i>
            </button>
          </div>

          <div class="font-jp text-xs font-semibold text-red-600 mb-1">${item.kana}</div>
          <div class="vocab-romaji text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2" title="Klik untuk mengintip">${item.romaji}</div>
        </div>

        <div class="pt-2 border-t border-gray-100 font-bold text-xs sm:text-sm text-gray-800">
          ${item.arti}
        </div>
      `;
      grid.appendChild(card);
    });
  }

  // 5. Toggle Learned with Gamification Hook
  function toggleCategoryLearned(id, btnEl) {
    if (!window.toggleVocabLearned) return;
    var nowLearned = window.toggleVocabLearned(id);

    if (nowLearned) {
      if (window.playSfx) window.playSfx('correct');
      if (window.MNN1_GAME) {
        window.MNN1_GAME.addXp(10, 'Menghafal kosakata (Kategori)');
        window.MNN1_GAME.unlockBadge('first_word');
        var totalLearned = window.getLearnedVocabIds ? window.getLearnedVocabIds().length : 1;
        if (totalLearned >= 50) window.MNN1_GAME.unlockBadge('vocab_50');
        if (totalLearned >= 100) window.MNN1_GAME.unlockBadge('vocab_100');
      }
    } else {
      if (window.playSfx) window.playSfx('tick');
    }

    renderList();
    renderFC();
  }

  // 6. 3D Flashcard Logic
  function renderFC() {
    if (!filteredVocab.length) return;
    var item = filteredVocab[currentFCIndex];
    if (!item) return;

    var isLearned = window.isVocabLearned ? window.isVocabLearned(item.id) : false;

    var currEl = document.getElementById('fc-curr');
    var totEl = document.getElementById('fc-total');
    if (currEl) currEl.textContent = currentFCIndex + 1;
    if (totEl) totEl.textContent = filteredVocab.length;

    var cardInner = document.getElementById('fc-card-inner');
    if (cardInner) cardInner.classList.remove('is-flipped');

    var bBadge = document.getElementById('fc-badge-bab');
    if (bBadge) bBadge.textContent = `Bab ${item.bab}`;

    var frontKanji = document.getElementById('fc-front-kanji');
    var frontKana = document.getElementById('fc-front-kana');
    if (frontKanji) frontKanji.textContent = item.kanji;
    if (frontKana) frontKana.textContent = item.kana;

    var backArti = document.getElementById('fc-back-arti');
    var backRomaji = document.getElementById('fc-back-romaji');
    if (backArti) backArti.textContent = item.arti;
    if (backRomaji) backRomaji.textContent = item.romaji;

    var learnedBtn = document.getElementById('btn-fc-learned');
    if (learnedBtn) {
      learnedBtn.className = isLearned
        ? 'touch-bounce py-3.5 px-4 rounded-2xl bg-green-500 text-white font-bold text-xs flex items-center justify-center shadow-md'
        : 'touch-bounce py-3.5 px-4 rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs flex items-center justify-center';
      learnedBtn.innerHTML = isLearned
        ? '<i class="fas fa-check mr-1.5"></i> Sudah Dihafal'
        : '<i class="fas fa-check mr-1.5"></i> Tandai Hafal';
    }
  }

  function toggleFC() {
    var cardInner = document.getElementById('fc-card-inner');
    if (cardInner) {
      cardInner.classList.toggle('is-flipped');
      if (window.playSfx) window.playSfx('tick');
    }
  }

  function nextFC() {
    if (currentFCIndex < filteredVocab.length - 1) {
      currentFCIndex++;
      renderFC();
    }
  }

  function prevFC() {
    if (currentFCIndex > 0) {
      currentFCIndex--;
      renderFC();
    }
  }

  function markLearnedFC(status) {
    var item = filteredVocab[currentFCIndex];
    if (!item) return;

    var currentlyLearned = window.isVocabLearned ? window.isVocabLearned(item.id) : false;
    var wantLearned = typeof status === 'boolean' ? status : !currentlyLearned;

    if (wantLearned && !currentlyLearned) {
      window.toggleVocabLearned(item.id);
      if (window.playSfx) window.playSfx('correct');
      if (window.MNN1_GAME) {
        window.MNN1_GAME.addXp(10, 'Menghafal kosakata (Flashcard Kategori)');
        window.MNN1_GAME.unlockBadge('first_word');
      }
    } else if (!wantLearned && currentlyLearned) {
      window.toggleVocabLearned(item.id);
      if (window.playSfx) window.playSfx('tick');
    }

    renderFC();
    renderList();
    if (status !== undefined) nextFC();
  }

  function shuffleFC() {
    filteredVocab.sort(function () { return Math.random() - 0.5; });
    currentFCIndex = 0;
    if (window.playSfx) window.playSfx('combo');
    renderFC();
  }

  function playFCAudio() {
    var item = filteredVocab[currentFCIndex];
    if (item && window.speakJapanese) {
      window.speakJapanese(item.kana || item.kanji);
    }
  }

  // 7. Reflex Speed Drill Logic
  function startReflexGame() {
    if (filteredVocab.length < 4) {
      alert('Kosakata di kategori ini terlalu sedikit untuk latihan refleks (butuh minimal 4 kata).');
      return;
    }

    reflexRunning = true;
    reflexScore = 0;
    reflexCombo = 0;
    updateReflexUI();

    var btnStart = document.getElementById('btn-start-reflex');
    if (btnStart) btnStart.classList.add('hidden');

    nextReflexRound();
  }

  function updateReflexUI() {
    var scoreEl = document.getElementById('reflex-score');
    var comboEl = document.getElementById('reflex-combo');
    if (scoreEl) scoreEl.textContent = reflexScore;
    if (comboEl) comboEl.textContent = reflexCombo;
  }

  function nextReflexRound() {
    if (!reflexRunning) return;
    if (reflexTimer) clearInterval(reflexTimer);

    // Pick random target
    currentReflexItem = filteredVocab[Math.floor(Math.random() * filteredVocab.length)];

    var promptKanji = document.getElementById('reflex-prompt-kanji');
    var promptKana = document.getElementById('reflex-prompt-kana');
    var promptRomaji = document.getElementById('reflex-prompt-romaji');
    if (promptKanji) promptKanji.textContent = currentReflexItem.kanji;
    if (promptKana) promptKana.textContent = currentReflexItem.kana;
    if (promptRomaji) promptRomaji.textContent = currentReflexItem.romaji;

    // Pick 3 distractors
    var options = [currentReflexItem];
    while (options.length < 4) {
      var rand = filteredVocab[Math.floor(Math.random() * filteredVocab.length)];
      if (!options.some(function (o) { return o.id === rand.id; })) {
        options.push(rand);
      }
    }
    options.sort(function () { return Math.random() - 0.5; });

    var grid = document.getElementById('reflex-options-grid');
    if (grid) {
      grid.innerHTML = '';
      options.forEach(function (opt) {
        var btn = document.createElement('button');
        btn.className = 'touch-bounce py-3.5 px-4 rounded-2xl bg-gray-50 hover:bg-gray-100 border border-gray-200 text-xs sm:text-sm font-bold text-gray-800 transition text-center shadow-sm';
        btn.textContent = opt.arti;
        btn.onclick = function () { answerReflex(opt.id === currentReflexItem.id, btn); };
        grid.appendChild(btn);
      });
    }

    reflexTimeLeft = 8000;
    var bar = document.getElementById('reflex-timer-bar');
    var timeText = document.getElementById('reflex-timer-text');
    if (bar) bar.style.width = '100%';
    if (timeText) timeText.textContent = '8.0';

    var interval = 100;
    reflexTimer = setInterval(function () {
      reflexTimeLeft -= interval;
      var pct = Math.max(0, (reflexTimeLeft / 8000) * 100);
      if (bar) bar.style.width = pct + '%';
      if (timeText) timeText.textContent = (reflexTimeLeft / 1000).toFixed(1);

      if (reflexTimeLeft <= 0) {
        clearInterval(reflexTimer);
        if (window.playSfx) window.playSfx('wrong');
        reflexCombo = 0;
        updateReflexUI();
        setTimeout(nextReflexRound, 800);
      }
    }, interval);
  }

  function answerReflex(isCorrect, btn) {
    if (reflexTimer) clearInterval(reflexTimer);

    if (isCorrect) {
      btn.classList.add('reflex-correct');
      reflexCombo++;
      var multiplier = Math.min(5, Math.floor(reflexCombo / 3) + 1);
      reflexScore += 10 * multiplier;
      if (window.playSfx) window.playSfx(reflexCombo % 5 === 0 ? 'combo' : 'correct');

      if (reflexCombo % 5 === 0 && window.MNN1_GAME) {
        window.MNN1_GAME.unlockBadge('reflex_5');
        window.MNN1_GAME.addXp(15, 'Combo Refleks 5x');
      }
    } else {
      btn.classList.add('reflex-wrong');
      reflexCombo = 0;
      if (window.playSfx) window.playSfx('wrong');
    }

    updateReflexUI();
    setTimeout(nextReflexRound, 700);
  }

  function playReflexAudio() {
    if (currentReflexItem && window.speakJapanese) {
      window.speakJapanese(currentReflexItem.kana || currentReflexItem.kanji);
    }
  }

  // 8. Flashcard Keyboard Shortcuts in Category
  function registerCategoryKeybindings() {
    window.addEventListener('keydown', function (e) {
      var activeTag = (document.activeElement && document.activeElement.tagName) || '';
      if (activeTag === 'INPUT' || activeTag === 'TEXTAREA' || activeTag === 'SELECT') return;

      var fcTab = document.getElementById('tab-flashcard');
      var isFCVisible = fcTab && !fcTab.classList.contains('hidden');

      if (isFCVisible) {
        if (e.code === 'Space' || e.key === 'Enter') {
          e.preventDefault();
          toggleFC();
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          nextFC();
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          prevFC();
        } else if (e.key === '1') {
          e.preventDefault();
          markLearnedFC(false);
        } else if (e.key === '2') {
          e.preventDefault();
          markLearnedFC(true);
        } else if (e.key.toLowerCase() === 's' || e.key.toLowerCase() === 'a') {
          e.preventDefault();
          playFCAudio();
        }
      }
    });
  }

  // 9. Public Initialization Function
  window.initCategoryRunner = function (categoryKey) {
    currentCategoryKey = categoryKey;

    document.addEventListener('DOMContentLoaded', function () {
      if (window.getVocabByCategory) {
        allVocab = window.getVocabByCategory(currentCategoryKey) || [];
      } else {
        allVocab = [];
      }

      filteredVocab = [].concat(allVocab);

      var badge = document.getElementById('total-count-badge');
      if (badge) badge.textContent = allVocab.length;

      renderList();
      renderFC();
      registerCategoryKeybindings();
    });
  };

  // Backwards compatibility bindings
  window.toggleMnnMobileMenu = toggleMnnMobileMenu;
  window.switchCategoryTab = switchCategoryTab;
  window.applyFilters = applyFilters;
  window.renderList = renderList;
  window.toggleLearned = toggleCategoryLearned;
  window.toggleCategoryLearned = toggleCategoryLearned;
  window.renderFC = renderFC;
  window.toggleFC = toggleFC;
  window.nextFC = nextFC;
  window.prevFC = prevFC;
  window.markLearnedFC = markLearnedFC;
  window.shuffleFC = shuffleFC;
  window.playFCAudio = playFCAudio;
  window.startReflexGame = startReflexGame;
  window.answerReflex = answerReflex;
  window.playReflexAudio = playReflexAudio;

})();
