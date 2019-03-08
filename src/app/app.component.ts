import {Component} from '@angular/core';
import {AppConfigService} from './app-config.service';

@Component({
    selector: 'pyobs-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    show_navbar: boolean;
    container_class: string;

    constructor(private appConfig: AppConfigService) {
        // get config
        const config = this.appConfig.getConfig();

        // show navbar? default to true...
        this.show_navbar = ('navbar' in config) ? config['navbar'] : true;

        // container class? default to container...
        this.container_class = 'container';
        if ('fluid' in config) {
            this.container_class =  config['fluid'] ? 'container-fluid' : 'container';
        }
    }
}
