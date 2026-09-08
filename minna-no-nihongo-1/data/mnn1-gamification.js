/**
 * MINNA NO NIHONGO 1 - GAMIFIKASI & HABIT ENGINE
 * 
 * Fitur:
 * 1. Daily Streak Engine (Pelacak Konsistensi Belajar Harian)
 * 2. Sistem Level & XP Otentik Jepang (Shoshinsha -> Shogun)
 * 3. Target Harian (Daily Goal 10 Aktivitas)
 * 4. 10 Lencana Prestasi Unik (Achievement Badges)
 * 5. Modal Profil Belajar, Level Up Celebration & Achievement Toast
 */

(function () {
  'use strict';

  var STORAGE_KEY_GAME = 'mnn1_gamification_state';

  var LEVELS = [
    { level: 1, title: '初心者', romaji: 'Shoshinsha', label: 'Pemula Nihongo', icon: '🥚', minXp: 0, maxXp: 100, color: 'from-amber-400 to-yellow-500' },
    { level: 2, levelXp: 100, title: '見習い', romaji: 'Minarai', label: 'Pemagang Bahasa', icon: '🥋', minXp: 100, maxXp: 300, color: 'from-emerald-400 to-green-600' },
    { level: 3, levelXp: 300, title: '学生', romaji: 'Gakusei', label: 'Pelajar Tekun', icon: '📚', minXp: 300, maxXp: 600, color: 'from-blue-400 to-indigo-600' },
    { level: 4, levelXp: 600, title: '浪人', romaji: 'Rounin', label: 'Pengembara Kosakata', icon: '⚔️', minXp: 600, maxXp: 1000, color: 'from-cyan-400 to-teal-600' },
    { level: 5, levelXp: 1000, title: '侍', romaji: 'Samurai', label: 'Pendekar Nihongo', icon: '🏯', minXp: 1000, maxXp: 1500, color: 'from-rose-500 to-red-600' },
    { level: 6, levelXp: 1500, title: '師範', romaji: 'Shihan', label: 'Guru Teladan', icon: '🌸', minXp: 1500, maxXp: 2200, color: 'from-pink-500 to-rose-600' },
    { level: 7, levelXp: 2200, title: '達人', romaji: 'Tatsujin', label: 'Master Minna no Nihongo', icon: '🐉', minXp: 2200, maxXp: 3000, color: 'from-purple-500 to-indigo-700' },
    { level: 8, levelXp: 3000, title: '将軍', romaji: 'Shogun', label: 'Penguasa Bahasa Jepang', icon: '👑', minXp: 3000, maxXp: 5000, color: 'from-amber-500 to-yellow-600' }
  ];

  var ACHIEVEMENTS_DEF = [
    { id: 'first_word', title: 'Langkah Pertama', desc: 'Tandai kosakata pertama yang berhasil kamu hafal', icon: 'fas fa-rocket', color: 'bg-blue-500' },
    { id: 'daily_goal', title: 'Disiplin Harian', desc: 'Selesaikan 10 target aktivitas harian pertamamu', icon: 'fas fa-bullseye', color: 'bg-emerald-500' },
    { id: 'streak_3', title: 'Api Konsistensi', desc: 'Belajar 3 hari berturut-turut tanpa terputus', icon: 'fas fa-fire', color: 'bg-amber-500' },
    { id: 'reflex_5', title: 'Refleks Kilat', desc: 'Raih combo streak minimal 5x di mode Refleks Cepat', icon: 'fas fa-bolt', color: 'bg-yellow-500' },
    { id: 'quiz_100', title: 'Nilai Sempurna', desc: 'Dapatkan skor 100 pada kuis bab', icon: 'fas fa-award', color: 'bg-green-600' },
    { id: 'listening_80', title: 'Telinga Emas', desc: 'Selesaikan Kuis Pendengaran (Audio) dengan skor ≥ 80', icon: 'fas fa-headphones', color: 'bg-purple-600' },
    { id: 'explorer_5', title: 'Petualang Bab', desc: 'Buka dan jelajahi minimal 5 bab berbeda', icon: 'fas fa-compass', color: 'bg-cyan-600' },
    { id: 'grammar_guru', title: 'Ahli Pola Kalimat', desc: 'Pelajari rumus tata bahasa dan contoh kalimat', icon: 'fas fa-graduation-cap', color: 'bg-indigo-600' },
    { id: 'vocab_50', title: 'Kolektor 50', desc: 'Kuasai dan tandai 50 kosakata Minna no Nihongo', icon: 'fas fa-brain', color: 'bg-rose-500' },
    { id: 'vocab_100', title: 'Legenda 100', desc: 'Kuasai dan tandai 100 kosakata Minna no Nihongo', icon: 'fas fa-crown', color: 'bg-amber-600' }
  ];

  function getTodayDateStr() {
    var now = new Date();
    var y = now.getFullYear();
    var m = String(now.getMonth() + 1).padStart(2, '0');
    var d = String(now.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  function getYesterdayDateStr() {
    var d = new Date();
    d.setDate(d.getDate() - 1);
    var y = d.getFullYear();
    var m = String(d.getMonth() + 1).padStart(2, '0');
    var day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }

  var defaultState = {
    xp: 0,
    level: 1,
    streak: 1,
    longestStreak: 1,
    lastActiveDate: '',
    activeDates: [], // Array of YYYY-MM-DD
    dailyGoalCount: 0,
    dailyGoalTarget: 10,
    dailyGoalDate: '',
    unlockedBadges: [], // Array of { id, unlockedAt }
    exploredBabs: []    // Array of bab numbers
  };

  var state = Object.assign({}, defaultState);

  function loadState() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY_GAME);
      if (saved) {
        state = Object.assign(state, JSON.parse(saved));
      }
    } catch (e) {
      console.warn('Gagal membaca state gamifikasi:', e);
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY_GAME, JSON.stringify(state));
    } catch (e) {}
  }

  // Calculate Level from XP
  function getLevelInfo(xp) {
    for (var i = LEVELS.length - 1; i >= 0; i--) {
      if (xp >= LEVELS[i].minXp) {
        var cur = LEVELS[i];
        var progressPercent = 100;
        if (cur.maxXp > cur.minXp) {
          progressPercent = Math.min(100, Math.max(0, Math.round(((xp - cur.minXp) / (cur.maxXp - cur.minXp)) * 100)));
        }
        return {
          current: cur,
          next: LEVELS[i + 1] || null,
          progressPercent: progressPercent,
          xpInLevel: xp - cur.minXp,
          xpRequired: cur.maxXp - cur.minXp
        };
      }
    }
    return { current: LEVELS[0], next: LEVELS[1], progressPercent: 0, xpInLevel: 0, xpRequired: 100 };
  }

  // Update Daily Streak & Daily Login
  function checkDailyActivity() {
    var today = getTodayDateStr();
    var yesterday = getYesterdayDateStr();

    // Reset daily goal count if day changed
    if (state.dailyGoalDate !== today) {
      state.dailyGoalDate = today;
      state.dailyGoalCount = 0;
    }

    if (!state.lastActiveDate) {
      // First time user
      state.lastActiveDate = today;
      state.streak = 1;
      state.longestStreak = 1;
      state.activeDates = [today];
      addXp(25, 'Bonus Login Harian Pertama');
    } else if (state.lastActiveDate === today) {
      // Already recorded today
    } else if (state.lastActiveDate === yesterday) {
      // Consecutive day streak!
      state.streak += 1;
      if (state.streak > state.longestStreak) state.longestStreak = state.streak;
      state.lastActiveDate = today;
      if (!state.activeDates.includes(today)) state.activeDates.push(today);
      addXp(25, 'Bonus Streak Harian Berkelanjutan');
      showStreakToast(state.streak);
      if (state.streak >= 3) unlockBadge('streak_3');
    } else {
      // Missed more than 1 day
      state.streak = 1;
      state.lastActiveDate = today;
      if (!state.activeDates.includes(today)) state.activeDates.push(today);
      addXp(15, 'Selamat Datang Kembali!');
    }

    // Keep active dates clean to last 30 days
    if (state.activeDates.length > 30) {
      state.activeDates = state.activeDates.slice(-30);
    }

    saveState();
  }

  // Add XP with level up check
  function addXp(amount, reason) {
    if (!amount || amount <= 0) return;
    var oldLvlInfo = getLevelInfo(state.xp);
    state.xp += amount;
    var newLvlInfo = getLevelInfo(state.xp);
    state.level = newLvlInfo.current.level;

    // Increment daily goal
    state.dailyGoalCount += 1;
    if (state.dailyGoalCount >= state.dailyGoalTarget) {
      unlockBadge('daily_goal');
    }

    saveState();
    updateUINavbarWidgets();

    // Check Level Up
    if (newLvlInfo.current.level > oldLvlInfo.current.level) {
      showLevelUpCelebration(newLvlInfo.current);
    }

    // Dispatch event
    if (window.dispatchEvent) {
      try {
        window.dispatchEvent(new CustomEvent('mnn1-xp-gained', { detail: { amount: amount, reason: reason, totalXp: state.xp } }));
      } catch (e) {}
    }
  }

  // Unlock Achievement Badge
  function unlockBadge(badgeId) {
    var already = state.unlockedBadges.find(function (b) { return b.id === badgeId; });
    if (already) return;

    var badgeDef = ACHIEVEMENTS_DEF.find(function (b) { return b.id === badgeId; });
    if (!badgeDef) return;

    state.unlockedBadges.push({
      id: badgeId,
      unlockedAt: new Date().toISOString()
    });
    saveState();

    showAchievementToast(badgeDef);
    addXp(30, `Membuka Lencana ${badgeDef.title}`);
  }

  // Record Explored Bab
  function recordBabExplored(babNum) {
    var b = parseInt(babNum, 10);
    if (!b) return;
    if (!state.exploredBabs.includes(b)) {
      state.exploredBabs.push(b);
      saveState();
      if (state.exploredBabs.length >= 5) {
        unlockBadge('explorer_5');
      }
    }
  }

  // --- TOASTS & CELEBRATION MODALS ---
  function showStreakToast(count) {
    showToastNotification(`🔥 Streak ${count} Hari!`, 'Konsistensi belajar harianmu luar biasa. Terus pertahankan!', 'text-amber-500');
  }

  function showAchievementToast(badge) {
    if (window.playSfx) window.playSfx('combo');
    showToastNotification(`🏆 Lencana Terbuka: ${badge.title}!`, badge.desc, 'text-yellow-400', badge.icon);
  }

  function showToastNotification(title, message, accentClass, customIcon) {
    var container = document.getElementById('mnn1-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'mnn1-toast-container';
      container.className = 'fixed bottom-20 md:bottom-6 right-4 z-[99999] flex flex-col gap-2 pointer-events-none';
      document.body.appendChild(container);
    }

    var toast = document.createElement('div');
    toast.className = 'pointer-events-auto max-w-sm w-full bg-gray-900/95 backdrop-blur-md text-white p-4 rounded-2xl shadow-2xl border border-gray-700/60 flex items-center gap-3 transform translate-y-4 opacity-0 transition-all duration-300';
    toast.innerHTML = `
      <div class="w-10 h-10 rounded-xl bg-gray-800 text-lg flex items-center justify-center ${accentClass || 'text-amber-400'} flex-shrink-0">
        <i class="${customIcon || 'fas fa-fire'}"></i>
      </div>
      <div class="min-w-0 flex-1">
        <div class="font-heading font-black text-xs sm:text-sm text-white truncate">${title}</div>
        <div class="text-[11px] text-gray-300 font-medium line-clamp-2 mt-0.5">${message}</div>
      </div>
    `;

    container.appendChild(toast);

    setTimeout(function () {
      toast.classList.remove('translate-y-4', 'opacity-0');
      toast.classList.add('translate-y-0', 'opacity-100');
    }, 50);

    setTimeout(function () {
      toast.classList.remove('translate-y-0', 'opacity-100');
      toast.classList.add('translate-y-4', 'opacity-0');
      setTimeout(function () {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 300);
    }, 4500);
  }

  // Level Up Celebration Modal
  function showLevelUpCelebration(newLevel) {
    if (window.playSfx) window.playSfx('combo');

    var modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/75 backdrop-blur-md z-[999999] flex items-center justify-center p-4 transition-opacity duration-300';
    modal.innerHTML = `
      <div class="bg-white rounded-3xl max-w-sm w-full p-6 text-center shadow-2xl border border-amber-200 relative overflow-hidden animate-pop">
        <div class="absolute inset-0 bg-gradient-to-b from-amber-500/10 to-transparent pointer-events-none"></div>
        
        <div class="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr ${newLevel.color} text-white flex items-center justify-center text-4xl mb-4 shadow-xl shadow-amber-500/20">
          ${newLevel.icon}
        </div>

        <div class="text-[10px] font-black uppercase tracking-widest text-amber-600 mb-1">🎉 LEVEL UP!</div>
        <h3 class="font-heading text-2xl font-black text-gray-900 mb-0.5 font-jp">${newLevel.title}</h3>
        <p class="text-xs font-bold text-gray-400 mb-3">${newLevel.romaji} • ${newLevel.label}</p>
        <p class="text-xs text-gray-600 leading-relaxed mb-6 font-medium">
          Kerja bagus! Usahamu konsisten membuahkan hasil. Kamu telah naik ke <strong>Level ${newLevel.level}</strong>!
        </p>

        <button type="button" id="btn-close-lvlup" class="w-full py-3.5 rounded-2xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-extrabold text-xs shadow-lg shadow-red-500/25 transition">
          Lanjutkan Belajar 🚀
        </button>
      </div>
    `;

    document.body.appendChild(modal);

    document.getElementById('btn-close-lvlup').addEventListener('click', function () {
      modal.classList.add('opacity-0');
      setTimeout(function () {
        if (modal.parentNode) modal.parentNode.removeChild(modal);
      }, 250);
    });
  }

  // --- PROFILE & HABIT MODAL ---
  function openProfileModal() {
    var existing = document.getElementById('mnn1-profile-modal');
    if (existing) {
      existing.classList.remove('hidden');
      return;
    }

    var lvlInfo = getLevelInfo(state.xp);
    var today = getTodayDateStr();

    // 7 Days of the current week tracker
    var dayNames = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
    var currentDay = new Date().getDay(); // 0 is Sunday
    var weekHtml = '';
    
    // Generate past 7 days status
    for (var i = 6; i >= 0; i--) {
      var d = new Date();
      d.setDate(d.getDate() - i);
      var dStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
      var isActive = state.activeDates.includes(dStr);
      var isToday = dStr === today;
      var dayName = dayNames[d.getDay()];

      weekHtml += `
        <div class="flex flex-col items-center gap-1.5 flex-1">
          <div class="text-[10px] font-extrabold ${isToday ? 'text-red-600' : 'text-gray-400'}">${dayName}</div>
          <div class="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold transition shadow-xs ${
            isActive ? 'bg-amber-500 text-white shadow-amber-500/30' : 'bg-gray-100 text-gray-400'
          }">
            ${isActive ? '<i class="fas fa-fire text-xs"></i>' : '<i class="fas fa-circle text-[6px]"></i>'}
          </div>
        </div>
      `;
    }

    // Render Achievements Badges
    var badgesHtml = ACHIEVEMENTS_DEF.map(function (b) {
      var unlocked = state.unlockedBadges.find(function (u) { return u.id === b.id; });
      return `
        <div class="p-3 rounded-2xl border ${unlocked ? 'bg-amber-50/40 border-amber-200' : 'bg-gray-50 border-gray-100 opacity-60'} flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl ${unlocked ? b.color + ' text-white shadow-md' : 'bg-gray-200 text-gray-400'} flex items-center justify-center text-base flex-shrink-0">
            <i class="${b.icon}"></i>
          </div>
          <div class="min-w-0 flex-1">
            <div class="flex items-center justify-between">
              <h5 class="text-xs font-extrabold text-gray-900 truncate">${b.title}</h5>
              ${unlocked ? '<span class="text-[10px] font-black text-amber-600">Terbuka ✨</span>' : '<span class="text-[10px] font-bold text-gray-400">Terkunci 🔒</span>'}
            </div>
            <p class="text-[11px] text-gray-500 line-clamp-2 mt-0.5">${b.desc}</p>
          </div>
        </div>
      `;
    }).join('');

    var modal = document.createElement('div');
    modal.id = 'mnn1-profile-modal';
    modal.className = 'fixed inset-0 bg-black/60 backdrop-blur-sm z-[99999] flex items-center justify-center p-3 sm:p-4 overflow-y-auto';
    modal.innerHTML = `
      <div class="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100 relative my-auto animate-pop p-5 sm:p-6">
        
        <!-- Header Close -->
        <div class="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
          <div class="flex items-center space-x-2">
            <span class="w-8 h-8 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-sm">
              <i class="fas fa-user-ninja"></i>
            </span>
            <h3 class="font-heading font-black text-base text-gray-900">Profil & Kebiasaan Belajar</h3>
          </div>
          <button type="button" onclick="window.MNN1_GAME.closeProfileModal()" class="text-gray-400 hover:text-gray-700 p-1 rounded-xl transition">
            <i class="fas fa-times text-lg"></i>
          </button>
        </div>

        <!-- Level Hero Card -->
        <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-indigo-900 via-indigo-950 to-purple-950 text-white mb-5 shadow-lg relative overflow-hidden">
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-3">
              <div class="w-14 h-14 rounded-2xl bg-gradient-to-tr ${lvlInfo.current.color} flex items-center justify-center text-3xl shadow-md">
                ${lvlInfo.current.icon}
              </div>
              <div>
                <div class="text-[10px] font-black tracking-wider uppercase text-indigo-300">Level ${lvlInfo.current.level}</div>
                <div class="font-heading font-extrabold text-lg text-white font-jp flex items-center gap-2">
                  <span>${lvlInfo.current.title}</span>
                  <span class="text-xs font-normal text-indigo-200">(${lvlInfo.current.romaji})</span>
                </div>
                <div class="text-xs text-amber-300 font-bold">${lvlInfo.current.label}</div>
              </div>
            </div>
            <div class="text-right">
              <div class="text-2xl font-black text-amber-400">${state.xp}</div>
              <div class="text-[10px] font-extrabold text-indigo-300 uppercase">Total XP</div>
            </div>
          </div>

          <!-- XP Progress Bar -->
          <div class="w-full bg-white/10 h-2.5 rounded-full overflow-hidden mb-1.5">
            <div class="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full transition-all duration-500" style="width: ${lvlInfo.progressPercent}%;"></div>
          </div>
          <div class="flex items-center justify-between text-[10px] font-bold text-indigo-300">
            <span>${lvlInfo.xpInLevel} / ${lvlInfo.xpRequired} XP</span>
            <span>${lvlInfo.next ? `Menuju ${lvlInfo.next.title}` : 'Level Maksimal Shogun!'}</span>
          </div>
        </div>

        <!-- Habit & Streak Tracker -->
        <div class="mb-5 bg-gray-50 rounded-2xl p-4 border border-gray-100">
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center space-x-2">
              <span class="text-amber-500 text-base"><i class="fas fa-fire"></i></span>
              <span class="font-extrabold text-xs text-gray-900">Daily Streak: <strong>${state.streak} Hari Berturut-turut</strong></span>
            </div>
            <span class="text-[10px] font-bold text-gray-500 bg-white px-2.5 py-1 rounded-lg border border-gray-200">
              Rekor: ${state.longestStreak} Hari
            </span>
          </div>

          <!-- 7-Day Matrix -->
          <div class="flex items-center justify-between gap-1 pt-2 border-t border-gray-200/70">
            ${weekHtml}
          </div>
        </div>

        <!-- Daily Goal Box -->
        <div class="mb-5 p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center text-lg shadow-sm">
              <i class="fas fa-bullseye"></i>
            </div>
            <div>
              <div class="text-xs font-extrabold text-gray-900">Target Harian (Hari Ini)</div>
              <div class="text-[11px] text-gray-600">Selesaikan aktivitas belajar (kuis / hafalan kata)</div>
            </div>
          </div>
          <div class="text-right">
            <span class="text-base font-black text-emerald-700">${state.dailyGoalCount} / ${state.dailyGoalTarget}</span>
            <div class="text-[10px] font-bold text-emerald-600">
              ${state.dailyGoalCount >= state.dailyGoalTarget ? 'Tuntas! ✨' : 'Dalam Proses'}
            </div>
          </div>
        </div>

        <!-- Achievements Badges Section -->
        <div>
          <div class="flex items-center justify-between mb-3">
            <h4 class="font-heading font-extrabold text-xs text-gray-900 uppercase tracking-wider">
              Koleksi Lencana (${state.unlockedBadges.length} / ${ACHIEVEMENTS_DEF.length})
            </h4>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-56 overflow-y-auto pr-1">
            ${badgesHtml}
          </div>
        </div>

      </div>
    `;

    document.body.appendChild(modal);

    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeProfileModal();
    });
  }

  function closeProfileModal() {
    var modal = document.getElementById('mnn1-profile-modal');
    if (modal && modal.parentNode) {
      modal.parentNode.removeChild(modal);
    }
  }

  // --- NAVBAR & HERO UI WIDGET UPDATER ---
  function updateUINavbarWidgets() {
    var streakEls = document.querySelectorAll('.mnn1-streak-value');
    streakEls.forEach(function (el) { el.textContent = state.streak; });

    var lvlInfo = getLevelInfo(state.xp);
    var lvlEls = document.querySelectorAll('.mnn1-level-title');
    lvlEls.forEach(function (el) { el.textContent = `Lv.${lvlInfo.current.level} ${lvlInfo.current.title}`; });

    var xpEls = document.querySelectorAll('.mnn1-xp-value');
    xpEls.forEach(function (el) { el.textContent = state.xp; });
  }

  // Mount Navbar Gamification Button
  function mountNavbarPill() {
    if (document.getElementById('mnn1-nav-gamification-pill')) return;

    // Search for a suitable container in nav
    var actionContainer = document.querySelector('nav .flex.items-center.space-x-2, nav .flex.items-center.space-x-2.sm\\:space-x-3');
    if (!actionContainer) return;

    var lvlInfo = getLevelInfo(state.xp);

    var pill = document.createElement('button');
    pill.id = 'mnn1-nav-gamification-pill';
    pill.type = 'button';
    pill.onclick = openProfileModal;
    pill.className = 'touch-bounce inline-flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 text-gray-800 text-xs font-extrabold hover:shadow-sm transition cursor-pointer';
    pill.setAttribute('title', 'Lihat Level, XP, Streak & Lencana Prestasi');

    pill.innerHTML = `
      <span class="text-amber-600 flex items-center">
        <i class="fas fa-fire mr-1 text-red-500 animate-pulse"></i>
        <span class="mnn1-streak-value">${state.streak}</span>
      </span>
      <span class="text-gray-300">|</span>
      <span class="text-indigo-700 flex items-center font-jp text-[11px]">
        <span class="mnn1-level-title">Lv.${lvlInfo.current.level} ${lvlInfo.current.title}</span>
      </span>
    `;

    actionContainer.insertBefore(pill, actionContainer.firstChild);
  }

  // Initial Check on Startup
  loadState();

  document.addEventListener('DOMContentLoaded', function () {
    checkDailyActivity();
    mountNavbarPill();
    updateUINavbarWidgets();

    // Auto-check vocab count badges if MNN1_DATA loaded
    if (window.getLearnedVocabIds) {
      var learnedIds = window.getLearnedVocabIds();
      if (learnedIds.length >= 1) unlockBadge('first_word');
      if (learnedIds.length >= 50) unlockBadge('vocab_50');
      if (learnedIds.length >= 100) unlockBadge('vocab_100');
    }
  });

  // Public API
  window.MNN1_GAME = {
    getState: function () { return Object.assign({}, state); },
    getLevelInfo: function () { return getLevelInfo(state.xp); },
    addXp: addXp,
    unlockBadge: unlockBadge,
    recordBabExplored: recordBabExplored,
    openProfileModal: openProfileModal,
    closeProfileModal: closeProfileModal
  };

})();
