/**
 * MINNA NO NIHONGO 1 - UX & STUDY ENHANCEMENT ENGINE
 * 
 * Fitur:
 * 1. Global Search Modal (Ctrl + K / Cmd + K) lintas 1.173 Kosakata & 85 Tata Bahasa
 * 2. Study Display Mode (Romaji Toggle Persisten + Tap-to-Reveal)
 * 3. Audio & Quick Action Shortcuts
 * 4. Keyboard Navigation untuk Flashcard (Space, Arrows, 1/2, S)
 */

(function () {
  'use strict';

  var STORAGE_KEY_PREFS = 'mnn1_study_preferences';

  // Default Preferences
  var prefs = {
    showRomaji: true,
    showFurigana: true,
    autoAudio: false
  };

  try {
    var saved = localStorage.getItem(STORAGE_KEY_PREFS);
    if (saved) {
      prefs = Object.assign(prefs, JSON.parse(saved));
    }
  } catch (e) {
    console.warn('Gagal membaca preferensi belajar MNN1:', e);
  }

  function savePrefs() {
    try {
      localStorage.setItem(STORAGE_KEY_PREFS, JSON.stringify(prefs));
    } catch (e) {}
  }

  // Inject CSS Styles for UX Features
  function injectUXStyles() {
    if (document.getElementById('mnn1-ux-styles')) return;

    var style = document.createElement('style');
    style.id = 'mnn1-ux-styles';
    style.innerHTML = `
      /* --- Romaji Peek & Blur Mode --- */
      body.hide-romaji .vocab-romaji,
      body.hide-romaji .reibun-romaji,
      body.hide-romaji #fc-romaji {
        filter: blur(5px);
        opacity: 0.35;
        transition: filter 0.2s ease, opacity 0.2s ease;
        cursor: pointer;
        user-select: none;
      }

      body.hide-romaji .vocab-romaji:hover,
      body.hide-romaji .vocab-romaji.is-revealed,
      body.hide-romaji .reibun-romaji:hover,
      body.hide-romaji .reibun-romaji.is-revealed,
      body.hide-romaji #fc-romaji:hover,
      body.hide-romaji #fc-romaji.is-revealed {
        filter: blur(0) !important;
        opacity: 1 !important;
      }

      /* Romaji toggle pill button */
      .study-mode-toggle {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 11px;
        font-weight: 800;
        padding: 6px 12px;
        border-radius: 9999px;
        cursor: pointer;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        border: 1px solid transparent;
        user-select: none;
      }

      /* Global Search Backdrop */
      .mnn1-search-backdrop {
        position: fixed;
        inset: 0;
        background: rgba(15, 23, 42, 0.7);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        z-index: 99999;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        padding: 4rem 1rem 1rem 1rem;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.2s ease;
      }

      .mnn1-search-backdrop.is-open {
        opacity: 1;
        pointer-events: auto;
      }

      .mnn1-search-modal {
        background: #ffffff;
        width: 100%;
        max-width: 680px;
        border-radius: 1.5rem;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35);
        border: 1px solid rgba(226, 232, 240, 0.8);
        overflow: hidden;
        transform: translateY(-16px) scale(0.98);
        transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        display: flex;
        flex-direction: column;
        max-height: 80vh;
      }

      .mnn1-search-backdrop.is-open .mnn1-search-modal {
        transform: translateY(0) scale(1);
      }

      .mnn1-search-item {
        transition: background 0.15s ease, transform 0.15s ease;
      }

      .mnn1-search-item:hover,
      .mnn1-search-item.is-selected {
        background: #f8fafc;
      }

      /* Highlight matched query text */
      mark.search-highlight {
        background: #fef08a;
        color: #854d0e;
        padding: 0 2px;
        border-radius: 3px;
        font-weight: 700;
      }

      /* Keyboard shortcut badge */
      kbd.mnn1-kbd {
        background: #f1f5f9;
        border: 1px solid #cbd5e1;
        border-bottom-width: 2px;
        border-radius: 6px;
        padding: 2px 6px;
        font-size: 10px;
        font-weight: 800;
        color: #475569;
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      }
    `;
    document.head.appendChild(style);
  }

  // Apply visual state of Romaji
  function applyDisplayPrefs() {
    if (!prefs.showRomaji) {
      document.body.classList.add('hide-romaji');
    } else {
      document.body.classList.remove('hide-romaji');
    }

    // Update any UI toggle buttons in DOM
    var toggleButtons = document.querySelectorAll('.mnn1-romaji-toggle-btn');
    toggleButtons.forEach(function (btn) {
      if (prefs.showRomaji) {
        btn.classList.remove('bg-purple-600', 'text-white', 'shadow-sm');
        btn.classList.add('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
        btn.innerHTML = '<i class="fas fa-eye mr-1.5 text-gray-500"></i><span>Romaji: <strong>Tampil</strong></span>';
        btn.setAttribute('title', 'Klik untuk menyembunyikan Romaji (Fokus Huruf Jepang)');
      } else {
        btn.classList.add('bg-purple-600', 'text-white', 'shadow-sm');
        btn.classList.remove('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
        btn.innerHTML = '<i class="fas fa-eye-slash mr-1.5 text-yellow-300"></i><span>Romaji: <strong>Disembunyikan (Tap to Peek)</strong></span>';
        btn.setAttribute('title', 'Romaji disembunyikan. Klik untuk menampilkan kembali.');
      }
    });

    // Notify listeners
    var event = new CustomEvent('mnn1-prefs-changed', { detail: prefs });
    window.dispatchEvent(event);
  }

  function toggleRomaji() {
    prefs.showRomaji = !prefs.showRomaji;
    savePrefs();
    applyDisplayPrefs();

    if (window.playSfx) {
      window.playSfx('tick');
    }
    return prefs.showRomaji;
  }

  // --- GLOBAL SEARCH LOGIC ---
  var searchModalEl = null;
  var searchInputEl = null;
  var searchResultsContainerEl = null;
  var searchCountEl = null;
  var selectedResultIndex = -1;
  var currentSearchResults = [];

  function buildSearchModal() {
    if (document.getElementById('mnn1-global-search-modal')) return;

    var backdrop = document.createElement('div');
    backdrop.id = 'mnn1-global-search-modal';
    backdrop.className = 'mnn1-search-backdrop';
    backdrop.setAttribute('role', 'dialog');
    backdrop.setAttribute('aria-modal', 'true');

    backdrop.innerHTML = `
      <div class="mnn1-search-modal">
        <!-- Input Header -->
        <div class="p-4 sm:p-5 border-b border-gray-100 flex items-center gap-3 bg-white">
          <div class="w-10 h-10 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center text-lg flex-shrink-0">
            <i class="fas fa-search"></i>
          </div>
          <div class="flex-1 relative">
            <input type="text" id="mnn1-search-query-input" placeholder="Cari kosakata (arti, romaji, kanji, kana) atau tata bahasa..." 
              class="w-full text-sm sm:text-base font-medium text-gray-900 placeholder-gray-400 bg-transparent focus:outline-none"
              autocomplete="off" spellcheck="false" />
          </div>
          <div class="hidden sm:flex items-center gap-1.5 text-xs text-gray-400">
            <kbd class="mnn1-kbd">ESC</kbd>
          </div>
          <button id="mnn1-search-close-btn" class="sm:hidden text-gray-400 hover:text-gray-600 p-1.5" aria-label="Tutup Pencarian">
            <i class="fas fa-times text-lg"></i>
          </button>
        </div>

        <!-- Filter Chips Bar -->
        <div class="px-5 py-2.5 bg-gray-50 border-b border-gray-100 flex items-center justify-between text-xs overflow-x-auto no-scrollbar">
          <div class="flex items-center space-x-1.5">
            <span class="text-gray-400 font-bold uppercase text-[10px] tracking-wider mr-1">Filter:</span>
            <button type="button" class="mnn1-search-filter-btn px-2.5 py-1 rounded-lg font-extrabold text-[11px] bg-red-600 text-white" data-type="all">Semua</button>
            <button type="button" class="mnn1-search-filter-btn px-2.5 py-1 rounded-lg font-extrabold text-[11px] bg-white text-gray-600 border border-gray-200 hover:bg-gray-100" data-type="vocab">Kosakata</button>
            <button type="button" class="mnn1-search-filter-btn px-2.5 py-1 rounded-lg font-extrabold text-[11px] bg-white text-gray-600 border border-gray-200 hover:bg-gray-100" data-type="grammar">Tata Bahasa</button>
          </div>
          <div id="mnn1-search-count-label" class="text-gray-500 font-bold text-[11px] whitespace-nowrap pl-3">
            Ketik untuk mulai mencari
          </div>
        </div>

        <!-- Results List -->
        <div id="mnn1-search-results-list" class="flex-1 overflow-y-auto p-2 divide-y divide-gray-50 text-sm max-h-[55vh]">
          <!-- Injected via performSearch() -->
        </div>

        <!-- Footer Shortcuts -->
        <div class="px-5 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500 font-semibold">
          <div class="flex items-center gap-3">
            <span><kbd class="mnn1-kbd">↑</kbd> <kbd class="mnn1-kbd">↓</kbd> Pilih</span>
            <span><kbd class="mnn1-kbd">↵</kbd> Buka</span>
            <span><kbd class="mnn1-kbd">ESC</kbd> Tutup</span>
          </div>
          <div class="text-[10px] text-gray-400">
            Minna no Nihongo 1 (1.173 Kata & 85 Rumus)
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(backdrop);

    searchModalEl = backdrop;
    searchInputEl = document.getElementById('mnn1-search-query-input');
    searchResultsContainerEl = document.getElementById('mnn1-search-results-list');
    searchCountEl = document.getElementById('mnn1-search-count-label');

    // Close listeners
    backdrop.addEventListener('click', function (e) {
      if (e.target === backdrop) closeSearchModal();
    });

    var closeBtn = document.getElementById('mnn1-search-close-btn');
    if (closeBtn) closeBtn.addEventListener('click', closeSearchModal);

    // Filter Buttons
    var filterBtns = backdrop.querySelectorAll('.mnn1-search-filter-btn');
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) {
          b.classList.remove('bg-red-600', 'text-white');
          b.classList.add('bg-white', 'text-gray-600', 'border', 'border-gray-200');
        });
        btn.classList.remove('bg-white', 'text-gray-600', 'border', 'border-gray-200');
        btn.classList.add('bg-red-600', 'text-white');
        currentSearchTypeFilter = btn.getAttribute('data-type');
        performSearch();
      });
    });

    // Input handler with debounce
    var debounceTimer;
    searchInputEl.addEventListener('input', function () {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(performSearch, 120);
    });

    // Keyboard navigation within modal
    searchInputEl.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        navigateSearchResults(1);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        navigateSearchResults(-1);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        chooseSelectedSearchResult();
      } else if (e.key === 'Escape') {
        closeSearchModal();
      }
    });
  }

  var currentSearchTypeFilter = 'all';

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function highlightMatch(text, query) {
    if (!text || !query) return escapeHtml(text || '');
    var safeText = escapeHtml(text);
    var safeQuery = escapeHtml(query).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    var re = new RegExp('(' + safeQuery + ')', 'gi');
    return safeText.replace(re, '<mark class="search-highlight">$1</mark>');
  }

  function performSearch() {
    if (!searchInputEl || !searchResultsContainerEl) return;
    var q = searchInputEl.value.trim().toLowerCase();

    if (!q) {
      currentSearchResults = [];
      selectedResultIndex = -1;
      searchCountEl.textContent = 'Ketik untuk mulai mencari';
      searchResultsContainerEl.innerHTML = `
        <div class="py-12 text-center text-gray-400">
          <i class="fas fa-keyboard text-3xl mb-2 text-gray-300"></i>
          <p class="font-bold text-xs">Cari apa saja dari seluruh 25 Bab Minna no Nihongo</p>
          <p class="text-[11px] text-gray-400 mt-1">Contoh: <em>sensei</em>, <em>guru</em>, <em>先生</em>, <em>~wa ~desu</em>, <em>kuremasu</em></p>
        </div>
      `;
      return;
    }

    var results = [];

    // 1. Search in Vocabulary (MNN1_DATA)
    if ((currentSearchTypeFilter === 'all' || currentSearchTypeFilter === 'vocab') && window.MNN1_DATA) {
      window.MNN1_DATA.forEach(function (bab) {
        if (!bab.vocab) return;
        bab.vocab.forEach(function (item) {
          var kanji = (item.kanji || '').toLowerCase();
          var kana = (item.kana || '').toLowerCase();
          var romaji = (item.romaji || '').toLowerCase();
          var arti = (item.arti || '').toLowerCase();

          var matchScore = 0;
          if (romaji === q || kana === q || kanji === q || arti === q) matchScore = 100;
          else if (romaji.startsWith(q) || kana.startsWith(q) || kanji.startsWith(q) || arti.startsWith(q)) matchScore = 80;
          else if (romaji.includes(q) || kana.includes(q) || kanji.includes(q) || arti.includes(q)) matchScore = 50;

          if (matchScore > 0) {
            results.push({
              type: 'vocab',
              score: matchScore,
              bab: bab.bab,
              babTitle: bab.title,
              item: item
            });
          }
        });
      });
    }

    // 2. Search in Grammar (MNN1_GRAMMAR)
    if ((currentSearchTypeFilter === 'all' || currentSearchTypeFilter === 'grammar') && window.MNN1_GRAMMAR) {
      window.MNN1_GRAMMAR.forEach(function (bab) {
        if (!bab.patterns) return;
        bab.patterns.forEach(function (pattern, pIdx) {
          var title = (pattern.title || '').toLowerCase();
          var formula = (pattern.formula || '').toLowerCase();
          var meaning = (pattern.meaning || '').toLowerCase();
          var explanation = (pattern.explanation || '').toLowerCase();

          var matchScore = 0;
          if (title.includes(q)) matchScore = 90;
          else if (formula.includes(q)) matchScore = 85;
          else if (meaning.includes(q)) matchScore = 75;
          else if (explanation.includes(q)) matchScore = 40;

          // Check in examples
          if (!matchScore && pattern.examples) {
            pattern.examples.forEach(function (ex) {
              if (
                (ex.kanji && ex.kanji.toLowerCase().includes(q)) ||
                (ex.kana && ex.kana.toLowerCase().includes(q)) ||
                (ex.romaji && ex.romaji.toLowerCase().includes(q)) ||
                (ex.arti && ex.arti.toLowerCase().includes(q))
              ) {
                matchScore = 60;
              }
            });
          }

          if (matchScore > 0) {
            results.push({
              type: 'grammar',
              score: matchScore,
              bab: bab.bab,
              babTitle: bab.title,
              pattern: pattern,
              patternIndex: pIdx + 1
            });
          }
        });
      });
    }

    // Sort by relevance score descending
    results.sort(function (a, b) {
      return b.score - a.score;
    });

    currentSearchResults = results.slice(0, 30); // Max 30 results
    selectedResultIndex = currentSearchResults.length > 0 ? 0 : -1;

    searchCountEl.textContent = `${results.length} hasil ditemukan`;

    if (currentSearchResults.length === 0) {
      searchResultsContainerEl.innerHTML = `
        <div class="py-12 text-center text-gray-400">
          <i class="fas fa-search-minus text-3xl mb-2 text-gray-300"></i>
          <p class="font-bold text-xs">Tidak ada kata atau tata bahasa yang cocok dengan "${escapeHtml(q)}"</p>
        </div>
      `;
      return;
    }

    // Render list
    renderSearchResultsHTML(q);
  }

  function renderSearchResultsHTML(q) {
    var html = '';

    currentSearchResults.forEach(function (res, idx) {
      var isSelected = idx === selectedResultIndex;
      var selectedClass = isSelected ? 'bg-red-50/60 border-red-200' : 'hover:bg-gray-50 border-transparent';

      if (res.type === 'vocab') {
        var item = res.item;
        var kanjiDisplay = item.kanji && item.kanji !== item.kana ? item.kanji : item.kana;

        html += `
          <div class="mnn1-search-item p-3.5 rounded-2xl border ${selectedClass} cursor-pointer flex items-center justify-between gap-3"
               onclick="window.MNN1_UX.openResult(${idx})" data-index="${idx}">
            <div class="flex items-center gap-3 min-w-0 flex-1">
              <div class="w-8 h-8 rounded-xl bg-gray-100 text-gray-700 flex items-center justify-center font-bold text-xs flex-shrink-0">
                B${res.bab}
              </div>
              <div class="min-w-0 flex-1">
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="font-jp text-base font-bold text-gray-900">${highlightMatch(kanjiDisplay, q)}</span>
                  <span class="font-jp text-xs font-semibold text-red-600">${highlightMatch(item.kana, q)}</span>
                  <span class="text-[11px] font-medium text-gray-400 uppercase tracking-wider">${highlightMatch(item.romaji, q)}</span>
                </div>
                <div class="text-xs text-gray-700 font-semibold truncate mt-0.5">
                  ${highlightMatch(item.arti, q)}
                </div>
              </div>
            </div>

            <div class="flex items-center gap-1.5 flex-shrink-0">
              <button onclick="event.stopPropagation(); window.speakJapanese('${item.kana || item.kanji}', this);"
                class="w-8 h-8 rounded-full bg-gray-50 hover:bg-red-100 text-gray-400 hover:text-red-600 flex items-center justify-center transition"
                title="Dengarkan Pelafalan">
                <i class="fas fa-volume-up text-xs"></i>
              </button>
              <span class="text-[10px] font-bold text-gray-400 hidden sm:inline">Bab ${res.bab} <i class="fas fa-arrow-right ml-1"></i></span>
            </div>
          </div>
        `;
      } else if (res.type === 'grammar') {
        var pattern = res.pattern;

        html += `
          <div class="mnn1-search-item p-3.5 rounded-2xl border ${selectedClass} cursor-pointer flex items-center justify-between gap-3"
               onclick="window.MNN1_UX.openResult(${idx})" data-index="${idx}">
            <div class="flex items-center gap-3 min-w-0 flex-1">
              <div class="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xs flex-shrink-0">
                <i class="fas fa-graduation-cap"></i>
              </div>
              <div class="min-w-0 flex-1">
                <div class="flex items-center gap-2 flex-wrap mb-0.5">
                  <span class="text-[10px] font-black uppercase px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 border border-purple-200">
                    Tata Bahasa Bab ${res.bab}
                  </span>
                  <h4 class="font-bold text-xs sm:text-sm text-gray-900 truncate">
                    ${highlightMatch(pattern.title, q)}
                  </h4>
                </div>
                <div class="font-mono text-[11px] font-bold text-purple-800 bg-purple-50/60 px-2 py-1 rounded-lg border border-purple-100 truncate">
                  ${highlightMatch(pattern.formula, q)}
                </div>
                <div class="text-xs text-gray-600 mt-1 truncate">
                  ${highlightMatch(pattern.meaning, q)}
                </div>
              </div>
            </div>

            <div class="flex items-center gap-1.5 flex-shrink-0">
              <span class="text-[10px] font-extrabold text-purple-600 bg-purple-50 px-2.5 py-1 rounded-full hidden sm:inline">
                Pola #${res.patternIndex}
              </span>
              <span class="text-gray-300 text-xs hidden sm:inline"><i class="fas fa-chevron-right"></i></span>
            </div>
          </div>
        `;
      }
    });

    searchResultsContainerEl.innerHTML = html;
  }

  function navigateSearchResults(direction) {
    if (!currentSearchResults.length) return;
    selectedResultIndex += direction;
    if (selectedResultIndex < 0) selectedResultIndex = currentSearchResults.length - 1;
    if (selectedResultIndex >= currentSearchResults.length) selectedResultIndex = 0;

    var items = searchResultsContainerEl.querySelectorAll('.mnn1-search-item');
    items.forEach(function (el, idx) {
      if (idx === selectedResultIndex) {
        el.classList.add('bg-red-50/60', 'border-red-200');
        el.classList.remove('hover:bg-gray-50', 'border-transparent');
        el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      } else {
        el.classList.remove('bg-red-50/60', 'border-red-200');
        el.classList.add('hover:bg-gray-50', 'border-transparent');
      }
    });
  }

  function chooseSelectedSearchResult() {
    if (selectedResultIndex >= 0 && selectedResultIndex < currentSearchResults.length) {
      openResult(selectedResultIndex);
    }
  }

  function openResult(index) {
    var res = currentSearchResults[index];
    if (!res) return;

    closeSearchModal();

    var currentPath = window.location.pathname;
    var isInBabHtml = currentPath.endsWith('bab.html');

    if (res.type === 'vocab') {
      var targetUrl = `bab.html?bab=${res.bab}&search=${encodeURIComponent(res.item.kana || res.item.kanji)}`;
      if (isInBabHtml) {
        // If already in bab.html, check if same bab
        var currentBab = window.currentBabNumber;
        if (currentBab === res.bab) {
          // Switch to vocab tab and search
          if (window.switchTab) window.switchTab('tab-vocab');
          var searchInput = document.getElementById('vocab-search-input');
          if (searchInput) {
            searchInput.value = res.item.kana || res.item.kanji;
            if (window.handleVocabSearch) window.handleVocabSearch();
          }
          return;
        }
      }
      window.location.href = targetUrl;
    } else if (res.type === 'grammar') {
      var targetUrl = `bab.html?bab=${res.bab}&tab=grammar#pattern-${res.patternIndex}`;
      if (isInBabHtml) {
        var currentBab = window.currentBabNumber;
        if (currentBab === res.bab) {
          if (window.switchTab) window.switchTab('tab-grammar');
          setTimeout(function () {
            var targetEl = document.getElementById(`pattern-${res.patternIndex}`);
            if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth' });
          }, 150);
          return;
        }
      }
      window.location.href = targetUrl;
    }
  }

  function openSearchModal(initialQuery) {
    buildSearchModal();
    searchModalEl.classList.add('is-open');
    document.body.style.overflow = 'hidden';

    if (initialQuery && typeof initialQuery === 'string') {
      searchInputEl.value = initialQuery;
      performSearch();
    }

    setTimeout(function () {
      searchInputEl.focus();
      searchInputEl.select();
    }, 50);
  }

  function closeSearchModal() {
    if (!searchModalEl) return;
    searchModalEl.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  // --- KEYBOARD SHORTCUTS ENGINE ---
  function registerGlobalKeybindings() {
    window.addEventListener('keydown', function (e) {
      // 1. Ctrl + K or Cmd + K (Spotlight Global Search)
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (searchModalEl && searchModalEl.classList.contains('is-open')) {
          closeSearchModal();
        } else {
          openSearchModal();
        }
        return;
      }

      // 2. Escape: Close modal
      if (e.key === 'Escape' && searchModalEl && searchModalEl.classList.contains('is-open')) {
        closeSearchModal();
        return;
      }

      // 3. Flashcard Shortcuts (Active only when on tab-flashcard and search is not open and not typing in inputs)
      var activeTag = (document.activeElement && document.activeElement.tagName) || '';
      if (activeTag === 'INPUT' || activeTag === 'TEXTAREA') return;
      if (searchModalEl && searchModalEl.classList.contains('is-open')) return;

      var fcTab = document.getElementById('tab-flashcard');
      var isFlashcardVisible = fcTab && !fcTab.classList.contains('hidden');

      if (isFlashcardVisible) {
        if (e.code === 'Space' || e.key === 'Enter') {
          e.preventDefault();
          if (window.toggleCardFlip) window.toggleCardFlip();
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          if (window.nextFlashcard) window.nextFlashcard();
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          if (window.prevFlashcard) window.prevFlashcard();
        } else if (e.key === '1') {
          e.preventDefault();
          if (window.markCurrentCard) window.markCurrentCard(false);
        } else if (e.key === '2') {
          e.preventDefault();
          if (window.markCurrentCard) window.markCurrentCard(true);
        } else if (e.key.toLowerCase() === 's' || e.key.toLowerCase() === 'a') {
          e.preventDefault();
          if (window.playCurrentCardAudio) window.playCurrentCardAudio();
        }
      }
    });
  }

  // Auto-init on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', function () {
    injectUXStyles();
    applyDisplayPrefs();
    registerGlobalKeybindings();

    // Tap-to-reveal delegated listener on body
    document.body.addEventListener('click', function (e) {
      var romajiEl = e.target.closest('.vocab-romaji, .reibun-romaji, #fc-romaji');
      if (romajiEl && document.body.classList.contains('hide-romaji')) {
        romajiEl.classList.toggle('is-revealed');
      }
    });
  });

  // Public API
  window.MNN1_UX = {
    getPrefs: function () { return Object.assign({}, prefs); },
    toggleRomaji: toggleRomaji,
    openSearch: openSearchModal,
    closeSearch: closeSearchModal,
    openResult: openResult
  };

})();
