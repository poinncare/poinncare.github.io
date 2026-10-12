---
license: cc-by-4.0
language:
- he
library_name: transformers
pipeline_tag: automatic-speech-recognition
base_model: nvidia/parakeet-tdt-0.6b-v3
tags:
- speech
- asr
- hebrew
- fastconformer
- tdt
- parakeet
---

# parakeet-tdt-0.6b-v3-he

Hebrew speech recognition, fine-tuned from [nvidia/parakeet-tdt-0.6b-v3](https://huggingface.co/nvidia/parakeet-tdt-0.6b-v3).

## Usage

```sh
pip install "transformers>=5.18" torch librosa
```

```python
import librosa
from transformers import AutoModelForTDT, AutoProcessor

repo = "thewh1teagle/parakeet-tdt-0.6b-v3-he"
processor = AutoProcessor.from_pretrained(repo)
model = AutoModelForTDT.from_pretrained(repo)

audio, _ = librosa.load("audio.wav", sr=16000, mono=True)
inputs = processor(audio, sampling_rate=16000, return_tensors="pt")
out = model.generate(**inputs)
print(processor.batch_decode(out.sequences, skip_special_tokens=True)[0])
```

Also included: `parakeet-tdt-0.6b-v3-he.q8_0.gguf` for [NeMo-Speech.cpp](https://github.com/NVIDIA/NeMo-Speech.cpp).
For the Echo transcription app, see the [Echo Models guide](https://poinncare.github.io/echo/docs/?lang=ru-RU#models) for supported downloads.

## Results

WER (%, lower is better) on ivrit.ai's human-transcribed test sets, scored with the
[leaderboard](https://huggingface.co/spaces/ivrit-ai/hebrew-transcription-leaderboard) normalization.
Other models' numbers are from the leaderboard.

| Model | eval-d1 ↓ | eval-whatsapp ↓ |
|---|---|---|
| Soniox | 4.8 | 9.0 |
| [ivrit-ai/whisper-large-v3-turbo](https://huggingface.co/ivrit-ai/whisper-large-v3-turbo) | 5.3 | 7.1 |
| **🦜 parakeet-tdt-0.6b-v3-he (this model)** | **6.1** | **8.8** |
| Amazon Transcribe | 6.6 | 10.4 |
| Deepgram nova-3 | 6.7 | 12.0 |
| OpenAI gpt-4o-transcribe | 7.3 | 12.6 |
| [openai/whisper-large-v3-turbo](https://huggingface.co/openai/whisper-large-v3-turbo) | 8.4 | 12.8 |
| [openai/whisper-large-v3](https://huggingface.co/openai/whisper-large-v3) | 9.8 | 13.2 |

## Limitations

- Hebrew only: English words come out in Hebrew letters.
- Weaker on read encyclopedic text (FLEURS: 76.8 vs ~82 for the best models): rare names, numbers, Latin terms.
- Numbers are written as words or digits inconsistently.

## Fine-tuning & training notes

<details>
<summary><b>Fine-tune this model</b></summary>

The `.nemo` includes the extended tokenizer — load it and train as usual, no `change_vocabulary()`.

```python
from nemo.collections.asr.models import ASRModel
model = ASRModel.from_pretrained("thewh1teagle/parakeet-tdt-0.6b-v3-he")
# then NeMo's standard ASR fine-tuning (manifest: audio_filepath, text, duration)
```

- Audio 16 kHz mono; normalize text like training: strip nikud and bidi marks, geresh/gershayim → `'`/`"`.
- Low LR (~1e-5 – 3e-5), short warmup, bf16, ~600 s of audio per optimizer step (use grad accumulation).
- Set `decoding.greedy.use_cuda_graph_decoder: false` for in-training validation — otherwise it decodes with stale weights and shows empty output.

</details>

<details>
<summary><b>How it was trained (new language on Parakeet)</b></summary>

- **Extend the tokenizer, don't replace it.** Train a Hebrew BPE on ~250 h of normalized transcripts,
  then append its new pieces after v3's 8,192 — old ids and merges stay intact (vocab 9,206):

  ```python
  spm.SentencePieceTrainer.train(
      sentence_iterator=iter(texts), model_prefix="heb_1024", model_type="bpe",
      vocab_size=1024, character_coverage=1.0,              # every Hebrew letter its own piece
      normalization_rule_name="nmt_nfkc", split_digits=True,  # match v3
      byte_fallback=False, unk_id=0, bos_id=-1, eos_id=-1, pad_id=-1,
  )
  # append its NORMAL pieces not already in v3, scored below every v3 piece (keeps BPE merge order)
  ```

- **Keep every pretrained weight.** `change_vocabulary()` re-initializes the whole decoder and joint;
  copy every old weight back by token id (prediction LSTM, joint hidden layers, old token rows, blank
  and TDT duration rows). Only the new rows start fresh: prediction-embedding and joint-output rows at
  the mean of the old rows (+1% noise), joint bias at the mean old bias.
- **10× LR on decoder + joint** (2e-3 vs 2e-4 encoder). New rows start identical and Adam moves them ~lr per step, so at a normal LR they stay indistinguishable for thousands of steps — the long "empty output" phase. With 10× it ends in ~100 steps. Keep warmup short.
- **Data:** ~9k h of ivrit.ai audio pseudo-labeled with `ivrit-ai/whisper-large-v3-turbo`, filtered with `compression_ratio ≤ 2.2`, one pass, duration-bucketed batches.
- More detail: [NeMo #14140](https://github.com/NVIDIA-NeMo/Speech/issues/14140#issuecomment-5920783584).

</details>

## License

CC-BY-4.0. Base model by NVIDIA (CC-BY-4.0). Trained on Hebrew audio from [ivrit.ai](https://www.ivrit.ai)
([license](https://www.ivrit.ai/en/the-license/)), labeled with
[ivrit-ai/whisper-large-v3-turbo](https://huggingface.co/ivrit-ai/whisper-large-v3-turbo).
