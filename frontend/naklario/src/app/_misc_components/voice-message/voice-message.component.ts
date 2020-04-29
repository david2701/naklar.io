import { Component, OnInit, OnDestroy } from "@angular/core";
import { AudioRecordingService, RecordedAudioOutput } from "src/app/_services";
import { relativeTimeThreshold } from "moment";

@Component({
  selector: "misc-voice-message",
  templateUrl: "./voice-message.component.html",
  styleUrls: ["./voice-message.component.scss"],
})
export class VoiceMessageComponent implements OnInit, OnDestroy {
  isRecording = false;
  hasRecording = false;

  recordingURL: string;
  private audio: HTMLAudioElement;

  constructor(private audioRecordingService: AudioRecordingService) {}

  ngOnInit(): void {}

  startRecording() {
    this.isRecording = true;
    this.audioRecordingService.startRecording();
  }

  stopRecording() {
    this.audioRecordingService.stopRecording();
    this.audioRecordingService.getRecordedBlob().subscribe((data) => {
      this.isRecording = false;
      this.hasRecording = true;

      const file = new File([data.blob], data.title);
      this.recordingURL = URL.createObjectURL(file);
    });
  }

  playRecording() {
    this.audio = new Audio(this.recordingURL);
    this.audio.play();
  }

  ngOnDestroy(): void {
    this.audioRecordingService.abortRecording();
  }
}
