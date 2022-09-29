import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  VERSION,
} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  timer = null;
  expected = null;
  constructor(private changeDetectorRef: ChangeDetectorRef) {}
  ngOnInit(): void {
    const intervalTimeout = 1000;
    const timeout = intervalTimeout - (Date.now() % intervalTimeout);
    // console.log(this.timer, timeout);
    setTimeout(() => {
      setInterval(() => {
        this.timer = Date.now();
        this.changeDetectorRef.markForCheck();
      }, intervalTimeout);
    }, timeout);
  }
}
