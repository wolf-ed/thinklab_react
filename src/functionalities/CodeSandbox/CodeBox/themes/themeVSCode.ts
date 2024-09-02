import { EditorView } from '@codemirror/view';
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags as t } from '@lezer/highlight';

// Define colors and theme settings
const colors = {
  background: '#1e1e1e',
  foreground: '#9cdcfe',
  caret: '#c6c6c6',
  selection: '#6199ff2f',
  lineHighlight: '#ffffff0f',
  gutterBackground: '#1e1e1e',
  gutterForeground: '#838383',
  gutterActiveForeground: '#fff',
};

// Define the theme using EditorView.theme
const vsCodeDarkTheme = EditorView.theme(
  {
    '&': {
      color: colors.foreground,
      backgroundColor: colors.background,
    },
    '.cm-content': {
      caretColor: colors.caret,
    },
    '.cm-cursor, .cm-dropCursor': {
      borderLeftColor: colors.caret,
    },
    '&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection':
      {
        backgroundColor: colors.selection,
      },
    '.cm-gutters': {
      backgroundColor: colors.gutterBackground,
      color: colors.gutterForeground,
    },
    '.cm-activeLine': {
      backgroundColor: colors.lineHighlight,
    },
    '.cm-activeLineGutter': {
      color: colors.gutterActiveForeground,
    },
  },
  { dark: true }
);

// Define the highlighting style
const vsCodeDarkHighlightStyle = HighlightStyle.define([
  {
    tag: [
      t.keyword,
      t.operatorKeyword,
      t.modifier,
      t.color,
      t.constant(t.name),
      t.standard(t.name),
      t.standard(t.tagName),
      t.special(t.brace),
      t.atom,
      t.bool,
      t.special(t.variableName),
    ],
    color: '#569cd6',
  },
  { tag: [t.controlKeyword, t.moduleKeyword], color: '#c586c0' },
  {
    tag: [
      t.name,
      t.deleted,
      t.character,
      t.macroName,
      t.propertyName,
      t.variableName,
      t.labelName,
      t.definition(t.name),
    ],
    color: colors.foreground,
  },
  { tag: t.heading, fontWeight: 'bold', color: colors.foreground },
  {
    tag: [
      t.typeName,
      t.className,
      t.tagName,
      t.number,
      t.changed,
      t.annotation,
      t.self,
      t.namespace,
    ],
    color: '#4ec9b0',
  },
  {
    tag: [t.function(t.variableName), t.function(t.propertyName)],
    color: '#dcdcaa',
  },
  { tag: t.string, color: '#ce9178' },
  { tag: t.comment, color: '#6a9955', fontStyle: 'italic' },
  { tag: t.number, color: '#b5cea8' },
  { tag: t.meta, color: '#d4d4d4' },
  { tag: t.regexp, color: '#d16969' },
  { tag: t.link, color: '#569cd6', textDecoration: 'underline' },
  { tag: t.strong, fontWeight: 'bold' },
  { tag: t.emphasis, fontStyle: 'italic' },
  { tag: t.strikethrough, textDecoration: 'line-through' },
  { tag: t.invalid, color: '#ff0000' },
]);

// Combine theme and highlighting style into an extension
const vsCodeDark = [
  vsCodeDarkTheme,
  syntaxHighlighting(vsCodeDarkHighlightStyle),
];

export { vsCodeDark, vsCodeDarkTheme, vsCodeDarkHighlightStyle };
