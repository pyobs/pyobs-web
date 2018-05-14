import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'coordinates'
})
export class CoordinatesPipe implements PipeTransform {
    static deg2sexagesimal(degrees: number, ra: boolean) {
        // nothing?
        if (degrees === undefined || degrees === null) {
            return '';
        }
        // save it
        let deg = Math.abs(degrees);
        // if right ascension, divide by 15
        if (ra) {
            deg /= 15.;
        }
        // get degrees/hours
        const dh = Math.floor(deg);
        // minutes
        const m = Math.floor((deg - dh) * 60.);
        // seconds
        const s = (deg - dh - m / 60.) * 3600.;
        // build string
        let str = '';
        // hours
        if (!ra) {
            str += (degrees < 0) ? '-' : '+';
        }
        if (Math.abs(dh) < 10) {
            str += '0';
        }
        str += dh.toString();
        // minutes
        str += ':';
        if (Math.abs(m) < 10) {
            str += '0';
        }
        str += m.toString();
        // seconds
        str += ':';
        if (Math.abs(s) < 10) {
            str += '0';
        }
        str += s.toFixed(1);
        return str;
    }

    static sexagesimal2deg(coords: string, ra: boolean) {
        // analyze
        const re = /([+-]?[0-9][0-9]?)[:\s]([0-9][0-9]?)[:\s]([0-9][0-9]?(\.[0-9]+)?)/;
        const m = re.exec(coords);
        // calc
        let deg = Math.abs(parseFloat(m[1])) + parseFloat(m[2]) / 60. + parseFloat(m[3]) / 3600.;
        // sign
        if (m[1].indexOf('-') !== -1) {
            deg *= -1;
        }
        // ra?
        if (ra) {
            deg *= 15.;
        }
        // return
        return deg;
    }

    transform(value: any, ra: boolean): any {
        return CoordinatesPipe.deg2sexagesimal(value, ra);
    }

}
