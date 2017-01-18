import { PonyModel } from './pony.model';

/**
 * Defines a Race object.
 */
export interface RaceModel {

    id: number;
    name: string;
    startInstant: string;
    ponies: Array<PonyModel>;

}

