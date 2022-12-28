# Front Start

### Use

Start serve mode: `npm run dev` or `yarn`, build: `npm run build` or `yarn build`

### Snippets for VS Code

Open `User/snippets/scss.json`, put it there:
```
{
  "from": {
    "prefix": "$f",
    "body": [
      "@include from('$1') {",
      "  ",
      "}",
    ],
  },
  "to": {
    "prefix": "$t",
    "body": [
      "@include to('$1') {",
      "  ",
      "}",
    ],
  },
  "transition": {
    "prefix": "$a",
    "body": [
      "@include transition('$1');",
    ],
  },
  "hover": {
    "prefix": "$h",
    "body": [
      "@include hover();",
      "  $1",
      "}",
    ],
  }
}
```
