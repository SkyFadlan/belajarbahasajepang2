/**
 * MINNA NO NIHONGO 1 - MASTER DATA TATA BAHASA (BUNPOU) & CONTOH KALIMAT (REIBUN)
 * Seluruh 25 Bab (Bab 1 s/d Bab 25) - Standar Kurikulum JLPT N5
 * Lengkap dengan Rumus, Penjelasan, Furigana, Romaji, Terjemahan Indonesia, dan Catatan Nuansa
 */

(function () {
  'use strict';

  const MNN1_GRAMMAR = [
    {
      bab: 1,
      title: "Perkenalan Diri & Kalimat Nominal",
      summary: "Mempelajari kalimat pembentuk identitas (adalah / bukan), partikel penanda topik [は], partikel tanya [か], partikel inklusi [も], dan kepemilikan [の].",
      patterns: [
        {
          id: "b1-p1",
          title: "[Subjek / Orang] は [Identitas / Profesi] です",
          formula: "[Subjek / Orang] は [Profesi / Kewarganegaraan / Identitas] です",
          meaning: "Menyatakan identitas, profesi, atau kewarganegaraan seseorang (Subjek adalah Identitas).",
          explanation: "Partikel 「は」 ditulis dengan huruf hiragana 'ha' namun dilafalkan 'wa' ketika berfungsi sebagai partikel penanda topik/subjek orang. 「です」 (desu) adalah kopula penutup kalimat positif bernada sopan (teinei-go).",
          examples: [
            {
              kanji: "私は学生です。",
              kana: "わたしは がくせいです。",
              romaji: "Watashi wa gakusei desu.",
              arti: "Saya adalah seorang mahasiswa/pelajar."
            },
            {
              kanji: "ミラーさんはアメリカ人です。",
              kana: "ミラーさんは アメリカじんです。",
              romaji: "Miraa-san wa Amerika-jin desu.",
              arti: "Tuan Miller adalah orang Amerika."
            },
            {
              kanji: "ワンさんは医者です。",
              kana: "ワンさんは いしゃです。",
              romaji: "Wan-san wa isha desu.",
              arti: "Tuan Wang adalah seorang dokter."
            }
          ],
          notes: "Gunakan akhiran kehormatan 「～さん」 (-san) setelah nama orang lain sebagai bentuk kesopanan, namun JANGAN gunakan untuk menyebut diri sendiri."
        },
        {
          id: "b1-p2",
          title: "[Subjek / Orang] は [Identitas / Profesi] じゃありません / ではありません",
          formula: "[Subjek / Orang] は [Profesi / Kewarganegaraan / Identitas] じゃありません / ではありません",
          meaning: "Bentuk negatif sopan: Menyatakan bahwa subjek/orang bukan beridentitas atau bukan berprofesi tersebut.",
          explanation: "「じゃありません」 (ja arimasen) adalah bentuk lisan percakapan sehari-hari yang sopan. 「ではありません」 (dewa arimasen) bernuansa lebih formal dan lebih sering dipakai dalam situasi resmi atau pidato/tulisan.",
          examples: [
            {
              kanji: "サントスさんは学生じゃありません。",
              kana: "サントスさんは がくせいじゃ ありません。",
              romaji: "Santosu-san wa gakusei ja arimasen.",
              arti: "Tuan Santos bukan seorang mahasiswa."
            },
            {
              kanji: "私は先生ではありません。",
              kana: "わたしは せんせいでは ありません。",
              romaji: "Watashi wa sensei dewa arimasen.",
              arti: "Saya bukan seorang guru."
            }
          ],
          notes: "Kata 'dewa' pada ではありません juga ditulis dengan hiragana 'ha' (では)."
        },
        {
          id: "b1-p3",
          title: "[Subjek / Orang] は [Identitas / Profesi] ですか (Apakah Orang Tersebut...?)",
          formula: "[Subjek / Orang] は [Profesi / Kewarganegaraan / Identitas] ですか",
          meaning: "Kalimat tanya untuk mengonfirmasi identitas, profesi, atau kewarganegaraan seseorang.",
          explanation: "Partikel 「か」 (ka) diletakkan di akhir kalimat sebagai penanda tanya dalam bahasa Jepang lisan dengan intonasi naik.",
          examples: [
            {
              kanji: "ミラーさんは会社員ですか。…はい、会社員です。",
              kana: "ミラーさんは かいしゃいんですか。…はい、かいしゃいんです。",
              romaji: "Miraa-san wa kaishain desu ka. ...Hai, kaishain desu.",
              arti: "Apakah Tuan Miller seorang karyawan perusahaan? ...Ya, karyawan perusahaan."
            },
            {
              kanji: "あの人は誰ですか。…山田さんです。",
              kana: "あのひとは だれですか。…やまださんです。",
              romaji: "Ano hito wa dare desu ka. ...Yamada-san desu.",
              arti: "Siapakah orang itu? ...Tuan Yamada."
            }
          ],
          notes: "Jika ingin lebih sopan saat menanyakan orang: gunakan 「あの方 (ano kata)」 dan kata tanya 「どなた (donata)」."
        },
        {
          id: "b1-p4",
          title: "[Subjek / Orang Lain] も (Juga / Pun)",
          formula: "[Subjek / Orang Lain] も [Profesi / Identitas yang Sama] です",
          meaning: "Menyatakan bahwa subjek/orang kedua memiliki profesi, kewarganegaraan, atau kondisi yang sama dengan yang pertama.",
          explanation: "Partikel 「も」 menggantikan partikel 「は」 jika pernyataan yang menyusul memiliki kondisi yang sama.",
          examples: [
            {
              kanji: "ミラーさんは会社員です。グプタさんも会社員です。",
              kana: "ミラーさんは かいしゃいんです。グプタさんも かいしゃいんです。",
              romaji: "Miraa-san wa kaishain desu. Guputa-san mo kaishain desu.",
              arti: "Tuan Miller adalah karyawan perusahaan. Tuan Gupta juga karyawan perusahaan."
            },
            {
              kanji: "私もインドネシア人です。",
              kana: "わたしも インドネシアじんです。",
              romaji: "Watashi mo Indonesia-jin desu.",
              arti: "Saya juga orang Indonesia."
            }
          ],
          notes: "Jangan gabungkan 'wa' dan 'mo' secara bersamaan (*watashi wa mo); cukup gunakan 'mo'."
        },
        {
          id: "b1-p5",
          title: "[Institusi / Pemilik] の [Afiliasi / Barang] (Hubungan Afiliasi & Kepemilikan)",
          formula: "[Perusahaan / Sekolah / Pemilik] の [Anggota / Barang Milik]",
          meaning: "Partikel [の] menghubungkan organisasi/pemilik dengan anggota atau barang miliknya.",
          explanation: "Menyatakan institusi/perusahaan asal (contoh: IMCの社員 = Karyawan perusahaan IMC) atau kepemilikan (私の本 = Buku saya).",
          examples: [
            {
              kanji: "ミラーさんはIMCの社員です。",
              kana: "ミラーさんは アイ・エム・シーの しゃいんです。",
              romaji: "Miraa-san wa IMC no shain desu.",
              arti: "Tuan Miller adalah pegawai dari perusahaan IMC."
            },
            {
              kanji: "カリナさんは富士大学の学生です。",
              kana: "カリナさんは ふじだいがくの がくせいです。",
              romaji: "Karina-san wa Fuji Daigaku no gakusei desu.",
              arti: "Karina adalah mahasiswi dari Universitas Fuji."
            }
          ],
          notes: "Hubungan 'A no B' selalu berurutan dari yang lebih luas/organisasi pembuat (A) ke individu/benda (B)."
        }
      ]
    },
    {
      bab: 2,
      title: "Kata Tunjuk Benda & Kepemilikan",
      summary: "Memahami kata tunjuk posisi benda (Kore, Sore, Are, Dore) dan pemakaian kata sandang (Kono, Sono, Ano) serta konfirmasi pilihan.",
      patterns: [
        {
          id: "b2-p1",
          title: "これ / それ / あれ は [Benda] です (Ini / Itu adalah Benda)",
          formula: "これ / それ / あれ は [Nama Benda] です",
          meaning: "Menunjuk benda mati berdasarkan jarak fisik dari pembicara dan lawan bicara.",
          explanation: "「これ」 (kore): benda dekat pembicara. 「それ」 (sore): benda dekat lawan bicara. 「あれ」 (are): benda jauh dari kedua pihak. Kata tanya: 「どれ」 (dore).",
          examples: [
            {
              kanji: "これは辞書です。",
              kana: "これは じしょです。",
              romaji: "Kore wa jisho desu.",
              arti: "Ini adalah kamus."
            },
            {
              kanji: "それは何ですか。…これは鍵です。",
              kana: "それは なんですか。…これは かぎです。",
              romaji: "Sore wa nan desu ka. ...Kore wa kagi desu.",
              arti: "Itu apa? ...Ini adalah kunci."
            },
            {
              kanji: "あれは私の傘です。",
              kana: "あれは わたしの かさです。",
              romaji: "Are wa watashi no kasa desu.",
              arti: "Yang di sana itu adalah payung saya."
            }
          ],
          notes: "Kore, Sore, Are berdiri sendiri sebagai kata ganti (pronomina) dan tidak bisa langsung diikuti kata benda tanpa partikel."
        },
        {
          id: "b2-p2",
          title: "この / その / あの [Benda] は ～ です (Benda ini / itu adalah...)",
          formula: "この / その / あの + [Nama Benda] は [Pemilik / Keterangan] です",
          meaning: "Menunjuk benda secara spesifik langsung di depan kata bendanya.",
          explanation: "Berbeda dari kore/sore/are, 「この/その/あの」 WAJIB langsung diikuti kata benda.",
          examples: [
            {
              kanji: "この本は私のです。",
              kana: "このほんは わたしのです。",
              romaji: "Kono hon wa watashi no desu.",
              arti: "Buku ini adalah milik saya."
            },
            {
              kanji: "あの人はどなたですか。",
              kana: "あのひとは どなたですか。",
              romaji: "Ano hito wa donata desu ka.",
              arti: "Orang yang di sana itu siapakah beliau?"
            }
          ],
          notes: "Pada kalimat 'Kono hon wa watashi no desu', kata benda 'hon' di belakang 'watashi no' dihilangkan karena konteks sudah jelas."
        },
        {
          id: "b2-p3",
          title: "そうです / そうじゃありません (Menjawab konfirmasi)",
          formula: "はい、そうです / いいえ、そうじゃありません",
          meaning: "Digunakan untuk membenarkan atau menyangkal pertanyaan penegasan.",
          explanation: "Digunakan saat pertanyaan berupa 'Apakah benda itu adalah X?'.",
          examples: [
            {
              kanji: "それはテレホンカードですか。…はい、そうです。",
              kana: "それは テレホンカードですか。…はい、そうです。",
              romaji: "Sore wa terehon kaado desu ka. ...Hai, sou desu.",
              arti: "Apakah itu kartu telepon? ...Ya, benar."
            },
            {
              kanji: "これは辞書ですか。…いいえ、違います。",
              kana: "これは じしょですか。…いいえ、ちがいます。",
              romaji: "Kore wa jisho desu ka. ...Iie, chigaimasu.",
              arti: "Apakah ini kamus? ...Bukan, keliru/berbeda."
            }
          ],
          notes: "「違います」 (chigaimasu) sangat sering digunakan dalam bahasa Jepang untuk menyatakan sangkalan halus."
        },
        {
          id: "b2-p4",
          title: "Pertanyaan Pilihan: [Pilihan 1] ですか、[Pilihan 2] ですか",
          formula: "[Pilihan 1] ですか、[Pilihan 2] ですか",
          meaning: "Menanyakan pilihan antara dua hal atau lebih (Apakah A atau B?).",
          explanation: "Jawaban TIDAK menggunakan 'Hai' atau 'Iie', melainkan langsung menyebutkan pilihan yang benar.",
          examples: [
            {
              kanji: "これは「９」ですか、「７」ですか。…「９」です。",
              kana: "これは「きゅう」ですか、「なな」ですか。…「きゅう」です。",
              romaji: "Kore wa 'kyuu' desu ka, 'nana' desu ka. ...'Kyuu' desu.",
              arti: "Apakah ini angka 9 atau 7? ...Ini angka 9."
            }
          ],
          notes: "Jawablah dengan langsung menyebutkan opsinya: '[Opsi yang benar] です'."
        }
      ]
    },
    {
      bab: 3,
      title: "Tempat, Arah & Keberadaan Fasilitas",
      summary: "Menguasai penunjukan lokasi (Koko, Soko, Asoko), penunjukan arah sopan (Kochira, Sochira, Achira), harga uang, dan negara asal produk.",
      patterns: [
        {
          id: "b3-p1",
          title: "ここ / そこ / あそこ / どこ (Di sini, Di situ, Di sana, Di mana)",
          formula: "ここ / そこ / あそこ は [Tempat / Ruangan] です",
          meaning: "Menunjukkan keberadaan lokasi fisik suatu tempat.",
          explanation: "「ここ」 (dekat pembicara), 「そこ」 (dekat lawan bicara), 「あそこ」 (jauh dari keduanya), 「どこ」 (kata tanya: di mana).",
          examples: [
            {
              kanji: "ここは教室です。",
              kana: "ここは きょうしつです。",
              romaji: "Koko wa kyoushitsu desu.",
              arti: "Di sini adalah ruang kelas."
            },
            {
              kanji: "トイレはどこですか。…あそこです。",
              kana: "トイレは どこですか。…あそこです。",
              romaji: "Toire wa doko desu ka. ...Asoko desu.",
              arti: "Toilet di mana? ...Di sebelah sana."
            }
          ],
          notes: "Susunan '[Fasilitas / Orang] は [Tempat] です' juga sangat lazim digunakan (contoh: トイレはあそこです, ミラーさんは事務所です)."
        },
        {
          id: "b3-p2",
          title: "こちら / そちら / あちら / どちら (Arah & Ragam Hormat)",
          formula: "こちら / そちら / あちら / どちら",
          meaning: "Bentuk sopan untuk menunjuk arah, lokasi tempat, institusi, atau negara seseorang.",
          explanation: "Merupakan padanan sopan (polite equivalent) dari koko, soko, asoko, doko. Sering digunakan dalam pelayanan toko atau percakapan formal.",
          examples: [
            {
              kanji: "エレベーターはどちらですか。…あちらです。",
              kana: "エレベーターは どちらですか。…あちらです。",
              romaji: "Erebeetaa wa dochira desu ka. ...Achira desu.",
              arti: "Lift ada di arah mana? ...Di sebelah sana."
            },
            {
              kanji: "お国はどちらですか。…インドネシアです。",
              kana: "おくには どちらですか。…インドネシアです。",
              romaji: "Okuni wa dochira desu ka. ...Indonesia desu.",
              arti: "Negara asal Anda dari mana? ...Indonesia."
            }
          ],
          notes: "Menanyakan asal negara atau perusahaan seseorang dengan 'dochira' terdengar jauh lebih sopan daripada 'doko'."
        },
        {
          id: "b3-p3",
          title: "[Negara / Perusahaan] の [Produk / Barang] (Asal Buatan Produk / Merek)",
          formula: "[Negara Pembuat / Merek Perusahaan] の [Barang / Produk]",
          meaning: "Menyatakan negara pembuat atau merek dari suatu barang.",
          explanation: "Kata tanya yang digunakan adalah 「どこの」 (doko no = buatan mana/merek apa).",
          examples: [
            {
              kanji: "これは日本の車です。",
              kana: "これは にほんの くるまです。",
              romaji: "Kore wa Nihon no kuruma desu.",
              arti: "Ini adalah mobil buatan Jepang."
            },
            {
              kanji: "これはどこのカメラですか。…ソニーのカメラです。",
              kana: "これは どこの カメラですか。…ソニーの カメラです。",
              romaji: "Kore wa doko no kamera desu ka. ...Sonii no kamera desu.",
              arti: "Ini kamera buatan mana? ...Kamera merek Sony."
            }
          ],
          notes: "Bisa berarti asal negara produk (Nihon no) atau merek perusahaan (Toyota no)."
        }
      ]
    },
    {
      bab: 4,
      title: "Waktu, Jam, Jadwal & Kata Kerja Dasar",
      summary: "Menyatakan jam & menit, partikel waktu [に], durasi dari-sampai [から・まで], serta konjugasi kata kerja bentuk sopan (masu, masen, mashita, masendeshita).",
      patterns: [
        {
          id: "b4-p1",
          title: "今 ～時 ～分 です (Menyatakan Jam dan Menit)",
          formula: "今 [Angka] 時 [Angka] 分 です",
          meaning: "Menyatakan waktu atau jam saat ini.",
          explanation: "Jam menggunakan sufiks 「～時」 (ji), menit menggunakan sufiks 「～分」 (fun / pun). Untuk menanyakan jam: 「何時 (nan-ji)」.",
          examples: [
            {
              kanji: "今何時ですか。…午前７時半です。",
              kana: "いま なんじですか。…ごぜん しちじはんです。",
              romaji: "Ima nan-ji desu ka. ...Gozen shichi-ji han desu.",
              arti: "Sekarang jam berapa? ...Pukul 07.30 pagi."
            },
            {
              kanji: "東京は今午前４時です。",
              kana: "とうきょうは いま ごぜん よじです。",
              romaji: "Toukyou wa ima gozen yo-ji desu.",
              arti: "Di Tokyo sekarang pukul 4 pagi."
            }
          ],
          notes: "Hati-hati pengucapan jam 4 (yo-ji, BUKAN yon-ji), jam 7 (shichi-ji), dan jam 9 (ku-ji, BUKAN kyuu-ji)."
        },
        {
          id: "b4-p2",
          title: "KK ます / ません / ました / ませんでした (Konjugasi Waktu Kata Kerja)",
          formula: "[Kata Kerja Bentuk Masu / Masen / Mashita / Masendeshita]",
          meaning: "Menyatakan perbuatan di masa sekarang, masa depan, atau masa lampau secara sopan.",
          explanation: "ます (sekarang/kebiasaan positif), ません (sekarang/kebiasaan negatif), ました (lampau positif), ませんでした (lampau negatif).",
          examples: [
            {
              kanji: "私は毎朝６時に起きます。",
              kana: "わたしは まいあさ ろくじに おきます。",
              romaji: "Watashi wa maiasa roku-ji ni okimasu.",
              arti: "Saya bangun jam 6 setiap pagi."
            },
            {
              kanji: "昨日の晩勉強しませんでした。",
              kana: "きのうのばん べんきょうしませんでした。",
              romaji: "Kinou no ban benkyou shimasendeshita.",
              arti: "Tadi malam saya tidak belajar."
            }
          ],
          notes: "Bahasa Jepang tidak memiliki bentuk future terpisah; bentuk 'masu' dipakai untuk rutinitas saat ini sekaligus niat di masa depan."
        },
        {
          id: "b4-p3",
          title: "Waktu に KK (Partikel Penanda Waktu Tertentu)",
          formula: "[Waktu Bertanggal/Berangka] に [Kata Kerja]",
          meaning: "Menunjukkan titik waktu terjadinya suatu perbuatan.",
          explanation: "Wajib menggunakan 「に」 jika waktu menggunakan angka (jam, tanggal, hari). Waktu relatif (seperti kinou, kyou, ashita, maasa) TIDAK menggunakan partikel に.",
          examples: [
            {
              kanji: "毎朝７時に朝ご飯を食べます。",
              kana: "まいあさ しちじに あさごはんを たべます。",
              romaji: "Maiasa shichi-ji ni asagohan o tabemasu.",
              arti: "Setiap pagi saya sarapan pada jam 7."
            },
            {
              kanji: "日曜日に奈良へ行きました。",
              kana: "にちようびに ならへ いきました。",
              romaji: "Nichiyoubi ni Nara e ikimashita.",
              arti: "Pada hari Minggu saya pergi ke Nara."
            }
          ],
          notes: "Jangan pasang に setelah: 今日 (hari ini), 明日 (besok), 昨日 (kemarin), 今 (sekarang), 毎日 (setiap hari)."
        },
        {
          id: "b4-p4",
          title: "～から ～まで (Dari... Sampai...)",
          formula: "[Titik Awal] から [Titik Akhir] まで",
          meaning: "Menyatakan rentang waktu, periode jam, atau batas awal dan akhir tempat.",
          examples: [
            {
              kanji: "銀行は９時から３時までです。",
              kana: "ぎんこうは くじから さんじまでです。",
              romaji: "Ginkou wa ku-ji kara san-ji made desu.",
              arti: "Bank buka dari jam 9 sampai jam 3."
            },
            {
              kanji: "昼休みは１２時からです。",
              kana: "ひるやすみは じゅうにじからです。",
              romaji: "Hiruyasumi wa juuni-ji kara desu.",
              arti: "Istirahat siang mulai dari jam 12."
            }
          ],
          notes: "Bisa digunakan terpisah: hanya '～から' saja atau hanya '～まで' saja."
        }
      ]
    },
    {
      bab: 5,
      title: "Arah Gerakan, Transportasi & Teman Melakukan Aksi",
      summary: "Kata kerja perpindahan (pergi, datang, pulang) dengan partikel arah [へ], partikel sarana/alat transportasi [で], dan partikel rekan [と].",
      patterns: [
        {
          id: "b5-p1",
          title: "Tempat へ 行きます / 来ます / 帰ります (Partikel Arah Tujuan)",
          formula: "[Tempat Tujuan] へ 行きます / 来ます / 帰ります",
          meaning: "Pergi, datang, atau pulang menuju suatu lokasi tujuan.",
          explanation: "Partikel 「へ」 ditulis dengan huruf hiragana 'he' namun dilafalkan 'e' ketika berfungsi sebagai penunjuk arah tujuan.",
          examples: [
            {
              kanji: "私は京都へ行きます。",
              kana: "わたしは きょうとへ いきます。",
              romaji: "Watashi wa Kyouto e ikimasu.",
              arti: "Saya akan pergi ke Kyoto."
            },
            {
              kanji: "５時にうちへ帰ります。",
              kana: "ごじに うちへ かえります。",
              romaji: "Go-ji ni uchi e kaerimasu.",
              arti: "Saya pulang ke rumah pada jam 5."
            },
            {
              kanji: "どこへも行きません。",
              kana: "どこへも いきません。",
              romaji: "Doko e mo ikimasen.",
              arti: "Saya tidak pergi ke mana pun."
            }
          ],
          notes: "Bentuk negatif total: 'Kata tanya + partikel (へ/も) + bentuk negatif' berarti tidak ke mana pun / tidak siapa pun."
        },
        {
          id: "b5-p2",
          title: "Kendaraan で 行きます (Partikel Sarana Transportasi)",
          formula: "[Kendaraan / Sarana] で [Kata Kerja Perpindahan]",
          meaning: "Menunjukkan sarana transportasi atau alat yang digunakan untuk bepergian.",
          explanation: "Partikel 「で」 (de) berfungsi menandai sarana atau alat perantara.",
          examples: [
            {
              kanji: "電車で会社へ行きます。",
              kana: "でんしゃで かいしゃへ いきます。",
              romaji: "Densha de kaisha e ikimasu.",
              arti: "Saya pergi ke kantor dengan kereta."
            },
            {
              kanji: "歩いてうちへ帰りました。",
              kana: "あるいて うちへ かえりました。",
              romaji: "Aruite uchi e kaerimashita.",
              arti: "Saya pulang ke rumah dengan jalan kaki."
            }
          ],
          notes: "Pengecualian penting: Jika 'jalan kaki' gunakan 「歩いて (aruite)」 tanpa partikel で (*aruite de adalah salah)."
        },
        {
          id: "b5-p3",
          title: "Orang と 行きます (Partikel Rekan / Bersama)",
          formula: "[Orang / Rekan] と [Kata Kerja]",
          meaning: "Melakukan suatu kegiatan bersama-sama dengan orang lain.",
          explanation: "Partikel 「と」 (to) berarti 'bersama' atau 'dengan'. Jika sendirian, gunakan frasa 「一人で (hitori de)」.",
          examples: [
            {
              kanji: "家族と日本へ来ました。",
              kana: "かぞくと にほんへ きました。",
              romaji: "Kazoku to Nihon e kimashita.",
              arti: "Saya datang ke Jepang bersama keluarga."
            },
            {
              kanji: "一人で東京へ行きます。",
              kana: "ひとりで とうきょうへ いきます。",
              romaji: "Hitori de Toukyou e ikimasu.",
              arti: "Saya pergi ke Tokyo sendirian."
            }
          ],
          notes: "Pertanyaan menanyakan teman: 「だれと (dare to = bersama siapa)」."
        }
      ]
    },
    {
      bab: 6,
      title: "Objek Tindakan, Tempat Aksi & Ajakan",
      summary: "Memahami kata kerja transitif dengan partikel objek [を], tempat beraktivitas [で], serta frasa ajakan ramah (～ませんか, ～ましょう).",
      patterns: [
        {
          id: "b6-p1",
          title: "[Objek / Benda] を [Kata Kerja Transitif] (Partikel Penanda Objek)",
          formula: "[Objek / Makanan / Minuman / Benda] を [Kata Kerja Transitif]",
          meaning: "Menandai objek langsung penderita tindakan.",
          explanation: "Partikel 「を」 ditulis dengan hiragana 'wo' namun selalu dilafalkan 'o'.",
          examples: [
            {
              kanji: "水を飲みます。",
              kana: "みずを のみます。",
              romaji: "Mizu o nomimasu.",
              arti: "Saya minum air."
            },
            {
              kanji: "毎晩テレビを見ます。",
              kana: "まいばん テレビを みます。",
              romaji: "Maiban terebi o mimasu.",
              arti: "Setiap malam saya menonton televisi."
            },
            {
              kanji: "何を食べましたか。…パンを食べました。",
              kana: "なにを たべましたか。…パンを たべました。",
              romaji: "Nani o tabemashita ka. ...Pan o tabemashita.",
              arti: "Anda makan apa? ...Saya makan roti."
            }
          ],
          notes: "Kata kerja intransitif (seperti ikimasu, nemasu) tidak menggunakan partikel を."
        },
        {
          id: "b6-p2",
          title: "Tempat で KK (Partikel Tempat Terjadinya Aksi)",
          formula: "[Tempat Aktivitas] で [Kata Kerja Tindakan]",
          meaning: "Menunjukkan tempat di mana suatu kegiatan atau aksi aktif berlangsung.",
          explanation: "Bedakan: 「で」 untuk tempat melakukan kegiatan, sedangkan 「に」 untuk titik keberadaan diam (Bab 10).",
          examples: [
            {
              kanji: "図書館で本を読みます。",
              kana: "としょかんで ほんを よみます。",
              romaji: "Toshokan de hon o yomimasu.",
              arti: "Saya membaca buku di perpustakaan."
            },
            {
              kanji: "駅で新聞を買いました。",
              kana: "えきで しんぶんを かいました。",
              romaji: "Eki de shinbun o kaimashita.",
              arti: "Saya membeli koran di stasiun."
            }
          ],
          notes: "Jika ada aksi aktif (belajar, makan, beli), tempatnya SELALU ditandai dengan partikel で."
        },
        {
          id: "b6-p3",
          title: "一緒に KK ませんか (Maukah Melakukan Bersama? - Ajakan Sopan)",
          formula: "[Kata Kerja Bentuk Masu (buang masu)] + ませんか",
          meaning: "Mengajak lawan bicara untuk melakukan sesuatu bersama secara halus dan penuh pertimbangan.",
          explanation: "Bentuk pertanyaan negatif ini memberi ruang bagi lawan bicara untuk menolak dengan nyaman jika berhalangan.",
          examples: [
            {
              kanji: "一緒に京都へ行きませんか。…ええ、行きましょう。",
              kana: "いっしょに きょうとへ いきませんか。…ええ、いきましょう。",
              romaji: "Issho ni Kyouto e ikimasen ka. ...Ee, ikimashou.",
              arti: "Maukah pergi ke Kyoto bersama-sama? ...Ya, ayo kita pergi."
            },
            {
              kanji: "お茶を飲みませんか。",
              kana: "おちゃを のみませんか。",
              romaji: "Ocha o nomimasen ka.",
              arti: "Maukah minum teh bersama?"
            }
          ],
          notes: "Jawaban menyetujui: 「ええ、[KK] ましょう」. Jawaban menolak halus: 「すみません、ちょっと… (Maaf, agak repot...)」."
        },
        {
          id: "b6-p4",
          title: "KK ましょう / ましょうか (Ayo KK / Mau Kubantu?)",
          formula: "[Kata Kerja Bentuk Masu (buang masu)] + ましょう / ましょうか",
          meaning: "「～ましょう」 = Mari / Ayo kita lakukan. 「～ましょうか」 = Bagaimana jika saya bantu lakukan?",
          examples: [
            {
              kanji: "ちょっと休みましょう。",
              kana: "ちょっと やすみましょう。",
              romaji: "Chotto yasumimashou.",
              arti: "Ayo kita istirahat sebentar."
            },
            {
              kanji: "手伝いましょうか。…ありがとうございます。",
              kana: "てつだいましょうか。…ありがとうございます。",
              romaji: "Tetsudaimashou ka. ...Arigatou gozaimasu.",
              arti: "Boleh saya bantu? ...Terima kasih banyak."
            }
          ],
          notes: "Gunakan 'mashou ka' saat menawarkan bantuan inisiatif sendiri kepada orang lain."
        }
      ]
    },
    {
      bab: 7,
      title: "Alat, Bahasa Pengantar & Transaksi Memberi-Menerima",
      summary: "Partikel sarana/alat/bahasa [で], ungkapan 'sudah / belum' (mou/mada), dan pola pertukaran barang (agemasu, moraimasu).",
      patterns: [
        {
          id: "b7-p1",
          title: "Alat / Bahasa で KK (Alat / Bahasa Pengantar)",
          formula: "[Alat / Perkakas / Bahasa] で [Kata Kerja]",
          meaning: "Melakukan tindakan dengan perantara suatu alat, instrumen, atau bahasa tertentu.",
          examples: [
            {
              kanji: "箸でご飯を食べます。",
              kana: "はしで ごはんを たべます。",
              romaji: "Hashi de gohan o tabemasu.",
              arti: "Saya makan nasi dengan sumpit."
            },
            {
              kanji: "日本語でレポートを書きます。",
              kana: "にほんごで レポートを かきます。",
              romaji: "Nihongo de repooto o kakimasu.",
              arti: "Saya menulis laporan dalam bahasa Jepang."
            },
            {
              kanji: "「Arigatou」は英語で何ですか。…「Thank you」です。",
              kana: "「ありがとう」は えいごで なんですか。…「Thank you」です。",
              romaji: "'Arigatou' wa Eigo de nan desu ka. ...'Thank you' desu.",
              arti: "Kata 'Arigatou' dalam bahasa Inggris apa? ...'Thank you'."
            }
          ],
          notes: "Gunakan pola ini untuk menanyakan terjemahan suatu kata ke bahasa lain."
        },
        {
          id: "b7-p2",
          title: "[Penerima] に [Barang] を あげます (Memberi kepada Orang Lain)",
          formula: "[Penerima / Orang Lain] に [Barang / Benda] を あげます / 貸します / 教えます",
          meaning: "Subjek memberikan barang, meminjamkan, atau mengajarkan sesuatu kepada orang lain.",
          explanation: "Partikel 「に」 menandai pihak penerima.",
          examples: [
            {
              kanji: "私は木村さんに花をあげました。",
              kana: "わたしは きむらさんに はなを あげました。",
              romaji: "Watashi wa Kimura-san ni hana o agemashita.",
              arti: "Saya memberikan bunga kepada Nona Kimura."
            },
            {
              kanji: "山田先生は学生に日本語を教えます。",
              kana: "やまだせんせいは がくせいに にほんごを おしえます。",
              romaji: "Yamada-sensei wa gakusei ni Nihongo o oshiemasu.",
              arti: "Guru Yamada mengajarkan bahasa Jepang kepada siswa."
            }
          ],
          notes: "PENTING: Kata 'agemasu' TIDAK BOLEH digunakan jika penerimanya adalah diri saya sendiri (pembicara)."
        },
        {
          id: "b7-p3",
          title: "[Pemberi] に/から [Barang] を もらいます (Menerima dari Orang Lain)",
          formula: "[Pemberi / Orang Lain] に / から [Barang / Benda] を もらいます / 借ります / 習います",
          meaning: "Menerima barang, meminjam, atau mempelajari sesuatu dari orang lain.",
          explanation: "Partikel 「に」 atau 「から」 menandai sumber atau pihak pemberi.",
          examples: [
            {
              kanji: "私は母にプレゼントをもらいました。",
              kana: "わたしは ははに プレゼントを もらいました。",
              romaji: "Watashi wa haha ni purezento o moraimashita.",
              arti: "Saya menerima hadiah dari ibu."
            },
            {
              kanji: "会社から給料をもらいます。",
              kana: "かいしゃから きゅうりょうを もらいます。",
              romaji: "Kaisha kara kyuuryou o moraimasu.",
              arti: "Saya menerima gaji dari perusahaan."
            }
          ],
          notes: "Jika pemberi adalah institusi/organisasi (seperti bank, sekolah, perusahaan), partikel 「から」 lebih dianjurkan daripada 「に」."
        },
        {
          id: "b7-p4",
          title: "もう KK ました / まだです (Sudah... / Belum)",
          formula: "もう [Kata Kerja Bentuk Mashita] か",
          meaning: "Menanyakan apakah suatu perbuatan sudah selesai dilakukan atau belum.",
          explanation: "Jika sudah: 「はい、もう [KK] ました」. Jika belum: 「いいえ、まだです」.",
          examples: [
            {
              kanji: "もう荷物を送りましたか。…はい、もう送りました。",
              kana: "もう にもつを おくりましたか。…はい、もう おくりました。",
              romaji: "Mou nimotsu o okurimashita ka. ...Hai, mou okurimashita.",
              arti: "Apakah paketnya sudah dikirim? ...Ya, sudah dikirim."
            },
            {
              kanji: "もう昼ご飯を食べましたか。…いいえ、まだです。",
              kana: "もう ひるごはんを たべましたか。…いいえ、まだです。",
              romaji: "Mou hirugohan o tabemashita ka. ...Iie, mada desu.",
              arti: "Apakah sudah makan siang? ...Belum, belum makan."
            }
          ],
          notes: "JANGAN menjawab dengan bentuk negatif lampau (*iie, tabemasendeshita), karena itu berarti 'tidak makan sama sekali', bukan 'belum'."
        }
      ]
    },
    {
      bab: 8,
      title: "Kata Sifat: I-Keiyoushi & Na-Keiyoushi",
      summary: "Mengenal dua golongan kata sifat dalam bahasa Jepang (berakhiran -i dan -na), fungsi predikatif & modifikasi kata benda, serta tingkat intensitas (totemo / amari).",
      patterns: [
        {
          id: "b8-p1",
          title: "[Subjek / Benda / Orang] は [Kata Sifat] です (Kalimat Predikat Sifat)",
          formula: "[Subjek / Benda / Tempat / Orang] は [Kata Sifat -i / Kata Sifat -na] です",
          meaning: "Mendeskripsikan kondisi atau karakteristik suatu hal.",
          explanation: "Kata sifat berakhiran -i langsung ditempeli です (contoh: takai desu). Kata sifat -na TIDAK menyertakan suku kata 'na' saat menjadi predikat (contoh: shizuka desu).",
          examples: [
            {
              kanji: "富士山は高いです。",
              kana: "ふじさんは たかいです。",
              romaji: "Fujisan wa takai desu.",
              arti: "Gunung Fuji tinggi."
            },
            {
              kanji: "この町は静かです。",
              kana: "このまちは しずかです。",
              romaji: "Kono machi wa shizuka desu.",
              arti: "Kota ini tenang/sunyi."
            }
          ],
          notes: "Bentuk negatif: -i keiyoushi berubah menjadi 「～くないです」 (takai -> takakunai desu). -na keiyoushi berubah menjadi 「～じゃありません」 (shizuka -> shizuka ja arimasen)."
        },
        {
          id: "b8-p2",
          title: "Menerangkan Sifat Benda: [Kata Sifat] + [Benda / Orang]",
          formula: "[-i Keiyoushi] + [Benda/Orang] / [-na Keiyoushi] + な + [Benda/Orang]",
          meaning: "Kata sifat yang diletakkan langsung di depan kata benda untuk menerangkan sifat benda tersebut.",
          explanation: "-i keiyoushi langsung menempel. -na keiyoushi WAJIB memasang partikel 「な」 (na) di antaranya.",
          examples: [
            {
              kanji: "京都は古い町です。",
              kana: "きょうとは ふるいまちです。",
              romaji: "Kyouto wa furui machi desu.",
              arti: "Kyoto adalah kota kuno."
            },
            {
              kanji: "サントスさんは親切な人です。",
              kana: "サントスさんは しんせつな ひとです。",
              romaji: "Santosu-san wa shinsetsu na hito desu.",
              arti: "Tuan Santos adalah orang yang ramah."
            }
          ],
          notes: "Pengecualian: 'Kirei' dan 'Yuumei' berakhiran bunyi -i tapi termasuk kelompok NA-keiyoushi: 「きれいな花」, 「有名な人」."
        },
        {
          id: "b8-p3",
          title: "とても (Sangat) & あまり (Tidak Begitu)",
          formula: "とても + [Bentuk Positif] / あまり + [Bentuk Negatif]",
          meaning: "Kata keterangan derajat intensitas sifat.",
          examples: [
            {
              kanji: "日本はとても便利です。",
              kana: "にほんは とても べんりです。",
              romaji: "Nihon wa totemo benri desu.",
              arti: "Jepang sangat praktis."
            },
            {
              kanji: "日本の食べ物はあまり高くないです。",
              kana: "にほんの たべものは あまり たかくないです。",
              romaji: "Nihon no tabemono wa amari takakunai desu.",
              arti: "Makanan Jepang tidak begitu mahal."
            }
          ],
          notes: "Ingat rumus mutlak: 「あまり」 SELALU berpasangan dengan predikat negatif."
        },
        {
          id: "b8-p4",
          title: "[Subjek] は どんな [Kategori / Benda] ですか (Yang Seperti Apa?)",
          formula: "[Subjek] は どんな [Kategori Benda / Orang] ですか",
          meaning: "Menanyakan deskripsi atau karakter spesifik dari suatu hal dalam kategorinya.",
          examples: [
            {
              kanji: "奈良はどんな町ですか。…静かな町です。",
              kana: "ならは どんな まちですか。…しずかな まちです。",
              romaji: "Nara wa donna machi desu ka. ...Shizuka na machi desu.",
              arti: "Nara itu kota yang seperti apa? ...Kota yang tenang."
            }
          ],
          notes: "Jawaban harus berupa: '[Kata Sifat] + [Kata Benda] です'."
        }
      ]
    },
    {
      bab: 9,
      title: "Kesukaan, Kemahiran, Kepemilikan & Alasan (Kara)",
      summary: "Menyatakan hal yang disukai/dibenci (suki/kirai), kemahiran (jouzu/heta), kepemilikan/keberadaan (arimasu/wakarimasu) dengan partikel [が], serta anak kalimat sebab-akibat [から].",
      patterns: [
        {
          id: "b9-p1",
          title: "[Hal / Benda] が 好きです / 嫌いです (Kesukaan / Ketidaksukaan)",
          formula: "[Hal / Benda / Makanan / Musik] が 好きです / 嫌いです",
          meaning: "Menyatakan kesukaan atau ketidaksukaan terhadap suatu hal.",
          explanation: "Meskipun dalam bahasa Indonesia berupa objek penderita, dalam tata bahasa Jepang objek kesukaan dianggap sebagai pemicu perasaan dan ditandai dengan partikel 「が」 (ga), BUKAN 「を」.",
          examples: [
            {
              kanji: "私は日本料理が好きです。",
              kana: "わたしは にほんりょうりが すきです。",
              romaji: "Watashi wa Nihon ryouri ga suki desu.",
              arti: "Saya suka masakan Jepang."
            },
            {
              kanji: "カリナさんは絵が上手です。",
              kana: "カリナさんは えが じょうずです。",
              romaji: "Karina-san wa e ga jouzu desu.",
              arti: "Karina mahir menggambar."
            }
          ],
          notes: "Jangan puji diri sendiri dengan kata 'jouzu'; gunakan kata 'toku' (得意) jika menyatakan keahlian diri sendiri."
        },
        {
          id: "b9-p2",
          title: "[Bahasa / Hal] が わかります / [Barang / Janji] が あります (Paham / Punya)",
          formula: "[Bahasa / Pelajaran] が わかります / [Uang / Kendaraan / Janji] が あります",
          meaning: "Menyatakan pemahaman bahasa/hal atau kepemilikan benda.",
          explanation: "Objek dari kata kerja 'wakarimasu' (mengerti/paham) dan 'arimasu' (memiliki/ada) selalu ditandai dengan partikel 「が」.",
          examples: [
            {
              kanji: "私は日本語が少しわかります。",
              kana: "わたしは にほんごが すこし わかります。",
              romaji: "Watashi wa Nihongo ga sukoshi wakarimasu.",
              arti: "Saya sedikit mengerti bahasa Jepang."
            },
            {
              kanji: "車がありますか。…いいえ、ありません。",
              kana: "くるまが ありますか。…いいえ、ありません。",
              romaji: "Kuruma ga arimasu ka. ...Iie, arimasen.",
              arti: "Apakah Anda punya mobil? ...Tidak, tidak punya."
            }
          ],
          notes: "'Arimasu' di sini bermakna 'memiliki / mempunyai'."
        },
        {
          id: "b9-p3",
          title: "[Alasan] から、[Akibat / Tindakan] (Karena... Maka...)",
          formula: "[Kalimat Penyebab] から、[Kalimat Akibat]",
          meaning: "Menghubungkan dua kalimat yang menyatakan hubungan sebab dan akibat.",
          explanation: "Partikel penghubung 「から」 diletakkan di belakang kalimat penyebab.",
          examples: [
            {
              kanji: "時間がありませんから、タクシーで行きます。",
              kana: "じかんが ありませんから、タクシーで いきます。",
              romaji: "Jikan ga arimasen kara, takushii de ikimasu.",
              arti: "Karena tidak ada waktu, saya pergi naik taksi."
            },
            {
              kanji: "どうして朝ご飯を食べませんでしたか。…時間がありませんでしたから。",
              kana: "どうして あさごはんを たべませんでしたか。…じかんが ありませんでしたから。",
              romaji: "Doushite asagohan o tabemasendeshita ka. ...Jikan ga arimasendeshita kara.",
              arti: "Mengapa Anda tadi tidak sarapan? ...Karena tadi tidak ada waktu."
            }
          ],
          notes: "Kata tanya untuk menanyakan alasan adalah 「どうして (doushite = mengapa)」."
        }
      ]
    },
    {
      bab: 10,
      title: "Keberadaan Benda & Makhluk Hidup (Arimasu / Imasu)",
      summary: "Membedakan keberadaan benda mati (arimasu) dan makhluk bernyawa (imasu), posisi tata ruang (atas, bawah, dalam, luar, dll), serta penghubung [や].",
      patterns: [
        {
          id: "b10-p1",
          title: "[Tempat] に [Benda / Orang] が あります / います (Keberadaan Benda & Makhluk Hidup)",
          formula: "[Tempat] に [Benda Mati] が あります / [Orang / Hewan] が います",
          meaning: "Menyatakan keberadaan suatu benda mati atau makhluk hidup di lokasi tertentu.",
          explanation: "Gunakan 「あります」 (arimasu) untuk benda mati dan tanaman. Gunakan 「います」 (imasu) untuk manusia dan hewan.",
          examples: [
            {
              kanji: "机の上に本があります。",
              kana: "つくえの うえに ほんが あります。",
              romaji: "Tsukue no ue ni hon ga arimasu.",
              arti: "Di atas meja ada buku."
            },
            {
              kanji: "あそこに男の人がいます。",
              kana: "あそこに おとこのひとが います。",
              romaji: "Asoko ni otoko no hito ga imasu.",
              arti: "Di sebelah sana ada seorang pria."
            }
          ],
          notes: "Partikel [に] menandai titik keberadaan tempat diam."
        },
        {
          id: "b10-p2",
          title: "[Benda / Orang] は [Tempat] に あります / います (Posisi Lokasi Berada)",
          formula: "[Benda / Orang / Fasilitas] は [Tempat / Posisi] に あります / います",
          meaning: "Membuat subjek/benda sebagai topik dan memberitahukan posisi keberadaannya.",
          examples: [
            {
              kanji: "東京ディズニーランドは千葉県にあります。",
              kana: "とうきょうディズニーランドは ちばけんに あります。",
              romaji: "Toukyou Dizuniirando wa Chiba-ken ni arimasu.",
              arti: "Tokyo Disneyland berada di Prefektur Chiba."
            },
            {
              kanji: "ミラーさんは事務所にいます。",
              kana: "ミラーさんは じむしょに います。",
              romaji: "Miraa-san wa jimusho ni imasu.",
              arti: "Tuan Miller ada di kantor."
            }
          ],
          notes: "Pola ini fokus pada lokasi dari benda yang sudah diketahui."
        },
        {
          id: "b10-p3",
          title: "[Benda 1] や [Benda 2] [など] (Menyebutkan Contoh Benda: Dan Lain-lain)",
          formula: "[Benda 1] や [Benda 2] (など)",
          meaning: "Menghubungkan kata benda secara tidak lengkap (menyebutkan beberapa contoh representatif dari sekian banyak).",
          explanation: "Berbeda dari partikel 「と」 yang menyebutkan semua benda secara pasti (definitif), partikel 「や」 menyatakan bahwa masih ada benda-benda lainnya.",
          examples: [
            {
              kanji: "箱の中に写真や手紙があります。",
              kana: "はこの なかに しゃしんや てがみが あります。",
              romaji: "Hako no naka ni shashin ya tegami ga arimasu.",
              arti: "Di dalam kotak ada foto, surat, dan lain-lain."
            }
          ],
          notes: "Dapat ditambahkan kata 「など (nado)」 di ujungnya untuk memperjelas makna 'dan sebagainya'."
        }
      ]
    },
    {
      bab: 11,
      title: "Bilangan, Satuan Hitung & Jangka Waktu",
      summary: "Cara meletakkan satuan hitung dalam kalimat, periode frekuensi (seminggu X kali), durasi lama waktu (jam/hari), serta pembatas [だけ].",
      patterns: [
        {
          id: "b11-p1",
          title: "Penempatan Satuan Hitung dalam Kalimat",
          formula: "[Benda] を [Angka + Satuan Hitung] [Kata Kerja]",
          meaning: "Menghitung jumlah objek yang dikenai perbuatan.",
          explanation: "Dalam bahasa Jepang, kata bantu bilangan biasanya diletakkan tepat di depan kata kerja, TANPA partikel pemisah tambahan.",
          examples: [
            {
              kanji: "りんごを４つ買いました。",
              kana: "りんごを よっつ かいました。",
              romaji: "Ringo o yottsu kaimashita.",
              arti: "Saya membeli 4 buah apel."
            },
            {
              kanji: "教室に学生が８人います。",
              kana: "きょうしつに がくせいが はちにん います。",
              romaji: "Kyoushitsu ni gakusei ga hachi-nin imasu.",
              arti: "Di ruang kelas ada 8 orang mahasiswa."
            }
          ],
          notes: "Urutan umum: [Kata Benda] + [Partikel] + [Bilangan] + [Kata Kerja]."
        },
        {
          id: "b11-p2",
          title: "Periode に ～回 KK (Frekuensi Kegiatan)",
          formula: "[Rentang Waktu] に [Jumlah Kali] [Kata Kerja]",
          meaning: "Menyatakan seberapa sering suatu perbuatan dilakukan dalam kurun waktu tertentu.",
          examples: [
            {
              kanji: "１か月に２回映画を見ます。",
              kana: "いっかげつに にかい えいがを みます。",
              romaji: "Ikkagetsu ni ni-kai eiga o mimasu.",
              arti: "Dalam sebulan saya menonton bioskop sebanyak 2 kali."
            },
            {
              kanji: "１週間に１回テニスをします。",
              kana: "いっしゅうかんに いっかい テニスを します。",
              romaji: "Isshuukan ni ikkai tenisu o shimasu.",
              arti: "Dalam seminggu saya bermain tenis 1 kali."
            }
          ],
          notes: "Partikel [に] di sini berfungsi sebagai tolok ukur pembagi rentang waktu."
        },
        {
          id: "b11-p3",
          title: "Durasi Waktu & どのくらい (Berapa Lama Waktu Tempuh)",
          formula: "[Titik Awal] から [Titik Akhir] まで [Kendaraan] で [Durasi] かかります",
          meaning: "Menyatakan durasi lama waktu yang dihabiskan untuk menempuh perjalanan.",
          examples: [
            {
              kanji: "東京から大阪まで新幹線で２時間半かかります。",
              kana: "とうきょうから おおさかまで しんかんせんで にじかんはん かかります。",
              romaji: "Toukyou kara Oosaka made shinkansen de ni-jikan-han kakarimasu.",
              arti: "Dari Tokyo sampai Osaka memakan waktu 2,5 jam dengan Shinkansen."
            }
          ],
          notes: "Kata kerja 「かかります」 (kakarimasu) berarti 'memakan waktu' atau 'menghabiskan biaya'."
        },
        {
          id: "b11-p4",
          title: "～だけ (Hanya / Cuma)",
          formula: "[Kata Benda / Satuan Hitung] だけ",
          meaning: "Membatasi jumlah bahwa tidak ada hal lain selain yang disebutkan.",
          examples: [
            {
              kanji: "休みは日曜日だけです。",
              kana: "やすみは にちようびだけです。",
              romaji: "Yasumi wa nichiyoubi dake desu.",
              arti: "Libur saya hanya hari Minggu saja."
            }
          ],
          notes: "Berbeda dari shika (yang harus diikuti predikat negatif), 'dake' diikuti predikat positif."
        }
      ]
    },
    {
      bab: 12,
      title: "Bentuk Lampau Sifat/Benda & Komparasi",
      summary: "Konjugasi bentuk lampau kata sifat & kata benda, perbandingan dua hal, pertanyaan alternatif mana yang lebih, dan superlatif (paling / nomor 1).",
      patterns: [
        {
          id: "b12-p1",
          title: "Bentuk Lampau Kata Benda & Kata Sifat",
          formula: "[-i]: ～かったです / ～くなかったです | [-na & Kata Benda]: ～でした / ～じゃありませんでした",
          meaning: "Menceritakan kondisi di masa lampau.",
          examples: [
            {
              kanji: "昨日は雨でした。",
              kana: "きのうは あめでした。",
              romaji: "Kinou wa ame deshita.",
              arti: "Kemarin hujan."
            },
            {
              kanji: "旅行はとても楽しかったです。",
              kana: "りょこうは とても たのしかったです。",
              romaji: "Ryokou wa totemo tanoshikatta desu.",
              arti: "Perjalanan liburannya sangat menyenangkan."
            },
            {
              kanji: "昨日の試験はあまり難しくなかったです。",
              kana: "きのうの しけんは あまり むずかしくなかったです。",
              romaji: "Kinou no shiken wa amari muzukashikunakatta desu.",
              arti: "Ujian kemarin tidak begitu sulit."
            }
          ],
          notes: "Pengecualian penting: Kata 'ii' (bagus) bentuk lampaunya adalah 「よかったです (yokatta desu)」."
        },
        {
          id: "b12-p2",
          title: "[Benda / Orang 1] は [Benda / Orang 2] より [Kata Sifat] です (Perbandingan Dua Hal)",
          formula: "[Benda / Orang 1] は [Benda / Orang 2] より [Kata Sifat] です",
          meaning: "Membandingkan dua objek di mana Benda 1 memiliki sifat yang lebih unggul dibandingkan Benda 2.",
          explanation: "Kata 「より」 (yori) berarti 'daripada'.",
          examples: [
            {
              kanji: "新幹線は飛行機より安いです。",
              kana: "しんかんせんは ひこうきより やすいです。",
              romaji: "Shinkansen wa hikouki yori yasui desu.",
              arti: "Shinkansen lebih murah daripada pesawat terbang."
            },
            {
              kanji: "北海道は九州より広いです。",
              kana: "ほっかいどうは きゅうしゅうより ひろいです。",
              romaji: "Hokkaidou wa Kyuushuu yori hiroi desu.",
              arti: "Hokkaido lebih luas daripada Kyushu."
            }
          ],
          notes: "Benda yang menjadi tolok ukur pembanding selalu ditempeli kata 'yori'."
        },
        {
          id: "b12-p3",
          title: "[Pilihan 1] と [Pilihan 2] と どちらが [Kata Sifat] ですか (Memilih Yang Lebih)",
          formula: "[Pilihan 1] と [Pilihan 2] と どちらが [Kata Sifat] ですか",
          meaning: "Menanyakan pilihan antara dua hal: mana yang lebih memiliki sifat tertentu.",
          explanation: "Jawaban menggunakan pola: 「[Benda pilihan] の ほうが [Kata Sifat] です」.",
          examples: [
            {
              kanji: "肉と魚とどちらが好きですか。…魚のほうが好きです。",
              kana: "にくと さかなと どちらが すきですか。…さかなの ほうが すきです。",
              romaji: "Niku to sakana to dochira ga suki desu ka. ...Sakana no hou ga suki desu.",
              arti: "Antara daging dan ikan mana yang lebih Anda sukai? ...Saya lebih suka ikan."
            }
          ],
          notes: "Gunakan kata tanya 'dochira' (bukan 'dore') ketika membandingkan persis dua benda."
        },
        {
          id: "b12-p4",
          title: "[Kategori / Kelompok] [の中] で 何/どこ/だれ が いちばん [Kata Sifat] ですか (Superlatif)",
          formula: "[Kategori / Kelompok] [の中] で [Kata Tanya] が いちばん [Kata Sifat] ですか",
          meaning: "Menanyakan objek yang menempati posisi 'ter-' atau paling nomor satu di antara kelompoknya.",
          examples: [
            {
              kanji: "日本料理の中で何がいちばんおいしいですか。…寿司がいちばんおいしいです。",
              kana: "にほんりょうりのなかで なにが いちばん おいしいですか。…すしが いちばん おいしいです。",
              romaji: "Nihon ryouri no naka de nani ga ichiban oishii desu ka. ...Sushi ga ichiban oishii desu.",
              arti: "Di antara masakan Jepang, apa yang paling enak? ...Sushi yang paling enak."
            }
          ],
          notes: "Kata 「いちばん」 (ichiban) berarti 'nomor satu' atau 'paling'."
        }
      ]
    },
    {
      bab: 13,
      title: "Keinginan (Hoshii & -tai) Serta Tujuan Pergi",
      summary: "Menyatakan keinginan memiliki barang (hoshii), keinginan melakukan aktivitas (KK-tai desu), dan pola pergi dengan tujuan tertentu (e ikimasu).",
      patterns: [
        {
          id: "b13-p1",
          title: "[Barang / Benda] が ほしいです (Ingin Memiliki Barang)",
          formula: "[Barang yang Diinginkan] が ほしいです",
          meaning: "Menyatakan keinginan pembicara untuk memiliki suatu benda fisik.",
          explanation: "Kata 'hoshii' berkonjugasi seperti kata sifat -i (negatif: hoshikunai desu, lampau: hoshikatta desu).",
          examples: [
            {
              kanji: "私は新しいパソコンがほしいです。",
              kana: "わたしは あたらしい パソコンが ほしいです。",
              romaji: "Watashi wa atarashii pasokon ga hoshii desu.",
              arti: "Saya ingin sebuah laptop baru."
            },
            {
              kanji: "今何がいちばんほしいですか。…友達がほしいです。",
              kana: "いま なにが いちばん ほしいですか。…ともだちが ほしいです。",
              romaji: "Ima nani ga ichiban hoshii desu ka. ...Tomodachi ga hoshii desu.",
              arti: "Sekarang apa yang paling Anda inginkan? ...Saya ingin teman."
            }
          ],
          notes: "Pola 'hoshii' HANYA digunakan untuk keinginan pembicara sendiri (orang pertama). Jangan gunakan langsung untuk orang ketiga."
        },
        {
          id: "b13-p2",
          title: "KK [Bentuk Masu (buang masu)] + たいです (Ingin Melakukan Sesuatu)",
          formula: "[Objek] を / が [Kata Kerja Masu (hilangkan masu)] + たいです",
          meaning: "Menyatakan keinginan pembicara untuk melakukan suatu tindakan/perbuatan.",
          explanation: "Partikel penanda objek bisa menggunakan 「を」 atau 「が」.",
          examples: [
            {
              kanji: "日本へ行きたいです。",
              kana: "にほんへ いきたいです。",
              romaji: "Nihon e ikitai desu.",
              arti: "Saya ingin pergi ke Jepang."
            },
            {
              kanji: "冷たいビールが飲みたいです。",
              kana: "つめたい ビールが のみたいです。",
              romaji: "Tsumetai biiru ga nomitai desu.",
              arti: "Saya ingin minum bir dingin."
            }
          ],
          notes: "Bentuk negatif: 「～たくないです」 (ikitakunai desu = tidak ingin pergi). Bentuk lampau: 「～たかったです」."
        },
        {
          id: "b13-p3",
          title: "[Tempat] へ [Tujuan / Kegiatan] に 行きます / 来ます (Tujuan Perjalanan)",
          formula: "[Tempat Tujuan] へ [KK Masu (buang masu) / Nama Kegiatan] に 行きます / 来ます / 帰ります",
          meaning: "Pergi, datang, atau pulang ke suatu tempat untuk tujuan melakukan perbuatan tertentu.",
          explanation: "Partikel 「に」 diletakkan setelah kata kerja/kata benda tujuan aksi.",
          examples: [
            {
              kanji: "デパートへお土産を買いに行きます。",
              kana: "デパートへ おみやげを かいに いきます。",
              romaji: "Depaato e omiyage o kai ni ikimasu.",
              arti: "Saya pergi ke department store untuk membeli oleh-oleh."
            },
            {
              kanji: "日本へ経済の勉強に来ました。",
              kana: "にほんへ けいざいの べんきょうに きました。",
              romaji: "Nihon e keizai no benkyou ni kimashita.",
              arti: "Saya datang ke Jepang untuk belajar ekonomi."
            }
          ],
          notes: "Jika menggunakan kata benda perbuatan (seperti kaimono, ryokou, sanpo): langsung tambahkan に (contoh: kaimono ni ikimasu)."
        }
      ]
    },
    {
      bab: 14,
      title: "Bentuk Te (Te-kei) & Permohonan Tolong",
      summary: "Konjugasi esensial Bentuk Te (Te-kei) untuk kelompok I, II, III, pola permohonan santun (te kudasai), aksi yang sedang berlangsung (te imasu), dan menawarkan bantuan.",
      patterns: [
        {
          id: "b14-p1",
          title: "Konjugasi Kata Kerja Bentuk Te (て形)",
          formula: "Kelompok I (Grup 1), Kelompok II (Grup 2), Kelompok III (Grup 3)",
          meaning: "Perubahan bentuk kata kerja penghubung paling vital dalam bahasa Jepang.",
          explanation: "Grup 1: [i, chi, ri -> tte], [mi, bi, ni -> nde], [ki -> ite], [gi -> ide], [shi -> shite]. Pengecualian: ikimasu -> itte. Grup 2: buang masu + te (tabete). Grup 3: shimasu -> shite, kimasu -> kite.",
          examples: [
            {
              kanji: "書きます → 書いて | 飲みます → 飲んで",
              kana: "かきます → かいて | のみます → のんで",
              romaji: "kakimasu -> kaite | nomimasu -> nonde",
              arti: "menulis -> silakan tulis/sambil menulis | minum -> silakan minum"
            },
            {
              kanji: "食べます → 食べて | します → して",
              kana: "たべます → たべて | します → して",
              romaji: "tabemasu -> tabete | shimasu -> shite",
              arti: "makan -> silakan makan | melakukan -> silakan lakukan"
            }
          ],
          notes: "Bentuk Te adalah fondasi dari puluhan pola kalimat lanjutan di bab-bab berikutnya."
        },
        {
          id: "b14-p2",
          title: "KK てください (Tolong Lakukan... - Permohonan Sopan)",
          formula: "[Kata Kerja Bentuk Te] + ください",
          meaning: "Memohon atau meminta lawan bicara untuk melakukan sesuatu secara sopan.",
          examples: [
            {
              kanji: "ちょっと待ってください。",
              kana: "ちょっと まってください。",
              romaji: "Chotto matte kudasai.",
              arti: "Tolong tunggu sebentar."
            },
            {
              kanji: "ここに名前を書いてください。",
              kana: "ここに なまえを かいてください。",
              romaji: "Koko ni namae o kaite kudasai.",
              arti: "Tolong tulis nama Anda di sini."
            }
          ],
          notes: "Meskipun sopan, hindari menggunakannya kepada atasan/pimpinan untuk perintah kerja resmi."
        },
        {
          id: "b14-p3",
          title: "KK ています (Sedang Melakukan Sesuatu - Progressive)",
          formula: "[Kata Kerja Bentuk Te] + います",
          meaning: "Menyatakan perbuatan yang sedang berlangsung pada saat ini (present continuous).",
          examples: [
            {
              kanji: "ミラーさんは今電話をかけています。",
              kana: "ミラーさんは いま でんわを かけています。",
              romaji: "Miraa-san wa ima denwa o kakete imasu.",
              arti: "Tuan Miller sekarang sedang menelepon."
            },
            {
              kanji: "雨が降っています。",
              kana: "あめが ふっています。",
              romaji: "Ame ga futte imasu.",
              arti: "Sekarang sedang turun hujan."
            }
          ],
          notes: "Perbuatan sedang terjadi sekarang saat diucapkan."
        }
      ]
    },
    {
      bab: 15,
      title: "Izin, Larangan & Keadaan Berkelanjutan",
      summary: "Meminta izin (te mo ii desu ka), larangan tegas (te wa ikemasen), dan fungsi [te imasu] untuk status berkelanjutan (menikah, tinggal, bekerja, kenal).",
      patterns: [
        {
          id: "b15-p1",
          title: "KK てもいいです (Boleh Melakukan... - Pemberian Izin)",
          formula: "[Kata Kerja Bentuk Te] + もいいです (か)",
          meaning: "Menyatakan boleh melakukan sesuatu atau meminta izin (jika diakhiri partikel ka).",
          examples: [
            {
              kanji: "写真を撮ってもいいですか。…はい、いいですよ。",
              kana: "しゃしんを とっても いいですか。…はい、いいですよ。",
              romaji: "Shashin o totte mo ii desu ka. ...Hai, ii desu yo.",
              arti: "Bolehkah saya mengambil foto? ...Ya, silakan (boleh)."
            },
            {
              kanji: "たばこを吸ってもいいですか。…すみません、ちょっと…",
              kana: "たばこを すっても いいですか。…すみません、ちょっと…",
              romaji: "Tabako o sutte mo ii desu ka. ...Sumimasen, chotto...",
              arti: "Bolehkah saya merokok? ...Maaf, jangan (tidak boleh)."
            }
          ],
          notes: "Jika menolak permohonan izin orang lain, gunakan alasan halus atau 'sumimasen'."
        },
        {
          id: "b15-p2",
          title: "KK てはいけません (Dilarang / Tidak Boleh)",
          formula: "[Kata Kerja Bentuk Te] + はいけません",
          meaning: "Menyatakan larangan tegas berdasarkan aturan resmi atau norma.",
          examples: [
            {
              kanji: "ここでたばこを吸ってはいけません。",
              kana: "ここで たばこを すっては いけません。",
              romaji: "Koko de tabako o sutte wa ikemasen.",
              arti: "Dilarang merokok di tempat ini."
            },
            {
              kanji: "美術館で写真を撮ってはいけません。",
              kana: "びじゅつかんで しゃしんを とっては いけません。",
              romaji: "Bijutsukan de shashin o totte wa ikemasen.",
              arti: "Tidak boleh mengambil foto di museum seni."
            }
          ],
          notes: "Partikel 'wa' ditulis dengan hiragana 'ha'."
        },
        {
          id: "b15-p3",
          title: "KK ています (Keadaan / Status yang Berlanjut)",
          formula: "[Kata Kerja Tertentu] + ています",
          meaning: "Menunjukkan keadaan/status hasil perbuatan yang masih terus berlangsung hingga saat ini.",
          explanation: "Kata kerja status: kekkon shite imasu (menikah), sunde imasu (tinggal), shitte imasu (kenal/tahu), motte imasu (memiliki).",
          examples: [
            {
              kanji: "私は大阪に住んでいます。",
              kana: "わたしは おおさかに すんでいます。",
              romaji: "Watashi wa Oosaka ni sunde imasu.",
              arti: "Saya tinggal di Osaka."
            },
            {
              kanji: "山田さんを知っていますか。…はい、知っています。",
              kana: "やまださんを しっていますか。…はい、しっています。",
              romaji: "Yamada-san o shitte imasu ka. ...Hai, shitte imasu.",
              arti: "Apakah Anda kenal Tuan Yamada? ...Ya, saya kenal."
            },
            {
              kanji: "いいえ、知りません。",
              kana: "いいえ、しりません。",
              romaji: "Iie, shirimasen.",
              arti: "Tidak, saya tidak kenal/tidak tahu."
            }
          ],
          notes: "PENTING: Bentuk negatif dari 「知っています」 adalah 「知りません」, BUKAN *shitte imasen."
        }
      ]
    },
    {
      bab: 16,
      title: "Rangkaian Aksi Berurutan & Penggabungan Sifat",
      summary: "Menyambung beberapa perbuatan berurutan (te, te, masu), perbuatan setelah (te kara), menyambung kata sifat (kute / de), serta mendeskripsikan ciri fisik.",
      patterns: [
        {
          id: "b16-p1",
          title: "KK1 て、KK2 て、KK3 ます (Rangkaian Tindakan Kronologis)",
          formula: "[KK1 Bentuk Te]、[KK2 Bentuk Te]、[KK3 Bentuk Akhir]",
          meaning: "Menyebutkan beberapa tindakan yang dilakukan secara berurutan sesuai urutan waktu terjadinya.",
          explanation: "Bentuk waktu (lampau atau sekarang) hanya ditentukan di kata kerja penutup paling akhir.",
          examples: [
            {
              kanji: "朝ジョギングをして、シャワーを浴びて、会社へ行きます。",
              kana: "あさ ジョギングをして、シャワーを あびて、かいしゃへ いきます。",
              romaji: "Asa jogingu o shite, shawaa o abite, kaisha e ikimasu.",
              arti: "Pagi hari saya jogging, mandi shower, lalu pergi ke kantor."
            },
            {
              kanji: "神戸へ行って、映画を見て、お茶を飲みました。",
              kana: "こうべへ いって、えいがを みて、おちゃを のみました。",
              romaji: "Koube e itte, eiga o mite, ocha o nomimashita.",
              arti: "Saya pergi ke Kobe, menonton film, lalu minum teh."
            }
          ],
          notes: "Semua kata kerja di tengah disambung dengan bentuk Te."
        },
        {
          id: "b16-p2",
          title: "KK1 てから、KK2 ます (Setelah KK1 Selesai, Baru KK2)",
          formula: "[Kata Kerja 1 Bentuk Te] + から、[Kata Kerja 2]",
          meaning: "Menegaskan bahwa tindakan kedua baru dimulai setelah tindakan pertama selesai seutuhnya.",
          examples: [
            {
              kanji: "国へ帰ってから、父の会社で働きます。",
              kana: "くにへ かえってから、ちちの かいしゃで はたらきます。",
              romaji: "Kuni e kaette kara, chichi no kaisha de hatarakimasu.",
              arti: "Setelah pulang ke negara asal, saya akan bekerja di perusahaan ayah."
            },
            {
              kanji: "仕事が終わってから、飲みに行きませんか。",
              kana: "しごとが おわってから、のみに いきませんか。",
              romaji: "Shigoto ga owatte kara, nomi ni ikimasen ka.",
              arti: "Setelah pekerjaan selesai, maukah pergi minum bersama?"
            }
          ],
          notes: "KK1 adalah syarat mutlak yang harus selesai lebih dulu sebelum KK2 dikerjakan."
        },
        {
          id: "b16-p3",
          title: "Penggabungan Kata Sifat & Benda (～くて / ～で)",
          formula: "[-i]: buang i + くて | [-na]: buang na + で | [Kata Benda]: + で",
          meaning: "Menggabungkan dua atau lebih kata sifat/kata benda dalam satu kalimat setara.",
          examples: [
            {
              kanji: "東京はにぎやかで、面白い町です。",
              kana: "とうきょうは にぎやかで、おもしろい まちです。",
              romaji: "Toukyou wa nigiyaka de, omoshiroi machi desu.",
              arti: "Tokyo adalah kota yang ramai dan menarik."
            },
            {
              kanji: "あのレストランは安くて、おいしいです。",
              kana: "あのレストランは やすくて、おいしいです。",
              romaji: "Ano resutoran wa yasukute, oishii desu.",
              arti: "Restoran itu murah dan enak."
            }
          ],
          notes: "Pengecualian: 'ii' menjadi 「よくて (yokute)」."
        },
        {
          id: "b16-p4",
          title: "[Orang / Subjek] は [Bagian Tubuh] が [Kata Sifat] (Ciri Fisik Khusus)",
          formula: "[Orang / Subjek] は [Bagian Tubuh] が [Kata Sifat]",
          meaning: "Mendeskripsikan fitur fisik khusus pada tubuh seseorang.",
          examples: [
            {
              kanji: "マリアさんは髪が長いです。",
              kana: "マリアさんは かみが ながいです。",
              romaji: "Maria-san wa kami ga nagai desu.",
              arti: "Maria berambut panjang."
            },
            {
              kanji: "象は鼻が長いです。",
              kana: "ぞうは はなが ながいです。",
              romaji: "Zou wa hana ga nagai desu.",
              arti: "Gajah belalainya panjang."
            }
          ],
          notes: "Topik utama ditandai [は], bagian tubuh spesifik ditandai [が]."
        }
      ]
    },
    {
      bab: 17,
      title: "Bentuk Negatif Biasa (Nai-kei) & Keharusan",
      summary: "Konjugasi Bentuk Nai (Nai-kei), pola larangan ramah (nai de kudasai), keharusan mutlak (nakereba narimasen), dan kelonggaran (nakute mo ii desu).",
      patterns: [
        {
          id: "b17-p1",
          title: "Konjugasi Kata Kerja Bentuk Nai (ない形)",
          formula: "Grup 1: vokal u -> a + nai | Grup 2: buang masu + nai | Grup 3: shimasu -> shinai, kimasu -> konai",
          meaning: "Bentuk negatif biasa (informal) dari kata kerja.",
          explanation: "Grup 1: kakimasu -> kakanai, nomimasu -> nomanai. Pengecualian akhiran vokal -i (aimasu -> awanai, BUKAN aanai). Kata 'arimasu' menjadi 'nai'.",
          examples: [
            {
              kanji: "書かない、飲まない、食べない、来ない",
              kana: "かかない、のまない、たべない、こない",
              romaji: "kakanai, nomanai, tabenai, konai",
              arti: "tidak menulis, tidak minum, tidak makan, tidak datang"
            }
          ],
          notes: "Kimasu berubah menjadi 「こない (konai)」, bukan kinai."
        },
        {
          id: "b17-p2",
          title: "KK ないでください (Tolong Jangan Melakukan...)",
          formula: "[Kata Kerja Bentuk Nai] + でください",
          meaning: "Memohon atau meminta lawan bicara untuk tidak melakukan suatu perbuatan.",
          examples: [
            {
              kanji: "ここで写真を撮らないでください。",
              kana: "ここで しゃしんを とらないでください。",
              romaji: "Koko de shashin o toranaide kudasai.",
              arti: "Tolong jangan mengambil foto di sini."
            },
            {
              kanji: "無理をしないでください。",
              kana: "むりを しないでください。",
              romaji: "Muri o shinaide kudasai.",
              arti: "Tolong jangan memaksakan diri."
            }
          ],
          notes: "Lawan dari 'te kudasai'."
        },
        {
          id: "b17-p3",
          title: "KK なければなりません (Harus Melakukan... - Kewajiban)",
          formula: "[Kata Kerja Bentuk Nai (buang i)] + ければなりません",
          meaning: "Menyatakan kewajiban atau keharusan mutlak yang tidak dapat ditinggalkan.",
          explanation: "Secara harfiah berarti 'jika tidak dilakukan maka tidak boleh'.",
          examples: [
            {
              kanji: "毎日薬を飲まなければなりません。",
              kana: "まいにち くすりを のまなければ なりません。",
              romaji: "Mainichi kusuri o nomanakereba narimasen.",
              arti: "Setiap hari saya harus minum obat."
            },
            {
              kanji: "明日までにレポートを出さなければなりません。",
              kana: "あしたまでに レポートを ださなければ なりません。",
              romaji: "Ashita made ni repooto o dasanakereba narimasen.",
              arti: "Paling lambat besok saya harus mengumpulkan laporan."
            }
          ],
          notes: "Dalam percakapan kasual sering disingkat menjadi 'nakya' atau 'nakereba'."
        },
        {
          id: "b17-p4",
          title: "KK なくてもいいです (Tidak Perlu / Tidak Harus)",
          formula: "[Kata Kerja Bentuk Nai (buang i)] + くてもいいです",
          meaning: "Menyatakan bahwa suatu perbuatan tidak wajib dilakukan (bebas/opsional).",
          examples: [
            {
              kanji: "明日は来なくてもいいです。",
              kana: "あしたは こなくても いいです。",
              romaji: "Ashita wa konakute mo ii desu.",
              arti: "Besok Anda tidak perlu datang."
            },
            {
              kanji: "靴を脱がなくてもいいです。",
              kana: "くつを ぬがなくても いいです。",
              romaji: "Kutsu o nuganakute mo ii desu.",
              arti: "Anda tidak perlu melepas sepatu."
            }
          ],
          notes: "Lawan dari 'nakereba narimasen'."
        }
      ]
    },
    {
      bab: 18,
      title: "Bentuk Kamus (Jisho-kei), Kemampuan & Hobi",
      summary: "Konjugasi Bentuk Kamus (Jisho-kei), menyatakan kemampuan (koto ga dekimasu), menyebutkan hobi (shumi wa koto desu), dan aksi sebelum (mae ni).",
      patterns: [
        {
          id: "b18-p1",
          title: "Konjugasi Bentuk Kamus (辞書形 - Jisho-kei)",
          formula: "Grup 1: vokal u (kaku, nomu) | Grup 2: tambahkan ru (taberu, miru) | Grup 3: suru, kuru",
          meaning: "Bentuk dasar kata kerja yang tercantum di dalam kamus bahasa Jepang.",
          examples: [
            {
              kanji: "書く、読む、話す、食べる、見る、する、来る",
              kana: "かく、よむ、はなす、たべる、みる、する、くる",
              romaji: "kaku, yomu, hanasu, taberu, miru, suru, kuru",
              arti: "menulis, membaca, berbicara, makan, melihat, melakukan, datang"
            }
          ],
          notes: "Seluruh kata kerja bentuk kamus selalu berakhiran bunyi vokal 'u'."
        },
        {
          id: "b18-p2",
          title: "KK [Bentuk Kamus] ことができます (Dapat / Mampu Melakukan)",
          formula: "[Kata Kerja Bentuk Kamus] + ことができます",
          meaning: "Menyatakan kapabilitas kemampuan atau potensi untuk melakukan suatu tindakan.",
          explanation: "Kata 「こと」 mengubah kata kerja menjadi kata benda (nominalisasi), sehingga bisa digabungkan dengan partikel が dan できます.",
          examples: [
            {
              kanji: "ミラーさんは漢字を読むことができます。",
              kana: "ミラーさんは かんじを よむことが できます。",
              romaji: "Miraa-san wa kanji o yomu koto ga dekimasu.",
              arti: "Tuan Miller bisa membaca huruf kanji."
            },
            {
              kanji: "ここでカードを使うことができますか。",
              kana: "ここで カードを つかうことが できますか。",
              romaji: "Koko de kaado o tsukau koto ga dekimasu ka.",
              arti: "Apakah di sini bisa menggunakan kartu kredit?"
            }
          ],
          notes: "Bisa juga langsung menggunakan kata benda kemampuan: 「スキーができます (Bisa ski)」."
        },
        {
          id: "b18-p3",
          title: "私の趣味は KK [Bentuk Kamus] こと です (Hobi Saya Adalah...)",
          formula: "私の趣味は [Kata Kerja Bentuk Kamus] こと です",
          meaning: "Mendefinisikan hobi atau kegemaran diri.",
          examples: [
            {
              kanji: "私の趣味は写真を撮ることです。",
              kana: "わたしの しゅみは しゃしんを とることです。",
              romaji: "Watashi no shumi wa shashin o toru koto desu.",
              arti: "Hobi saya adalah mengambil foto."
            },
            {
              kanji: "趣味は音楽を聞くことです。",
              kana: "しゅみは おんがくを きくことです。",
              romaji: "Shumi wa ongaku o kiku koto desu.",
              arti: "Hobi saya adalah mendengarkan musik."
            }
          ],
          notes: "Jika menggunakan kata benda langsung: 「私の趣味は音楽です」."
        },
        {
          id: "b18-p4",
          title: "[KK Bentuk Kamus] / [Kegiatan] の 前に (Sebelum Melakukan...)",
          formula: "[KK Bentuk Kamus] / [Kata Benda Kegiatan] の / [Durasi Waktu] 前に、[Aksi]",
          meaning: "Menyatakan tindakan yang dilakukan sebelum kegiatan lain dimulai.",
          examples: [
            {
              kanji: "ご飯を食べる前に、手を洗います。",
              kana: "ごはんを たべるまえに、てを あらいます。",
              romaji: "Gohan o taberu mae ni, te o araimasu.",
              arti: "Sebelum makan, saya mencuci tangan."
            },
            {
              kanji: "寝る前に、本を読みます。",
              kana: "ねるまえに、ほんを よみます。",
              romaji: "Neru mae ni, hon o yomimasu.",
              arti: "Sebelum tidur, saya membaca buku."
            }
          ],
          notes: "Ingat: Kata kerja sebelum 'mae ni' SELALU berbentuk kamus, meskipun aksi utamanya di masa lampau."
        }
      ]
    },
    {
      bab: 19,
      title: "Bentuk Lampau Biasa (Ta-kei) & Pengalaman",
      summary: "Konjugasi Bentuk Ta (Ta-kei), menceritakan pengalaman hidup (koto ga arimasu), menyebutkan beberapa aktivitas acak (tari-tari shimasu), dan perubahan keadaan (ni narimasu).",
      patterns: [
        {
          id: "b19-p1",
          title: "Konjugasi Kata Kerja Bentuk Ta (た形)",
          formula: "Aturan perubahannya 100% identik dengan Bentuk Te (ganti te -> ta, de -> da)",
          meaning: "Bentuk lampau biasa (informal) dari kata kerja.",
          examples: [
            {
              kanji: "食べた、行った、飲んだ、した、来た",
              kana: "たべた、いった、のんだ、した、きた",
              romaji: "tabeta, itta, nonda, shita, kita",
              arti: "sudah makan, sudah pergi, sudah minum, sudah melakukan, sudah datang"
            }
          ],
          notes: "Jika Anda sudah menguasai Bentuk Te di Bab 14, Bentuk Ta tinggal mengganti vokal 'e' menjadi 'a'."
        },
        {
          id: "b19-p2",
          title: "KK [Bentuk Ta] ことがあります (Pernah Mengalami Sesuatu)",
          formula: "[Kata Kerja Bentuk Ta] + ことがあります",
          meaning: "Menceritakan bahwa pembicara memiliki riwayat pengalaman pernah melakukan hal tersebut di masa lalu.",
          examples: [
            {
              kanji: "日本へ行ったことがありますか。…はい、一度あります。",
              kana: "にほんへ いったことが ありますか。…はい、いちど あります。",
              romaji: "Nihon e itta koto ga arimasu ka. ...Hai, ichido arimasu.",
              arti: "Apakah Anda pernah pergi ke Jepang? ...Ya, pernah satu kali."
            },
            {
              kanji: "馬に乗ったことがありません。",
              kana: "うまに のったことが ありません。",
              romaji: "Uma ni notta koto ga arimasen.",
              arti: "Saya belum pernah naik kuda."
            }
          ],
          notes: "Jika belum pernah sama sekali: 「一度もありません (Ichido mo arimasen)」."
        },
        {
          id: "b19-p3",
          title: "KK1 [Ta]り、KK2 [Ta]り します (Melakukan Kegiatan Seperti...)",
          formula: "[KK1 Bentuk Ta]り、[KK2 Bentuk Ta]り します / しました",
          meaning: "Menyebutkan beberapa contoh kegiatan yang dilakukan tanpa memedulikan urutan kronologisnya.",
          explanation: "Berbeda dari pola 'te, te' di Bab 16 yang wajib urut, pola 'tari, tari' menyebutkan kegiatan acak dari sekian banyak kegiatan.",
          examples: [
            {
              kanji: "日曜日はテニスをしたり、映画を見たりします。",
              kana: "にちようびは テニスをしたり、えいがを みたりします。",
              romaji: "Nichiyoubi wa tenisu o shitari, eiga o mitari shimasu.",
              arti: "Pada hari Minggu saya bermain tenis, menonton film, dan lain sebagainya."
            }
          ],
          notes: "Diakhiri selalu dengan kata kerja 「します」 (atau shimashita jika lampau)."
        },
        {
          id: "b19-p4",
          title: "[Kata Sifat / Profesi / Umur] に なります (Menjadi... - Perubahan Kondisi)",
          formula: "[-i]: buang i + くなります | [-na & Kata Benda]: + に なります",
          meaning: "Menyatakan perubahan kondisi atau transformasi status.",
          examples: [
            {
              kanji: "だんだん暖かくなります。",
              kana: "だんだん あたたかくなります。",
              romaji: "Dandan atatakaku narimasu.",
              arti: "Perlahan-lahan cuaca menjadi hangat."
            },
            {
              kanji: "２５歳になりました。",
              kana: "にじゅうごさいに なりました。",
              romaji: "Nijuugo-sai ni narimashita.",
              arti: "Saya telah menjadi/genap berusia 25 tahun."
            }
          ],
          notes: "'Narimasu' artinya 'menjadi'."
        }
      ]
    },
    {
      bab: 20,
      title: "Bentuk Kasual / Biasa (Futsuu-tai)",
      summary: "Membedakan Ragam Sopan (Teinei-tai) dan Ragam Kasual (Futsuu-tai) dalam percakapan akrab dengan teman sebaya atau keluarga.",
      patterns: [
        {
          id: "b20-p1",
          title: "Tabel Konversi Ragam Biasa (普通形 - Futsuu-kei)",
          formula: "Positif: Jisho-kei | Negatif: Nai-kei | Lampau: Ta-kei | Lampau Neg: Nakatta",
          meaning: "Penggunaan bentuk tanpa desu/masu untuk percakapan informal sehari-hari.",
          explanation: "Kata Benda & Na-keiyoushi: da (positif), ja nai (negatif), datta (lampau), ja nakatta (lampau neg).",
          examples: [
            {
              kanji: "食べる (taberu) ＝ 食べます | 食べない (tabenai) ＝ 食べません",
              kana: "たべる ＝ たべます | たべない ＝ たべません",
              romaji: "taberu = tabemasu | tabenai = tabemasen",
              arti: "makan (kasual) = makan (sopan) | tidak makan (kasual) = tidak makan (sopan)"
            },
            {
              kanji: "雨だ (ame da) ＝ 雨です | 暇だった (hima datta) ＝ 暇でした",
              kana: "あめだ ＝ あめです | ひまだった ＝ ひまでした",
              romaji: "ame da = ame desu | hima datta = hima deshita",
              arti: "hujan (kasual) = hujan (sopan) | senggang dulu = senggang dulu (sopan)"
            }
          ],
          notes: "Hanya digunakan kepada teman akrab, anggota keluarga sendiri, atau rekan sebaya yang sangat dekat."
        },
        {
          id: "b20-p2",
          title: "Percakapan Kasual Sehari-hari",
          formula: "Hilangkan partikel penanya [か] dan gunakan intonasi naik",
          meaning: "Ciri khas kalimat tanya kasual dalam pergaulan bahasa Jepang.",
          examples: [
            {
              kanji: "コーヒーを飲む？…うん、飲む。",
              kana: "コーヒーを のむ？…うん、のむ。",
              romaji: "Koohii o nomu? ...Un, nomu.",
              arti: "Mau minum kopi? ...Iya, mau minum."
            },
            {
              kanji: "明日暇？…ううん、暇じゃない。",
              kana: "あした ひま？…ううん、ひまじゃない。",
              romaji: "Ashita hima? ...Uun, hima ja nai.",
              arti: "Besok kamu senggang? ...Nggak, aku nggak senggang."
            }
          ],
          notes: "Dalam kasual: 'Hai' menjadi 'Un', 'Iie' menjadi 'Uun'."
        }
      ]
    },
    {
      bab: 21,
      title: "Pendapat Pribadi, Dugaan & Kutipan",
      summary: "Menyampaikan opini subjektif (to omoimasu), mengutip ucapan orang lain (to iimashita), serta mencari persetujuan (deshou).",
      patterns: [
        {
          id: "b21-p1",
          title: "[Bentuk Biasa] と 思います (Menurut Pendapat Saya...)",
          formula: "[Kalimat Bentuk Biasa (Futsuu-kei)] + と 思います",
          meaning: "Menyatakan opini, perkiraan, atau dugaan pribadi pembicara.",
          explanation: "Partikel 「と」 berfungsi sebagai partikel penanda isi pikiran. Kalimat di depannya WAJIB dalam bentuk biasa (futsuu-kei).",
          examples: [
            {
              kanji: "明日は雨が降ると思います。",
              kana: "あしたは あめが ふると おもいます。",
              romaji: "Ashita wa ame ga furu to omoimasu.",
              arti: "Menurut saya besok akan turun hujan."
            },
            {
              kanji: "日本は物価が高いと思います。",
              kana: "にほんは ぶっかが たかいと おもいます。",
              romaji: "Nihon wa bukka ga takai to omoimasu.",
              arti: "Saya rasa harga barang-barang di Jepang mahal."
            }
          ],
          notes: "Jika kata benda atau kata sifat -na positif: pasang 'da' sebelum to (contoh: benri da to omoimasu)."
        },
        {
          id: "b21-p2",
          title: "「...」/ [Bentuk Biasa] と 言いました (Kutipan Langsung & Tak Langsung)",
          formula: "「Isi Kalimat」 と 言いました / [Bentuk Biasa] と 言いました",
          meaning: "Menyampaikan kembali perkataan yang diucapkan oleh orang lain.",
          examples: [
            {
              kanji: "田中さんは「明日休みます」と言いました。",
              kana: "たなかさんは「あした やすみます」と いいました。",
              romaji: "Tanaka-san wa 'Ashita yasumimasu' to iimashita.",
              arti: "Tuan Tanaka berkata, 'Besok saya libur/absen.'"
            },
            {
              kanji: "ミラーさんは来週東京へ行くと言いました。",
              kana: "ミラーさんは らいしゅう とうきょうへ いくと いいました。",
              romaji: "Miraa-san wa raishuu Toukyou e iku to iimashita.",
              arti: "Tuan Miller mengatakan bahwa ia akan pergi ke Tokyo minggu depan."
            }
          ],
          notes: "Kutipan langsung menggunakan tanda kurung siku Jepang 「 」."
        },
        {
          id: "b21-p3",
          title: "[Bentuk Biasa] でしょう？ (Bukankah Begitu? / Bukan?)",
          formula: "[Kalimat Bentuk Biasa (tanpa da)] + でしょう？",
          meaning: "Meminta konfirmasi dari lawan bicara dengan anggapan lawan bicara kemungkinan besar sependapat.",
          examples: [
            {
              kanji: "明日のパーティーに行くでしょう？…ええ、行きますよ。",
              kana: "あしたの パーティーに いくだろう？…ええ、いきますよ。",
              romaji: "Ashita no paatii ni iku deshou? ...Ee, ikimasu yo.",
              arti: "Besok kamu datang ke pesta, kan? ...Iya, pasti datang dong."
            }
          ],
          notes: "Diucapkan dengan intonasi naik di akhir kalimat."
        }
      ]
    },
    {
      bab: 22,
      title: "Anak Kalimat Penerang Kata Benda (Klausa Modifikasi)",
      summary: "Menerangkan kata benda menggunakan klausa kata kerja (contoh: orang yang memakai topi, masakan yang dibuat ibu), serta waktu/janji/urusan.",
      patterns: [
        {
          id: "b22-p1",
          title: "[Klausa Kata Kerja Bentuk Biasa] + Kata Benda",
          formula: "[Subjek が KK Bentuk Biasa] + [Kata Benda yang Diterangkan]",
          meaning: "Membuat klausa relatif untuk mendeskripsikan suatu kata benda.",
          explanation: "Dalam bahasa Jepang tidak ada kata hubung relatif seperti 'yang' (who/which/that). Klausa penerang CUKUP diletakkan langsung di depan kata benda.",
          examples: [
            {
              kanji: "これは母が作ったケーキです。",
              kana: "これは ははが つくった ケーキです。",
              romaji: "Kore wa haha ga tsukutta keeki desu.",
              arti: "Ini adalah kue yang dibuat oleh ibu saya."
            },
            {
              kanji: "あそこにいる人は誰ですか。…ミラーさんです。",
              kana: "あそこに いるひとは だれですか。…ミラーさんです。",
              romaji: "Asoko ni iru hito wa dare desu ka. ...Miraa-san desu.",
              arti: "Orang yang berada di sebelah sana itu siapa? ...Tuan Miller."
            }
          ],
          notes: "PENTING: Subjek di dalam anak kalimat penerang WAJIB ditandai dengan partikel 「が」, BUKAN 「は」."
        },
        {
          id: "b22-p2",
          title: "[KK Bentuk Kamus] 時間 / 約束 / 用事 (Waktu / Janji / Urusan untuk...)",
          formula: "[Kata Kerja Bentuk Kamus] + 時間 / 約束 / 用事",
          meaning: "Menyatakan memiliki janji, waktu luang, atau kesibukan untuk mengerjakan sesuatu.",
          examples: [
            {
              kanji: "私は朝ご飯を食べる時間がありません。",
              kana: "わたしは あさごはんを たべるじかんが ありません。",
              romaji: "Watashi wa asagohan o taberu jikan ga arimasen.",
              arti: "Saya tidak memiliki waktu untuk sarapan."
            },
            {
              kanji: "今日は友達と映画を見る約束があります。",
              kana: "きょうは ともだちと えいがを みるやくそくが あります。",
              romaji: "Kyou wa tomodachi to eiga o miru yakusoku ga arimasu.",
              arti: "Hari ini saya ada janji menonton film bersama teman."
            }
          ],
          notes: "Pola yang sangat praktis dan sering diucapkan dalam rutinitas kerja."
        }
      ]
    },
    {
      bab: 23,
      title: "Saat / Waktu (Toki) & Hubungan Akibat Pasti (To)",
      summary: "Penggunaan [とき] (saat/ketika) dengan berbagai bentuk kata kerja/sifat, dan partikel syarat keniscayaan alamiah [と] (jika memutar tombol ini maka...).",
      patterns: [
        {
          id: "b23-p1",
          title: "KK [Kamus / Ta] 時 (とき)、～ (Ketika / Saat Melakukan...)",
          formula: "[KK Kamus (sebelum selesai) / KK Ta (setelah selesai)] + とき、～",
          meaning: "Menunjukkan momentum waktu terjadinya suatu peristiwa.",
          explanation: "KK Kamus + toki = perbuatan belum selesai dilakukan saat aksi kedua terjadi. KK Ta + toki = perbuatan sudah selesai dilakukan saat aksi kedua terjadi.",
          examples: [
            {
              kanji: "図書館で本を借りる時、カードが要ります。",
              kana: "としょかんで ほんを かりるとき、カードが いります。",
              romaji: "Toshokan de hon o kariru toki, kaado ga irimasu.",
              arti: "Saat akan meminjam buku di perpustakaan, dibutuhkan kartu anggota."
            },
            {
              kanji: "国へ帰った時、かばんを買いました。",
              kana: "くにへ かえったとき、かばんを かいました。",
              romaji: "Kuni e kaetta toki, kaban o kaimashita.",
              arti: "Ketika sudah tiba pulang di negara asal, saya membeli tas."
            }
          ],
          notes: "Jika kata sifat -i: 'samui toki'. Jika -na: 'hima na toki'. Jika kata benda: 'kodomo no toki'."
        },
        {
          id: "b23-p2",
          title: "KK [Bentuk Kamus] と、～ (Begitu... Maka Pasti... - Akibat Mutlak)",
          formula: "[Kata Kerja Bentuk Kamus] + と、[Akibat Pasti]",
          meaning: "Menyatakan akibat otomatis yang pasti terjadi secara mekanis, petunjuk jalan, atau hukum alam.",
          examples: [
            {
              kanji: "このボタンを押すと、切符が出ます。",
              kana: "このボタンを おすと、きっぷが でます。",
              romaji: "Kono botan o osu to, kippu ga demasu.",
              arti: "Jika menekan tombol ini, maka tiket otomatis akan keluar."
            },
            {
              kanji: "右へ曲がると、郵便局があります。",
              kana: "みぎへ まがると、ゆうびんきょくが あります。",
              romaji: "Migi e magaru to, yuubinkyoku ga arimasu.",
              arti: "Begitu berbelok ke kanan, maka ada kantor pos."
            }
          ],
          notes: "Bagian kalimat akibat TIDAK BOLEH berupa perintah, ajakan, atau permohonan (*kudasai, *mashou)."
        }
      ]
    },
    {
      bab: 24,
      title: "Memberi & Menerima Kebaikan Tindakan",
      summary: "Pemberian kepada saya (kuremasu), serta memberikan kebaikan perbuatan (te agemasu), menerima kebaikan (te moraimasu), dan orang lain berbuat baik untuk saya (te kuremasu).",
      patterns: [
        {
          id: "b24-p1",
          title: "[Orang Lain] が [私に] [Benda] を くれます (Orang Lain Memberi kepada Saya)",
          formula: "[Orang Lain] が [Saya / Pihak Saya] に [Benda] を くれます",
          meaning: "Orang lain memberikan barang kepada pembicara (atau keluarga/pihak saya).",
          explanation: "Perbedaan vital: 'Agemasu' = saya memberi ke orang lain. 'Kuremasu' = orang lain memberi kepada saya.",
          examples: [
            {
              kanji: "佐藤さんは私に誕生日プレゼントをくれました。",
              kana: "さとうさんは わたしに たんじょうびプレゼントを くれました。",
              romaji: "Satou-san wa watashi ni tanjoubi purezento o kuremashita.",
              arti: "Nona Sato memberikan kado ulang tahun kepada saya."
            }
          ],
          notes: "Subjek pemberi ditandai partikel が."
        },
        {
          id: "b24-p2",
          title: "KK て あげます (Melakukan Kebaikan untuk Orang Lain)",
          formula: "[Subjek] は [Orang Lain] に [KK Bentuk Te] + あげます",
          meaning: "Melakukan suatu tindakan perbuatan baik yang menguntungkan pihak penerima.",
          examples: [
            {
              kanji: "私は木村さんに傘を貸してあげました。",
              kana: "わたしは きむらさんに かさを かしてあげました。",
              romaji: "Watashi wa Kimura-san ni kasa o kashite agemashita.",
              arti: "Saya meminjamkan payung untuk Nona Kimura."
            }
          ],
          notes: "Jangan ucapkan langsung kepada orang yang lebih tua atau atasan, karena bisa terdengar sombong/merendahkan."
        },
        {
          id: "b24-p3",
          title: "KK て もらいます (Menerima Kebaikan Tindakan dari Orang Lain)",
          formula: "[Saya] は [Pelaku Tindakan] に [KK Bentuk Te] + もらいます",
          meaning: "Menerima jasa baik atau dibantu oleh orang lain.",
          examples: [
            {
              kanji: "私は鈴木さんに日本語を教えてもらいました。",
              kana: "わたしは すずきさんに にほんごを おしえてもらいました。",
              romaji: "Watashi wa Suzuki-san ni Nihongo o oshiete moraimashita.",
              arti: "Saya diajari bahasa Jepang oleh Tuan Suzuki (saya berterima kasih)."
            }
          ],
          notes: "Menyiratkan rasa terima kasih dari pihak penerima jasa."
        },
        {
          id: "b24-p4",
          title: "Orang が [私に] KK て くれます (Orang Lain Melakukan Kebaikan untuk Saya)",
          formula: "[Orang Lain] が [Saya に] [KK Bentuk Te] + くれます",
          meaning: "Orang lain dengan sukarela berbuat baik melakukan sesuatu demi kepentingan saya.",
          examples: [
            {
              kanji: "山田さんが駅まで車で送ってくれました。",
              kana: "やまださんが えきまで くるまで おくってくれました。",
              romaji: "Yamada-san ga eki made kuruma de okutte kuremashita.",
              arti: "Tuan Yamada dengan baik hati mengantar saya sampai stasiun dengan mobil."
            }
          ],
          notes: "Salah satu ungkapan apresiasi dan rasa terima kasih paling umum di Jepang."
        }
      ]
    },
    {
      bab: 25,
      title: "Pengandaian & Kondisi Syarat (Tara & Temo)",
      summary: "Pengandaian syarat 'kalau / jika / setelah' (-tara) dan bentuk pengandaian berlawanan 'meskipun / walaupun' (-temo).",
      patterns: [
        {
          id: "b25-p1",
          title: "[KK Bentuk Ta] ら、～ (Jika / Kalau / Setelah Selesai...)",
          formula: "[KK Bentuk Ta / Adj-i -kattara / Adj-na & Kata Benda -dattara] + ら、[Hasil]",
          meaning: "Menyatakan pengandaian bersyarat: jika kondisi terpenuhi, maka tindakan berikutnya akan dilakukan.",
          explanation: "Merupakan pola pengandaian paling fleksibel dalam percakapan sehari-hari bahasa Jepang.",
          examples: [
            {
              kanji: "雨が降ったら、出かけません。",
              kana: "あめが ふったら、でかけません。",
              romaji: "Ame ga futtara, dekakemasen.",
              arti: "Kalau hujan turun, saya tidak akan pergi keluar."
            },
            {
              kanji: "お金があったら、旅行したいです。",
              kana: "おかねが あったら、りょこうしたいです。",
              romaji: "Okane ga attara, ryokou shitai desu.",
              arti: "Kalau saya punya banyak uang, saya ingin berlibur keliling dunia."
            },
            {
              kanji: "１０時になったら、出かけましょう。",
              kana: "じゅうじに なったら、でかけましょう。",
              romaji: "Juu-ji ni nattara, dekakemashou.",
              arti: "Setelah jam 10 tiba, ayo kita berangkat."
            }
          ],
          notes: "Bisa berpasangan dengan kata penegas 「もし (moshi = seandainya)」 di awal kalimat."
        },
        {
          id: "b25-p2",
          title: "[KK Bentuk Te] も、～ (Meskipun / Walaupun... Tetap...)",
          formula: "[KK Bentuk Te / -i -kute / -na & Kata Benda -de] + も、[Pernyataan]",
          meaning: "Menyatakan hubungan kondisi bertentangan: meskipun kondisi A terjadi, hasil B tidak terpengaruh.",
          examples: [
            {
              kanji: "雨が降っても、サッカーをします。",
              kana: "あめが ふっても、サッカーを します。",
              romaji: "Ame ga futte mo, sakkaa o shimasu.",
              arti: "Meskipun hujan turun, kami tetap bermain sepak bola."
            },
            {
              kanji: "高くても、このパソコンを買いたいです。",
              kana: "たかくても、この パソコンを かいたいです。",
              romaji: "Takakute mo, kono pasokon o kaitai desu.",
              arti: "Meskipun mahal, saya tetap ingin membeli laptop ini."
            }
          ],
          notes: "Bisa diawali dengan kata penegas 「いくら (ikura = betapapun/seberapa pun)」: 'Ikura takakute mo...'."
        }
      ]
    }
  ];

  // Helper APIs
  window.MNN1_GRAMMAR = MNN1_GRAMMAR;

  window.getBabGrammar = function (babNum) {
    const num = parseInt(babNum, 10);
    return MNN1_GRAMMAR.find(function (g) { return g.bab === num; }) || null;
  };

  window.getAllGrammar = function () {
    return MNN1_GRAMMAR;
  };

  window.getGrammarPatternCount = function (babNum) {
    const bg = window.getBabGrammar(babNum);
    return bg && bg.patterns ? bg.patterns.length : 0;
  };

  window.getTotalGrammarPatternsCount = function () {
    let total = 0;
    MNN1_GRAMMAR.forEach(function (bg) {
      if (bg.patterns) total += bg.patterns.length;
    });
    return total;
  };

})();
