# Katman Studio 3.10 — Otomatik görselden vektör ve 3D

Uygulama boş açılır. Görseli ekleyin; renk ayrımı, düzgün vektör eğrileri ve ayrıntı kalitesi otomatik hazırlanır. Piksel çözünürlüğü, kenar filtresi, gölge veya Z büyütme ayarı yapmanız gerekmez.

## Açma

**Baslat.bat** dosyasını veya **Masaustu/Katman Studio/Katman Studio.exe** dosyasını açın. Görsel dönüştürme ve 3D düzenleme için hazır Windows paketi Node.js, internet, sunucu veya tarayıcı gerektirmez. Yazıdan 3D motorunun ilk kurulumunda Python 3.10–3.12 ve internet gerekir; sonraki üretimler yereldir. EXE'yi taşırken yanındaki dosyaları da içeren klasörün tamamını taşıyın.

## 3D model düzenleme

Üstteki **3D model düzenle** sekmesi ayrı bir çalışma alanıdır; görselden kabartma çalışması sekmeler arasında korunur. STL, 3MF ve OBJ dosyası açılabilir; çıktı STL, renkli 3MF veya OBJ + MTL ZIP olarak kaydedilir. Dosya kaynakta değiştirilmez. Modelin konumu ve mm ölçüleri korunur; ızgara modelin altına yerleşir. **Modeli zemine ortala** düğmesi istenirse modeli XY merkezine ve Z=0 zeminine taşır; bu işlem kamera konumuyla birlikte geri alınabilir; 3MF birimleri mm’ye dönüştürülür. STL/OBJ birimsiz olduğundan mm kabul edilir. Dosya sınırı 100 MB / 1,5 milyon üçgendir. Harici OBJ MTL/doku dosyaları içeri alınmaz.

1. Gerekirse sağdan **Kesit görünümü** ile ön yüzeyleri gizleyin ve iç kısma ulaşın. Bu sadece görüntüdür; dışa aktarılan model kesilmez.
2. **Düz yüzeyden referans seç** ile yazının yanındaki temiz zemine / iç duvara tıklayın. **Yüzeye bak** görünümü bu yüzeye çevirir. Mavi ok işlem yönünü gösterir.
3. **Noktalarla alan seç** ile sınır noktalarını sırayla tıklayın. İlk noktaya tekrar tıklayın veya Enter ile kapatın; taralı alan işlem görecektir. Backspace son noktayı geri alır. Düzleme/doldurma için önce temiz yüzeyden referans seçin; tam kesimde görünüm düzlemi yeterlidir. İsteğe bağlı kutu ve daire araçları da bulunur. Alanı yalnızca kaldırılacak yazıyla sınırlayın.
4. Derinliği yazıyı kapsayacak şekilde ayarlayıp **Çıkıntılı yazıyı düzle** veya **Çukur yazıyı doldur** seçin. Ofset 0, referans yüzey seviyesidir. Yön yanlışsa ters çevrilebilir. İşlem seçilen parçada, seçilen alan ve derinlikle sınırlıdır; sonsuz bir düzlemle bütün gövde kesilmez.
5. Sarkıtılmış yazı veya bölümü kalınlığı boyunca kaldırmak için **Seçili alanı tamamen kes** kullanılır. Bu işlem sadece kutu/daire ayak izini kaldırır; bütün modeli düzlemle kesmez.
6. Ayrı duran yazı/harfler için **Bağlantısız parçaları ayır**, sonra parçayı seçip **Seçili parçaları sil** kullanılabilir. Gövdeye kaynaşmış yazı için yerel düzleme kullanılır. Ctrl / ⌘ ile çoklu parça seçilebilir.

Referans modunda sol sürükleme modeli döndürür. Sağ sürükleme modeli döndürür, tekerleğe basılı sürükleme kaydırır, tekerleği çevirme yakınlaştırır; bu kontroller bütün seçim araçlarında çalışır. **Görünümü kaydır** modunda sol sürükleme de kaydırır. **Görünüme sığdır** kamerayı modele getirir.

**Geri al / Yinele** son 12 işlemi tutar. Uzun geometri işlemleri iptal edilebilir; iptal edilen işlem modele uygulanmaz. Düzenleme motoru tarayıcıdaki WebAssembly worker içinde çalışır; model sunucuya yüklenmez ve internet gerekmez.

Araç seçilen yüzeyi **yerel bir düzleme** getirir. Eğri yüzeyin devamını otomatik tahmin etmez ve yazıları otomatik tanımaz. Açık veya tutarsız ağlarda yerel yüzey işlemi denenir ve belirgin uyarı gösterilir. Bu alternatif kaynak dosyanın tüm kusurlarını onarmaz; çıktı kapalı katı olarak garanti edilmez. İşlem sonrası önizlemeyi kontrol edip modelinizi dışa aktarın.

Doğrulama: iç taban yazısı silinirken duvarların hacmi ve sınırları korunur, iç dik duvarda yerel normalle silme, çukur yazı doldurma ve bağlantısız parça ayrımı geometri testleriyle kontrol edilir. `tests/mesh-editor-ui.mjs`, gerçek fare seçimiyle STL/3MF/OBJ içe aktarmayı, iç yüzey düzlemeyi, çıktı hacmini, geri almayı, kesit görünümünü ve sekme korumasını test eder. `KATMAN_NATIVE=1` paketli Windows EXE üzerinde aynı kontrolü yapar. `KATMAN_URL` ile LAN adresi de test edilebilir.

## Yerel ağdan tarayıcıyla kullanım

Windows paketindeki `Masaustu/Katman Studio/Web-Sunucusu-Baslat.bat` dosyasını açın. Node.js kurmaya gerek yoktur; paketli uygulamanın çalışma ortamı kullanılır. Tarayıcı otomatik açılır ve konsolda bu bilgisayarın IP adresleri gösterilir. Aynı Wi-Fi/Ethernet ağındaki diğer bilgisayarlarda gösterilen `http://IP:PORT/` adresini açın. Sunucu penceresi açık kalmalıdır; Ctrl+C ile kapatılır. Varsayılan port 8787’dir; doluysa sonraki boş port seçilir. Özel port için `Web-Sunucusu-Baslat.bat --port 9000` kullanılabilir.

Windows ağ erişim izni sorarsa güvendiğiniz özel yerel ağ için izin verin. Tarayıcılar kendi çalışmalarını tutar; cihazlar arasında proje taşımak için `.katman` dosyasını kaydedip açın. Vektör/kabartma ve model düzenleme istemci tarayıcısında çalışır. Yerel YZ motoru sunucu bilgisayarında çalışır; bu alanda seçilen görsel, aynı yerel ağdaki sunucu bilgisayarına aktarılır. Bulut servisine gönderilmez. YZ motoru ve son YZ üretimi ağ istemcileri arasında ortaktır.

Kaynak koddan aynı kullanım: `npm run start:web -- --lan --open`. `--lan` verilmezse yalnızca bu bilgisayarda (`127.0.0.1`) erişim açılır.

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

## 3.2 — Görünür işlem sonucu ve kusurlu ağlarda yerel kesim

Kesim/düzleme sırasında ilerleme, süre ve iptal düğmesi gösterilir. Etkisiz seçimler başarılı sayılmaz; belirgin hata verir ve modeli değiştirmez. Geçerli katılar Manifold ile işlenir. Kapalı katı kontrolünden geçemeyen dosyalarda three-bvh-csg ile yerel yüzey işlemi denenir; seçim hacimlerinin dışındaki kaynak üçgenler korunur. Kusurlu kaynak ağın tamamı onarılmaz ve çıktı kapalı katı olarak garanti edilmez; bu durum sonuçta açıkça belirtilir.

Gerçek Gallardo dosyasıyla regresyon: `TEST_MODEL` ortam değişkenini kaynak 3MF yoluna ayarlayıp `node tests/mesh-real-edit.mjs` çalıştırın. Test arayüzden yazıyı keser, dışa aktarılan STL’de kaybolduğunu, uzaktaki üçgenlerin korunduğunu ve geri almanın kaynağı geri getirdiğini doğrular. Model dosyası depoya eklenmez.

## 3.3 — Noktalarla seçim

İçbükey çokgen sınırları desteklenir; kesim çokgenin gerçek içinden yapılır. Çizgileri kesişen seçimler uygulanmaz. Taralı önizleme ve sınır noktaları görünür; Enter / ilk noktaya tıklama seçimi kapatır, Backspace son noktayı geri alır. Tekerleğe basılı sürükleme kaydırır; sağ sürükleme döndürür.

## 3.4 — Alan doldurma ve aynı düzlemde yüzey çizme

Sağdaki **Alan doldur / yüzey çiz** paneli noktalarla çizilen kapalı alana malzeme ekler. **Dolgu düzlemini yüzeyden al** ile mevcut yüzeye tıklayın; seçilmiş alan korunarak bu düzleme izdüşürülür. Üst yüzey aynı düzlemde olur; istenirse referansa göre yükseklik farkı girilir. **Z yüksekliği gir** seçeneğinde üst yüzeyin mutlak Z koordinatı belirlenir. Dolgunun altı modelin ilgili yöndeki alt sınırına kadar uzanır veya kullanıcı tarafından girilen kalınlık kullanılır. **Dolgu hacmini önizle** eklenecek hacmi gösterir. **Seçili alanı doldur** gerçek geometriye ekler; geri alma ve tüm çıktı biçimleri desteklenir. Eğri yüzeyin devamı otomatik tahmin edilmez; referans bir düzlemdir.

`node tests/mesh-fill-ui.mjs` arayüzden yüzey referansı alırken seçimin korunmasını, aynı düzleme doldurmayı, sayısal Z yüksekliğini, önizlemeyi ve STL çıktısındaki hacmi doğrular. `KATMAN_NATIVE=1` ile paketlenmiş EXE üzerinde çalışır.

## 3.5 — Etkileşim ve büyük model performansı

Sabit görünüm sürekli çizilmez; kamera/alan/model değiştiğinde çizilir ve kamera yumuşatması tamamlanınca durur. Görünmeyen çalışma alanları durur. Kapatılmış alan üzerinde fare hareketi dolgu hesabını tekrarlamaz; sabit seçim ve dolgu geometrileri yeniden kullanılır. Taslak fare hareketleri kare başına birleştirilir. Görünüm tamponları ve BVH seçim ağacı arka planda hazırlanır; üçgen sırası ve model geometrisi korunur. Geri alma görünüm tamponlarını yeniden kullanır. Zemine taşıma ve STL/3MF/OBJ üretimi arka planda çalışır. Normal masaüstü açılışı ekran kartını kullanır; yazılımsal çizim yalnızca otomatik testlerde isteğe bağlıdır.

`node tests/mesh-performance.mjs` gerçek modelde hareketsiz çizim sayısını ve kapalı seçim üzerindeki fare hareketi maliyetini ölçer. `TEST_MODEL` dosya yolunu, `PERF_ASSERT=1` performans kontrollerini etkinleştirir. Bu bilgisayarda 340.607 üçgenlik dosyada 600 ms içindeki hareketsiz çizim çağrıları 178’den 0’a, 80 fare hareketinin JavaScript süresi yaklaşık 661 ms’den 1 ms altına indi. Bunlar yerel ölçümlerdir; kesim motorunun toplam süresi veya bütün bilgisayarlar için FPS garantisi değildir.

## 3.6 — Seçimin dışına taşan kesim düzeltmesi

Kusurlu kaynak ağlarda kesim sınıflandırıcısı, seçime kısmen giren uzun yüzeylerin dışarıdaki parçalarını kaybedebiliyordu. Yerel kesim/düzleme artık kaynak üçgenleri seçim prizmasının sınırlarında böler; dış parçalar kaynak koordinatları ve renkleriyle korunur. Kesim kapakları da gerçek seçim sınırına kırpılır. İçbükey, daire, eğik ve örtüşen alanlar desteklenir. Kusurlu kaynağın tamamının onarıldığı veya çıktının kapalı katı olduğu iddia edilmez; mevcut ağ uyarısı sürer. Taralı alanın içinde kalan çerçeve ve diğer geometri kesime dahildir.

Gerçek dosyada çerçeveye taşan seçim regresyonu: `TEST_MODEL` Gallardo 3MF yolunu, `TEST_CUT_INSET=1` içeri taşan alanı seçer; `node tests/mesh-real-edit.mjs` STL çıktısında uzun yüzeylerin dış kısımlarını en yakın yüzey mesafesiyle kontrol eder. `KATMAN_NATIVE=1` masaüstü EXE üzerinde aynı testi çalıştırır. `tests/mesh-clip.test.mjs` uzun üçgenleri, eğik/çokgen/daire kesimleri, renk interpolasyonunu ve örtüşen kapakları kontrol eder.

## 3.7 — Ctrl+Z ve gölgeli derinlik görünümü

Masaüstü Ctrl+Z / ⌘Z, 3D düzenleyicinin geçmişine yönlendirilir. Çizim sırasında son nokta veya kapalı alan, işlem sonrasında geometri geri alınır. Ctrl+Y veya Ctrl+Shift+Z / ⌘Shift+Z yineler; Düzen menüsü de aynı geçmişi kullanır. Metin/sayı girişlerinde geri alma alanın kendi metnini düzenler. Menü ve klavye yolları tek adım uygular; araç çubuğu veya açılır liste odağı kısayolu engellemez.

Gölge / derinlik anahtarı varsayılan açıktır. Yönlü ışık, daha düşük ortam aydınlatması, yüzeyler arası ve zemine düşen yumuşak gölgeler derinlik algısını artırır. Işık kadrajı modele uyar. Gölge haritası model/ışık/kesit değişince yenilenir; sabit görünüm sürekli çizilmez. Bu görsel efektler STL/3MF/OBJ geometrisine eklenmez.

`tests/mesh-fill-ui.mjs` gerçek klavye ile nokta, alan ve iki ardışık geometri işleminin tek tek geri alınıp yinelenmesini; masaüstü menüsünü, metin alanını ve gölge açıp kapatmanın STL’yi değiştirmediğini doğrular.

## 3.8 — Yazıdan 3D, tamamen yerel

**Yazıdan 3D · Yerel YZ** sekmesi, bir bulut API’si yerine OpenAI Shap-E modelini bilgisayarda çalıştırır. [Resmî kaynak ve MIT lisansı](https://github.com/openai/shap-e). Türkçe tarif Helsinki-NLP/opus-mt-tr-en ile yerelde İngilizceye çevrilir; ardından gerçek difüzyon örneklemesi ve 3D yüzey çıkarımı yapılır. Hazır ördek/köylü şekilleri gösterilmez. Model kurulu değilse üretim devre dışıdır ve kurulum istenir.

İlk kurulum Python 3.10–3.12, internet ve birkaç GB boş disk alanı gerektirir. **Yerel motoru kur / tamamla** ayrı bir Python ortamı oluşturur; Windows’ta Python çalışma dosyaları da bağımsız klasöre kopyalanır. Shap-E/CLIP kaynakları sabit commitlerden, resmî ağırlıklar SHA-256 kontrolüyle indirilir. Türkçe çeviri modeli de önceden indirilir. Sonraki üretimlerde ağ soketleri kapatılır; eksik model dosyası olduğunda gizlice internetten indirilmez, hata gösterilir. API anahtarı ve abonelik kullanılmaz.

Bu sürüm işlemciyi kullanır; Windows Radeon RX 6700 XT’de CUDA varsayılmaz. Hesaplama ayrı süreçte ve sınırlı CPU iş parçacığıyla çalışır; arayüz kullanılabilir, üretim durdurulabilir. Üretim birkaç dakika veya daha uzun sürebilir. **Hızlı taslak** / **Daha ayrıntılı** seçenekleri ve varyasyon numarası vardır. Model yüksekliği 1–250 mm’dir. Sonuç gölgeli 3D önizlemede döndürülür; 3MF/STL/OBJ kaydedilir veya mevcut 3D düzenleyiciye aktarılır. Aktarım önceki modeli geri alma geçmişinde tutar.

**Kalite sınırı:** Shap-E deneysel ve görece eski bir yerel modeldir. Basit figürler üretilebilir; gerçekçi insan, yüz/parmak, şapka veya tırpan gibi çoklu ince ayrıntıların tarife tam uyması garanti edilmez. Bu özellik profesyonel karakter modelleme veya baskıya hazır kapalı ağ garantisi vermez. Sonucu önizleyip gerekirse farklı tarif/varyasyon deneyin.

Model ve sonuçlar Windows’ta `%APPDATA%/Katman Studio/Yerel-YZ` altında bulunur; `KATMAN_AI_HOME` ile değiştirilebilir. Hazır motor masaüstünde yerel IPC ile, tarayıcı/LAN kullanımında aynı bilgisayardaki Node sunucusu üzerinden çağrılır. Tarif bulut servisine gönderilmez. Mac’te ayrı Python kurulumu gerekebilir; yerel çıkarım bu geliştirme oturumunda Windows CPU üzerinde doğrulanır, Mac için aynı çıkarım doğrulaması yapılmış sayılmaz.

Geliştirici kurulumu: `python local-ai/install.py --home <model-klasörü>`. Sonra `KATMAN_AI_HOME` bu klasöre ayarlanarak uygulama veya `server.mjs` başlatılabilir. Büyük model dosyaları ve ortam depoya/uygulama paketine eklenmez. `tests/local-ai-ui.mjs` açıkça test verisiyle arayüz/aktarım akışını; `tests/local-ai.test.mjs` istek doğrulamasını ve LAN sınırlarını kontrol eder. Gerçek motor testi ayrıca gerçek ağırlıklar kullanılarak yapılmalıdır.

## 3.9 — Kontrol görseli ve onaydan sonra yerel 3D

Shap-E'nin tarif uyumu yetersiz kaldığı için yeni akış doğrudan Shap-E metin örneklemesini kullanmaz. Serbest Türkçe/İngilizce tarif önce [SD-Turbo](https://huggingface.co/stabilityai/sd-turbo) ile bilgisayarda bir **2D kontrol görseline** dönüştürülür. Kullanıcı doğru bulduğu görseli onayladığında [Hunyuan3D-2 Mini Turbo](https://huggingface.co/tencent/Hunyuan3D-2mini) bu görselden gerçek 3D yüzey üretir. Ördek/köylü düğmeleri kaldırılmıştır; nesne adlarına göre hazır şekil seçilmez. Tarif değişirse eski görselin onayı kullanılamaz. Uzun metnin sonu sessizce kırpılmaz; görsel modelinin metin sınırı aşılırsa kısaltma istenir.

Motor `local-ai/install_v2.py --home <model-klasörü>` ile veya uygulamadaki kurulum düğmesiyle hazırlanır. Sabit model/kaynak sürümleri kullanılır. Büyük ağırlıklar parça parça indirilir ve depo metadatasındaki SHA-256 ile doğrulanır; kesilmiş indirmeler korunur. Yeni hazırlık işareti `ready-v2.json`'dır; eski Shap-E kurulumu yeni motor hazırmış gibi gösterilmez. Sonuçlar `last-concept-v2.json`, `last-model-v2.json` ve `jobs/<uuid>` altında kalır; eski model verisi silinmez.

Çalıştırıcı bütün modelleri aynı anda bellekte tutmaz. Yerel çeviri, görsel üretimi, görüntüden özellik çıkarımı, biçim üretimi ve yüzey çözümü sırayla yapılır. Bu sürüm **işlemciyi** kullanır; AMD ekran kartında CUDA varsayılmaz. Üretim sırasında ağ soketleri ve model indirme yolları kapalıdır. **3D çıktı tek renk geometridir**; kontrol görselinin dokusu/renkleri aktarılmaz. Görselin tarife uyması, 3D arka yüzünün veya ince aksesuarların kusursuz çıkacağını garanti etmez. Üretilen 3D yüzey ayrıca kontrol edilmelidir. Model lisansları yukarıdaki resmî depolarda bulunur; ağırlıklar Git deposuna eklenmez.

`tests/local-ai-ui.mjs` açıkça sahte test verisiyle serbest tarifin iletilmesini, görsel onayı kapısını, değiştirilmiş tarifin reddini, dışa aktarma ve geri almayı sınar. Bu test **YZ kalitesi ölçümü değildir**. Gerçek kurulumla `node tests/local-ai-real.mjs --concept "tarif"` çalıştırılıp oluşan PNG incelenir; ardından `node tests/local-ai-real.mjs --mesh <onaylanan-görsel-uuid>` ile ayrı ve açık bir 3D üretimi yapılır. `--en` İngilizce tarif seçer. Mac çıkarımı bu oturumda doğrulanmış sayılmaz.

Windows CPU üzerinde gerçek doğrulama: aynı Türkçe ördek tarifinin kontrol görseli yaklaşık 72 saniyede, farklı kırmızı çaydanlık tarifinin kontrol görseli 63 saniyede üretildi. Ördek görseli masaüstü arayüzündeki onay düğmesiyle gerçek 3D'ye çevrildi; üretim, önizleme ve çıktı kontrolleri yaklaşık 465 saniye sürdü (hızlı taslak). Bunlar tek bilgisayardaki ölçümlerdir. Yüzey çözümünün üst üste binen/sıfır alanlı üçgenleri çıktıdan temizlenir; farklı geçerli parçalar korunur. Gerçek örnekte temizlenmiş 301.214 üçgenli modelin sınırları ve hacmi korundu; yeniden açılan STL kapalı ve 100 mm olarak doğrulandı. 3MF kaydı ve düzenleyiciye aktarımı da gerçek modelle sınandı. `tests/local-ai-mesh.py`, kurulu YZ ortamının Python'u ile ağ/inferans gerektirmeden bu temizliğin kapalı yüzey, hacim ve ayrı parçaları korumasını kontrol eder.

## 3.10 — Kendi görselinden yerel 3D

**Yazı / görselden 3D · Yerel YZ** sekmesindeki **Görsel yükle / buraya sürükle** alanı PNG, JPG ve WEBP kabul eder. Metin yazmak gerekmez; yüklenen görsel SD-Turbo'da yeniden çizilmez. Görseli kontrol edip **Görseli onayla ve 3D üret** düğmesine basın. Bu alan tam 3D biçim tahmini yapar; önceki **Görselden 3D** sekmesindeki vektör/kabartma iş akışı ayrıca korunur.

**Yüklerken arka planı ayır** seçeneği yüklemeden önce seçilir. Gerçek saydamlığı olan PNG/WEBP'de mevcut alfa kanalı korunur ve tekrar otomatik kesim yapılmaz. Diğer görsellerde isteğe bağlı yerel arka plan ayırma uygulanır. Önizlemedeki sonuç doğru değilse bu seçeneği değiştirip görseli tekrar yükleyin. Kaynak dosya değiştirilmez. En fazla 25 MB / 25 milyon piksellik görsel kabul edilir; çalışma kopyasının uzun kenarı otomatik olarak 1024'e sığdırılır. Piksel/kalite parametresi ayarlamanız gerekmez.

Masaüstünde dosya yerel IPC ile, LAN tarayıcısında aynı ağdaki sunucu bilgisayarına boyut ve tür kontrolü olan bir istekle iletilir. API dosya yolu veya harici görsel URL'si kabul etmez. 3D üretimi bilgisayarda kalır; yeni model indirmesi veya API anahtarı gerekmez (3.9 motoru kurulmuşsa). Sonuç döndürülebilir, STL/3MF/OBJ kaydedilebilir ve düzenleyiciye aktarılabilir. Tek fotoğrafın görünmeyen yüzeyi model tarafından tahmin edilir; çıktı hâlâ tek renk geometridir.

Gerçek masaüstü doğrulamasında bir çaydanlık PNG'si dosya seçicisinden yüklendi. Metin girilmeden ve SD-Turbo çağrılmadan yerel 3D üretimi, önizleme, STL/3MF kaydı ve düzenleyiciye aktarım tamamlandı. Bu bilgisayarda hızlı taslak akışı yaklaşık 448 saniye sürdü; 208.784 üçgenli STL yeniden açılıp kapalı ve 100 mm olarak doğrulandı. Birim testleri saydamlığı ve arka planı korumayı; arayüz testi dosya seçiciyi ve 3D önizleme üstüne sürüklemeyi; LAN testi 4 KB'den büyük görsel isteğinin doğru uçta kabul edilmesini sınar. Arayüz testinin şekli açıkça test verisidir; gerçek çıkarım doğrulaması bundan ayrıdır.
