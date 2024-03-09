import {Image} from "@tiptap/extension-image";

const baseImage = 'data:image/png;base64,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'

var url = 'https://embed.diagrams.net/?embed=1&ui=atlas&spin=1&modified=unsavedChanges&proto=json';

export interface ImageOptions {
    inline: boolean,
    allowBase64: boolean,
    openDialog: 'click' | 'dblclick',
    drawIoLink: string,
    baseImage: string,
    HTMLAttributes: Record<string, any>,
}

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        drawIoExtension: {
            /**
             * Add an image
             */
            insertDrawIo: () => ReturnType,
        }
    }
}


export default Image.extend<ImageOptions>({
    name: 'drawIoExtension',

    addOptions() {
        return {
            inline: false,
            allowBase64: false,
            drawIoLink: url,
            baseImage: baseImage,
            width: '99vw',
            height = '99vh',
            openDialog: 'click',
            HTMLAttributes: {},
        }
    },

    addNodeView() {
        return ({editor, node, getPos, HTMLAttributes, decorations, extension}) => {
            const dom = document.createElement('img')
            dom.src = node.attrs.src;
            const {view} = editor;
            console.log({editor, node, getPos, HTMLAttributes, decorations, extension})
            const $this = this;
            dom.addEventListener(this.options.openDialog, (evt) => {
                const dialog = document.createElement('dialog');
                dialog.style.border = '0';
                dialog.style.padding = '0';

                const iframe = document.createElement('iframe');
                iframe.setAttribute('frameborder', '0');
                iframe.setAttribute('src', this.options.drawIoLink);
                iframe.style.width =  this.options.width;
                iframe.style.height = this.options.height;

                const source = evt.target as HTMLElement;
                dialog.appendChild(iframe);
                document.body.appendChild(dialog);

                dialog.showModal();
                const receive = (event) => {
                    if (event.data.length == 0) {
                        return null;
                    }
                    var msg = JSON.parse(event.data);
                    switch (msg.event) {
                        case 'init':
                            iframe.contentWindow.postMessage(JSON.stringify({
                                action: 'load',
                                xmlpng: source.getAttribute('src')
                            }), '*')
                            break;
                        case 'save':
                            iframe.contentWindow.postMessage(JSON.stringify({
                                action: 'export',
                                format: 'xmlpng',
                                spinKey: 'saving'
                            }), '*');
                            break;
                        case 'export':
                            // @ts-ignore
                            view.dispatch(view.state.tr.setNodeMarkup(getPos(), undefined, {
                                src: msg.data,
                            }))
                            break;
                        case 'exit':
                            window.removeEventListener('message', receive);
                            document.body.removeChild(dialog)
                            dialog.close()
                            break;
                    }
                }
                window.addEventListener('message', receive);
            })

            return {
                dom,
            }
        }
    },
    addCommands() {
        return {
            insertDrawIo: () => ({commands}) => {
                return commands.insertContent({
                    type: this.name,
                    attrs: {
                        src: this.options.baseImage,
                        alt: '',
                        title: ''
                    },
                })
            },
            update: (image) => ({commands}) => {
                return commands.updateAttributes({
                    src: image,
                    alt: '',
                    title: ''
                })
            },
        }
    },
})
