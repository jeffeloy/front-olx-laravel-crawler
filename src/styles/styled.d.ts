import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,

    colors: {
      background: string,
      backgroundContent: string,
      inputColor: string,
      red: string,
      blue: string,
      green: string,

      blueLight: string,

      textTitle: string,
      textBody: string,
      shades: string,
    }
  }
}