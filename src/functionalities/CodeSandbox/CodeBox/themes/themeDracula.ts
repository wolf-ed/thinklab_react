import { EditorView } from '@codemirror/view';
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags } from '@lezer/highlight';

// Dracula Theme Colors
const background = '#282a36',
  currentLine = '#44475a',
  selection = '#44475a',
  foreground = '#f8f8f2',
  comment = '#6272a4',
  cyan = '#8be9fd',
  green = '#50fa7b',
  orange = '#ffb86c',
  pink = '#ff79c6',
  purple = '#bd93f9',
  red = '#ff5555',
  yellow = '#f1fa8c';

const draculaColors = {
  background,
  currentLine,
  selection,
  foreground,
  comment,
  cyan,
  green,
  orange,
  pink,
  purple,
  red,
  yellow,
};

const draculaTheme = EditorView.theme(
  {
    '&': { color: foreground, backgroundColor: background },
    '.cm-content': { caretColor: pink },
    '.cm-cursor, .cm-dropCursor': { borderLeftColor: pink },
    '&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection':
      { backgroundColor: selection },
    '.cm-gutters': { backgroundColor: background, color: comment },
    // '.cm-activeLine': { backgroundColor: currentLine },
    '.cm-tooltip': { backgroundColor: currentLine, color: foreground },
  },
  { dark: true }
);

const draculaHighlightStyle = HighlightStyle.define([
  { tag: tags.keyword, color: pink },
  { tag: tags.name, color: cyan },
  { tag: tags.literal, color: orange },
  { tag: tags.string, color: yellow },
  { tag: tags.variableName, color: green },
  { tag: tags.function(tags.variableName), color: green },
  { tag: tags.labelName, color: purple },
  { tag: tags.typeName, color: purple },
  { tag: tags.className, color: yellow },
  { tag: tags.number, color: orange },
  { tag: tags.comment, color: comment, fontStyle: 'italic' },
  { tag: tags.meta, color: cyan },
  { tag: tags.atom, color: red },
  { tag: tags.processingInstruction, color: orange },
  { tag: tags.strong, fontWeight: 'bold' },
  { tag: tags.emphasis, fontStyle: 'italic' },
  { tag: tags.strikethrough, textDecoration: 'line-through' },
]);

const dracula = [draculaTheme, syntaxHighlighting(draculaHighlightStyle)];

export { draculaColors, dracula, draculaHighlightStyle, draculaTheme };
