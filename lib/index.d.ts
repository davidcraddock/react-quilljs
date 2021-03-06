import { RefObject } from 'react';
import Quill, { QuillOptionsStatic } from 'quill';
export declare const useQuill: (options?: QuillOptionsStatic | undefined) => {
    Quill: any;
    quillRef: RefObject<any>;
    quill: Quill | undefined;
    editorRef: RefObject<any>;
    editor: Quill | undefined;
};
