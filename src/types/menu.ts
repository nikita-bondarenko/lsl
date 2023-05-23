export interface MenuQuery {
    menu: Menu
}

interface Menu {
    menuItems: Items;
}

export interface MenuNode {
    url:         string;
    label:       string;
    order:       number;
    childItems?: Items;
}

interface Items {
    nodes: MenuNode[];
}
