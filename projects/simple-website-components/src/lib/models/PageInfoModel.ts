export class PageInfoModel{
    pages: Page[] = [];

}

export interface Page{
    pageTitle: string;
    bgColor: string;
    pageType: string;
    pageId?: string;
    nextPage?: Page;
    previousPage?: Page;
}

export enum PageTypes{
    ImageSildeShowPage = "ImageSlideShowPage",
    TextArticlePage = "TextArticlePage"
}

export class ImageInfo{
    imageTitle: string = "";
    imgaeLink: string = "";
    imageDesc: string = "";
}

export class ImageSildeShowPage implements Page{
    pageTitle: string = "";
    bgColor: string = "";
    pageType: string = "";
    pageId?: string;
    nextPage?: Page;
    previousPage?: Page;
    imagesData: ImageInfo[] = [];
}

export class TextArticlePage implements Page{
    pageTitle: string  = "";
    bgColor: string = "";
    pageType: string = "";
    pageId?: string;
    nextPage?: Page;
    previousPage?: Page;
    articleText: string = "";
}
