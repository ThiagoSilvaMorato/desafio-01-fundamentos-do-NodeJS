import assert from "assert";
import { generate } from "csv-generate";
import { parse } from "csv-parse";
import { stringify } from "csv-stringify/sync";

// (async () => {
//   // Initialise the parser by generating random records
//   const parser = generate({
//     columns: ["ascii", "ascii"],
//     high_water_mark: 64 * 64,
//     length: 100,
//   }).pipe(parse());
//   // Intialise count
//   let count = 0;
//   // Report start
//   process.stdout.write("BLABLABLA\n");
//   // Iterate through each records
//   for await (const record of parser) {
//     // Report current line
//     process.stdout.write(`${count++} ${record.join(",")}\n`);
//     // Fake asynchronous operation
//     await new Promise((resolve) => setTimeout(resolve, 10));
//   }
//   // Report end
//   process.stdout.write("...done\n");
//   // Validation
//   // assert.strictEqual(count, 100);
// })();

// generate({
//   columns: ["int", "bool"],
//   length: 2,
// }).pipe(process.stdout);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const records = [];
// // Initialize the parser
// const parser = parse({
//   delimiter: ":",
// });
// // Use the readable stream api to consume records
// parser.on("readable", function () {
//   let record;
//   while ((record = parser.read()) !== null) {
//     records.push(record);
//     console.log(record);
//   }
// });

// // Catch any error
// parser.on("error", function (err) {
//   console.error(err.message);
// });
// // Test that the parsed records matched the expected records
// parser.on("end", function () {
//   assert.deepStrictEqual(records, [
//     ["root", "x", "0", "0", "root", "/root", "/bin/bash"],
//     ["someone", "x", "1022", "1022", "", "/home/someone", "/bin/bash"],
//   ]);
// });
// // Write data to the stream
// parser.write("root:x:0:0:root:/root:/bin/bash\n");
// parser.write("someone:x:1022:1022::/home/someone:/bin/bash\n");
// // Close the readable stream
// parser.end();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const output = stringify([
  ["1tese", "2", "3", "4"],
  ["afasfasd", "b", "c", "d"],
]);

console.log(output);

// assert.equal(output, "1,2,3,4\na,b,c,d\n");
