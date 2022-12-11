export class PageInfoModel{
    pages: Page[];

}

export class Page{
    pageTitle: string;
    bgColor: string;
    pageId?: string;
    nextPage?: Page;
    previousPage?: Page;
}