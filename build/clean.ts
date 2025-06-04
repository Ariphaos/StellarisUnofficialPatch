import fs from "fs";
import path from "path";

const dist = path.resolve(process.cwd(), "dist");
if (fs.existsSync(dist)) {
    const vacuum = fs.readdirSync(dist).map((directory) => path.resolve(dist, directory));
    for (const file of vacuum) {
        fs.rmSync(file, { recursive: true });
    }
} else {
    fs.mkdirSync(dist);
}