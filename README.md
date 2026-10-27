# Kalkulator komór cysterny (PWA)

Aplikacja działa w całości w telefonie, także bez internetu. Dane (komory, produkt) zapisują się lokalnie w przeglądarce.

## Publikacja na GitHub Pages
1. Utwórz nowe repozytorium na GitHubie, np. `kalkulator-komor`.
2. Wgraj do niego całą zawartość tego folderu (index.html, manifest.webmanifest, sw.js, folder icons).
3. Settings → Pages → Source: „Deploy from a branch”, gałąź `main`, folder `/ (root)`.
4. Po 1–2 minutach aplikacja będzie pod adresem `https://<twoj-login>.github.io/kalkulator-komor/`.

## Instalacja na telefonie
- **Android (Chrome):** otwórz adres → menu ⋮ → „Zainstaluj aplikację” / „Dodaj do ekranu głównego”.
- **iPhone (Safari):** otwórz adres → przycisk Udostępnij → „Do ekranu początkowego”.

Po pierwszym otwarciu z internetem aplikacja działa offline.

## Aktualizacja
Po zmianie plików podnieś wersję w `sw.js` (`komory-v1` → `komory-v2`), żeby telefony pobrały nową wersję.

## Uwaga
Przycisk „Zapytaj Claude” działa tylko w wersji otwartej w aplikacji Claude. W wersji zainstalowanej jest ukryty; dane produktu wpisuje się z listy lub ręcznie.
