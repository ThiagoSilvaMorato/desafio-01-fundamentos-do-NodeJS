import { Database } from "./database.js";
import { randomUUID } from "node:crypto";
import { buildRoutePath } from "./utils/build-route-path.js";

const database = new Database();

export const routes = [
  {
    method: "GET",
    path: buildRoutePath("/tasks"),
    handler: (req, res) => {
      const tasks = database.select("tasks");

      return res.end(JSON.stringify(tasks));
    },
  },
  {
    method: "POST",
    path: buildRoutePath("/tasks"),
    handler: (req, res) => {
      const { title, description, completed_at, created_at, updated_at } = req.body;
      const data = new Date();

      const dia = String(data.getDate()).padStart(2, 0);
      const mes = String(data.getMonth() + 1).padStart(2, 0);
      const ano = data.getFullYear();
      const dataAtual = `${dia}/${mes}/${ano}`;

      const task = {
        id: randomUUID(),
        title,
        description,
        completed_at: null,
        created_at: dataAtual,
        updated_at: null,
      };

      database.insert("tasks", task);

      return res.writeHead(201).end("Task criada!");
    },
  },
  {
    method: "PUT",
    path: buildRoutePath("/tasks/:id"),
    handler: (req, res) => {
      const { id } = req.params;
      const { title, description, created_at } = req.body;
      const data = new Date();

      const dia = String(data.getDate()).padStart(2, 0);
      const mes = String(data.getMonth() + 1).padStart(2, 0);
      const ano = data.getFullYear();
      const dataAtual = `${dia}/${mes}/${ano}`;

      database.update("tasks", id, {
        title,
        description,
        completed_at: null,
        created_at,
        updated_at: dataAtual,
      });

      res.writeHead(204).end();
    },
  },
  {
    method: "DELETE",
    path: buildRoutePath("/tasks/:id"),
    handler: (req, res) => {
      const { id } = req.params;

      database.delete("tasks", id);

      res.writeHead(204).end();
    },
  },
  {
    method: "PATCH",
    path: buildRoutePath("/tasks/:id/complete"),
    handler: (req, res) => {
      const { id } = req.params;
      const data = new Date();

      const dia = String(data.getDate()).padStart(2, 0);
      const mes = String(data.getMonth() + 1).padStart(2, 0);
      const ano = data.getFullYear();
      const dataAtual = `${dia}/${mes}/${ano}`;

      database.patch("tasks", id, dataAtual);

      res.writeHead(204).end();
    },
  },
];
