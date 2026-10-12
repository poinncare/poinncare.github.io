const n=`<!-- source: b619a34a271a -->

# Uwagi dotyczące instalacji 📝

## Wymagania systemowe

Windows: wersja \`8\` lub nowsza.

macOS: wersja \`13.3\` lub nowsza.

Linux: przetestowano na \`ubuntu-22.04+\`

Sprzęt:
Brak specjalnych wymagań. Zużycie zasobów można dostosować w zaawansowanych ustawieniach w oknie głównym.

Obecnie nasłuchiwanie pliku audio nie jest obsługiwane na \`Linux\`

Dodatkowo może być konieczne ustawienie tej zmiennej środowiskowej przed uruchomieniem

\`\`\`console
export WEBKIT_DISABLE_COMPOSITING_MODE=1
\`\`\`

## Konfiguracja streszczeń z Ollama

1. Zainstaluj Ollama

Pobierz i zainstaluj Ollama ze strony https://ollama.com.

2. Zainstaluj model

Po zainstalowaniu skonfiguruj model do tworzenia streszczeń. Możesz na przykład zainstalować \`llama3.1\`, uruchamiając w terminalu następujące polecenie:

\`\`\`console
ollama run llama3.1
\`\`\`

3. Włącz streszczenia

Po zainstalowaniu modelu otwórz aplikację Ollama. Przejdź do Więcej opcji i włącz opcję Podsumuj tuż przed etapem transkrypcji. Ustawienia możesz pozostawić domyślne.

_Upewnij się, że uruchomisz \`Uruchom sprawdzanie\`, aby sprawdzić, czy działa_

To wszystko! Streszczenia będą teraz aktywne w Ollama.

## Stabilne znaczniki czasu (napisy / filmy)

Echo zawiera tryb stabilnych znaczników czasu, zapewniający dokładniejsze dopasowanie napisów w długich nagraniach.

1. Otwórz \`Więcej opcji\`.
2. Włącz \`Stabilne znaczniki czasu\`.
3. Jeśli pojawi się monit, pobierz model VAD.

Uwagi:

- Ten tryb stawia na jakość i jest zwykle około \`4x\` wolniejszy niż zwykła transkrypcja.
- Najlepszy do tworzenia napisów i synchronizacji transkryptu z filmem/wideo.
- Domyślnie używany model VAD: \`ggml-silero-v6.2.0.bin\`
- Źródło modelu: \`https://huggingface.co/ggml-org/whisper-vad\`

## Tłumaczenie na angielski

Tłumaczenie na angielski działa tylko z modelami Whisper \`small\`, \`medium\` i \`large\`. Nie działa z modelem Whisper \`large-v3-turbo\`.

Jeśli potrzebujesz tłumaczenia, pobierz obsługiwany model ze [strony modeli](/echo/docs#models).

## Instalacja ręczna 🛠️

\`MacOS Apple silicon\`: zainstaluj plik \`aarch64.dmg\` z [wydań](https://github.com/poinncare/Echo/releases) **Nie zapomnij raz kliknąć prawym przyciskiem myszy i otworzyć z folderu Aplikacje**

\`MacOS Intel\`: zainstaluj plik \`x64.dmg\` z [wydań](https://github.com/poinncare/Echo/releases) **Nie zapomnij raz kliknąć prawym przyciskiem myszy i otworzyć z folderu Aplikacje**

\`Windows\`: zainstaluj plik \`.exe\` z [wydań](https://github.com/poinncare/Echo/releases)

\`Linux\`: zainstaluj plik \`.deb\` z [wydań](https://github.com/poinncare/Echo/releases) (użytkownicy \`Arch\` mogą użyć [debtap](https://aur.archlinux.org/packages/debtap))

_Wszystkie modele dostępne do instalacji ręcznej. Zobacz [gotowe modele](https://huggingface.co/ggerganov/whisper.cpp/tree/main)_

## Konfiguracja offline 💾

Instalacja offline w Echo jest prosta: otwórz aplikację, anuluj pobieranie i przejdź do sekcji \`Dostosuj\` w ustawieniach.

_Wszystkie modele dostępne do instalacji ręcznej. Zobacz ustawienia lub [gotowe modele](https://huggingface.co/ggerganov/whisper.cpp/tree/main)_

## Szybsza transkrypcja na macOS (2-3x) 🌟

1. Pobierz odpowiedni plik \`.mlcmodelc.zip\` dla swojego modelu ze strony https://huggingface.co/ggerganov/whisper.cpp/tree/main

- np. \`ggml-medium-encoder.mlmodelc.zip\` odpowiada plikowi \`ggml-medium-encoder.bin\`

2. Otwórz ścieżkę modeli z ustawień Echo
3. Przeciągnij i upuść plik \`.mlcmodel.c\` do folderu modeli, tak aby znalazł się obok pliku \`.bin\`
4. Przetranskrybuj plik — za pierwszym razem użycie modelu potrwa dłużej, ponieważ jest on kompilowany. Każde kolejne użycie będzie szybsze.

## Błąd braku pliku \`msvc140.dll\` ❌

Pobierz i zainstaluj [vc_redist.x64.exe](https://aka.ms/vs/17/release/vc_redist.x64.exe)

## Specjalny link do pobierania modeli w Echo

Możesz dodać na swojej stronie internetowej linki, które pozwolą użytkownikom łatwo pobierać Twoje modele bezpośrednio do Echo.

Adres URL powinien wyglądać tak

\`\`\`
echo://download/?url=https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-tiny.bin?download=true
\`\`\`

## Użycie na serwerze Linux

Aby używać Echo na serwerze Linux, musisz zainstalować wirtualny ekran

\`\`\`console
sudo apt-get install xvfb -y
Xvfb :1 -screen 0 1024x768x24 &
export DISPLAY=1

wget https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-medium.bin
wget https://github.com/poinncare/Echo/raw/main/server/fixtures/single.wav
echo --model ggml-medium.bin --file single.wav
\`\`\`
`;export{n as default};
