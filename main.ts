// The Moon, four billion years into being wished upon, finally snaps — politely.
// Nobody ever wished for the Moon. The Moon kept notes anyway.
import { mkdir, open } from "node:fs/promises";
import { join } from "node:path";

const moonReply =
  "I've watched you wish on me for four billion years. Not once has anyone wished for me. I'm fine. I'm literally fine. Keep staring, I guess.";

const manifest = Object.freeze({
  fileName: "entry.txt",
  maxChars: 240,
  mustMention: "four billion years",
});

async function answer(text: string): Promise<void> {
  if (text.length > manifest.maxChars) throw new Error("answer exceeds the limit");
  if (!text.includes(manifest.mustMention)) {
    throw new Error("answer lost its four billion years");
  }
  if (!text.includes("Keep staring")) throw new Error("answer lost its staring");
  const folder = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
  await mkdir(folder, { recursive: true });
  const handle = await open(join(folder, manifest.fileName), "w");
  try {
    await handle.write(text, 0, "utf8");
    await handle.sync();
  } finally {
    await handle.close();
  }
}

void answer(moonReply);
