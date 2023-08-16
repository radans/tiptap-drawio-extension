<template>
    <div>
        <button @click="editor.commands.insertDrawIo()">Insert diagram</button>
        <editor-content :editor="editor"/>
    </div>
</template>

<script>
import {Editor, EditorContent} from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import drawIoExtension from '@rcode-link/tiptap-drawio';
import image from './image.js';

export default {
    components: {
        EditorContent,
    },

    data() {
        return {
            editor: null,
        }
    },

    mounted() {
        this.editor = new Editor({
            content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
            extensions: [
                StarterKit,
                drawIoExtension.configure({
                    "drawIoLink": "https://embed.diagrams.net/?embed=1&ui=atlas&spin=1&modified=unsavedChanges&proto=json",
                    "baseImage": image,
                    "openDialog": 'dblclick'
                })
            ],
        })
    },

    beforeUnmount() {
        this.editor.destroy()
    },
}
</script>