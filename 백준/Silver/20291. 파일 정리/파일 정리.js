const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

/**
 * 파일을 확장자 별로 정리해서 몇 개씩 있는지
 * 확장자들을 사전 순으로 정리
 */
function solution(input) {
  const N = Number(input[0]);

  const files = input.slice(1);
  const extensions = {};

  for (const file of files) {
    const [_, extension] = file.split(".");

    if (extension in extensions) {
      const prevCount = extensions[extension];
      extensions[extension] = prevCount + 1;
    } else {
      extensions[extension] = 1;
    }
  }

  Object.entries(extensions)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach(([ext, count]) => console.log(`${ext} ${count}`));
}

solution(input);
