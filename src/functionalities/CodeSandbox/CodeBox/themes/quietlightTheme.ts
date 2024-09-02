import { EditorView } from '@codemirror/view';
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags as t } from '@lezer/highlight';

// Define colors and theme settings
const colors = {
  background: '#F5F5F5',
  foreground: '#333333',
  selection: '#C9D0D9',
  cursor: '#54494B',
  activeLine: '#79ff002b',
  matchingBracket: '#E4F6D4',
  keyword: '#4B69C6',
  storage: '#4B69C6',
  variable: '#7A3E9D',
  function: '#AA3731',
  string: '#448C27',
  constant: '#9C5D27',
  type: '#7A3E9D',
  class: '#AA3731',
  number: '#9C5D27',
  comment: '#AAAAAA',
  heading: '#AA3731',
  invalid: '#cd3131',
  regexp: '#4B69C6',
  tag: '#4B69C6',
};

const quietlightTheme = EditorView.theme(
  {
    '&': {
      color: colors.foreground,
      backgroundColor: colors.background,
    },
    '.cm-content': {
      caretColor: colors.cursor,
    },
    '.cm-cursor, .cm-dropCursor': {
      borderLeftColor: colors.cursor,
    },
    '&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection':
      {
        backgroundColor: colors.selection,
      },
    '.cm-gutters': {
      backgroundColor: colors.background,
      color: colors.foreground,
    },
    // '.cm-activeLine': {
    //   backgroundColor: colors.activeLine,
    // },
    '.cm-matchingBracket': {
      backgroundColor: colors.matchingBracket,
    },
  },
  { dark: false }
);

const quietlightHighlightStyle = HighlightStyle.define([
  { tag: t.keyword, color: colors.keyword },
  {
    tag: [t.name, t.deleted, t.character, t.macroName],
    color: colors.variable,
  },
  { tag: t.propertyName, color: colors.function },
  { tag: [t.variableName, t.labelName], color: colors.variable },
  { tag: [t.string, t.inserted, t.special(t.string)], color: colors.string },
  {
    tag: [t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace],
    color: colors.number,
  },
  { tag: [t.typeName, t.className], color: colors.type },
  { tag: [t.operator, t.operatorKeyword], color: colors.keyword },
  { tag: t.tagName, color: colors.tag },
  { tag: [t.meta, t.comment], color: colors.comment, fontStyle: 'italic' },
  { tag: t.link, color: colors.regexp, textDecoration: 'underline' },
  { tag: t.heading, fontWeight: 'bold', color: colors.heading },
  { tag: t.strong, fontWeight: 'bold' },
  { tag: t.emphasis, fontStyle: 'italic' },
  { tag: t.invalid, color: colors.invalid },
  { tag: t.regexp, color: colors.regexp },
  { tag: t.strikethrough, textDecoration: 'line-through' },
]);

const quietlight = [
  quietlightTheme,
  syntaxHighlighting(quietlightHighlightStyle),
];

export { quietlight, quietlightTheme, quietlightHighlightStyle };
