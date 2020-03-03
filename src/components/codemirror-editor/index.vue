<template>
    <div class="vue">
        <div class="codemirror">
          <!-- codemirror -->
          <codemirror v-model="code"
                      :options="cmOption"
                      @cursorActivity="onCmCursorActivity"
                      @ready="onCmReady"
                      @focus="onCmFocus"
                      @blur="onCmBlur"
                      @input="onCmCodeChange">
          </codemirror>
        </div>
      </div>
</template>
<script>
  import { codemirror } from 'vue-codemirror'
  // language
  import 'codemirror/mode/python/python.js'
  import 'codemirror/mode/php/php.js'
  import 'codemirror/mode/vue/vue.js'
  // require styles
  import 'codemirror/lib/codemirror.css'
  // theme css
  import 'codemirror/theme/base16-dark.css'
  // active-line.js
  import 'codemirror/addon/selection/active-line.js'
  // styleSelectedText
  import 'codemirror/addon/selection/mark-selection.js'
  import 'codemirror/addon/search/searchcursor.js'
  // highlightSelectionMatches
  import 'codemirror/addon/scroll/annotatescrollbar.js'
  import 'codemirror/addon/search/matchesonscrollbar.js'
  import 'codemirror/addon/search/searchcursor.js'
  import 'codemirror/addon/search/match-highlighter.js'
  // keyMap
  import 'codemirror/mode/clike/clike.js'
  import 'codemirror/addon/edit/matchbrackets.js'
  import 'codemirror/addon/comment/comment.js'
  import 'codemirror/addon/dialog/dialog.js'
  import 'codemirror/addon/dialog/dialog.css'
  import 'codemirror/addon/search/searchcursor.js'
  import 'codemirror/addon/search/search.js'
  import 'codemirror/keymap/sublime.js'
  // foldGutter
  import 'codemirror/addon/fold/foldgutter.css'
  import 'codemirror/addon/fold/brace-fold.js'
  import 'codemirror/addon/fold/comment-fold.js'
  import 'codemirror/addon/fold/foldcode.js'
  import 'codemirror/addon/fold/foldgutter.js'
  import 'codemirror/addon/fold/indent-fold.js'
  import 'codemirror/addon/fold/markdown-fold.js'
  import 'codemirror/addon/fold/xml-fold.js'
  export default {
    name: 'CodeMirrorEditor',
    data() {
      return {}
    },
    props: {
      code: {
        type: String,
        defualt: '',
      },
      mode: {
        type: String,
        defualt: 'php'
      }
    },
    watch: {},
    computed: {
      cmOption: {
        get() {
          let option = {
          tabSize: 4,
          foldGutter: true,
          styleActiveLine: true,
          lineNumbers: true,
          line: true,
          mode: this.mode,
          keyMap: "sublime",
          theme: 'base16-dark',
          extraKeys: {
              'F11'(cm) {
                cm.setOption("fullScreen", !cm.getOption("fullScreen"))
              },
              'Esc'(cm) {
                if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false)
              }
            }
          };
          return option;
        }
      }
    },
    methods: {
      onCmCursorActivity() {
        // window.console.log('onCmCursorActivity', )
      },
      onCmReady() {
        // window.console.log('onCmReady', )
      },
      onCmFocus() {
        // window.console.log('onCmFocus', )
      },
      onCmBlur() {
        // window.console.log('onCmBlur', )
      },
      onCmCodeChange(newCode) {
        // window.console.log('this is new code', newCode)
        this.$emit('update:code', newCode);
      }
    },
    components: {
        codemirror
    }
  }
</script>