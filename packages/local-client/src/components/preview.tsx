import React, { useRef, useEffect } from "react";
import './preview.css';
import { useTheme } from '../context/themeContext';

interface PreviewProps {
  code: string;
  err: string;
}

const html = (isDarkMode: boolean) => `
  <html id=${isDarkMode ? 'dark' : 'light'}>
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Doc</title>
      <style>
        #dark {
          background-color: #2b3e50;
          color: #fff;
        }
        #light {
          background-color: #fff;
          color: #1f2d3b;
        }
        .error {
          color: #f76949;
        }
        ::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        #dark ::-webkit-scrollbar {
          outline: 1px solid #1f2d3b;
        }
        
        #dark ::-webkit-scrollbar-track {
          background: #2b3e50;
        
        #dark ::-webkit-scrollbar-track:hover {
          background: #1f2d3b;
        }
        
        #dark ::-webkit-scrollbar-thumb {
          background: #1f2d3b;
        }
        
        #dark ::-webkit-scrollbar-thumb:hover {
          background: #2b3e50;
        }
        
        #dark ::-webkit-scrollbar-thumb:active {
          background: #2b3e50;
        }
        
        #light ::-webkit-scrollbar {
          outline: 1px solid #dee5ed;
        }
        
        #light ::-webkit-scrollbar-track {
          background: #dee5ed;
        }
        
        #light ::-webkit-scrollbar-track:hover {
          background: #dee5ed;
        }
        
        #light ::-webkit-scrollbar-thumb {
          background: #4e5d6c;
        }
        
        #light ::-webkit-scrollbar-thumb:hover {
          background: #8694a4;
        }
        
        #light ::-webkit-scrollbar-thumb:active {
          background: #8694a4;
        }
      </style>
    </head>
    <body>
      <div id="root"></div>
      <script>
        const handleError = (err) => {
          const root = document.querySelector('#root');
          root.innerHTML = '<div class="error"><h3>Runtime Error</h3>' + err + '</div>'
          console.error(err);
        };

        window.addEventListener('error', (event) => {
          event.preventDefault();
          handleError(event.error);
        });

        window.addEventListener('message', (event) => {
          try {
            eval(event.data);
          } catch (err) {
            handleError(err);
          }
        }, false);
      </script>
    </body>
  </html>
`;

const Preview: React.FC<PreviewProps> = ({ code, err }) => {
  const iFrame = useRef<any>();
  const { isDarkMode } = useTheme();

  useEffect(() => {
    iFrame.current.srcdoc = html(isDarkMode);
    setTimeout(() => {
      iFrame.current.contentWindow.postMessage(code, '*');
    }, 75);
  }, [code, isDarkMode]);

  return <div className="wrapper">
      <iframe ref={iFrame} title='code preview' sandbox='allow-scripts' srcDoc={html} />
      {err && <div className="prev-err">{err}</div>}
    </div>
};

export default Preview;
