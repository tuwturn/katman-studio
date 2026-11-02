# Katman Studio

Katman Studio; görselleri düzenlenebilir vektör bölgelerine ve 3D kabartmalara dönüştüren, 3D modelleri düzenleyen ve yerel yapay zekâ modelleriyle yazıdan ya da görselden 3D taslak oluşturan bir masaüstü uygulamasıdır.

## Özellikler

- **Görselden vektör ve kabartma:** Yaygın görsel biçimlerini açın, düzgün vektör sınırları oluşturun, tek tek bölgeleri veya benzer renkleri seçin, yükseklik verin, önizleyin ve 3MF, STL, OBJ ya da SVG olarak dışa aktarın.
- **3D model düzenleme:** STL, 3MF ve OBJ dosyalarını açın. Noktalarla yüzey alanı seçin; çıkıntılı kısımları kaldırın, alanları düzleyin veya doldurun, işlemleri geri alın ve modeli dışa aktarın.
- **Yazıdan veya görselden 3D:** Bir tariften ya da içe aktarılan görselden yerel bir kontrol görseli oluşturun. Kontrol edip onayladıktan sonra 3D model üretin ve önizleyin. Görsel tarzını ve tek ana konu seçeneğini belirleyin. 3MF, STL veya OBJ olarak kaydedin.
- **Yerel işlem:** Kurulan yapay zekâ modelleri üretim API anahtarı olmadan seçilen bilgisayarda çalışır. Model dosyaları isteğe bağlıdır ve ilk kurulum sırasında indirilir.
- **Yerel ağ erişimi:** Paketle gelen web sunucusunu başlatarak aynı ağdaki tarayıcılardan vektör ve düzenleme alanlarına erişin. Yerel yapay zekâ üretimi sunucuyu çalıştıran bilgisayarda yapılır.
- **macOS:** GitHub Releases bölümünden Apple Silicon veya Intel işlemcinize uygun paketi indirin.

Yapay zekâ ile üretilen şekiller ve görünmeyen yüzeyler tahmindir. Üretimden önce önizlemeyi ve dışa aktarılan ağı kontrol edin. Görselden kabartma dönüşümü kaynak deseni izler; kaynakta bulunmayan ayrıntılar yeniden oluşturulmaz.

## Windows’ta açma

`Baslat.bat` veya `Masaustu/Katman Studio/Katman Studio.exe` dosyasını açın. Uygulamayı taşırken paket klasörünün tamamını birlikte taşıyın. Vektör ve 3D düzenleme alanları yerel çalışır; tarayıcı, sunucu veya ağ bağlantısı gerekmez.

Yerel yapay zekâ modelinin ilk kurulumu internet bağlantısı ister. Modeller kurulduktan sonra üretim yerel yapılır. Model dosyaları Git deposunun dışında tutulur ve uygulama paketine eklenmez.

## Yerel ağdan tarayıcıyla kullanma

Windows’ta `Masaustu/Katman Studio/Web-Sunucusu-Baslat.bat` dosyasını açın. Konsolda aynı ağdaki diğer cihazlarda kullanabileceğiniz yerel adresler görünür. Bağlantı boyunca sunucu penceresini açık tutun. Sunucuyu durdurmak için `Ctrl+C` kullanın.

Kaynak koddan başlatmak için `npm run start:web -- --lan --open` komutunu çalıştırın. `--lan` kullanılmazsa sunucu yalnızca aynı bilgisayardan erişilebilir.

## macOS

Mac işlemcinize uygun DMG veya ZIP paketini GitHub Releases bölümünden indirin ve uygulamayı Applications klasörüne taşıyın. Paketler notarize edilmediğinden ilk açılışta macOS güvenlik bildirimi gösterebilir.

Kaynak koddan paketlemek için:

```sh
npm ci
npm run build
npm start
npm run package:mac -- --arm64  # Apple Silicon
npm run package:mac -- --x64    # Intel
```

## Görselden kabartma oluşturma

1. PNG, JPG, WEBP, BMP, SVG veya desteklenen başka bir görseli açın.
2. Oluşturulan vektör deseni ve 3D önizlemeyi inceleyin.
3. Çalışma alanından tek bir bölge, aynı renkli bölgeler veya yakın tonlar seçin.
4. 0–250 mm arasında, 0,02 mm adımlarla kabartma yüksekliği belirleyin.
5. İstediğiniz biçimde dışa aktarın.

Teması olmayan aynı renkli bölgeler ayrı ayrı veya birlikte ayarlanabilir. Arka planı kaldırma işlemi dönüştürme öncesinde açılıp kapatılabilir.

3MF renkli bölgeleri ve kabartma geometrisini korur. STL geometriyi renksiz kaydeder. OBJ, geometriyi bir MTL dosyasıyla birlikte dışa aktarır. SVG düzenlenebilir vektör yollarını korur.

## 3D model düzenleme

**3D model düzenle** alanında STL, 3MF veya OBJ dosyası açın. Nokta seçme aracıyla alanın çevresini işaretleyin. Seçili alanı kesme, düzleme veya doldurma işlemlerinden birini uygulayın. İşlemin mevcut bir düzleme hizalanması gerekiyorsa önce referans yüzey seçin. Dışa aktarmadan önce Geri Al ve Yinele ile değişiklikleri kontrol edin.

Düzenleyici yerel yüzey işlemleri uygular; yazıları kendiliğinden tanımaz ve seçili alan dışındaki eğri yüzeyi tahmin etmez. Baskıdan önce önizlemeyi inceleyin ve ağı hedef dilimleyicide kontrol edin.

## Yerel yapay zekâ ile yazıdan veya görselden 3D

Bir tarif yazın veya görsel yükleyerek 2D kontrol görseli hazırlayın. Görsel tarzını seçin, sonucu inceleyin ve 3D üretimine geçmeden önce onaylayın. Yerel modeller genel amaçlı görsel ve şekil üreticileridir; aynı tarif farklı sonuçlar verebilir. Seçilen tarz veya konu sayısı birebir sonuç garantisi vermez. Gerekirse yeni varyasyon üretin veya tarifi düzenleyin.

## Kaynak koddan geliştirme

Node.js ve npm gereklidir. Uygulamayı kaynak koddan başlatmak için:

```powershell
npm install
node node_modules/electron/install.js
npm run build
npm start
```

Windows masaüstü paketi oluşturmak için `npm run package:desktop` komutunu kullanın.

## Yapay zekâ model lisansları

Her model, yayıncısının deposundaki sabit bir sürümden indirilir ve kurulum sırasında doğrulanır. Model ağırlıkları bu depoya eklenmez. Bir modeli kurmadan önce yayıncısının deposundaki lisans ve kullanım koşullarını inceleyin.
