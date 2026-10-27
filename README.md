# Katman Studio 2.8 — Otomatik görselden vektör ve 3D

Uygulama boş açılır. Görseli ekleyin; renk ayrımı, düzgün vektör eğrileri ve ayrıntı kalitesi otomatik hazırlanır. Piksel çözünürlüğü, kenar filtresi, gölge veya Z büyütme ayarı yapmanız gerekmez.

## Açma

**Baslat.bat** dosyasını veya **Masaustu/Katman Studio/Katman Studio.exe** dosyasını açın. Hazır Windows paketi Node.js, internet, sunucu veya tarayıcı gerektirmez. EXE'yi taşırken yanındaki dosyaları da içeren klasörün tamamını taşıyın.

## Mac sürümü

**macOS 13 Ventura veya sonrası** desteklenir. GitHub deposunun **Releases** bölümünden işlemcinize uygun paketi indirin: Apple Silicon için `arm64`, Intel Mac için `x64`. DMG dosyasını açıp **Katman Studio** simgesini **Applications / Uygulamalar** klasörüne sürükleyin. ZIP de aynı uygulamayı içerir. Kullanmak için Node.js veya sunucu kurulmaz.

Mac’te kısayollar ⌘O, ⌘⇧O, ⌘S, ⌘E; çoklu seçim ⌘ ile yapılır. Kırmızı pencere düğmesi pencereyi kapatır; Dock simgesi yeni boş pencere açar. Uygulamadan tamamen çıkış ⌘Q’dur. Kaydedilmeyen çalışma pencere kapanınca kaybolur.

Paketler Apple Developer ID ile imzalanmamış ve notarize edilmemiştir; ilk açılışta macOS güvenlik uyarısı gösterebilir. Resmi imzalı dağıtım için Apple geliştirici sertifikası gerekir.

Mac’te kaynak koddan çalıştırmak ve paketlemek:

```sh
npm ci
npm run build
npm start
# Yalnızca bu Mac’in mimarisi:
npm run package:mac -- --arm64  # Apple Silicon
npm run package:mac -- --x64    # Intel
```

Mimari seçilmezse iki mimari de paketlenir. Çıktılar `dist/` içine DMG ve ZIP olarak yazılır. `Baslat.command` önceden üretilmiş Mac paketini veya kurulu Electron geliştirme ortamını açar. GitHub Actions, sürüm etiketi (`v*`) gönderildiğinde her mimariyi gerçek Mac runner üzerinde derler, paketlenmiş uygulamanın seçim/kayıt/3MF ve pencereyi yeniden açma testlerini çalıştırır; iki test de geçerse dosyaları Releases bölümüne ekler. Aynı iş akışı Actions bölümünden elle de başlatılabilir (çıktılar Artifacts altında).

## Kullanım

1. **Görsel ekle / Ctrl+O** ile dosyanızı açın veya sol alana sürükleyin. Kaynak görsel solda özgün haliyle gösterilir.
2. **2D desen** görünümünde oluşan vektörü, **Perspektif / Üstten** görünümünde kabartmayı inceleyin. Konturlar gerçek Bézier eğrileridir; piksel karelerinin sınırlarını olduğu gibi izleyen eski yöntem kaldırıldı.
3. Çalışma alanından **Tek bölge**, **Aynı renk** veya **Yakın renkler** seçin. Yakın renkler aracındaki renk aralığı sürgüsü, seçilecek benzer tonları belirler. Sağdaki liste sekmeleri yalnızca listeyi gruplar; desenden seçmek için onlara tıklamak gerekmez. Ctrl seçime ekler. 2D görünümde kutu çizerek, 3D'de **Alan seç** aracını açıp sürükleyerek çoklu seçim yapılır.
4. Sağdan **0–250 mm (25 cm)** arasında yükseklik girin. Sayı girişi 0,02 mm hassasiyetlidir. Artı/eksi düğmeleri hızlı artış ve azalış içindir. 0 mm hacmi kaldırır. Taban kalınlığı ayrıca ayarlanır; toplam yükseklik taban + kabartmadır.
5. Renkli 3MF, STL, OBJ veya SVG biçimini seçip dosyayı kaydedin.

Aynı renkteki temassız bölgeler ayrı yükseklik alabilir. **Aynı renktekileri seç** seçili renklerin diğer alanlarını da ekler. **Gizle / göster** seçili bölgeleri etkiler. Bir kutu, kesiştiği vektör bölgelerinin tümünü seçer; bir bölgeyi parçalara kesmez.

**Kaydet / Ctrl+S** projeyi `.katman` dosyası olarak saklar. **Proje aç / Ctrl+Shift+O** ile yükseklikler ve bölgeler geri gelir. Önceki proje sürümleri desteklenir ve konturlar yeni vektör motoruyla yeniden oluşturulur. Projeler özgün tam boyutlu dosyayı saklamaz; kayıtlı renk kaynağı ile açılır. Eski bir düşük ayrıntılı projeyi en iyi sonuçla yeniden hazırlamak için özgün görseli tekrar yükleyin. Kaydedilmeyen çalışma pencere kapanınca kaybolur.

Sol paneldeki **Arka planı kaldır** anahtarı, dış kenarda baskın olan rengin kenara bağlı bölgelerini kaldırır. Desenin içindeki aynı renkli yazılar ve ayrıntılar korunur. Dikdörtgen taban da kaldırılan arka planın altında bırakılmaz; taban desenin şeklini izler. Anahtarı kapatınca tüm bölgeler ve yükseklikler geri gelir. Bu tercih projede saklanır. Şeffaf kaynaklarda veya belirgin tek renkli bir dış arka plan bulunmadığında renk tahminiyle desen silinmez.

## Çıktılar

| Biçim | İçerik |
| --- | --- |
| 3MF | Düzgün vektörlerden oluşturulmuş kapalı renkli parçalar, taban, tek montaj ve gerçek mm ölçüleri |
| STL | Aynı düzgün konturların birleşik dış yüzeyi; iç renk duvarları kaldırılır, renk içermez |
| OBJ + MTL | Aynı geometri ve renkler, birlikte ZIP; sayısal koordinatlar mm |
| SVG | Gerçek kübik Bézier yolları, delikler, renkler ve bölge yükseklikleri |

3MF belirli bir yazıcının baskı profilini veya filament atamasını içermez. Dilimleyicide çok parçalı nesne olarak açıp filamentleri renklere eşleştirin. Referans: [3MF Core](https://github.com/3MFConsortium/spec_core), [Materials Extension](https://github.com/3MFConsortium/spec_materials).

PNG, JPG, WebP, BMP ve motorun okuyabildiği diğer görseller desteklenir. SVG kaynaklar renk ayrımı için önce örneklenir; çıktı konturları yeniden eğrilere çevrilir. GIF'in ilk karesi kullanılır. Sonuç bir 2,5D kabartmadır. Görseller yerel işlenir, başka bir yere yüklenmez.

## Vektör motoru

Baskın kaynak renkleri algısal renk uzaklıklarıyla otomatik seçilir. Renk sayısı zorlanmadığı için JPEG geçiş tonları ayrı ana renklere dönüştürülmez. Her komşu renk sınırı **bir kez** izlenir. Gerçek tasarım köşeleri korunurken raster basamakları yumuşatılır; Potrace ile en uygun çokgen bulunur, köşeler düzeltilir ve optimize edilmiş çizgi/Bézier parçaları oluşturulur. Renk sınırlarındaki eski özel eğri uydurma kaldırıldı. İki komşu renk aynı sınırı ters yönde kullanır. Sapma ve kesişme denetimleri sınırın başka alanlara taşmasını önler; sorunlu küçük bir parça gerektiğinde yerel olarak korunur.

SVG analitik eğrileri saklar. Ekranda çizim doğrudan vektör yollarından yapılır; 2D tıklamalar `Path2D` ile vektörün içinden test edilir. 3D ve ağ çıktıları aynı eğrilerden hassas şekilde üçgenlenir. Ortak sınırlar ve yükseklik kavşaklarında kenarlar eşlenir; sıfır alanlı yüzeyler atılır. STL, eski piksel yüksekliği alanı yerine aynı düzgün geometriyi kullanır.

Kalite otomatik seçilir; büyük kaynaklar işlem yükünü dengelemek için içeride örneklenir. Raster kaynakta bulunmayan detaylar tahmin edilmez. Köşeden temas eden fiziksel katılar bazı modellerde tek kenarda birden fazla yüzey oluşturabilir; STL çıktısı bu durumu bildirir. Fiziksel baskı ve belirli bir dilimleyiciyle doğrulama bu ortamda yapılmadı.

## Geliştirme

```powershell
npm install
node node_modules/electron/install.js
npm run build
npm start
npm test
npm run package:desktop
```

İsteğe bağlı tarayıcı geliştirme sunucusu: `npm run start:web` → http://127.0.0.1:8787.

Testler: bağımsız bölgeler, delikler, rastgele maskelerde alan/hacim, kapalı ağlar, ortak eğrilerin boşluksuz alan kaplaması, sayısal yükseklik ve 250 mm çıktısı, kaynak renklerin korunması, proje uyumu. `tests/ui-smoke.mjs` ve `tests/desktop-smoke.mjs` gerçek arayüz ve EXE akışlarını doğrular. `tests/logo-regression.mjs` verilen logodaki renkleri, küçük yazıları ve vektör sınırlarının dışına taşma olmadığını kontrol eder; yakınlaştırılmış C harfinin görüntüsünü üretir. Playwright yolu `PLAYWRIGHT_PATH`, kullanıcı görseli `TEST_IMAGE` ile değiştirilebilir.

Teknoloji: Electron, Three.js, Earcut, Potrace, fflate, esbuild. Sürümler `package-lock.json` içinde sabitlenmiştir.

2.6 kontur düzeltmesi: Eğri birleştirmesinin ürettiği uzak teğet kesişimleri artık gerçek köşe olarak kullanılmaz. Köşe koruması, özgün çokgen ve kaynak sınırına yakınlık denetimiyle yapılır.  C ve L harflerindeki kenar çıkıntıları için kapalı ve kavşakta kesilen sınırlar Potrace kontur optimizasyonuna geçirildi. Tek noktadan oluşan ve çevresi aynı renkle kaplı JPEG lekeleri otomatik temizlenir. Sınır bir kez üretilip iki renkte ters yönlü paylaşılır. L tabanındaki seyrek raster çıkıntılarının düz bir vektör kenara dönüşmesi için ayrıca regresyon testi vardır. Potrace kaynak uyarlaması `src/vendor/potrace-curves.js`, tam GPL-2.0 lisansı `public/licenses/Potrace.txt` içindedir; matematik çekirdeği node-potrace 2.1.8 kaynaklarından alınmıştır. [Kaynak](https://github.com/tooolbox/node-potrace).
