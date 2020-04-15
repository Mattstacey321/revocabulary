import { IPaginateOptions, IPaginateResult ,PaginateModel,IPaginateModel} from "typegoose-cursor-pagination";

const paginateModel = (limit: number, next: string, previous: string, sortField: string, model: any) => {
    const options: IPaginateOptions = {
        sortField: sortField,
        sortAscending: true,
        limit: limit,
        next: next,
        previous: previous
    };
    
    var result = (  model.findPaged(options, {}));
    return result
}
export default paginateModel;