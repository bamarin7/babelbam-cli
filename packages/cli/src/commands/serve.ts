import { Command } from "commander";
import { serve } from "@babelbam/local-api";
import path from "path";


const isProd = process.env.NODE_ENV === 'production';

interface LocalApiError {
  code: string;
}

export const serveCommand = new Command()
  .command('serve [filename]')
  .description('Open a file for editing')
  .option('-p, --port <number>', 'port to run server on', '4005')
  .action(async (filename = 'notebook.js', options: { port: string }) => {
    const isLocalApiErr = (err: any): err is LocalApiError => {
      return typeof err.code === "string";
    };
    try {
      const dir = path.join(process.cwd(), path.dirname(filename));
      await serve(parseInt(options.port), path.basename(filename), dir, !isProd);
      console.log(
        `Opened ${filename}. Navigate to http://localhost:${options.port} to edit the file.`
      )
    } catch (err) {
      if (isLocalApiErr(err)) {
        if (err.code === "EADDRINUSE") {
          console.error("Port is in use. Try running on a different port by adding -p and a port number.");
        }
      } else if (err instanceof Error) {
        console.log('Here is the problem', err.message);
      }
      process.exit(1);
    }
  });
