import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Nobody read the email, so we held a meeting where the host read it to seven grown adults like a bedtime story.";

// Guard: gate menolak entry di luar 1-200 karakter, jadi gagal keras di sini daripada terkirim tidak valid.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry length ${LINE.length} outside gate 1-200 characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
