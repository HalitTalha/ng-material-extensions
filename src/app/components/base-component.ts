import { NotifierService } from 'angular-notifier';

export class BaseComponent {

  examples;

  constructor(protected notifierService: NotifierService) {
  }

  onCopyClipboard() {
    this.notifierService.notify(
      'success',
      'Copied!',
    );
  }

}
