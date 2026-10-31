# Kalkulator komór cysterny (PWA)

Planowanie załadunku cysterny wielokomorowej: kilka produktów, zapisane naczepy, wyszukiwarka produktów (nazwa PL/NL/EN lub nr UN), stopień napełnienia wg ADR 4.3.2.2 i zasada 20/80 (ADR 4.3.2.3.6).

Adres aplikacji: https://filipkrawczykns-star.github.io/tank-loading/

## Instalacja na telefonie
- **Android (Chrome):** otwórz adres → menu ⋮ → „Zainstaluj aplikację”.
- **iPhone (Safari):** otwórz adres → Udostępnij → „Do ekranu początkowego”.

## Aktualizacje
Nie trzeba instalować ponownie ani czyścić danych. Przy otwarciu z internetem aplikacja pobiera najnowszą wersję. Jeśli była otwarta w tle, pokaże pasek „Dostępna nowa wersja – Odśwież”. Bez zasięgu działa ostatnia pobrana wersja.

Wydanie nowej wersji (dla autora): zmień `APP_VERSION` w `index.html`, ten sam numer w `version.json` i `CACHE` w `sw.js`.

## Dane
Naczepy, „Moje produkty” i ustawienia są zapisane w pamięci przeglądarki na telefonie. Aktualizacje ich nie usuwają; zmiana formatu danych przenosi je automatycznie, a stary zapis zostaje jako kopia. Ręczne wyczyszczenie danych przeglądarki lub odinstalowanie aplikacji je usuwa, dlatego używaj „Kopia zapasowa” (plik przez Udostępnij albo tekst).
