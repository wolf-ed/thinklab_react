import { Extension } from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { EditorView } from '@codemirror/view';
import { parse } from 'acorn';
import { linter, lintGutter, Diagnostic } from '@codemirror/lint';

import { CodeStyleTheme } from './const';
import { Languages_Sandbox_enum } from '../const';

interface AcornError extends SyntaxError {
  pos?: number;
}

export const findCodeStyleTheme = (
  codeStyleThemes: CodeStyleTheme[],
  name: string
): CodeStyleTheme | null => {
  const styleSelected = codeStyleThemes.filter(
    (codeStyle) => codeStyle.name === name
  );
  if (styleSelected[0]) {
    return styleSelected[0];
  }
  return null;
};

const getJavascriptExtensions = (addLintern: boolean): Extension[] => {
  const javascriptExtensions: Extension[] = [javascript({ typescript: true })];

  if (addLintern) {
    const myDynamicLinter = (view: EditorView): Diagnostic[] => {
      const diagnostics: Diagnostic[] = [];
      const doc = view.state.doc.toString();
      try {
        parse(doc, { ecmaVersion: 2020 });
      } catch (error) {
        const acornError = error as AcornError;
        if (acornError?.pos) {
          diagnostics.push({
            from: +acornError?.pos,
            to: +acornError?.pos,
            severity: 'error',
            message: acornError.message,
          });
        }
      }
      return diagnostics;
    };
    javascriptExtensions.push(linter(myDynamicLinter));
    javascriptExtensions.push(lintGutter());
  }
  return javascriptExtensions;
};

const getTypescriptExtensions = (): Extension[] => {
  const typescriptExtensions: Extension[] = [javascript({ typescript: true })];
  // if (addLintern) {
  //   const myDynamicLinter = (view): Diagnostic[] => {
  //     const diagnostics: Diagnostic[] = [];
  //     const doc = view.state.doc.toString();
  //     const sourceFile = ts.createSourceFile(
  //       'temp.ts',
  //       doc,
  //       ts.ScriptTarget.ES2020,
  //       true
  //     );
  //     const errors = ts.getPreEmitDiagnostics(sourceFile);
  //     console.log('errors', errors);
  //     errors.forEach((diagnostic) => {
  //       if (diagnostic.file) {
  //         const { line, character } =
  //           diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start);
  //         const message = ts.flattenDiagnosticMessageText(
  //           diagnostic.messageText,
  //           '\n'
  //         );
  //         diagnostics.push({
  //           from: view.state.doc.line(line + 1).from + character,
  //           to: view.state.doc.line(line + 1).from + character,
  //           severity:
  //             diagnostic.category === ts.DiagnosticCategory.Error
  //               ? 'error'
  //               : 'warning',
  //           message: message,
  //         });
  //       }
  //     });
  //     return diagnostics;
  //   };
  //   typescriptExtensions.push(linter(myDynamicLinter));
  //   typescriptExtensions.push(lintGutter());
  // }
  return typescriptExtensions;
};

export const getCodeSandboxExtensions = (
  addLintern: boolean,
  useWrapper: boolean,
  language: string
) => {
  let basicExtensions: Extension[] = [javascript()];

  if (language === Languages_Sandbox_enum.JAVASCRIPT) {
    const javascriptExtensions = getJavascriptExtensions(addLintern);
    basicExtensions = [...basicExtensions, ...javascriptExtensions];
  } else if (language === Languages_Sandbox_enum.TYPESCRIPT) {
    const typescriptExtensions = getTypescriptExtensions();
    basicExtensions = [...basicExtensions, ...typescriptExtensions];
  }
  if (useWrapper) {
    basicExtensions.push(EditorView.lineWrapping);
  }
  return basicExtensions;
};
