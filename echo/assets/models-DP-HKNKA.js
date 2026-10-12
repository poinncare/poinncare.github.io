const e=`<!-- source: 9faa3c0947fe -->

# 🌟 Modèles Echo 🌟

Bienvenue sur la page des modèles Echo ! Vous trouverez ici une liste organisée de modèles suggérés à utiliser avec Echo. Pour installer un modèle, utilisez le lien « Configuration magique » pour l'ouvrir dans Echo, ou copiez-collez le lien de téléchargement direct dans les paramètres de Echo.

## Modèles disponibles

### 🌱 Modèle Tiny

Une version compacte et efficace, adaptée aux tâches rapides et aux environnements à ressources limitées.

[👉 Configuration magique](echo://download/?url=https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-tiny.bin?download=true)
[🔽 Téléchargement direct](https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-tiny.bin?download=true)

### 🚀 Large v3 Turbo (Recommandé)

[👉 Configuration magique](echo://download/?url=https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-large-v3-turbo.bin)
[🔽 Téléchargement direct](https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-large-v3-turbo.bin)

### 🦜 Parakeet TDT 0.6B v3

Prend en charge le streaming et est particulièrement adapté à la dictée.

[👉 Voir le modèle](https://github.com/poinncare/Echo/releases/tag/v1.0.0)
[🔽 Télécharger Q4_K_M](https://github.com/poinncare/Echo/releases/download/v1.0.0/parakeet-tdt-0.6b-v3-Q4_K_M.gguf)

### ⚡ Nemotron 3.5 ASR Streaming 0.6B

Prend en charge le streaming et est particulièrement adapté à la dictée.

[👉 Voir le modèle](https://github.com/poinncare/Echo/releases/tag/v1.0.0)
[🔽 Télécharger Q4_K_M](https://github.com/poinncare/Echo/releases/download/v1.0.0/nemotron-3.5-asr-streaming-0.6b-Q4_K_M.gguf)

### Modèles optimisés pour d'autres langues

<details>
<summary>✡️ Hébreu (Ivrit)</summary>

Spécialisé pour les données en langue hébraïque (Ivrit), optimisé pour une grande rapidité et précision dans les tâches en hébreu.

[👉 Configuration magique (Large v3 Turbo)](echo://download/?url=https://huggingface.co/ivrit-ai/whisper-large-v3-turbo-ggml/resolve/main/ggml-model.bin?download=true)
[🔽 Téléchargement direct (Large v3 Turbo)](https://huggingface.co/ivrit-ai/whisper-large-v3-turbo-ggml/resolve/main/ggml-model.bin?download=true)

</details>

<details>
<summary>🇳🇴 Norvégien</summary>

Optimisé pour le norvégien par l'[AI Lab de la Bibliothèque nationale de Norvège](https://huggingface.co/NbAiLab).

[👉 Configuration magique (medium)](echo://download/?url=https://huggingface.co/NbAiLab/nb-whisper-medium/blob/main/ggml-model.bin?download=true)
[🔽 Téléchargement direct (medium)](https://huggingface.co/NbAiLab/nb-whisper-medium/blob/main/ggml-model.bin?download=true)

[👉 Configuration magique (large)](echo://download/?url=https://huggingface.co/NbAiLab/nb-whisper-large/blob/main/ggml-model.bin?download=true)
[🔽 Téléchargement direct (large)](https://huggingface.co/NbAiLab/nb-whisper-large/blob/main/ggml-model.bin?download=true)

D'autres modèles de tailles plus petites sont disponibles via [leur page de téléchargement huggingface](https://huggingface.co/NbAiLab/nb-whisper-large).
Trouvez la taille souhaitée, téléchargez le fichier _ggml-model.bin_, renommez-le, puis placez-le dans le dossier des modèles de echo.

</details>

<details>
<summary>🇸🇪 Suédois</summary>

Optimisé pour le suédois par le [Data Lab de la Bibliothèque nationale de Suède](https://huggingface.co/KBLab).

[👉 Configuration magique (medium)](echo://download/?url=https://huggingface.co/KBLab/kb-whisper-medium/blob/main/ggml-model.bin?download=true)
[🔽 Téléchargement direct (medium)](https://huggingface.co/KBLab/kb-whisper-medium/blob/main/ggml-model.bin?download=true)

[👉 Configuration magique (large v3)](echo://download/?url=https://huggingface.co/KBLab/kb-whisper-large/blob/main/ggml-model.bin?download=true)
[🔽 Téléchargement direct (large v3)](https://huggingface.co/KBLab/kb-whisper-large/blob/main/ggml-model.bin?download=true)

D'autres modèles de tailles plus petites sont disponibles via [leur page de téléchargement huggingface](https://huggingface.co/KBLab/kb-whisper-large).
Trouvez la taille souhaitée, téléchargez le fichier _ggml-model.bin_, renommez-le, puis placez-le dans le dossier des modèles de echo.

</details>
</details>

Amusez-vous à explorer ces modèles et à enrichir votre expérience Echo ! 🌐✨

### Envie de plus ?

Trouvez des modèles supplémentaires ici :

[👉 Voir plus de modèles](https://huggingface.co/ggerganov/whisper.cpp/tree/main)

---

### Préparez vos propres modèles

<details>
<summary>Convertir des transformers en GGML</summary>

\`\`\`console
# Setup environment
curl -LsSf https://astral.sh/uv/install.sh | sh
source ~/.bashrc
uv venv
uv pip install torch transformers huggingface_hub
huggingface-cli login --token "token" # https://huggingface.co/settings/tokens

# Convert and upload
git clone https://github.com/openai/whisper
git clone https://github.com/ggml-org/whisper.cpp
git clone https://huggingface.co/ivrit-ai/whisper-large-v3-turbo
uv run ./whisper.cpp/models/convert-h5-to-ggml.py ./whisper-large-v3-turbo/ ./whisper .
uv run huggingface-cli upload --repo-type model whisper-large-v3-turbo-ivrit ./ggml-model.bin ./ggml-model.bin

# Quantize
sudo apt install cmake build-essential -y
cd whisper.cpp
cmake -B build
cmake --build build --config Release
cd ..
./whisper.cpp/build/bin/quantize ggml-model.bin ./ggml-model.int8.bin q8_0 # fp32/fp16/q8_0/q5_0
\`\`\`

</details>
`;export{e as default};
