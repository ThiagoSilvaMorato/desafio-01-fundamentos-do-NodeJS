import http from "node:http";
import { parse } from "csv-parse";
import fs from "fs";
import axios from "axios";

const server = http.createServer(async (req, res) => {
  const CsvUrl = new URL("./tasks.csv", import.meta.url);

  const parser = parse({ columns: true }, function (err, records) {
    records.map((doc) => {
      axios({
        method: "post",
        url: "http://localhost:3333/tasks",
        data: doc,
      });
    });
  });

  fs.createReadStream(CsvUrl).pipe(parser);

  res.end();
});

server.listen(3334);
