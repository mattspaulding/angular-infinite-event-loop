import {
  Component,
  Input,
  AfterViewChecked,
  NgZone,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelloComponent implements AfterViewChecked {
  @Input() user: any;
  constructor(private zone: NgZone) {}

  ngAfterViewChecked() {
    console.count('ngAfterViewChecked');
  }

  isLoggedIn() {
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        // do something after 1 second
      }, 1000);
    });

    if (this.user?.first) return true;
    else return false;
  }
}
