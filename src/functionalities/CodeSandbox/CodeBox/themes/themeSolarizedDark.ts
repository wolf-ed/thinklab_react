import { EditorView } from '@codemirror/view';
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags as t } from '@lezer/highlight';

// Define colors and theme settings
const colors = {
  background: '#002B36',
  foreground: '#839496',
  selection: '#004454AA',
  selectionMatch: '#005A6FAA',
  cursor: '#D30102',
  activeLine: '#00cafe11',
  matchingBracket: '#073642',
  keyword: '#859900',
  storage: '#93A1A1',
  variable: '#268BD2',
  parameter: '#268BD2',
  function: '#268BD2',
  string: '#2AA198',
  constant: '#CB4B16',
  type: '#859900',
  class: '#268BD2',
  number: '#D33682',
  comment: '#586E75',
  heading: '#268BD2',
  invalid: '#DC322F',
  regexp: '#DC322F',
  tag: '#268BD2',
};

// Define the theme using EditorView.theme
const solarizedDarkTheme = EditorView.theme(
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
      color: colors.comment,
    },
    '.cm-activeLine': {
      backgroundColor: colors.activeLine,
    },
    '.cm-matchingBracket': {
      backgroundColor: colors.matchingBracket,
    },
  },
  { dark: true }
);

// Define the highlighting style
const solarizedDarkHighlightStyle = HighlightStyle.define([
  { tag: t.keyword, color: colors.keyword },
  {
    tag: [t.name, t.deleted, t.character, t.macroName],
    color: colors.variable,
  },
  { tag: t.propertyName, color: colors.function },
  {
    tag: [t.processingInstruction, t.string, t.inserted, t.special(t.string)],
    color: colors.string,
  },
  { tag: [t.function(t.variableName), t.labelName], color: colors.function },
  {
    tag: [t.color, t.constant(t.name), t.standard(t.name)],
    color: colors.constant,
  },
  { tag: [t.definition(t.name), t.separator], color: colors.variable },
  { tag: [t.className], color: colors.class },
  {
    tag: [t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace],
    color: colors.number,
  },
  { tag: [t.typeName], color: colors.type },
  { tag: [t.operator, t.operatorKeyword], color: colors.keyword },
  { tag: [t.url, t.escape, t.regexp, t.link], color: colors.regexp },
  { tag: [t.meta, t.comment], color: colors.comment, fontStyle: 'italic' },
  { tag: t.tagName, color: colors.tag },
  { tag: t.strong, fontWeight: 'bold' },
  { tag: t.emphasis, fontStyle: 'italic' },
  { tag: t.link, textDecoration: 'underline' },
  { tag: t.heading, fontWeight: 'bold', color: colors.heading },
  { tag: [t.atom, t.bool, t.special(t.variableName)], color: colors.variable },
  { tag: t.invalid, color: colors.invalid },
  { tag: t.strikethrough, textDecoration: 'line-through' },
]);

// Combine theme and highlighting style into an extension
const solarizedDark = [
  solarizedDarkTheme,
  syntaxHighlighting(solarizedDarkHighlightStyle),
];

export { solarizedDark, solarizedDarkTheme, solarizedDarkHighlightStyle };
