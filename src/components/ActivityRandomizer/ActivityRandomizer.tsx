import { create } from "domain";
import { createAppSlice} from "store/createAppSlice";



export const activityRandomizerSlice =createAppSlice ({
    name: 'ACTIVITY_RANDOMIZER',
    initialState: activityRandomizerInitialState

})