import express from 'express';
import path from 'path';
import fs from 'fs/promises';


interface Cell {
  id: string;
  content: string;
  type: 'text' | 'code';
}

interface LocalApiErr {
  code: string;
}

export const createCellsRouter = (filename: string, dir: string) => {
  const router = express.Router();
  router.use(express.json());

  const fullPath = path.join(dir, filename);

  // Read the file, if no err add in the list of cells, parse a list out of it, and send that list of cells back to the browser
  router.get('/cells', async (req, res) => {
    const isLocalApiErr = (err: any): err is LocalApiErr => {
      return typeof err.code === "string";
    };

    try {
      const result = await fs.readFile(fullPath, { encoding: 'utf-8' });
      res.send(JSON.parse(result));
    } catch (err) {
      if (isLocalApiErr(err)) {
        if (err.code === 'ENOENT') {
          await fs.writeFile(fullPath, '[]', 'utf-8');
          res.send([]);
        }
      } else {
        throw err;
      }
    }
  });

  // We will take the list of cells from the requested obj, serialize them, and write them into the file
  router.post('/cells', async (req, res) => {
    const { cells }: { cells: Cell[] } = req.body;
    await fs.writeFile(fullPath, JSON.stringify(cells), 'utf-8');
    res.send({ status: 'ok' });
  });

  return router;
};
