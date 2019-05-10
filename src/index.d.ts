type Mapper<DATA, OP = { [prop: string]: any }> = (state: DATA) => OP;
type UseSubType<DATA> = <OP>(mapper: Mapper<DATA, OP>) => OP;
type StoreSetArg<DATA, PD> = PD | ((prev: DATA) => PD);
type StoreSet<DATA> = (update: StoreSetArg<DATA, Partial<DATA>>) => void;
type StoreType<DATA> = { get: () => DATA; set: StoreSet<DATA> };
type CreateStoreReturn<DATA> = [UseSubType<DATA>, StoreType<DATA>];
type CreateStoreType = <DATA>(data: DATA) => CreateStoreReturn<DATA>;

export const createStore: CreateStoreType;