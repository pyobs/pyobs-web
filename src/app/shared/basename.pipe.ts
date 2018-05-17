import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'basename'
})
export class BasenamePipe implements PipeTransform {

    transform(value: string): string {
        return value.substr(value.lastIndexOf('/') + 1);
    }

}
