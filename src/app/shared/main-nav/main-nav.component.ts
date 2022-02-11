import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fromEvent, Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainNavComponent implements OnInit {
  public title: string

  public isDarkTheme!: boolean;
  public isScreenSmall$: Observable<boolean> | undefined

  constructor () {
    this.title = 'DIAGEO'
  }

  ngOnInit () {
    // Checks if screen size is less than 1024 pixels
    const checkScreenSize = () => document.body.offsetWidth < 1024;

    // Create observable from window resize event throttled so only fires every 500ms
    const screenSizeChanged$ = fromEvent(window, 'resize').pipe(
      map(checkScreenSize)
    )

    // Start off with the initial value use the isScreenSmall$ | async in the
    // view to get both the original value and the new value after resize.
    this.isScreenSmall$ = screenSizeChanged$.pipe(startWith(checkScreenSize()))
  }
}
