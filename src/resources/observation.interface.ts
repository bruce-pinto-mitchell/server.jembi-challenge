import { IComponent } from "./component.interface";
import { IReferenceRange } from "./referenceRange.interface";
import { IValueX } from "./valueX.interface";

export interface IObservation {
    resourceType: string;
    identifier: string;
    basedOn: string;
    partOf: string;
    status: string;
    category: string;
    code: string;
    subject: string;
    focus: string;
    encounter: string;
    effectiveDateTime: Date;
    effectivePeriod: string;
    effectiveTiming: string;
    effectiveInstant: string;
    issued: string;
    performer: IValueX;
    note: string;
    bodySite: string;
    method: string;
    specimen: string;
    device: string;
    referenceRange: IReferenceRange;
    hasMember: string;
    derivedFrom: string;
    component: IComponent;
}
