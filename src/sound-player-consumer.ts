import SoundPlayer from "./sound-player";

export default class {
  soundPlayer: SoundPlayer

  constructor() {
    this.soundPlayer = new SoundPlayer()
  }

  playSomethingCool() {
    const coolSoundFileName = 'song.mp3'
    this.soundPlayer.playSoundFile(coolSoundFileName)
  }
}
