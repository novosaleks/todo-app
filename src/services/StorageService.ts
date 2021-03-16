export default class StorageService {
    private baseStorage = localStorage;

    getData = (key: string): string | null => {
        return this.baseStorage.getItem(key);
    };

    setData = (key: string, value: string): void => {
        this.baseStorage.setItem(key, value);
    };
}