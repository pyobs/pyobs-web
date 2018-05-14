export class Status {
}

export class CameraStatus extends Status {
    public ExposureTimeLeft: number;
    public ExposuresLeft: number;
    public LastImage: string;
    public Progress: number;
    public Status: string;
}

export class CoolingStatus extends Status {
    public Enabled: boolean;
    public Power: number;
    public SetPoint: number;
    public Temperatures: Map<string, number>;
}

export class FilterStatus extends Status {
    public Filter: string;
}

export class FocuserStatus extends Status {
    public Focus: number;
}

export class TelescopeStatus extends Status {
    public Status: string;
    public Position: {RA: number, Dec: number};
    public Temperatures: Map<string, number>;
}

export class StatusFactory {
    static fromObject(rawStatus: object): Map<string, Status> {
        // init response
        const response  = new Map<string, Status>();

        // loop all interfaces
        for (const iface in rawStatus) {
            if (rawStatus.hasOwnProperty(iface)) {
                if (iface === 'ICamera') {
                    response[iface] = new CameraStatus();
                } else if (iface === 'ICooling') {
                    response[iface] = new CoolingStatus();
                } else if (iface === 'IFocuser') {
                    response[iface] = new FocuserStatus();
                } else if (iface === 'IFilter') {
                    response[iface] = new FilterStatus();
                } else if (iface === 'ITelescope') {
                    response[iface] = new TelescopeStatus();
                } else {
                    // unknown status type
                    continue;
                }

                // assign object
                Object.assign(response[iface], rawStatus[iface]);
            }

        }

        // finished
        return response;
    }
}
