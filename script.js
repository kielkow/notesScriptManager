const notes = [
  {
    themes: ['vida', 'filosofia'],
    text: 'A vida é um caos, e a ordem só uma bela paranoia. Existe ordem nas coisas de certa forma, uma sequência, tudo possui uma causa e efeito, e nos precisamos de ordem para dar sequência, andamento, para conseguir categorizar, classificar, testar e repetir eventos, para assim podermos viver com mais procedência, facilitando e vivendo melhor. Mas entender que a ordem é um acidente do caos, é libertador, pois somos isto, seres indefinidos.',
  },
  {
    themes: ['vida', 'filosofia'],
    text: 'Se você não se levar a sério, ninguém vai. O sofrimento ajusta a hierarquia de valorações da alma.',
  },
  {
    themes: ['vida', 'filosofia'],
    text: 'Se você pudesse escolher um motivo para viver, qual seria?',
  }
];

const groupedTextsByTheme = [];

(notes => {
  for (const note of notes) {
    for (const theme of note.themes) {
      const themeExists = groupedTextsByTheme.find(group => group.theme === theme);

      if (!themeExists) {
        groupedTextsByTheme.push({
          theme,
          texts: [note.text]
        });
      } else {
        themeExists.texts.push(note.text);
      }
    }
  }
})(notes);

console.log(groupedTextsByTheme);
