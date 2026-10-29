3.1 düzeltmeleri: modelin altına yerleşen ızgara, bütün araçlarda kaydırma/zoom, referans modunda döndürme, doğrudan kutu seçimi, geri alınabilir zemine ortalama ve sınırlı alanı tamamen kesme.

Mac sürümü: macOS 13 Ventura ve sonrası.

3.0 sürümünde ayrı **3D model düzenle** alanı eklendi: STL / 3MF / OBJ açma, iç yüzeylere kesit görünümüyle ulaşma, referans yüzey ve yerel alanla kabartma yazıyı düzleme, çukur yazıyı doldurma, bağlantısız harfleri ayırıp silme ve geri alma. Bu araç eğri yüzeyi otomatik tahmin etmez; seçilen alanı yerel bir düzleme getirir.

- **arm64**: Apple Silicon (M1, M2, M3, M4 ve sonrası).
- **x64**: Intel işlemcili Mac.

DMG dosyasını açıp Katman Studio’yu Applications (Uygulamalar) klasörüne sürükleyin. ZIP seçeneği aynı uygulamanın arşividir. Uygulamayı kullanmak için Node.js veya tarayıcı gerekmez.

Bu sürüm Apple Developer ID ile imzalanmamış ve noter onayı (notarization) almamıştır. İlk açılışta macOS güvenlik uyarısı gösterebilir. Kurumsal cihazlar imzasız uygulamalara izin vermeyebilir. Resmi imzalı dağıtım için Apple geliştirici sertifikası gerekir.

Görsel ekleme: ⌘O · Proje açma: ⌘⇧O · Proje kaydetme: ⌘S · Dışa aktarma: ⌘E. Çoklu seçim için ⌘ tuşunu basılı tutun. Pencereyi kapattığınızda uygulama Dock’ta kalır; Dock simgesinden yeniden açabilirsiniz. Tam çıkış: ⌘Q. Kaydedilmeyen çalışma pencere kapatılınca kaybolur.

Doğrulama notu: 3D etkileşim Windows, tarayıcı/LAN ve Apple Silicon Mac üzerinde test edilir. Intel sanal Mac runner WebGL vermediğinde 3D etkileşim testi açıkça atlanır; Intel üzerinde geometri ve temel yerel dosya/kayıt testleri çalışır. Bu durumda Intel Mac’teki yerel 3D görüntüleme ayrıca doğrulanmamıştır. Uygulama 3D görünüm için WebGL 2 destekli grafik ortamı gerektirir.
