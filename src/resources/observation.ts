import { IComponent } from "./component.interface";
import { IObservation } from "./observation.interface";
import { IReferenceRange } from "./referenceRange.interface";
import { IValueX } from "./valueX.interface";

export class Observation implements IObservation {
    public resourceType: string;
    public identifier: string;
    public basedOn: string;
    public partOf: string;
    public status: string;
    public category: string;
    public code: string;
    public subject: string;
    public focus: string;
    public encounter: string;
    public effectiveDateTime: Date;
    public effectivePeriod: string;
    public effectiveTiming: string;
    public effectiveInstant: string;
    public issued: string;
    public performer: IValueX;
    public note: string;
    public bodySite: string;
    public method: string;
    public specimen: string;
    public device: string;
    public referenceRange: IReferenceRange;
    public hasMember: string;
    public derivedFrom: string;
    public component: IComponent;

    constructor(observationData: any) {
        this.resourceType = "Observation";
        this.identifier = observationData.identifier ? observationData.identifier : "";
        this.basedOn = observationData.basedOn ? observationData.basedOn : "";
        this.partOf = observationData.partOf ? observationData.partOf : "";
        this.status = observationData.status ? observationData.status : "";
        this.category = observationData.category ? observationData.category : "";
        this.code = observationData.code ? observationData.code : "";
        this.subject = observationData.subject ? observationData.subject : "";
        this.focus = observationData.focus ? observationData.focus : "";
        this.encounter = observationData.encounter ? observationData.encounter : "";
        this.effectiveDateTime = observationData.effectiveDateTime ? observationData.effectiveDateTime : Date.now();
        this.effectivePeriod = observationData.effectivePeriod ? observationData.effectivePeriod : "";
        this.effectiveTiming = observationData.effectiveTiming ? observationData.effectiveTiming : "";
        this.effectiveInstant = observationData.effectiveInstant ? observationData.effectiveInstant : "";
        this.issued = observationData.issued ? observationData.issued : "";
        this.performer = observationData.performer ? observationData.performer : {};
        this.note = observationData.note ? observationData.note : "";
        this.bodySite = observationData.bodySite ? observationData.bodySite : "";
        this.method = observationData.method ? observationData.method : "";
        this.specimen = observationData.specimen ? observationData.specimen : "";
        this.device = observationData.device ? observationData.device : "";
        this.referenceRange = observationData.referenceRange ? observationData.referenceRange : {};
        this.hasMember = observationData.hasMember ? observationData.hasMember : "";
        this.derivedFrom = observationData.derivedFrom ? observationData.derivedFrom : "";
        this.component = observationData.component ? observationData.component : {};
    }
}
