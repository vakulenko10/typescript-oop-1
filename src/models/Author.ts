import { Song } from "./Song";

export class Author {
  public songList: Song[] = [];

  constructor(public name: string) {}

  display(): void {
    console.log(`🎤 Author: ${this.name}`);
    console.log(` Songs:`);
    this.songList.forEach((song, index) => {
      console.log(`${index + 1}. ${song.toString()}`);
    });
  }

  addSong(song: Song): void {
    this.songList.push(song);
  }

  addSongV2(song: Song): void {
    this.songList = [...this.songList, song]; // Expands array if full
  }
}
