import { Component } from '@angular/core';
import { initStream, getStreams, closeStream, takeSnapshot, watchStream } from '@vsoft/middleware-easy-proctor'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-teste';
  //MVP
  token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjAiLCJ1bmlxdWVfbmFtZSI6IlZzb2Z0Iiwicm9sZSI6ImFkbWluIiwibmJmIjoxNTk5MTQ5ODI3LCJleHAiOjE1OTkxNDk4ODcsImlhdCI6MTU5OTE0OTgyN30.gf9RMh7QzMKgXWdDmBbfezigGYJ1AnHmu2Qilj9CUd0';
  //DEV
  //token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjEiLCJ1bmlxdWVfbmFtZSI6InN0cmluZyIsInJvbGUiOiJhZG1pbiIsIm5iZiI6MTU5NzQzMDE4NSwiZXhwIjoxNTk3NDMwMjQ1LCJpYXQiOjE1OTc0MzAxODV9.mTnLotnK72r9V-DAtL-aMAFpqwM-WA56xy1-k0QBios'
  streams = [];
  init = false;

   async startStream(){
     this.init = true;
    await initStream(this.token, '1-10065578777');
    this.init = false;
  }

  async subscribeStream() {
    await watchStream(this.token, this.streams[0], 'video-stream');
  }

  async getStream() {
    this.streams = await getStreams(this.token);
    console.log(this.streams);
  }

  finishStream() {
    closeStream();
  }

  snapshot() {
    const t = takeSnapshot();
    console.log(t);
  }

}
