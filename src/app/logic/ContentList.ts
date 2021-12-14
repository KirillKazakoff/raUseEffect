import {
    UserType, DetailsType, initDetails, initUsers,
} from '../data/initContent';

class ContentList<T extends { id: string | number }> {
    data: T[];

    constructor(content: T[]) {
        this.data = content;
    }

    getData() {
        return [...this.data];
    }

    add(item: T) {
        this.data.push(item);
    }

    refresh(dataNew: T[]) {
        this.data = dataNew;
    }

    remove(id: string | number) {
        const deleteIndex = this.findItemIndex(id);
        this.data.splice(deleteIndex, 1);
    }

    findItemIndex(id: string | number) {
        return this.data.findIndex((item) => item.id.toString() === id);
    }

    getItem(id: string | number) {
        return this.data[this.findItemIndex(id)];
    }
}

export const usersList = new ContentList<UserType>(initUsers);
export const detailsList = new ContentList<DetailsType>(initDetails);
