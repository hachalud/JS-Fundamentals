const args = process.argv.slice(2);
const size = Number(args[0]);

if (Number.isInteger(size)) {
  const row = "X".repeat(size);
  for (let i = 0; i < size; i++) {
    console.log(row);
  }
} else {
  console.log("Missing size");
}
